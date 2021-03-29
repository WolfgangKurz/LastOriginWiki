export type BaseStatType =
	"ATK" | // 공격력
	"DEF" | // 방어력
	"HP" | // 체력
	"ACC" | // 적중률
	"EVA" | // 회피율
	"CRI" | // 치명타
	"SPD"; // 행동력

export type StatType =
	"ResistFire" | // 화염 저항
	"ResistIce" | // 냉기 저항
	"ResistLightning" | // 번개 저항
	BaseStatType |
	"DEFPenetration" | // 방어 관통
	"Range" | // 사거리
	"DMGTakenInc" | // 받는 피해 증가
	"DMGTakenDec"; // 받는 피해 감소

export type StatPointValueType = {
	[key in BaseStatType]: number;
};

export const StatPointValue: StatPointValueType = {
	ATK: 1.5,
	DEF: 1.25,
	HP: 8,
	ACC: 1.5,
	EVA: 0.4,
	CRI: 0.4,
	SPD: 0.0,
};
