import Data from "@/json/enemy.json";
import { BuffStat } from "@/libs/Buffs/Buffs";
import { ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR } from "@/libs/Types/Enums";

export interface EnemySkill {
	key: string;
	name: string;
	icon: string;
	desc: string;
	passive: boolean;
	type: SKILL_ATTR;
	rate: number;
	range: number;
	ap: number;
	grid: string;
	buffs: BuffStat[];
}

interface RawEnemy {
	id: string;
	name: string;
	desc: string;
	icon: string;
	ai: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	isBoss: boolean;

	hp: number[];
	atk: number[];
	def: number[];
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
export interface Enemy {
	id: string;
	name: string;
	desc: string;
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
export default Data as RawEnemy[] as Enemy[];
