import { ACTOR_GRADE, ITEM_TYPE } from "@/types/Enums";
import { BuffStat } from "@/types/Buffs";
import EntitySource from "@/libs/EntitySource";

export interface Equip {
	uid: string;
	type: ITEM_TYPE;
	key: string;
	rarity: ACTOR_GRADE;

	craft: false | number;
	upgrade: number;
	limit: string[] | null;

	source: EntitySource[][];
	stats: BuffStat[][];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Equip {
	export const Empty: Equip = {
		uid: "__T1",
		type: ITEM_TYPE.CHIP,
		key: "",
		rarity: ACTOR_GRADE.B,

		craft: false,
		upgrade: 0,
		limit: null,

		source: [],
		stats: [],
	};
}

export interface EquipItem {
	base: Equip;
	stats: BuffStat[][];
}