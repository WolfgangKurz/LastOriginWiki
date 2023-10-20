import { LocaleTypes } from "../../libs/Locale";
import { APPEAR_EFFECT, DIALOG_SPEAKER, OFF_EFFECT, SCG_ACTIVATION, SCREEN_EFFECT } from "../../types/Enums";

type Localed<T> = Record<LocaleTypes, T>;
type LString = Localed<string | undefined>;

type DialogKey = string;

export enum StorySpec {
	None = 0,
	OP = 1,
	Mid = 2,
	ED = 4,
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

	animAdd: string;
	SCG: SCG_ACTIVATION;
}

export interface DialogSelection {
	text: LString;
	next: DialogKey; // key

	/** Cond is not used at this time */
}

export interface StoryData {
	key: DialogKey;

	bg: {
		name: LString;
		desc: LString;
		image: string;
	};
	bgm: string;

	text: LString;
	speaker: DIALOG_SPEAKER;

	voice: string; // filename
	voiceChar: string;

	char: {
		L?: DialogCharacter;
		C?: DialogCharacter;
		R?: DialogCharacter;
	};

	add?: DialogImage;
	screenEffect: SCREEN_EFFECT;
	addEffect: string;

	sel?: DialogSelection[];

	next: string;
}
