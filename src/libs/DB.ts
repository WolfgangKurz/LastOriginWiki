import UnitDialogueDB from "@/json/unit-dialogue.json";
import ExpDB from "@/json/exp.json";
import StoryDB from "@/json/story.json";

import {
	RawUnitDialogue,
	ExpRaw, StoryRaw,
} from "@/libs/Types";

export const UnitDialogueData: RawUnitDialogue = UnitDialogueDB;
export const ExpData: ExpRaw = ExpDB;
export const StoryData: StoryRaw[] = StoryDB;
