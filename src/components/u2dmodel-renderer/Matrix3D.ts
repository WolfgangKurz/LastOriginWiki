import { Repeat } from "@/types/Repeat";

type Matrix3DMatrix = Repeat<number, 16>;

export default class Matrix3D {
	public static toString (m: Matrix3DMatrix) {
		return `matrix3d(${m.join(", ")})`;
	}

	public static identity (): Matrix3DMatrix {
		return [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1,
		];
	}
	public static isIdentity (m: Matrix3DMatrix): boolean {
		if (m[0] !== 1) return false;
		if (m[1] !== 0) return false;
		if (m[2] !== 0) return false;
		if (m[3] !== 0) return false;

		if (m[4] !== 0) return false;
		if (m[5] !== 1) return false;
		if (m[6] !== 0) return false;
		if (m[7] !== 0) return false;

		if (m[8] !== 0) return false;
		if (m[9] !== 0) return false;
		if (m[10] !== 1) return false;
		if (m[11] !== 0) return false;

		if (m[12] !== 0) return false;
		if (m[13] !== 0) return false;
		if (m[14] !== 0) return false;
		if (m[15] !== 1) return false;
		return true;
	}

	public static translate (x: number, y: number, z: number): Matrix3DMatrix {
		return [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			x, y, z, 1,
		];
	}

	public static scale (x: number, y: number, z: number): Matrix3DMatrix;
	public static scale (x: number, y: number, z: number, cx: number, cy: number, cz: number): Matrix3DMatrix;
	public static scale (x: number, y: number, z: number, cx?: number, cy?: number, cz?: number): Matrix3DMatrix {
		const m: Matrix3DMatrix = [
			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1,
		];

		if (typeof cx === "undefined" || typeof cy === "undefined" || typeof cz === "undefined") return m;
		return this.compose(
			this.translate(-cx, -cy, -cz),
			m,
			this.translate(cx, cy, cz),
		);
	}

	public static rotateX (rad: number): Matrix3DMatrix;
	public static rotateX (rad: number, cx: number, cy: number, cz: number): Matrix3DMatrix;
	public static rotateX (rad: number, cx?: number, cy?: number, cz?: number): Matrix3DMatrix {
		const c = Math.cos(rad);
		const s = Math.sin(rad);
		const m: Matrix3DMatrix = [
			1, 0, 0, 0,
			0, c, -s, 0,
			0, s, c, 0,
			0, 0, 0, 1,
		];

		if (typeof cx === "undefined" || typeof cy === "undefined" || typeof cz === "undefined") return m;
		return this.compose(
			this.translate(-cx, -cy, -cz),
			m,
			this.translate(cx, cy, cz),
		);
	}

	public static rotateY (rad: number): Matrix3DMatrix;
	public static rotateY (rad: number, cx: number, cy: number, cz: number): Matrix3DMatrix;
	public static rotateY (rad: number, cx?: number, cy?: number, cz?: number): Matrix3DMatrix {
		const c = Math.cos(rad);
		const s = Math.sin(rad);
		const m: Matrix3DMatrix = [
			c, 0, s, 0,
			0, 1, 0, 0,
			-s, 0, c, 0,
			0, 0, 0, 1,
		];

		if (typeof cx === "undefined" || typeof cy === "undefined" || typeof cz === "undefined") return m;
		return this.compose(
			this.translate(-cx, -cy, -cz),
			m,
			this.translate(cx, cy, cz),
		);
	}

	public static rotateZ (rad: number): Matrix3DMatrix;
	public static rotateZ (rad: number, cx: number, cy: number, cz: number): Matrix3DMatrix;
	public static rotateZ (rad: number, cx?: number, cy?: number, cz?: number): Matrix3DMatrix {
		const c = Math.cos(rad);
		const s = Math.sin(rad);
		const m: Matrix3DMatrix = [
			c, -s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1,
		];

		if (typeof cx === "undefined" || typeof cy === "undefined" || typeof cz === "undefined") return m;
		return this.compose(
			this.translate(-cx, -cy, -cz),
			m,
			this.translate(cx, cy, cz),
		);
	}

	public static rotate (radX: number, radY: number, radZ: number): Matrix3DMatrix;
	public static rotate (radX: number, radY: number, radZ: number, cx: number, cy: number, cz: number): Matrix3DMatrix;
	public static rotate (radX: number, radY: number, radZ: number, cx?: number, cy?: number, cz?: number): Matrix3DMatrix {
		const m = this.compose(
			this.rotateX(radX),
			this.rotateY(radY),
			this.rotateZ(radZ),
		);

		if (typeof cx === "undefined" || typeof cy === "undefined" || typeof cz === "undefined") return m;
		return this.compose(
			this.translate(-cx, -cy, -cz),
			m,
			this.translate(cx, cy, cz),
		);
	}

	public static compose (...mx: Matrix3DMatrix[]): Matrix3DMatrix {
		type Matrix3DRow = Repeat<number, 4>;

		function multiplyMatrixAndPoint (m: Matrix3DMatrix, p: Matrix3DRow): Matrix3DRow {
			return (new Array(16).fill(0) as Matrix3DMatrix)
				.map((_, i) => {
					const x = i % 4;
					const y = (i / 4) >>> 0; // floor
					return p[i % 4] * m[y + x * 4];
				})
				.reduce((p, c, i) => (p[Math.floor(i / 4)] += c, p), [0, 0, 0, 0]);
		}
		function multiplyMatrices (m1: Matrix3DMatrix, m2: Matrix3DMatrix): Matrix3DMatrix {
			return new Array(4).fill(0)
				.map((_, i) => multiplyMatrixAndPoint(m1, m2.slice(i * 4, i * 4 + 4) as Matrix3DRow))
				.flat() as Matrix3DMatrix;
		}

		let r = this.identity();
		mx.forEach(m => (r = multiplyMatrices(r, m)));
		return r;
	}
};
