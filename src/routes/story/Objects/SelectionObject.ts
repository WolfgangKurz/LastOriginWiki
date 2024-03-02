import * as PIXI from "pixi.js";

import { DIALOG_SPEAKER } from "@/types/Enums";

import { AssetsRoot } from "@/libs/Const";

import { fontFamily } from "../common";

import FadeText from "@/components/pixi/FadeText";
import FadeSprite from "@/components/pixi/FadeSprite";

export default class SelectionObject extends PIXI.Container {
	private texButton: PIXI.Texture | null = null;
	private buttons: FadeSprite[] = [];

	private _display = false;
	public get display () {
		return this._display;
	}
	public setDisplay (value: boolean) {
		this._display = value;

		this.update();
		this.visible = value;
	}

	private _text: string[] = [];
	public get text (): string[] {
		return this._text;
	}
	public setText (value: string[]) {
		this._text = value;
		this.update();
	}

	constructor () {
		super();

		this.width = 1280;
		this.height = 720;
		this.sortableChildren = true;

		const cover = new PIXI.Graphics();
		cover.beginFill(0x000000, 0.7);
		cover.drawRect(0, 0, 1280, 720);
		cover.eventMode = "static";
		cover.zIndex = 1200;
		this.addChild(cover);

		PIXI.Texture.fromURL(`${AssetsRoot}/story/ui/InputBtn.png`)
			.then(tex => {
				if (this.destroyed) {
					tex.destroy();
					return;
				}

				this.texButton = tex;
				this.update();
			});
	}

	private update () {
		if (this.destroyed || !this.texButton) return;

		if (this.buttons.length > 0) {
			this.buttons.forEach(b => b.destroy());
			this.buttons.splice(0, this.buttons.length);
		}

		const gap = 28;
		const baseY = -(66 * (this.text.length - 1) + gap * (this.text.length - 1)) / 2;

		this.text.forEach((txt, i) => {
			const btn = new FadeSprite(this.texButton!, 10, 10, 10, 10);
			btn.width = 710;
			btn.height = 66;

			btn.cursor = "pointer";
			btn.eventMode = "static";
			btn.zIndex = 1210;

			btn.pivot.set(btn.width / 2, btn.height / 2);
			btn.position.set(640, 360 + baseY + i * (btn.height + gap));

			btn.addEventListener("click", () => this.emit("select", i));
			btn.addEventListener("tap", () => this.emit("select", i));

			const text = new FadeText(txt, {
				align: "CC",
				fill: "#000",
				// fontFamily,
				fontWeight: 500,
				fontSize: 32,
			});
			// text.anchor.set(0.5, 0.5);
			text.position.set(btn.width / 2, btn.height / 2);

			if (text.width > btn.width - 40) {
				const r = (btn.width - 40) / text.width;
				text.scale.set(r);
			}
			btn.addChild(text);

			this.buttons.push(btn);
			this.addChild(btn);
		});
	}
}
