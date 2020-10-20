import EntitySource from "@/libs/EntitySource";
import { EquipStat } from "@/libs/Equips/Equip";
import { Rarity } from "@/libs/Types";

interface RawEquip {
	available: boolean;
	rarity: Rarity;
	type: "Chip" | "OS" | "Item";
	key: string;
	fullKey: string;

	name: string;
	desc: string;
	craftable: boolean;

	limit?: string;
	upgrade: number;
	source: string[][];
	stats: string[];
}
export interface Equip {
	available: boolean;
	rarity: Rarity;
	type: "Chip" | "OS" | "Item";
	key: string;
	fullKey: string;

	name: string;
	desc: string;
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
		rarity: "B",
		type: "Chip",
		key: "",

		fullKey: "__T1",
		name: "",
		desc: "",
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

import Data from "@/json/equip.json";
function Compile () {
	return (Data as RawEquip[]).map(x => ({
		available: x.available,
		rarity: x.rarity,
		type: x.type,
		key: x.key,
		fullKey: x.fullKey,

		name: x.name,
		desc: x.desc,
		craftable: x.craftable,

		upgrade: x.upgrade,
		limit: parseLimit(x.limit),
		source: x.source.map(y => y.map(z => new EntitySource(z))),
		stats: x.stats.map(y => JSON.parse(y) as EquipStat[]),
	}));
}
export default Compile();
