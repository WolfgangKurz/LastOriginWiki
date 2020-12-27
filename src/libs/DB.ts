import UnitDialogueDB from "@/json/unit-dialogue";
import ExpDB from "@/json/exp";
import StoryDB from "@/json/story";

import {
	RawUnitDialogue,
	ExpRaw, StoryRaw,
} from "@/libs/Types";

export const UnitDialogueData: RawUnitDialogue = UnitDialogueDB;
export const ExpData: ExpRaw = ExpDB;
export const StoryData: StoryRaw[] = StoryDB;
