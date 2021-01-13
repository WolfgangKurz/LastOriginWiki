import LoadDBFactory from "../DB/DBLoader";

import { BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";
import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, SKILL_ATTR } from "@/libs/Types/Enums";

export interface FilterableUnitBuff {
	target: "self" | "team" | "enemy";
	type: BUFFEFFECT_TYPE;
	positive: boolean;
}
export interface FilterableUnitBuffGroup {
	elem: SKILL_ATTR;
	effects: FilterableUnitBuff[];
}
export interface FilterableUnit {
	uid: string;
	no: number;

	rarity: ACTOR_GRADE;
	promotions?: ACTOR_GRADE[];

	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;

	name: string;
	shortname: string;

	group: string;
	shortgroup: string;
	groupKey: string;

	craft: false | number;

	buffs: FilterableUnitBuffGroup[];
}

export default LoadDBFactory<FilterableUnit[]>(
	"filterableunit",
	import(/* webpackChunkName: "chunk-db-filterableunit" */ "@/json/unit-filterable"),
);
