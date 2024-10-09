import * as PIXI from "pixi.js";

import BaseScreenInputFilter from "../base";
import Shared from "../../Shared";

import vert from "../vert.glsl?raw";
import frag from "./frag.glsl?raw";

export default class Multiply extends BaseScreenInputFilter {
	constructor () {
		super(vert, frag, {
			uTexture_ST: [1, 1, 0, 0],

			uReference: Shared.instance.renderTexture2,
			uScreenTextureSize: [1, 1],
		});

		this.autoFit = false; // do not crop & adjust uv
	}

	destroy (): void {
		super.destroy();
	}
}
