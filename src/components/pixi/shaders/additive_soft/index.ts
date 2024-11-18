import * as PIXI from "pixi.js";

import frag from "./frag.glsl?raw";

export default class AdditiveSoft extends PIXI.Filter {
	constructor () {
		super(undefined, frag, {
			uTexture_ST: [1, 1, 0, 0],
			uTintColor: [1, 1, 1, 1],
		});
	}

	apply (
		filterManager: PIXI.FilterSystem,
		input: PIXI.RenderTexture,
		output: PIXI.RenderTexture,
		clearMode?: PIXI.CLEAR_MODES,
		_currentState?: PIXI.FilterState
	): void {
		const gl = filterManager.renderer.gl;

		// get current values to revert after apply
		const _blend = gl.isEnabled(gl.BLEND);
		const _s_rgb = gl.getParameter(gl.BLEND_SRC_RGB);
		const _d_rgb = gl.getParameter(gl.BLEND_DST_RGB);
		const _s_a = gl.getParameter(gl.BLEND_SRC_ALPHA);
		const _d_a = gl.getParameter(gl.BLEND_DST_ALPHA);

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_COLOR);

		super.apply(filterManager, input, output, clearMode);

		// Restore previous values
		if (!_blend) gl.disable(gl.BLEND);
		gl.blendFuncSeparate(_s_rgb, _d_rgb, _s_a, _d_a);
	}
}
