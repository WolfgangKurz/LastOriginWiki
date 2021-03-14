/* eslint-disable camelcase */
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
