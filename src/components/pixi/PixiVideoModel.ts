import * as PIXI from "pixi.js";
import * as LAYERS from "@pixi/layers";

import { AssetsRoot, IsDev } from "@/libs/Const";

import FadeContainer from "./FadeContainer";
import Matrix3D from "@/components/u2dmodel-renderer/Matrix3D";

export default class PixiVideoModel extends FadeContainer {
	private readonly _model: string;
	public get model (): string {
		return this._model;
	}

	constructor (video: string) {
		super();
		this.sortableChildren = true;

		this._model = video;

		const videoURL = `${AssetsRoot}/webm/HD/${video}.webm`;

		this.layerableChildren = true;

		PIXI.Texture.fromURL(videoURL)
			.then(tex => {
				const res = tex.baseTexture.resource as PIXI.VideoResource;
				res.source.loop = true;
				res.source.muted = true;

				const sp = new PIXI.Sprite(tex);
				sp.anchor.set(.5, .5);
				sp.scale.set(.5, .5);
				this.addChild(sp);
			});
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		super.destroy(options);
	}
}
