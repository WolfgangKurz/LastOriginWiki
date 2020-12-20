/* eslint-disable camelcase */
import { BuffEffect } from "@/libs/Buffs/BuffEffect";
import { BuffErase } from "@/libs/Buffs/BuffErase";
import { BuffTrigger } from "@/libs/Buffs/BuffTrigger";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, BUFF_ATTR_TYPE, BUFF_OVERLAP_TYPE, NUM_OUTPUTTYPE, ROLE_TYPE, TARGET_TYPE } from "@/libs/Types/Enums";

export type BuffStat = BuffStatStatic | BuffStatBuff;

export type BuffStatStatic = BuffEffect & {
	isBuff: undefined;
	chance: undefined;
};
export interface BuffStatBuff {
	on: BuffTrigger;
	if: BuffTrigger;

	body: ACTOR_BODY_TYPE[];
	class: ACTOR_CLASS[];
	role: ROLE_TYPE[];
	target: TARGET_TYPE;

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
		attr: BUFF_ATTR_TYPE;
	}>,

	maxStack: number;
}
