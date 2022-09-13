import { SortieCost } from "@/libs/Const";
import { SortieCostBody } from "@/types/Cost";
import { LinkBonusType } from "@/types/DB/Unit";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, CURRENCY_TYPE, ROLE_TYPE } from "@/types/Enums";
import Decimal from "decimal.js";

export interface SortieCostResourceText {
	metal: [number, number, number, number, number, number];
	nutrient: [number, number, number, number, number, number];
	power: [number, number, number, number, number, number];
}

export function GetRequireResource (
	rarity: ACTOR_GRADE,
	type: ACTOR_CLASS,
	role: ROLE_TYPE,
	body: ACTOR_BODY_TYPE,
	fullLinkBonus: LinkBonusType,
): SortieCostResourceText {
	const table = ((): SortieCostResourceText => {
		const o = SortieCost[rarity][type][role][body as keyof SortieCostBody];
		return {
			metal: [...o[CURRENCY_TYPE.METAL]],
			nutrient: [...o[CURRENCY_TYPE.NUTRIENT]],
			power: [...o[CURRENCY_TYPE.POWER]],
		};
	})();

	const discount = (x: number): number => {
		switch (fullLinkBonus) {
			case "Cost_20":
				return Decimal.mul(x, 0.8)
					.ceil()
					.toNumber();
			case "Cost_25":
				return Decimal.mul(x, 0.75)
					.ceil()
					.toNumber();
			case "Cost_30":
				return Decimal.mul(x, 0.7)
					.ceil()
					.toNumber();
			case "Cost_35":
				return Decimal.mul(x, 0.65)
					.ceil()
					.toNumber();
		}
		return x;
	};

	table.metal[5] = discount(table.metal[5]);
	table.nutrient[5] = discount(table.nutrient[5]);
	table.power[5] = discount(table.power[5]);
	return table;
}