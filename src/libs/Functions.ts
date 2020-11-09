import RequireResource from "@/libs/DB/RequireResource";
import { LinkBonusType } from "@/libs/DB/Unit";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";
import Decimal from "decimal.js";

export function FormatNumber (num: number): string {
	if (num === 0) return num.toString();

	const reg = /(^[+-]?\d+)(\d{3})/;
	let n = num.toString();
	while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

	return n;
}

export function ArrayUnique<T, K> (source: T[]): T[];
export function ArrayUnique<T, K> (source: T[], comparer: (entity: T) => K): T[];
export function ArrayUnique<T, K> (source: T[], comparer?: (entity: T) => K): T[] {
	if (comparer) {
		interface KeyValuePair {
			key: K;
			value: T;
		}

		return source
			.reduce((acc, cur) => {
				const key = comparer(cur);
				if (!acc.some(x => x.key === key)) {
					acc.push({
						key: key,
						value: cur,
					});
				}
				return acc;
			}, [] as KeyValuePair[])
			.map(x => x.value);
	} else {
		return source.reduce((acc, cur) => {
			if (!acc.includes(cur)) acc.push(cur);
			return acc;
		}, [] as T[]);
	}
}

export function UpdateTitle (...title: string[]) {
	document.title = [...title, "멸망 전의 전술 교본"].join(" - ");
}

export function GetRequireResource (rarity: ACTOR_GRADE, type: ACTOR_CLASS, role: ROLE_TYPE, body: ACTOR_BODY_TYPE, fullLinkBonus: LinkBonusType) {
	const table = (() => {
		const o = RequireResource[rarity][type][role][body];
		return {
			metal: [...o.metal],
			nutrient: [...o.nutrient],
			power: [...o.power],
		};
	})();

	const discount = (x: number) => {
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
