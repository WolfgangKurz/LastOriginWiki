import EntitySource from "@/libs/EntitySource";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ITEM_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";

import Data from "@/json/unit.json";
import EquipData from "@/libs/DB/Equip";

export type LinkBonusType = "Skill" | "ACC" | "Cri" | "SPD" | "DEF" | "EV" | "HP";
export type FullLinkBonusType = "" | "HP" | "Buff" | "Range" | "ACC" | "Cri" | "EV" | "SPD" | "Discount";
export type FullLinkBonusSkill = 15 | 20 | 25;

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

	craftable: boolean;
	marry: boolean;

	linkBonus: LinkBonusType;
	fullLinkBonus: {
		bonus2: FullLinkBonusSkill;
		bonus3: FullLinkBonusType;
		bonus4: FullLinkBonusType;
	};

	equip: [ITEM_TYPE, ITEM_TYPE, ITEM_TYPE, ITEM_TYPE];
	source: string[][];
}
export interface Unit {
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

	craftable: boolean;
	marry: boolean;

	linkBonus: LinkBonusType;
	fullLinkBonus: {
		bonus2: FullLinkBonusSkill;
		bonus3: FullLinkBonusType;
		bonus4: FullLinkBonusType;
	};

	equip: [ITEM_TYPE, ITEM_TYPE, ITEM_TYPE, ITEM_TYPE];
	source: EntitySource[][];

	hasLimited: [string, string];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Unit {
	export const Empty: Unit = {
		id: 0,
		uid: "",

		rarity: ACTOR_GRADE.B,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.ATTACKER,
		body: ACTOR_BODY_TYPE.BIOROID,

		name: "-",
		shortname: "-",
		group: "",
		shortgroup: "",
		groupkey: "",

		craftable: false,
		marry: false,

		linkBonus: "ACC",
		fullLinkBonus: {
			bonus2: 15,
			bonus3: "ACC",
			bonus4: "ACC",
		},
		equip: [
			ITEM_TYPE.CHIP,
			ITEM_TYPE.CHIP,
			ITEM_TYPE.SPCHIP,
			ITEM_TYPE.SUBEQ,
		],
		source: [],
		hasLimited: ["", ""],
	};
}
function Compile (): Unit[] {
	return (Data as RawUnit[]).map(x => ({
		id: x.id,
		uid: x.uid,

		name: x.name,
		shortname: x.shortname,

		group: x.group,
		shortgroup: x.shortgroup,
		groupkey: x.groupkey,

		rarity: x.rarity,
		body: x.body,
		type: x.type,
		role: x.role,

		promotions: x.promotions,
		craftable: x.craftable,
		marry: x.marry,

		linkBonus: x.linkBonus,
		fullLinkBonus: x.fullLinkBonus,

		equip: [
			x.equip[0],
			x.equip[1],
			x.equip[2],
			x.equip[3],
		],
		source: x.source
			.map(y => y.map(z => new EntitySource(z))),

		// 이 전투원 id로 장착이 제한된 장비
		hasLimited: (() => {
			const eq = EquipData.find(y => y.limit && y.limit.some(z => z === x.id));
			if (!eq) return ["", ""];

			const reg = /_([abs]+)$/.exec(eq.name);
			if (!reg) return ["", ""];

			return [
				reg[1].toUpperCase(),
				eq.name.replace(`_${reg[1]}`, ""),
			];
		})() as [string, string],
	}));
}
export default Compile();
