import type { CurveData } from "./Types";

/** Compiled clip curve, avoid type checks on every sampling */
export interface CompiledCurve {
	evaluate (t: number): number;
}

class ConstantCurve implements CompiledCurve {
	constructor (private readonly value: number) { }

	evaluate (): number {
		return this.value;
	}
}

/** Streamed curve, each key holds cubic coefficients until next key of same curve */
class StreamedCurve implements CompiledCurve {
	private readonly times: Float64Array;
	private readonly coeffs: Float64Array;
	private last = 0;

	constructor (times: number[], coeffs: number[]) {
		this.times = Float64Array.from(times);
		this.coeffs = Float64Array.from(coeffs);
	}

	evaluate (t: number): number {
		const times = this.times;
		const n = times.length;

		let i = this.last;
		if (i >= n || times[i] > t) i = 0; // reset search on rewind
		while (i < n - 1 && times[i + 1] <= t) i++;
		this.last = i;

		const k = i * 4;
		const c = this.coeffs;
		if (t < times[0]) return c[3];

		const dt = t - times[i];
		return ((c[k] * dt + c[k + 1]) * dt + c[k + 2]) * dt + c[k + 3];
	}
}

class DenseCurve implements CompiledCurve {
	private readonly values: Float64Array;

	constructor (private readonly begin: number, private readonly rate: number, values: number[]) {
		this.values = Float64Array.from(values);
	}

	evaluate (t: number): number {
		const v = this.values;
		const f = (t - this.begin) * this.rate;
		if (f <= 0) return v[0];
		if (f >= v.length - 1) return v[v.length - 1];

		const i = Math.floor(f);
		const r = f - i;
		return v[i] + (v[i + 1] - v[i]) * r;
	}
}

export function compileCurve (data: CurveData): CompiledCurve {
	if (typeof data === "number")
		return new ConstantCurve(data);
	if ("s" in data)
		return new StreamedCurve(data.s, data.k);
	return new DenseCurve(data.d[0], data.d[1], data.v);
}
