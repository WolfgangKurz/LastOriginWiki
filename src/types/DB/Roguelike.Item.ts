export default interface RoguelikeItem {
	key: string;
	type: number;

	consumableKey: string;
	consumableCount: number;

	limitEffect: string;

	packageKey: string[];
	packageCount: number[];

	grade: number;
	countLimit: number;

	useType: number;
	invenUse: number;

	needType: number;
	needPrice: number;

	imgName: string;
	typeImgName: string;
}
