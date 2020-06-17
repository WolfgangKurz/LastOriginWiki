import { Unit, Rarity, UnitStatsPoint, UnitStats } from "@/libs/Types";
import { UnitData } from "@/libs/DB";

export interface UnitSimulationInfo {
	id: number;
	Level: number;
	Rarity: Rarity;

	Linked: [boolean, boolean, boolean, boolean, boolean];

	Unit: Unit;
	Stats: UnitStatsPoint;
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
	};

	/* eslint-disable-next-line no-inner-declarations */
	export function Init (id: number): UnitSimulationInfo {
		const unit = UnitData[id];
		return {
			...Empty,
			id,
			Rarity: unit.rarity,
			Unit: unit,
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
