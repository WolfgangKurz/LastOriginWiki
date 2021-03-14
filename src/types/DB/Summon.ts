import { AI } from "@/types/DB/AI";
import { SkillEntryData } from "@/types/DB/Skill";
import { SKILL_ATTR, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, SUMMON_TYPE, INSTALL_POS_TYPE } from "@/types/Enums";

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
	uid: string;
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
	ai: AI[];

	stat: {
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
	};

	skills: SummonSkill[];
}
