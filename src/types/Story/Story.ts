import { LocaleTypes } from "../Locale";
import { APPEAR_EFFECT, DIALOG_CHARACTER_EFFECT, DIALOG_CHAREMOJI_EFFECT, DIALOG_SPEAKER, OFF_EFFECT, SCG_ACTIVATION, SCREEN_EFFECT } from "../Enums";

type Localed<T> = Record<LocaleTypes, T>;
type LString = Localed<string | undefined>;

type DialogKey = string;

export enum StorySpec {
	None = 0,
	OP = 1,
	MID = 2,
	ED = 4,
	SUB = 8, // Substory
}

export interface StoryMetadata {
	spec: StorySpec;
	index: Record<string, string>;
	bgm: Record<string, string>;
	title: LString;
}

export interface DialogImage {
	image: string;

	appear: APPEAR_EFFECT;
	off: OFF_EFFECT;
}
export interface DialogCharacter extends DialogImage {
	imageVar: string;

	name: LString;

	SCG: SCG_ACTIVATION;
	live: DIALOG_CHARACTER_EFFECT;
	emoji: DIALOG_CHAREMOJI_EFFECT;

	/** Directing time of `appear` in secs, `0` means default (1sec) */
	appearTime: number;
	/** Directing time of `off` in secs, `0` means default (1sec) */
	offTime: number;
	/** Directing time of `live` in secs, `0` or missing means original tween duration */
	liveTime?: number;

	/** Custom offset, in game UI unit (1920x1080) */
	move_x: number;
	move_y: number;
	/** Absolute z rotation in degree */
	rotz: number;
	/** `1` to flip */
	flip: number;
	/** Scale ratio, `0` means not changed */
	scale_x: number;
	scale_y: number;
}

export interface DialogSelection {
	text: LString;
	next: DialogKey; // key
}

export interface StoryData {
	key: DialogKey;

	bg: {
		name: LString;
		desc: LString;
		image: string;
	};
	bgm: string;
	bgmLoop: number; // `1` for not looping

	text: LString;
	speaker: DIALOG_SPEAKER;

	voice: string; // filename
	voiceSkip: number;

	char: {
		L?: DialogCharacter;
		C?: DialogCharacter;
		R?: DialogCharacter;
		LC?: DialogCharacter;
		RC?: DialogCharacter;
	};

	add?: DialogImage;
	screenEffect: SCREEN_EFFECT;
	screenEffect_shakeDir: number;
	screenEffect_time: number;
	addEffect: string;

	sel?: DialogSelection[];

	next: string;
}
