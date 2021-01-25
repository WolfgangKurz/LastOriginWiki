/* eslint-disable camelcase */
export type AIFunc = "=" | "!" | ">" | "<" | ">=" | "<=";

export type AIPosPositive = "front" | "middle" | "back" | "upper" | "midrow" | "lower";
export type AIPosNegative = "!front" | "!middle" | "!back" | "!upper" | "!midrow" | "!lower";
export type AIPosSpecific = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type AIPosSpecificNested = AIPosSpecific | AIPosSpecific[];
export type AIPos = AIPosPositive | AIPosNegative | AIPosSpecificNested;
/* eslint-enable camelcase */

export type AITarget = "team" | "enemy" | "self" |
	"near" | "far" | "rand" |
	AIPosPositive |
	"light" | "air" | "heavy" |
	"attacker" | "defender" | "supporter" |
	"$AtkHighest" | "$HPHighest" | "$APHighest" | "$DefenseHighest" |
	"$HPLow" |
	1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface AICondition_Base {
	type: string;
}
interface AICondition_FuncBase extends AICondition_Base {
	func: AIFunc;
}

interface AICondition_Attacked extends AICondition_Base {
	type: "attacked";
}
interface AICondition_CanUse extends AICondition_Base {
	type: "canuse";
	skill: 1 | 2;
	filter?: AIFilter;
}
interface AICondition_CanUsePos extends AICondition_Base {
	type: "canusepos";
	skill: 1 | 2;
}
interface AICondition_HP extends AICondition_FuncBase {
	type: "hp";
	hp: number;
}
interface AICondition_Action extends AICondition_FuncBase {
	type: "action";
	action: number;
}
interface AICondition_Cri100 extends AICondition_Base {
	type: "cri100";
}
interface AICondition_Pos extends AICondition_Base {
	type: "pos";
	pos: AIPos;
}
interface AICondition_CanMove extends AICondition_Base {
	type: "canmove";
	to: AIPos;
}
interface AICondition_Exist extends AICondition_Base {
	type: "exist" | "!exist";
	who: AITarget | AITarget[][];
}
interface AICondition_Buff extends AICondition_Base {
	type: "buff" | "buff?";
	negative?: boolean;
	buff: string | string[];
}
export type AICondition = AICondition_Attacked | AICondition_CanUse | AICondition_CanUsePos | AICondition_HP | AICondition_Action | AICondition_Cri100 |
	AICondition_Pos | AICondition_CanMove | AICondition_Exist | AICondition_Buff;

export interface AIFilter {
	type: "row" | "count";
	func: AIFunc;
	cnt: number;
}

interface AIAction_Skill {
	skill: 1 | 2;
	filter?: AIFilter;
	to: AITarget[][];
}

interface AIAction_Move_CanUse {
	move: "canuse";
	skill: 1 | 2;
}
interface AIAction_Move_Pos {
	move: AIPosPositive;
}
type AIAction_Move = AIAction_Move_CanUse | AIAction_Move_Pos;

interface AIAction_Wait {
	wait: true;
}
export type AIAction = AIAction_Skill | AIAction_Move | AIAction_Wait;

export interface AIEntity {
	chance?: number;
	if?: AICondition[];
	act?: AIAction;
}
export interface AIGroup {
	chance?: number;
	list: AIEntity[];
}
export type AI = AIEntity | AIGroup;
