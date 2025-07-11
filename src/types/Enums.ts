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

	// __MAX__ = 16,
}

/** 버프 사용 방식? */
export enum BUFF_USE_TYPE {
	TRIGGER = 0,
	PASSIVE = 1,
	// __MAX__ = 2,
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

	/** 로그라이크(철의 탑) 버프 */
	ROGUEBUFF = 4,

	/** 로그라이크(철의 탑) 디버프 */
	ROGUEDEBUFF = 5,

	/** 버프 종류 상관하지 않음 */
	NO_MATTER = 6,

	// __MAX__ = 6,
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
	IF_BUFFED_KEY_MY_PARTY = 37,
	CHECK_COUNT_ACTOR_CLASS_MY_PARTY = 38,
	CHECK_COUNT_ROLE_TYPE_MY_PARTY = 39,
	IF_SPC_TROOPCATEGORY_KEY_ME = 40,
	CHECK_ROUND_EVEN_NUMBER = 41,
	CHECK_ROUND_ODD_NUMBER = 42,
	IF_ALL_NOT_BUFFED_KEY_TARGET = 43,
	IF_NOT_BUFFED_KEY_TARGET = 44,
	CHECK_COUNT_ACTOR_CLASS_ENEMY_PARTY = 45,
	CHECK_COUNT_ROLE_TYPE_ENEMY_PARTY = 46,
	ME_ATK_HIGHER_THEN_DEF = 47,
	ME_ATK_LOWER_THEN_DEF = 48,
	ME_ATK_HIGHER_THEN_TARGET_ATK = 49,
	ME_ATK_LOWER_THEN_TARGET_ATK = 50,
	ME_DEF_HIGHER_THEN_TARGET_DEF = 51,
	ME_DEF_LOWER_THEN_TARGET_DEF = 52,
	ME_EVD_HIGHER_THEN_TARGET_EVD = 53,
	ME_EVD_LOWER_THEN_TARGET_EVD = 54,
	ME_SPD_HIGHER_THEN_TARGET_SPD = 55,
	ME_SPD_LOWER_THEN_TARGET_SPD = 56,
	IF_NOT_BUFFED_ENUM_ME = 57,
	IF_NOT_BUFFED_ENUM_TARGET = 58,
	OURTEAM_NEAR = 59,
	OURTEAM_NOT_NEAR = 60,
	IF_BUFFED_KEY_COUNT_TARGET = 61,
	IF_NOT_BUFFED_KEY_TARGET_TOGETHER = 62,
	NONE = 63,
	IF_RANDOM_BUFF_KEY_RATE_TARGET = 64,
	ALWAYS = 65,
	// __MAX__ = ALWAYS,
}

/** 버프 갱신 방식 */
export enum BUFF_OVERLAP_TYPE {
	/** 즉발 (일회성 또는 동일 라운드 지속 버프, 적용 후 바로 삭제) */
	INSTANCE = 0,
	// NONE = 0,

	/** 재생성 (동일한 타입 모두 삭제 후 버프 생성) */
	RENEW = 1,

	/** 연장 (버프가 없으면 생성, 있으면 지속 라운드/횟수를 연장) */
	EXTEND = 2,
	// ADDTURN = 2,

	// /** 중첩 가능 (기존 버프 상관 안함) */
	/** 단일 (동일한 버프가 없을 때에만 생성) */
	SINGLE = 3,
	// OVERLAP = 3,

	// /** 기존에 동일한 버프가 없을 때에만 추가 */
	/** 갱신 (제한 전까진 생성, 이후엔 오래된 버프 삭제 후 생성) */
	UPDATE = 4,
	// CREATE = 4,

	// __MAX__ = 4,
}


/** 장비 유형 */
export enum ITEM_TYPE {
	/** 칩 */
	CHIP,

	/** OS */
	SPCHIP,

	/** 보조 장비 */
	SUBEQ,

	/** 전용 장비..? 혹은 코어 링크 */
	PCITEM,

	/** 소모품 */
	CONSUMABLE,

	/** 재료 */
	MATERIAL,

	// __MAX__,
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
	// __MAX__,
}

/** 제대로 사용하지 않음, 아마도 헬키스트 던전의 잔재 */
export enum ITEM_EQUIP_TYPE {
	ALL,
	NOTRANGE,
	NOTMELEE,
	SUMMON,
	// __MAX__,
}

/** 장비 등급 */
export type ITEM_GRADE = ACTOR_GRADE;

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

	FLYING = 2,
	AIR = 2,
}

/** 전투원 역할 */
export enum ROLE_TYPE {
	TANKER = 0,
	DEFENDER = 0,

	NUKER = 1,
	ATTACKER = 1,

	SUPPORTER = 2,
}

/** 전투원 등급 */
export enum ACTOR_GRADE {
	// D = 0,
	// C = 1,
	B = 2,
	A = 3,
	S = 4,
	SS = 5,
	SSS = 6,
}

/** 설명 텍스트 값 출력 방식 */
export enum NUM_OUTPUTTYPE {
	/** 값을 그대로 출력 (실수 수치인 경우) */
	INTEGER = 0,

	/** 값을 100 곱하고 출력 (% 수치인 경우) */
	PERCENT = 1,

	// __MAX__ = 2,
}

/** 적용 대상 유형 */
export enum TARGET_TYPE {
	/** 본인 */
	SELF = 0,

	/** 지정한 아군 */
	OUR = 1,

	/** 범위 내 아군 (땅찍기) */
	OUR_GRID = 2,

	/** 지정한 적군 */
	ENEMY = 3,

	/** 범위 내 적군 (땅찍기) */
	ENEMY_GRID = 4,

	/** 아군/적군 구분 없는 지정 전투원 */
	ALL_UNIT = 5,

	/** 아군/적군 구분 없는 땅 찍기 */
	ALL_GRID = 6,

	/** 시스템 효과? */
	SYSTEM = 7,

	/** 모든 아군 대상 (적용 범위 무시?) */
	OUR_ALL = 8,

	/** 모든 적군 대상 (적용 범위 무시?) */
	ENEMY_ALL = 9,

	// __MAX__ = 8,
}

/** 적용 대상 부차 유형 */
export enum TARGET_SUB_TYPE {
	/** 살아있는 대상 */
	ALIVE = 0,

	/** 사망한 대상? */
	DEAD = 1,

	// __MAX__ = 2,
}

/** 스킬 레벨 적용 방식 */
export enum SKILL_LEVEL_TYPE {
	NORMAL = 0,

	DEADLY = 1,

	// __MAX__ = 2,
}

/** 스킬의 유형 */
export enum SKILL_TYPE {
	/** 액티브 스킬 */
	ACTIVE = 0,

	/** 패시브 스킬 */
	PASSIVE = 1,

	// __MAX__ = 2,
}

/** 스킬의 부차 유형 */
export enum SKILL_SUB_TYPE {
	NORMAL = 0,
	EXT_PASSIVE = 1,
	// __MAX__ = 2,
}

/** 스킬의 슬롯 위치 */
export enum SKILL_SLOT_TYPE {
	/** 슬롯에 존재하지 않음 */
	NONE = 0,

	SLOT_1 = 1,
	SLOT_2 = 2,
	SLOT_3 = 3,
	SLOT_4 = 4,
	SLOT_5 = 5,

	// __MAX__ = 6,
}

/** 스킬의 속성 */
export enum SKILL_ATTR {
	/** 물리 피해 */
	NONE = 0,
	PHYSICS = 0,

	FIRE = 1,

	CHILL = 2,
	ICE = 2,

	LIGHTNING = 3,
	THUNDER = 3,
}

/** 다대상 공격의 작동 방식 */
export enum MULTI_ATTACK_TYPE {
	/** 특별한 작동 없음 */
	MULTIPLE = 0,

	/** 폭발 (?) */
	EXPLOSION = 1,

	/** 관통 */
	PIERCING = 2,

	// __MAX__ = 3,
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

	// __MAX__ = 4,
}

/** 설비 종류 */
export enum FACILITY_TYPE_CATEGORY {
	/** 전투 결과 분석실 */
	TRAINIG_SUPPORT = 0,

	/** 합성수지 생산소 */
	WOOD_MAKING = 1,

	/** 도료 생산소 */
	STONE_MAKING = 2,

	/** 철재 생산소 */
	IRON_MAKING = 3,

	/** 보호기 바이오로이드 제작실 */
	TANKER_MAKING = 4,

	/** 공격기 바이오로이드 제작실 */
	NUKER_MAKING = 5,

	/** 지원기 바이오로이드 제작실 */
	SUPPORTER_MAKING = 6,

	/** 영양 생산 지원실 */
	NUTRIENT_MAKING = 7,

	/** 부품 생산 지원실 */
	METAL_MAKING = 8,

	/** 전력 생산 지원실 */
	POWER_MAKING = 9,

	/** 장비 강화 효율 연구실 */
	EQUIP_REIN = 10,

	/** 장비 분해 효율 연구실 */
	EQUIP_DISASSEMBLE = 11,

	/** 설비 부품 제작실 */
	FACILITY_PARTS_MAKING = 12,

	/** 제작 핵심 부품 생산소 */
	MATERIAL_MAKING = 13,

	/** 카페테리아  */
	CAFETERIA = 14,

	// __MAX__ = 15,
}

/** 설비 패시브 기능 종류 */
export enum PASSIVE_BUFF_TYPE {
	/** 패시브 없음 */
	NONE = 0,

	/** 전투 경험치 증가 */
	STAGE_EXP_UP = 1,

	/** 장비 강화 비용 감소 */
	ENCHANTCOST_DOWN = 2,

	/** 장비 분해 비용 증가 */
	DISASSEMBLE_UP = 3,

	/** 영양 생산 증가 */
	NUTRIENT_CHANGE_UP = 4,

	/** 부품 생산 증가 */
	METAL_CHANGE_UP = 5,

	/** 전력 생산 증가 */
	POWER_CHANGE_UP = 6,

	/** 설비 부품 생산 시간 감소 */
	FACILITY_MAKING_TIME_DOWN = 7,

	// __MAX__ = 8,
}

/** 설비 생산품 종류 */
export enum PRODUCE_TYPE {
	/** 생산품 없음 */
	NONE = 0,

	/** 소모품 생산 */
	ITEM_CONSUMABLE = 1,

	/** 전투원 생산 */
	FACILITY_TYPE_BIOROID = 2,

	// __MAX__ = 3,
}

/** 필요한 전투원 구분 */
export enum REQUIRED_COMBATANT_TYPE {
	/** 구분 없음 */
	NONE = 0,

	/** 전투원 유형 (경장/기동/중장) */
	ACTOR_TYPE = 1,

	/** 전투원 역할 (공격/보호/지원) */
	ROLE_TYPE = 2,

	/** 전투원 몸체 (바이오로이드/AGS) */
	ACTOR_BODY_TYPE = 3,

	/** 전투원 등급 */
	GRADE_TYPE = 4,

	/** 특정 전투원 */
	SPECIFIC_COMBAT = 5,

	// __MAX__ = 6,
}

export enum ITEM_USE_TYPE {
	CREATE = 0,
	USE = 1,
	// __MAX__ = 2,
}

export enum MONSTER_TYPE {
	NORMAL = 0,
	BOSS = 1,
	// __MAX__ = 2,
}

export enum MONSTER_SUB_TYPE {
	NORMAL = 0,
	BOSS = 1,
	NIGHTCHICK = 2,
	SHIELD = 3,
	BEETLE = 4,
	// __MAX__ = 5,
}

export enum SUMMON_TYPE {
	INSTALLATION = 0,
	ENVIRONMENTAL = 1,
	AUTOPILOT = 2,
	// __MAX__ = 3,
}

export enum INSTALL_POS_TYPE {
	PC = 0,
	MONSTER = 1,
	// __MAX__ = 2,
}

export enum CURRENCY_TYPE {
	METAL = 0,
	NUTRIENT = 1,
	POWER = 2,
	TRAINING_TICKET = 3,
	CASH = 4,
	BUYCASH = 5,
	CHALLENGESTAGE_TICKET = 6,
	// __MAX__ = 7,
}

export enum ROGUE_LIMIT_EFFECT_CATEGORY {
	NONE = 0,
	DIFFICULT_INCREASE = 1,
	DEBUFF = 2,
	BUFF = 3,
	ENEMY_BUFF = 4,
}

export enum ROGUE_LIMIT_EFFECT_CONDITION {
	NONE = 0,
	CELL_MOVE_LIMIT = 1,
	STAGE_CLEAR_LIMIT = 2,
	FLOOR_CLEAR_LIMIT = 3,
}

export enum ROGUE_LIMIT_EFFECT_OVERLAP {
	NONE = 0,
	CONDITION_VALUE_INC = 1,
}

export enum ROGUE_LIMIT_EFFECT_SHOW_TYPE {
	NONE = 0,
	SHOW_EFFECT_APPLY = 1,
}

export enum ROGUE_LIMIT_EFFECT_TYPE {
	NONE = 0,
	DIFFICULT_INCREASE = 1,
	CELL_MOVE_HP_DOWN = 2,
	BUFF_SPC_KEY_GIVE = 3,
	TRAP_OBJECT_IGNORE = 4,
	DEBUFF_TRAP_OBJECT_IGNORE = 5,
	STEALTH_MONSTER_OBJECT_IGNORE = 6,
	ROGUE_POINT_RATE_INC = 7,
}

export enum ROGUE_QUEST_OBJECT_TYPE {
	NONE = 0,

	/** 특정 타입의 노드 삭제 */
	ROGUE_OBJECT_SPC_TYPE_REMOVE = 1,

	/** 특정 타입의 아이템 획득 */
	ROGUE_ITEM_SPC_TYPE_GAIN = 2,

	/** 층 돌파 */
	ROGUE_FLOOR_CLEAR = 3,

	/** 특정 패시브 이펙트 획득 */
	ROGUE_EFFECT_SPC_TYPE_GAIN = 4,

	/** 특정 등급 패시브 이펙트 획득 */
	ROGUE_EFFECT_SPC_GRADE_GAIN = 5,

	/** 전투 완료 */
	ROGUE_STAGE_CLEAR = 6,

	/** 적 처리 */
	ROGUE_KILL_MONSTER = 7,

	/** 특정 적 처리 */
	ROGUE_KILL_MONSTER_SPC = 8,

	/** 특정 유형 적 처리 */
	ROGUE_KILL_MONSTER_TYPE = 9,

	/** 특정 역할 적 처리 */
	ROGUE_KILL_MONSTER_ROLE = 10,
}

export enum ROGUE_CELL_TYPE {
	NONE = 0,
	BLANK = 1,

	STARTPOINT = 2,
	BOSSMOB = 3,
	MOB = 4,

	/** 아군 신호 탐색 */
	ACTOR = 5,

	/** 오염된 군수 공장 */
	EFFECT = 6,

	/** 긴급 수복 스테이션 */
	RECOVERY = 7,

	/** 예상치 못한 사고 (물리, 지뢰지대) */
	TRAP = 8,

	/** 관측소 */
	OBSERVE = 9,

	/** 삼안 물자취급소 */
	SHOP = 10,

	/** 지휘 결심 체계 */
	QUEST = 11,

	/** 특수 밀봉 컨테이너 */
	TREASURE = 12,

	/** 공기 정화 시설 */
	THOUSE = 13,

	/** PECS 방문 카드 습득 */
	KEY = 14,

	TRACKER = 15,

	/** 고준위 방사능 오염 */
	POISON = 16,

	/** 혼돈 엔트로피 */
	DEBUFF = 17,

	/** 예상치 못한 사고 (화염, 소이탄 저장고) */
	FIRE_TRAP = 18,

	/** 예상치 못한 사고 (냉기, 냉매 보관소) */
	ICE_TRAP = 19,

	/** 예상치 못한 사고 (전기, 고전류 발전 시설) */
	LIGHTNING_TRAP = 20,
}

export enum ROGUEEFFECTTYPE {
	NONE = 0,

	/** 강습의 */
	AMP = 1,

	/** 장사정의 */
	OBSERVE = 2,

	/** 철갑의 */
	ARMOR = 3,

	/** 방공의 */
	BARRIER = 4,

	/** 요새의 */
	GIFT = 5,

	/** 기갑의 */
	RAPID = 6,

	/** 기만의 */
	PREDICT = 7,

	/** 유도의 */
	DETAIL = 8,

	/** 섬멸의 */
	RESPONSE = 9,

	/** 대구경의 */
	PENETRATE = 10,

	/** 전천후의 */
	COATING = 11,

	/** 제독의 */
	VACCINE = 12,
}

export enum ROGUE_SKILL_TYPE {
	NONE = 0,
	SCOUT = 1,
	SUPPORT_ATK = 2,
	TREASURE_HUNTER = 3,
	TRAP_DIS = 4,
	DEBUFF_DIS = 5,
	BOMB = 6,
	STEALTH = 7,
	SCOUTER = 8,
	CREATOR = 9,
	ROGUE_POINT_RATE_INC = 10,
}

export enum STAGE_SUB_TYPE {
	/** lo-tactical */
	NONE = -1,

	MAIN = 0,
	SUB = 1,
	EX = 2,
	STORY = 3,
}


export enum SKIN_IN_PARTS {
	NONE = 0,
	LOBBY_ANIMATION = 1,
	VOICE = 2,
	SD_EFFECT = 3,
	SD_ANIMATION = 4,

	/** BG or something simplifiable */
	PROPS = 5,
	DAMAGE_IMAGE = 6,
}

export enum RESEARCH_CATEGORY {
	FACILITY = 0,
	ROBOT_TECH = 1,
}

export enum RESEARCH_RESULT {
	ADVANCED_CHARMAKING = 0,
	ROBOT_RESEARCH = 1,
	ACC_FACILTY = 2,
	RESOURCE_SEARCH_UP = 3,
	RESOURCE_CHANGE_UP = 4,
	PC_EXP_UP = 5,
	PC_SKILL_EXP_UP = 6,
	ENCHANTCOST_DOWN = 7,
	DISASSEMBLE_UP = 8,
	SQUADCOST_DOWN = 9,
	REPAIRCOST_DOWN = 10,
	TICKET_SEARCH_UP = 11,
	DAILY_STAGE = 12,
	INTERMEDIATE_DAILY = 13,
	ADVANCED_DAILY = 14,
	EXPERT_DAILY = 15,
	AUTO_BATTLE = 16,
}

export enum UNLOCK_COND {
	NONE = 0,

	/** 전투원을 가지고 있을 때 */
	HAVEPC = 1,

	/** 해당 역할의 전투원을 가지고 있을 때 (공격기/보호기/지원기) */
	HAVEPCROLE = 2,

	/** 해당 유형의 전투원을 가지고 있을 때 (경장/기동/중장) */
	HAVEPCCLASS = 3,

	/** 전투원 레벨 */
	PCLEVEL = 4,

	/** ??? */
	PCLCLASS = 5,

	/** 스테이지 클리어 */
	CLEARSTAGE = 6,

	/** 챕터 클리어 */
	CLEARCHAPTER = 7,
}

export enum FACETYPE {
	NONE,
	EXPRESSIONLESS,
	RESOLVE,
	CLOSEEYE,
	EMBARRASS,
	WORRY,
	BIGSMILE,
	SURPRISED,
	SMILE,
	WHAT,
	BLUNT,
	ANGER,
	DISAPPOINT,
	PROUD,
	QUESTION,
	SHY,
	SORRY,
	TSUN,
	SERIOUS,
	GRAVITY,
	IDLE,
	LAUGH,
	M2,
	SCARE,
	SULK,
	HURT,
	NICENESS,
	INVISIABLE,
	SAD,
	RELIEF,
	TEMPTATION,
	EDGESMILE,
	PRIDE,
	WRYSMILE,
	NERVOUS,
	ELEGANCE,
	BRAVE,
	THINKING,
	CONFIDENCE,
	SHAME,
	EXITING,
	DOYA,
	BAWL,
	ANGER1,
	ANGER2,
	ANGER3,
	SHY1,
	NORMAL,
	CLOSEEYE_NOPAINT,
	IDLE_NOPAINT,
	IDLE2_NOPAINT,
	SHY_NOPAINT,
	SMILE_NOPAINT,
	APOLOGIZE,
	CYNICAL,
	SMILE2,
	HAPPY,
	EMBARRASS2,
	EMBARRASS3,
	SHY2,
	SORRY2,
	EMBARRASS1,
	TSUN2,
	BIGSMILE2,
	CHEWINGGUM,
	CHEWINGGUM2,
	CLOSEEYE2,
	IDLEGL,
	HAPPYGL,
	EMBARRASSGL,
	EXITINGGL,
	SADGL1,
	SADGL2,
	EXPRESSIONLESSGL,
	SAD2,
	IDLE2,
	SURPRISED1,
	SURPRISED2,
	SURPRISED3,
	TEMPTATION1,
	TEMPTATION2,
	TEMPTATION3,
	WINK,
	DESPISE,
	FIERCE,
	CONFUSION,
	URGENT,
	DROWSY,
	ORGASM,
	FURY,
	ANNOYANCE,
	AROUSE,
}

/** 가챠(유산) 타입 */
export enum GACHA_CATEGORY {
	/** 더미? */
	DUMMY = -1,

	/** 1회 */
	NORMAL = 0,

	/** 11회 */
	GACHA_11ST = 1,

	/** 10회 */
	GACHA_10ST = 2,
}

/** 내부 함수 유형 */
export enum FUNCTION_TYPE {
	GIVE_PC = 0,
	GIVE_ITEM = 1,
	GIVE_EXP = 2,
	GIVE_METAL = 3,
	GIVE_NUTRIENT = 4,
	GIVE_POWER = 5,
	GIVE_PCEXP = 6,
	GIVE_PCSKILLEXP = 7,
	SKIN_ACTIVATE = 8, // 스킨 활성화 (스킨 선물 시 실제로 켜지는 부분)
	GIVE_FAVOR = 9,
	CHAR_SLOT_UP = 10,
	EQITEM_SLOT_UP = 11,
	REPAIR_SLOT_UP = 12,
	CHAR_MAKE_SLOT_UP = 13,
	ITEM_MAKE_SLOT_UP = 14,
	SQUAD_SLOT_UP = 15,
	GIVE_CONS_ITEM = 16, // 소모품 지급 (스킨 등)
	GIVE_TUNACAN = 17,
	BG_ACTIVATE = 18,
	FACILITY_SLOT_UP = 19,
	FACILITY_PARTS_MAKE_SLOT_UP = 20,
	FAVOR_MAXUP = 21,
	LOBBYPRESET_SLOT_UP = 22,
	GIVE_TRAININGTICKET = 23,
	GIVE_CHALLENGETICKET = 24,
	BATTLEPASS_ADVREWARD_ACTIVE = 25,
	ROGUEPCSQUARD_SLOT_UP = 26,
	ROGUEEFFECT_SLOT_UP = 27,
	LobbySticker_ACTIVATE = 28,
	ExpBoost_ACTIVATE = 29,
	SkillExpBoost_ACTIVATE = 30,
	CharRateBoost_ACTIVATE = 31,
	EquipRateBoost_ACTIVATE = 32,
	BreakSearchBoost_ACTIVATE = 33,
	TEMP_PC_INVEN_SLOT_UP = 34,
	TEMP_EQUIP_INVEN_SLOT_UP = 35,
	PREMIUM_ATTEND_ACTIVATE = 36,
	CHARACTER_DEEP_LEARNING_ALGORITHM_ACTIVATE = 37,
}

export enum MISSION_TRIGGER_TYPE {
	NONE = 0,
	ROUND_LIMIT_LESS = 1,
	DEATH_COUNT_LESS = 2,
	BY_ONESKILL = 3,
	BY_SPCCHARACTER = 4,
	WITH_SPCCHARACTER = 5,
	SPCCHARACTER_ALIVE = 6,
	BEATEN_LESS = 7,
	WITH_TROOPER_LESS = 8,
	WITH_ARMORED_LESS = 9,
	WITH_MOBILITY_LESS = 10,
	WITH_TROOPER_MORE = 11,
	WITH_ARMORED_MORE = 12,
	WITH_MOBILITY_MORE = 13,
	WITH_ROBOT_LESS = 14,
	WITH_ANDROID_LESS = 15,
	WITH_ROBOT_MORE = 16,
	WITH_ANDROID_MORE = 17,
	SQUAD_LESS = 18,
	SQUAD_MORE = 19,
	BY_SPC_SKILL = 20,
	NO_SPC_SKILL = 21,
	SQUAD_CHANGE_MORE = 22,
	SQUAD_CHANGE_LESS = 23,
	DAMAGE_RECORD = 24,
}
export enum MISSION_OBJECT_TYPE {
	STAGE_CLEAR = 0,
	KILL_ENEMY = 1,
	KILL_SPCENEMY = 2,
}


export enum BUFF_DESC_OPTION {
	DEFAULT,
	ATK_MULTIPLY,
	DEF_MULTIPLY,
	HP_MULTIPLY,
	EVADE_MULTIPLY,
	TSPEED_MULTIPLY,
	CRI_MULTIPLY,
	APPLY_MULTIPLY,
	BUFFER_ATK_MULTIPLY,
}

export type CHARTYPE_GIFTITEM_DAMAGE_TYPE = "None" | "Adult" | "Loli" | "AGS" | "Koyori";

export enum EW_STAGE_DIFFICULTY {
	EASY = 0,
	NORMAL = 1,
	EXTREME = 2,
}

export enum DIALOG_SPEAKER {
	LEFT = 0,
	RIGHT,
	CENTER,
	NONE = 3,
}
export enum APPEAR_EFFECT {
	NONE = 0,
	POPINFROMLEFT,
	POPINFROMRIGHT,
	POPINFROMTOP,
	POPINFROMBOTTOM,
	POPUP,
	FADEIN,
	__MAX__,
}
export enum OFF_EFFECT {
	NONE = 0,
	POPOUTFROMLEFT,
	POPOUTFROMRIGHT,
	POPOUTFROMTOP,
	POPOUTFROMBOTTOM,
	DISAPPEAR,
	FADEOUT,
	__MAX__,
}
export enum SCREEN_EFFECT {
	NONE = 0,
	CAM_SHAKE,
	FADE_OUT_BLACK,
	FADE_IN_BLACK,
	FADE_OUT_WHITE,
	FADE_IN_WHITE,
	__MAX__,
}
export enum SCG_ACTIVATION {
	NONE = 0,
	ACTIVATION,
}

export enum PCSTORYGROUP {
	PCSTORY = 1,
	SQUADSTORY = 2,
}

export enum DLG_START_TRIGGER_TYPE {
	EXIST_PC = 0,
	UPGRADE_PC,
	PCLEVEL,
	EXIST_EQUIP,
	PLAYERLEVEL,
	STAGECLEAR,
	STORYCLEAR,
	KILLMONSTER,
	PCGF_GAUGE,
	EXIST_SKIN,
	MARRIAGE_PC,
	MISSIONCLEAR,
	__MAX__,
}
export enum DLG_END_TRIGGER_TYPE {
	DLG_REVEAL = 0,
	STAGECLEAR,
	GETPC,
	GETITEM,
	__MAX__,
}
export enum DGTRIGGERTYPE {
	AND = 0,
	OR,
}

export enum GameTitleVoiceType {
	VALOFE = "VALOFE",
	LastOrigin = "LastOrigin",
	Uncategorized = "Uncategorized",
}
