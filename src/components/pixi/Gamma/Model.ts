import type { ClipBindingData, ClipEventData, ModelData, Vec3 } from "./Types";
import { AnimatorRuntime, PropertyTarget } from "./Animator";
import { DynamicBone, DynamicBoneCollider } from "./DynamicBone";
import { m4Point, m4Vector, v3Lerp } from "./Math";
import { ParticleRendererRuntime, ParticleSystemRuntime } from "./Particles";
import { Puppet2DGlobalControl, Puppet2DIKHandle, Puppet2DSplineControl } from "./Puppet2D";
import {
	DrawItem, MeshRendererRuntime, RendererRuntime, SpriteRendererRuntime,
} from "./Renderer";
import { GammaNode, buildScene } from "./Scene";

/** Clip name keywords of touch reaction animations, same as Unity viewer */
const TOUCH_CLIP_KEYWORDS = ["tep", "touch", "tap", "click", "breast", "chest"];
/** Collider name keywords of special touch */
const SPECIAL_TARGETS = ["special", "chest"];

export const TRIGGER_NORMAL_TOUCH = "Tep_1";
export const TRIGGER_SPECIAL_TOUCH = "breast";

const DEFAULT_RENDER_QUEUE = 3000;

export interface TouchAnimationInfo {
	/** seconds since started */
	elapsed: number;
	/** length in seconds */
	duration: number;
}

export interface GammaModelEvents {
	onTouchAnimationStart?: (info: TouchAnimationInfo) => void;
	onTouchAnimationEnd?: () => void;
}

interface Collider {
	node: GammaNode;
	enabled: boolean;
	center: Vec3;
	size: Vec3;
}

/** Runtime of converted Unity 2D model */
export default class GammaModel {
	public readonly data: ModelData;
	public readonly nodes: GammaNode[];
	public readonly renderers: RendererRuntime[];
	public readonly animators: AnimatorRuntime[];
	public readonly colliders: Collider[];

	private readonly dynamicBones: DynamicBone[];
	private readonly dbColliders: DynamicBoneCollider[];
	private readonly ikHandles: Puppet2DIKHandle[];
	private readonly splines: Puppet2DSplineControl[];
	private readonly puppets: Puppet2DGlobalControl[];
	private readonly particles: ParticleSystemRuntime[];

	private readonly faceRenderer: SpriteRendererRuntime | null;
	private readonly faceOriginal: number;
	private changeInfoOn: { sp: [Vec3, Vec3] | null; rt: [Vec3, Vec3] | null; } | null = null;

	private readonly drawItems: DrawItem[];
	private touchAnimating = false;
	private lastAnimationElapsed = 0;

	public events: GammaModelEvents = {};

	constructor (data: ModelData) {
		this.data = data;
		this.nodes = buildScene(data.node);

		// Unity viewer placed the model at origin with unit scale
		if (this.nodes[0]) {
			this.nodes[0].localPosition = [0, 0, 0];
			this.nodes[0].localScale = [1, 1, 1];
		}

		// renderers
		this.renderers = data.ren.map((r, i) => {
			switch (r.k) {
				case "sp": return new SpriteRendererRuntime(i, r, data, this.nodes);
				case "ps": return new ParticleRendererRuntime(i, r, data, this.nodes);
				default: return new MeshRendererRuntime(i, r, data, this.nodes);
			}
		});
		for (const r of this.renderers) {
			// Puppet2D control gizmo, hidden by Unity viewer too
			if (r instanceof SpriteRendererRuntime && r.spriteData()?.n === "IKControl")
				r.forceHidden = true;
		}
		this.drawItems = this.renderers.flatMap(r => r.items);

		this.faceRenderer = data.face >= 0 ? this.renderers[data.face] as SpriteRendererRuntime : null;
		this.faceOriginal = this.faceRenderer?.sprite ?? -1;

		// particles
		this.particles = data.ps.map(p => new ParticleSystemRuntime(p, this.nodes));
		for (const r of this.renderers) {
			if (r instanceof ParticleRendererRuntime)
				r.system = this.particles.find(p => p.node === r.node) ?? null;
		}

		this.colliders = data.col.map(c => ({
			node: this.nodes[c.nd],
			enabled: c.en,
			center: c.c,
			size: c.s,
		}));

		// components
		this.dbColliders = data.dbc.map(c => new DynamicBoneCollider(this.nodes[c.nd], c));
		this.dynamicBones = data.db.map(d => new DynamicBone(d, this.nodes, this.dbColliders));
		this.ikHandles = data.p2d.ik.map(d => new Puppet2DIKHandle(d, this.nodes));
		this.splines = data.p2d.spl.map(d => new Puppet2DSplineControl(d, this.nodes));
		this.puppets = data.p2d.g.map(d => new Puppet2DGlobalControl(
			d,
			this.nodes,
			d.ik.map(i => this.ikHandles[i]).filter(x => !!x),
			d.spl.map(i => this.splines[i]).filter(x => !!x),
		));

		// animators, captures default values on bind
		this.animators = data.anim
			.filter(a => a.ct >= 0)
			.map(a => {
				const anim = new AnimatorRuntime(
					this.nodes[a.nd],
					a,
					data.ctrl[a.ct],
					data.clip,
					b => this.createTarget(b),
				);
				anim.onEvent = (animator, ev) => this.onAnimationEvent(animator, ev);
				return anim;
			});

		// `ActorPartsView.Awake/Start`
		this.initChangeInfo();
		const parts = data.parts;
		if (parts) {
			if (parts.bg.length > 0) this.setBgView(false);
			this.setPartsView(parts.do);
			if (parts.p2.length > 0) this.setParts2View(parts.do2);
		}

		// `DynamicBone.Start`
		for (const db of this.dynamicBones) db.setupParticles();

		// `Actor.Start`
		const main = this.mainAnimator;
		if (main && main.hasParameter("Face_On")) main.setTrigger("Face_On");
	}

	/** First animator in hierarchy, `GetComponentInChildren<Animator>()` */
	public get mainAnimator (): AnimatorRuntime | null {
		return this.animators[0] ?? null;
	}

	//#region animation targets
	private rendererOf (node: number, kind: string): RendererRuntime | null {
		return this.renderers.find(r => r.data.nd === node && r.data.k === kind) ?? null;
	}

	private createTarget (b: ClipBindingData): PropertyTarget | null {
		const key = `${b.nd}|${b.c}|${b.cls ?? ""}|${b.a}`;
		const node = this.nodes[b.nd];
		if (!node) return null;

		const float = (size: number, read: () => ArrayLike<number>, write: (v: ArrayLike<number>) => void): PropertyTarget => ({
			key, kind: "float", size,
			read: () => Array.from(read()),
			write,
		});
		const discrete = (read: () => number, write: (v: number) => void): PropertyTarget => ({
			key, kind: "discrete", size: 1,
			read: () => [read()],
			write: v => write(v[0]),
		});

		switch (b.c) {
			case "t":
				if (b.a === "p") return float(3, () => node.localPosition, v => node.localPosition = [v[0], v[1], v[2]]);
				if (b.a === "s") return float(3, () => node.localScale, v => node.localScale = [v[0], v[1], v[2]]);
				if (b.a === "r") {
					return {
						key, kind: "quat", size: 4,
						read: () => [...node.localRotation],
						write: v => node.localRotation = [v[0], v[1], v[2], v[3]],
					};
				}
				return null;

			case "go":
				return discrete(() => (node.activeSelf ? 1 : 0), v => node.activeSelf = v > 0.5);

			case "sp":
			case "sk":
			case "me":
			case "ps": {
				const r = this.rendererOf(b.nd, b.c);
				if (!r) return null;

				if (b.a === "m_Enabled")
					return discrete(() => (r.enabled ? 1 : 0), v => r.enabled = v > 0.5);
				if (b.a === "m_SortingOrder")
					return discrete(() => r.sortingOrder, v => r.sortingOrder = Math.round(v));
				if (b.a === "m_Materials")
					return discrete(() => r.materials[0] ?? -1, v => r.materials[0] = v);

				if (b.a.startsWith("mat:")) {
					const m = /^mat:(.+?)(?:\.([rgbaxyzw]))?$/.exec(b.a);
					if (!m) return null;
					const prop = m[1];
					const comp = m[2] ? "xyzw".indexOf(m[2]) >= 0 ? "xyzw".indexOf(m[2]) : "rgba".indexOf(m[2]) : 0;
					return float(1, () => [r.property(prop)?.[comp] ?? 0], v => r.setOverride(prop, comp, v[0]));
				}

				if (r instanceof SpriteRendererRuntime) {
					const cm = /^m_Color\.([rgba])$/.exec(b.a);
					if (cm) {
						const ci = "rgba".indexOf(cm[1]);
						return float(1, () => [r.color[ci]], v => r.color[ci] = v[0]);
					}
					if (b.a === "m_FlipX") return discrete(() => (r.flipX ? 1 : 0), v => r.flipX = v > 0.5);
					if (b.a === "m_FlipY") return discrete(() => (r.flipY ? 1 : 0), v => r.flipY = v > 0.5);
					if (b.a === "m_Sprite") return discrete(() => r.sprite, v => r.sprite = Math.round(v));
				}

				if (r instanceof MeshRendererRuntime && b.a.startsWith("bs:")) {
					const i = parseInt(b.a.slice(3), 10);
					if (i >= r.blendWeights.length) return null;
					return float(1, () => [r.blendWeights[i]], v => r.blendWeights[i] = v[0]);
				}
				return null;
			}

			case "pss": {
				const ps = this.particles.find(p => p.node.index === b.nd);
				if (!ps) return null;
				if (b.a === "looping")
					return discrete(() => (ps.looping ? 1 : 0), v => ps.looping = v > 0.5);
				if (b.a === "ShapeModule.radius.value")
					return float(1, () => [ps.shapeRadius], v => ps.shapeRadius = v[0]);
				return null;
			}

			case "mb":
				return this.createMonoTarget(b, key);
		}
		return null;
	}

	private createMonoTarget (b: ClipBindingData, key: string): PropertyTarget | null {
		const float = <T> (obj: T, field: keyof T): PropertyTarget => ({
			key, kind: "float", size: 1,
			read: () => [obj[field] as unknown as number],
			write: v => (obj[field] as unknown as number) = v[0],
		});
		const discrete = <T> (obj: T, field: keyof T): PropertyTarget => ({
			key, kind: "discrete", size: 1,
			read: () => [obj[field] ? 1 : 0],
			write: v => (obj[field] as unknown as boolean) = v[0] > 0.5,
		});
		const vector = <T> (obj: T, field: keyof T, axis: number): PropertyTarget => ({
			key, kind: "float", size: 1,
			read: () => [(obj[field] as unknown as Vec3)[axis]],
			write: v => (obj[field] as unknown as Vec3)[axis] = v[0],
		});
		const axisOf = (a: string) => "xyz".indexOf(a.slice(-1));

		switch (b.cls) {
			case "DynamicBone": {
				const db = this.dynamicBones.find(d => d.node.index === b.nd);
				if (!db) return null;
				switch (b.a) {
					case "m_Enabled": return discrete(db, "enabled");
					case "m_Damping": return float(db, "damping");
					case "m_Elasticity": return float(db, "elasticity");
					case "m_Stiffness": return float(db, "stiffness");
					case "m_Inert": return float(db, "inert");
					case "m_Radius": return float(db, "radius");
					case "m_EndLength": return float(db, "endLength");
					case "m_UpdateRate": return float(db, "updateRate");
					case "m_Weight": return float(db, "weight");
					case "RefreshParam": return discrete(db, "refreshParam");
					case "IsTransFormCalculate": return discrete(db, "isTransformCalculate");
				}
				if (b.a.startsWith("m_Force.")) return vector(db, "force", axisOf(b.a));
				if (b.a.startsWith("m_Gravity.")) return vector(db, "gravity", axisOf(b.a));
				return null;
			}
			case "DynamicBoneCollider": {
				const c = this.dbColliders.find(d => d.node.index === b.nd);
				if (!c) return null;
				switch (b.a) {
					case "m_Enabled": return discrete(c, "enabled");
					case "m_Radius": return float(c, "radius");
					case "m_Height": return float(c, "height");
				}
				if (b.a.startsWith("m_Center.")) return vector(c, "center", axisOf(b.a));
				return null;
			}
			case "Puppet2D_IKHandle": {
				const ik = this.ikHandles.find(d => d.node.index === b.nd);
				if (!ik) return null;
				switch (b.a) {
					case "m_Enabled": return discrete(ik, "enabled");
					case "Flip": return discrete(ik, "flip");
					case "SquashAndStretch": return discrete(ik, "squashAndStretch");
					case "Scale": return discrete(ik, "scale");
				}
				return null;
			}
			case "Puppet2D_GlobalControl": {
				const g = this.puppets.find(d => d.node.index === b.nd);
				if (!g) return null;
				switch (b.a) {
					case "m_Enabled": return discrete(g, "enabled");
					case "ControlsEnabled": return discrete(g, "controlsEnabled");
				}
				return null;
			}
		}
		return null;
	}

	private onAnimationEvent (animator: AnimatorRuntime, ev: ClipEventData) {
		if (ev.fn === "EventDynamicBone") {
			// `ActorAnimator.EventDynamicBone`, DynamicBones in children of animator
			for (const db of this.dynamicBones) {
				if (db.node.name === ev.s && db.node.isDescendantOf(animator.node))
					db.eventReset();
			}
		}
	}
	//#endregion

	//#region ActorPartsView
	private initChangeInfo () {
		const ci = this.data.parts?.ci;
		if (!ci) return;
		const sp = ci.sp >= 0 ? this.nodes[ci.sp] : null;
		const rt = ci.rt >= 0 ? this.nodes[ci.rt] : null;
		this.changeInfoOn = {
			sp: sp ? [[...sp.localPosition], [...sp.localScale]] : null,
			rt: rt ? [[...rt.localPosition], [...rt.localScale]] : null,
		};
	}

	private setChangeInfo (on: boolean) {
		const parts = this.data.parts;
		const ci = parts?.ci;
		if (!parts || !ci || parts.bg.length === 0 || !this.changeInfoOn) return;

		const sp = ci.sp >= 0 ? this.nodes[ci.sp] : null;
		const rt = ci.rt >= 0 ? this.nodes[ci.rt] : null;
		if (on) {
			if (sp && this.changeInfoOn.sp) [sp.localPosition, sp.localScale] = this.changeInfoOn.sp;
			if (rt && this.changeInfoOn.rt) [rt.localPosition, rt.localScale] = this.changeInfoOn.rt;
		} else {
			if (sp) [sp.localPosition, sp.localScale] = [ci.spp, ci.sps];
			if (rt) [rt.localPosition, rt.localScale] = [ci.rtp, ci.rts];
		}
	}

	public get hasParts (): boolean {
		const p = this.data.parts;
		return !!p && (p.p.length > 0 || (p.sw && (p.swa.length > 0 || p.swd.length > 0)));
	}
	public get hasParts2 (): boolean {
		return (this.data.parts?.p2.length ?? 0) > 0;
	}
	public get hasBg (): boolean {
		return (this.data.parts?.bg.length ?? 0) > 0;
	}

	public setPartsView (active: boolean) {
		const p = this.data.parts;
		if (!p) return;
		if (!p.sw) {
			p.p.forEach(n => this.nodes[n].activeSelf = active);
			return;
		}
		p.swa.forEach(n => this.nodes[n].activeSelf = active);
		p.swd.forEach(n => this.nodes[n].activeSelf = !active);
	}
	public setParts2View (active: boolean) {
		this.data.parts?.p2.forEach(n => this.nodes[n].activeSelf = active);
	}
	public setBgView (active: boolean) {
		this.data.parts?.bg.forEach(n => this.nodes[n].activeSelf = active);
		this.setChangeInfo(active);
	}
	public setDialogParts (deactive: boolean) {
		this.data.parts?.dd.forEach(n => this.nodes[n].activeSelf = !deactive);
	}
	//#endregion

	//#region face
	public get faceList (): string[] {
		return this.data.faces.map(f => f.n);
	}

	public setFace (face: string): boolean {
		if (!this.faceRenderer) return false;
		const key = face.toLowerCase();
		const f = this.data.faces.find(x => x.n.toLowerCase() === key);
		if (!f) return false;
		this.faceRenderer.sprite = f.sp >= 0 ? f.sp : this.faceOriginal;
		return true;
	}
	//#endregion

	//#region touch
	/** Raycast colliders at Unity world position, returns hit nodes */
	public raycast (x: number, y: number): GammaNode[] {
		const hits: GammaNode[] = [];
		for (const c of this.colliders) {
			if (!c.enabled || !c.node.activeInHierarchy) continue;

			const inv = c.node.worldInverse;
			const o = m4Point(inv, [x, y, 0]);
			const d = m4Vector(inv, [0, 0, 1]);

			let tmin = -Infinity, tmax = Infinity;
			let hit = true;
			for (let k = 0; k < 3; k++) {
				const min = c.center[k] - Math.abs(c.size[k]) / 2;
				const max = c.center[k] + Math.abs(c.size[k]) / 2;
				if (Math.abs(d[k]) < 1e-12) {
					if (o[k] < min || o[k] > max) {
						hit = false;
						break;
					}
					continue;
				}
				let t1 = (min - o[k]) / d[k];
				let t2 = (max - o[k]) / d[k];
				if (t1 > t2) [t1, t2] = [t2, t1];
				tmin = Math.max(tmin, t1);
				tmax = Math.min(tmax, t2);
				if (tmin > tmax) {
					hit = false;
					break;
				}
			}
			if (hit) hits.push(c.node);
		}
		return hits;
	}

	/** Touch test like Unity viewer, returns trigger name to play */
	public touch (x: number, y: number): string | null {
		const hits = this.raycast(x, y);
		if (hits.length === 0) return null;
		if (hits.some(n => SPECIAL_TARGETS.some(s => n.name.toLowerCase().includes(s))))
			return TRIGGER_SPECIAL_TOUCH;
		return TRIGGER_NORMAL_TOUCH;
	}

	public get isTouchAnimating (): boolean {
		return this.touchAnimating;
	}

	/**
	 * Set trigger to main animator, returns `true` if animation started.
	 * Accepted only when every layer using the trigger can react now (not on intro etc.),
	 * otherwise layers would play out of sync (e.g. face reacts but body keeps intro).
	 */
	public play (trigger: string): boolean {
		if (!this.canPlay(trigger)) return false;

		const anim = this.mainAnimator!;
		anim.setTrigger(trigger);
		const started = anim.evaluateTransitions();
		if (!started) anim.resetTrigger(trigger);
		return started;
	}

	/** Whether `trigger` is accepted by `play` right now */
	public canPlay (trigger: string): boolean {
		const anim = this.mainAnimator;
		if (!anim || !anim.hasParameter(trigger)) return false;

		// do not interrupt touch reaction, same as Unity viewer
		const current = anim.stateInfo(0);
		if (current && this.isTouchClip(current.clip)) return false;

		return anim.canRespond(trigger);
	}

	/**
	 * Progress of non-looping animation which can not be interrupted by touch (intro, touch reaction, ...),
	 * `null` on idle or touchable
	 */
	public touchAnimationInfo (): TouchAnimationInfo | null {
		if (this.canPlay(TRIGGER_NORMAL_TOUCH) || this.canPlay(TRIGGER_SPECIAL_TOUCH)) return null;

		const p = this.mainAnimator?.oneShotProgress();
		return p ? { elapsed: p.elapsed, duration: p.length } : null;
	}

	private isTouchClip (name: string): boolean {
		const n = name.toLowerCase();
		return TOUCH_CLIP_KEYWORDS.some(k => n.includes(k));
	}

	private checkTouchAnimation () {
		const info = this.touchAnimationInfo();
		const restarted = !!info && this.touchAnimating && info.elapsed < this.lastAnimationElapsed - 1e-3;
		if (!!info !== this.touchAnimating || restarted) {
			this.touchAnimating = !!info;
			if (info)
				this.events.onTouchAnimationStart?.(info);
			else
				this.events.onTouchAnimationEnd?.();
		}
		this.lastAnimationElapsed = info?.elapsed ?? 0;
	}
	//#endregion

	private applyConstraints () {
		for (const c of this.data.pc) {
			if (!c.en || !c.ac) continue;
			const node = this.nodes[c.nd];
			if (!node.activeInHierarchy) continue;

			let sw = 0;
			const sum: Vec3 = [0, 0, 0];
			for (const [si, w] of c.src) {
				if (si < 0 || w === 0) continue; // negative weight is used for extrapolation
				const p = this.nodes[si].position;
				sum[0] += p[0] * w;
				sum[1] += p[1] * w;
				sum[2] += p[2] * w;
				sw += w;
			}
			if (sw === 0) continue;

			const target: Vec3 = [sum[0] / sw + c.of[0], sum[1] / sw + c.of[1], sum[2] / sw + c.of[2]];
			const cur = node.position;
			const blended = v3Lerp(cur, target, c.w);
			for (let k = 0; k < 3; k++)
				if (!(c.ax & (1 << k))) blended[k] = cur[k];
			node.position = blended;
		}
	}

	/** Advance one frame, same order as Unity player loop */
	public update (dt: number) {
		dt = Math.max(0, Math.min(dt, 0.1));

		// Update
		for (const db of this.dynamicBones) db.update();
		for (const p of this.puppets)
			if (!p.lateUpdate && p.active) p.run();

		// Animator
		for (const a of this.animators) a.update(dt);
		this.checkTouchAnimation();

		// constraints & particles (PreLateUpdate)
		this.applyConstraints();
		for (const ps of this.particles) ps.update(dt);

		// LateUpdate
		for (const p of this.puppets)
			if (p.lateUpdate && p.active) p.run();
		for (const db of this.dynamicBones) db.lateUpdate(dt);

		// render
		for (const r of this.renderers) r.build();
	}

	/** Visible draw items sorted by Unity transparent order */
	public sortedDrawItems (): DrawItem[] {
		const mats = this.data.mat;
		const queue = (item: DrawItem) => {
			const q = item.material >= 0 ? mats[item.material]?.q ?? -1 : -1;
			return q >= 0 ? q : DEFAULT_RENDER_QUEUE;
		};
		return this.drawItems
			.filter(i => i.visible)
			.sort((a, b) => {
				const ra = a.renderer, rb = b.renderer;
				if (ra.sortingLayer !== rb.sortingLayer) return ra.sortingLayer - rb.sortingLayer;
				if (ra.sortingOrder !== rb.sortingOrder) return ra.sortingOrder - rb.sortingOrder;
				const qa = queue(a), qb = queue(b);
				if (qa !== qb) return qa - qb;
				if (ra.sortZ !== rb.sortZ) return rb.sortZ - ra.sortZ; // far to near
				if (ra.index !== rb.index) return ra.index - rb.index;
				return a.submesh - b.submesh;
			});
	}

	public get allDrawItems (): readonly DrawItem[] {
		return this.drawItems;
	}
}
