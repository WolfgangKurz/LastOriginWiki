import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const.1";

import EffectBase from "./EffectBase";

export default class ShakeAndSoundEffect extends EffectBase {
	private audioSource: HTMLAudioElement;

	constructor (
		screen: Readonly<PIXI.Container>,
		private soundName: string,
		private shake: number,
		private shakeAmount: number = 0.7,
		private decreaseFactor: number = 1.0,
		private looping: boolean = false,
		private endTime: number = 0.0,
	) {
		super(screen);
		this.enabled = true;

		this.audioSource = new Audio(`${AssetsRoot}/story/se/${this.soundName}.mp3`);
		this.audioSource.loop = this.looping;
		this.audioSource.volume = 0.25;

		this.audioSource.addEventListener("canplaythrough", () => {
			this.audioSource.play();
		});
		this.audioSource.load();
	}

	public Destroy () {
		if (this.destroyed) return;
		this.destroyed = true;

		this.screen.position.set(0, 0);

		if (this.audioSource) {
			this.audioSource.pause();
			this.audioSource.remove();
		}
	}

	public Update (delta: number): void {
		if (this.destroyed) return;
		if (!this.enabled) return;

		if (this.shake > 0.0) {
			let [x, y] = this.insideUnitSphere();
			x *= this.shakeAmount;
			y *= this.shakeAmount;
			this.screen.position.set(x * 10, y * 10);

			this.shake -= delta * this.decreaseFactor;
		} else {
			this.shake = 0.0;
			this.screen.position.set(0, 0);
			this.enabled = false;
		}
	}
	public FinishCheck (): number {
		if (this.endTime > 0.0) return this.endTime;
		if (!this.audioSource) return 0.0;
		return this.audioSource.duration;
	}
}
