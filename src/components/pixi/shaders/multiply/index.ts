import * as PIXI from "pixi.js";

import BaseScreenInputFilter from "../base";
import Shared from "../../Shared";

import vert from "../vert.glsl?raw";
import frag from "./frag.glsl?raw";

export default class Multiply extends BaseScreenInputFilter {
	private _fn: (delta: number) => void;
	constructor () {
		super(vert, frag, {
			uTexture_ST: [1, 1, 0, 0],

			uReference: Shared.instance.renderTexture2,
			uScreenSize: [1, 1],
		});

		this.autoFit = false; // do not crop & adjust uv

		this._fn = this.fn.bind(this);
		PIXI.Ticker.shared.add(this._fn);
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
