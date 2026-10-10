import * as PIXI from "pixi.js";

export default class FadeContainer extends PIXI.Container {
	private _fading: boolean = false;
	public get fading () {
		return this._fading;
	}

	private fadeTick: ((dt: number) => void) | null = null;

	/** Finish current fading at next tick */
	public stopFade () {
		this._fading = false;
	}

	/** `duration` in secs */
	public fadeIn (duration: number = 3.0) {
		this.fade(1, duration);
	}

	/** `duration` in secs */
	public fadeOut (duration: number = 3.0) {
		this.fade(0, duration);
	}

	/**
	 * Request while fading continues from current alpha,
	 * remaining time is proportional to remaining alpha (`duration` is for full 0 <-> 1)
	 */
	private fade (target: number, duration: number) {
		if (this._fading)
			duration *= Math.abs(target - this.alpha);
		else
			this.alpha = 1 - target;

		const ticker = PIXI.Ticker.shared;
		if (this.fadeTick) ticker.remove(this.fadeTick);

		const from = this.alpha;
		let elapsed = 0;
		const onTick = (dt: number) => {
			elapsed += dt / PIXI.Ticker.targetFPMS / 1000;

			if (elapsed >= duration || !this._fading || this.destroyed) {
				this._fading = false;
				ticker.remove(onTick);
				if (this.fadeTick === onTick) this.fadeTick = null;
				this.alpha = target;
				return;
			}
			this.alpha = from + (target - from) * elapsed / duration;
		};

		this._fading = true;
		this.fadeTick = onTick;
		ticker.add(onTick);
	}
}
