/** Keyframe of Unity `AnimationCurve` (non-weighted) */
export type CurveKey = [time: number, value: number, inSlope: number, outSlope: number];

/** Evaluate Unity `AnimationCurve` (cubic hermite, clamped) */
export function EvaluateCurve (keys: CurveKey[], t: number): number {
	if (keys.length === 0) return 0;
	if (t <= keys[0][0]) return keys[0][1];

	const last = keys[keys.length - 1];
	if (t >= last[0]) return last[1];

	let i = 0;
	while (i < keys.length - 2 && t > keys[i + 1][0]) i++;

	const [t0, p0, , out0] = keys[i];
	const [t1, p1, in1] = keys[i + 1];
	const dt = t1 - t0;
	if (!Number.isFinite(out0) || !Number.isFinite(in1)) return p0; // stepped

	const s = (t - t0) / dt;
	const s2 = s * s;
	const s3 = s2 * s;
	const m0 = out0 * dt;
	const m1 = in1 * dt;
	return (2 * s3 - 3 * s2 + 1) * p0 +
		(s3 - 2 * s2 + s) * m0 +
		(-2 * s3 + 3 * s2) * p1 +
		(s3 - s2) * m1;
}
