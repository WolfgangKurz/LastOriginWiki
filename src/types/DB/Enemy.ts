import { SkillEntity, SkillEntryData } from "@/types/DB/Skill";
import { SKILL_ATTR, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE } from "@/types/Enums";

export type EnemySkill = Omit<SkillEntity & {
	passive: boolean;
	type: SKILL_ATTR;
	buff: SkillEntryData;
}, "buffs" | "values">;

export enum EnemyCategory {
	Normal = 0,
	Boss = 1,
	IW = 2,
}

export interface Enemy {
	id: string;
	icon: string;
	ai?: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	category: EnemyCategory;

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
