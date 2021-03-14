import { BUFFEFFECT_TYPE } from "../BuffEffect";
import { SKILL_ATTR, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE } from "../Enums";

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
	shortgroup: string;
	// groupKey: string;

	craft: false | number;

	buffs: FilterableUnitBuff[][]; // FilterableUnitBuffGroup[];
	skills: {
		active1: FilterableUnitSkill;
		active2: FilterableUnitSkill;
		Factive1?: FilterableUnitSkill;
		Factive2?: FilterableUnitSkill;
	};
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
		shortgroup: "",

		craft: false,

		buffs: [],
		skills: {
			active1: {
				grid: false,
				guard: false,
				elem: SKILL_ATTR.PHYSICS,
			},
			active2: {
				grid: false,
				guard: false,
				elem: SKILL_ATTR.PHYSICS,
			},
		},
	};

	/* eslint-disable camelcase */
	export const Core_Normal: FilterableUnit = {
		...Empty,
		uid: "Core_Normal",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Core_Special: FilterableUnit = {
		...Empty,
		uid: "Core_Special",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.SUPPORTER,
	};

	export const Module_TA_B: FilterableUnit = {
		...Empty,
		uid: "Module_TA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_TA_A: FilterableUnit = {
		...Empty,
		uid: "Module_TA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_TA_S: FilterableUnit = {
		...Empty,
		uid: "Module_TA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_TA_SS: FilterableUnit = {
		...Empty,
		uid: "Module_TA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};

	export const Module_TT_B: FilterableUnit = {
		...Empty,
		uid: "Module_TT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_TT_A: FilterableUnit = {
		...Empty,
		uid: "Module_TT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_TT_S: FilterableUnit = {
		...Empty,
		uid: "Module_TT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_TT_SS: FilterableUnit = {
		...Empty,
		uid: "Module_TT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};

	export const Module_TC_B: FilterableUnit = {
		...Empty,
		uid: "Module_TC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_TC_A: FilterableUnit = {
		...Empty,
		uid: "Module_TC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_TC_S: FilterableUnit = {
		...Empty,
		uid: "Module_TC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_TC_SS: FilterableUnit = {
		...Empty,
		uid: "Module_TC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};

	export const Module_MA_B: FilterableUnit = {
		...Empty,
		uid: "Module_MA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_MA_A: FilterableUnit = {
		...Empty,
		uid: "Module_MA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_MA_S: FilterableUnit = {
		...Empty,
		uid: "Module_MA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_MA_SS: FilterableUnit = {
		...Empty,
		uid: "Module_MA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};

	export const Module_MT_B: FilterableUnit = {
		...Empty,
		uid: "Module_MT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_MT_A: FilterableUnit = {
		...Empty,
		uid: "Module_MT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_MT_S: FilterableUnit = {
		...Empty,
		uid: "Module_MT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_MT_SS: FilterableUnit = {
		...Empty,
		uid: "Module_MT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};

	export const Module_MC_B: FilterableUnit = {
		...Empty,
		uid: "Module_MC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_MC_A: FilterableUnit = {
		...Empty,
		uid: "Module_MC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_MC_S: FilterableUnit = {
		...Empty,
		uid: "Module_MC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_MC_SS: FilterableUnit = {
		...Empty,
		uid: "Module_MC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};

	export const Module_AA_B: FilterableUnit = {
		...Empty,
		uid: "Module_AA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_AA_A: FilterableUnit = {
		...Empty,
		uid: "Module_AA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_AA_S: FilterableUnit = {
		...Empty,
		uid: "Module_AA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};
	export const Module_AA_SS: FilterableUnit = {
		...Empty,
		uid: "Module_AA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
	};

	export const Module_AT_B: FilterableUnit = {
		...Empty,
		uid: "Module_AT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_AT_A: FilterableUnit = {
		...Empty,
		uid: "Module_AT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_AT_S: FilterableUnit = {
		...Empty,
		uid: "Module_AT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};
	export const Module_AT_SS: FilterableUnit = {
		...Empty,
		uid: "Module_AT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
	};

	export const Module_AC_B: FilterableUnit = {
		...Empty,
		uid: "Module_AC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_AC_A: FilterableUnit = {
		...Empty,
		uid: "Module_AC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_AC_S: FilterableUnit = {
		...Empty,
		uid: "Module_AC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	export const Module_AC_SS: FilterableUnit = {
		...Empty,
		uid: "Module_AC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
	};
	/* eslint-enable camelcase */
}
