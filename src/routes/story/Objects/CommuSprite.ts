import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const";
import { groupBy } from "@/libs/Functions";

import { AnimationFrame, AnimationValue } from "../Effects/AnimationEffect";

import FadeContainer from "./FadeContainer";

import vert from "./shader/vert.glsl?raw";
import frag from "./shader/commu.frag.glsl?raw";

export default class CommuSprite extends FadeContainer {
	private FX_hologram: PIXI.Texture | null = null;

	private glow: PIXI.Sprite;
	private fx2: PIXI.Sprite;
	private fx2_1: PIXI.Sprite;

	private _shader: PIXI.Shader;
	private totalTime: number = 0;

	private fn: typeof this.tick = this.tick.bind(this);

	private get frames (): AnimationFrame[] {
		return [
			//#region noise
			{ key: "noise", frame: 0, value: 0 },
			{ key: "noise", frame: 5, value: -0.01 },
			{ key: "noise", frame: 6, value: -0.0089 },
			{ key: "noise", frame: 20, value: -0.0089 },
			{ key: "noise", frame: 22, value: 0.01 },
			{ key: "noise", frame: 23, value: -0.0089 },
			{ key: "noise", frame: 28, value: 0 },
			{ key: "noise", frame: 69, value: 0 },
			{ key: "noise", frame: 74, value: -0.0089 },
			{ key: "noise", frame: 76, value: -0.01 },
			{ key: "noise", frame: 77, value: -0.0089 },
			{ key: "noise", frame: 81, value: 0 },
			{ key: "noise", frame: 94, value: 0 },
			{ key: "noise", frame: 96, value: -0.0089 },
			{ key: "noise", frame: 98, value: -0.01 },
			{ key: "noise", frame: 99, value: -0.0089 },
			{ key: "noise", frame: 101, value: 0 },
			{ key: "noise", frame: 104, value: -0.01 },
			{ key: "noise", frame: 106, value: 0.01 },
			{ key: "noise", frame: 107, value: -0.0089 },
			{ key: "noise", frame: 110, value: 0 },
			{ key: "noise", frame: 120, value: 0 },
			{ key: "noise", frame: 122, value: -0.0089 },
			{ key: "noise", frame: 123, value: -0.01 },
			{ key: "noise", frame: 124, value: -0.0089 },
			{ key: "noise", frame: 127, value: 0 },
			{ key: "noise", frame: 135, value: 0 },
			{ key: "noise", frame: 138, value: -0.0089 },
			{ key: "noise", frame: 140, value: -0.01 },
			{ key: "noise", frame: 141, value: -0.0089 },
			{ key: "noise", frame: 144, value: 0 },
			{ key: "noise", frame: 189, value: 0 },
			{ key: "noise", frame: 192, value: -0.0089 },
			{ key: "noise", frame: 194, value: 0.02 },
			{ key: "noise", frame: 195, value: -0.0089 },
			{ key: "noise", frame: 199, value: 0 },
			{ key: "noise", frame: 212, value: 0 },
			{ key: "noise", frame: 214, value: -0.0089 },
			{ key: "noise", frame: 216, value: 0 },
			{ key: "noise", frame: 217, value: -0.0089 },
			{ key: "noise", frame: 219, value: 0.0468 },
			//#endregion

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
		this.sortableChildren = true;

		this._shader = PIXI.Shader.from(vert, frag, {
			uTime: [0, 0, 0, 0],

			uTexture: texture,
			uTexture_ST: [1, 1, 0, 0],
			uTintColor: [163, 241, 255, 255].map(r => r / 255),

			uSegments: 1,
			uWaveSpeed: -0.25,
			uWavePower: 16.8,
			uScreenSegments: 122.3,
			uScreenPosterize: 2,
			uScreenNoise: 0,
			uOutPower: 1.4,

			uFX: null,
			uFX_ST: [0.67, 1, 0, 0],
		});

		const geo = new PIXI.Geometry()
			.addAttribute("aVertexPosition", [
				0, 0, /*LT*/	1, 0, /*RT*/	0, 1, /*LB*/
				1, 0, /*RT*/	1, 1, /*RB*/	0, 1, /*LB*/
			])
			.addAttribute("aUV", [
				0, 0, 1, 0, 0, 1,
				1, 0, 1, 1, 0, 1,
			]);

		const px = texture.width / 2;
		const py = texture.height;

		const face = new PIXI.Mesh(geo, this._shader);
		face.name = "@face";
		this.width = face.width = texture.width;
		this.height = face.height = texture.height;
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
		fx1.blendMode = PIXI.BLEND_MODES.ADD;
		fx1.zIndex = 1;
		fx1.position.set(px + 21, py);
		this.addChild(fx1);

		const fx1_1 = new PIXI.Sprite();
		fx1_1.name = "@fx1-1";
		fx1_1.tint = 0x1B2B45;
		fx1_1.blendMode = PIXI.BLEND_MODES.ADD;
		fx1_1.zIndex = 1;
		fx1_1.position.set(px + 21, 0);
		this.addChild(fx1_1);

		this.fx2 = new PIXI.Sprite();
		this.fx2.name = "@fx2";
		this.fx2.tint = 0x4E8EF8;
		this.fx2.blendMode = PIXI.BLEND_MODES.ADD;
		this.fx2.zIndex = 1;
		this.fx2.position.set(px + 21, py);
		this.addChild(this.fx2);

		this.fx2_1 = new PIXI.Sprite();
		this.fx2_1.name = "@fx2-1";
		this.fx2_1.tint = 0x4E8EF8;
		this.fx2_1.blendMode = PIXI.BLEND_MODES.ADD;
		this.fx2_1.zIndex = 1;
		this.fx2_1.position.set(px + 21, 0);
		this.addChild(this.fx2_1);

		fx1.alpha = fx1_1.alpha = 0.5;

		PIXI.Ticker.shared.add(this.fn);

		Promise.all([
			PIXI.Texture.fromURL(`${AssetsRoot}/story/ui/FX_Hologram.png`),
			PIXI.Texture.fromURL(`${AssetsRoot}/story/ui/glow.png`),
		]).then(([t1, t2]) => {
			if (this.destroyed) {
				t1.destroy();
				t2.destroy();
				return;
			}

			this.FX_hologram = t1;
			this.glow.texture = fx1.texture = fx1_1.texture = this.fx2.texture = this.fx2_1.texture = t2;

			this.glow.scale.set(24.7104, 25.66547);
			this.glow.pivot.set(t2.width / 2, t2.height / 2);

			fx1.scale.set(13.71477, 14.24484);
			fx1.pivot.set(t2.width / 2, t2.height / 2);

			fx1_1.scale.set(13.71477, -7.462671);
			fx1_1.pivot.set(t2.width / 2, t2.height / 2);

			this.fx2.scale.set(1, 1.935376);
			this.fx2.pivot.set(t2.width / 2, t2.height / 2);

			this.fx2_1.scale.set(1, 1.935376);
			this.fx2_1.pivot.set(t2.width / 2, t2.height / 2);

			this._shader.uniforms.uFX = this.FX_hologram;
		});
	}

	private tick (dt: number) {
		this.totalTime += dt / PIXI.Ticker.targetFPMS / 1000;
		const t = this.totalTime;
		this._shader.uniforms.uTime = [t / 20, t, t * 2, t * 3];

		const frames = this.CurrentFrames();
		frames.forEach(f => {
			if (f.key === "noise")
				this._shader.uniforms.uScreenNoise = f.value;
			else if (f.key === "fx2.x") {
				this.fx2.scale.set(f.value, this.fx2.scale.y);
				this.fx2_1.scale.set(f.value, this.fx2_1.scale.y);
			}
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
