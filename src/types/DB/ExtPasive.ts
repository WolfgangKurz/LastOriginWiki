import { SkillEntryData } from "@/types/DB/Skill";
import { NUM_OUTPUTTYPE, SKILL_ATTR } from "@/types/Enums";

interface ItemPair {
	id: string;
	count: number;
}
interface RequireSet {
	metal: number;
	nutrient: number;
	power: number;
	items: ItemPair[];
}

interface ExtPassiveSkill {
	key: string;
	icon: string;
	type: SKILL_ATTR;
	target: "enemy" | "team";

	buff: SkillEntryData;
}

export interface ExtPassive {
	key: string;
	desc: {
		desc: string;
		type: NUM_OUTPUTTYPE;
		value: string;
		level: string;
	};
	lvCost: RequireSet[] | undefined;
	activate: 0 | 1;
	slot: number;
	unlock: RequireSet | undefined;
	skill: ExtPassiveSkill;
}
