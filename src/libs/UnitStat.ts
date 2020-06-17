import { UnitStatsPoint, LinkBonusType } from "@/libs/Types";

export interface StatInfo {
	from: number;
	to: number;

	level: number;

	linkBonus: string[]; // per
}

type StatTable = {
	[key in keyof UnitStatsPoint]: number;
};

const PerPoint: StatTable = {
	atk: 1.5,
	def: 1.25,
	hp: 8,
	acc: 1.5,
	eva: 0.4,
	crit: 0.4,
	spd: 0,
};

/**
 * 스탯의 현재 수치를 가져옴
 * @param type 스탯 유형
 * @param statinfo 스탯의 시작 수치, 끝 수치, 현재 레벨, 링크 보너스 목록
 * @param points 해당 스탯에 투자한 포인트
 * @param equips 장비 장착으로 증가한 수치
 * @param links 링크 수 (0 ~ 5)
 * @param bonusFactor 링크 보너스 수치 비율 (0.0 ~ 1.0)
 */
export function StatValue (
	type: keyof UnitStatsPoint,
	statinfo: StatInfo,
	points: number,
	equips: number,
	links: number,
	bonusFactor: number,
	bonusValue: number,
): number {
	const diff = statinfo.to - statinfo.from;
	let base = statinfo.from + diff * (statinfo.level - 1) / 99;
	base += points * (PerPoint[type] || 0) + equips;
	base *= 1 + (statinfo.linkBonus.includes(type) ? links * 0.2 : 0) + bonusFactor;

	if (statinfo.from === statinfo.to)
		return parseFloat((base + bonusValue).toFixed(1));
	else
		return Math.round(base + bonusValue);
}
