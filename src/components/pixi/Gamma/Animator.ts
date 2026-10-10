import type {
	AnimatorData, ClipBindingData, ClipData, ClipEventData, ConditionData,
	ControllerData, LayerData, Quat, StateData, StateMachineData, TransitionData,
} from "./Types";
import { CompiledCurve, compileCurve } from "./Curve";
import { qEuler, qInverse, qMul, qNlerp, qNormalize } from "./Math";
import type { GammaNode } from "./Scene";

//#region Property targets
export type TargetKind = "float" | "quat" | "discrete";

/** Animated property of scene, created by model */
export interface PropertyTarget {
	readonly key: string;
	readonly kind: TargetKind;
	/** component count (1, 3 or 4) */
	readonly size: number;
	read (): number[];
	write (values: ArrayLike<number>): void;
}

export type TargetFactory = (binding: ClipBindingData) => PropertyTarget | null;
//#endregion

const MAX_SIZE = 4;

interface CompiledBinding {
	target: number;
	/** euler curve -> quaternion */
	euler: boolean;
	curves: CompiledCurve[];
	pptr?: number[];
}

interface CompiledClip {
	data: ClipData;
	bindings: CompiledBinding[];
	/** first frame values for additive layers */
	reference: Float64Array | null;
}

/** Evaluated values of targets with stamp to know which targets are written */
class SampleBuffer {
	public readonly values: Float64Array;
	public readonly stamp: Uint32Array;
	public frame = 1;

	constructor (count: number) {
		this.values = new Float64Array(count * MAX_SIZE);
		this.stamp = new Uint32Array(count);
	}

	public begin () {
		this.frame++;
	}
	public has (i: number): boolean {
		return this.stamp[i] === this.frame;
	}
}

const CONDITION_IF = 1;
const CONDITION_IFNOT = 2;
const CONDITION_GREATER = 3;
const CONDITION_LESS = 4;
const CONDITION_EQUALS = 6;
const CONDITION_NOTEQUAL = 7;

const PARAM_FLOAT = 1;
const PARAM_INT = 3;
const PARAM_TRIGGER = 9;

const SELECTOR_BASE = 30000;

interface Parameter {
	type: number;
	value: number;
}

interface PlayingState {
	index: number;
	/** normalized time */
	time: number;
	/** seconds since entered */
	elapsed: number;
}

export type AnimationEventHandler = (animator: AnimatorRuntime, ev: ClipEventData) => void;

class StateMachineRuntime {
	public current: PlayingState;
	public next: PlayingState | null = null;
	private transitionElapsed = 0;
	private transitionDuration = 0;

	/** updated on this frame already (shared by synchronized layers) */
	public frame = -1;

	constructor (
		private readonly owner: AnimatorRuntime,
		public readonly data: StateMachineData,
	) {
		const def = this.resolve(SELECTOR_BASE, 0) ?? data.def;
		this.current = { index: data.st[def] ? def : -1, time: 0, elapsed: 0 };
	}

	/** State machine without valid state (empty layer) */
	public get empty (): boolean {
		return !this.data.st[this.current.index];
	}

	public get transitionWeight (): number {
		if (!this.next) return 0;
		return this.transitionDuration <= 0 ? 1 : Math.min(1, this.transitionElapsed / this.transitionDuration);
	}

	private stateLength (index: number): number {
		const st = this.data.st[index];
		const clip = this.owner.clipOf(st.mo[0] ?? -1);
		return clip && clip.data.len > 0 ? clip.data.len : 1;
	}

	private stateSpeed (st: StateData): number {
		const p = st.spp ? this.owner.getParameter(st.spp) : 1;
		return st.sp * p;
	}

	/** Resolve selector destination into state index */
	private resolve (dest: number, depth: number): number | null {
		if (dest < SELECTOR_BASE) return this.data.st[dest] ? dest : null;
		if (depth > 8) return null;

		const sel = this.data.sel[dest - SELECTOR_BASE];
		if (!sel) return null;
		for (const t of sel.tr) {
			if (this.owner.checkConditions(t.co)) {
				const r = this.resolve(t.d, depth + 1);
				if (r !== null) return r;
			}
		}
		return null;
	}

	/** Whether any transition of this machine uses `trigger` */
	public usesTrigger (trigger: string): boolean {
		const has = (t: TransitionData) => t.co.some(c => c[1] === trigger);
		return this.data.any.some(has) || this.data.st.some(st => st.tr.some(has));
	}

	/** Whether setting `trigger` starts a transition immediately on current state */
	public canRespond (trigger: string): boolean {
		if (this.next || this.empty) return false;

		const check = (t: TransitionData, isAny: boolean) => {
			if (t.he || !t.co.some(c => c[1] === trigger)) return false;
			if (isAny && !t.cs && this.resolve(t.d, 0) === this.current.index) return false;
			return this.owner.checkConditions(t.co, trigger);
		};
		return this.data.any.some(t => check(t, true))
			|| this.data.st[this.current.index].tr.some(t => check(t, false));
	}

	private transientEnds = new Map<number, number | null>();

	/** Unconditional exit time transitions of state, state leaves by itself through them */
	private autoExits (index: number): TransitionData[] {
		return this.data.st[index]?.tr.filter(t => t.he && t.co.length === 0) ?? [];
	}

	/**
	 * Normalized exit time of looping state which is played only once (e.g. intro looks like idle),
	 * `null` if state stays or comes back by itself (idle, idle variations cycling each other)
	 */
	private transientEnd (index: number): number | null {
		if (this.transientEnds.has(index)) return this.transientEnds.get(index)!;

		const exits = this.autoExits(index);
		let ret: number | null = null;
		if (exits.length > 0) {
			// follow unconditional transitions, reaching itself again means cycling idle
			const visited = new Set<number>();
			const queue = exits.map(t => this.resolve(t.d, 0));
			let cyclic = false;
			while (queue.length > 0) {
				const i = queue.pop()!;
				if (i === null || visited.has(i)) continue;
				if (i === index) {
					cyclic = true;
					break;
				}
				visited.add(i);
				queue.push(...this.autoExits(i).map(t => this.resolve(t.d, 0)));
			}
			if (!cyclic) ret = exits.reduce((p, c) => Math.min(p, c.et), Infinity);
		}

		this.transientEnds.set(index, ret);
		return ret;
	}

	/** Playing non-looping state (intro, touch reaction, ...) as `[elapsed, length]` in seconds */
	public oneShotProgress (sync: number): [elapsed: number, length: number] | null {
		const s = this.next ?? this.current;
		const st = this.data.st[s.index];
		if (!st) return null;

		let end = 1;
		if (st.lp) {
			end = this.transientEnd(s.index) ?? 0;
			if (end <= 0) return null;
		}

		const clip = this.owner.clipOf(st.mo[sync] ?? st.mo[0] ?? -1);
		if (!clip) return null;
		const clipLength = (clip.data.len || 1) / (Math.abs(this.stateSpeed(st)) || 1);
		const length = end * clipLength;
		const elapsed = Math.max(0, s.time) * clipLength;
		return elapsed < length ? [elapsed, length] : null;
	}

	private canTransition (t: TransitionData, state: PlayingState, prevTime: number, isAny: boolean): boolean {
		if (isAny && !t.cs) {
			const dest = this.resolve(t.d, 0);
			if (dest === state.index) return false;
		}

		if (t.he) {
			const st = this.data.st[state.index];
			const et = t.et;
			let passed = false;
			if (et < 1 && st.lp) {
				// fires on every loop at fraction `et`
				const k = Math.floor(prevTime - et) + 1;
				passed = prevTime < et + k && et + k <= state.time;
			} else
				passed = prevTime < et && et <= state.time;

			if (!passed) return false;
		} else if (t.co.length === 0)
			return false; // invalid transition

		return this.owner.checkConditions(t.co);
	}

	private start (t: TransitionData) {
		const dest = this.resolve(t.d, 0);
		if (dest === null) return;

		this.owner.consumeTriggers(t.co);

		const duration = t.fx
			? t.du
			: t.du * this.stateLength(this.current.index) / Math.max(1e-5, Math.abs(this.stateSpeed(this.data.st[this.current.index])));

		const state: PlayingState = { index: dest, time: t.of, elapsed: 0 };
		this.owner.onStateEnter(this, state);

		if (duration <= 0) {
			this.current = state;
			this.next = null;
		} else {
			this.next = state;
			this.transitionElapsed = 0;
			this.transitionDuration = duration;
		}
	}

	private advance (state: PlayingState, dt: number): number {
		const st = this.data.st[state.index];
		const prev = state.time;
		state.time += dt * this.stateSpeed(st) / this.stateLength(state.index);
		state.elapsed += dt;
		return prev;
	}

	/** Find and start transition, returns `true` if started */
	public evaluate (prevTime: number): boolean {
		if (this.next || this.empty) return false; // interruption is not supported

		for (const t of this.data.any) {
			if (this.canTransition(t, this.current, prevTime, true)) {
				this.start(t);
				return true;
			}
		}
		for (const t of this.data.st[this.current.index].tr) {
			if (this.canTransition(t, this.current, prevTime, false)) {
				this.start(t);
				return true;
			}
		}
		return false;
	}

	public update (dt: number) {
		if (this.empty) return;

		const cur = this.current;
		const prevCur = this.advance(cur, dt);
		this.owner.fireEvents(this, cur, prevCur);

		if (this.next) {
			const next = this.next;
			const prevNext = this.advance(next, dt);
			this.owner.fireEvents(this, next, prevNext);

			this.transitionElapsed += dt;
			if (this.transitionElapsed >= this.transitionDuration) {
				this.current = next;
				this.next = null;
			}
			return;
		}

		this.evaluate(prevCur);
	}
}

interface LayerRuntime {
	data: LayerData;
	machine: StateMachineRuntime;
	weight: number;
}

export class AnimatorRuntime {
	public readonly node: GammaNode;
	public readonly data: AnimatorData;
	public readonly controller: ControllerData;
	public enabled: boolean;

	private readonly params = new Map<string, Parameter>();
	private readonly targets: PropertyTarget[] = [];
	private readonly targetIndex = new Map<string, number>();
	private readonly defaults: Float64Array;
	private readonly current: Float64Array;
	private readonly clips = new Map<number, CompiledClip>();
	private readonly machines: StateMachineRuntime[];
	private readonly layers: LayerRuntime[];

	private readonly out: SampleBuffer;
	private readonly sampleA: SampleBuffer;
	private readonly sampleB: SampleBuffer;
	private readonly layerBase: Float64Array;
	private frame = 0;
	private readonly consumed = new Set<string>();

	public onEvent: AnimationEventHandler | null = null;
	public onStateChanged: ((animator: AnimatorRuntime, layer: number) => void) | null = null;

	constructor (
		node: GammaNode,
		data: AnimatorData,
		controller: ControllerData,
		clips: ClipData[],
		createTarget: TargetFactory,
	) {
		this.node = node;
		this.data = data;
		this.controller = controller;
		this.enabled = data.en;

		for (const p of controller.pa) {
			this.params.set(p.n, {
				type: p.ty,
				value: typeof p.d === "boolean" ? (p.d ? 1 : 0) : p.d,
			});
		}

		// compile clips used by controller and collect targets
		const used = new Set<number>();
		controller.sm.forEach(sm => sm.st.forEach(st => st.mo.forEach(m => m >= 0 && used.add(m))));
		used.forEach(ci => {
			const clip = clips[ci];
			const bindings: CompiledBinding[] = [];
			for (const b of clip.b) {
				const key = b.c === "t" && (b.a === "r" || b.a === "e")
					? `${b.nd}|t|r`
					: `${b.nd}|${b.c}|${b.cls ?? ""}|${b.a}`;

				let ti = this.targetIndex.get(key);
				if (ti === undefined) {
					const target = createTarget(b.c === "t" && b.a === "e" ? { ...b, a: "r" } : b);
					if (!target) continue;
					ti = this.targets.length;
					this.targets.push(target);
					this.targetIndex.set(key, ti);
				}
				bindings.push({
					target: ti,
					euler: b.c === "t" && b.a === "e",
					curves: b.cv.map(compileCurve),
					pptr: b.pp,
				});
			}
			this.clips.set(ci, { data: clip, bindings, reference: null });
		});

		const n = this.targets.length;
		this.defaults = new Float64Array(n * MAX_SIZE);
		this.current = new Float64Array(n * MAX_SIZE);
		this.targets.forEach((t, i) => {
			const v = t.read();
			for (let k = 0; k < t.size; k++)
				this.defaults[i * MAX_SIZE + k] = this.current[i * MAX_SIZE + k] = v[k];
		});

		this.out = new SampleBuffer(n);
		this.sampleA = new SampleBuffer(n);
		this.sampleB = new SampleBuffer(n);
		this.layerBase = new Float64Array(n * MAX_SIZE);

		this.machines = controller.sm.map(sm => new StateMachineRuntime(this, sm));
		this.layers = controller.ly.map((l, i) => ({
			data: l,
			machine: this.machines[l.sm],
			weight: i === 0 ? 1 : l.w,
		}));
	}

	//#region parameters
	public hasParameter (name: string): boolean {
		return this.params.has(name);
	}
	public getParameter (name: string): number {
		return this.params.get(name)?.value ?? 0;
	}
	public setParameter (name: string, value: number | boolean) {
		const p = this.params.get(name);
		if (!p) return;
		p.value = typeof value === "boolean" ? (value ? 1 : 0) : value;
		if (p.type === PARAM_INT) p.value = Math.round(p.value);
	}
	public setTrigger (name: string) {
		this.setParameter(name, true);
	}
	public resetTrigger (name: string) {
		this.setParameter(name, false);
	}

	/** `assumeTrigger` is treated as set, for checking without changing parameters */
	public checkConditions (conds: ConditionData[], assumeTrigger?: string): boolean {
		for (const [mode, name, threshold] of conds) {
			const p = this.params.get(name);
			const v = name === assumeTrigger ? 1 : p?.value ?? 0;
			switch (mode) {
				case CONDITION_IF:
					if (!v) return false;
					break;
				case CONDITION_IFNOT:
					if (v) return false;
					break;
				case CONDITION_GREATER:
					if (!(v > threshold)) return false;
					break;
				case CONDITION_LESS:
					if (!(v < threshold)) return false;
					break;
				case CONDITION_EQUALS:
					if (v !== threshold) return false;
					break;
				case CONDITION_NOTEQUAL:
					if (v === threshold) return false;
					break;
			}
		}
		return true;
	}
	/**
	 * Triggers used by transitions are reset after all layers are evaluated,
	 * same trigger can drive transitions of multiple layers on same frame (Unity behaviour)
	 */
	public consumeTriggers (conds: ConditionData[]) {
		for (const [, name] of conds) {
			const p = this.params.get(name);
			if (p && p.type === PARAM_TRIGGER) this.consumed.add(name);
		}
	}
	private flushTriggers () {
		for (const name of this.consumed) {
			const p = this.params.get(name);
			if (p) p.value = 0;
		}
		this.consumed.clear();
	}
	//#endregion

	//#region states
	public clipOf (index: number): CompiledClip | undefined {
		return index >= 0 ? this.clips.get(index) : undefined;
	}

	public onStateEnter (machine: StateMachineRuntime, state: PlayingState) {
		// fire events placed at the beginning of clip
		this.fireEvents(machine, state, state.time - 1e-6);
		const li = this.layers.findIndex(l => l.machine === machine);
		if (this.onStateChanged && li >= 0) this.onStateChanged(this, li);
	}

	public fireEvents (machine: StateMachineRuntime, state: PlayingState, prevTime: number) {
		if (!this.onEvent) return;

		const st = machine.data.st[state.index];
		if (!st) return;
		const clip = this.clipOf(st.mo[0] ?? -1);
		if (!clip || clip.data.ev.length === 0 || clip.data.len <= 0) return;

		const len = clip.data.len;
		for (const ev of clip.data.ev) {
			const en = (ev.t - clip.data.st) / len;
			if (st.lp) {
				const k = Math.floor(prevTime - en) + 1;
				for (let x = en + k; x <= state.time; x += 1)
					this.onEvent(this, ev);
			} else if (prevTime < en && en <= state.time)
				this.onEvent(this, ev);
		}
	}

	/** Current state info of layer */
	public stateInfo (layer = 0): { name: string; clip: string; time: number; elapsed: number; length: number; } | null {
		const l = this.layers[layer];
		if (!l) return null;
		const m = l.machine;
		const s = m.next ?? m.current;
		const st = m.data.st[s.index];
		if (!st) return null;
		const clip = this.clipOf(st.mo[l.data.sy] ?? -1);
		const speed = Math.abs(st.sp) || 1;
		return {
			name: st.n,
			clip: clip?.data.n ?? "",
			time: s.time,
			elapsed: s.elapsed,
			length: (clip?.data.len || 1) / speed,
		};
	}

	/** Whether every layer using `trigger` can react to it right now */
	public canRespond (trigger: string): boolean {
		const machines = [...new Set(this.layers.map(l => l.machine))].filter(m => m.usesTrigger(trigger));
		return machines.length > 0 && machines.every(m => m.canRespond(trigger));
	}

	/** Longest remaining non-looping state among layers, `null` if all layers are looping (idle) */
	public oneShotProgress (): { elapsed: number; length: number; } | null {
		let best: { elapsed: number; length: number; } | null = null;
		for (let i = 0; i < this.layers.length; i++) {
			const l = this.layers[i];
			if (i > 0 && l.weight <= 0) continue;
			const p = l.machine.oneShotProgress(l.data.sy);
			if (p && (!best || p[1] - p[0] > best.length - best.elapsed))
				best = { elapsed: p[0], length: p[1] };
		}
		return best;
	}

	/** Evaluate transitions immediately without advancing time (for triggers) */
	public evaluateTransitions (): boolean {
		let r = false;
		for (const m of this.machines)
			r = m.evaluate(m.current.time) || r;
		this.flushTriggers();
		return r;
	}
	//#endregion

	//#region sampling
	private sampleClip (clip: CompiledClip, time: number, buf: SampleBuffer) {
		const v = buf.values;
		for (const b of clip.bindings) {
			const o = b.target * MAX_SIZE;
			const target = this.targets[b.target];

			if (b.euler) {
				const q = qEuler(b.curves[0].evaluate(time), b.curves[1].evaluate(time), b.curves[2].evaluate(time));
				v[o] = q[0]; v[o + 1] = q[1]; v[o + 2] = q[2]; v[o + 3] = q[3];
			} else if (b.pptr) {
				const idx = Math.floor(b.curves[0].evaluate(time) + 1e-4);
				v[o] = b.pptr[Math.max(0, Math.min(b.pptr.length - 1, idx))] ?? -1;
			} else {
				for (let k = 0; k < b.curves.length; k++)
					v[o + k] = b.curves[k].evaluate(time);
				if (target.kind === "quat") {
					const q = qNormalize([v[o], v[o + 1], v[o + 2], v[o + 3]]);
					v[o] = q[0]; v[o + 1] = q[1]; v[o + 2] = q[2]; v[o + 3] = q[3];
				}
			}
			buf.stamp[b.target] = buf.frame;
		}
	}

	private clipTime (clip: CompiledClip, st: StateData, normalized: number): number {
		const len = clip.data.len;
		let t = normalized + st.co + (st.cop ? this.getParameter(st.cop) : 0);
		if (st.lp)
			t = t - Math.floor(t);
		else
			t = Math.max(0, Math.min(1, t));
		return clip.data.st + t * len;
	}

	private sampleState (machine: StateMachineRuntime, state: PlayingState, sync: number, buf: SampleBuffer): CompiledClip | null {
		buf.begin();
		const st = machine.data.st[state.index];
		if (!st) return null;
		const clip = this.clipOf(st.mo[sync] ?? -1);
		if (!clip) return null;
		this.sampleClip(clip, this.clipTime(clip, st, state.time), buf);
		return clip;
	}

	private referenceOf (clip: CompiledClip): Float64Array {
		if (!clip.reference) {
			const buf = new SampleBuffer(this.targets.length);
			buf.begin();
			this.sampleClip(clip, clip.data.st, buf);
			clip.reference = buf.values;
		}
		return clip.reference;
	}
	//#endregion

	public update (dt: number) {
		if (!this.enabled || !this.node.activeInHierarchy) return;
		this.frame++;

		// advance state machines (synchronized layers share machine)
		for (const l of this.layers) {
			if (l.machine.frame === this.frame) continue;
			l.machine.frame = this.frame;
			l.machine.update(dt);
		}
		this.flushTriggers();

		const n = this.targets.length;
		const out = this.out;
		const ov = out.values;
		out.begin();

		// write defaults
		const base = this.layers[0];
		const baseState = base?.machine.data.st[base.machine.current.index] ?? null;
		ov.set(baseState && !baseState.wd ? this.current : this.defaults);
		for (let i = 0; i < n; i++) out.stamp[i] = out.frame;

		const A = this.sampleA, B = this.sampleB;
		const av = A.values, bv = B.values;
		for (let li = 0; li < this.layers.length; li++) {
			const layer = this.layers[li];
			const weight = li === 0 ? 1 : layer.weight;
			if (weight <= 0) continue;

			const m = layer.machine;
			const sync = layer.data.sy;
			const clipA = this.sampleState(m, m.current, sync, A);
			let clipB: CompiledClip | null = null;
			const tw = m.transitionWeight;
			if (m.next) clipB = this.sampleState(m, m.next, sync, B);
			else B.begin();

			this.layerBase.set(ov);
			const additive = layer.data.bm === 1 && li > 0;

			for (let i = 0; i < n; i++) {
				const hasA = A.has(i), hasB = B.has(i);
				if (!hasA && !hasB) continue;

				const t = this.targets[i];
				const o = i * MAX_SIZE;

				// resolve layer value (crossfade)
				const lv = [0, 0, 0, 0];
				if (m.next) {
					const src = hasA ? av : (li === 0 ? this.defaults : this.layerBase);
					const dst = hasB ? bv : (li === 0 ? this.defaults : this.layerBase);
					if (t.kind === "quat") {
						const q = qNlerp(
							[src[o], src[o + 1], src[o + 2], src[o + 3]],
							[dst[o], dst[o + 1], dst[o + 2], dst[o + 3]],
							tw,
						);
						lv[0] = q[0]; lv[1] = q[1]; lv[2] = q[2]; lv[3] = q[3];
					} else if (t.kind === "discrete") {
						for (let k = 0; k < t.size; k++) lv[k] = tw < 0.5 ? src[o + k] : dst[o + k];
					} else {
						for (let k = 0; k < t.size; k++) lv[k] = src[o + k] + (dst[o + k] - src[o + k]) * tw;
					}
				} else {
					for (let k = 0; k < t.size; k++) lv[k] = av[o + k];
				}

				if (additive) {
					const clip = hasA ? clipA : clipB;
					const ref = clip ? this.referenceOf(clip) : null;
					if (!ref) continue;
					if (t.kind === "quat") {
						const delta = qMul(
							qInverse([ref[o], ref[o + 1], ref[o + 2], ref[o + 3]]),
							[lv[0], lv[1], lv[2], lv[3]],
						);
						const q = qNormalize(qMul(
							[ov[o], ov[o + 1], ov[o + 2], ov[o + 3]],
							qNlerp([0, 0, 0, 1], delta, weight),
						));
						ov[o] = q[0]; ov[o + 1] = q[1]; ov[o + 2] = q[2]; ov[o + 3] = q[3];
					} else if (t.kind === "float") {
						for (let k = 0; k < t.size; k++) ov[o + k] += (lv[k] - ref[o + k]) * weight;
					}
				} else if (weight >= 1) {
					for (let k = 0; k < t.size; k++) ov[o + k] = lv[k];
				} else if (t.kind === "quat") {
					const q = qNlerp([ov[o], ov[o + 1], ov[o + 2], ov[o + 3]], lv as Quat, weight);
					ov[o] = q[0]; ov[o + 1] = q[1]; ov[o + 2] = q[2]; ov[o + 3] = q[3];
				} else if (t.kind === "discrete") {
					if (weight >= 0.5)
						for (let k = 0; k < t.size; k++) ov[o + k] = lv[k];
				} else {
					for (let k = 0; k < t.size; k++) ov[o + k] += (lv[k] - ov[o + k]) * weight;
				}
			}
		}

		// apply, Animator writes all bound properties every frame
		this.current.set(ov);
		for (let i = 0; i < n; i++) {
			const o = i * MAX_SIZE;
			this.targets[i].write(ov.subarray(o, o + this.targets[i].size));
		}
	}
}
