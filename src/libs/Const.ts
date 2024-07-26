export * from "./Const.1";

export const WorldIds: string[] = [
	"Story", "Sub", "Cha",
	"Ev1", "Ev2", "Ev3", "Ev4", "Ev5", "Ev6", "EvA0", "Ev7", "Ev8", "Ev9", "Ev10",
	"Ev11", "Ev12", "Ev13", "Ev14", "Ev15", "Ev16", "Ev17", "Ev18", "Ev19", "Ev20",
	"Ev21", "Ev22", "Ev23", "Ev24", "Ev25",
];
export const SubStoryUnit: Record<string, string> = {
	"S1-1": "AGS_Rampart",
	"S1-2": "3P_ConstantiaS2",
	"S2-1": "3P_Sowan",
	"S5-1": "DS_Faucre",
	"S6-1": "DS_Baekto",
	"S7-1": "3P_Fenrir",
	"S8-1": "PECS_Circe",
	"S9-1": "3P_Hachiko",
	"S10-1": "AGS_Rampart",
	"S11-1": "3P_Aurora",
	"S12-1": "3P_CSPerrault",
	"S13-1": "3P_BlackLilith",
	"S14-1": "BR_Brownie",
	"S15-1": "AGS_RheinRitter",
	"S15-2": "AGS_RheinRitter",
};

export const PermanentEvents: string[] = ["Ev1", "Ev2", "Ev3", "Ev4", "Ev5", "Ev6", "Ev7", "Ev8", "Ev9"];
export const NewMapList: string[] = [];
export const CurrentEvent = "Ev25";
export const EventFrom = new Date(2024, 7 - 1, 9);
export const EventTo = new Date(2024, 8 - 1, 6);
