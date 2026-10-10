// Simplified Unity `ParticleSystem` (Shuriken)
import type {
	Color, GradientData, MeshData, MinMaxCurveData, MinMaxGradientData,
	ModelData, ParticleRendererData, ParticleSystemData, Vec3,
} from "./Types";
import {
	Deg2Rad, clamp01, evaluateCurve, lerp, m4Vector,
	qEuler, qRotate,
	v3Add, v3Length, v3Lerp, v3Normalize, v3Scale,
} from "./Math";
import type { GammaNode } from "./Scene";
import { GeometryBuffer, RendererRuntime } from "./Renderer";

const GRAVITY = -9.81;
const PREWARM_STEP = 1 / 30;

const enum Shape {
	Sphere = 0,
	SphereShell = 1,
	Hemisphere = 2,
	HemisphereShell = 3,
	Cone = 4,
	Box = 5,
	ConeShell = 7,
	ConeVolume = 8,
	ConeVolumeShell = 9,
	Circle = 10,
	CircleEdge = 11,
	SingleSidedEdge = 12,
	BoxShell = 15,
	BoxEdge = 16,
	Donut = 17,
	Rectangle = 18,
}

const enum RenderMode {
	Billboard = 0,
	Mesh = 4,
}

//#region evaluators
export function evalMinMax (c: MinMaxCurveData, t: number, rnd: number): number {
	if (typeof c === "number") return c;
	if (Array.isArray(c)) return lerp(c[0], c[1], rnd);
	const max = evaluateCurve(c.k, t);
	if (!c.k2) return c.s * max;
	return c.s * lerp(evaluateCurve(c.k2, t), max, rnd);
}

function evalGradient (g: GradientData, t: number): Color {
	const pick = <T extends number[]> (keys: T[], size: number): number[] => {
		if (keys.length === 0) return new Array(size).fill(1);
		if (t <= keys[0][0]) return keys[0].slice(1);
		for (let i = 0; i < keys.length - 1; i++) {
			const a = keys[i], b = keys[i + 1];
			if (t <= b[0]) {
				if (g.m === 1) return b.slice(1);
				const r = b[0] > a[0] ? (t - a[0]) / (b[0] - a[0]) : 0;
				return a.slice(1).map((v, k) => lerp(v, b[k + 1], r));
			}
		}
		return keys[keys.length - 1].slice(1);
	};
	const c = pick(g.c as number[][], 3);
	const a = pick(g.a as number[][], 1);
	return [c[0], c[1], c[2], a[0]];
}

export function evalMinMaxGradient (g: MinMaxGradientData, t: number, rnd: number): Color {
	switch (g.m) {
		case 0: return [...(g.c ?? [1, 1, 1, 1])];
		case 2: {
			const a = g.c2 ?? [1, 1, 1, 1], b = g.c ?? [1, 1, 1, 1];
			return [lerp(a[0], b[0], rnd), lerp(a[1], b[1], rnd), lerp(a[2], b[2], rnd), lerp(a[3], b[3], rnd)];
		}
		case 1: return g.g ? evalGradient(g.g, t) : [1, 1, 1, 1];
		case 3: {
			const a = g.g2 ? evalGradient(g.g2, t) : [1, 1, 1, 1];
			const b = g.g ? evalGradient(g.g, t) : [1, 1, 1, 1];
			return [lerp(a[0], b[0], rnd), lerp(a[1], b[1], rnd), lerp(a[2], b[2], rnd), lerp(a[3], b[3], rnd)];
		}
		case 4: return g.g ? evalGradient(g.g, rnd) : [1, 1, 1, 1];
	}
	return [1, 1, 1, 1];
}
//#endregion

function randomUnit (): Vec3 {
	const z = Math.random() * 2 - 1;
	const a = Math.random() * Math.PI * 2;
	const r = Math.sqrt(1 - z * z);
	return [r * Math.cos(a), r * Math.sin(a), z];
}

interface Particle {
	position: Vec3;
	velocity: Vec3;
	age: number;
	life: number;
	size: number;
	sizeY: number;
	rotation: number;
	rotationSign: number;
	color: Color;
	/** random seeds for "random between" curves */
	r0: number;
	r1: number;
	r2: number;
}

export class ParticleSystemRuntime {
	public readonly node: GammaNode;
	private readonly particles: Particle[] = [];

	private time = 0;
	private delay = 0;
	private emitAccumulator = 0;
	private bursts: Array<{ next: number; remaining: number; }> = [];
	private playing = false;
	private wasActive = false;

	/** animatable properties (data is shared between instances) */
	public looping: boolean;
	public shapeRadius: number;

	constructor (public readonly data: ParticleSystemData, nodes: GammaNode[]) {
		this.node = nodes[data.nd];
		this.looping = data.lp;
		this.shapeRadius = data.sh.r;
	}

	public get active (): boolean {
		return this.node.activeInHierarchy;
	}

	private get worldSpace (): boolean {
		return this.data.ws === 1;
	}

	public restart () {
		this.particles.length = 0;
		this.time = 0;
		this.emitAccumulator = 0;
		this.delay = evalMinMax(this.data.dl, 0, Math.random());
		this.resetBursts();
		this.playing = true;

		if (this.data.pw && this.looping) {
			this.delay = 0;
			for (let t = 0; t < this.data.dur; t += PREWARM_STEP)
				this.simulate(PREWARM_STEP);
		}
	}

	private resetBursts () {
		this.bursts = this.data.em.bu.map(b => ({ next: b[0], remaining: Math.max(1, b[2]) }));
	}

	private emitPoint (): { position: Vec3; direction: Vec3; } {
		const sh = this.data.sh;
		let p: Vec3 = [0, 0, 0];
		let d: Vec3 = [0, 0, 1];

		if (sh.en) {
			const r = this.shapeRadius;
			const arc = sh.arc * Deg2Rad;
			const thick = (radius: number) => radius * (1 - sh.rth * (1 - Math.sqrt(Math.random())));
			switch (sh.ty) {
				case Shape.Sphere:
				case Shape.SphereShell:
				case Shape.Hemisphere:
				case Shape.HemisphereShell: {
					d = randomUnit();
					if (sh.ty === Shape.Hemisphere || sh.ty === Shape.HemisphereShell)
						d[2] = Math.abs(d[2]);
					const len = sh.ty === Shape.SphereShell || sh.ty === Shape.HemisphereShell
						? r
						: r * (1 - sh.rth * (1 - Math.cbrt(Math.random())));
					p = v3Scale(d, len);
					break;
				}
				case Shape.Cone:
				case Shape.ConeShell:
				case Shape.ConeVolume:
				case Shape.ConeVolumeShell: {
					const a = Math.random() * arc;
					const shell = sh.ty === Shape.ConeShell || sh.ty === Shape.ConeVolumeShell;
					const rr = shell ? r : thick(r);
					const ca = Math.cos(a), sa = Math.sin(a);
					p = [ca * rr, sa * rr, 0];
					const spread = Math.sin(sh.an * Deg2Rad) * (r > 0 ? rr / r : 1);
					d = v3Normalize([ca * spread, sa * spread, Math.cos(sh.an * Deg2Rad)]);
					if (sh.ty === Shape.ConeVolume || sh.ty === Shape.ConeVolumeShell)
						p = v3Add(p, v3Scale(d, sh.len * Math.random()));
					break;
				}
				case Shape.Box:
				case Shape.BoxShell:
				case Shape.BoxEdge:
					p = [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5];
					break;
				case Shape.Circle:
				case Shape.CircleEdge:
				case Shape.Donut: {
					const a = Math.random() * arc;
					const rr = sh.ty === Shape.CircleEdge ? r : thick(r);
					d = [Math.cos(a), Math.sin(a), 0];
					p = v3Scale(d, rr);
					break;
				}
				case Shape.SingleSidedEdge:
					p = [(Math.random() * 2 - 1) * r, 0, 0];
					d = [0, 1, 0];
					break;
				case Shape.Rectangle:
					p = [Math.random() - 0.5, Math.random() - 0.5, 0];
					break;
			}

			if (sh.rd > 0) d = v3Normalize(v3Lerp(d, randomUnit(), sh.rd));
			if (sh.sd > 0 && v3Length(p) > 0) d = v3Normalize(v3Lerp(d, v3Normalize(p), sh.sd));
			if (sh.rp > 0) p = v3Add(p, v3Scale(randomUnit(), sh.rp * Math.random()));

			const q = qEuler(sh.rot[0], sh.rot[1], sh.rot[2]);
			p = v3Add(qRotate(q, [p[0] * sh.sc[0], p[1] * sh.sc[1], p[2] * sh.sc[2]]), sh.p);
			d = v3Normalize(qRotate(q, d));
		}
		return { position: p, direction: d };
	}

	private emit (count: number) {
		const init = this.data.init;
		const nt = this.data.dur > 0 ? clamp01(this.time / this.data.dur) : 0;
		for (let i = 0; i < count; i++) {
			if (this.particles.length >= init.mx) return;

			const { position, direction } = this.emitPoint();
			const speed = evalMinMax(init.sp, nt, Math.random());
			let pos = position;
			let vel = v3Scale(direction, speed);
			if (this.worldSpace) {
				pos = this.node.transformPoint(pos);
				vel = this.node.transformVector(vel);
			}

			const size = evalMinMax(init.sz, nt, Math.random());
			this.particles.push({
				position: pos,
				velocity: vel,
				age: 0,
				life: Math.max(1e-3, evalMinMax(init.lt, nt, Math.random())),
				size,
				sizeY: init.s3 ? evalMinMax(init.szy, nt, Math.random()) : size,
				rotation: evalMinMax(init.rot, nt, Math.random()),
				rotationSign: Math.random() < init.rrd ? -1 : 1,
				color: evalMinMaxGradient(init.c, nt, Math.random()),
				r0: Math.random(),
				r1: Math.random(),
				r2: Math.random(),
			});
		}
	}

	/**
	 * Vector conversions between local and world simulation space include transform scale
	 * (Hierarchy scaling), `TransformDirection` would ignore scale of parents.
	 */
	private toWorld (v: Vec3): Vec3 {
		return this.node.transformVector(v);
	}
	private toLocal (v: Vec3): Vec3 {
		return m4Vector(this.node.worldInverse, v);
	}

	/** Emit bursts scheduled in `[from, to]` of current cycle */
	private emitBursts (from: number, to: number, nt: number) {
		this.data.em.bu.forEach((b, i) => {
			const state = this.bursts[i];
			while (state && state.remaining > 0 && state.next >= from && state.next <= to + 1e-6) {
				if (Math.random() <= b[4])
					this.emit(Math.round(evalMinMax(b[1], nt, Math.random())));
				state.remaining--;
				state.next += Math.max(b[3], 1e-3);
			}
		});
	}

	private simulate (dt: number) {
		const d = this.data;

		// emission
		if (this.playing) {
			if (this.delay > 0)
				this.delay -= dt;
			else {
				const prev = this.time;
				this.time += dt;
				const nt = d.dur > 0 ? clamp01(this.time / d.dur) : 0;

				if (d.em.en) {
					this.emitAccumulator += evalMinMax(d.em.rt, nt, Math.random()) * dt;
					const n = Math.floor(this.emitAccumulator);
					if (n > 0) {
						this.emitAccumulator -= n;
						this.emit(n);
					}
					this.emitBursts(prev, Math.min(this.time, d.dur), nt);
				}

				if (this.time >= d.dur) {
					if (this.looping) {
						// next cycle, bursts placed on beginning of cycle are emitted on this frame
						this.time = d.dur > 0 ? this.time % d.dur : 0;
						this.resetBursts();
						if (d.em.en) this.emitBursts(-1, this.time, 0);
					} else
						this.playing = false;
				}
			}
		}

		// particles
		const gravityLocal = this.worldSpace ? null : this.toLocal([0, 1, 0]);
		for (let i = this.particles.length - 1; i >= 0; i--) {
			const p = this.particles[i];
			p.age += dt;
			if (p.age >= p.life) {
				this.particles.splice(i, 1);
				continue;
			}
			const t = p.age / p.life;

			const g = evalMinMax(d.init.gr, t, p.r0) * GRAVITY * dt;
			if (g !== 0) {
				const gd: Vec3 = gravityLocal ? gravityLocal : [0, 1, 0];
				p.velocity = v3Add(p.velocity, v3Scale(gd, g));
			}

			if (d.fo) {
				let f: Vec3 = [evalMinMax(d.fo.x, t, p.r0), evalMinMax(d.fo.y, t, p.r1), evalMinMax(d.fo.z, t, p.r2)];
				if (d.fo.ws !== this.worldSpace)
					f = d.fo.ws ? this.toLocal(f) : this.toWorld(f);
				p.velocity = v3Add(p.velocity, v3Scale(f, dt));
			}

			if (d.clv) {
				const limit = evalMinMax(d.clv.mg, t, p.r0);
				const len = v3Length(p.velocity);
				if (len > limit && len > 0)
					p.velocity = v3Scale(p.velocity, lerp(len, limit, d.clv.dp) / len);
			}

			let vel = p.velocity;
			if (d.vel) {
				let v: Vec3 = [evalMinMax(d.vel.x, t, p.r0), evalMinMax(d.vel.y, t, p.r1), evalMinMax(d.vel.z, t, p.r2)];
				if (d.vel.ws !== this.worldSpace)
					v = d.vel.ws ? this.toLocal(v) : this.toWorld(v);
				vel = v3Scale(v3Add(vel, v), evalMinMax(d.vel.sm, t, p.r0));
			}
			p.position = v3Add(p.position, v3Scale(vel, dt));

			if (d.rot)
				p.rotation += evalMinMax(d.rot, t, p.r1) * dt * p.rotationSign;
		}
	}

	public update (dt: number) {
		const active = this.active;
		if (active !== this.wasActive) {
			this.wasActive = active;
			if (active)
				this.restart(); // play on awake
			else {
				this.particles.length = 0;
				this.playing = false;
			}
		}
		if (!active) return;

		this.simulate(dt * this.data.spd);
	}

	/** Write particle quads/meshes into geometry, returns false if nothing to draw */
	public fill (g: GeometryBuffer, renderer: ParticleRendererData, mesh: MeshData | null): boolean {
		const list = this.particles;
		if (renderer.rm === RenderMode.Mesh && !mesh) {
			g.ensure(0, 0); // mesh render mode without mesh draws nothing (Unity behaviour)
			return false;
		}
		const isMesh = renderer.rm === RenderMode.Mesh;
		const mv = isMesh ? mesh!.v.length / 3 : 4;
		const mi = isMesh ? mesh!.i[0] ?? [] : [0, 1, 2, 0, 2, 3];
		const muv = isMesh ? mesh!.uv : [0, 1, 1, 1, 1, 0, 0, 0];

		const maxCount = Math.min(list.length, Math.floor(65535 / mv));
		g.ensure(maxCount * mv, maxCount * mi.length);
		if (maxCount === 0) return false;

		const d = this.data;
		const world = this.node.world;
		const scale = Math.abs(this.node.lossyScale[0]) || 1;
		const sizeScale = d.scm === 0 ? scale : 1;
		const uv = d.uv;
		const tiles = uv ? Math.max(1, uv.tx) * (uv.at === 1 ? 1 : Math.max(1, uv.ty)) : 1;

		const pos = g.positions, uvs = g.uvs, col = g.colors, idx = g.indices;
		for (let n = 0; n < maxCount; n++) {
			const p = list[n];
			const t = p.age / p.life;

			let center: Vec3 = p.position;
			if (!this.worldSpace) {
				center = [
					world[0] * center[0] + world[4] * center[1] + world[8] * center[2] + world[12],
					world[1] * center[0] + world[5] * center[1] + world[9] * center[2] + world[13],
					world[2] * center[0] + world[6] * center[1] + world[10] * center[2] + world[14],
				];
			}

			let sx = p.size * sizeScale, sy = p.sizeY * sizeScale;
			if (d.sz) {
				const k = evalMinMax(d.sz.c, t, p.r0);
				sx *= k;
				sy *= d.sz.sa ? evalMinMax(d.sz.y, t, p.r0) : k;
			}

			const c = d.col ? evalMinMaxGradient(d.col, t, p.r1) : [1, 1, 1, 1];
			const r = p.color[0] * c[0], gg = p.color[1] * c[1], b = p.color[2] * c[2], a = p.color[3] * c[3];

			// texture sheet
			let u0 = 0, v0 = 0, us = 1, vs = 1;
			if (uv) {
				const ft = (t * uv.cy) % 1;
				const frame = Math.min(tiles - 1, Math.floor(
					clamp01(evalMinMax(uv.fot, ft, p.r2)) * tiles + evalMinMax(uv.sf, 0, p.r2) * tiles,
				) % tiles);
				const tx = Math.max(1, uv.tx), ty = Math.max(1, uv.ty);
				us = 1 / tx;
				vs = 1 / ty;
				const col2 = frame % tx;
				const row = uv.at === 1 ? uv.ri : Math.floor(frame / tx);
				u0 = col2 * us;
				v0 = row * vs;
			}

			const rot = -p.rotation;
			const cr = Math.cos(rot), sr = Math.sin(rot);
			const base = n * mv;
			for (let i = 0; i < mv; i++) {
				let lx: number, ly: number;
				if (isMesh) {
					lx = mesh!.v[i * 3] * sx;
					ly = mesh!.v[i * 3 + 1] * sy;
				} else {
					lx = ((i === 1 || i === 2) ? 0.5 : -0.5) * sx;
					ly = ((i >= 2) ? 0.5 : -0.5) * sy;
					lx -= renderer.pv[0] * sx;
					ly -= renderer.pv[1] * sy;
				}
				const o = (base + i) * 2;
				pos[o] = center[0] + lx * cr - ly * sr;
				pos[o + 1] = center[1] + lx * sr + ly * cr;

				uvs[o] = u0 + muv[i * 2] * us;
				uvs[o + 1] = v0 + muv[i * 2 + 1] * vs;

				const co = (base + i) * 4;
				col[co] = r;
				col[co + 1] = gg;
				col[co + 2] = b;
				col[co + 3] = a;
			}
			for (let i = 0; i < mi.length; i++)
				idx[n * mi.length + i] = base + mi[i];
		}
		g.ensure(maxCount * mv, maxCount * mi.length);
		g.staticVersion++;
		return true;
	}
}

export class ParticleRendererRuntime extends RendererRuntime {
	public system: ParticleSystemRuntime | null = null;
	private readonly mesh: MeshData | null;

	constructor (index: number, data: ParticleRendererData, model: ModelData, nodes: GammaNode[]) {
		super(index, data, model, nodes);
		this.mesh = data.me >= 0 ? model.mesh[data.me] ?? null : null;
		this.items.push({
			renderer: this,
			submesh: 0,
			geometry: new GeometryBuffer(),
			visible: false,
			material: this.materials[0] ?? -1,
			texture: -1,
		});
	}

	public build () {
		const item = this.items[0];
		item.material = this.materials[0] ?? -1;
		item.texture = this.material(0)?.t._MainTex ?? -1;
		item.visible = this.visible && !!this.system
			&& this.system.fill(item.geometry, this.data as ParticleRendererData, this.mesh);
		this.sortZ = this.node.position[2];
	}
}
