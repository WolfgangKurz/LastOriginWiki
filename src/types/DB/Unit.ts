import EntitySource from "@/libs/EntitySource";
import { UnitDialogueAudioType, UnitDialogueDataType } from "@/types/DB/Dialogue";
import { MapWaveDrop } from "@/types/DB/Map";
import { SkillGroup } from "@/types/DB/Skill";
import { UnitStats } from "@/types/DB/UnitStats";
import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, ITEM_TYPE, FACETYPE, CHARTYPE_GIFTITEM_DAMAGE_TYPE } from "@/types/Enums";
import RoguelikeSkill from "./Roguelike.Skill";

export type LinkBonusType =
	"" |
	"HP_15" | "HP_20" | "HP_25" | "HP_30" | "HP_35" | "HP_40" | "HP_45" | "HP_50" |
	"ATK_10" | "ATK_15" | "ATK_20" | "ATK_25" | "ATK_30" | "ATK_50" |
	"DEF_3" | "DEF_5" | "DEF_10" | "DEF_15" | "DEF_20" | "DEF_30" |
	"ACC_5" | "ACC_10" | "ACC_25" | "ACC_50" | "ACC_75" |
	"EV_3" | "EV_10" | "EV_15" | "EV_20" | "EV_25" | "EV_30" | "EV_40" | "EV_50" |
	"SPD_2" | "SPD_3" | "SPD_4" | "SPD_10" | "SPD_15" | "SPD_20" | "SPD_25" | "SPD_30" |
	"Cri_2" | "Cri_3" | "Cri_5" | "Cri_10" | "Cri_15" | "Cri_20" | "Cri_25" | "Cri_30" |
	"Range_1" | "Range_2" |
	"Buff_1" | "Buff_2" | "Buff_3" |
	"Exp_5" | "Exp_10" |
	"Skill_2" | "Skill_5" | "Skill_10" | "Skill_15" | "Skill_20" | "Skill_25" | "Skill_30" | "Skill_35" |
	"Cost_20" | "Cost_25" | "Cost_30" | "Cost_35";

export enum SKIN_SUBSET_ENUM {
	___ = 0,
	Normal = 0,

	D__ = 1,
	Damaged = 1,

	_B_ = 2,
	Background = 2,

	__S = 3,
	Simplified = 3,

	DB_ = 4,
	DamagedBackground = 4,

	D_S = 5,
	DamagedSimplified = 5,

	_BS = 6,
	BackgroundSimplified = 6,

	DBS = 7,
	DamagedBackgroundSimplified = 7,
}

export enum SKIN_ANIM_SUBSET_ENUM {
	__ = 0,
	Normal = 0,

	B_ = 1,
	Background = 1,

	_S = 2,
	Simplified = 2,

	BS = 3,
	BackgroundSimplified = 3,
}

export interface UnitSkin extends UnitSkinEntity {
	skins?: UnitSkinEntity[];
	P?: UnitSkinEntity;
}

export interface UnitSkinEntity {
	/** Skin ID */
	sid: null | number;

	/** Offset */
	offsets: Partial<Record<SKIN_SUBSET_ENUM, number>>;

	/** has Google CG */
	G: boolean;

	/** animated by Spine */
	Spine: boolean;

	/** has SD video */
	// SD: false | string[];

	/** Parts, see SKIN_IN_PARTS */
	parts: number;

	/** Staged Animation */
	stage: boolean;

	/** Price */
	price?: number;
	priceEx?: string;

	/** Skin Artist */
	artist: string;

	/** Subset info */
	subset: Record<SKIN_SUBSET_ENUM, boolean>;

	/** Animated */
	anim: Record<SKIN_ANIM_SUBSET_ENUM, boolean>;

	facelist: FACETYPE[];

	// /** Skin Item Name */
	// name: string;

	// /** Skin Item Description */
	// desc: string;

	/** timestamp */
	releaseDate: number;

	category: string[];

	metadata: {
		imageId: number;
		tbarId?: number;
		voiceId?: number;
		consumableKey?: string;
		"2dmodel"?: string;
		"2dmodel_dam"?: string;
	};
}

export interface ResearchTreeData {
	key: string;
	next: ResearchTreeData[] | undefined;
}

export interface LvLimitData {
	level: number;
	items: Required<MapWaveDrop>[];
}

export interface UnitCost {
	res: [number, number, number];
	aicore: number;
	items: Array<{
		item: string;
		count: number;
	}>;
}

/**
 * ```ts
 * [number, number, number, number, number, number]
 * [Atk, AtkRate, Speed, HP, Def, Assist]
 * ```
 */
export type UnitSpecChart = [number, number, number, number, number, number];

export type UnitCV = Partial<Record<number | "M", Record<UnitDialogueAudioType, string>>>;

export interface Unit {
	id: number;
	uid: string;

	rarity: ACTOR_GRADE;
	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;
	promotions?: ACTOR_GRADE[];
	slots: [ITEM_TYPE, ITEM_TYPE, ITEM_TYPE, ITEM_TYPE];

	lvLimits: LvLimitData[];

	group: string;
	shortgroup: string;

	/** timestamp */
	releaseDate: number;
	height: string;
	weight: string;
	weapon1: string;
	weapon2: string;

	company: string;
	maker: string;
	country: string;
	age: string;

	secretRoomType: CHARTYPE_GIFTITEM_DAMAGE_TYPE;
	marriageVoice: boolean;
	introVoice: Array<UnitDialogueAudioType | [UnitDialogueAudioType, string]>;
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
	cost: UnitCost | undefined;
	research: boolean; // ResearchTreeData[] | undefined;

	stat: UnitStats[];
	chart: UnitSpecChart;
	cv: UnitCV;

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

		lvLimits: [],

		releaseDate: 0,
		height: "",
		weight: "",
		weapon1: "",
		weapon2: "",

		company: "",
		maker: "",
		country: "",
		age: "",

		secretRoomType: CHARTYPE_GIFTITEM_DAMAGE_TYPE.NONE,
		marriageVoice: false,
		introVoice: [],
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
		chart: [0, 0, 0, 0, 0, 0],
		cv: {},

		source: [],
		cost: undefined,
		research: undefined,

		skills: {},
		dialogue: {
			KR: null,
			JP: null,
			EN: null,
			TC: null,
		},
		skins: {
			G: false,
			Spine: false,
			parts: 0,
			stage: false,

			subset: {
				0: false,
				1: false,
				2: false,
				3: false,
				4: false,
				5: false,
				6: false,
				7: false,
			},
			offsets: {},

			anim: {
				0: false,
				1: false,
				2: false,
				3: false,
			},

			facelist: [
				FACETYPE.NONE,
			],

			releaseDate: 0,
			category: [],
			artist: "",
			sid: 0,

			metadata: {
				imageId: 0,
			},
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
