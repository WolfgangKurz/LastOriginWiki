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
}

export interface LinkBonusData {
	Key: LinkBonusType;
	Name: string;
	Prefix: string;
	Postfix: string;
	Value: number;
}
