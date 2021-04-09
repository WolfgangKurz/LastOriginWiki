import { ROGUE_QUEST_OBJECT_TYPE } from "@/types/Enums";
import { RawReward } from "@/types/Reward";

export default interface RoguelikeQuest {
	key: string;
	no: number;
	grade: number;
	objType: ROGUE_QUEST_OBJECT_TYPE;
	objTypeSub: number;
	value: number;

	reward: RawReward[];
}
