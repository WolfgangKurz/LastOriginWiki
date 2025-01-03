import { Assets, DestroyOptions, Sprite, Texture, VideoSource } from "pixi.js";

import { AssetsRoot } from "@/libs/Const";

import FadeContainer from "./FadeContainer";

export default class PixiVideoModel extends FadeContainer {
	private readonly _model: string;
	public get model (): string {
		return this._model;
	}

	constructor (video: string) {
		super();
		this.sortableChildren = true;

		this._model = video;

		Assets.load(`${AssetsRoot}/webm/HD/${video}.webm`)
			.then((tex: Texture<VideoSource>) => {
				tex.source.resource.loop = true;
				tex.source.resource.muted = true;

				const sp = new Sprite(tex);
				sp.anchor.set(.5, .5);
				sp.scale.set(.5, .5);
				this.addChild(sp);
			});
	}

	destroy (options?: DestroyOptions): void {
		super.destroy(options);
	}
}
