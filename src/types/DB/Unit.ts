import EntitySource from "@/libs/EntitySource";
import { UnitDialogueDataType } from "@/types/DB/Dialogue";
import { SkillGroup } from "@/types/DB/Skill";
import { UnitStats } from "@/types/DB/UnitStats";
import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, ITEM_TYPE } from "@/types/Enums";
import RoguelikeSkill from "./Roguelike.Skill";

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

export interface SkinOffset {
	n: number;
	d: number;
	s: number;
	x: number;
}

export interface UnitSkin extends UnitSkinEntity {
	skins?: UnitSkinEntity[];
	P?: UnitSkinEntity;
}

export interface UnitSkinEntity {
	/** Skin ID */
	sid: null | number;

	/** Offset */
	offset: SkinOffset;

	/** has Google CG */
	G: boolean;

	/** Has Voice */
	V: boolean;

	/** Effect */
	E: boolean;

	/** Motion */
	M: boolean;

	/** Animated */
	A: boolean;

	/** Staged Animation */
	Stage: boolean;

	/** Price */
	price?: number;

	/** Skin Artist */
	artist: string;

	/** Damaaged */
	D: boolean;

	/** Simplified */
	S: boolean;

	/** Damaged Simplified */
	X: boolean;

	BG: boolean;

	/** Animated, Video? */
	AV: boolean;
	/** Animated, Video? - Google ver */
	AVG: boolean;

	// /** Skin Item Name */
	// name: string;

	// /** Skin Item Description */
	// desc: string;

	category: string[];
}

export interface Unit {
	id: number;
	uid: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;
	promotions?: ACTOR_GRADE[];
	slots: [ITEM_TYPE, ITEM_TYPE, ITEM_TYPE, ITEM_TYPE];

	group: string;
	shortgroup: string;

	height: string;
	weight: string;
	weapon1: string;
	weapon2: string;

	marriageVoice: boolean;
	favor: {
		present: number;
		clear: number;
		death: number;
		assistant: number;
	};

	linkBonus: LinkBonusType[];
	fullLinkBonus: LinkBonusType[];

	craft: false | number;
	equips: string[];

	source: EntitySource[][];
	stat: UnitStats[];
	skills: Partial<SkillGroup>;
	dialogue: UnitDialogueDataType;
	skins: UnitSkin;

	roguelike: RoguelikeSkill[];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Unit {
	export const Empty: Unit = {
		id: 0,
		uid: "",

		group: "",
		shortgroup: "",

		rarity: ACTOR_GRADE.B,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.ATTACKER,
		body: ACTOR_BODY_TYPE.BIOROID,
		slots: [
			ITEM_TYPE.CHIP,
			ITEM_TYPE.CHIP,
			ITEM_TYPE.SPCHIP,
			ITEM_TYPE.SUBEQ,
		],

		height: "",
		weight: "",
		weapon1: "",
		weapon2: "",

		marriageVoice: false,
		favor: {
			present: 0,
			clear: 0,
			death: 0,
			assistant: 0,
		},

		linkBonus: ["HP_20", "ATK_20", "ACC_5", "Exp_5"],
		fullLinkBonus: ["Cost_20", "Skill_15", "ACC_75", "Cri_20", "SPD_10"],

		craft: false,
		equips: [],

		stat: [],
		source: [],
		skills: {},
		dialogue: {
			ko: null,
			jp: null,
			jpdmm: null,
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

export interface LinkBonusData {
	Key: LinkBonusType;
	Name: string;
	Prefix: string;
	Postfix: string;
	Value: number;
}
