import { UnitSkin } from "@/types/DB/Unit";
import { BUFFEFFECT_TYPE } from "../BuffEffect";
import { SKILL_ATTR, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, ROGUE_SKILL_TYPE } from "../Enums";

export interface FilterableUnitBuff {
	target: "self" | "team" | "enemy";
	type: BUFFEFFECT_TYPE;
	positive: boolean;
}
export interface FilterableUnitBuffGroup {
	effects: FilterableUnitBuff[];
}

export interface FilterableUnitSkill {
	/** target_ground */
	grid: boolean;
	/** dismiss_guard */
	guard: boolean;
	elem: SKILL_ATTR;
}

export interface FilterableUnit {
	uid: string;
	id: number;

	rarity: ACTOR_GRADE;
	promo?: ACTOR_GRADE[];

	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;

	// name: string;
	// shortname: string;

	group: string;
	// shortgroup: string;
	// groupKey: string;

	craft: false | number;

	buffs: FilterableUnitBuff[][]; // FilterableUnitBuffGroup[];
	skills: {
		1: FilterableUnitSkill;
		2: FilterableUnitSkill;
		F1?: FilterableUnitSkill;
		F2?: FilterableUnitSkill;
	};
	skins: UnitSkin;

	roguelike: ROGUE_SKILL_TYPE[];
}

/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace FilterableUnit {
	export const Empty: FilterableUnit = {
		id: 0,
		uid: "",

		rarity: ACTOR_GRADE.B,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.ATTACKER,
		body: ACTOR_BODY_TYPE.BIOROID,

		group: "",
		// shortgroup: "",

		craft: false,

		buffs: [],
		skills: {
			1: {
				grid: false,
				guard: false,
				elem: SKILL_ATTR.PHYSICS,
			},
			2: {
				grid: false,
				guard: false,
				elem: SKILL_ATTR.PHYSICS,
			},
		},
		skins: {
			G: false,
			V: false,
			E: false,
			M: false,
			A: false,
			Stage: false,
			D: false,
			S: false,
			X: false,
			BG: false,
			AV: false,
			AVG: false,
			category: [],
			artist: "",
			offset: { n: 0, d: 0, s: 0, x: 0 },
			sid: 0,
		},

		roguelike: [],
	};
}
