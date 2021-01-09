import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, CURRENCY_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";

export type Rarity = "SS" | "S" | "A" | "B";

interface SkinOffsetPart {
	n: number;
	d: number;
	s: number;
	x: number;
}
export interface SkinOffset {
	normal: SkinOffsetPart;
	google: SkinOffsetPart;
}
export interface RawSkin {
	/** Skin ID */
	sid: null | number;

	/** Offset */
	offset: SkinOffset;

	/** Skin Price */
	price?: number;

	/** Has Voice */
	V: boolean;

	/** Damaaged */
	D: boolean;

	/** Simplified */
	S: boolean;

	/** Damaged Simplified */
	X: boolean;

	/** Animated */
	A: boolean;

	/** has Google CG */
	G: boolean;

	skins?: SkinInfo[];
	P?: SkinInfo;

	artist: string;

	name: string;
	desc: string;
}
export interface SkinInfo {
	/** Skin ID */
	sid: null | number;

	t: string;

	/** Offset */
	offset: SkinOffset;

	/** Has Voice */
	V: boolean;

	/** Damaaged */
	D: boolean;

	/** Simplified */
	S: boolean;

	/** Damaged Simplified */
	X: boolean;

	/** Animated */
	A: boolean;

	/** has Google CG */
	G: boolean;

	/** Price */
	price?: number;

	/** Skin Artist */
	artist: string;

	/** Skin Item Name */
	name: string;

	/** Skin Item Description */
	desc: string;
}

export interface SortieCostResource{
	[CURRENCY_TYPE.METAL]: [number, number, number, number, number, number];
	[CURRENCY_TYPE.NUTRIENT]: [number, number, number, number, number, number];
	[CURRENCY_TYPE.POWER]: [number, number, number, number, number, number];
}
export interface SortieCostBody {
	[ACTOR_BODY_TYPE.BIOROID]: SortieCostResource;
	[ACTOR_BODY_TYPE.AGS]: SortieCostResource;
}
export type SortieCostType = {
	[key in ACTOR_GRADE]: {
		[key in ACTOR_CLASS]: {
			[key in ROLE_TYPE]: SortieCostBody;
		};
	};
};

export interface StoryRaw {
	area: string;
	map: number;
	loc: string;
	spec: number;
	title: string;
	face: string;
	skin: number;
	bg: string;
	desc: string;
	filename: string;
}
