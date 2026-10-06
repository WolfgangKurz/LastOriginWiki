import * as PIXI from "pixi.js";

import { AssetsRoot } from "@/libs/Const";

import CgLayer from "../Objects/CgLayer";
import Animation_OpenEyes from "../Animations/Animation_OpenEyes";
import Animation_Twinkle from "../Animations/Animation_Twinkle";
import ShakeScreen from "./ScreenShake";
import VideoEffect from "./VideoEffect";

/** Prefab node of `noveladdeffect` bundle of original game */
type AddEffectSpec =
	/** `PlaySoundEffectNode` */
	| { type: "sound"; sound: string; loop?: boolean; }
	/** `ShakeAndSoundEffectNode` */
	| { type: "shakeSound"; shake: number; amount: number; decrease: number; sound: string; loop?: boolean; }
	/** `TimeEffectNode` */
	| { type: "timer"; time: number; }
	/** `PlayAnimatorEffectNode` of `Prefeb_OpenEyes` */
	| { type: "openEyes"; time: number; }
	/** `PlayAnimatorEffectNode` of `Prefeb_Twinkle`, waits animator state length */
	| { type: "twinkle"; }
	/** `MovieEffectNode` */
	| { type: "movie"; source: string; }
	/** `BackGroundEffectNode` */
	| { type: "cgCamera"; sprite: string; targets: Array<Tuple<number, 2>>; zoom: boolean; damp: number; }
	/** `BackGroundFadeInEffectNode` */
	| { type: "cgOverlay"; sprite: string; time: number; };

const sound = (sound: string, loop = false): AddEffectSpec => ({ type: "sound", sound, loop });

/**
 * Prefabs of `noveladdeffect` bundle, key is lowercased prefab name (`AssetBundle.LoadAsset` ignores case).
 * Prefabs not listed here are not used by dialogue data, or not in bundle (ignored by original too).
 */
const AddEffectTable: Record<string, AddEffectSpec> = {
	doorknock_01: sound("DoorKnock_01"),
	phone_01: sound("Phone_01"),
	prefab_09_02b_2_1: sound("NavalGun_01"),
	prefab_09_03_1_1: sound("GunFire_03"),
	prefab_09_04b_1_1: sound("Metalic_01"),
	prefab_09_04b_1_2: sound("Metalic_01"),
	prefab_09_04b_1_3: sound("Metalic_01"),
	prefab_09_04b_1_4: sound("Explosion_04"),
	prefab_09_04b_2_1: sound("Metalic_01"),
	prefab_09_04b_2_2: sound("Metalic_01"),
	prefab_09_04b_2_3: sound("Explosion_04"),
	prefab_alarm_01: sound("Alarm_01"),
	prefab_break_01: sound("Break_01"),
	prefab_crash_heavy_stone_02: sound("crash_heavy_stone_02"),
	prefab_dooropen_01: sound("DoorOpen_01"),
	prefab_explosion_01: sound("Explosion_01"),
	prefab_explosion_02: sound("Explosion_02"),
	prefab_explosion_03: sound("Explosion_03"),
	prefab_explosion_04: sound("Explosion_04"),
	prefab_explosion_05: sound("Explosion_05"),
	prefab_footstep_01: sound("FootStep_01"),
	prefab_guitar_slide: sound("Guitar_Slide"),
	prefab_gunfire_01: sound("GunFire_01"),
	prefab_gunfire_02: sound("GunFire_01"),
	prefab_hit_heavy_sound_01: sound("hit_Heavy_sound_01"),
	"prefab_hit_phy_mid-1": sound("hit_Phy_mid-1"),
	"prefab_hit_phy_small-1": sound("hit_Phy_small-1"),
	prefab_metalic_01: sound("Metalic_01"),
	prefab_navalgun_01: sound("NavalGun_01"),
	prefab_smoke_01: sound("Smoke_01"),
	prefab_sound: sound("06 BGM_Battle_Boss_03", true),
	prefab_sword_slashs: sound("sword_slashs"),
	prefab_water_splash: sound("water_splash"),

	prefab_bangnshaking_01: { type: "shakeSound", shake: 1, amount: 4.7, decrease: 1, sound: "Explosion_03" },
	prefab_bangnshaking_02: { type: "shakeSound", shake: 1, amount: 4.7, decrease: 1, sound: "Explosion_03" },
	prefab_bangnshaking_03: { type: "shakeSound", shake: 1, amount: 4.7, decrease: 1, sound: "Explosion_03" },

	prefeb_timer1_5s: { type: "timer", time: 1.5 },
	prefeb_timer5s: { type: "timer", time: 5 },

	prefeb_openeyes: { type: "openEyes", time: 3.9 },
	prefeb_twinkle: { type: "twinkle" },

	prefab_3rdanniversary: { type: "movie", source: "3rdAnniversary" },
	prefab_idolending: { type: "movie", source: "Idol_Ending" },

	prefab_background: { type: "cgCamera", sprite: "Cut_Labiata_1", targets: [[-6.94, -0.14], [11.15, 0.16]], zoom: true, damp: 0 },
	prefab_background2: { type: "cgCamera", sprite: "Cut_Labiata_2", targets: [[-6.94, -0.14], [11.15, 0.16]], zoom: true, damp: 0 },
	prefab_background3: { type: "cgCamera", sprite: "Cut_Labiata_3", targets: [[-6.94, -0.14], [11.15, 0.16]], zoom: true, damp: 0 },
	prefab_background4: { type: "cgCamera", sprite: "Cut_Labiata_3", targets: [[-10.92, -0.78], [3.96, -0.78]], zoom: true, damp: 2 },
	prefab_backgroundalpha: { type: "cgOverlay", sprite: "Cut_Labiata_4", time: 3 },
};

export interface AddEffectContext {
	/** shaken by camera shake */
	screen: PIXI.Container;
	cg: CgLayer;
	/** ticker based wait */
	wait: (secs: number) => Promise<void>;
	/** `GameSoundManager.MuteAll`, mutes (not pauses) all playing sounds */
	muteAll: (mute: boolean) => void;
}

export interface AddEffectRun {
	/** Resolved when node is finished (next node can be started) */
	done: Promise<void>;
	/** Stop sound and remove visuals */
	dispose: () => void;
	/** Mute sound of effect (`GameSoundManager.MuteAll`) */
	setMuted?: (mute: boolean) => void;
}

function playSound (name: string, loop: boolean): [HTMLAudioElement, Promise<void>] {
	const audio = new Audio(`${AssetsRoot}/story/se/${name}.mp3`);
	audio.loop = loop;
	audio.volume = 0.25;
	const ended = new Promise<void>(resolve => {
		audio.addEventListener("ended", () => resolve());
		audio.addEventListener("error", () => resolve());
		audio.play().catch(() => resolve()); // autoplay blocked
	});
	return [audio, ended];
}

/** Prefab exists in bundle (node is created) */
export function HasAddEffect (name: string): boolean {
	return name.toLowerCase() in AddEffectTable;
}

/** `null` if prefab not exists (original ignores it) */
export function RunAddEffect (name: string, ctx: AddEffectContext): AddEffectRun | null {
	const spec = AddEffectTable[name.toLowerCase()];
	if (!spec) {
		console.warn(`[STORY] Unknown add effect '${name}', ignored`);
		return null;
	}

	switch (spec.type) {
		case "sound": { // `_endTime` is 0, finished immediately
			const [audio] = playSound(spec.sound, !!spec.loop);
			return { done: Promise.resolve(), dispose: () => audio.pause(), setMuted: mute => (audio.muted = mute) };
		}
		case "shakeSound": { // finished when shake ended and (looping or) sound ended
			const shake = ShakeScreen(ctx.screen, spec.shake, spec.amount, spec.decrease);
			const [audio, ended] = playSound(spec.sound, !!spec.loop);
			return {
				done: Promise.all([shake, spec.loop ? Promise.resolve() : ended]).then(() => void 0),
				dispose: () => audio.pause(),
				setMuted: mute => (audio.muted = mute),
			};
		}
		case "timer":
			return { done: ctx.wait(spec.time), dispose: () => void 0 };
		case "openEyes": {
			const effect = new Animation_OpenEyes(ctx.screen);
			const ticker = PIXI.Ticker.shared;
			const tick = () => effect.Update(ticker.deltaMS / 1000);
			ticker.add(tick);
			const dispose = () => {
				ticker.remove(tick);
				effect.Destroy();
			};
			effect.onDone = dispose; // animation is longer than `_endTime`
			return { done: ctx.wait(spec.time), dispose };
		}
		case "twinkle": {
			const effect = new Animation_Twinkle();
			effect.zIndex = 900;
			ctx.screen.addChild(effect);
			const dispose = () => {
				if (!effect.destroyed) effect.destroy({ children: true });
			};
			const done = ctx.wait(Animation_Twinkle.Length);
			done.then(dispose); // ends outside of screen
			return { done, dispose };
		}
		case "movie": { // `MovieEffectNode` mutes other sounds while playing
			ctx.muteAll(true);
			const effect = new VideoEffect(ctx.screen, spec.source);
			let finished = false;
			const finish = () => {
				if (finished) return;
				finished = true;
				ctx.muteAll(false);
				effect.Destroy();
			};
			const done = new Promise<void>(resolve => (effect.onDone = resolve));
			done.then(finish);
			return { done, dispose: finish };
		}
		case "cgCamera": {
			const cg = ctx.cg;
			cg.clearTarget();
			for (const [x, y] of spec.targets)
				cg.addTarget(x, y, spec.zoom, spec.damp);
			cg.setBackground(spec.sprite);

			const done = new Promise<void>(resolve => {
				const ticker = PIXI.Ticker.shared;
				const tick = () => {
					if (cg.destroyed || cg.arrived) {
						ticker.remove(tick);
						resolve();
					}
				};
				ticker.add(tick);
			});
			return { done, dispose: () => void 0 };
		}
		case "cgOverlay":
			return { done: ctx.cg.fadeInOverlay(spec.sprite, spec.time), dispose: () => void 0 };
	}
}

/** Apply persistent result of effect immediately (restoring jumped cursor) */
export function ApplyAddEffectInstant (name: string, cg: CgLayer) {
	const spec = AddEffectTable[name.toLowerCase()];
	if (!spec) return;

	if (spec.type === "cgCamera") {
		cg.clearTarget();
		for (const [x, y] of spec.targets)
			cg.addTarget(x, y, spec.zoom, spec.damp);
		cg.setBackground(spec.sprite);
		cg.snap();
	} else if (spec.type === "cgOverlay")
		cg.setOverlay(spec.sprite);
}
