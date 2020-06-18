import { Unit, Rarity, UnitStatsPoint, UnitStats, EquipType, LRarity } from "@/libs/Types";
import { UnitData } from "@/libs/DB";

export interface EquipSlot {
	Type: EquipType;
	Name: string;
	Level: number; // 0 ~ 10
	Rarity: LRarity;
}
const EquipEmpty: EquipSlot = {
	Type: "Chip",
	Name: "",
	Level: 10,
	Rarity: "ss",
};
function EquipInit (type: EquipType): EquipSlot {
	return {
		...EquipEmpty,
		Type: type,
	};
}

export interface UnitSimulationInfo {
	id: number;
	Level: number;
	Rarity: Rarity;

	Linked: [boolean, boolean, boolean, boolean, boolean];

	Unit: Unit;
	Stats: UnitStatsPoint;
	Equips: EquipSlot[];
}

/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace UnitSimulationInfo {
	export const Empty: UnitSimulationInfo = {
		id: 0,
		Level: 100,
		Rarity: "SS",
		Linked: [false, false, false, false, false],
		Unit: Unit.Empty,
		Stats: UnitStats.EmptyPoint,
		Equips: [EquipEmpty, EquipEmpty, EquipEmpty, EquipEmpty],
	};

	/* eslint-disable-next-line no-inner-declarations */
	export function Init (id: number): UnitSimulationInfo {
		const unit = UnitData[id];
		return {
			...Empty,
			id,
			Rarity: unit.rarity,
			Unit: unit,
			Equips: new Array(4)
				.fill(0)
				.map((x, i) => EquipInit(unit.equip[i])),
		};
	}
}

export const StatList = ["atk", "def", "hp", "acc", "eva", "crit"];
export const StatTable = {
	atk: "공격력",
	def: "방어력",
	hp: "체력",
	acc: "적중률",
	eva: "회피율",
	crit: "치명타",
	spd: "행동력",
};

export const StatDispList = ["atk", "def", "hp", "acc", "eva", "crit", "spd"];
export const DetailPointsPostfix = {
	atk: "",
	def: "",
	hp: "",
	acc: "%",
	eva: "%",
	crit: "%",
	spd: "",
};
