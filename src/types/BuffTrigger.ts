/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable camelcase */

import { BUFFEFFECT_TYPE } from "@/types/BuffEffect";
import { UNIT_POSITION, BUFF_ATTR_TYPE, ACTOR_CLASS } from "@/types/Enums";

/** 발동 조건 */
export enum BUFFEFFECT_TRIGGER_TYPE {
	USE_SKILL = 0,
	BEATEN = 1,
	ATTACK_SUCCESS = 2,
	BUFFED_TARGET = 3,
	GRID_NO = 4,
	HP_DOWN = 5,
	HP_UP = 6,
	FRIENDLY = 7,
	ENEMY = 8,
	FRIENDLY_DEATH = 9,
	DEATH = 10,
	ENEMY_DEATH = 11,
	ALWAYS = 12,
	COMBAT_START = 13,
	USE_SKILL_SPEC = 14,
	ON_ATTACK = 15,
	ATTACKED = 16,
	WAIT = 17,
	MOVE = 18,
	ON_EVADE = 19,
	AFTER_WAVE = 20,
	IF_BUFFED = 21,
	IF_ENEMYKILL = 22,
	ATTACK_SUCCESS_AND_IF_BUFFED = 23,
	IF_ENEMYKILL_PASSIVE = 24,
	HAVE_LESS_HP = 25,
	HAVE_MORE_HP = 26,
	AT_FRONT_ROW = 27,
	AT_MID_ROW = 28,
	AT_BACK_ROW = 29,
	ROUND_START = 30,
	ON_CRITICAL_HIT = 31,
	IF_ME_BUFFED = 32,
	IF_ME_DEBUFFED = 33,
	IF_CHAR_INGRID = 34,
	USE_SKILL_ENEMY = 35,
	ATTACK_SUCCESS_PASSIVE = 36,
	IF_RESURRECT = 37,
	BEATEN_PHY = 38,
	BEATEN_FIRE = 39,
	BEATEN_ICE = 40,
	BEATEN_LIGHTNING = 41,
	AFTER_COUNTER = 42,
	AFTER_ATTACKED = 43,
	ATTACKED_ACTIVESKILL = 44,
	BEATEN_ACTIVESKILL = 45,
	ON_EVADE_ACTIVESKILL = 46,
	SUMMON_CREATE = 47,
	ATTACK_SUCCESS_ACTIVESKILL = 48,
	BEATEN_ACTIVE_SKILL_KEY = 49,
	USE_ACTIVE_SKILL_1 = 50,
	USE_ACTIVE_SKILL_2 = 51,
	AFTER_SUPPORT_ATTACK_PASSIVE = 52,
	AFTER_TOGETHER_ATTACK_PASSIVE = 53,
	ATTACK_FAIL = 54,
	ATTACK_FAIL_PASSIVE = 55,
}

/** 계산된 발동 조건 */
export type BuffTrigger = BuffTrigger_Unknown | BuffTrigger_Always | BuffTrigger_After | BuffTrigger_Damaged | BuffTrigger_AttackSuccess |
	BuffTrigger_HPDown | BuffTrigger_HPUp | BuffTrigger_HPLess | BuffTrigger_HPMore | BuffTrigger_UnitIn | BuffTrigger_UnitDead |
	BuffTrigger_Always | BuffTrigger_EveryWave | BuffTrigger_EveryRound | BuffTrigger_Attack | BuffTrigger_Attacked | BuffTrigger_Wait |
	BuffTrigger_Move | BuffTrigger_Evade | BuffTrigger_WaveEnd | BuffTrigger_EnemyKilled | BuffTrigger_Position | BuffTrigger_Criticaled |
	BuffTrigger_Revive | BuffTrigger_On | BuffTrigger_Target | BuffTrigger_UnitCount | BuffTrigger_Round | BuffTrigger_NotInBattle |
	BuffTrigger_TroopCategory | BuffTrigger_UseSkill | BuffTrigger_Test | BuffTrigger_AttackBy | BuffTrigger_Fail | BuffTrigger_Near;

/** 구현을 알 수 없는 발동 조건 */
interface BuffTrigger_Unknown {
	_comment: string;
}
type BuffTrigger_Always = false;

interface BuffTrigger_After {
	after: "use_skill" | "counter";
}

/** 본인 회피 제외 */
type BuffTrigger_Damaged = "damaged" | {
	damaged: "fire" | "ice" | "lightning";
} | {
	damaged: "skill";
	key: string;
};

/** 대상 회피 제외 */
type BuffTrigger_AttackSuccess = "attack_success";

type BuffTrigger_HPDown = BuffTrigger_HPDown_Self | BuffTrigger_HPDown_Target;
interface BuffTrigger_HPDown_Self {
	/** % 값 */
	"hp<=": string;
}
interface BuffTrigger_HPDown_Target {
	"hp<=": {
		target: "target";
		/** % 값 */
		value: string;
	};
}

type BuffTrigger_HPUp = BuffTrigger_HPUp_Self | BuffTrigger_HPUp_Target;
interface BuffTrigger_HPUp_Self {
	/** % 값 */
	"hp>=": string;
}
interface BuffTrigger_HPUp_Target {
	"hp>=": {
		target: "target";
		/** % 값 */
		value: string;
	};
}

type BuffTrigger_HPLess = BuffTrigger_HPLess_Self | BuffTrigger_HPLess_Target;
interface BuffTrigger_HPLess_Self {
	/** % 값 */
	"hp<": string;
}
interface BuffTrigger_HPLess_Target {
	"hp<": {
		target: "target";
		/** % 값 */
		value: string;
	};
}

type BuffTrigger_HPMore = BuffTrigger_HPMore_Self | BuffTrigger_HPMore_Target;
interface BuffTrigger_HPMore_Self {
	/** % 값 */
	"hp>": string;
}
interface BuffTrigger_HPMore_Target {
	"hp>": {
		target: "target";
		/** % 값 */
		value: string;
	};
}

type BuffTrigger_UnitIn = BuffTrigger_UnitInSquad | BuffTrigger_UnitInEnemy;
interface BuffTrigger_UnitInSquad {
	in_squad: string | string[];
}
interface BuffTrigger_UnitInEnemy {
	in_enemy: string | string[];
}

type BuffTrigger_UnitDead = "team_dead" | "self_dead" | "enemy_dead";

type BuffTrigger_EveryWave = "wave";
type BuffTrigger_EveryRound = "round";

/** 대상 회피 포함 */
type BuffTrigger_Attack = "attack"; // 대상 회피 포함
/** 본인 회피 포함 */
type BuffTrigger_Attacked = "attacked";
type BuffTrigger_Wait = "wait";
type BuffTrigger_Move = "move";
type BuffTrigger_Evade = "evade";
type BuffTrigger_WaveEnd = "wave_end";

/** 본인이 처치했을 때에만 */
type BuffTrigger_EnemyKilled = "enemy_killed";

type BuffTrigger_Position = BuffTrigger_Position_Self | BuffTrigger_Position_Target;
interface BuffTrigger_Position_Self {
	pos: UNIT_POSITION;
}
interface BuffTrigger_Position_Target {
	pos: {
		target: "target";
		position: UNIT_POSITION;
	};
}

type BuffTrigger_Criticaled = "criticaled";
type BuffTrigger_Revive = "revive";

type BuffTrigger_On = BuffTrigger_On_BuffEffectType | BuffTrigger_On_BuffKey | BuffTrigger_On_BuffStack | BuffTrigger_On_BuffExists |
	BuffTrigger_On_BuffTypeExists | BuffTrigger_On_BuffExists;

type BuffTrigger_On_Function = "OR" | "AND" | "UNFILLED";
interface BuffTrigger_On_BuffEffectType {
	on: {
		func: BuffTrigger_On_Function;
		select: BUFFEFFECT_TYPE[];
		attr: BUFF_ATTR_TYPE;
	};
}
interface BuffTrigger_On_BuffKey {
	on: {
		func: BuffTrigger_On_Function;
		select: string[];
		attr: BUFF_ATTR_TYPE;
	};
}
interface BuffTrigger_On_BuffStack {
	on: {
		target: "self" | "target" | "squad";
		func?: BuffTrigger_On_Function;
		select: string[];
		stack: number;
		attr: BUFF_ATTR_TYPE;
	};
}
interface BuffTrigger_On_BuffTypeExists {
	on: {
		target: "self" | "target" | "squad";
		func: BuffTrigger_On_Function;
		select: BUFFEFFECT_TYPE[];
		attr: BUFF_ATTR_TYPE;
	};
}
interface BuffTrigger_On_BuffExists {
	on: {
		target: "self" | "target" | "squad";
		func: BuffTrigger_On_Function;
		select: string[];
		attr: BUFF_ATTR_TYPE;
	};
}

/** 대상이 유닛 목록 중 하나일 때 */
interface BuffTrigger_Target {
	target: string[];
}

type BuffTrigger_UnitCount_Types = "enemy" | "squad" | "all" |
	"bioroid" | "ags" |
	"light" | "air" | "heavy" |
	"attacker" | "defender" | "supporter";
interface BuffTrigger_UnitCount {
	unitCount: {
		filter: BuffTrigger_UnitCount_Types | Array<BuffTrigger_UnitCount_Types>;
		type: ACTOR_CLASS[];
		count: number | number[];
	};
}

type BuffTrigger_Round = BuffTrigger_Round_Value | BuffTrigger_Round_EvenOdd;
interface BuffTrigger_Round_Value {
	round: {
		operator: "=" | "<=" | ">=";
		round: number;
	};
}
interface BuffTrigger_Round_EvenOdd {
	round: {
		operator: "even" | "odd";
	};
}

interface BuffTrigger_NotInBattle {
	/** OR 인지 AND 인지 아직 모름 (네스트만 사용중) */
	notInBattle: string[];
}

interface BuffTrigger_TroopCategory {
	/** 전투원 그룹 목록 */
	troop: string[];
}

/** 스킬 사용시 */
interface BuffTrigger_UseSkill {
	use_skill: 1 | 2;
}

/** 값 비교 */
interface BuffTrigger_Test {
	test: "lower" | "higher";
	target: "self" | "target";
	operand: "ATK" | "DEF" | "EVD" | "SPD";
	ratio: number;
	than: "ATK" | "DEF" | "EVD" | "SPD";
}

interface BuffTrigger_AttackBy {
	after: "support" | "together";
}

interface BuffTrigger_Fail {
	fail: "active" | "passive";
}

interface BuffTrigger_Near {
	near: false | number;
}