import { DGTRIGGERTYPE, DLG_END_TRIGGER_TYPE, DLG_START_TRIGGER_TYPE, PCSTORYGROUP } from "@/types/Enums";

export interface SubStoryTroop {
	key: string;
	group: string; // icon & name
}

export interface SubStoryGroup {
	troop: string; // SubStoryTroop key
	key: string;
	type: PCSTORYGROUP;

	char: string; // uid
	skin: number; // sid

	group: string; // unit group
	story: string[]; // SubStoryStory key
}

export type SubStoryStoryTrigger<T extends 2 | 3> = {
	type: T extends 3 ? DLG_START_TRIGGER_TYPE : DLG_END_TRIGGER_TYPE;
	value: string;
} & (T extends 3 ? {
	sub: string;
} : {});

export interface SubStoryStory {
	group: string; // SubStoryGroup key
	key: string;
	order: number;

	char: string; // for char icon
	skin: number;

	triggerHidden: boolean;

	start: {
		dialog: string;
		trigger: {
			type: DGTRIGGERTYPE; // condition AND / OR
			trigger1: SubStoryStoryTrigger<3>;
			trigger2: SubStoryStoryTrigger<3>;
		};
	};
	stage: string;
	end: {
		dialog: string;
		trigger: SubStoryStoryTrigger<2>;
	};
}

export default interface SubStoryDB {
	troop: SubStoryTroop[];
	group: SubStoryGroup[];
	story: SubStoryStory[];
}
