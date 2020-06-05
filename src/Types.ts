export type Rarity = "SS" | "S" | "A" | "B";

export type UnitType = "light" | "air" | "heavy";
export type UnitRole = "attacker" | "defender" | "supporter";
export type UnitBody = "bio" | "ags";

export type UnitPosition = "back" | "mid" | "front";

export const TriggerTypeArray: string[] = ["attack", "flood", "kill", "pos", "round", "wave", "unit", "scout", "barrier", "hdmg", "mdmg"];
export type TriggerType = "attack" | "flood" | "kill" | "pos" | "round" | "wave" | "unit" | "scout" | "barrier" | "hdmg" | "mdmg";

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
	source: string;
	stats: string[];
}
export interface Equip {
	name: string;
	limit: Array<string | number> | null;
	source: string;

	stats: Array<Status[]>;
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
	};
}

export interface RawSkin {
	/** Damaaged */
	D: boolean;

	/** Simplified */
	S: boolean;

	/** Damaged Simplified */
	X: boolean;

	/** Animated */
	A: boolean;

	skins?: SkinInfo[];
	P?: SkinInfo;
}
export interface SkinInfo {
	t: string;

	/** Damaaged */
	D: boolean;

	/** Simplified */
	S: boolean;

	/** Damaged Simplified */
	X: boolean;

	/** Animated */
	A: boolean;

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
