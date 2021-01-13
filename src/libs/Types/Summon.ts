import { SkillEntryData } from "@/libs/Types/Skill";
import { ACTOR_CLASS, ACTOR_GRADE, INSTALL_POS_TYPE, ROLE_TYPE, SKILL_ATTR, SUMMON_TYPE } from "@/libs/Types/Enums";

export interface SummonSkill {
	key: string;
	name: string;
	icon: string;
	desc: string;
	passive: boolean;
	type: SKILL_ATTR;
	target: "enemy" | "team";
	buff: SkillEntryData;
}

export interface Summon {
	id: string;
	name: string;
	icon: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;

	use: boolean;
	summonType: SUMMON_TYPE;
	pos: INSTALL_POS_TYPE;
	overlap: number;
	turn: number;

	deflv: number;
	lifecycle: number;
	shelter: boolean;
	ai: string;

	hp: [number, number];
	atk: [number, number];
	def: [number, number];
	spd: number;
	cri: number;
	acc: number;
	eva: number;
	res: {
		fire: number;
		chill: number;
		thunder: number;
	};

	skills: SummonSkill[];
}
