import type { NodeData, Quat, Vec3 } from "./Types";
import {
	Mat4,
	m4, m4Compose, m4Mul, m4Point, m4Vector,
	qInverse, qMul, qNormalize, qRotate, qToEuler,
} from "./Math";

const IDENTITY: Quat = [0, 0, 0, 1];
const MIRROR_EPSILON = 1e-6;
const ZERO3: Vec3 = [0, 0, 0];
const ONE3: Vec3 = [1, 1, 1];

/** Unity `InverseSafe`, zero for (nearly) zero scale */
function inverseSafe (v: number): number {
	return Math.abs(v) < MIRROR_EPSILON ? 0 : 1 / v;
}

/** Inverse of `TRS(t, r, s)` = `S^-1 * R^-1 * T^-1`, with `inverseSafe` scale */
function m4InverseTRS (out: Mat4, t: Readonly<Vec3>, r: Readonly<Quat>, s: Readonly<Vec3>): Mat4 {
	m4Compose(out, ZERO3, qInverse(r), ONE3);
	const inv = [inverseSafe(s[0]), inverseSafe(s[1]), inverseSafe(s[2])];
	for (let c = 0; c < 3; c++)
		for (let row = 0; row < 3; row++)
			out[c * 4 + row] *= inv[row];

	const [x, y, z] = t;
	out[12] = -(out[0] * x + out[4] * y + out[8] * z);
	out[13] = -(out[1] * x + out[5] * y + out[9] * z);
	out[14] = -(out[2] * x + out[6] * y + out[10] * z);
	return out;
}
/** 180 degrees rotations, `diag` of sign flip with determinant +1 */
const FLIP_X: Quat = [1, 0, 0, 0]; // diag(1, -1, -1)
const FLIP_Y: Quat = [0, 1, 0, 0]; // diag(-1, 1, -1)
const FLIP_Z: Quat = [0, 0, 1, 0]; // diag(-1, -1, 1)

/** Rotation conjugated by mirror `diag(-1, 1, 1)` (`M * R * M`) */
function reflect (q: Readonly<Quat>, mirrored: boolean): Quat {
	return mirrored ? [q[0], -q[1], -q[2], q[3]] : [q[0], q[1], q[2], q[3]];
}

/**
 * Mirror state of node and remaining sign flip as rotation.
 * World basis is `parentRotation * parentMirror * localRotation * sign(localScale)`,
 * sign flips are moved right and split into `rotation * mirror`.
 */
function mirrorOf (parentMirrored: boolean, scale: Readonly<Vec3>): [mirrored: boolean, flip: Quat] {
	// nearly zero scale (e.g. z of -4e-19) is not a mirror
	const ex = (parentMirrored ? -1 : 1) * (scale[0] < -MIRROR_EPSILON ? -1 : 1);
	const ey = scale[1] < -MIRROR_EPSILON ? -1 : 1;
	const ez = scale[2] < -MIRROR_EPSILON ? -1 : 1;
	const mirrored = ex * ey * ez < 0;
	const rx = mirrored ? -ex : ex; // remaining diag(rx, ey, ez) has determinant +1
	if (rx > 0 && ey > 0) return [mirrored, IDENTITY];
	if (rx > 0) return [mirrored, FLIP_X];
	if (ey > 0) return [mirrored, FLIP_Y];
	return [mirrored, FLIP_Z];
}

/** Unity `Transform` + `GameObject` equivalent */
export class GammaNode {
	public readonly index: number;
	public readonly name: string;
	public parent: GammaNode | null = null;
	public readonly children: GammaNode[] = [];

	private _activeSelf: boolean;
	private _localPosition: Vec3;
	private _localRotation: Quat;
	private _localScale: Vec3;

	private _dirty = true;
	private _world: Mat4 = m4();
	private _worldInv: Mat4 = m4();
	private _worldInvDirty = true;
	private _rotation: Quat = [0, 0, 0, 1];
	/** World basis is mirrored (odd number of negative scale axes), world matrix ~ `rotation * diag(-1, 1, 1)` */
	private _mirrored = false;

	/** Called when `activeInHierarchy` may be changed */
	public onActiveChanged: (() => void) | null = null;

	constructor (index: number, data: NodeData) {
		this.index = index;
		this.name = data.n;
		this._activeSelf = data.a;
		this._localPosition = [...data.t];
		this._localRotation = [...data.r];
		this._localScale = [...data.s];
	}

	//#region active
	public get activeSelf (): boolean {
		return this._activeSelf;
	}
	public set activeSelf (value: boolean) {
		if (this._activeSelf === value) return;
		this._activeSelf = value;
		this.notifyActive();
	}
	private notifyActive () {
		if (this.onActiveChanged) this.onActiveChanged();
		for (const c of this.children) c.notifyActive();
	}
	public get activeInHierarchy (): boolean {
		let n: GammaNode | null = this;
		while (n) {
			if (!n._activeSelf) return false;
			n = n.parent;
		}
		return true;
	}
	//#endregion

	//#region local
	public get localPosition (): Readonly<Vec3> {
		return this._localPosition;
	}
	public set localPosition (v: Readonly<Vec3>) {
		const p = this._localPosition;
		if (p[0] === v[0] && p[1] === v[1] && p[2] === v[2]) return;
		p[0] = v[0]; p[1] = v[1]; p[2] = v[2];
		this.markDirty();
	}
	public get localRotation (): Readonly<Quat> {
		return this._localRotation;
	}
	public set localRotation (q: Readonly<Quat>) {
		const r = this._localRotation;
		if (r[0] === q[0] && r[1] === q[1] && r[2] === q[2] && r[3] === q[3]) return;
		r[0] = q[0]; r[1] = q[1]; r[2] = q[2]; r[3] = q[3];
		this.markDirty();
	}
	public get localScale (): Readonly<Vec3> {
		return this._localScale;
	}
	public set localScale (v: Readonly<Vec3>) {
		const s = this._localScale;
		if (s[0] === v[0] && s[1] === v[1] && s[2] === v[2]) return;
		s[0] = v[0]; s[1] = v[1]; s[2] = v[2];
		this.markDirty();
	}
	public get localEulerAngles (): Vec3 {
		return qToEuler(this._localRotation);
	}

	private markDirty () {
		if (this._dirty) return; // children already dirty
		this._dirty = true;
		this._worldInvDirty = true;
		for (const c of this.children) c.markDirty();
	}
	//#endregion

	//#region world
	private update () {
		if (!this._dirty) return;

		const local = m4Compose(m4(), this._localPosition, this._localRotation, this._localScale);
		const p = this.parent;
		if (p) {
			p.update();
			m4Mul(this._world, p._world, local);
		} else
			this._world = local;

		// rotation as seen on screen (Unity), negative scales of ancestors mirror rotations of descendants
		const parentMirrored = !!p && p._mirrored;
		const [mirrored, flip] = mirrorOf(parentMirrored, this._localScale);
		this._mirrored = mirrored;
		this._rotation = qNormalize(qMul(
			qMul(p ? p._rotation : IDENTITY, reflect(this._localRotation, parentMirrored)),
			flip,
		));
		this._dirty = false;
		this._worldInvDirty = true;
	}

	/** `localToWorldMatrix` */
	public get world (): Mat4 {
		this.update();
		return this._world;
	}
	/**
	 * `worldToLocalMatrix`, inverted per hierarchy level like Unity.
	 * Zero scale axis (e.g. z of 2D model root) is inverted to zero instead of making whole matrix singular.
	 */
	public get worldInverse (): Mat4 {
		this.update();
		if (this._worldInvDirty) {
			m4InverseTRS(this._worldInv, this._localPosition, this._localRotation, this._localScale);
			if (this.parent) m4Mul(this._worldInv, this._worldInv, this.parent.worldInverse);
			this._worldInvDirty = false;
		}
		return this._worldInv;
	}

	public get position (): Vec3 {
		const m = this.world;
		return [m[12], m[13], m[14]];
	}
	public set position (v: Readonly<Vec3>) {
		this.localPosition = this.parent
			? m4Point(this.parent.worldInverse, v)
			: [v[0], v[1], v[2]];
	}

	public get rotation (): Quat {
		this.update();
		return [...this._rotation];
	}
	public set rotation (q: Readonly<Quat>) {
		// inverse of `update`
		const p = this.parent;
		const parentMirrored = !!p && p.rotationMirrored;
		const [, flip] = mirrorOf(parentMirrored, this._localScale);
		const r = qMul(qMul(p ? qInverse(p.rotation) : IDENTITY, q), qInverse(flip));
		this.localRotation = qNormalize(reflect(r, parentMirrored));
	}
	private get rotationMirrored (): boolean {
		this.update();
		return this._mirrored;
	}
	public get eulerAngles (): Vec3 {
		return qToEuler(this.rotation);
	}

	/** Approximated `lossyScale` (ignores skew) */
	public get lossyScale (): Vec3 {
		const s: Vec3 = [...this._localScale];
		let p = this.parent;
		while (p) {
			s[0] *= p._localScale[0];
			s[1] *= p._localScale[1];
			s[2] *= p._localScale[2];
			p = p.parent;
		}
		return s;
	}

	public get right (): Vec3 {
		return qRotate(this.rotation, [1, 0, 0]);
	}
	public get up (): Vec3 {
		return qRotate(this.rotation, [0, 1, 0]);
	}
	public get forward (): Vec3 {
		return qRotate(this.rotation, [0, 0, 1]);
	}

	public transformPoint (p: Readonly<Vec3>): Vec3 {
		return m4Point(this.world, p);
	}
	public inverseTransformPoint (p: Readonly<Vec3>): Vec3 {
		return m4Point(this.worldInverse, p);
	}
	/** Rotation only, `Transform.TransformDirection` */
	public transformDirection (d: Readonly<Vec3>): Vec3 {
		return qRotate(this.rotation, d);
	}
	public inverseTransformDirection (d: Readonly<Vec3>): Vec3 {
		return qRotate(qInverse(this.rotation), d);
	}
	/** `localToWorldMatrix.MultiplyVector` */
	public transformVector (v: Readonly<Vec3>): Vec3 {
		return m4Vector(this.world, v);
	}
	//#endregion

	/** Depth-first search of descendants by name, same as `FindChildRecursion.FindEnd` */
	public findEnd (name: string): GammaNode | null {
		for (const c of this.children)
			if (c.name === name) return c;

		for (const c of this.children) {
			const r = c.findEnd(name);
			if (r) return r;
		}
		return null;
	}

	public isDescendantOf (node: GammaNode): boolean {
		let n: GammaNode | null = this;
		while (n) {
			if (n === node) return true;
			n = n.parent;
		}
		return false;
	}
}

export function buildScene (nodes: NodeData[]): GammaNode[] {
	const list = nodes.map((n, i) => new GammaNode(i, n));
	nodes.forEach((n, i) => {
		if (n.p >= 0) {
			list[i].parent = list[n.p];
			list[n.p].children.push(list[i]);
		}
	});
	return list;
}
