import { EquipType, Rarity } from "@/libs/Types";

export interface UnitEquip {
	FullKey: string;
	Type: EquipType;
	Key: string;
	Rarity: Rarity;
	Level: number; // 0 ~ 10
}
// eslint-disable-next-line
export namespace UnitEquip {
	export const Empty: UnitEquip = {
		FullKey: "__T1",
		Type: "Chip",
		Key: "",
		Rarity: "SS",
		Level: 10,
	};
}
