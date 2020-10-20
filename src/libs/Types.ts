export type Rarity = "SS" | "S" | "A" | "B";

export interface RawUnitDialogueEntity {
	Join?: string;
	SquadJoin?: string;
	Leader?: string;
	SortiePick?: string;
	StageStart?: string;
	Retreat?: string;
	SearchStart?: string;
	SearchEnd?: string;
	BattleFocus?: string;
	ActionApprove?: string;
	SpSkill?: string;
	Retire?: string;
	Repair?: string;
	Reinforce?: string;
	ItemEquip?: string;
	CoreLink?: string;
	PresentGet?: string;
	Login?: string;
	/* eslint-disable camelcase */
	Idle_01_01?: string;
	Idle_01_02?: string;
	Idle_01_03?: string;
	SPIdle_01_01?: string;
	Idle_02_01?: string;
	Idle_03_01?: string;
	Idle_04_01?: string;
	SPIdle_02_01?: string;
	Oath?: string;
	OathIdle_01?: string;
	MVP?: string;
	/* eslint-enable camelcase */
}
export interface RawUnitDialogue {
	[key: number]: { // Unit
		[key: string]: RawUnitDialogueEntity; // Skin
	};
}

interface SkinOffsetPart {
	n: number;
	d: number;
	s: number;
	x: number;
}
export interface SkinOffset {
	normal: SkinOffsetPart;
	google: SkinOffsetPart;
}
export interface RawSkin {
	/** Offset */
	offset: SkinOffset;

	/** Skin Price */
	price?: number;

	/** Has Voice */
	V: boolean;

	/** Damaaged */
	D: boolean;

	/** Simplified */
	S: boolean;

	/** Damaged Simplified */
	X: boolean;

	/** Animated */
	A: boolean;

	/** has Google CG */
	G: boolean;

	skins?: SkinInfo[];
	P?: SkinInfo;

	artist: string;

	name: string;
	desc: string;
}
export interface SkinInfo {
	t: string;

	/** Offset */
	offset: SkinOffset;

	/** Has Voice */
	V: boolean;

	/** Damaaged */
	D: boolean;

	/** Simplified */
	S: boolean;

	/** Damaged Simplified */
	X: boolean;

	/** Animated */
	A: boolean;

	/** has Google CG */
	G: boolean;

	/** Price */
	price?: number;

	/** Skin Artist */
	artist: string;

	/** Skin Item Name */
	name: string;

	/** Skin Item Description */
	desc: string;
}

export interface CostTable {
	components: [number, number, number, number, number, number];
	nutritions: [number, number, number, number, number, number];
	power: [number, number, number, number, number, number];
}
export interface RawCostTable {
	[key: string]: {
		bio: CostTable;
		ags: CostTable;
	};
}

export interface RawSkillUnit {
	key: string;
	name: string;
	icon: string;
	range: number;
	ap: number;
	target: "enemy";
	bound: "single" | string;
	desc: string[];
}
export interface RawSkill {
	[key: string]: {
		[key: string]: RawSkillUnit;
	};
	[key: number]: {
		[key: string]: RawSkillUnit;
	};
}

export interface Worlds {
	[key: string]: {
		[key: string]: {
			title: string;
			list: MapNodeEntity[];
		};
	};
}

export type MapNodeX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type MapNodeY = 0 | 1 | 2;

export interface MapNodeEntity {
	type: "" | "N" | "B" | "Ex" | "C";
	name: string;
	pos: [MapNodeX, MapNodeY]; // [x: number, y: number];
	prev: [MapNodeX, MapNodeY] | undefined;
	drops: {
		reward: {
			units: number[];
			equips: string[];
		};
		units: number[];
		equips: string[];
	};
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace MapNodeEntity {
	export const Empty: MapNodeEntity = {
		name: "",
		type: "",
		pos: [0, 0],
		prev: undefined,
		drops: {
			reward: {
				units: [],
				equips: [],
			},
			units: [],
			equips: [],
		},
	};
}

export interface ExpEntity {
	exp: number;
	enemies: number;
}
export interface ExpRaw {
	map: {
		[key: string]: {
			[key: string]: ExpEntity[] | string;

			type: string;
		};
	};
	table: number[];
}

export interface StoryRaw {
	area: string;
	map: number;
	loc: string;
	spec: number;
	title: string;
	face: number;
	bg: string;
	desc: string;
	filename: string;
}
