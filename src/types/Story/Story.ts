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

	animAdd: string;
	SCG: SCG_ACTIVATION;
	live: DIALOG_CHARACTER_EFFECT;
	emoji: DIALOG_CHAREMOJI_EFFECT;
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
		LC?: DialogCharacter;
		RC?: DialogCharacter;
	};

	add?: DialogImage;
	screenEffect: SCREEN_EFFECT;
	addEffect: string;

	sel?: DialogSelection[];

	next: string;
}
