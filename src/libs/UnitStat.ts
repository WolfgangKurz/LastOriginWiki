import { UnitStatsPoint, LinkBonusType } from "@/libs/Types";

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
	atk: 1.5,
	def: 1.25,
	hp: 8,
	acc: 1.5,
	eva: 0.4,
	crit: 0.4,
	spd: 1.5,
};
