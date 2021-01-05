import Data from "@/json/enemy";
import { SkillEntryData } from "@/libs/DB/Skill";
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

/**
 * `null` : Not requested
 * `false` : Loading
 * `Enemy[]` : Loaded
 */
type DBCallback<T> = (data: T) => void;
let internalDB: Enemy[] | false | null = null;
const callbackQueue: DBCallback<Enemy[]>[] = [];
export default function EnemyDB (callback?: (data: Enemy[]) => void): Enemy[] | null {
	if (!internalDB) {
		if (callback) callbackQueue.push(callback);

		if (internalDB !== false) {
			internalDB = false;
			import(/* webpackChunkName: "chunk-db-enemy" */ "@/json/enemy")
				.then(x => {
					internalDB = x.default as unknown as Enemy[];
					callbackQueue.forEach(y => y(internalDB as Enemy[]));
				});
		}
		return null;
	}
	return internalDB;
}
