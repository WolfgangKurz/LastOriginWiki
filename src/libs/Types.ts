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
export type FullLinkBonusType = "" | "discount" | "skill" | "acc" | "buff" | "crit" | "eva" | "hp" | "range" | "spd";

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
	upgrade: number | undefined;
	source: string[][];
	stats: string[];
}
export interface Equip {
	name: string;
	limit: Array<string | number> | null;
	source: EntitySource[][];
	upgrade: number | null;

	stats: Array<Status[]>;
}
/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Equip {
	export const Empty: Equip = {
		name: "-",
		limit: null,
		source: [],
		upgrade: null,

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
	craftable: boolean;
	marry: boolean;

	resists: {
		fire: number;
		chill: number;
		thunder: number;
	};

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
	craftable: boolean;
	marry: boolean;

	resists: {
		fire: number;
		chill: number;
		thunder: number;
	};

	linkBonus: {
		per: LinkBonusType;
		skillPower: number;
		entry3: FullLinkBonusType;
		entry4: FullLinkBonusType;
	};

	equip: [EquipType, EquipType, EquipType, EquipType];
	source: EntitySource[][];

	hasLimited: [string, string];
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
		craftable: false,
		marry: false,
		resists: {
			fire: 0,
			chill: 0,
			thunder: 0,
		},
		linkBonus: {
			per: "acc",
			skillPower: 0,
			entry3: "acc",
			entry4: "acc",
		},
		equip: ["Chip", "Chip", "OS", "Public"],
		source: [],
		hasLimited: ["", ""],
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

export interface RawUnitDialogue {
	[key: number]: {
		[key: string]: {
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
			// eslint-disable-next-line
			Idle_01_01?: string;
			// eslint-disable-next-line
			Idle_01_02?: string;
			// eslint-disable-next-line
			Idle_01_03?: string;
			// eslint-disable-next-line
			SPIdle_01_01?: string;
			// eslint-disable-next-line
			Idle_02_01?: string;
			// eslint-disable-next-line
			Idle_03_01?: string;
			// eslint-disable-next-line
			Idle_04_01?: string;
			// eslint-disable-next-line
			SPIdle_02_01?: string;
			Oath?: string;
			// eslint-disable-next-line
			OathIdle_01?: string;
			MVP?: string;
		};
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

export interface RawFacility {
	level: number;
	requireRes: Array<{
		type: "Components" | "Nutritions" | "Power";
		value: number;
	}>;
	requireWorker: {
		type: string;
		level: number[];
		count: number;
	};
	upgradeTime: number;
	upgradeRes: {
		Resins: number;
		Paint: number;
		Metal: number;
		Material: null | {
			type: "Material" | "Resource" | "Bioroid" | "Cafeteria" | "EXPCenter" | "Equipment" | "Facility" | "Creation";
			grade: "Normal" | "Advanced" | "Special";
			value: number;
		};
	};
	result: string[][];
}
export interface RawFacilityEntry {
	name: string;
	size: number;
	duration: number;
	list: RawFacility[];
}
export interface RawFacilities {
	[key: string]: RawFacilityEntry;
}

export interface RawItemName {
	name: string;
	simple: string;
}
export interface RawItemNames {
	[key: string]: RawItemName;
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
	loc: number;
	spec: number;
	title: string;
	face: number;
	bg: string;
	desc: string;
}
