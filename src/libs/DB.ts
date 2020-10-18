import EquipDB from "@/json/equip.json";
import UnitDB from "@/json/unit.json";
import UnitDialogueDB from "@/json/unit-dialogue.json";
import SkillDB from "@/json/unit-skill.json";
import StatsDB from "@/json/unit-stats.json";
import FacilityDB from "@/json/facility.json";
import ItemNamesDB from "@/json/item-names.json";
import MapDB from "@/json/map.json";
import ExpDB from "@/json/exp.json";
import StoryDB from "@/json/story.json";

import {
	Equip, UnitType, UnitRole, Unit, RawUnit, RawEquip, RawSkill,
	UnitStatsRaw, RawUnitDialogue, RawFacilities,
	RawItemNames, Worlds, ExpRaw, StoryRaw,
} from "@/libs/Types";
import EntitySource from "@/libs/EntitySource";

import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { EquipStat } from "@/libs/Equips/Equip";

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

function CompileEquip () {
	return (EquipDB as RawEquip[])
		.map(x => {
			const y: Equip = {
				available: x.available,
				rarity: x.rarity,
				type: x.type,
				key: x.key,
				fullKey: x.fullKey,

				name: x.name,
				desc: x.desc,

				upgrade: x.upgrade,
				limit: parseLimit(x.limit),
				source: x.source.map(y => y.map(z => new EntitySource(z))),
				stats: x.stats.map(y => JSON.parse(y) as EquipStat[]),
			};
			return y;
		});
}
export const EquipData = CompileEquip();

function CompileUnit () {
	const units: {
		[key: number]: Unit;
	} = {};

	(UnitDB as RawUnit[])
		.forEach(x => {
			const y: Unit = {
				id: x.id,
				uid: x.uid,

				name: x.name,
				shortname: x.shortname,

				group: x.group,
				shortgroup: x.shortgroup,
				groupkey: x.groupkey,

				rarity: x.rarity,
				body: x.body === "Bioroid" ? "bio" : "ags",
				type: x.type.toLowerCase() as UnitType,
				role: x.role.toLowerCase() as UnitRole,

				promotions: x.promotions,
				craftable: x.craftable,
				marry: x.marry,

				resists: { ...x.resists },

				linkBonus: { ...x.linkBonus },

				equip: [
					x.equip[0],
					x.equip[1],
					x.equip[2],
					x.equip[3],
				],
				source: x.source
					.map(y => y.map(z => new EntitySource(z))),

				// 이 전투원 id로 장착이 제한된 장비
				hasLimited: (() => {
					const eq = EquipData.find(y => y.limit && y.limit.some(z => z === x.id));
					if (!eq) return ["", ""];

					const reg = /_([abs]+)$/.exec(eq.name);
					if (!reg) return ["", ""];

					return [
						reg[1].toUpperCase(),
						eq.name.replace(`_${reg[1]}`, ""),
					];
				})() as [string, string],
			};
			units[x.id] = y;
		});
	return units;
}
export const UnitData = CompileUnit();

function CompileSkill () {
	const imgExt = ImageExtension();
	const table = JSON.parse(JSON.stringify(SkillDB)) as unknown as RawSkill;
	const keys = Object.keys(table);
	for (const key of keys) {
		const skills = table[key];

		const keys2 = Object.keys(skills);
		for (const key2 of keys2) {
			const skill = skills[key2];

			const type = key2.includes("active") ? "active" : "passive";

			skill.icon = `${AssetsRoot}/${imgExt}/skill/${skill.icon}_${type}.${imgExt}`;
		}
	}
	return table;
}
export const SkillData = CompileSkill();
export const UnitStatsData: Record<number, UnitStatsRaw> = StatsDB;
export const UnitDialogueData: RawUnitDialogue = UnitDialogueDB;
export const Facilities = FacilityDB as RawFacilities;
export const ItemNames: RawItemNames = ItemNamesDB;
export const MapData = MapDB as unknown as Worlds;
export const ExpData: ExpRaw = ExpDB;
export const StoryData: StoryRaw[] = StoryDB;
