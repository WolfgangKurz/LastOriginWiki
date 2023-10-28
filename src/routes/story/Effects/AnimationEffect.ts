import { groupBy } from "@/libs/Functions";

import EffectBase from "./EffectBase";

export interface AnimationValue {
	key: string;
	value: number;
}
export interface AnimationFrame extends AnimationValue {
	frame: number;
}

export default abstract class AnimationEffect extends EffectBase {
	static readonly EmptyFrame: AnimationFrame = { key: "", value: 0, frame: 0 };
	protected abstract get frames(): AnimationFrame[];

	/** in seconds */
	protected totalTime: number = 0.0;

	protected CurrentFrames (): AnimationValue[] {
		const frame = this.totalTime / (1.0 / 60.0);
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

	public Update (delta: number): void {
		if (this.destroyed) return;
		if (!this.enabled) return;

		this.totalTime += delta;
	}

	public FinishCheck (): number {
		return this.frames.reduce((p, c) => {
			if (!p) return c;
			return c.frame > p.frame ? c : p;
		}, AnimationEffect.EmptyFrame).frame / 60.0; // animation in 60 fps
	}
}
