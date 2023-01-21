import { UnitSkin } from "@/types/DB/Unit";
import { BUFFEFFECT_TYPE } from "../BuffEffect";
import { SKILL_ATTR, ACTOR_GRADE, ACTOR_CLASS, ROLE_TYPE, ACTOR_BODY_TYPE, ROGUE_SKILL_TYPE, CHARTYPE_GIFTITEM_DAMAGE_TYPE } from "../Enums";

export interface FilterableUnitBuff {
	target: "self" | "team" | "enemy";
	type: BUFFEFFECT_TYPE;
	positive: boolean;
}
export interface FilterableUnitBuffGroup {
	effects: FilterableUnitBuff[];
}

export interface FilterableUnitSkill {
	/** target_ground */
	grid: boolean;
	/** dismiss_guard */
	guard: boolean;
	elem: SKILL_ATTR;
}

export interface FilterableUnit {
	uid: string;
	id: number;

	rarity: ACTOR_GRADE;
	promo?: ACTOR_GRADE[];

	type: ACTOR_CLASS;
	role: ROLE_TYPE;
	body: ACTOR_BODY_TYPE;

	// name: string;
	// shortname: string;

	group: string;
	// shortgroup: string;
	// groupKey: string;

	/** timestamp */
	releaseDate: number;

	secretRoomType: CHARTYPE_GIFTITEM_DAMAGE_TYPE;

	craft: false | number;

	buffs: FilterableUnitBuff[][]; // FilterableUnitBuffGroup[];
	skills: {
		1: FilterableUnitSkill;
		2: FilterableUnitSkill;
		F1?: FilterableUnitSkill;
		F2?: FilterableUnitSkill;
	};
	skins: UnitSkin;

	roguelike: ROGUE_SKILL_TYPE[];
}

/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace FilterableUnit {
	export const Empty: FilterableUnit = {
		id: 0,
		uid: "",

		rarity: ACTOR_GRADE.B,
		type: ACTOR_CLASS.LIGHT,
		role: ROLE_TYPE.ATTACKER,
		body: ACTOR_BODY_TYPE.BIOROID,

		group: "",
		// shortgroup: "",

		releaseDate: 0,
		craft: false,

		buffs: [],
		skills: {
			1: {
				grid: false,
				guard: false,
				elem: SKILL_ATTR.PHYSICS,
			},
			2: {
				grid: false,
				guard: false,
				elem: SKILL_ATTR.PHYSICS,
			},
		},
		skins: {
			G: false,
			// SD: false,
			Spine: false,
			parts: 0,
			stage: false,

			subset: {
				0: false,
				1: false,
				2: false,
				3: false,
				4: false,
				5: false,
				6: false,
				7: false,
			},
			offsets: {},

			anim: {
				0: false,
				1: false,
				2: false,
				3: false,
			},
			facelist: [],

			category: [],
			releaseDate: 0,
			artist: "",
			sid: 0,

			metadata: { imageId: 0 },
		},

		roguelike: [],
	};
}
