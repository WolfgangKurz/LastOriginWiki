export type StatType =
	"atk" | // 공격력
	"def" | // 방어력
	"hp" | // 체력
	"acc" | // 적중률
	"eva" | // 회피율
	"crit" | // 치명타
	"spd"; // 행동력

type StatPointValueTable = {
	[key in StatType]: number;
};
export const StatPointValue: StatPointValueTable = {
	atk: 1.5,
	def: 1.25,
	hp: 8,
	acc: 1.5,
	eva: 0.4,
	crit: 0.4,
	spd: 0,
};

type StatListTable = {
	[key in StatType]: {
		name: string;
		postfix?: string;
		rounded?: boolean;
	};
};
export const StatList: StatListTable = {
	atk: {
		name: "공격력",
		rounded: true,
	},
	def: {
		name: "방어력",
		rounded: true,
	},
	hp: {
		name: "체력",
		rounded: true,
	},
	acc: {
		name: "적중률",
		postfix: "%",
	},
	eva: {
		name: "회피율",
		postfix: "%",
	},
	crit: {
		name: "치명타",
		postfix: "%",
	},
	spd: {
		name: "행동력",
	},
};

export interface Stat {
	/** 레벨 기반 스탯 수치 */
	base: number;

	/** 스탯 포인트로 오른 수치 */
	pointed: number;

	/** 장비로 오른 수치 (% 수치 제외) */
	equiped: number;

	/** 코어 링크 보너스로 오를 수치 배율 */
	linkBonus: number;

	/** 코어 링크로 오른 추가 수치 */
	linked: number;

	/** 장비로 오른 수치 (% 수치만) */
	equipedRatio: number;
}
// eslint-disable-next-line
export namespace Stat {
	export const Empty: Stat = {
		base: 0,
		pointed: 0,
		equiped: 0,
		linkBonus: 0,
		linked: 0,
		equipedRatio: 0,
	};
}

export type UnitStat = {
	[key in StatType]: Stat;
};
// eslint-disable-next-line
export namespace UnitStat {
	export const Empty: UnitStat = {
		hp: Stat.Empty,
		atk: Stat.Empty,
		def: Stat.Empty,
		crit: Stat.Empty,
		acc: Stat.Empty,
		eva: Stat.Empty,
		spd: Stat.Empty,
	};
}

export type UnitPoint = {
	[key in StatType]: number;
};
// eslint-disable-next-line
export namespace UnitPoint {
	export const Empty: UnitPoint = {
		hp: 0,
		atk: 0,
		def: 0,
		crit: 0,
		acc: 0,
		eva: 0,
		spd: 0,
	};
}
