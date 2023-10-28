import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const";

import AnimationEffect, { AnimationFrame } from "@/routes/story/Effects/AnimationEffect";

export default class Animation_OpenEyes extends AnimationEffect {
	protected get frames (): AnimationFrame[] {
		return [
			{ key: "black1.y", frame: 0, value: -138 },
			{ key: "black1.y", frame: 19, value: -274.35 },
			{ key: "black1.y", frame: 31, value: -311.94 },
			{ key: "black1.y", frame: 50, value: -138 },
			{ key: "black1.y", frame: 69, value: -274.35 },
			{ key: "black1.y", frame: 98, value: -311.94 },
			{ key: "black1.y", frame: 107, value: -138 },
			{ key: "black1.y", frame: 116, value: -274.35 },
			{ key: "black1.y", frame: 127, value: -311.94 },
			{ key: "black1.y", frame: 140, value: -138 },
			{ key: "black1.y", frame: 172, value: -1353 },

			{ key: "black2.y", frame: 0, value: -623 },
			{ key: "black2.y", frame: 19, value: -93.83 },
			{ key: "black2.y", frame: 31, value: -58.49 },
			{ key: "black2.y", frame: 50, value: -469 },
			{ key: "black2.y", frame: 69, value: -93.83 },
			{ key: "black2.y", frame: 98, value: -58.49 },
			{ key: "black2.y", frame: 107, value: -439 },
			{ key: "black2.y", frame: 116, value: -93.83 },
			{ key: "black2.y", frame: 127, value: -58.49 },
			{ key: "black2.y", frame: 140, value: -439 },
			{ key: "black2.y", frame: 172, value: 1048 },

			{ key: "bg1.alpha", frame: 172, value: 1 },
			{ key: "bg1.alpha", frame: 235, value: 0 },

			{ key: "bg2.visible", frame: 0, value: 1 },
			{ key: "bg2.visible", frame: 245, value: 0 },
		];
	}

	private container: PIXI.Container;
	private bg1: PIXI.Sprite;
	private bg2: PIXI.Sprite;
	private black1: PIXI.Graphics;
	private black2: PIXI.Graphics;

	constructor (screen: Readonly<PIXI.Container>) {
		super(screen);
		this.enabled = true;

		this.container = new PIXI.Container();
		this.container.sortableChildren = true;
		this.container.zIndex = 900;
		screen.addChild(this.container);

		this.bg1 = new PIXI.Sprite();
		this.bg1.width = 1280;
		this.bg1.height = 720;
		this.bg1.zIndex = -2;
		this.container.addChild(this.bg1);

		this.bg2 = new PIXI.Sprite();
		this.bg2.width = 1280;
		this.bg2.height = 720;
		this.bg2.zIndex = -3;
		this.container.addChild(this.bg2);

		this.black1 = new PIXI.Graphics();
		this.black1.beginFill(0x000000);
		this.black1.drawRect(0, 0, 1280, 220);
		this.black1.width = 1280;
		this.black1.height = 220;
		this.black1.scale.set(1, 1.842851);
		this.black1.zIndex = 3;
		this.container.addChild(this.black1);

		this.black2 = new PIXI.Graphics();
		this.black2.beginFill(0x000000);
		this.black2.drawRect(0, 0, 1280, 220);
		this.black2.width = 1280;
		this.black2.height = 220;
		this.black2.scale.set(1, 3.07201);
		this.black2.zIndex = 3;
		this.container.addChild(this.black2);

		Promise.all(
			["BG_HoleLight_LBlur", "BG_HoleLight"]
				.map(f => PIXI.Texture.from(`${AssetsRoot}/story/bg/${f}.jpg`)),
		).then(tex => {
			if (this.destroyed) {
				tex.forEach(t => t.destroy());
				return;
			}

			this.bg1.texture = tex[0];
			this.bg2.texture = tex[1];
		});
	}

	public Destroy () {
		if (this.destroyed) return;
		this.destroyed = true;

		this.container.destroy();
	}

	public Update (delta: number): void {
		super.Update(delta);

		const frames = this.CurrentFrames();
		frames.forEach(f => {
			if (f.key === "black1.y")
				this.black1.position.set(0, f.value + 40);
			else if (f.key === "black2.y")
				this.black2.position.set(0, f.value + 740);
			else if (f.key === "bg1.alpha")
				this.bg1.alpha = f.value;
			else if (f.key === "bg2.visible")
				this.bg2.visible = f.value !== 0;
		});
	}

	public FinishCheck (): number {
		return super.FinishCheck();
	}
}
