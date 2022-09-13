import { SkillEntity, SkillEntryData } from "@/types/DB/Skill";
import { SKILL_ATTR, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

export interface EnemySkill extends SkillEntity {
	// name: string;
	// desc: string;
	passive: boolean;
	type: SKILL_ATTR;
	buff: SkillEntryData;
}

export interface Enemy {
	id: string;
	icon: string;
	ai?: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	isBoss: boolean;

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

	skills: EnemySkill[];
}
