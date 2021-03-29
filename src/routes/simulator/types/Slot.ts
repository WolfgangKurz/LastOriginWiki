import { LinkBonusType } from "@/types/DB/Unit";
import { ACTOR_GRADE } from "@/types/Enums";
import { StatPointValueType } from "@/types/Stat";

export interface SimulatorSlotItem {
	uid: string;
	level: number;
	rarity: ACTOR_GRADE;

	leader: boolean;

	links: [number, number, number, number, number];
	linkBonus: LinkBonusType;

	hp: number;
	stats: StatPointValueType;
}

export type SimulatorSlotType = SimulatorSlotItem | null;
