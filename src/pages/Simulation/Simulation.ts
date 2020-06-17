import { Unit, Rarity, UnitStatsPoint, UnitStats } from "@/Types";
import { UnitData, UnitStatsData } from "@/DB";

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
