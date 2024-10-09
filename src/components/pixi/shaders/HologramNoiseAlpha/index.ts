import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const";
import { groupBy } from "@/libs/Functions";

import { AnimationFrame, AnimationValue } from "@/routes/story/Effects/AnimationEffect";

import vert from "../vert.glsl?raw";
import frag from "./frag.glsl?raw";

export default class HologramNoiseAlpha extends PIXI.Filter {
	private FX_hologram: PIXI.Texture | null = null;

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
		];
	}

	constructor () {
		super(vert, frag, {
			uTime: [0, 0, 0, 0],

			uTexture_ST: [1, 1, 0, 0],
			uTintColor: [163, 241, 255, 255].map(r => r / 255),

			uSegments: 0.5,
			uWaveSpeed: -0.25,
			uWavePower: 16.8,
			uScreenSegments: 122.3,
			uScreenPosterize: 2,
			uScreenNoise: 0,
			uOutPower: 1.4,

			uFX: null,
			uFX_ST: [0.67, 1, 0, 0],
		});

		PIXI.Ticker.shared.add(this.fn);

		PIXI.Texture.fromURL(`${AssetsRoot}/story/ui/FX_Hologram.png`)
			.then(t1 => {
				if (!this.enabled) {
					t1.destroy();
					return;
				}

				this.FX_hologram = t1;
				this.uniforms.uFX = this.FX_hologram;
			});
	}

	private tick (dt: number) {
		this.totalTime += dt / PIXI.Ticker.targetFPMS / 1000;
		const t = this.totalTime;
		this.uniforms.uTime = [t / 20, t, t * 2, t * 3];

		const frames = this.CurrentFrames();
		frames.forEach(f => {
			this.uniforms.uScreenNoise = f.value;
		});
	}

	destroy (): void {
		super.destroy();
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
