export type StatType = "hp" | "atk" | "def" | "acc" | "eva" | "crit";
export type LinkCount = 0 | 1 | 2 | 3 | 4 | 5;
export interface StatInfo {
	from: number;
	to: number;

	level: number;
}

type StatTable = {
	[key in StatType]: number;
};

const PerPoint: StatTable = {
	atk: 1.5,
	def: 1.25,
	hp: 8,
	acc: 1.5,
	eva: 0.4,
	crit: 0.4,
};

/**
 * 스탯의 현재 수치를 가져옴
 * @param type 스탯 유형
 * @param statinfo 스탯의 시작 수치, 끝 수치, 현재 레벨
 * @param points 해당 스탯에 투자한 포인트
 * @param links 링크 수 (0 ~ 5)
 * @param bonus 링크 보너스 (0.0 ~ 1.0)
 */
export function StatValue (type: StatType, statinfo: StatInfo, points: number, links: LinkCount, bonus: number): number {
	const diff = statinfo.to - statinfo.from;
	let base = statinfo.from + diff * (statinfo.level - 1) / 99;
	base += bonus * PerPoint[type];
	base *= (links * 0.2) + bonus + 1;
	return base;
}
