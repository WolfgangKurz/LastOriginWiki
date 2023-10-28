import * as PIXI from "pixi.js";

import EffectBase from "./EffectBase";
import { AssetsRoot } from "@/libs/Const";

export default class VideoEffect extends EffectBase {
	private container: PIXI.Container;
	private sprite: PIXI.Sprite | null = null;

	constructor (screen: Readonly<PIXI.Container>, source: string) {
		super(screen);
		this.enabled = true;

		this.container = new PIXI.Container();
		this.container.name = "@VideoEffect";
		this.container.zIndex = 900;
		screen.parent.addChild(this.container);

		const url = `${AssetsRoot}/story/video/${source}.webm`;
		PIXI.Texture.fromURL<PIXI.VideoResource>(url)
			.then(tex => {
				if (this.destroyed) {
					tex.destroy();
					return;
				}

				const el = tex.baseTexture.resource.source;
				el.addEventListener("ended", () => {
					this._done = true;
					if (this.onDone) this.onDone();
				});
				el.volume = 0.5;

				this.sprite = new PIXI.Sprite(tex);
				this.sprite.name = "@VideoSprite"
				this.sprite.width = 1280;
				this.sprite.height = 720;
				this.container.addChild(this.sprite);
			});
	}

	public Destroy () {
		if (this.destroyed) return;
		this.destroyed = true;

		this.container.destroy({
			baseTexture: true,
			children: true,
			texture: true,
		});
	}

	public Update (delta: number): void { }

	public FinishCheck (): number {
		return -1; // control manually
	}
}
