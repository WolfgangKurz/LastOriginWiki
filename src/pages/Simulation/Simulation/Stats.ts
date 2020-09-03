export type StatType =
	"resist.fire" | // 화염 저항
	"resist.chill" | // 냉기 저항
	"resist.thunder" | // 번개 저항
	"atk" | // 공격력
	"def" | // 방어력
	"hp" | // 체력
	"acc" | // 적중률
	"eva" | // 회피율
	"crit" | // 치명타
	"spd" | // 행동력
	"armorpierce" | // 방어 관통
	"range" | // 사거리
	"dmg.light" | // 대경장 피해량"
	"dmg.air" | // 대기동 피해량"
	"dmg.heavy" | // 대중장 피해량"
	"dr" | // 피해 감소
	"resist" | // 효과 저항
	"off" | // 효과 해제
	"-acc" | // 적중 감소 해제
	"-eva" | // 회피 감소 해제
	"-range"; // 사거리 감소 해제

type StatPointValueTable = {
	[key in StatType]: number;
};
export const StatPointValue: StatPointValueTable = {
	"resist.fire": 0,
	"resist.chill": 0,
	"resist.thunder": 0,
	atk: 1.5,
	def: 1.25,
	hp: 8,
	acc: 1.5,
	eva: 0.4,
	crit: 0.4,
	spd: 0,
	armorpierce: -1,
	range: -1,
	"dmg.light": -1,
	"dmg.air": -1,
	"dmg.heavy": -1,
	dr: -1,
	resist: -1,
	off: -1,
	"-acc": -1,
	"-eva": -1,
	"-range": -1,

};

export type StatListTable = {
	[key in StatType]: {
		name: string;
		postfix?: string;
		rounded?: boolean;
		literal?: boolean;
	};
};
export const StatList: StatListTable = {
	"resist.fire": {
		name: "화염 저항",
		rounded: false,
		literal: true,
		postfix: "%",
	},
	"resist.chill": {
		name: "냉기 저항",
		rounded: false,
		literal: true,
		postfix: "%",
	},
	"resist.thunder": {
		name: "번개 저항",
		rounded: false,
		literal: true,
		postfix: "%",
	},
	atk: {
		name: "공격력",
		rounded: true,
		literal: true,
	},
	def: {
		name: "방어력",
		rounded: true,
		literal: true,
	},
	hp: {
		name: "체력",
		rounded: true,
		literal: true,
	},
	acc: {
		name: "적중률",
		postfix: "%",
		literal: true,
	},
	eva: {
		name: "회피율",
		postfix: "%",
		literal: true,
	},
	crit: {
		name: "치명타",
		postfix: "%",
		literal: true,
	},
	spd: {
		name: "행동력",
		literal: true,
	},

	armorpierce: {
		name: "방어 관통",
		postfix: "%",
	},
	range: {
		name: "사거리",
	},
	"dmg.light": {
		name: "대경장 피해량",
		postfix: "%",
	},
	"dmg.air": {
		name: "대기동 피해량",
		postfix: "%",
	},
	"dmg.heavy": {
		name: "대중장 피해량",
		postfix: "%",
	},

	dr: {
		name: "받는 피해 감소",
		postfix: "%",
	},
	resist: {
		name: "효과 저항",
		postfix: "%",
	},
	off: {
		name: "효과 해제",
		postfix: "%",
	},
	"-acc": {
		name: "적중 감소 해제",
		postfix: "%",
	},
	"-eva": {
		name: "회피 감소 해제",
		postfix: "%",
	},
	"-range": {
		name: "사거리 감소 해제",
		postfix: "%",
	},
};

export interface Stat {
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
}
// eslint-disable-next-line
export namespace Stat {
	export const Empty: Stat = {
		base: 0,
		pointed: 0,
		equiped: 0,
		linkBonus: 0,
		linked: 0,
		fullLinkBonus: 0,
		equipedRatio: 0,
		fullLinkBonusRatio: 0,
	};
}

export type UnitStat = {
	[key in StatType]: Stat;
};
// eslint-disable-next-line
export namespace UnitStat {
	export const Empty: UnitStat = {
		"resist.fire": Stat.Empty,
		"resist.chill": Stat.Empty,
		"resist.thunder": Stat.Empty,

		hp: Stat.Empty,
		atk: Stat.Empty,
		def: Stat.Empty,
		crit: Stat.Empty,
		acc: Stat.Empty,
		eva: Stat.Empty,
		spd: Stat.Empty,

		armorpierce: Stat.Empty,
		range: Stat.Empty,
		"dmg.light": Stat.Empty,
		"dmg.air": Stat.Empty,
		"dmg.heavy": Stat.Empty,

		dr: Stat.Empty,
		resist: Stat.Empty,
		off: Stat.Empty,
		"-acc": Stat.Empty,
		"-eva": Stat.Empty,
		"-range": Stat.Empty,
	};
}

export type UnitPoint = {
	[key in StatType]: number;
};
// eslint-disable-next-line
export namespace UnitPoint {
	export const Empty: UnitPoint = {
		"resist.fire": 0,
		"resist.chill": 0,
		"resist.thunder": 0,

		hp: 0,
		atk: 0,
		def: 0,
		crit: 0,
		acc: 0,
		eva: 0,
		spd: 0,

		armorpierce: 0,
		range: 0,
		"dmg.light": 0,
		"dmg.air": 0,
		"dmg.heavy": 0,

		dr: 0,
		resist: 0,
		off: 0,
		"-acc": 0,
		"-eva": 0,
		"-range": 0,
	};
}
