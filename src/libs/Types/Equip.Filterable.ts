import { BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";
import EntitySource from "@/libs/EntitySource";

import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";

export interface FilterableEquipBuff {
	type: BUFFEFFECT_TYPE;
	positive: boolean;
}

export interface FilterableEquip {
	available: boolean;
	rarity: ACTOR_GRADE;
	type: ITEM_TYPE;
	key: string;
	fullKey: string;

	// name: string;
	desc: string;
	icon: string;
	craftable: false | number;

	limit: string[] | null;
	source: EntitySource[][];
	upgrade: number;

	effects: FilterableEquipBuff[];
}
