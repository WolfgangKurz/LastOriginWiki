import * as PIXI from "pixi.js";

export default class FadeSprite extends PIXI.NineSlicePlane {
	constructor (texture: PIXI.Texture<PIXI.Resource>, leftWidth: number = 0, topHeight: number = 0, rightWidth: number = 0, bottomHeight: number = 0) {
		super(texture, leftWidth, topHeight, rightWidth, bottomHeight);
	}

	/** `duration` in secs */
	public fadeIn (duration: number = 3.0) {
		this.alpha = 0;

		const ticker = PIXI.Ticker.shared;
		const onTick = (dt: number) => {
			const secs = dt / PIXI.Ticker.targetFPMS / 1000;
			this.alpha += secs / duration;

			if (this.alpha >= 1) {
				ticker.remove(onTick);
				this.alpha = 1;
			}
		};

		ticker.add(onTick);
	}

	/** `duration` in secs */
	public fadeOut (duration: number = 3.0) {
		this.alpha = 1;

		const ticker = PIXI.Ticker.shared;
		const onTick = (dt: number) => {
			const secs = dt / PIXI.Ticker.targetFPMS / 1000;
			this.alpha -= secs / duration;

			if (this.alpha <= 0) {
				ticker.remove(onTick);
				this.alpha = 0;
			}
		};

		ticker.add(onTick);
	}
}
