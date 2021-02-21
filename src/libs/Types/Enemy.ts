import LoadDBFactory from "../DB/DBLoader";

import { SkillEntryData } from "@/libs/Types/Skill";
import { ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR } from "@/libs/Types/Enums";

export interface EnemySkill {
	key: string;
	name: string;
	icon: string;
	desc: string;
	passive: boolean;
	type: SKILL_ATTR;
	target: "enemy" | "team";
	buff: SkillEntryData;
}

export interface Enemy {
	id: string;
	// name: string;
	// desc: string;
	icon: string;
	ai: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	isBoss: boolean;

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

	skills: EnemySkill[];
}

export default LoadDBFactory<Enemy[]>(
	"enemy",
	import(/* webpackChunkName: "chunk-db-enemy" */ "@/json/enemy"),
);
