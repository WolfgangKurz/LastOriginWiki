import { ACTOR_GRADE } from "@/types/Enums";
import { StatPointValueType } from "@/types/Stat";
import { LinkBonusType } from "@/types/DB/Unit";

import SimulatorEquip from "./Equip";

export interface SimulatorSlotItem {
	uid: string;
	level: number;
	rarity: ACTOR_GRADE;

	leader: boolean;

	links: [number, number, number, number, number];
	linkBonus: LinkBonusType;

	equips: [
		SimulatorEquip | null,
		SimulatorEquip | null,
		SimulatorEquip | null,
		SimulatorEquip | null
	];

	hp: number;
	stats: StatPointValueType;
}

export type SimulatorSlotType = SimulatorSlotItem | null;
