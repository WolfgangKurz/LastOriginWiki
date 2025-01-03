import { Container, Ticker } from "pixi.js";

export default class FadeContainer extends Container {
	private _fading: boolean = false;
	public get fading () {
		return this._fading;
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
