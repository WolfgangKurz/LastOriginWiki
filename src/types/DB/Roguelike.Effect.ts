import { ROGUEEFFECTTYPE } from "@/types/Enums";

export default interface RoguelikeEffect {
	key: string;
	imgName: string;

	type: ROGUEEFFECTTYPE;
	overlap: number;

	grade: number;
	buffIndex: string[];
}
