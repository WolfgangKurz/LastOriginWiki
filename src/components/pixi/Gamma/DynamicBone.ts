import type { DynamicBoneColliderData, DynamicBoneData, Quat, Vec3 } from "./Types";
import {
	clamp01, evaluateCurve, lerp,
	m4Copy, m4, m4Point,
	qFromTo, qMul,
	v3Add, v3Dot, v3Length, v3Normalize, v3Scale, v3SqrLength, v3Sub,
} from "./Math";
import type { GammaNode } from "./Scene";

const enum FreezeAxis {
	None = 0,
	X = 1,
	Y = 2,
	Z = 3,
}

const enum Direction {
	X = 0,
	Y = 1,
	Z = 2,
}

const enum Bound {
	Outside = 0,
	Inside = 1,
}

export class DynamicBoneCollider {
	public enabled: boolean;
	public center: Vec3;
	public radius: number;
	public height: number;

	constructor (public readonly node: GammaNode, private readonly data: DynamicBoneColliderData) {
		this.enabled = data.en;
		this.center = [...data.c];
		this.radius = data.r;
		this.height = data.h;
	}

	public get active (): boolean {
		return this.enabled && this.node.activeInHierarchy;
	}

	public collide (p: Vec3, particleRadius: number): Vec3 {
		const node = this.node;
		const radius = this.radius * Math.abs(node.lossyScale[0]);
		const h = this.height * 0.5 - this.radius;
		const outside = this.data.bd === Bound.Outside;

		if (h <= 0) {
			const c = node.transformPoint(this.center);
			return outside
				? outsideSphere(p, particleRadius, c, radius)
				: insideSphere(p, particleRadius, c, radius);
		}

		const c0: Vec3 = [...this.center];
		const c1: Vec3 = [...this.center];
		const axis = this.data.dir === Direction.X ? 0 : this.data.dir === Direction.Y ? 1 : 2;
		c0[axis] -= h;
		c1[axis] += h;

		const p0 = node.transformPoint(c0);
		const p1 = node.transformPoint(c1);
		return outside
			? outsideCapsule(p, particleRadius, p0, p1, radius)
			: insideCapsule(p, particleRadius, p0, p1, radius);
	}
}

function outsideSphere (p: Vec3, pr: number, c: Vec3, r: number): Vec3 {
	const r2 = r + pr;
	const d = v3Sub(p, c);
	const len2 = v3SqrLength(d);
	if (len2 <= 0 || len2 >= r2 * r2) return p;
	return v3Add(c, v3Scale(d, r2 / Math.sqrt(len2)));
}
function insideSphere (p: Vec3, pr: number, c: Vec3, r: number): Vec3 {
	const r2 = r - pr;
	const d = v3Sub(p, c);
	const len2 = v3SqrLength(d);
	if (len2 <= r2 * r2) return p;
	return v3Add(c, v3Scale(d, r2 / Math.sqrt(len2)));
}
function outsideCapsule (p: Vec3, pr: number, c0: Vec3, c1: Vec3, r: number): Vec3 {
	const r2 = r + pr;
	const rr = r2 * r2;
	const dir = v3Sub(c1, c0);
	const d = v3Sub(p, c0);
	const t = v3Dot(d, dir);
	if (t <= 0) {
		const l2 = v3SqrLength(d);
		if (l2 <= 0 || l2 >= rr) return p;
		return v3Add(c0, v3Scale(d, r2 / Math.sqrt(l2)));
	}
	const dl = v3SqrLength(dir);
	if (t >= dl) {
		const d1 = v3Sub(p, c1);
		const l2 = v3SqrLength(d1);
		if (l2 <= 0 || l2 >= rr) return p;
		return v3Add(c1, v3Scale(d1, r2 / Math.sqrt(l2)));
	}
	if (dl <= 0) return p;
	const q = v3Sub(d, v3Scale(dir, t / dl));
	const l2 = v3SqrLength(q);
	if (l2 <= 0 || l2 >= rr) return p;
	const l = Math.sqrt(l2);
	return v3Add(p, v3Scale(q, (r2 - l) / l));
}
function insideCapsule (p: Vec3, pr: number, c0: Vec3, c1: Vec3, r: number): Vec3 {
	const r2 = r - pr;
	const rr = r2 * r2;
	const dir = v3Sub(c1, c0);
	const d = v3Sub(p, c0);
	const t = v3Dot(d, dir);
	if (t <= 0) {
		const l2 = v3SqrLength(d);
		if (l2 <= rr) return p;
		return v3Add(c0, v3Scale(d, r2 / Math.sqrt(l2)));
	}
	const dl = v3SqrLength(dir);
	if (t >= dl) {
		const d1 = v3Sub(p, c1);
		const l2 = v3SqrLength(d1);
		if (l2 <= rr) return p;
		return v3Add(c1, v3Scale(d1, r2 / Math.sqrt(l2)));
	}
	if (dl <= 0) return p;
	const q = v3Sub(d, v3Scale(dir, t / dl));
	const l2 = v3SqrLength(q);
	if (l2 <= rr) return p;
	const l = Math.sqrt(l2);
	return v3Add(p, v3Scale(q, (r2 - l) / l));
}

interface Particle {
	transform: GammaNode | null;
	parentIndex: number;
	damping: number;
	elasticity: number;
	stiffness: number;
	inert: number;
	radius: number;
	boneLength: number;
	position: Vec3;
	prevPosition: Vec3;
	endOffset: Vec3;
	initLocalPosition: Vec3;
	initLocalRotation: Quat;
}

export class DynamicBone {
	public readonly node: GammaNode;
	public readonly root: GammaNode | null;

	public enabled: boolean;
	public updateRate: number;
	public damping: number;
	public elasticity: number;
	public stiffness: number;
	public inert: number;
	public radius: number;
	public endLength: number;
	public endOffset: Vec3;
	public gravity: Vec3;
	public force: Vec3;
	public weight: number;
	public isTransformCalculate: boolean;
	public refreshParam: boolean;

	private readonly colliders: DynamicBoneCollider[];
	private readonly exclusions: Set<GammaNode>;

	private localGravity: Vec3 = [0, 0, 0];
	private objectMove: Vec3 = [0, 0, 0];
	private objectPrevPosition: Vec3 = [0, 0, 0];
	private boneTotalLength = 0;
	private objectScale = 1;
	private time = 0;
	private particles: Particle[] = [];
	private wasActive = false;

	constructor (
		private readonly data: DynamicBoneData,
		nodes: GammaNode[],
		colliders: DynamicBoneCollider[],
	) {
		this.node = nodes[data.nd];
		this.root = data.rt >= 0 ? nodes[data.rt] : null;
		this.enabled = data.en;
		this.updateRate = data.ur;
		this.damping = data.dm;
		this.elasticity = data.el;
		this.stiffness = data.sf;
		this.inert = data.in;
		this.radius = data.ra;
		this.endLength = data.eln;
		this.endOffset = [...data.eo];
		this.gravity = [...data.gr];
		this.force = [...data.fo];
		this.weight = data.w;
		this.isTransformCalculate = data.tc;
		this.refreshParam = data.rp;
		this.colliders = data.co.map(i => colliders[i]).filter(c => !!c);
		this.exclusions = new Set(data.ex.filter(i => i >= 0).map(i => nodes[i]));
	}

	public get active (): boolean {
		return this.enabled && this.node.activeInHierarchy;
	}

	/** `Start` */
	public setupParticles () {
		this.particles = [];
		if (!this.root) return;

		this.localGravity = this.root.inverseTransformDirection(this.gravity);
		this.objectScale = Math.abs(this.node.lossyScale[0]);
		this.objectPrevPosition = this.node.position;
		this.objectMove = [0, 0, 0];
		this.boneTotalLength = 0;
		this.appendParticles(this.root, -1, 0);
		this.updateParameters();
		this.wasActive = this.active;
	}

	private appendParticles (b: GammaNode | null, parentIndex: number, boneLength: number) {
		const p: Particle = {
			transform: b,
			parentIndex,
			damping: 0,
			elasticity: 0,
			stiffness: 0,
			inert: 0,
			radius: 0,
			boneLength: 0,
			position: [0, 0, 0],
			prevPosition: [0, 0, 0],
			endOffset: [0, 0, 0],
			initLocalPosition: [0, 0, 0],
			initLocalRotation: [0, 0, 0, 1],
		};

		if (b) {
			p.position = b.position;
			p.prevPosition = b.position;
			p.initLocalPosition = [...b.localPosition];
			p.initLocalRotation = [...b.localRotation];
		} else {
			const t = this.particles[parentIndex].transform!;
			if (this.endLength > 0) {
				const parent = t.parent;
				p.endOffset = parent
					? v3Scale(t.inverseTransformPoint(v3Sub(v3Scale(t.position, 2), parent.position)), this.endLength)
					: [this.endLength, 0, 0];
			} else
				p.endOffset = t.inverseTransformPoint(v3Add(this.node.transformDirection(this.endOffset), t.position));

			p.position = t.transformPoint(p.endOffset);
			p.prevPosition = [...p.position];
		}

		if (parentIndex >= 0) {
			boneLength += v3Length(v3Sub(this.particles[parentIndex].transform!.position, p.position));
			p.boneLength = boneLength;
			this.boneTotalLength = Math.max(this.boneTotalLength, boneLength);
		}

		const index = this.particles.length;
		this.particles.push(p);

		if (!b) return;

		const hasEnd = this.endLength > 0 || v3SqrLength(this.endOffset) > 0;
		for (const c of b.children) {
			if (!this.exclusions.has(c))
				this.appendParticles(c, index, boneLength);
			else if (hasEnd)
				this.appendParticles(null, index, boneLength);
		}
		if (b.children.length === 0 && hasEnd)
			this.appendParticles(null, index, boneLength);
	}

	/** `EventReset`, called from animation event `EventDynamicBone` */
	public eventReset () {
		if (!this.root) return;
		this.localGravity = this.root.inverseTransformDirection(this.gravity);
		this.updateParameters();
	}

	public updateParameters () {
		if (!this.root) return;
		this.localGravity = this.root.inverseTransformDirection(this.gravity);

		const d = this.data;
		for (const p of this.particles) {
			p.damping = this.damping;
			p.elasticity = this.elasticity;
			p.stiffness = this.stiffness;
			p.inert = this.inert;
			p.radius = this.radius;

			if (this.boneTotalLength > 0) {
				const t = p.boneLength / this.boneTotalLength;
				if (d.dmd.length) p.damping *= evaluateCurve(d.dmd, t);
				if (d.eld.length) p.elasticity *= evaluateCurve(d.eld, t);
				if (d.sfd.length) p.stiffness *= evaluateCurve(d.sfd, t);
				if (d.ind.length) p.inert *= evaluateCurve(d.ind, t);
				if (d.rad.length) p.radius *= evaluateCurve(d.rad, t);
			}
			p.damping = clamp01(p.damping);
			p.elasticity = clamp01(p.elasticity);
			p.stiffness = clamp01(p.stiffness);
			p.inert = clamp01(p.inert);
			p.radius = Math.max(p.radius, 0);
		}
	}

	public initTransforms () {
		for (const p of this.particles) {
			if (!p.transform) continue;
			p.transform.localPosition = p.initLocalPosition;
			p.transform.localRotation = p.initLocalRotation;
		}
	}

	private resetParticlesPosition () {
		for (const p of this.particles) {
			if (p.transform) {
				p.position = p.transform.position;
				p.prevPosition = [...p.position];
			} else {
				const t = this.particles[p.parentIndex].transform!;
				p.position = t.transformPoint(p.endOffset);
				p.prevPosition = [...p.position];
			}
		}
		this.objectPrevPosition = this.node.position;
	}

	/** Handles `OnEnable` / `OnDisable` */
	private checkActive () {
		const active = this.active;
		if (active === this.wasActive) return;
		this.wasActive = active;
		if (active)
			this.resetParticlesPosition();
		else
			this.initTransforms();
	}

	/** `Update` */
	public update () {
		this.checkActive();
		if (!this.wasActive || !this.isTransformCalculate) return;

		if (this.weight > 0) this.initTransforms();
		if (this.refreshParam) this.updateParameters();
	}

	/** `LateUpdate` */
	public lateUpdate (dt: number) {
		this.checkActive();
		if (!this.wasActive || !this.isTransformCalculate) return;

		if (this.weight > 0) this.updateDynamicBones(dt);
		if (this.refreshParam) this.updateParameters();
	}

	private updateDynamicBones (t: number) {
		if (!this.root) return;

		this.objectScale = Math.abs(this.node.lossyScale[0]);
		const pos = this.node.position;
		this.objectMove = v3Sub(pos, this.objectPrevPosition);
		this.objectPrevPosition = pos;

		let loop = 1;
		if (this.updateRate > 0) {
			const dt = 1 / this.updateRate;
			this.time += t;
			loop = 0;
			while (this.time >= dt) {
				this.time -= dt;
				if (++loop >= 3) {
					this.time = 0;
					break;
				}
			}
		}

		if (loop > 0) {
			for (let i = 0; i < loop; i++) {
				this.updateParticles1();
				this.updateParticles2();
				this.objectMove = [0, 0, 0];
			}
		} else
			this.skipUpdateParticles();

		this.applyParticlesToTransforms();
	}

	private updateParticles1 () {
		const gravity = this.gravity;
		const fdir = v3Normalize(gravity);
		const rf = this.root!.transformDirection(this.localGravity);
		const pf = v3Scale(fdir, Math.max(v3Dot(rf, fdir), 0));
		const force = v3Scale(v3Add(v3Sub(gravity, pf), this.force), this.objectScale);

		for (const p of this.particles) {
			if (p.parentIndex >= 0) {
				const v = v3Sub(p.position, p.prevPosition);
				const rmove = v3Scale(this.objectMove, p.inert);
				p.prevPosition = v3Add(p.position, rmove);
				p.position = v3Add(v3Add(v3Add(p.position, v3Scale(v, 1 - p.damping)), force), rmove);
			} else {
				p.prevPosition = p.position;
				p.position = p.transform!.position;
			}
		}
	}

	private restLength (p: Particle, p0: Particle): number {
		return p.transform
			? v3Length(v3Sub(p0.transform!.position, p.transform.position))
			: v3Length(p0.transform!.transformVector(p.endOffset));
	}

	private restPosition (p: Particle, p0: Particle): Vec3 {
		const m = m4Copy(m4(), p0.transform!.world);
		m[12] = p0.position[0];
		m[13] = p0.position[1];
		m[14] = p0.position[2];
		return m4Point(m, p.transform ? p.transform.localPosition : p.endOffset);
	}

	private updateParticles2 () {
		for (let i = 1; i < this.particles.length; i++) {
			const p = this.particles[i];
			const p0 = this.particles[p.parentIndex];

			const restLen = this.restLength(p, p0);
			const stiffness = lerp(1, p.stiffness, this.weight);
			if (stiffness > 0 || p.elasticity > 0) {
				const restPos = this.restPosition(p, p0);
				const d = v3Sub(restPos, p.position);
				p.position = v3Add(p.position, v3Scale(d, p.elasticity));

				if (stiffness > 0) {
					const d2 = v3Sub(restPos, p.position);
					const len = v3Length(d2);
					const maxLen = restLen * (1 - stiffness) * 2;
					if (len > maxLen)
						p.position = v3Add(p.position, v3Scale(d2, (len - maxLen) / len));
				}
			}

			const particleRadius = p.radius * this.objectScale;
			for (const c of this.colliders) {
				if (c.active)
					p.position = c.collide(p.position, particleRadius);
			}

			if (this.data.fa !== FreezeAxis.None) {
				const t = p0.transform!;
				const normal = this.data.fa === FreezeAxis.X
					? t.right
					: this.data.fa === FreezeAxis.Y
						? t.up
						: t.forward;
				const dist = v3Dot(normal, v3Sub(p.position, p0.position));
				p.position = v3Sub(p.position, v3Scale(normal, dist));
			}

			const dd = v3Sub(p0.position, p.position);
			const len = v3Length(dd);
			if (len > 0)
				p.position = v3Add(p.position, v3Scale(dd, (len - restLen) / len));
		}
	}

	private skipUpdateParticles () {
		for (const p of this.particles) {
			if (p.parentIndex >= 0) {
				p.prevPosition = v3Add(p.prevPosition, this.objectMove);
				p.position = v3Add(p.position, this.objectMove);

				const p0 = this.particles[p.parentIndex];
				const restLen = this.restLength(p, p0);
				const stiffness = lerp(1, p.stiffness, this.weight);
				if (stiffness > 0) {
					const d = v3Sub(this.restPosition(p, p0), p.position);
					const len = v3Length(d);
					const maxLen = restLen * (1 - stiffness) * 2;
					if (len > maxLen)
						p.position = v3Add(p.position, v3Scale(d, (len - maxLen) / len));
				}

				const dd = v3Sub(p0.position, p.position);
				const len = v3Length(dd);
				if (len > 0)
					p.position = v3Add(p.position, v3Scale(dd, (len - restLen) / len));
			} else {
				p.prevPosition = p.position;
				p.position = p.transform!.position;
			}
		}
	}

	private applyParticlesToTransforms () {
		for (let i = 1; i < this.particles.length; i++) {
			const p = this.particles[i];
			const p0 = this.particles[p.parentIndex];
			const t0 = p0.transform!;

			if (t0.children.length <= 1) {
				const v = p.transform ? p.transform.localPosition : p.endOffset;
				const v2 = v3Sub(p.position, p0.position);
				const rot = qFromTo(t0.transformDirection(v), v2);
				t0.rotation = qMul(rot, t0.rotation);
			}

			if (p.transform)
				p.transform.position = p.position;
		}
	}
}
