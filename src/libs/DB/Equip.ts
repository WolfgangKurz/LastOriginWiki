import LoadDBFactory from "@/libs/DB/DBLoader";
import Data from "@/json/equip";

import EntitySource from "@/libs/EntitySource";

import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";
import { Equip, EquipItem } from "@/libs/Types/Equip";
import { BuffStat } from "@/libs/Buffs/Buffs";

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
}

function parseLimit (limit: string | undefined) {
	if (!limit) return null;
	return limit.split(",").filter(x => x) as string[] | null;
}

const EquipDB = (Data as RawEquip[])
	.map(x => ({
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
		// stats: x.stats,
	}) as Equip);
export default (() => EquipDB)();

export function EquipItemDB (uid: string, callback?: (data: EquipItem | null) => void) {
	const base = EquipDB.find(y => y.fullKey === uid);
	if (!base) {
		if (callback) callback(null);
		return null;
	}

	return LoadDBFactory<BuffStat[][], EquipItem>(
		`equip-${uid}`,
		import(/* webpackChunkName: "chunk-db-equip-" */ `@/json/equip/${uid}`),
		x => {
			if (x) {
				return {
					base,
					stats: x,
				};
			}
			return null;
		},
	)(callback);
}
