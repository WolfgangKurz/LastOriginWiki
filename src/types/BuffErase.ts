/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable camelcase */

import { BuffTrigger } from "./BuffTrigger";

/** 버프 삭제 조건 */
export enum BUFFEFFECT_ERASE_TYPE {
	/** 남은 라운드 */
	ROUND = 0,

	/** 남은 횟수 */
	COUNT = 1,

	/** 조건 발동 시 삭제 */
	TRIGGER = 2,

	/** 영구 */
	PERMANENT = 3,

	// __MAX__ = 4,
}

/** 계산된 버프 삭제 조건 */
export type BuffErase = BuffErase_Round | BuffErase_Count | BuffErase_Trigger | Record<string, never>/* {} */;

/**
 * 매 라운드 시작 시 `rounds` 감소, 0이 되면 삭제
 */
interface BuffErase_Round {
	rounds: number;
}

/**
 * `trigger`가 발동할 때에 `count` 감소, 0이 되면 삭제
 */
interface BuffErase_Count {
	count: number;
	trigger: BuffTrigger;
}

/**
 * - `rounds`가 존재하면 매 라운드 시작 시 `rounds` 감소, 0이 되면 삭제
 * - `trigger`가 발동하면 삭제
 */
interface BuffErase_Trigger {
	rounds?: number;
	until: BuffTrigger;
}
