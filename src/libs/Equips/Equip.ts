/* eslint-disable camelcase */
import { BuffEffect } from "@/libs/Equips/BuffEffect";
import { BuffErase } from "@/libs/Equips/BuffErase";
import { BuffTrigger } from "@/libs/Equips/BuffTrigger";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, BUFF_OVERLAP_TYPE, NUM_OUTPUTTYPE, ROLE_TYPE } from "@/libs/Types/Enums";

export type EquipStat = EquipStatStatic | EquipStatBuff;

export type EquipStatStatic = BuffEffect & {
	isBuff: undefined;
	chance: undefined;
};
export interface EquipStatBuff {
	on: BuffTrigger;
	if: BuffTrigger;

	body: ACTOR_BODY_TYPE[];
	class: ACTOR_CLASS[];
	role: ROLE_TYPE[];

	buffs: Array<{
		icon: string;
		desc: {
			desc: string;
			type: NUM_OUTPUTTYPE;
			value: string;
		};
		erase: BuffErase;
		value: BuffEffect;
		overlap: BUFF_OVERLAP_TYPE;
	}>,

	maxStack: number;
}
