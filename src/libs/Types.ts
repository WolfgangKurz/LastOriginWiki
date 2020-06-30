import EntitySource from "@/libs/EntitySource";

export type LRarity = "ss" | "s" | "a" | "b";
export type Rarity = "SS" | "S" | "A" | "B";

export type EquipType = "Chip" | "OS" | "Public" | "Private";

export type UnitType = "light" | "air" | "heavy";
export type UnitRole = "attacker" | "defender" | "supporter";
export type UnitBody = "bio" | "ags";

export type UnitPosition = "back" | "mid" | "front";

export const TriggerTypeArray: string[] = ["attack", "flood", "kill", "pos", "round", "wave", "unit", "scout", "barrier", "hdmg", "mdmg"];
export type TriggerType = "attack" | "flood" | "kill" | "pos" | "round" | "wave" | "unit" | "scout" | "barrier" | "hdmg" | "mdmg";

export type LinkBonusType = "acc" | "crit" | "def" | "eva" | "hp" | "skill" | "spd";
export type FullLinkBonusType = "acc" | "buff" | "crit" | "eva" | "hp" | "range";

export interface Trigger {
	inv: boolean;
	type: TriggerType;
	params: Array<string | number>;
}
export interface TriggerAttack extends Trigger {
	type: "attack";
	params: [];
}
export interface TriggerFlood extends Trigger {
	type: "flood";
	params: [];
}
export interface TriggerKill extends Trigger {
	type: "kill";
	params: [];
}
export interface TriggerPos extends Trigger {
	type: "pos";
	params: [UnitPosition];
}
export interface TriggerRound extends Trigger {
	type: "round";
	params: [];
}
export interface TriggerWave extends Trigger {
	type: "wave";
	params: [];
}
export interface TriggerUnit extends Trigger {
	type: "unit";
	params: [UnitType | UnitRole | number];
}
export interface TriggerScout extends Trigger {
	type: "scout";
	params: [];
}
export interface TriggerMDmg extends Trigger {
	type: "mdmg";
	params: [];
}
export interface TriggerHDmg extends Trigger {
	type: "hdmg";
	params: [];
}

export interface Action {
	repeats: number;
	act: string;
	params: string[];

	next?: Action;
	rand?: true;
}

export interface Status {
	on: Trigger[];
	actions: Action[];
}


export interface RawEquip {
	name: string;
	limit?: string;
	source: string[][];
	stats: string[];
}
export interface Equip {
	name: string;
	limit: Array<string | number> | null;
	source: EntitySource[][];

	stats: Array<Status[]>;
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Equip {
	export const Empty: Equip = {
		name: "-",
		limit: null,
		source: [],

		stats: [],
	};
}

export interface UnitUIDTable {
	[key: number]: string;
}

export interface RawUnit {
	id: number;
	rarity: Rarity;

	type: "Light" | "Air" | "Defender";
	role: "Attacker" | "Defender" | "Supporter";

	name: string;
	shortname: string;

	group: string;
	shortgroup: string;
	groupkey: string;

	body: "Bioroid" | "AGS";

	promotions?: Rarity[];
	marry: boolean;

	linkBonus: {
		per: LinkBonusType;
		skillPower: number;
		entry3: FullLinkBonusType;
		entry4: FullLinkBonusType;
	};

	equip: [EquipType, EquipType, EquipType, EquipType];
	source: string[][];
}
export interface Unit {
	id: number;

	rarity: Rarity;

	type: UnitType;
	role: UnitRole;

	name: string;
	shortname: string;

	group: string;
	shortgroup: string;
	groupkey: string;

	body: UnitBody;

	promotions?: Rarity[];
	marry: boolean;

	linkBonus: {
		per: LinkBonusType;
		skillPower: number;
		entry3: FullLinkBonusType;
		entry4: FullLinkBonusType;
	};

	equip: [EquipType, EquipType, EquipType, EquipType];
	source: EntitySource[][];
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Unit {
	export const Empty: Unit = {
		id: 0,
		rarity: "B",
		type: "light",
		role: "attacker",
		name: "-",
		shortname: "-",
		group: "",
		shortgroup: "",
		groupkey: "",
		body: "bio",
		marry: false,
		linkBonus: {
			per: "acc",
			skillPower: 0,
			entry3: "acc",
			entry4: "acc",
		},
		equip: ["Chip", "Chip", "OS", "Public"],
		source: [],
	};
}

export interface UnitStatsPoint {
	hp: number;
	atk: number;
	def: number;
	crit: number;
	acc: number;
	eva: number;
	spd?: number;
}
export interface UnitStatsPointAll {
	hp: number;
	atk: number;
	def: number;
	crit: number;
	acc: number;
	eva: number;
	spd: number;
}

export interface UnitStatsRaw {
	id: number;
	SS?: UnitStats;
	S?: UnitStats;
	A?: UnitStats;
	B?: UnitStats;
}
export interface UnitStats {
	hp: number[];
	atk: number[];
	def: number[];
	spd: number;
	crit: number;
	acc: number;
	eva: number;
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace UnitStats {
	export const Empty: UnitStats = {
		hp: [0, 0],
		atk: [0, 0],
		def: [0, 0],
		spd: 0,
		crit: 0,
		acc: 0,
		eva: 0,
	};
	export const EmptyPoint: UnitStatsPoint = {
		hp: 0,
		atk: 0,
		def: 0,
		crit: 0,
		acc: 0,
		eva: 0,
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
}
export interface SkinInfo {
	t: string;

	/** Offset */
	offset: SkinOffset;

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
