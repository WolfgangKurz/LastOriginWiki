import EntitySource from "@/libs/EntitySource";
import { BUFFEFFECT_TYPE } from "@/types/BuffEffect";
import { ACTOR_GRADE, ITEM_TYPE } from "@/types/Enums";

export interface FilterableEquipBuff {
	type: BUFFEFFECT_TYPE;
	positive: boolean;
}

export interface FilterableEquip {
	available: boolean;
	roguelike: boolean;

	rarity: ACTOR_GRADE;
	type: ITEM_TYPE;
	key: string;
	fullKey: string;

	// name: string;
	desc: string;
	icon: string;
	craft: false | number;

	limit: string[] | null;
	source: EntitySource[][];
	upgrade: number;

	effects: FilterableEquipBuff[];
}
