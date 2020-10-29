import EntitySource from "@/libs/EntitySource";
import { EquipStat } from "@/libs/Equips/Equip";

import Data from "@/json/equip.json";
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
	craftable: boolean;

	limit?: string;
	upgrade: number;
	source: string[][];
	stats: string[];
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
	craftable: boolean;

	limit: Array<string | number> | null;
	source: EntitySource[][];
	upgrade: number;
	stats: EquipStat[][];
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

	return limit
		.split(",")
		.map(x => x.toLowerCase())
		.map(x => {
			if (/^[0-9]+$/.test(x)) return parseInt(x, 10);
			return x;
		})
		.filter(x => x !== null) as Array<string | number> | null;
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
		stats: x.stats.map(y => JSON.parse(y) as EquipStat[]),
	}));
}
export default Compile();
