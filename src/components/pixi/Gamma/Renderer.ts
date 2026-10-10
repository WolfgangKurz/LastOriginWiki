import type {
	Color, MaterialData, MeshData, ModelData, RendererData, SpriteData, Vec3,
} from "./Types";
import { Mat4, m4, m4FromArray, m4Mul } from "./Math";
import type { GammaNode } from "./Scene";

/** Growable vertex/index storage for a draw item */
export class GeometryBuffer {
	/** `[x, y, ...]` in model(world) space */
	public positions = new Float32Array(0);
	/** `[u, v, ...]` */
	public uvs = new Float32Array(0);
	/** `[r, g, b, a, ...]` */
	public colors = new Float32Array(0);
	public indices = new Uint16Array(0);

	public vertexCount = 0;
	public indexCount = 0;

	/** incremented when buffer arrays are re-allocated */
	public layoutVersion = 0;
	/** incremented when indices or uvs are changed */
	public staticVersion = 0;

	public ensure (vertexCount: number, indexCount: number) {
		let changed = false;
		if (this.positions.length < vertexCount * 2) {
			const cap = Math.max(vertexCount, Math.ceil(this.positions.length / 2 * 1.5));
			this.positions = new Float32Array(cap * 2);
			this.uvs = new Float32Array(cap * 2);
			this.colors = new Float32Array(cap * 4);
			changed = true;
		}
		if (this.indices.length < indexCount) {
			this.indices = new Uint16Array(Math.max(indexCount, Math.ceil(this.indices.length * 1.5)));
			changed = true;
		}
		if (changed) this.layoutVersion++;
		this.vertexCount = vertexCount;
		this.indexCount = indexCount;
	}
}

/** One draw call, (renderer, submesh) pair */
export interface DrawItem {
	readonly renderer: RendererRuntime;
	readonly submesh: number;
	readonly geometry: GeometryBuffer;
	visible: boolean;
	material: number;
	/** texture index for `_MainTex` */
	texture: number;
}

export type MaterialOverrides = Map<string, [number, number, number, number]>;

const WHITE: Color = [1, 1, 1, 1];

export abstract class RendererRuntime {
	public readonly index: number;
	public readonly node: GammaNode;
	public readonly data: RendererData;
	protected readonly model: ModelData;

	public enabled: boolean;
	public sortingOrder: number;
	public readonly sortingLayer: number;
	public materials: number[];
	/** per renderer material properties (`MaterialPropertyBlock`) */
	public readonly overrides: MaterialOverrides = new Map();
	/** hidden by viewer (Puppet2D control gizmos) */
	public forceHidden = false;

	public readonly items: DrawItem[] = [];
	/** world z of bounds center, for sorting */
	public sortZ = 0;

	constructor (index: number, data: RendererData, model: ModelData, nodes: GammaNode[]) {
		this.index = index;
		this.data = data;
		this.model = model;
		this.node = nodes[data.nd];
		this.enabled = data.en;
		this.sortingOrder = data.so;
		this.sortingLayer = data.sl;
		this.materials = [...data.m];
	}

	public get visible (): boolean {
		return this.enabled && !this.forceHidden && this.node.activeInHierarchy;
	}

	public material (submesh: number): MaterialData | null {
		const mi = this.materials[Math.min(submesh, this.materials.length - 1)];
		return mi >= 0 ? this.model.mat[mi] ?? null : null;
	}

	/** Material property including overrides */
	public property (name: string, submesh = 0): [number, number, number, number] | null {
		const o = this.overrides.get(name);
		if (o) return o;

		const m = this.material(submesh);
		if (!m) return null;
		if (name in m.c) return m.c[name] as [number, number, number, number];
		if (name in m.f) return [m.f[name], 0, 0, 0];
		if (name.endsWith("_ST")) {
			const st = m.st[name.slice(0, -3)];
			if (st) return [st[0], st[1], st[2], st[3]];
		}
		return null;
	}

	public setOverride (name: string, component: number, value: number) {
		let o = this.overrides.get(name);
		if (!o) {
			o = this.property(name) ? [...this.property(name)!] : [0, 0, 0, 0];
			this.overrides.set(name, o);
		}
		o[component] = value;
	}

	/** Update geometry of draw items, called every frame */
	public abstract build (): void;

	protected computeSortZ (geometry: Float32Array | number[], count: number, zs: number[]) {
		if (count === 0) {
			this.sortZ = this.node.position[2];
			return;
		}
		let min = Infinity, max = -Infinity;
		for (let i = 0; i < count; i++) {
			const z = zs[i];
			if (z < min) min = z;
			if (z > max) max = z;
		}
		this.sortZ = (min + max) / 2;
	}
}

export class SpriteRendererRuntime extends RendererRuntime {
	public sprite: number;
	public color: Color;
	public flipX: boolean;
	public flipY: boolean;

	private builtSprite = -2;
	private readonly zs: number[] = [];

	constructor (index: number, data: RendererData & { k: "sp"; }, model: ModelData, nodes: GammaNode[]) {
		super(index, data, model, nodes);
		this.sprite = data.sp;
		this.color = [...data.c];
		this.flipX = data.fx;
		this.flipY = data.fy;
		this.items.push({
			renderer: this,
			submesh: 0,
			geometry: new GeometryBuffer(),
			visible: false,
			material: this.materials[0] ?? -1,
			texture: -1,
		});
	}

	public override get visible (): boolean {
		return super.visible && this.sprite >= 0;
	}

	public spriteData (): SpriteData | null {
		return this.sprite >= 0 ? this.model.spr[this.sprite] ?? null : null;
	}

	public build () {
		const item = this.items[0];
		item.visible = this.visible;
		item.material = this.materials[0] ?? -1;
		if (!item.visible) return;

		const sp = this.spriteData()!;
		const g = item.geometry;
		const n = sp.v.length / 2;

		if (this.builtSprite !== this.sprite) {
			g.ensure(n, sp.i.length);
			g.uvs.set(sp.uv);
			g.indices.set(sp.i);
			g.staticVersion++;
			this.builtSprite = this.sprite;
			item.texture = sp.tx;
		}

		const m = this.node.world;
		const fx = this.flipX ? -1 : 1;
		const fy = this.flipY ? -1 : 1;
		const pos = g.positions;
		const zs = this.zs;
		for (let i = 0; i < n; i++) {
			const x = sp.v[i * 2] * fx;
			const y = sp.v[i * 2 + 1] * fy;
			pos[i * 2] = m[0] * x + m[4] * y + m[12];
			pos[i * 2 + 1] = m[1] * x + m[5] * y + m[13];
			zs[i] = m[2] * x + m[6] * y + m[14];
		}
		this.computeSortZ(pos, n, zs);

		const c = this.color;
		const col = g.colors;
		for (let i = 0; i < n; i++) {
			col[i * 4] = c[0];
			col[i * 4 + 1] = c[1];
			col[i * 4 + 2] = c[2];
			col[i * 4 + 3] = c[3];
		}
	}
}

export class MeshRendererRuntime extends RendererRuntime {
	public readonly mesh: MeshData | null;
	public readonly bones: Array<GammaNode | null>;
	public readonly blendWeights: number[];

	private readonly bindposes: Mat4[];
	private readonly skinMatrices: Mat4[];
	private readonly deformed: Float64Array;
	private readonly zs: number[] = [];
	private initialized = false;

	constructor (index: number, data: RendererData & { k: "sk" | "me"; }, model: ModelData, nodes: GammaNode[]) {
		super(index, data, model, nodes);
		this.mesh = data.me >= 0 ? model.mesh[data.me] ?? null : null;

		if (data.k === "sk") {
			this.bones = data.bo.map(i => (i >= 0 ? nodes[i] : null));
			this.blendWeights = this.mesh?.bs?.map((_, i) => data.bsw[i] ?? 0) ?? [];
		} else {
			this.bones = [];
			this.blendWeights = [];
		}

		this.bindposes = (this.mesh?.bp ?? []).map(m4FromArray);
		this.skinMatrices = this.bindposes.map(() => m4());
		this.deformed = new Float64Array(this.mesh ? this.mesh.v.length : 0);

		const subs = this.mesh?.i ?? [];
		subs.forEach((_, si) => {
			this.items.push({
				renderer: this,
				submesh: si,
				geometry: new GeometryBuffer(),
				visible: false,
				material: this.materials[Math.min(si, this.materials.length - 1)] ?? -1,
				texture: -1,
			});
		});
	}

	private get skinned (): boolean {
		return !!this.mesh?.bw && this.bones.length > 0 && this.bindposes.length > 0;
	}

	private initialize () {
		const mesh = this.mesh!;
		const n = mesh.v.length / 3;
		const cols = mesh.c;

		// submeshes share vertices, store full vertex buffer on each item
		for (const item of this.items) {
			const g = item.geometry;
			const idx = mesh.i[item.submesh];
			g.ensure(n, idx.length);
			g.uvs.set(mesh.uv);
			g.indices.set(idx);
			for (let i = 0; i < n; i++) {
				const c = cols ? cols.slice(i * 4, i * 4 + 4) : WHITE;
				g.colors[i * 4] = c[0];
				g.colors[i * 4 + 1] = c[1];
				g.colors[i * 4 + 2] = c[2];
				g.colors[i * 4 + 3] = c[3];
			}
			g.staticVersion++;

			const mat = this.material(item.submesh);
			item.texture = mat?.t._MainTex ?? -1;
		}
		this.initialized = true;
	}

	/** Apply blend shapes to base vertices */
	private deform (): Float64Array | number[] {
		const mesh = this.mesh!;
		const shapes = mesh.bs;
		if (!shapes || !this.blendWeights.some(w => w !== 0)) return mesh.v;

		const out = this.deformed;
		out.set(mesh.v);
		shapes.forEach((ch, ci) => {
			const w = this.blendWeights[ci];
			if (!w || ch.f.length === 0) return;

			// find frame segment
			let f0 = -1, f1 = 0, t = 0;
			const frames = ch.f;
			if (w <= frames[0].w) {
				f1 = 0;
				t = frames[0].w !== 0 ? w / frames[0].w : 0;
			} else {
				let k = 0;
				while (k < frames.length - 1 && frames[k + 1].w < w) k++;
				if (k >= frames.length - 1) {
					f0 = -1;
					f1 = frames.length - 1;
					t = w / frames[f1].w;
				} else {
					f0 = k;
					f1 = k + 1;
					t = (w - frames[k].w) / (frames[k + 1].w - frames[k].w);
				}
			}

			const add = (frame: number, scale: number) => {
				const fr = frames[frame];
				for (let i = 0; i < fr.i.length; i++) {
					const vi = fr.i[i] * 3;
					out[vi] += fr.dv[i * 3] * scale;
					out[vi + 1] += fr.dv[i * 3 + 1] * scale;
					out[vi + 2] += fr.dv[i * 3 + 2] * scale;
				}
			};
			if (f0 >= 0) {
				add(f0, 1 - t);
				add(f1, t);
			} else
				add(f1, t);
		});
		return out;
	}

	public build () {
		const visible = this.visible && !!this.mesh;
		for (const item of this.items) {
			item.visible = visible;
			item.material = this.materials[Math.min(item.submesh, this.materials.length - 1)] ?? -1;
			item.texture = this.material(item.submesh)?.t._MainTex ?? -1;
		}
		if (!visible || this.items.length === 0) return;
		if (!this.initialized) this.initialize();

		const mesh = this.mesh!;
		const verts = this.deform();
		const n = mesh.v.length / 3;
		const g = this.items[0].geometry;
		const pos = g.positions;
		const zs = this.zs;

		if (this.skinned) {
			const bw = mesh.bw!;
			const mats = this.skinMatrices;
			for (let b = 0; b < mats.length; b++) {
				const bone = this.bones[b];
				m4Mul(mats[b], bone ? bone.world : this.node.world, this.bindposes[b]);
			}

			for (let i = 0; i < n; i++) {
				const x = verts[i * 3], y = verts[i * 3 + 1], z = verts[i * 3 + 2];
				let ox = 0, oy = 0, oz = 0;
				for (let k = 0; k < 4; k++) {
					const w = bw[i * 8 + 4 + k];
					if (w === 0) continue;
					const m = mats[bw[i * 8 + k]];
					if (!m) continue;
					ox += (m[0] * x + m[4] * y + m[8] * z + m[12]) * w;
					oy += (m[1] * x + m[5] * y + m[9] * z + m[13]) * w;
					oz += (m[2] * x + m[6] * y + m[10] * z + m[14]) * w;
				}
				pos[i * 2] = ox;
				pos[i * 2 + 1] = oy;
				zs[i] = oz;
			}
		} else {
			const m = this.node.world;
			for (let i = 0; i < n; i++) {
				const x = verts[i * 3], y = verts[i * 3 + 1], z = verts[i * 3 + 2];
				pos[i * 2] = m[0] * x + m[4] * y + m[8] * z + m[12];
				pos[i * 2 + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
				zs[i] = m[2] * x + m[6] * y + m[10] * z + m[14];
			}
		}
		this.computeSortZ(pos, n, zs);

		for (let i = 1; i < this.items.length; i++)
			this.items[i].geometry.positions.set(pos.subarray(0, n * 2));
	}
}

export type Vec3Like = Readonly<Vec3>;
