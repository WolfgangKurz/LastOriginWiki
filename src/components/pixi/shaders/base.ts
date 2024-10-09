import * as PIXI from "pixi.js";

export default class BaseScreenInputFilter extends PIXI.Filter {
	constructor (vert?: string, frag?: string, uniforms?: Record<string, any>) {
		super(vert, frag, uniforms);
	}
}
