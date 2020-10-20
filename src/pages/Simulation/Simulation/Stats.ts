export type StatType =
	"resist.fire" | // 화염 저항
	"resist.ice" | // 냉기 저항
	"resist.lightning" | // 번개 저항
	"ATK" | // 공격력
	"DEF" | // 방어력
	"HP" | // 체력
	"ACC" | // 적중률
	"EV" | // 회피율
	"Cri" | // 치명타
	"SPD" | // 행동력
	"armor_pierce" | // 방어 관통
	"Range" | // 사거리
	"damage.light" | // 대경장 피해량"
	"damage.air" | // 대기동 피해량"
	"damage.heavy" | // 대중장 피해량"
	"damage_reduce" | // 피해 감소
	"Resist" | // 효과 저항
	"off" | // 효과 해제
	"off.-ACC" | // 적중 감소 해제
	"off.-EV" | // 회피 감소 해제
	"off.-Range"; // 사거리 감소 해제

type StatPointValueTable = {
	[key in StatType]: number;
};
export const StatPointValue: StatPointValueTable = {
	"resist.fire": 0,
	"resist.ice": 0,
	"resist.lightning": 0,

	ATK: 1.5,
	DEF: 1.25,
	HP: 8,
	ACC: 1.5,
	EV: 0.4,
	Cri: 0.4,
	SPD: 0,

	"damage.light": -1,
	"damage.air": -1,
	"damage.heavy": -1,

	armor_pierce: -1,
	Range: -1,
	damage_reduce: -1,
	Resist: -1,
	off: -1,
	"off.-ACC": -1,
	"off.-EV": -1,
	"off.-Range": -1,
};

export type StatListTable = {
	[key in StatType]: {
		name: string;
		postfix?: string;
		rounded?: boolean;
		literal?: boolean;
	};
};

export interface Stat {
	/** 독립 시행 수치 여부 */
	isIndependent: boolean;

	/** 레벨 기반 스탯 수치 */
	base: number;

	/** 스탯 포인트로 오른 수치 */
	pointed: number;

	/** 장비로 오른 수치 (% 수치 제외) */
	equiped: number;

	/** 코어 링크 보너스로 오른 수치 배율 */
	linkBonus: number;

	/** 코어 링크로 오른 추가 수치 */
	linked: number;

	/** 풀링크 보너스로 오른 수치 */
	fullLinkBonus: number;

	/** 장비로 오른 수치 (% 수치만) */
	equipedRatio: number;

	/** 풀링크 보너스로 오른 수치 (% 수치) */
	fullLinkBonusRatio: number;

	/** 독립 시행 수치 목록 */
	independentValues: number[];
}
// eslint-disable-next-line
export namespace Stat {
	export const Empty: Stat = {
		isIndependent: false,
		base: 0,
		pointed: 0,
		equiped: 0,
		linkBonus: 0,
		linked: 0,
		fullLinkBonus: 0,
		equipedRatio: 0,
		fullLinkBonusRatio: 0,
		independentValues: [],
	};
}

export type UnitStat = {
	[key in StatType]: Stat;
};
// eslint-disable-next-line
export namespace UnitStat {
	export const Empty: UnitStat = {
		"resist.fire": Stat.Empty,
		"resist.ice": Stat.Empty,
		"resist.lightning": Stat.Empty,

		HP: Stat.Empty,
		ATK: Stat.Empty,
		DEF: Stat.Empty,
		Cri: Stat.Empty,
		ACC: Stat.Empty,
		EV: Stat.Empty,
		SPD: Stat.Empty,

		armor_pierce: Stat.Empty,
		Range: Stat.Empty,
		"damage.light": Stat.Empty,
		"damage.air": Stat.Empty,
		"damage.heavy": Stat.Empty,

		damage_reduce: Stat.Empty,
		Resist: {
			...Stat.Empty,
			isIndependent: true,
		},
		off: {
			...Stat.Empty,
			isIndependent: true,
		},
		"off.-ACC": Stat.Empty,
		"off.-EV": Stat.Empty,
		"off.-Range": Stat.Empty,
	};
}

export type UnitPoint = {
	[key in StatType]: number;
};
// eslint-disable-next-line
export namespace UnitPoint {
	export const Empty: UnitPoint = {
		"resist.fire": 0,
		"resist.ice": 0,
		"resist.lightning": 0,

		HP: 0,
		ATK: 0,
		DEF: 0,
		Cri: 0,
		ACC: 0,
		EV: 0,
		SPD: 0,

		armor_pierce: 0,
		Range: 0,
		"damage.light": 0,
		"damage.air": 0,
		"damage.heavy": 0,

		damage_reduce: 0,
		Resist: 0,
		off: 0,
		"off.-ACC": 0,
		"off.-EV": 0,
		"off.-Range": 0,
	};
}

/** 뒤에 `%` 붙는 수치 */
export const RatioStats: Array<keyof UnitStat> = [
	"resist.fire", "resist.ice", "resist.lightning",
	"ACC", "EV", "Cri", "armor_pierce",
	"damage.light", "damage.air", "damage.heavy",
	"damage_reduce",
	"Resist", "off", "off.-ACC", "off.-EV", "off.-Range",
];

/** 앞에 `+` 안붙는 수치 */
export const LiteralStats: Array<keyof UnitStat> = [
	"HP", "ATK", "DEF", "ACC", "EV", "Cri", "SPD",
	"resist.fire", "resist.ice", "resist.lightning",
	"Resist", "off",
];
