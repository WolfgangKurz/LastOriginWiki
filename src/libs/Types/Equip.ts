import EntitySource from "@/libs/EntitySource";
import { BuffStat } from "@/libs/Buffs/Buffs";

import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";

export interface Equip {
	available: boolean;
	rarity: ACTOR_GRADE;
	type: ITEM_TYPE;
	key: string;
	fullKey: string;

	name: string;
	desc: string;
	icon: string;
	craftable: false | number;

	limit: string[] | null;
	source: EntitySource[][];
	upgrade: number;
	// stats: BuffStat[][];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Equip {
	export const Empty: Equip = {
		available: false,
		rarity: ACTOR_GRADE.B,
		type: ITEM_TYPE.CHIP,
		key: "",

		fullKey: "__T1",
		name: "",
		desc: "",
		icon: "none",
		craftable: false,

		limit: null,
		source: [],
		upgrade: 0,
		// stats: [],
	};
}

export interface EquipItem {
	base: Equip;
	stats: BuffStat[][];
}
