import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const.1";

import FadeText from "@/components/pixi/FadeText";
import FadeSprite from "@/components/pixi/FadeSprite";

export default class SelectionObject extends PIXI.Container {
	private texButton: PIXI.Texture | null = null;
	private buttons: FadeSprite[] = [];

	private static readonly BUTTON_WIDTH = 733;
	private static readonly BUTTON_SCALE = 0.8695652173913; // 1.0 / 1.15

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

		const coverTex = PIXI.Texture.from(`${AssetsRoot}/story/ui/UI_Dialog_Popup_DialogSelect_Frame_FiveDialog.png`);
		this.texButton = PIXI.Texture.from(`${AssetsRoot}/story/ui/newui_Dialoge_TextBar_s.png`);

		if (this.destroyed) {
			coverTex.destroy();
			this.texButton.destroy();
			return;
		}

		const cover = new PIXI.NineSlicePlane(coverTex, 10, 10, 10, 10);
		cover.position.set(0, 0);
		cover.width = 1280;
		cover.height = 720;
		cover.eventMode = "static";
		cover.zIndex = 1200;
		this.addChild(cover);

		this.update();
	}

	private update () {
		if (this.destroyed || !this.texButton) return;

		if (this.buttons.length > 0) {
			this.buttons.forEach(b => b.destroy({ baseTexture: false, texture: false }));
			this.buttons = [];
		}

		const gap = 28;
		const baseY = -(66 * (this.text.length - 1) + gap * (this.text.length - 1)) / 2;

		this.text.forEach((txt, i) => {
			const btn = new FadeSprite(this.texButton!, 0, 0, 0, 0);
			btn.name = `selection ${i} -> ${txt}`;
			btn.width = SelectionObject.BUTTON_WIDTH * 1.15;
			btn.height = 87 * 1.15;
			btn.scale.set(SelectionObject.BUTTON_SCALE);

			btn.cursor = "pointer";
			btn.eventMode = "static";
			btn.zIndex = 1210;

			btn.pivot.set(btn.width / 2, btn.height / 2);
			btn.position.set(640, 360 + baseY + i * (btn.height + gap));

			btn.addEventListener("click", () => this.emit("select", i));
			btn.addEventListener("tap", () => this.emit("select", i));

			btn.addEventListener("pointerenter", () => this.scaleTo(btn, SelectionObject.BUTTON_SCALE, 1.0));
			btn.addEventListener("pointerleave", () => this.scaleTo(btn, 1.0, SelectionObject.BUTTON_SCALE));

			const text = new FadeText("", {
				align: "CC",
				fill: "#000",
				fontWeight: 600,
				fontSize: 27 * 1.15,
				stroke: "transparent",
				strokeWidth: 0,
			});
			text.position.set(
				(SelectionObject.BUTTON_WIDTH / 2) * 1.15,
				btn.height / 2 - 7.1 * 1.15
			);
			text.eventMode = "none";

			text.on("update", () => {
				const tw = text.width / text.scale.x;
				if (tw > SelectionObject.BUTTON_WIDTH - 40) {
					const r = (SelectionObject.BUTTON_WIDTH - 40) / tw;
					text.scale.set(r);
				}
			});
			text.text = txt;
			btn.addChild(text);

			this.buttons.push(btn);
			this.addChild(btn);
		});
	}

	/** `duration` in secs */
	private scaleTickers: WeakMap<FadeSprite, number> = new WeakMap();
	public scaleTo (btn: FadeSprite, from: number, to: number, duration: number = 0.12) {
		const id = Math.random();
		this.scaleTickers.set(btn, id);

		btn.scale.set(from);
		console.log(btn, from, to);

		const ticker = PIXI.Ticker.shared;
		let elapsed = 0;
		const onTick = () => {
			const curId = this.scaleTickers.get(btn);
			if (id !== curId || this.destroyed) {
				ticker.remove(onTick);
				return;
			}

			elapsed += ticker.deltaMS / 1000;
			const t = elapsed / duration;

			btn.scale.set(from + (to - from) * t);

			if (t >= 1.0) {
				ticker.remove(onTick);
				this.scaleTickers.delete(btn);

				btn.scale.set(to);
			}
		};
		ticker.add(onTick);
	}
}
