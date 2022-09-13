import { ROGUE_CELL_TYPE } from "@/types/Enums";
import { RawReward } from "@/types/Reward";

export default interface RoguelikeNode {
	key: string;
	icon: string;

	type: ROGUE_CELL_TYPE;
	grade: number;

	hp: number;

	trapCount: number;
	trapDamage: number;

	reqItem: string;
	reqRogueItem: string;
	reqEssences: number;
	rewardItem: RawReward[];
	rewardRogueItem: string;
	rewardEssences: number;

	effects: string[];
}
