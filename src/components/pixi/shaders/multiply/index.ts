import * as PIXI from "pixi.js";

import BaseScreenInputFilter from "../base";
import Shared from "../../Shared";

import frag from "./frag.glsl?raw";

export default class Multiply extends BaseScreenInputFilter {
	constructor () {
		super(undefined, frag, {
			uTexture_ST: [1, 1, 0, 0],
		});
	}

	apply (
		filterManager: PIXI.FilterSystem,
		input: PIXI.RenderTexture,
		output: PIXI.RenderTexture,
		clearMode?: PIXI.CLEAR_MODES,
		_currentState?: PIXI.FilterState
	): void {
		super.apply(filterManager, input, output, clearMode);
	}

	destroy (): void {
		super.destroy();
	}
}
