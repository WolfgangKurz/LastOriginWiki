/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable camelcase */
import { BUFF_ATTR_TYPE } from "./Enums";

/** 버프로 작동하는 수치 변동 종류 */
export enum BUFFEFFECT_TYPE {
	STAT_ATK_VALUE = 0,
	STAT_ATK_RATIO = 1,
	STAT_DEF_VALUE = 2,
	STAT_DEF_RATIO = 3,
	STAT_HP_VALUE = 4,
	STAT_HP_RATIO = 5,
	STAT_RATING_VALUE = 6,
	STAT_RATING_RATIO = 7,
	STAT_CRITICAL_VALUE = 8,
	STAT_CRITICAL_RATIO = 9,
	STAT_AVOID_VALUE = 10,
	STAT_AVOID_RATIO = 11,
	STAT_SPEED_VALUE = 12,
	STAT_SPEED_RATIO = 13,
	STAT_RESFIRE_VALUE = 14,
	STAT_RESFIRE_RATIO = 15,
	STAT_RESICE_VALUE = 16,
	STAT_RESICE_RATIO = 17,
	STAT_RESLIGHTNING_VALUE = 18,
	STAT_RESLIGHTNING_RATIO = 19,
	STAGE_AP_VALUE = 20,
	STAGE_AP_SHIFT = 21,
	STAGE_AP_STOP = 22,
	UI_INFO_NEXTENEMY = 23,
	STAGE_THORNS_RATIO = 24,
	STAGE_REFLECTPHYSICS_VALUE = 25,
	STAGE_REFLECTFIRE_VALUE = 26,
	STAGE_REFLECTICE_VALUE = 27,
	STAGE_REFLECTLIGHTNIG_VALUE = 28,
	STAGE_REFLECTPHYSICS_RATIO_DEFENDER = 29,
	STAGE_REFLECTFIRE_RATIO_DEFENDER = 30,
	STAGE_REFLECTICE_RATIO_DEFENDER = 31,
	STAGE_REFLECTLIGHTNIG_RATIO_DEFENDER = 32,
	STAGE_IMMUNESHIELD_TIME = 33,
	STAGE_SHIELD_VALUE = 34,
	STAGE_SHIELD_VALUE_LIMITED = 35,
	STAGE_SHIELD_RATIO = 36,
	STAGE_SHIELD_RATIO_LIMITED = 37,
	STAGE_IMMUNESHIELD_VALUE = 38,
	STAGE_DAMAGEPHYSICS_RATIO = 39,
	STAGE_DAMAGEPHYSICS_VALUE = 40,
	STAGE_DAMAGEFIRE_RATIO = 41,
	STAGE_DAMAGEFIRE_VALUE = 42,
	STAGE_DAMAGEICE_RATIO = 43,
	STAGE_DAMAGEICE_VALUE = 44,
	STAGE_DAMAGELIGHTNING_RATIO = 45,
	STAGE_DAMAGELIGHTNING_VALUE = 46,
	STAGE_LOCKON01_TIME = 47,
	STAGE_ADDDAMAGE_RATIO = 48,
	STAGE_ADDDAMAGE_VALUE = 49,
	STAGE_BLOCK_COLUMN = 50,
	STAGE_BLOCK_GRID = 51,
	STAGE_MOVE_BACK = 52,
	STAGE_MOVE_FRONT = 53,
	STAGE_CRITICAL_NEXTATTACK = 54,
	STAT_RANGE_VALUE = 55,
	STAGE_AGRO_VALUE = 56,
	STAGE_DEFPIERCE_VALUE = 57,
	STAGE_DEFPIERCE_RATIO = 58,
	STAGE_GRID_CHANGE = 59,
	STAGE_TROOPERTYPEDMGBONUS_RATIO = 60,
	STAGE_ARMOREDTYPEDMGBONUS_RATIO = 61,
	STAGE_MOBILITYTYPEDMGBONUS_RATIO = 62,
	STAGE_CHARCHANGE_PERMANENT = 63,
	STAGE_CHARCHANGE_LIMITED = 64,
	STAGE_PHYSICS_DOT = 65,
	STAGE_FIRE_DOT = 66,
	STAGE_ICE_DOT = 67,
	STAGE_LIGHTNING_DOT = 68,
	STAGE_REMOVE_BUFF_ENUM = 69,
	STAGE_PHYSICS_DAMAGE_APPLY = 70,
	STAGE_FIRE_DAMAGE_APPLY = 71,
	STAGE_ICE_DAMAGE_APPLY = 72,
	STAGE_LIGHTNING_DAMAGE_APPLY = 73,
	STAGE_PROVOKE = 74,
	STAGE_BLOCK_ROW = 75,
	STAGE_BLOCK_CHARACTER = 76,
	STAGE_SUPPORT_ATTACK = 77,
	STAGE_SNARE = 78,
	STAGE_SEAL_SKILL = 79,
	STAGE_DAMAGEAMP_BYHP_ME = 80,
	STAGE_DAMAGEAMP_BYHP_OPP = 81,
	STAGE_RESURRECT = 82,
	STAGE_DAMAGEPHYSICS_RATIO_INS = 83,
	STAGE_DAMAGEFIRE_RATIO_INS = 84,
	STAGE_DAMAGEICE_RATIO_INS = 85,
	STAGE_DAMAGELIGHTNING_RATIO_INS = 86,
	STAGE_MARKING = 87,
	STAGE_REMOVE_BUFF = 88,
	STAGE_REMOVE_DEBUFF = 89,
	STAGE_DEBUFF_RATEUP = 90,
	STAGE_DEBUFF_PERDOWN = 91,
	STAGE_BUFFEFFECTRATE_CHANGE = 92,
	REMOVE_SUMMON_INSTENV = 93,
	BARRIER_PIERCE = 94,
	STAGE_EXP_UP = 95,
	STAGE_ANALYZE = 96,
	STAGE_REMOVE_BUFF_KEY_ALL_ATTRTYPE = 97,
	STAGE_RESURRECT_RATIO = 98,
	STAGE_REMOVE_ALL_BUFF = 99,
	STAGE_REMOVE_ALL_DEBUFF = 100,
	STAGE_IMMUNITY_DEBUFF = 101,
	STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_1 = 102,
	STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_2 = 103,
	STAT_MAXHP_VALUE = 104,
	STAT_MAXHP_RATIO = 105,
	STAT_SKILL_RATIO = 106,
	STAT_RANGE_VALUE_ACTIVE_SKILL_1 = 107,
	STAT_RANGE_VALUE_ACTIVE_SKILL_2 = 108,
	FOCUSED_ATTACK = 109,
	DAMAGE_DISPERSE = 110,
	EVADE_SKILLDMGUP_ME = 111,
	EVADE_SKILLDMGDOWN = 112,
	DEF_SKILLDMGUP_ME = 113,
	DEF_CRTDOWN = 114,
	BUFFER_ATK_ATKUP = 115,
	RESFIRE_VALUE_MIN = 116,
	RESICE_VALUE_MIN = 117,
	RESLIGHTNING_VALUE_MIN = 118,
	RESFIRE_VALUE_FIX = 119,
	RESICE_VALUE_FIX = 120,
	RESLIGHTNING_VALUE_FIX = 121,
	RESFIRE_DEBUFF_REVERSE = 122,
	RESICE_DEBUFF_REVERSE = 123,
	RESLIGHTNING_DEBUFF_REVERSE = 124,
	BUFF_DISALLOW = 125,
	REMOVE_BUFF_RESIST = 126,
	ACTION_NUMBER_CHANGE = 127,
	PROVOKE_ATTACKER = 128,
	CURRENT_HP_PIERCEDOWN = 129,
	GUARDPIERCE_APPLY = 130,
	GUARDPIERCE_NO_APPLY = 131,
	DAMAGE_RECOVER_THISROUND = 132,
	SAME_SKILL_HIT_DAMAGE_REDUCE = 133,
	STAGE_SEAL_SKILL_ACTIVE_1 = 134,
	STAGE_SEAL_SKILL_ACTIVE_2 = 135,
	STAGE_SEAL_SKILL_PASSIVE = 136,
	ADD_ROLE_TYPE = 137,
	WIDE_SKILL_RATIO = 138,
	WIDE_DAMAGE_RATIO = 139,
	STAGE_DOUBLE_ATTACK_RATIO = 140,
	RESIST_CHECK_ATTACK_POWER = 141,
}

export type BuffEffect = BuffEffect_Base & {
	/** 버프 / 비-버프 여부 */
	isBuff?: true;

	/** % 값 */
	chance?: string;
};

type BuffEffect_Base = BuffEffect_Body & {
	type: BUFFEFFECT_TYPE;
};

type BuffEffect_Body = BuffEffect_Unknown | BuffEffect_Off | BuffEffect_Attack | BuffEffect_Defense | BuffEffect_HP |
	BuffEffect_Accuracy | BuffEffect_Critical | BuffEffect_Evade | BuffEffect_TurnSpeed | BuffEffect_Resist | BuffEffect_AP |
	BuffEffect_APSet | BuffEffect_Stun | BuffEffect_Scout | BuffEffect_Counter | BuffEffect_DamageImmune | BuffEffect_DamageMinimize |
	BuffEffect_DamageReduce | BuffEffect_DamageIncrease | BuffEffect_Damage | BuffEffect_DamageMultiply | BuffEffect_DamageByHP |
	BuffEffect_DamageAdd | BuffEffect_Barrier | BuffEffect_Guard | BuffEffect_Position | BuffEffect_NextCritical | BuffEffect_Range |
	BuffEffect_Penetration | BuffEffect_Metamolphosis | BuffEffect_FixedDamage | BuffEffect_Provoke | BuffEffect_AttackSupport |
	BuffEffect_Immovable | BuffEffect_SkillDisable | BuffEffect_Revive | BuffEffect_AttackTarget | BuffEffect_InvokeChance |
	BuffEffect_SummonRemove | BuffEffect_PenetrationForce | BuffEffect_Exp | BuffEffect_DebuffImmune | BuffEffect_Collaborate |
	BuffEffect_MaxHP | BuffEffect_SkillRatio | BuffEffect_SkillRange | BuffEffect_Disperse | BuffEffect_ValueBy | BuffEffect_LessTarget |
	BuffEffect_ActCount | BuffEffect_GuardPierceApply | BuffEffect_BuffDisallow | BuffEffect_Wide | BuffEffect_ReuseSkill |
	BuffEffect_Minimum_Resist;

// #region BuffEffect
interface BuffEffect_Unknown {
	_comment: string;
}

type BuffEffect_Off = BuffEffect_Off_Type | BuffEffect_Off_BuffType | BuffEffect_Off_BuffKey | BuffEffect_Off_BuffAttrType;

/** `BUFFEFFECT_TYPE`이 `type`인 버프 해제 */
interface BuffEffect_Off_Type {
	off: {
		type: BUFFEFFECT_TYPE;
	};
}
interface BuffEffect_Off_BuffType {
	off: {
		type: BUFFEFFECT_TYPE;
		target: BUFF_ATTR_TYPE;
	};
}
interface BuffEffect_Off_BuffKey {
	off: string;
}
interface BuffEffect_Off_BuffAttrType {
	off: BUFF_ATTR_TYPE;
}

export type BuffEffectValue = BuffEffectValue_Literal | BuffEffectValue_Percent;
interface BuffEffectValue_Literal {
	base: number;
	per: number;
}
interface BuffEffectValue_Percent {
	/** % 값 */
	base: string;
	/** % 값 */
	per: string;
}

interface BuffEffect_Attack {
	attack: BuffEffectValue;
}
interface BuffEffect_Defense {
	defense: BuffEffectValue;
}
interface BuffEffect_HP {
	hp: BuffEffectValue;
}
interface BuffEffect_Accuracy {
	accuracy: BuffEffectValue;
}
interface BuffEffect_Critical {
	critical: BuffEffectValue;
}
interface BuffEffect_Evade {
	evade: BuffEffectValue;
}
interface BuffEffect_TurnSpeed {
	turnSpeed: BuffEffectValue;
}

type BuffEffect_Resist = BuffEffect_Resist_Elem | BuffEffect_ResistMin_Elem | BuffEffect_ResistFix_Elem | BuffEffect_ResistReverse_Elem |
	BuffEffect_Resist_Debuff;
interface BuffEffect_Resist_Elem {
	resist: {
		elem: "fire" | "ice" | "lightning";
		value: BuffEffectValue_Percent;
	};
}
/** 속성 저항, 하한선 */
interface BuffEffect_ResistMin_Elem {
	resist: {
		elem: "fire" | "ice" | "lightning";
		min: BuffEffectValue_Percent;
	};
}
/** 속성 저항, 고정값 */
interface BuffEffect_ResistFix_Elem {
	resist: {
		elem: "fire" | "ice" | "lightning";
		fix: BuffEffectValue_Percent;
	};
}
/** 속성 저항, 반전 */
interface BuffEffect_ResistReverse_Elem {
	resist: {
		elem: "fire" | "ice" | "lightning";
		reverse: true;
	};
}
/** 효과저항/강화해제 증가/감소 */
interface BuffEffect_Resist_Debuff {
	resist: {
		type: "debuff_rateup" | "debuff_perdown" | "off";
		value: BuffEffectValue_Percent;
	};
}

interface BuffEffect_AP {
	ap: BuffEffectValue_Literal;
}
interface BuffEffect_APSet {
	ap_set: BuffEffectValue_Literal;
}

interface BuffEffect_Stun {
	stun: true;
}
interface BuffEffect_Scout {
	scout: true;
}

interface BuffEffect_Counter {
	counter: BuffEffectValue_Percent;
}
/** 피해 무효화 */
interface BuffEffect_DamageImmune {
	damage_immune: BuffEffectValue_Literal;
}
/** 피해 최소화 (값 이하 피해를 최소화) */
interface BuffEffect_DamageMinimize {
	damage_minimize: BuffEffectValue_Literal;
}
interface BuffEffect_DamageReduce {
	damage_reduce: BuffEffectValue_Percent;
}
interface BuffEffect_DamageIncrease {
	damage_increase: BuffEffectValue_Percent;
}

/** 추가 피해 (물리 또는 속성) */
type BuffEffect_Damage = BuffEffect_Damage_Physics | BuffEffect_Damage_Elem;
interface BuffEffect_Damage_Physics {
	damage: BuffEffectValue;
}
interface BuffEffect_Damage_Elem {
	damage: {
		elem: "fire" | "ice" | "lightning";
		damage: BuffEffectValue;
	};
}

interface BuffEffect_DamageMultiply {
	damage_multiply: {
		target: "light" | "air" | "heavy";
		value: BuffEffectValue_Percent;
	};
}
interface BuffEffect_DamageByHP {
	damage_by_hp: {
		target: "self" | "target";
		damage: BuffEffectValue_Percent;
	};
}

type BuffEffect_DamageAdd = BuffEffect_DamageAdd_Physics | BuffEffect_DamageAdd_Elem;
interface BuffEffect_DamageAdd_Physics {
	damage_add: BuffEffectValue_Percent;
}
interface BuffEffect_DamageAdd_Elem {
	damage_add: {
		elem: "fire" | "ice" | "lightning";
		damage: BuffEffectValue_Percent;
	};
}

interface BuffEffect_Barrier {
	barrier: BuffEffectValue_Literal;
}
/** 보호 (row: 열 보호, col: 행 보호, target: 지정 대상 보호) */
interface BuffEffect_Guard {
	guard: "row" | "col" | "target";
}
interface BuffEffect_Position {
	position: {
		/** 밀거나 당기거나 */
		type: "pull" | "push";
		range: BuffEffectValue_Literal; // 거리
	};
}
/** 다음 공격까지 치명타 증가 */
interface BuffEffect_NextCritical {
	next_crit: BuffEffectValue_Percent;
}
interface BuffEffect_Range {
	range: BuffEffectValue_Literal;
}
interface BuffEffect_Penetration {
	penetration: BuffEffectValue_Percent;
}

interface BuffEffect_Metamolphosis {
	metamolphosis: true;
}

type BuffEffect_FixedDamage = BuffEffect_FixedDamage_Physics | BuffEffect_FixedDamage_Elem | BuffEffect_AtkFixedDamage_Physics |
	BuffEffect_AtkFixedDamage_Elem;

/** 고정 물리 피해 */
interface BuffEffect_FixedDamage_Physics {
	fixed_damage: BuffEffectValue_Literal;
}
/** 고정 속성 피해 */
interface BuffEffect_FixedDamage_Elem {
	fixed_damage: {
		elem: "fire" | "ice" | "lightning";
		damage: BuffEffectValue_Literal;
	};
}
/** 공격자 공격력 % 물리 피해 */
interface BuffEffect_AtkFixedDamage_Physics {
	fixed_damage: BuffEffectValue_Percent;
}
/** 공격자 공격력 % 속성 피해 */
interface BuffEffect_AtkFixedDamage_Elem {
	fixed_damage: {
		elem: "fire" | "ice" | "lightning";
		damage: BuffEffectValue_Percent;
	};
}

interface BuffEffect_Provoke {
	provoke: "self" | "target";
}
interface BuffEffect_Immovable {
	immovable: true;
}
interface BuffEffect_SkillDisable {
	/**
	 * 0 : 패시브
	 * 1, 2 : 해당 액티브 스킬
	 * true : 모든 액티브 스킬
	 */
	skill_disable: true | 0 | 1 | 2;
}
interface BuffEffect_AttackTarget {
	attack_target: true;
}
interface BuffEffect_SummonRemove {
	summon_remove: true;
}
interface BuffEffect_PenetrationForce {
	penetration_force: true;
}

interface BuffEffect_AttackSupport {
	/** `attack_support` 확률로 공격 지원 발동 */
	attack_support: BuffEffectValue_Percent;
}

/** Literal = 고정 수치 부활, Percent = 최대 체력 % 부활 */
interface BuffEffect_Revive {
	revive: BuffEffectValue;
}
interface BuffEffect_InvokeChance {
	invokeChance: BuffEffectValue_Percent;
}
interface BuffEffect_Exp {
	exp: BuffEffectValue_Percent;
}

/** 디버프 면역 */
interface BuffEffect_DebuffImmune {
	debuff_immune: BUFFEFFECT_TYPE;
}

/** 협동 공격 */
interface BuffEffect_Collaborate {
	collaborate: {
		skill: 1 | 2;
		with: string;
	};
}

interface BuffEffect_MaxHP {
	max_hp: BuffEffectValue;
}

interface BuffEffect_SkillRatio {
	skill_ratio: BuffEffectValue;
}

interface BuffEffect_SkillRange {
	skill: 1 | 2;
	range: BuffEffectValue;
}

interface BuffEffect_Disperse {
	disperse: BuffEffectValue;
}

interface BuffEffect_ValueBy {
	value: "skill_ratio" | "atk" | "crit" | "penetration" | "penetration_res";
	by: BuffEffectValue & {
		type: "up" | "down";
		target: "self" | "target" | "attacker" | "buffer";
		by: "evade" | "def" | "atk" | "hp";
	};
}

interface BuffEffect_LessTarget {
	less_target: BuffEffectValue;
}

interface BuffEffect_ActCount {
	act_count: number;
}

interface BuffEffect_GuardPierceApply {
	guardpierce_apply: boolean;
}

interface BuffEffect_BuffDisallow {
	buff_disallow: true;
}

interface BuffEffect_Wide {
	wide: {
		type: "skill" | "damage";
	} & BuffEffectValue_Percent;
}

interface BuffEffect_ReuseSkill {
	reuse_skill: true;
}

interface BuffEffect_Minimum_Resist {
	min_resist: "none" | "fire" | "ice" | "lightning";
}
//#endregion

export interface BuffEffectInfo {
	/** 증감 수치인지 여부 (공격력 증가/감소) */
	pm: boolean;

	text: string;

	type: BUFFEFFECT_TYPE[];
}

export type BuffEffectListGroupKeys = "stats" | "damageAdd" | "damageReduce" | "guard" | "speedAp" | "offPierce" |
	"resist" | "damage" | "etcBuff" | "etcDebuff";
export const BuffEffectList = {
	stats: [
		{ pm: true, text: "BUFF_ATK", type: [BUFFEFFECT_TYPE.STAT_ATK_VALUE, BUFFEFFECT_TYPE.STAT_ATK_RATIO] },
		{ pm: true, text: "BUFF_DEF", type: [BUFFEFFECT_TYPE.STAT_DEF_VALUE, BUFFEFFECT_TYPE.STAT_DEF_RATIO] },
		{ pm: true, text: "BUFF_HP", type: [BUFFEFFECT_TYPE.STAT_HP_VALUE, BUFFEFFECT_TYPE.STAT_HP_RATIO] },
		{ pm: true, text: "BUFF_ACC", type: [BUFFEFFECT_TYPE.STAT_RATING_VALUE, BUFFEFFECT_TYPE.STAT_RATING_RATIO] },
		{ pm: true, text: "BUFF_CRIT", type: [BUFFEFFECT_TYPE.STAT_CRITICAL_VALUE, BUFFEFFECT_TYPE.STAT_CRITICAL_RATIO] },
		{ pm: true, text: "BUFF_EVA", type: [BUFFEFFECT_TYPE.STAT_AVOID_VALUE, BUFFEFFECT_TYPE.STAT_AVOID_RATIO] },
		{ pm: true, text: "BUFF_MAXHP", type: [BUFFEFFECT_TYPE.STAT_MAXHP_VALUE, BUFFEFFECT_TYPE.STAT_MAXHP_RATIO] },
	],
	damageAdd: [
		{ pm: true, text: "BUFF_ANTI_LIGHT", type: [BUFFEFFECT_TYPE.STAGE_TROOPERTYPEDMGBONUS_RATIO] },
		{ pm: true, text: "BUFF_ANTI_MOBILITY", type: [BUFFEFFECT_TYPE.STAGE_MOBILITYTYPEDMGBONUS_RATIO] },
		{ pm: true, text: "BUFF_ANTI_HEAVY", type: [BUFFEFFECT_TYPE.STAGE_ARMOREDTYPEDMGBONUS_RATIO] },
		{ pm: true, text: "BUFF_DMG_UP_BY_HP", type: [BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_ME] },
		{ pm: true, text: "BUFF_DMG_UP_BY_TARGET_HP", type: [BUFFEFFECT_TYPE.STAGE_DAMAGEAMP_BYHP_OPP] },
		{ pm: false, text: "BUFF_GET_DMG_UP", type: [BUFFEFFECT_TYPE.STAGE_ADDDAMAGE_RATIO] },
		{ pm: true, text: "BUFF_DMG", type: [BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO_INS] },
		{ pm: true, text: "BUFF_DMG_FIRE", type: [BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO_INS] },
		{ pm: true, text: "BUFF_DMG_ICE", type: [BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO_INS] },
		{ pm: true, text: "BUFF_DMG_THUNDER", type: [BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO_INS] },
	],
	damageReduce: [
		{ pm: false, text: "BUFF_GET_DMG_DOWN", type: [BUFFEFFECT_TYPE.STAGE_SHIELD_RATIO] },
		{ pm: false, text: "BUFF_DMG_IMMUNE", type: [BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_TIME] },
		{ pm: false, text: "BUFF_DMG_MINIMUM", type: [BUFFEFFECT_TYPE.STAGE_SHIELD_VALUE] },
		{ pm: false, text: "BUFF_BARRIER", type: [BUFFEFFECT_TYPE.STAGE_IMMUNESHIELD_VALUE] },
		{ pm: false, text: "BUFF_RESURRECT", type: [BUFFEFFECT_TYPE.STAGE_RESURRECT, BUFFEFFECT_TYPE.STAGE_RESURRECT_RATIO] },
	],
	guard: [
		{ pm: false, text: "BUFF_BLOCK_COLUMN", type: [BUFFEFFECT_TYPE.STAGE_BLOCK_COLUMN] },
		{ pm: false, text: "BUFF_BLOCK_ROW", type: [BUFFEFFECT_TYPE.STAGE_BLOCK_ROW] },
		{ pm: false, text: "BUFF_BLOCK_CHAR", type: [BUFFEFFECT_TYPE.STAGE_BLOCK_CHARACTER] },
	],
	speedAp: [
		{ pm: true, text: "BUFF_AP", type: [BUFFEFFECT_TYPE.STAGE_AP_VALUE] },
		{ pm: false, text: "BUFF_AP_SHIFT", type: [BUFFEFFECT_TYPE.STAGE_AP_SHIFT] },
		{ pm: true, text: "BUFF_SPEED", type: [BUFFEFFECT_TYPE.STAT_SPEED_VALUE, BUFFEFFECT_TYPE.STAT_SPEED_RATIO] },
		{ pm: false, text: "BUFF_AP_STOP", type: [BUFFEFFECT_TYPE.STAGE_AP_STOP] },
		{ pm: false, text: "BUFF_SEAL", type: [BUFFEFFECT_TYPE.STAGE_SEAL_SKILL] },
	],
	offPierce: [
		{
			pm: false,
			text: "BUFF_OFF_BUFF",
			type: [
				BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_ENUM, BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF,
				BUFFEFFECT_TYPE.STAGE_REMOVE_DEBUFF, BUFFEFFECT_TYPE.STAGE_REMOVE_BUFF_KEY_ALL_ATTRTYPE,
				BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_BUFF, BUFFEFFECT_TYPE.STAGE_REMOVE_ALL_DEBUFF,
			],
		},
		{ pm: true, text: "BUFF_DEF_PIERCE", type: [BUFFEFFECT_TYPE.STAGE_DEFPIERCE_RATIO] },
		{ pm: false, text: "BUFF_BARRIER_PIERCE", type: [BUFFEFFECT_TYPE.BARRIER_PIERCE] },
	],
	resist: [
		{ pm: true, text: "BUFF_RES_FIRE", type: [BUFFEFFECT_TYPE.STAT_RESFIRE_VALUE, BUFFEFFECT_TYPE.STAT_RESFIRE_RATIO] },
		{ pm: true, text: "BUFF_RES_ICE", type: [BUFFEFFECT_TYPE.STAT_RESICE_VALUE, BUFFEFFECT_TYPE.STAT_RESICE_RATIO] },
		{
			pm: true,
			text: "BUFF_RES_THUNDER",
			type: [
				BUFFEFFECT_TYPE.STAT_RESLIGHTNING_VALUE,
				BUFFEFFECT_TYPE.STAT_RESLIGHTNING_RATIO,
			],
		},
		{ pm: true, text: "BUFF_RES_DEBUFF", type: [BUFFEFFECT_TYPE.STAGE_DEBUFF_RATEUP, BUFFEFFECT_TYPE.STAGE_DEBUFF_PERDOWN] },
	],
	damage: [
		{
			pm: false,
			text: "BUFF_ADDDMG_PHYSICS",
			type: [
				BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_RATIO,
				BUFFEFFECT_TYPE.STAGE_DAMAGEPHYSICS_VALUE,
			],
		},
		{
			pm: false,
			text: "BUFF_ADDDMG_FIRE",
			type: [
				BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_RATIO,
				BUFFEFFECT_TYPE.STAGE_DAMAGEFIRE_VALUE,
			],
		},
		{
			pm: false,
			text: "BUFF_ADDDMG_ICE",
			type: [
				BUFFEFFECT_TYPE.STAGE_DAMAGEICE_RATIO,
				BUFFEFFECT_TYPE.STAGE_DAMAGEICE_VALUE,
			],
		},
		{
			pm: false,
			text: "BUFF_ADDDMG_THUNDER",
			type: [
				BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_RATIO,
				BUFFEFFECT_TYPE.STAGE_DAMAGELIGHTNING_VALUE,
			],
		},
		{ pm: false, text: "BUFF_DOT_PHYSICS", type: [BUFFEFFECT_TYPE.STAGE_PHYSICS_DOT] },
		{ pm: false, text: "BUFF_DOT_FIRE", type: [BUFFEFFECT_TYPE.STAGE_FIRE_DOT] },
		{ pm: false, text: "BUFF_DOT_ICE", type: [BUFFEFFECT_TYPE.STAGE_ICE_DOT] },
		{ pm: false, text: "BUFF_DOT_THUNDER", type: [BUFFEFFECT_TYPE.STAGE_LIGHTNING_DOT] },
		{ pm: false, text: "BUFF_DMG_PHYSICS_BY_HP", type: [BUFFEFFECT_TYPE.STAGE_PHYSICS_DAMAGE_APPLY] },
		{ pm: false, text: "BUFF_DMG_PHYSICS_BY_HP", type: [BUFFEFFECT_TYPE.STAGE_FIRE_DAMAGE_APPLY] },
		{ pm: false, text: "BUFF_DMG_PHYSICS_BY_HP", type: [BUFFEFFECT_TYPE.STAGE_ICE_DAMAGE_APPLY] },
		{ pm: false, text: "BUFF_DMG_PHYSICS_BY_HP", type: [BUFFEFFECT_TYPE.STAGE_LIGHTNING_DAMAGE_APPLY] },
	],
	etcBuff: [
		{ pm: false, text: "BUFF_SCOUT", type: [BUFFEFFECT_TYPE.UI_INFO_NEXTENEMY] },
		{ pm: false, text: "BUFF_COUNTER", type: [BUFFEFFECT_TYPE.STAGE_REFLECTPHYSICS_RATIO_DEFENDER] },
		{ pm: true, text: "BUFF_CRIT_NEXT", type: [BUFFEFFECT_TYPE.STAGE_CRITICAL_NEXTATTACK] },
		{ pm: true, text: "BUFF_RANGE", type: [BUFFEFFECT_TYPE.STAT_RANGE_VALUE] },
		{ pm: false, text: "BUFF_SUPPORT_ATK", type: [BUFFEFFECT_TYPE.STAGE_SUPPORT_ATTACK] },
		{ pm: true, text: "BUFF_EFFECT_RATE", type: [BUFFEFFECT_TYPE.STAGE_BUFFEFFECTRATE_CHANGE] },
		{ pm: true, text: "BUFF_EXP", type: [BUFFEFFECT_TYPE.STAGE_EXP_UP] },
		{
			pm: false,
			text: "BUFF_TOGETHER",
			type: [
				BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_1,
				BUFFEFFECT_TYPE.STAGE_TOGETHER_ATTACK_ACTIVE_SKILL_2,
			],
		},
		{ pm: true, text: "BUFF_WIDE_SKILL_RATIO", type: [BUFFEFFECT_TYPE.WIDE_SKILL_RATIO] },
		{ pm: true, text: "BUFF_WIDE_DAMAGE_RATIO", type: [BUFFEFFECT_TYPE.WIDE_DAMAGE_RATIO] },
	],
	etcDebuff: [
		{ pm: false, text: "BUFF_MARKING", type: [BUFFEFFECT_TYPE.STAGE_MARKING] },
		{ pm: false, text: "BUFF_PROVOKE", type: [BUFFEFFECT_TYPE.STAGE_PROVOKE] },
		{ pm: false, text: "BUFF_SNARE", type: [BUFFEFFECT_TYPE.STAGE_SNARE] },
		{ pm: false, text: "BUFF_MOVE_BACK", type: [BUFFEFFECT_TYPE.STAGE_MOVE_BACK] },
		{ pm: false, text: "BUFF_MOVE_FRONT", type: [BUFFEFFECT_TYPE.STAGE_MOVE_FRONT] },
		{ pm: false, text: "BUFF_SUMMON_INSTENV", type: [BUFFEFFECT_TYPE.REMOVE_SUMMON_INSTENV] },
	],
};
