import { BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";
import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, SKILL_ATTR } from "@/libs/Types/Enums";

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
	no: number;

	rarity: ACTOR_GRADE;
	promo?: ACTOR_GRADE[];

	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;

	name: string;
	shortname: string;

	group: string;
	shortgroup: string;
	groupKey: string;

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
		no: 0,
		uid: "",

		rarity: ACTOR_GRADE.B,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.ATTACKER,
		body: ACTOR_BODY_TYPE.BIOROID,

		name: "-",
		shortname: "-",

		group: "",
		shortgroup: "",
		groupKey: "",

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
		name: "대체 코어",
		shortname: "대체 코어",
	};
	export const Core_Special: FilterableUnit = {
		...Empty,
		uid: "Core_Special",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.SUPPORTER,
		name: "특수 대체 코어",
		shortname: "특수 대체 코어",
	};

	export const Module_TA_B: FilterableUnit = {
		...Empty,
		uid: "Module_TA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 RE",
		shortname: "경장공격기 모듈 RE",
	};
	export const Module_TA_A: FilterableUnit = {
		...Empty,
		uid: "Module_TA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 MP",
		shortname: "경장공격기 모듈 MP",
	};
	export const Module_TA_S: FilterableUnit = {
		...Empty,
		uid: "Module_TA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 SP",
		shortname: "경장공격기 모듈 SP",
	};
	export const Module_TA_SS: FilterableUnit = {
		...Empty,
		uid: "Module_TA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 EX",
		shortname: "경장공격기 모듈 EX",
	};

	export const Module_TT_B: FilterableUnit = {
		...Empty,
		uid: "Module_TT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 RE",
		shortname: "경장보호기 모듈 RE",
	};
	export const Module_TT_A: FilterableUnit = {
		...Empty,
		uid: "Module_TT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 MP",
		shortname: "경장보호기 모듈 MP",
	};
	export const Module_TT_S: FilterableUnit = {
		...Empty,
		uid: "Module_TT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 SP",
		shortname: "경장보호기 모듈 SP",
	};
	export const Module_TT_SS: FilterableUnit = {
		...Empty,
		uid: "Module_TT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 EX",
		shortname: "경장보호기 모듈 EX",
	};

	export const Module_TC_B: FilterableUnit = {
		...Empty,
		uid: "Module_TC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 RE",
		shortname: "경장지원기 모듈 RE",
	};
	export const Module_TC_A: FilterableUnit = {
		...Empty,
		uid: "Module_TC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 MP",
		shortname: "경장지원기 모듈 MP",
	};
	export const Module_TC_S: FilterableUnit = {
		...Empty,
		uid: "Module_TC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 SP",
		shortname: "경장지원기 모듈 SP",
	};
	export const Module_TC_SS: FilterableUnit = {
		...Empty,
		uid: "Module_TC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 EX",
		shortname: "경장지원기 모듈 EX",
	};

	export const Module_MA_B: FilterableUnit = {
		...Empty,
		uid: "Module_MA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 RE",
		shortname: "기동공격기 모듈 RE",
	};
	export const Module_MA_A: FilterableUnit = {
		...Empty,
		uid: "Module_MA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 MP",
		shortname: "기동공격기 모듈 MP",
	};
	export const Module_MA_S: FilterableUnit = {
		...Empty,
		uid: "Module_MA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 SP",
		shortname: "기동공격기 모듈 SP",
	};
	export const Module_MA_SS: FilterableUnit = {
		...Empty,
		uid: "Module_MA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 EX",
		shortname: "기동공격기 모듈 EX",
	};

	export const Module_MT_B: FilterableUnit = {
		...Empty,
		uid: "Module_MT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 RE",
		shortname: "기동보호기 모듈 RE",
	};
	export const Module_MT_A: FilterableUnit = {
		...Empty,
		uid: "Module_MT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 MP",
		shortname: "기동보호기 모듈 MP",
	};
	export const Module_MT_S: FilterableUnit = {
		...Empty,
		uid: "Module_MT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 SP",
		shortname: "기동보호기 모듈 SP",
	};
	export const Module_MT_SS: FilterableUnit = {
		...Empty,
		uid: "Module_MT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 EX",
		shortname: "기동보호기 모듈 EX",
	};

	export const Module_MC_B: FilterableUnit = {
		...Empty,
		uid: "Module_MC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 RE",
		shortname: "기동지원기 모듈 RE",
	};
	export const Module_MC_A: FilterableUnit = {
		...Empty,
		uid: "Module_MC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 MP",
		shortname: "기동지원기 모듈 MP",
	};
	export const Module_MC_S: FilterableUnit = {
		...Empty,
		uid: "Module_MC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 SP",
		shortname: "기동지원기 모듈 SP",
	};
	export const Module_MC_SS: FilterableUnit = {
		...Empty,
		uid: "Module_MC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 EX",
		shortname: "기동지원기 모듈 EX",
	};

	export const Module_AA_B: FilterableUnit = {
		...Empty,
		uid: "Module_AA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 RE",
		shortname: "중장공격기 모듈 RE",
	};
	export const Module_AA_A: FilterableUnit = {
		...Empty,
		uid: "Module_AA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 MP",
		shortname: "중장공격기 모듈 MP",
	};
	export const Module_AA_S: FilterableUnit = {
		...Empty,
		uid: "Module_AA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 SP",
		shortname: "중장공격기 모듈 SP",
	};
	export const Module_AA_SS: FilterableUnit = {
		...Empty,
		uid: "Module_AA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 EX",
		shortname: "중장공격기 모듈 EX",
	};

	export const Module_AT_B: FilterableUnit = {
		...Empty,
		uid: "Module_AT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 RE",
		shortname: "중장보호기 모듈 RE",
	};
	export const Module_AT_A: FilterableUnit = {
		...Empty,
		uid: "Module_AT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 MP",
		shortname: "중장보호기 모듈 MP",
	};
	export const Module_AT_S: FilterableUnit = {
		...Empty,
		uid: "Module_AT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 SP",
		shortname: "중장보호기 모듈 SP",
	};
	export const Module_AT_SS: FilterableUnit = {
		...Empty,
		uid: "Module_AT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 EX",
		shortname: "중장보호기 모듈 EX",
	};

	export const Module_AC_B: FilterableUnit = {
		...Empty,
		uid: "Module_AC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "중장지원기 모듈 RE",
		shortname: "중장지원기 모듈 RE",
	};
	export const Module_AC_A: FilterableUnit = {
		...Empty,
		uid: "Module_AC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "중장지원기 모듈 MP",
		shortname: "중장지원기 모듈 MP",
	};
	export const Module_AC_S: FilterableUnit = {
		...Empty,
		uid: "Module_AC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "중장지원기 모듈 SP",
		shortname: "중장지원기 모듈 SP",
	};
	export const Module_AC_SS: FilterableUnit = {
		...Empty,
		uid: "Module_AC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "중장지원기 모듈 EX",
		shortname: "중장지원기 모듈 EX",
	};
	/* eslint-enable camelcase */
}
