import * as PIXI from "pixi.js";

import BaseScreenInputFilter from "../base";
import Shared from "../../Shared";

import vert from "../vert.glsl?raw";
import frag from "./frag.glsl?raw";

export default class Additive extends BaseScreenInputFilter {
	private _fn: (delta: number) => void;
	constructor () {
		super(vert, frag, {
			uTexture_ST: [1, 1, 0, 0],
			uTintColor: [0.5, 0.5, 0.5, 0.5],

			uReference: Shared.instance.renderTexture2,
			uScreenSize: [1, 1],
		});

		this.autoFit = false; // do not crop & adjust uv

		this._fn = this.fn.bind(this);
		PIXI.Ticker.shared.add(this._fn);
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
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

		super.apply(filterManager, input, output, clearMode);

		// Restore previous values
		if (!_blend) gl.disable(gl.BLEND);
		gl.blendFuncSeparate(_s_rgb, _d_rgb, _s_a, _d_a);
	}

	private fn (delta: number) {
		if (this.uniforms) {
			this.uniforms.uScreenSize[0] = Shared.instance.renderTexture2.width;
			this.uniforms.uScreenSize[1] = Shared.instance.renderTexture2.height;
		}
	}

	destroy (): void {
		PIXI.Ticker.shared.remove(this._fn);
		super.destroy();
	}
}
