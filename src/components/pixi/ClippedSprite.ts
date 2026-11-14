import * as PIXI from "pixi.js";

export interface ClipGeometry {
	/** `[x0, y0, x1, y1, ...]` */
	positions: Float32Array;
	/** `[u0, v0, u1, v1, ...]` */
	uvs: Float32Array;
	indices: Uint16Array;
}

const QUAD_INDICES = new Uint16Array([0, 1, 2, 0, 2, 3]);

/**
 * `PIXI.Sprite` but render like `PIXI.Mesh` (use `vertexData`, `uvs`, `indicies`)
 */
export default class ClippedSprite extends PIXI.Sprite {
	private clip: ClipGeometry | null = null;
	private clipID = 0;
	private builtClipID = -1;
	private builtWorldID = -1;

	/**
	 * @param texture Texture to draw
	 * @param clip if `null`, render like normal sprite
	 */
	public setClip (texture: PIXI.Texture, clip: ClipGeometry | null): void {
		if (!clip && this.clip) { // restore normal sprite buffers
			this.vertexData = new Float32Array(8);
			this.indices = QUAD_INDICES;
		}
		this.clip = clip;
		this.clipID++;
		this.texture = texture;
		this._textureID = -1;
	}

	public override calculateVertices (): void {
		const clip = this.clip;
		if (!clip) return super.calculateVertices();

		const worldID = this.transform._worldID;
		if (this.builtWorldID === worldID && this.builtClipID === this.clipID) return;
		this.builtWorldID = worldID;
		this.builtClipID = this.clipID;

		const pos = clip.positions;
		if (this.vertexData.length !== pos.length)
			this.vertexData = new Float32Array(pos.length);

		const vd = this.vertexData;
		const { a, b, c, d, tx, ty } = this.transform.worldTransform;
		for (let i = 0; i < pos.length; i += 2) {
			const x = pos[i], y = pos[i + 1];
			vd[i] = a * x + c * y + tx;
			vd[i + 1] = b * x + d * y + ty;
		}
		this.uvs = clip.uvs;
		this.indices = clip.indices;
	}

	protected override _render (renderer: PIXI.Renderer): void {
		if (this.clip && this.clip.indices.length === 0) return;
		super._render(renderer);
	}

	protected override _calculateBounds (): void {
		if (!this.clip) return super._calculateBounds();
		this.calculateVertices();
		this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
	}
}
