import EntitySource from "@/libs/EntitySource";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ITEM_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";

export type LinkBonusType =
	"" |
	"HP_15" | "HP_20" | "HP_25" | "HP_30" | "HP_35" | "HP_40" | "HP_45" | "HP_50" |
	"ATK_10" | "ATK_15" | "ATK_20" | "ATK_25" | "ATK_30" |
	"DEF_3" | "DEF_10" | "DEF_15" | "DEF_20" | "DEF_25" |
	"ACC_5" | "ACC_10" | "ACC_25" | "ACC_50" | "ACC_75" |
	"EV_3" | "EV_10" | "EV_15" | "EV_20" | "EV_25" | "EV_30" | "EV_40" | "EV_50" |
	"SPD_2" | "SPD_3" | "SPD_4" | "SPD_10" | "SPD_15" | "SPD_20" | "SPD_25" | "SPD_30" |
	"Cri_2" | "Cri_3" | "Cri_5" | "Cri_10" | "Cri_15" | "Cri_20" | "Cri_25" | "Cri_30" |
	"Range_1" |
	"Buff_1" | "Buff_2" | "Buff_3" |
	"Exp_5" | "Exp_10" |
	"Skill_2" | "Skill_5" | "Skill_10" | "Skill_15" | "Skill_20" | "Skill_25" | "Skill_30" | "Skill_35" |
	"Cost_20" | "Cost_25" | "Cost_30" | "Cost_35";

export interface Unit {
	id: number;
	uid: string;

	rarity: ACTOR_GRADE;
	promotions?: ACTOR_GRADE[];

	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;

	name: string;
	shortname: string;

	group: string;
	shortgroup: string;
	groupkey: string;

	introduce: string;
	height: string;
	weight: string;
	weapon1: string;
	weapon2: string;

	craftable: false | number;
	favor: {
		present: number;
		clear: number;
		death: number;
		assistant: number;
	};
	marry: boolean;

	linkBonus: LinkBonusType[];
	fullLinkBonus: LinkBonusType[];

	equip: [ITEM_TYPE, ITEM_TYPE, ITEM_TYPE, ITEM_TYPE];
	source: EntitySource[][];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Unit {
	export const Empty: Unit = {
		id: 0,
		uid: "",

		rarity: ACTOR_GRADE.B,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.ATTACKER,
		body: ACTOR_BODY_TYPE.BIOROID,

		name: "-",
		shortname: "-",
		group: "",
		shortgroup: "",
		groupkey: "",

		introduce: "",
		height: "",
		weight: "",
		weapon1: "",
		weapon2: "",

		craftable: false,
		favor: {
			present: 0,
			clear: 0,
			death: 0,
			assistant: 0,
		},
		marry: false,

		linkBonus: ["HP_20", "ATK_20", "ACC_5", "Exp_5"],
		fullLinkBonus: ["Cost_20", "Skill_15", "ACC_75", "Cri_20", "SPD_10"],
		equip: [
			ITEM_TYPE.CHIP,
			ITEM_TYPE.CHIP,
			ITEM_TYPE.SPCHIP,
			ITEM_TYPE.SUBEQ,
		],
		source: [],
	};

	/* eslint-disable camelcase */
	export const Core_Normal: Unit = {
		...Empty,
		uid: "Core_Normal",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.SUPPORTER,
		name: "대체 코어",
		shortname: "대체 코어",
	};
	export const Core_Special: Unit = {
		...Empty,
		uid: "Core_Special",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.SUPPORTER,
		name: "특수 대체 코어",
		shortname: "특수 대체 코어",
	};

	export const Module_TA_B: Unit = {
		...Empty,
		uid: "Module_TA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 RE",
		shortname: "경장공격기 모듈 RE",
	};
	export const Module_TA_A: Unit = {
		...Empty,
		uid: "Module_TA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 MP",
		shortname: "경장공격기 모듈 MP",
	};
	export const Module_TA_S: Unit = {
		...Empty,
		uid: "Module_TA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 SP",
		shortname: "경장공격기 모듈 SP",
	};
	export const Module_TA_SS: Unit = {
		...Empty,
		uid: "Module_TA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "경장공격기 모듈 EX",
		shortname: "경장공격기 모듈 EX",
	};

	export const Module_TT_B: Unit = {
		...Empty,
		uid: "Module_TT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 RE",
		shortname: "경장보호기 모듈 RE",
	};
	export const Module_TT_A: Unit = {
		...Empty,
		uid: "Module_TT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 MP",
		shortname: "경장보호기 모듈 MP",
	};
	export const Module_TT_S: Unit = {
		...Empty,
		uid: "Module_TT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 SP",
		shortname: "경장보호기 모듈 SP",
	};
	export const Module_TT_SS: Unit = {
		...Empty,
		uid: "Module_TT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "경장보호기 모듈 EX",
		shortname: "경장보호기 모듈 EX",
	};

	export const Module_TC_B: Unit = {
		...Empty,
		uid: "Module_TC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 RE",
		shortname: "경장지원기 모듈 RE",
	};
	export const Module_TC_A: Unit = {
		...Empty,
		uid: "Module_TC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 MP",
		shortname: "경장지원기 모듈 MP",
	};
	export const Module_TC_S: Unit = {
		...Empty,
		uid: "Module_TC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 SP",
		shortname: "경장지원기 모듈 SP",
	};
	export const Module_TC_SS: Unit = {
		...Empty,
		uid: "Module_TC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "경장지원기 모듈 EX",
		shortname: "경장지원기 모듈 EX",
	};

	export const Module_MA_B: Unit = {
		...Empty,
		uid: "Module_MA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 RE",
		shortname: "기동공격기 모듈 RE",
	};
	export const Module_MA_A: Unit = {
		...Empty,
		uid: "Module_MA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 MP",
		shortname: "기동공격기 모듈 MP",
	};
	export const Module_MA_S: Unit = {
		...Empty,
		uid: "Module_MA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 SP",
		shortname: "기동공격기 모듈 SP",
	};
	export const Module_MA_SS: Unit = {
		...Empty,
		uid: "Module_MA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "기동공격기 모듈 EX",
		shortname: "기동공격기 모듈 EX",
	};

	export const Module_MT_B: Unit = {
		...Empty,
		uid: "Module_MT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 RE",
		shortname: "기동보호기 모듈 RE",
	};
	export const Module_MT_A: Unit = {
		...Empty,
		uid: "Module_MT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 MP",
		shortname: "기동보호기 모듈 MP",
	};
	export const Module_MT_S: Unit = {
		...Empty,
		uid: "Module_MT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 SP",
		shortname: "기동보호기 모듈 SP",
	};
	export const Module_MT_SS: Unit = {
		...Empty,
		uid: "Module_MT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "기동보호기 모듈 EX",
		shortname: "기동보호기 모듈 EX",
	};

	export const Module_MC_B: Unit = {
		...Empty,
		uid: "Module_MC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 RE",
		shortname: "기동지원기 모듈 RE",
	};
	export const Module_MC_A: Unit = {
		...Empty,
		uid: "Module_MC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 MP",
		shortname: "기동지원기 모듈 MP",
	};
	export const Module_MC_S: Unit = {
		...Empty,
		uid: "Module_MC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 SP",
		shortname: "기동지원기 모듈 SP",
	};
	export const Module_MC_SS: Unit = {
		...Empty,
		uid: "Module_MC_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "기동지원기 모듈 EX",
		shortname: "기동지원기 모듈 EX",
	};

	export const Module_AA_B: Unit = {
		...Empty,
		uid: "Module_AA_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 RE",
		shortname: "중장공격기 모듈 RE",
	};
	export const Module_AA_A: Unit = {
		...Empty,
		uid: "Module_AA_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 MP",
		shortname: "중장공격기 모듈 MP",
	};
	export const Module_AA_S: Unit = {
		...Empty,
		uid: "Module_AA_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 SP",
		shortname: "중장공격기 모듈 SP",
	};
	export const Module_AA_SS: Unit = {
		...Empty,
		uid: "Module_AA_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.ATTACKER,
		name: "중장공격기 모듈 EX",
		shortname: "중장공격기 모듈 EX",
	};

	export const Module_AT_B: Unit = {
		...Empty,
		uid: "Module_AT_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 RE",
		shortname: "중장보호기 모듈 RE",
	};
	export const Module_AT_A: Unit = {
		...Empty,
		uid: "Module_AT_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 MP",
		shortname: "중장보호기 모듈 MP",
	};
	export const Module_AT_S: Unit = {
		...Empty,
		uid: "Module_AT_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 SP",
		shortname: "중장보호기 모듈 SP",
	};
	export const Module_AT_SS: Unit = {
		...Empty,
		uid: "Module_AT_SS",
		rarity: ACTOR_GRADE.SS,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.TANKER,
		name: "중장보호기 모듈 EX",
		shortname: "중장보호기 모듈 EX",
	};

	export const Module_AC_B: Unit = {
		...Empty,
		uid: "Module_AC_B",
		rarity: ACTOR_GRADE.B,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "중장지원기 모듈 RE",
		shortname: "중장지원기 모듈 RE",
	};
	export const Module_AC_A: Unit = {
		...Empty,
		uid: "Module_AC_A",
		rarity: ACTOR_GRADE.A,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "중장지원기 모듈 MP",
		shortname: "중장지원기 모듈 MP",
	};
	export const Module_AC_S: Unit = {
		...Empty,
		uid: "Module_AC_S",
		rarity: ACTOR_GRADE.S,
		body: ACTOR_BODY_TYPE.BIOROID,
		type: ACTOR_CLASS.TROOPER,
		role: ROLE_TYPE.SUPPORTER,
		name: "중장지원기 모듈 SP",
		shortname: "중장지원기 모듈 SP",
	};
	export const Module_AC_SS: Unit = {
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

export interface LinkBonusData {
	Key: LinkBonusType;
	Name: string;
	Prefix: string;
	Postfix: string;
	Value: number;
}
