/* eslint-disable camelcase */
import { BUFF_ATTR_TYPE } from "@/libs/Types/Enums";

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
	STAGE_BLOCK_LINE = 50,
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
}

export type BuffEffect = BuffEffect_Base & {
	/** 버프 / 비-버프 여부 */
	isBuff?: true;

	/** % 값 */
	chance?: string;
};

type BuffEffect_Base = BuffEffect_Unknown | BuffEffect_Off | BuffEffect_Attack | BuffEffect_Defense | BuffEffect_HP |
	BuffEffect_Accuracy | BuffEffect_Critical | BuffEffect_Evade | BuffEffect_TurnSpeed | BuffEffect_Resist | BuffEffect_AP |
	BuffEffect_APSet | BuffEffect_Stun | BuffEffect_Scout | BuffEffect_Counter | BuffEffect_DamageImmune | BuffEffect_DamageMinimize |
	BuffEffect_DamageReduce | BuffEffect_DamageIncrease | BuffEffect_Damage | BuffEffect_DamageMultiply | BuffEffect_DamageByHP |
	BuffEffect_DamageAdd | BuffEffect_Barrier | BuffEffect_Guard | BuffEffect_Position | BuffEffect_NextCritical | BuffEffect_Range |
	BuffEffect_Penetration | BuffEffect_Metamolphosis | BuffEffect_FixedDamage | BuffEffect_Provoke | BuffEffect_AttackSupport |
	BuffEffect_Immovable | BuffEffect_SkillDisable | BuffEffect_Revive | BuffEffect_AttackTarget | BuffEffect_InvokeChance |
	BuffEffect_SummonRemove | BuffEffect_PenetrationForce | BuffEffect_Exp | BuffEffect_Collaborate;

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
	}
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

type BuffEffect_Resist = BuffEffect_Resist_Elem | BuffEffect_Resist_Debuff;
interface BuffEffect_Resist_Elem {
	resist: {
		elem: "fire" | "ice" | "lightning";
		value: BuffEffectValue_Percent;
	};
}
/** 효과 저항 증가/감소 */
interface BuffEffect_Resist_Debuff {
	resist: {
		type: "debuff"
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
	}
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
	}
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
	provoke: true;
}
interface BuffEffect_Immovable {
	immovable: true;
}
interface BuffEffect_SkillDisable {
	skill_disable: true;
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

/** 협동 공격 */
interface BuffEffect_Collaborate {
	collaborate: {
		skill: 1 | 2;
		with: string;
	}
}
// #endregion
