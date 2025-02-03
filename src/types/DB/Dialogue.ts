
export type DialogueEntityType = "Intro" | "Join" | "SquadJoin" | "Leader" | "SortiePick" | "StageStart" | "Retreat" | "SearchStart" | "SearchEnd" | "BattleFocus" | "ActionApprove" | "SpSkill" | "SpSkill_1" | "SpSkill_2" | "SpSkill_3" | "SpSkill_4" | "SpSkill_5" | "SpSkill_6" | "SpSkill_7" | "SpSkill_8" | "SpSkill_9" | "Retire" | "Repair" | "Reinforce" | "ItemEquip" | "CoreLink" | "PresentGet" | "Login" | "Idle_01_01" | "Idle_01_02" | "Idle_01_03" | "SPIdle_01_01" | "Idle_02_01" | "Idle_03_01" | "Idle_04_01" | "SPIdle_02_01" | "Oath" | "OathIdle_01" | "MVP";
export type RawUnitDialogueEntity = {
	[key in DialogueEntityType]: string | string[];
};
export interface RawUnitDialogue {
	[key: string]: Partial<RawUnitDialogueEntity>; // Skin
}

export type UnitDialogueAudioType = "ko" | "jp"; // | "jpdmm";

export interface UnitDialogueDataType {
	KR: RawUnitDialogue | false | null;
	JP: RawUnitDialogue | false | null;
	EN: RawUnitDialogue | false | null;
	TC: RawUnitDialogue | false | null;
}
