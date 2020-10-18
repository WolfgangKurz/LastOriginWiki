/* eslint-disable camelcase */
/**
 * 유닛이 위치한 열
 */
export enum UNIT_POSITION {
	FRONT = 0,
	MIDDLE = 1,
	BACK = 2,
}

/**
 * 장비 증감 수치 (인게임 버프 아님)
 */
export enum ACTOR_ATTR_TYPE {
	/** 공격력 */
	ATK = 0,

	/** 방어력 */
	DEF = 1,

	/** 체력 */
	HP = 2,

	/** 회피 */
	EVADE = 3,

	/** 행동력 */
	TURNSPEED = 4,

	/** 치명타 */
	CRI = 5,

	/** 적중률 */
	APPLY = 6,

	/** ??? 사용처 없음 */
	SKILL_ATTACK_RATE = 7,

	/** ??? 사용처 없음 */
	NONE = 8,

	/** ??? 사용처 없음 */
	FIRE = 9,

	/** ??? 사용처 없음 */
	ICE = 10,

	/** ??? 사용처 없음 */
	LIGHTNING = 11,

	/** ??? 사용처 없음 */
	NONE_RESIST = 12,

	/** ??? 사용처 없음 */
	FIRE_RESIST = 13,

	/** ??? 사용처 없음 */
	ICE_RESIST = 14,

	/** ??? 사용처 없음 */
	LIGHTNING_RESIST = 15,

	__MAX__ = 16,
}

/** 버프 사용 방식? */
export enum BUFF_USE_TYPE {
	TRIGGER = 0,
	PASSIVE = 1,
	__MAX__ = 2,
}

/** 버프 종류 */
export enum BUFF_ATTR_TYPE {
	/** 버프 */
	BUFF = 0,

	/** 디버프 */
	DEBUFF = 1,

	/** 사용처 없음 */
	SKILLBUFF = 2,

	/** 기타 효과 (버프/디버프 조건 충족 안함) */
	ETC = 3,

	/** 버프 종류 상관하지 않음 */
	NO_MATTER = 4,

	__MAX__ = 4,
}

/** 버프 효과의 발동 조건 */
export enum BUFFEFFECT_TRIGGER_APPLY_CONDITION {
	IF_BUFFED_ENUM_ME = 0,
	IF_BUFFED_KEY_ME = 1,
	AT_FRONT_ROW_ME = 2,
	AT_MID_ROW_ME = 3,
	AT_BACK_ROW_ME = 4,
	HP_RATIO_UP_ME = 5,
	HP_RATIO_DOWN_ME = 6,
	HP_RATIO_LESS_THEN_ME = 7,
	HP_RATIO_MORE_THEN_ME = 8,
	IFBUFF_STACK_COUNT_ME = 9,
	IF_BUFFED_ENUM_TARGET = 10,
	IF_BUFFED_KEY_TARGET = 11,
	HP_RATIO_UP_TARGET = 12,
	HP_RATIO_DOWN_TARGET = 13,
	SPC_CHAR_TARGET = 14,
	SPC_CHAR_IN_BATTLE = 15,
	AT_FRONT_ROW_TARGET = 16,
	AT_MID_ROW_TARGET = 17,
	AT_BACK_ROW_TARGET = 18,
	IF_BUFFED_KEY_ME_TOGETHER = 19,
	IF_BUFFED_KEY_COUNT_ME = 20,
	HP_RATIO_RANGE_ME = 21,
	IF_NOT_BUFFED_KEY_ME = 22,
	IF_BUFF_STACK_COUNT_TARGET = 23,
	IF_NOT_BUFFED_KEY_ME_TOGETHER = 24,
	CHECK_COUNT_OTHER_PARTY = 25,
	CHECK_COUNT_MY_PARTY = 26,
	CHECK_COUNT_ALL_PARTY = 27,
	CHECK_COUNT_ROUND_UP = 28,
	CHECK_COUNT_ROUND_DOWN = 29,
	SPC_CHAR_NOT_BATTLE = 30,
	IFBUFF_COUNT_ME = 31,
	CHECK_COUNT_ROUND = 32,
	CHECK_COUNT_BIO_MY_PARTY = 33,
	CHECK_COUNT_AGS_MY_PARTY = 34,
	CHECK_COUNT_BIO_ENEMY = 35,
	CHECK_COUNT_AGS_ENEMY = 36,
	ALWAYS = 37,

	__MAX__ = 37,
}

/** 버프 갱신 방식 */
export enum BUFF_OVERLAP_TYPE {
	/** 일회성 또는 동일 라운드 지속 버프, `STACK`과 동일하게 처리 */
	NONE = 0,

	/** 기존에 동일한 버프가 없을 때에만 추가 */
	RENEW = 1,

	/** 기존 버프의 지속 라운드 또는 남은 횟수를 연장 */
	ADDTURN = 2,

	/** 기존 버프를 덮어씀 (삭제 후 새로 생성) */
	OVERLAP = 3,

	/** 기존 버프와 상관 없이 새로 추가 */
	STACK = 4,

	__MAX__ = 4,
}


/** 장비 유형 */
export enum ITEM_TYPE {
	/** 칩 */
	CHIP,

	/** OS */
	SPCHIP,

	/** 보조 장비 */
	SUBEQ,

	/** 전용 장비 */
	PCITEM,

	/** 소모품 */
	CONSUMABLE,

	/** 재료 */
	MATERIAL,

	__MAX__,
}

/** 제대로 사용하지 않음, 아마도 헬키스트 던전의 잔재 */
export enum ITEM_SUB_TYPE {
	PC_MAKING_ROBOT,
	EQUIP_MAKING,
	FAST_MAKING,
	UNLOCK_CORE,
	PC_MAKING_BIO,
	PC_ENCHANT_INIT,
	PC_RESTORE_FAST,
	PC_RESTORE_OPENSLOT,
	NORMAL_MODULE,
	ADVANCED_MODULE,
	SPECIAL_MODULE,
	INS_RESEARCH,
	CHAR_SKIN,
	FAVOR_ITEM,
	TACTIC_RECORD,
	TRAINING_MANUAL,
	CHANGE_NICKNAME,
	ETC,
	SMALL_PARTS,
	MEDIUM_PARTS,
	LARGE_PARTS,
	WOOD_MATERIAL,
	STONE_MATERIAL,
	IRON_MATERIAL,
	COLLECTION,
	__MAX__,
}

/** 제대로 사용하지 않음, 아마도 헬키스트 던전의 잔재 */
export enum ITEM_EQUIP_TYPE {
	ALL,
	NOTRANGE,
	NOTMELEE,
	SUMMON,
	__MAX__,
}

/** 장비 등급 */
export enum ITEM_GRADE {
	B = 2,
	A = 3,
	S = 4,
	SS = 5,
}

/** 전투원 몸체 타입 */
export enum ACTOR_BODY_TYPE {
	/** 바이오로이드 */
	ANDROID = 0,
	BIOROID = 0,

	/** AGS */
	ROBOT = 1,
	AGS = 1,

	/** 소환물 */
	SUMMON = 2,

	/** 사용처 없음, 아마도 헬키스트 던전의 잔재 */
	TOTEM = 3,

	__MAX__ = 4,
}

/** 전투원 유형 */
export enum ACTOR_CLASS {
	TROOPER = 0,
	LIGHT = 0,

	ARMORED = 1,
	HEAVY = 1,

	MOBILITY = 2,
	AIR = 2,

	__MAX__ = 3,
}

/** 전투원 역할 */
export enum ROLE_TYPE {
	TANKER = 0,
	DEFENDER = 0,

	NUKER = 1,
	ATTACKER = 1,

	SUPPORTER = 2,

	__MAX__ = 3,
}

/** 설명 텍스트 값 출력 방식 */
export enum NUM_OUTPUTTYPE {
	/** 값을 그대로 출력 (실수 수치인 경우) */
	INTEGER = 0,

	/** 값을 100 곱하고 출력 (% 수치인 경우) */
	PERCENT = 1,

	__MAX__ = 2,
}

/** 적용 대상 유형 */
export enum TARGET_TYPE {
	/** 본인 */
	SELF = 0,

	/** 지정한 아군 */
	OUR = 1,

	/** 범위 내 아군 */
	OUR_GRID = 2,

	/** 지정한 적군 */
	ENEMY = 3,

	/** 범위 내 적군 */
	ENEMY_GRID = 4,

	/** 아군 전체 (사용처 없음) */
	ALL_UNIT = 5,

	/** 적군 전체 (사용처 없음) */
	ALL_GRID = 6,

	/** 시스템 효과? */
	SYSTEM = 7,

	__MAX__ = 8,
}

/** 버프 표시 유형 */
export enum BUFF_ANNOUNCE_TYPE {
	/** 표시하지 않음 */
	NONE = 0,

	/** 추가되면 바로 표시 */
	REALTIME = 1,

	/** 바로 표시하지는 않음 */
	NOT_REALTIME = 2,

	/** 추가되면 바로 표시... Emily의 리미터 해제만 존재 */
	INSTANT = 3,

	__MAX__ = 4,
}
