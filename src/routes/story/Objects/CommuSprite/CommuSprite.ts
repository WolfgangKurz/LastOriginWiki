import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const";
import { groupBy } from "@/libs/Functions";

import { AnimationFrame, AnimationValue } from "../../Effects/AnimationEffect";

import FadeContainer from "@/components/pixi/FadeContainer";
import HologramNoiseAlpha from "@/components/pixi/shaders/HologramNoiseAlpha";

import Additive from "./Additive";

export default class CommuSprite extends FadeContainer {
	private glow: PIXI.Sprite;
	private fx2: PIXI.Sprite;
	private fx2_1: PIXI.Sprite;

	private totalTime: number = 0;

	private fn: typeof this.tick = this.tick.bind(this);

	private get frames (): AnimationFrame[] {
		return [
			//#region fx2.x
			{ key: "fx2.x", frame: 0, value: 14.766 },
			{ key: "fx2.x", frame: 5, value: 22.558 },
			{ key: "fx2.x", frame: 18, value: 14.766 },
			{ key: "fx2.x", frame: 24, value: 22.558 },
			{ key: "fx2.x", frame: 47, value: 14.766 },
			{ key: "fx2.x", frame: 50, value: 24.004 },
			{ key: "fx2.x", frame: 51, value: 25.715 },
			{ key: "fx2.x", frame: 69, value: 14.766 },
			{ key: "fx2.x", frame: 75, value: 22.558 },
			{ key: "fx2.x", frame: 98, value: 14.766 },
			{ key: "fx2.x", frame: 104, value: 22.558 },
			{ key: "fx2.x", frame: 133, value: 14.766 },
			{ key: "fx2.x", frame: 139, value: 19.927 },
			{ key: "fx2.x", frame: 149, value: 14.766 },
			{ key: "fx2.x", frame: 155, value: 22.558 },
			{ key: "fx2.x", frame: 169, value: 14.766 },
			{ key: "fx2.x", frame: 175, value: 22.558 },
			{ key: "fx2.x", frame: 209, value: 14.766 },
			{ key: "fx2.x", frame: 215, value: 32.766 },
			{ key: "fx2.x", frame: 219, value: 14.766 },
			//#endregion
		];
	}

	constructor (texture: PIXI.Texture<PIXI.Resource>) {
		super();
		console.log(texture);
		this.sortableChildren = true;

		const px = texture.width / 2;
		const py = texture.height;

		const face = new PIXI.Sprite(texture); // new PIXI.Mesh(geo, this._shader);
		face.name = "@face";
		face.filters = [new HologramNoiseAlpha()];
		face.width = this.width = texture.width;
		face.height = this.height = texture.height;
		this.addChild(face);

		this.glow = new PIXI.Sprite();
		this.glow.name = "@glow";
		this.glow.tint = 0x004FD0;
		this.glow.zIndex = -1;
		this.glow.position.set(px, py / 2);
		this.addChild(this.glow);

		const fx1 = new PIXI.Sprite();
		fx1.name = "@fx1";
		fx1.tint = 0x1B2B45;
		// fx1.blendMode = PIXI.BLEND_MODES.ADD;
		fx1.filters = [new Additive()];
		fx1.zIndex = 1;
		fx1.position.set(px + 21, py);
		this.addChild(fx1);

		const fx1_1 = new PIXI.Sprite();
		fx1_1.name = "@fx1-1";
		fx1_1.tint = 0x1B2B45;
		// fx1_1.blendMode = PIXI.BLEND_MODES.ADD;
		fx1_1.filters = [new Additive()];
		fx1_1.zIndex = 1;
		fx1_1.position.set(px + 21, 0);
		this.addChild(fx1_1);

		this.fx2 = new PIXI.Sprite();
		this.fx2.name = "@fx2";
		this.fx2.tint = 0x4E8EF8;
		// this.fx2.blendMode = PIXI.BLEND_MODES.ADD;
		this.fx2.filters = [new Additive()];
		this.fx2.zIndex = 1;
		this.fx2.position.set(px + 21, py);
		this.addChild(this.fx2);

		this.fx2_1 = new PIXI.Sprite();
		this.fx2_1.name = "@fx2-1";
		this.fx2_1.tint = 0x4E8EF8;
		// this.fx2_1.blendMode = PIXI.BLEND_MODES.ADD;
		this.fx2_1.filters = [new Additive()];
		this.fx2_1.zIndex = 1;
		this.fx2_1.position.set(px + 21, 0);
		this.addChild(this.fx2_1);

		fx1.alpha = fx1_1.alpha = 0.5;

		PIXI.Ticker.shared.add(this.fn);

		PIXI.Texture.fromURL(`${AssetsRoot}/story/ui/glow.png`).then((t) => {
			if (this.destroyed) {
				t.destroy();
				return;
			}

			this.glow.texture = fx1.texture = fx1_1.texture = this.fx2.texture = this.fx2_1.texture = t;

			this.glow.scale.set(24.7104, 25.66547);
			this.glow.pivot.set(t.width / 2, t.height / 2);

			fx1.scale.set(13.71477, 14.24484);
			fx1.pivot.set(t.width / 2, t.height / 2);

			fx1_1.scale.set(13.71477, -7.462671);
			fx1_1.pivot.set(t.width / 2, t.height / 2);

			this.fx2.scale.set(1, 1.935376);
			this.fx2.pivot.set(t.width / 2, t.height / 2);

			this.fx2_1.scale.set(1, 1.935376);
			this.fx2_1.pivot.set(t.width / 2, t.height / 2);
		});
	}

	private tick (dt: number) {
		this.totalTime += dt / PIXI.Ticker.targetFPMS / 1000;
		const t = this.totalTime;

		const frames = this.CurrentFrames();
		frames.forEach(f => {
			this.fx2.scale.set(f.value, this.fx2.scale.y);
			this.fx2_1.scale.set(f.value, this.fx2_1.scale.y);
		});
	}

	destroy (options?: boolean | PIXI.IDestroyOptions | undefined): void {
		super.destroy(options);
		PIXI.Ticker.shared.remove(this.fn);
	}

	private CurrentFrames (): AnimationValue[] {
		let frame = this.totalTime / (1.0 / 60.0);
		frame %= 220;

		const values: AnimationValue[] = [];

		const group = groupBy(this.frames, v => v.key);
		Object.keys(group).forEach(key => {
			const sorted = group[key].sort((a, b) => a.frame - b.frame);
			const index = sorted.findIndex(f => f.frame > frame);

			if (index === -1) // after last frame
				values.push({ key, value: sorted[sorted.length - 1].value });
			else if (index === 0) // before first frame
				values.push({ key, value: sorted[0].value });
			else { // between two frame
				const from = sorted[index - 1];
				const to = sorted[index];

				const frameTime = frame - from.frame;
				const frameDuration = to.frame - from.frame;
				const frameValue = to.value - from.value;

				const value = from.value + frameValue * (frameTime / frameDuration);
				values.push({ key, value });
			}
		});

		return values;
	}
}
