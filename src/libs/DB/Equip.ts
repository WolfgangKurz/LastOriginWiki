import EntitySource from "@/libs/EntitySource";
import { BuffStat } from "@/libs/Buffs/Buffs";

import Data from "@/json/equip";
import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";

interface RawEquip {
	available: boolean;
	rarity: ACTOR_GRADE;
	type: ITEM_TYPE;
	key: string;
	fullKey: string;

	name: string;
	desc: string;
	icon: string;
	craftable: false | number;

	limit?: string;
	upgrade: number;
	source: string[][];
	stats: BuffStat[][];
}
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
	stats: BuffStat[][];
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
		stats: [],
	};
}

function parseLimit (limit: string | undefined) {
	if (!limit) return null;
	return limit.split(",").filter(x => x) as string[] | null;
}

function Compile (): Equip[] {
	return (Data as RawEquip[]).map(x => ({
		available: x.available,
		rarity: x.rarity,
		type: x.type,
		key: x.key,
		fullKey: x.fullKey,

		name: x.name,
		desc: x.desc,
		icon: x.icon,
		craftable: x.craftable,

		upgrade: x.upgrade,
		limit: parseLimit(x.limit),
		source: x.source.map(y => y.map(z => new EntitySource(z))),
		stats: x.stats,
	}));
}
export default Compile();
