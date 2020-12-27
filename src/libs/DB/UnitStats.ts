import { ACTOR_GRADE } from "@/libs/Types/Enums";

import Data from "@/json/unit-stats";

export interface UnitStats {
	id: number;
	rarity: ACTOR_GRADE;

	HP: number[];
	ATK: number[];
	DEF: number[];
	SPD: number;
	Cri: number;
	ACC: number;
	EV: number;

	Resist: {
		fire: number;
		ice: number;
		lightning: number;
	};
}
export interface UnitStatsPoint {
	HP: number;
	ATK: number;
	DEF: number;
	SPD: number;
	Cri: number;
	ACC: number;
	EV: number;
}

/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace UnitStats {
	export const Empty: UnitStats = {
		id: 0,
		rarity: ACTOR_GRADE.B,

		HP: [0, 0],
		ATK: [0, 0],
		DEF: [0, 0],
		SPD: 0,
		Cri: 0,
		ACC: 0,
		EV: 0,

		Resist: {
			fire: 0,
			ice: 0,
			lightning: 0,
		},
	};
	export const EmptyPoint: UnitStatsPoint = {
		HP: 0,
		ATK: 0,
		DEF: 0,
		Cri: 0,
		ACC: 0,
		EV: 0,
		SPD: 0,
	};
}
export default Data as UnitStats[];
