import { GACHA_CATEGORY, ITEM_GRADE } from "@/types/Enums";

export enum INNER_GACHA_CATEGORY {
	/** 멸망 전의 XXX */
	Box = 1,

	/** 프리미엄 출석 */
	PremiumAttend = 2,
}

export interface GachaData {
	key: string;
	count: number;
	rate: number;
	grade: ITEM_GRADE;
}

export interface Gacha {
	key: string;
	category: INNER_GACHA_CATEGORY;
	price: number;
	type: GACHA_CATEGORY;
	icon: string;
	data: Array<GachaData>;
}
