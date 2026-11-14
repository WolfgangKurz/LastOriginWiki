import type { AlphaMaskData, CharSpawnData, ClipBindingData, CreatureMaterialData, ModelData, Quat, Vec3 } from "./Types";
import type { AnimatorRuntime, PropertyTarget } from "./Animator";
import GammaModel from "./Model";
import { qEuler } from "./Math";
import type { RendererRuntime } from "./Renderer";
import type { GammaNode } from "./Scene";

const IDENTITY: Quat = [0, 0, 0, 1];

/** Shaders masked by `ToJ.Mask` (`_maskedSpriteWorldCoordsShader` and others) */
const ALPHA_MASKED_SHADERS = new Set([
	"LO Alpha Masked/Sprites Alpha Masked - World Coords",
	"LO Alpha Masked/Sprites Alpha Masked Additive - World Coords",
]);

interface AlphaMaskRuntime {
	data: AlphaMaskData;
	node: GammaNode;
	/** `mainTextureScale` / `mainTextureOffset` of mask material */
	st: [number, number, number, number];
	/** renderers in parent hierarchy of mask using masked materials */
	targets: RendererRuntime[];
}

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
	private readonly alphaMasks: AlphaMaskRuntime[];

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

		this.alphaMasks = (data.char?.am ?? [])
			.filter(m => !!this.nodes[m.nd])
			.map(m => {
				const node = this.nodes[m.nd];
				const maskRenderer = this.renderers.find(r => r.node === node);
				const st = maskRenderer?.property("_MainTex_ST") ?? [1, 1, 0, 0];
				const parent = node.parent;
				const targets = parent
					? this.renderers.filter(r => r.node !== node && r.node.isDescendantOf(parent) &&
						r.materials.some(mi => ALPHA_MASKED_SHADERS.has(data.mat[mi]?.sh ?? "")))
					: [];
				return { data: m, node, st: [st[0], st[1], st[2], st[3]], targets };
			});
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

		for (const m of this.alphaMasks) this.updateAlphaMask(m);
	}

	/**
	 * `ToJ.Mask.Update` (Z mapping axis): `_AlphaTex` is mapped onto mask quad in world space,
	 * shader rotates world position by `_MaskRotation` then applies `_AlphaTex_ST`.
	 */
	private updateAlphaMask (m: AlphaMaskRuntime) {
		const node = m.node;
		if (!node.activeInHierarchy || m.targets.length === 0) return;

		const lossy = node.lossyScale;
		const pos = node.position;
		const sign = m.data.inv ? -1 : 1;
		const angle = sign * node.eulerAngles[2]; // degrees

		const sx = (1 / (lossy[0] || 1)) * m.st[0] * sign;
		const sy = (1 / (lossy[1] || 1)) * m.st[1];
		const vx = -pos[0], vy = -pos[1];
		const r = -angle * Math.PI / 180;
		const s = Math.sin(r), c = Math.cos(r);
		const ox = (c * vx - s * vy) * sx + 0.5 * m.st[0] + m.st[2];
		const oy = (s * vx + c * vy) * sy + 0.5 * m.st[1] + m.st[3];
		const rotation = angle * Math.PI / 180;

		for (const t of m.targets) {
			t.setOverride("_AlphaTex_ST", 0, sx);
			t.setOverride("_AlphaTex_ST", 1, sy);
			t.setOverride("_AlphaTex_ST", 2, ox);
			t.setOverride("_AlphaTex_ST", 3, oy);
			t.setOverride("_MaskRotation", 0, rotation);
		}
	}

	/** Whether node is a part of spawned effect */
	public isEffectNode (node: GammaNode): boolean {
		return this.spawns.some(s => node.isDescendantOf(s.root));
	}
	//#endregion
}
