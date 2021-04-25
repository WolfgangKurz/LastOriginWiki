import { BuffEffect } from "@/types/BuffEffect";
import { BuffErase } from "@/types/BuffErase";
import { BuffTrigger } from "@/types/BuffTrigger";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ROLE_TYPE, TARGET_TYPE, NUM_OUTPUTTYPE, BUFF_OVERLAP_TYPE, BUFF_ATTR_TYPE } from "@/types/Enums";

/* eslint-disable camelcase */
export type BuffStat = BuffStatStatic | BuffStatBuff;

export type BuffStatStatic = BuffEffect & {
	isBuff: undefined;
	chance: undefined;
};
export interface BuffStatBuff {
	key: string;
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
			level: string;
		};
		erase: BuffErase;
		value: BuffEffect;
		overlap: BUFF_OVERLAP_TYPE;
		attr: BUFF_ATTR_TYPE;
	}>;

	maxStack: number;
}
