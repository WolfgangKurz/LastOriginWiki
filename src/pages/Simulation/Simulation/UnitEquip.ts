import { EquipType, LRarity } from "@/libs/Types";

export interface UnitEquip {
	Type: EquipType;
	Name: string;
	Level: number; // 0 ~ 10
	Rarity: LRarity;
}
// eslint-disable-next-line
export namespace UnitEquip {
	export const Empty: UnitEquip = {
		Type: "Chip",
		Name: "",
		Level: 10,
		Rarity: "ss",
	};
}
