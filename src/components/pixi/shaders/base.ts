import * as PIXI from "pixi.js";

export default class BaseScreenInputFilter extends PIXI.Filter {
	constructor (vert?: string, frag?: string, uniforms?: Record<string, any>) {
		super(vert, frag, uniforms);
	}

	public apply (
		filterManager: PIXI.FilterSystem,
		input: PIXI.RenderTexture,
		output: PIXI.RenderTexture,
		clearMode?: PIXI.CLEAR_MODES,
		_currentState?: PIXI.FilterState
	): void {
		this.uniforms.uScreenTextureSize[0] = output.width;
		this.uniforms.uScreenTextureSize[1] = output.height;

		super.apply(filterManager, input, output, clearMode);
	}
}
