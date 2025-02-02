import * as PIXI from "pixi.js";

import { DIALOG_SPEAKER } from "@/types/Enums";

import { AssetsRoot } from "@/libs/Const";

import FadeText from "@/components/pixi/FadeText";
import FadeSprite from "@/components/pixi/FadeSprite";

export default class DialogObject extends PIXI.Container {
	private readonly WIDTH: number = 1280 - 45 - 45;
	private readonly HEIGHT: number = 162;

	private readonly FadeDuration: number = 0.13;

	private dialogObject: PIXI.NineSlicePlane | null = null;
	private charDisp: FadeSprite | null = null;
	private textObject: FadeText | null = null;
	private speakerObject: FadeText | null = null;

	private _display = false;
	public get display () {
		return this._display;
	}
	public setDisplay (value: boolean) {
		this._display = value;
		if (value)
			this.fadeIn(this.FadeDuration);
		else
			this.fadeOut(this.FadeDuration);
	}

	private _text: string = "";
	public get text (): string {
		return this._text;
	}
	public setText (value: string) {
		this._text = value;
		if (this.textObject) {
			// const _ = (s: string): string => {
			// 	const v = new Array(5)
			// 		.fill("0 0 1.5px #000")
			// 		.join(",");
			// 	return `<span style="text-shadow:${v}">${s}</span>`;
			// };

			this.textObject.text = value;
			this.textObject.fadeIn(this.FadeDuration);
		}
	}

	private _speaker: string = "";
	private _speakerPosition: DIALOG_SPEAKER = DIALOG_SPEAKER.NONE;
	public get speaker (): string {
		return this._speaker;
	}
	public get speakerPosition (): DIALOG_SPEAKER {
		return this._speakerPosition;
	}
	public setSpeaker (speaker: string, position: DIALOG_SPEAKER) {
		const prev = this._speaker;

		this._speaker = speaker;
		this._speakerPosition = position;

		if (this.speakerObject && speaker)
			this.speakerObject.text = speaker;

		if (speaker) {
			if (this.charDisp) {
				switch (this.speakerPosition) {
					case DIALOG_SPEAKER.LEFT:
						this.charDisp.position.set(34, -17);
						break;
					case DIALOG_SPEAKER.RIGHT:
						this.charDisp.position.set(this.WIDTH - 340 - 34, -17);
						break;
					case DIALOG_SPEAKER.CENTER:
						this.charDisp.position.set(this.WIDTH / 2 - 340 / 2, -17);
						break;
				}

				if (!prev)
					this.charDisp.fadeIn(this.FadeDuration);
			}
		} else {
			if (this.charDisp && this.charDisp.alpha > 0)
				this.charDisp.fadeOut(this.FadeDuration);
		}
	}

	constructor () {
		super();

		this.position.set(45, 720 - this.HEIGHT - 45);

		this.width = this.WIDTH;
		this.height = this.HEIGHT;

		const dialog = PIXI.Texture.from(`${AssetsRoot}/story/ui/Dialog.png`);
		const charName = PIXI.Texture.from(`${AssetsRoot}/story/ui/CharName.png`);

		if (this.destroyed) {
			dialog.destroy();
			charName.destroy();
			return;
		}

		this.dialogObject = new PIXI.NineSlicePlane(dialog, 10, 128, 657, 114);
		this.dialogObject.name = "dialogObject";
		this.dialogObject.width = this.WIDTH;
		this.dialogObject.height = this.HEIGHT;
		this.addChild(this.dialogObject);

		this.charDisp = new FadeSprite(charName);
		this.charDisp.name = "charDisp";
		this.charDisp.width = 340;
		this.charDisp.height = 32;
		this.charDisp.alpha = 0;
		this.addChild(this.charDisp);

		this.textObject = new FadeText("", {
			align: "LC",
			fontSize: 28,
			fill: "#fff",
			stroke: "#000",
			strokeWidth: 1.5,
			lineHeight: 1.35,
			wrapWidth: this.WIDTH - 60,
		});
		this.textObject.position.set(30, 81);
		this.dialogObject.addChild(this.textObject);

		this.speakerObject = new FadeText("", {
			align: "CC",
			fontWeight: 500,
			fontSize: 20,
			fill: "#fff",
			stroke: "#000",
			strokeWidth: 1,
		});
		this.speakerObject.position.set(170, 16);
		this.charDisp.addChild(this.speakerObject);

		this.setText(this._text);
		this.setSpeaker(this._speaker, this._speakerPosition);
		this.setDisplay(this._display);
	}

	/** `duration` in secs */
	public fadeIn (duration: number = 0.5) {
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
	public fadeOut (duration: number = 0.5) {
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
