import * as PIXI from "pixi.js";

export default class FadeText extends PIXI.HTMLText {
	constructor (text?: string, style?: PIXI.HTMLTextStyle | PIXI.TextStyle | Partial<PIXI.ITextStyle>) {
		super(text, style);
		this.roundPixels = true;
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
