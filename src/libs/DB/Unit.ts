import LoadDBFactory from "@/libs/DB/DBLoader";
import EntitySource from "@/libs/EntitySource";
import { ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, ITEM_TYPE } from "@/libs/Types/Enums";
import { LinkBonusData, LinkBonusType, Unit } from "@/libs/Types/Unit";

import Decimal from "decimal.js";

interface RawUnit {
	id: number;
	uid: string;

	rarity: ACTOR_GRADE;
	promotions?: ACTOR_GRADE[];

	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;

	name: string;
	shortname: string;

	group: string;
	shortgroup: string;
	groupkey: string;

	introduce: string;
	height: string;
	weight: string;
	weapon1: string;
	weapon2: string;

	craftable: false | number;
	favor: {
		present: number;
		clear: number;
		death: number;
		assistant: number;
	};
	marry: boolean;

	linkBonus: LinkBonusType[];
	fullLinkBonus: LinkBonusType[];

	equip: [ITEM_TYPE, ITEM_TYPE, ITEM_TYPE, ITEM_TYPE];
	source: string[][];
}

export function GetLinkBonus (type: LinkBonusType, links: number): LinkBonusData {
	const v = parseInt(type.replace(/^.+_([0-9]+)$/, "$1"), 10);

	switch (type) {
		case "HP_15":
		case "HP_20":
		case "HP_25":
		case "HP_30":
		case "HP_35":
		case "HP_40":
		case "HP_45":
		case "HP_50":
			return {
				Key: type,
				Name: "체력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "ATK_10":
		case "ATK_15":
		case "ATK_20":
		case "ATK_25":
		case "ATK_30":
			return {
				Key: type,
				Name: "공격력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "DEF_3":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 3).toNumber(),
			};
		case "DEF_10":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 5).toNumber(),
			};
		case "DEF_15":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 10).toNumber(),
			};
		case "DEF_20":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 20).toNumber(),
			};
		case "DEF_25":
			return {
				Key: type,
				Name: "방어력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 30).toNumber(),
			};

		case "ACC_5":
			return {
				Key: type,
				Name: "적중률",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 7).toNumber(),
			};
		case "ACC_10":
		case "ACC_25":
		case "ACC_50":
		case "ACC_75":
			return {
				Key: type,
				Name: "적중률",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "EV_3":
			return {
				Key: type,
				Name: "회피",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 2).toNumber(),
			};
		case "EV_10":
		case "EV_15":
		case "EV_20":
		case "EV_25":
		case "EV_30":
		case "EV_40":
		case "EV_50":
			return {
				Key: type,
				Name: "회피",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "SPD_2":
		case "SPD_3":
		case "SPD_4":
		case "SPD_10":
		case "SPD_15":
		case "SPD_20":
		case "SPD_25":
		case "SPD_30":
			return {
				Key: type,
				Name: "행동력",
				Prefix: "+",
				Postfix: "",
				Value: Decimal.mul(links, v)
					.div(100)
					.toNumber(),
			};

		case "Cri_2":
		case "Cri_3":
		case "Cri_5":
		case "Cri_10":
		case "Cri_15":
		case "Cri_20":
		case "Cri_25":
		case "Cri_30":
			return {
				Key: type,
				Name: "치명타",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "Range_1":
			return {
				Key: type,
				Name: "사거리",
				Prefix: "+",
				Postfix: "",
				Value: 1,
			};

		case "Buff_1":
		case "Buff_2":
		case "Buff_3":
			return {
				Key: type,
				Name: "버프/디버프 효과",
				Prefix: "Lv+",
				Postfix: "",
				Value: v,
			};

		case "Exp_5":
			return {
				Key: type,
				Name: "경험치",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 4).toNumber(),
			};
		case "Exp_10":
			return {
				Key: type,
				Name: "경험치",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, 10).toNumber(),
			};

		case "Skill_2":
		case "Skill_5":
		case "Skill_10":
		case "Skill_15":
		case "Skill_20":
		case "Skill_25":
		case "Skill_30":
		case "Skill_35":
			return {
				Key: type,
				Name: "스킬 위력",
				Prefix: "+",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};

		case "Cost_20":
		case "Cost_25":
		case "Cost_30":
		case "Cost_35":
			return {
				Key: type,
				Name: "출격 비용",
				Prefix: "-",
				Postfix: "%",
				Value: Decimal.mul(links, v).toNumber(),
			};
	}

	return {
		Key: type,
		Name: "???",
		Prefix: "",
		Postfix: "",
		Value: 0,
	};
}

export default (uid: string, callback?: (data: Unit | null) => void) => {
	return LoadDBFactory<RawUnit, Unit>(
		`unit-${uid}`,
		import(/* webpackChunkName: "chunk-db-unit-" */ `@/json/unit/${uid}`),
		(x) => !x ? null : {
			...x,
			source: x.source
				.map(y => y.map(z => new EntitySource(z))),
		},
	)(callback);
};
