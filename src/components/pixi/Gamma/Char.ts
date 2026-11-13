import type { CharSpawnData, ClipBindingData, CreatureMaterialData, ModelData, Quat, Vec3 } from "./Types";
import type { AnimatorRuntime, PropertyTarget } from "./Animator";
import GammaModel from "./Model";
import { qEuler } from "./Math";
import type { RendererRuntime } from "./Renderer";
import type { GammaNode } from "./Scene";

const IDENTITY: Quat = [0, 0, 0, 1];

interface SpawnRuntime {
	data: CharSpawnData;
	/** FSM node, effect is spawned when activated */
	fsm: GammaNode;
	root: GammaNode;
	point: GammaNode | null;
	scale: Vec3;
	wasActive: boolean;
	/** remaining lifetime in seconds, `0` when not spawned */
	remaining: number;
}

/**
 * Runtime of battle SD model (`char_*`).
 *
 * - `CreatureMatrial`: animated `_change` is applied to renderers of its material
 * - effects spawned by `PlayMakerFSM` (`CreateObject`) when FSM node is activated by clips,
 *   spawned hierarchy is converted as inactive child of root and placed at spawn point here
 *
 * Do not use `play`/`canPlay` of `GammaModel` (lobby touch reaction), drive `charAnimator` directly.
 */
export default class CharGammaModel extends GammaModel {
	private readonly spawns: SpawnRuntime[];

	constructor (data: ModelData) {
		super(data);

		// `CreatureMatrial.Update` applies `_change` every frame even without animation
		for (const cm of data.char?.cm ?? [])
			this.creatureMaterialRenderers(cm).forEach(r => r.setOverride(cm.n, 0, cm.v));

		this.spawns = (data.char?.fx ?? [])
			.filter(s => !!this.nodes[s.nd] && !!this.nodes[s.rt])
			.map(s => ({
				data: s,
				fsm: this.nodes[s.nd],
				root: this.nodes[s.rt],
				point: s.sp >= 0 ? this.nodes[s.sp] ?? null : null,
				scale: [...this.nodes[s.rt].localScale] as Vec3,
				wasActive: false,
				remaining: 0,
			}));
	}

	/** Animator of `CreatureAnimator` */
	public get charAnimator (): AnimatorRuntime | null {
		const an = this.data.char?.an ?? -1;
		return this.animators.find(a => a.node.index === an) ?? this.mainAnimator;
	}

	//#region CreatureMatrial
	/** Renderers under `CreatureAnimator` using material, `_listRenderer` of `CreatureMatrial` */
	private creatureMaterialRenderers (cm: CreatureMaterialData): RendererRuntime[] {
		const owner = this.nodes[this.data.char?.an ?? -1] ?? this.nodes[0];
		return this.renderers.filter(r => r.materials[0] === cm.m && r.node.isDescendantOf(owner));
	}

	protected override createMonoTarget (b: ClipBindingData, key: string): PropertyTarget | null {
		// called while constructing base, uses `data` and `renderers` only
		if (b.cls === "CreatureMatrial") {
			const cm = this.data.char?.cm?.find(c => c.nd === b.nd);
			if (!cm || b.a !== "_change") return null;

			const renderers = this.creatureMaterialRenderers(cm);
			return {
				key, kind: "float", size: 1,
				read: () => [renderers[0]?.overrides.get(cm.n)?.[0] ?? cm.v],
				write: v => renderers.forEach(r => r.setOverride(cm.n, 0, v[0])),
			};
		}
		return super.createMonoTarget(b, key);
	}
	//#endregion

	//#region effect spawns
	private place (s: SpawnRuntime) {
		const d = s.data;
		const pos: Vec3 = s.point ? s.point.position : [0, 0, 0];
		if (d.p) {
			pos[0] += d.p[0];
			pos[1] += d.p[1];
			pos[2] += d.p[2];
		}
		s.root.position = pos;
		s.root.rotation = d.r ? qEuler(d.r[0], d.r[1], d.r[2]) : s.point ? s.point.rotation : IDENTITY;
	}

	private spawn (s: SpawnRuntime) {
		const root = s.root;
		root.localScale = [s.scale[0] * s.data.s, s.scale[1] * s.data.s, s.scale[2] * s.data.s];
		this.place(s);
		root.activeSelf = true;

		// restart even if previous one is still alive (game spawns another instance)
		for (const ps of this.particles)
			if (ps.node.isDescendantOf(root)) ps.restart();
		for (const a of this.animators)
			if (a.node.isDescendantOf(root)) a.restart();

		s.remaining = Math.max(0.01, s.data.lt);
	}

	/** Remove spawned effects */
	public clearEffects () {
		for (const s of this.spawns) {
			s.remaining = 0;
			s.root.activeSelf = false;
		}
	}

	protected override afterAnimators (dt: number) {
		for (const s of this.spawns) {
			// `PlayMakerFSM` starts on `OnEnable`
			const active = s.fsm.activeInHierarchy;
			if (active && !s.wasActive) this.spawn(s);
			s.wasActive = active;

			if (s.remaining <= 0) continue;
			s.remaining -= dt;
			if (s.remaining <= 0) {
				s.remaining = 0;
				s.root.activeSelf = false;
			} else if (s.data.at)
				this.place(s); // `SetParent` to spawn point
		}
	}

	/** Whether node is a part of spawned effect */
	public isEffectNode (node: GammaNode): boolean {
		return this.spawns.some(s => node.isDescendantOf(s.root));
	}
	//#endregion
}
