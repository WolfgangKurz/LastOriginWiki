import { STAGE_SUB_TYPE } from "@/types/Enums";

export interface StoryMapSubstory {
	key: string;
	char: string;
	icon: string;
	list: Array<{
		key: string;
		icon: string;
		dialog: string;
	}>;
}

export interface StoryMapData {
	key: string;
	type: STAGE_SUB_TYPE;
	text: string;
	index: Record<string, string>;
}

export default interface StoryMap {
	[map: string]: {
		[sub: string]: {
			substory: StoryMapSubstory[];
			list: StoryMapData[];
		};
	};
}
