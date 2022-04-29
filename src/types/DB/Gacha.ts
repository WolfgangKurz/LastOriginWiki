import { GACHA_CATEGORY, ITEM_GRADE } from "@/types/Enums";

export interface GachaData {
	key: string;
	count: number;
	rate: number;
	grade: ITEM_GRADE;
}

export interface Gacha {
	key: string;
	price: number;
	type: GACHA_CATEGORY;
	icon: string;
	data: Array<GachaData>;
}
