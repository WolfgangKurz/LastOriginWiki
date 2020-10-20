import { UnitStatsPoint } from "@/libs/DB/UnitStats";

export interface StatInfo {
	from: number;
	to: number;

	level: number;

	linkBonus: string[]; // per
}

type StatTable = {
	[key in keyof UnitStatsPoint]: number;
};

const PerPoint: StatTable = {
	ATK: 1.5,
	DEF: 1.25,
	HP: 8,
	ACC: 1.5,
	EV: 0.4,
	Cri: 0.4,
	SPD: 1.5,
};
