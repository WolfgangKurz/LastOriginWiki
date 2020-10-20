import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";

export interface UnitEquip {
	FullKey: string;
	Type: ITEM_TYPE;
	Key: string;
	Rarity: ACTOR_GRADE;
	Level: number; // 0 ~ 10
}
// eslint-disable-next-line
export namespace UnitEquip {
	export const Empty: UnitEquip = {
		FullKey: "__T1",
		Type: ITEM_TYPE.CHIP,
		Key: "",
		Rarity: ACTOR_GRADE.SS,
		Level: 10,
	};
}
