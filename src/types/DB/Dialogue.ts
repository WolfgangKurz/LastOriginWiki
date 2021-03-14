export interface RawUnitDialogueEntity {
	Join: string;
	SquadJoin: string;
	Leader: string;
	SortiePick: string;
	StageStart: string;
	Retreat: string;
	SearchStart: string;
	SearchEnd: string;
	BattleFocus: string;
	ActionApprove: string;

	/* eslint-disable camelcase */
	SpSkill: string;
	SpSkill_1: string;
	SpSkill_2: string;
	SpSkill_3: string;
	SpSkill_4: string;
	SpSkill_5: string;
	SpSkill_6: string;
	SpSkill_7: string;
	SpSkill_8: string;
	SpSkill_9: string;
	/* eslint-enable camelcase */

	Retire: string;
	Repair: string;
	Reinforce: string;
	ItemEquip: string;
	CoreLink: string;
	PresentGet: string;
	Login: string;

	/* eslint-disable camelcase */
	Idle_01_01: string;
	Idle_01_02: string;
	Idle_01_03: string;
	SPIdle_01_01: string;
	Idle_02_01: string;
	Idle_03_01: string;
	Idle_04_01: string;
	SPIdle_02_01: string;
	Oath: string;
	OathIdle_01: string;
	MVP: string;
	/* eslint-enable camelcase */
}
export interface RawUnitDialogue {
	[key: string]: Partial<RawUnitDialogueEntity>; // Skin
}

export interface UnitDialogueDataType {
	ko: RawUnitDialogue | false | null;
	jp: RawUnitDialogue | false | null;
}
