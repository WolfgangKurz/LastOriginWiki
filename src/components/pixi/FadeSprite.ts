import { NineSliceSprite, Texture, Ticker } from "pixi.js";

export default class FadeSprite extends NineSliceSprite {
	private _fading: boolean = false;
	public get fading () {
		return this._fading;
	}

	constructor (texture: Texture, leftWidth: number = 0, topHeight: number = 0, rightWidth: number = 0, bottomHeight: number = 0) {
		super({
			texture,
			leftWidth, topHeight, rightWidth, bottomHeight,
		});
	}

	public stopFade () {
		this._fading = false;
	}

	/** `duration` in secs */
	public fadeIn (duration: number = 3.0) {
		if (this._fading) return; // no fading on same time

		this.alpha = 0;

		const ticker = Ticker.shared;
		const onTick = (ticker: Ticker) => {
			const dt = ticker.deltaTime;
			const secs = dt / Ticker.targetFPMS / 1000;
			this.alpha += secs / duration;

			if (this.alpha >= 1 || !this._fading || this.destroyed) {
				this._fading = false;
				ticker.remove(onTick);
				this.alpha = 1;
			}
		};

		this._fading = true;
		ticker.add(onTick);
	}

	/** `duration` in secs */
	public fadeOut (duration: number = 3.0) {
		if (this._fading) return; // no fading on same time

		this.alpha = 1;

		const ticker = Ticker.shared;
		const onTick = (ticker: Ticker) => {
			const dt = ticker.deltaTime;
			const secs = dt / Ticker.targetFPMS / 1000;
			this.alpha -= secs / duration;

			if (this.alpha <= 0 || !this._fading || this.destroyed) {
				this._fading = false;
				ticker.remove(onTick);
				this.alpha = 0;
			}
		};

		this._fading = true;
		ticker.add(onTick);
	}
}
