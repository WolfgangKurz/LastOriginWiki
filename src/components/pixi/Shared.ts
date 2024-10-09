import * as PIXI from "pixi.js";

import Pixi2DModel from "@/components/pixi/Pixi2DModel";

export default class Shared {
	private static _shared: Shared = new Shared();
	public static get instance () {
		return Shared._shared;
	}

	private _renderTexture1: PIXI.RenderTexture;
	private _renderTexture2: PIXI.RenderTexture;

	/** for renderer */
	public get renderTexture1 (): PIXI.RenderTexture { return this._renderTexture1; }

	/** for shader */
	public get renderTexture2 (): PIXI.RenderTexture { return this._renderTexture2; }

	public host: Pixi2DModel | null = null;
	public inRendering: boolean = false;

	private constructor () { // new guard
		this._renderTexture1 = PIXI.RenderTexture.create({ width: 1, height: 1 });
		this._renderTexture2 = PIXI.RenderTexture.create({ width: 1, height: 1 });
	}

	public resize (width: number, height: number): void {
		this._renderTexture1.resize(width, height, true);
		this._renderTexture2.resize(width, height, true);
	}

	public apply (renderer: PIXI.Renderer, targetRenderTexture?: PIXI.RenderTexture): void {
		const sp = PIXI.Sprite.from(targetRenderTexture || this._renderTexture1);
		renderer.render(sp, { renderTexture: this.renderTexture2 });
	}

	public static RenderableObjects (root: PIXI.Container): PIXI.DisplayObject[] {
		const ret: PIXI.DisplayObject[] = [];

		function trav (o: PIXI.DisplayObject) {
			if (o instanceof PIXI.DisplayObject && o.renderable && o.worldVisible) {
				ret.push(o);
			}

			if (o.children) {
				for (const c of o.children) {
					if (c instanceof PIXI.Container)
						trav(c);
				}
			}
		}
		trav(root);

		return ret;
	}
}
