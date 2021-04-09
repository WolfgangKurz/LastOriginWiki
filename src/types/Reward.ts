import { Consumable } from "@/types/DB/Consumable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

export interface RewardTypeUnit {
	unit: FilterableUnit;
}
export interface RewardTypeEquip {
	equip: FilterableEquip;
	count: number;
}
export interface RewardTypeConsumable {
	consumable: Consumable;
	count: number;
}
export interface RewardTypeCash {
	cash: number;
}
export interface RewardTypeMetal {
	metal: number;
}
export interface RewardTypeNutrient {
	nutrient: number;
}
export interface RewardTypePower {
	power: number;
}
export type RewardTypeBase = RewardTypeUnit | RewardTypeEquip | RewardTypeConsumable |
	RewardTypeCash | RewardTypeMetal | RewardTypeNutrient | RewardTypePower;

export type RawRewardChar = string;
export interface RawRewardItem {
	item: string;
	count: number;
	chance?: number;
}
export interface RawRewardCash {
	cash: number;
}
export interface RawRewardMetal {
	metal: number;
}
export interface RawRewardNutrient {
	nutrient: number;
}
export interface RawRewardPower {
	power: number;
}
export type RawReward = RawRewardChar | RawRewardItem | RawRewardCash | RawRewardMetal | RawRewardNutrient | RawRewardPower;
