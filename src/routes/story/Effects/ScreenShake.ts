import * as PIXI from "pixi.js";

import { CAMERA_SHAKE_DIRECTION } from "@/types/Enums";

import { UI_UNIT } from "../Objects/Actor/ActorStage";

/**
 * `CameraShake.Shake` of original game, shakes UI camera.
 * @param duration shake time in secs, decreased by `decreaseFactor` per sec
 * @param amount shake range in game UI unit
 */
export default function ShakeScreen (
	target: PIXI.Container,
	duration: number,
	amount = 4.7,
	decreaseFactor = 1,
	direction: CAMERA_SHAKE_DIRECTION = CAMERA_SHAKE_DIRECTION.BOTH,
): Promise<void> {
	const range = amount * UI_UNIT;
	return new Promise(resolve => {
		let remain = duration;
		const ticker = PIXI.Ticker.shared;
		const onTick = () => {
			if (target.destroyed || remain <= 0) {
				ticker.remove(onTick);
				if (!target.destroyed) target.position.set(0, 0);
				resolve();
				return;
			}

			switch (direction) {
				case CAMERA_SHAKE_DIRECTION.HORIZONTAL:
					target.position.set((Math.random() * 2 - 1) * range, 0);
					break;
				case CAMERA_SHAKE_DIRECTION.VERTICAL:
					target.position.set(0, (Math.random() * 2 - 1) * range);
					break;
				default: { // Random.insideUnitCircle
					const r = Math.sqrt(Math.random()) * range;
					const a = Math.random() * Math.PI * 2;
					target.position.set(Math.cos(a) * r, Math.sin(a) * r);
					break;
				}
			}
			remain -= ticker.deltaMS / 1000 * decreaseFactor;
		};
		ticker.add(onTick);
	});
}
