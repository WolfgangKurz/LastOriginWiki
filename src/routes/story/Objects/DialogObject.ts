import * as PIXI from "pixi.js";

import { DIALOG_SPEAKER } from "@/types/Enums";

import { AssetsRoot } from "@/libs/Const";

import FadeText from "@/components/pixi/FadeText";

export default class DialogObject extends PIXI.Container {
	private readonly WIDTH: number = 1280 - 45 - 45;
	private readonly HEIGHT: number = 162;

	private readonly FadeDuration: number = 0.13;

	private backgroundObject: PIXI.NineSlicePlane | null = null;

	private textObject: FadeText | null = null;

	private speakerObject: FadeText | null = null;

	private deco1_1: PIXI.NineSlicePlane | null = null;
	private deco1_2: PIXI.NineSlicePlane | null = null;
	private deco2: PIXI.Sprite | null = null;

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

		if (this.speakerObject) {
			if (speaker) {
				const x = (() => {
					switch (this.speakerPosition) {
						case DIALOG_SPEAKER.LEFT: return 200;
						case DIALOG_SPEAKER.RIGHT: return 980;
						case DIALOG_SPEAKER.CENTER: return 595;
						case DIALOG_SPEAKER.LEFT_CENTER: return 396;
						case DIALOG_SPEAKER.RIGHT_CENTER: return 788;
						default: return 595;
					}
				})();
				this.speakerObject.position.set(x, 0);

				if (!prev)
					this.speakerObject.fadeIn(this.FadeDuration);
			} else {
				if (this.speakerObject.alpha > 0)
					this.speakerObject.fadeOut(this.FadeDuration);
			}
		}
	}

	constructor () {
		super();

		this.position.set(45, 720 - this.HEIGHT - 45);

		this.width = this.WIDTH;
		this.height = this.HEIGHT;

		const background = PIXI.Texture.from(`${AssetsRoot}/story/ui/UI_Common_Frame_GD.png`);
		const deco1 = PIXI.Texture.from(`${AssetsRoot}/story/ui/newui_Popup_Bg_Title_Deco1.png`);
		const deco2 = PIXI.Texture.from(`${AssetsRoot}/story/ui/newui_Popup_Bg_Title_Deco2.png`);

		if (this.destroyed) {
			background.destroy();
			deco1.destroy();
			deco2.destroy();
			return;
		}

		this.backgroundObject = new PIXI.NineSlicePlane(background, 10, 94, 10, 11);
		this.setNineSliceGeometry(this.backgroundObject, 1998, 265, [7, 63, 7, 7]);
		this.backgroundObject.position.set(-404, -58);
		this.backgroundObject.tint = 0x000000;
		this.backgroundObject.alpha = 225 / 255;
		this.addChild(this.backgroundObject);

		this.deco1_1 = new PIXI.NineSlicePlane(deco1, 8, 0, 100, 0);
		this.setNineSliceGeometry(this.deco1_1, 667, 8, [5, 0, 67, 0]);
		this.deco1_1.position.set(-87, 34);
		this.deco1_1.alpha = 120 / 255;
		this.addChild(this.deco1_1);

		this.deco1_2 = new PIXI.NineSlicePlane(deco1, 8, 0, 100, 0);
		this.setNineSliceGeometry(this.deco1_2, 667, 8, [5, 0, 67, 0], true);
		this.deco1_2.position.set(610, 34);
		this.deco1_2.alpha = 120 / 255;
		this.addChild(this.deco1_2);

		this.deco2 = new PIXI.Sprite(deco2);
		this.deco2.width = 11;
		this.deco2.height = 5;
		this.deco2.anchor.set(0.5, 1);
		this.deco2.position.set(595, 46);
		this.addChild(this.deco2);

		this.textObject = new FadeText("", {
			align: "LC",
			fontWeight: 500,
			fontSize: 26.2,
			fill: "#fff",
			// stroke: "#000",
			stroke: "transparent",
			// strokeWidth: 1.5,
			lineHeight: 1.38,
			letterSpacing: 0.41,
			wrapWidth: this.WIDTH - 204,
		});
		this.textObject.position.set(102, 106);
		this.addChild(this.textObject);

		this.speakerObject = new FadeText("", {
			align: "CC",
			fontWeight: 600,
			fontSize: 35,
			fill: "#fff",
			stroke: "transparent",
			// stroke: "#000",
			// strokeWidth: 0.3,
			letterSpacing: 0,

			shadowColor: "#000",
			shadowBlur: 7,
			shadowOffsetX: 0,
			shadowOffsetY: 0.5,
		});
		// this.speakerObject.position.set(170, 12);
		// this.speakerContainer.addChild(this.speakerObject);
		this.addChild(this.speakerObject);

		this.setText(this._text);
		this.setSpeaker(this._speaker, this._speakerPosition);
		this.setDisplay(this._display);
	}

	private setNineSliceGeometry (
		plane: PIXI.NineSlicePlane,
		width: number,
		height: number,
		borders: [left: number, top: number, right: number, bottom: number],
		mirrorX = false,
	) {
		plane.width = width;
		plane.height = height;

		const [left, top, right, bottom] = borders;
		const xs = [0, left, width - right, width];
		const ys = [0, top, height - bottom, height];
		const vertices = plane.geometry.getBuffer("aVertexPosition");

		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				const index = (row * 4 + col) * 2;

				vertices.data[index] = mirrorX
					? width - xs[col]
					: xs[col];
				vertices.data[index + 1] = ys[row];
			}
		}

		vertices.update();
	};

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
