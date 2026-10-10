// Unity compatible math helpers
import type { Quat, Vec3 } from "./Types";

export type Mat4 = Float64Array;

export const Deg2Rad = Math.PI / 180;
export const Rad2Deg = 180 / Math.PI;

export function clamp (v: number, min: number, max: number): number {
	return v < min ? min : v > max ? max : v;
}
export function clamp01 (v: number): number {
	return v < 0 ? 0 : v > 1 ? 1 : v;
}
export function lerp (a: number, b: number, t: number): number {
	return a + (b - a) * t;
}

//#region Vec3
export function v3 (x = 0, y = 0, z = 0): Vec3 {
	return [x, y, z];
}
export function v3Copy (out: Vec3, a: Readonly<Vec3>): Vec3 {
	out[0] = a[0]; out[1] = a[1]; out[2] = a[2];
	return out;
}
export function v3Add (a: Readonly<Vec3>, b: Readonly<Vec3>): Vec3 {
	return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
export function v3Sub (a: Readonly<Vec3>, b: Readonly<Vec3>): Vec3 {
	return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
export function v3Scale (a: Readonly<Vec3>, s: number): Vec3 {
	return [a[0] * s, a[1] * s, a[2] * s];
}
export function v3Dot (a: Readonly<Vec3>, b: Readonly<Vec3>): number {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
export function v3Cross (a: Readonly<Vec3>, b: Readonly<Vec3>): Vec3 {
	return [
		a[1] * b[2] - a[2] * b[1],
		a[2] * b[0] - a[0] * b[2],
		a[0] * b[1] - a[1] * b[0],
	];
}
export function v3Length (a: Readonly<Vec3>): number {
	return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
export function v3SqrLength (a: Readonly<Vec3>): number {
	return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
}
export function v3Distance (a: Readonly<Vec3>, b: Readonly<Vec3>): number {
	const x = a[0] - b[0], y = a[1] - b[1], z = a[2] - b[2];
	return Math.sqrt(x * x + y * y + z * z);
}
export function v3Normalize (a: Readonly<Vec3>): Vec3 {
	const l = v3Length(a);
	return l > 1e-5 ? [a[0] / l, a[1] / l, a[2] / l] : [0, 0, 0];
}
export function v3Lerp (a: Readonly<Vec3>, b: Readonly<Vec3>, t: number): Vec3 {
	return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}
/** `Vector3.Angle`, in degrees */
export function v3Angle (a: Readonly<Vec3>, b: Readonly<Vec3>): number {
	const d = Math.sqrt(v3SqrLength(a) * v3SqrLength(b));
	if (d < 1e-15) return 0;
	return Math.acos(clamp(v3Dot(a, b) / d, -1, 1)) * Rad2Deg;
}
//#endregion

//#region Quaternion
export function qIdentity (): Quat {
	return [0, 0, 0, 1];
}
export function qMul (a: Readonly<Quat>, b: Readonly<Quat>): Quat {
	const [ax, ay, az, aw] = a;
	const [bx, by, bz, bw] = b;
	return [
		aw * bx + ax * bw + ay * bz - az * by,
		aw * by + ay * bw + az * bx - ax * bz,
		aw * bz + az * bw + ax * by - ay * bx,
		aw * bw - ax * bx - ay * by - az * bz,
	];
}
export function qInverse (q: Readonly<Quat>): Quat {
	const l = q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3];
	if (l < 1e-20) return [0, 0, 0, 1];
	return [-q[0] / l, -q[1] / l, -q[2] / l, q[3] / l];
}
export function qNormalize (q: Readonly<Quat>): Quat {
	const l = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
	if (l < 1e-20) return [0, 0, 0, 1];
	return [q[0] / l, q[1] / l, q[2] / l, q[3] / l];
}
export function qRotate (q: Readonly<Quat>, v: Readonly<Vec3>): Vec3 {
	const [x, y, z, w] = q;
	const x2 = x * 2, y2 = y * 2, z2 = z * 2;
	const xx = x * x2, yy = y * y2, zz = z * z2;
	const xy = x * y2, xz = x * z2, yz = y * z2;
	const wx = w * x2, wy = w * y2, wz = w * z2;
	return [
		(1 - (yy + zz)) * v[0] + (xy - wz) * v[1] + (xz + wy) * v[2],
		(xy + wz) * v[0] + (1 - (xx + zz)) * v[1] + (yz - wx) * v[2],
		(xz - wy) * v[0] + (yz + wx) * v[1] + (1 - (xx + yy)) * v[2],
	];
}
/** `Quaternion.AngleAxis`, angle in degrees */
export function qAngleAxis (angle: number, axis: Readonly<Vec3>): Quat {
	const n = v3Normalize(axis);
	const h = angle * Deg2Rad * 0.5;
	const s = Math.sin(h);
	return [n[0] * s, n[1] * s, n[2] * s, Math.cos(h)];
}
/** `Quaternion.Euler`, degrees, rotation order Z -> X -> Y */
export function qEuler (x: number, y: number, z: number): Quat {
	const hx = x * Deg2Rad * 0.5, hy = y * Deg2Rad * 0.5, hz = z * Deg2Rad * 0.5;
	const qx: Quat = [Math.sin(hx), 0, 0, Math.cos(hx)];
	const qy: Quat = [0, Math.sin(hy), 0, Math.cos(hy)];
	const qz: Quat = [0, 0, Math.sin(hz), Math.cos(hz)];
	return qMul(qMul(qy, qx), qz);
}
/** `Quaternion.eulerAngles`, degrees in [0, 360) */
export function qToEuler (q: Readonly<Quat>): Vec3 {
	const [x, y, z, w] = qNormalize(q);
	const sx = clamp(2 * (w * x - y * z), -1, 1);
	let ex: number, ey: number, ez: number;
	if (Math.abs(sx) < 0.99999) {
		ex = Math.asin(sx);
		ey = Math.atan2(2 * (w * y + x * z), 1 - 2 * (x * x + y * y));
		ez = Math.atan2(2 * (w * z + x * y), 1 - 2 * (x * x + z * z));
	} else {
		ex = Math.sign(sx) * Math.PI / 2;
		ey = Math.atan2(-2 * (x * z - w * y), 1 - 2 * (y * y + z * z));
		ez = 0;
	}
	const wrap = (v: number) => {
		const d = v * Rad2Deg % 360;
		return d < 0 ? d + 360 : d;
	};
	return [wrap(ex), wrap(ey), wrap(ez)];
}
function qFromBasis (xa: Readonly<Vec3>, ya: Readonly<Vec3>, za: Readonly<Vec3>): Quat {
	const m00 = xa[0], m10 = xa[1], m20 = xa[2];
	const m01 = ya[0], m11 = ya[1], m21 = ya[2];
	const m02 = za[0], m12 = za[1], m22 = za[2];
	const tr = m00 + m11 + m22;
	if (tr > 0) {
		const s = Math.sqrt(tr + 1) * 2;
		return [(m21 - m12) / s, (m02 - m20) / s, (m10 - m01) / s, 0.25 * s];
	} else if (m00 > m11 && m00 > m22) {
		const s = Math.sqrt(1 + m00 - m11 - m22) * 2;
		return [0.25 * s, (m01 + m10) / s, (m02 + m20) / s, (m21 - m12) / s];
	} else if (m11 > m22) {
		const s = Math.sqrt(1 + m11 - m00 - m22) * 2;
		return [(m01 + m10) / s, 0.25 * s, (m12 + m21) / s, (m02 - m20) / s];
	}
	const s = Math.sqrt(1 + m22 - m00 - m11) * 2;
	return [(m02 + m20) / s, (m12 + m21) / s, 0.25 * s, (m10 - m01) / s];
}
/** `Quaternion.LookRotation` */
export function qLookRotation (forward: Readonly<Vec3>, up: Readonly<Vec3> = [0, 1, 0]): Quat {
	const z = v3Normalize(forward);
	if (v3SqrLength(z) < 1e-10) return [0, 0, 0, 1];

	let x = v3Cross(up, z);
	if (v3SqrLength(x) < 1e-12) { // up is parallel to forward
		x = v3Cross(Math.abs(z[1]) < 0.999 ? [0, 1, 0] : [1, 0, 0], z);
	}
	x = v3Normalize(x);
	const y = v3Cross(z, x);
	return qNormalize(qFromBasis(x, y, z));
}
/** `Quaternion.FromToRotation` */
export function qFromTo (from: Readonly<Vec3>, to: Readonly<Vec3>): Quat {
	const a = v3Normalize(from);
	const b = v3Normalize(to);
	const d = v3Dot(a, b);
	if (d >= 1 - 1e-7) return [0, 0, 0, 1];
	if (d <= -1 + 1e-7) {
		let axis = v3Cross([1, 0, 0], a);
		if (v3SqrLength(axis) < 1e-10) axis = v3Cross([0, 1, 0], a);
		return qAngleAxis(180, axis);
	}
	const c = v3Cross(a, b);
	return qNormalize([c[0], c[1], c[2], 1 + d]);
}
export function qNlerp (a: Readonly<Quat>, b: Readonly<Quat>, t: number): Quat {
	const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	const s = dot < 0 ? -1 : 1;
	return qNormalize([
		lerp(a[0], b[0] * s, t),
		lerp(a[1], b[1] * s, t),
		lerp(a[2], b[2] * s, t),
		lerp(a[3], b[3] * s, t),
	]);
}
export function qIsNaN (q: Readonly<Quat>): boolean {
	return isNaN(q[0]) || isNaN(q[1]) || isNaN(q[2]) || isNaN(q[3]);
}
//#endregion

//#region Matrix (column-major)
export function m4 (): Mat4 {
	const m = new Float64Array(16);
	m[0] = m[5] = m[10] = m[15] = 1;
	return m;
}
export function m4Copy (out: Mat4, a: Mat4): Mat4 {
	out.set(a);
	return out;
}
export function m4FromArray (a: ArrayLike<number>): Mat4 {
	const m = new Float64Array(16);
	for (let i = 0; i < 16; i++) m[i] = a[i];
	return m;
}
export function m4Compose (out: Mat4, t: Readonly<Vec3>, r: Readonly<Quat>, s: Readonly<Vec3>): Mat4 {
	const [x, y, z, w] = r;
	const x2 = x + x, y2 = y + y, z2 = z + z;
	const xx = x * x2, xy = x * y2, xz = x * z2;
	const yy = y * y2, yz = y * z2, zz = z * z2;
	const wx = w * x2, wy = w * y2, wz = w * z2;
	const sx = s[0], sy = s[1], sz = s[2];

	out[0] = (1 - (yy + zz)) * sx;
	out[1] = (xy + wz) * sx;
	out[2] = (xz - wy) * sx;
	out[3] = 0;
	out[4] = (xy - wz) * sy;
	out[5] = (1 - (xx + zz)) * sy;
	out[6] = (yz + wx) * sy;
	out[7] = 0;
	out[8] = (xz + wy) * sz;
	out[9] = (yz - wx) * sz;
	out[10] = (1 - (xx + yy)) * sz;
	out[11] = 0;
	out[12] = t[0];
	out[13] = t[1];
	out[14] = t[2];
	out[15] = 1;
	return out;
}
export function m4Mul (out: Mat4, a: Mat4, b: Mat4): Mat4 {
	const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	for (let i = 0; i < 4; i++) {
		const b0 = b[i * 4], b1 = b[i * 4 + 1], b2 = b[i * 4 + 2], b3 = b[i * 4 + 3];
		out[i * 4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
		out[i * 4 + 1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
		out[i * 4 + 2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
		out[i * 4 + 3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	}
	return out;
}
export function m4Invert (out: Mat4, a: Mat4): Mat4 {
	const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

	const b00 = a00 * a11 - a01 * a10;
	const b01 = a00 * a12 - a02 * a10;
	const b02 = a00 * a13 - a03 * a10;
	const b03 = a01 * a12 - a02 * a11;
	const b04 = a01 * a13 - a03 * a11;
	const b05 = a02 * a13 - a03 * a12;
	const b06 = a20 * a31 - a21 * a30;
	const b07 = a20 * a32 - a22 * a30;
	const b08 = a20 * a33 - a23 * a30;
	const b09 = a21 * a32 - a22 * a31;
	const b10 = a21 * a33 - a23 * a31;
	const b11 = a22 * a33 - a23 * a32;

	let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) {
		out.fill(0);
		return out;
	}
	det = 1.0 / det;

	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	return out;
}
export function m4Point (m: Mat4, p: Readonly<Vec3>): Vec3 {
	const x = p[0], y = p[1], z = p[2];
	return [
		m[0] * x + m[4] * y + m[8] * z + m[12],
		m[1] * x + m[5] * y + m[9] * z + m[13],
		m[2] * x + m[6] * y + m[10] * z + m[14],
	];
}
export function m4Vector (m: Mat4, v: Readonly<Vec3>): Vec3 {
	const x = v[0], y = v[1], z = v[2];
	return [
		m[0] * x + m[4] * y + m[8] * z,
		m[1] * x + m[5] * y + m[9] * z,
		m[2] * x + m[6] * y + m[10] * z,
	];
}
//#endregion

//#region AnimationCurve
/** Evaluate Unity `AnimationCurve` (hermite, clamped) */
export function evaluateCurve (keys: ReadonlyArray<Readonly<Tuple<number, 4>>>, t: number): number {
	const n = keys.length;
	if (n === 0) return 0;
	if (n === 1 || t <= keys[0][0]) return keys[0][1];
	if (t >= keys[n - 1][0]) return keys[n - 1][1];

	let i = 0;
	while (i < n - 2 && keys[i + 1][0] < t) i++;

	const [t0, v0, , out0] = keys[i];
	const [t1, v1, in1] = keys[i + 1];
	const dt = t1 - t0;
	if (dt <= 0) return v1;
	if (Math.abs(out0) > 1e30 || Math.abs(in1) > 1e30) return v0; // stepped

	const s = (t - t0) / dt;
	const s2 = s * s, s3 = s2 * s;
	const h00 = 2 * s3 - 3 * s2 + 1;
	const h10 = s3 - 2 * s2 + s;
	const h01 = -2 * s3 + 3 * s2;
	const h11 = s3 - s2;
	return h00 * v0 + h10 * dt * out0 + h01 * v1 + h11 * dt * in1;
}
//#endregion
