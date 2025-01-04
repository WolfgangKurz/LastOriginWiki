export interface BuffFrom_Base {
	type: string;
	key: string;
	index: string;
}
export interface BuffFrom_Unit extends BuffFrom_Base {
	type: "unit";
}
export interface BuffFrom_Equip extends BuffFrom_Base {
	type: "equip";
	level: number;
}
export interface BuffFrom_Enemy extends BuffFrom_Base {
	type: "enemy";
}
export interface BuffFrom_Summon extends BuffFrom_Base {
	type: "summon";
}

type BuffFrom = BuffFrom_Unit | BuffFrom_Equip | BuffFrom_Enemy | BuffFrom_Summon;
export default BuffFrom;
