import EntitySource from "@/libs/EntitySource";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ITEM_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";

import Data from "@/json/unit";
import EquipData from "@/libs/DB/Equip";
import Decimal from "decimal.js";

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

interface RawUnit {
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
	source: string[][];
}
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

	hasLimited: string;
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
		hasLimited: "",
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
function Compile (): Unit[] {
	return (Data as RawUnit[]).map(x => ({
		id: x.id,
		uid: x.uid,

		name: x.name,
		shortname: x.shortname,

		group: x.group,
		shortgroup: x.shortgroup,
		groupkey: x.groupkey,

		introduce: x.introduce,
		height: x.height,
		weight: x.weight,
		weapon1: x.weapon1,
		weapon2: x.weapon2,

		rarity: x.rarity,
		body: x.body,
		type: x.type,
		role: x.role,

		promotions: x.promotions,
		craftable: x.craftable,
		favor: x.favor,
		marry: x.marry,

		linkBonus: x.linkBonus,
		fullLinkBonus: x.fullLinkBonus,

		equip: [
			x.equip[0],
			x.equip[1],
			x.equip[2],
			x.equip[3],
		],
		source: x.source
			.map(y => y.map(z => new EntitySource(z))),

		// 이 전투원 id로 장착이 제한된 장비
		hasLimited: (() => {
			const eq = EquipData.find(y => y.limit && y.limit.some(z => z === x.id));
			if (!eq) return "";

			return eq.fullKey;
		})(),
	}));
}
export default Compile();

export interface LinkBonusData {
	Key: LinkBonusType;
	Name: string;
	Prefix: string;
	Postfix: string;
	Value: number;
}

export function GetLinkBonus (type: LinkBonusType, links: number): LinkBonusData {
	const v = parseInt(type.replace(/^.+_([0-9]+)$/, "$1"), 10);

	switch (type) {
		case "HP_15":
		case "HP_20":
		case "HP_25":
		case "HP_30":
		case "HP_35":
		case "HP_40":
		case "HP_45":
		case "HP_50":
			return {
				Key: type,
				Name: "체력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "ATK_10":
		case "ATK_15":
		case "ATK_20":
		case "ATK_25":
		case "ATK_30":
			return {
				Key: type,
				Name: "공격력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "DEF_3":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 3).toNumber(),
			};
		case "DEF_10":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 5).toNumber(),
			};
		case "DEF_15":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 10).toNumber(),
			};
		case "DEF_20":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 20).toNumber(),
			};
		case "DEF_25":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 30).toNumber(),
			};

		case "ACC_5":
			return {
				Key: type,
				Name: "적중률",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 7).toNumber(),
			};
		case "ACC_10":
		case "ACC_25":
		case "ACC_50":
		case "ACC_75":
			return {
				Key: type,
				Name: "적중률",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "EV_3":
			return {
				Key: type,
				Name: "회피",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 2).toNumber(),
			};
		case "EV_10":
		case "EV_15":
		case "EV_20":
		case "EV_25":
		case "EV_30":
		case "EV_40":
		case "EV_50":
			return {
				Key: type,
				Name: "회피",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "SPD_2":
		case "SPD_3":
		case "SPD_4":
		case "SPD_10":
		case "SPD_15":
		case "SPD_20":
		case "SPD_25":
		case "SPD_30":
			return {
				Key: type,
				Name: "행동력",
				Prefix: "+",
				Postfix: "",
				Value: Decimal.mul(links, v)
					.div(100)
					.toNumber(),
			};

		case "Cri_2":
		case "Cri_3":
		case "Cri_5":
		case "Cri_10":
		case "Cri_15":
		case "Cri_20":
		case "Cri_25":
		case "Cri_30":
			return {
				Key: type,
				Name: "치명타",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "Range_1":
			return {
				Key: type,
				Name: "사거리",
				Prefix: "+",
				Postfix: "",
				Value: 1,
			};

		case "Buff_1":
		case "Buff_2":
		case "Buff_3":
			return {
				Key: type,
				Name: "버프/디버프 효과",
				Prefix: "Lv+",
				Postfix: "",
				Value: v,
			};

		case "Exp_5":
			return {
				Key: type,
				Name: "경험치",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 4).toNumber(),
			};
		case "Exp_10":
			return {
				Key: type,
				Name: "경험치",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 10).toNumber(),
			};

		case "Skill_2":
		case "Skill_5":
		case "Skill_10":
		case "Skill_15":
		case "Skill_20":
		case "Skill_25":
		case "Skill_30":
		case "Skill_35":
			return {
				Key: type,
				Name: "스킬 위력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "Cost_20":
		case "Cost_25":
		case "Cost_30":
		case "Cost_35":
			return {
				Key: type,
				Name: "출격 비용",
				Prefix: "-",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};
	}

	return {
		Key: type,
		Name: "???",
		Prefix: "",
		Postfix: "",
		Value: 0,
	};
}
