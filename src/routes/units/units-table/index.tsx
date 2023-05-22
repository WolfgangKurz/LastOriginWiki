import { FunctionalComponent } from "preact";

import Store from "@/store";

import { ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/types/Enums";
import { UnitsListProps } from "../";

import { RarityDisplay } from "@/libs/Const";
import { ArrayElse, isActive } from "@/libs/Functions";
import { objState } from "@/libs/State";

import Locale from "@/components/locale";
import UnitBadge from "@/components/unit-badge";
import UnitCard from "@/components/unit-card";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";

// import style from "./style.scss";
import "./style.scss";

const RarityList: ACTOR_GRADE[] = [
	ACTOR_GRADE.B,
	ACTOR_GRADE.A,
	ACTOR_GRADE.S,
	ACTOR_GRADE.SS,
];

const TypeList: ACTOR_CLASS[] = [
	ACTOR_CLASS.LIGHT,
	ACTOR_CLASS.AIR,
	ACTOR_CLASS.HEAVY,
];

const RoleList: ROLE_TYPE[] = [
	ROLE_TYPE.ATTACKER,
	ROLE_TYPE.DEFENDER,
	ROLE_TYPE.SUPPORTER,
];

const UnitsTable: FunctionalComponent<UnitsListProps> = (props) => {
	const PromotionFilter = objState<0 | 1 | 2>(0);

	function UnitList (rarity: ACTOR_GRADE, type: ACTOR_CLASS, role: ROLE_TYPE): FilterableUnit[] {
		return props.list
			.filter(x => {
				const rarityMatch = PromotionFilter.value === 1
					? (x.rarity === rarity) || (x.promo && x.promo.includes(rarity))
					: PromotionFilter.value === 2
						? x.promo && x.promo.includes(rarity)
						: x.rarity === rarity;

				return rarityMatch && x.type === type && x.role === role;
			});
	}

	return <div class="unit-table">
		{/* <div class="mb-2">
				<div class="btn-group mx-2 mb-2">
					<button
						class={ `btn btn-outline-secondary ${isActive(PromotionFilter.value === 0)}` }
						onClick={ (): void => PromotionFilter.set(0) }
					>
						<Locale k="UNIT_TABLE_FILTERS_PROMOTION_NEVER" />
					</button>
					<button
						class={ `btn btn-outline-secondary ${isActive(PromotionFilter.value === 1)}` }
						onClick={ (): void => PromotionFilter.set(1) }
					>
						<Locale k="UNIT_TABLE_FILTERS_PROMOTION_WITH" />
					</button>
					<button
						class={ `btn btn-outline-secondary ${isActive(PromotionFilter.value === 2)}` }
						onClick={ (): void => PromotionFilter.set(2) }
					>
						<Locale k="UNIT_TABLE_FILTERS_PROMOTION_ONLY" />
					</button>
				</div>
			</div> */}

		{ TypeList.map(type => Store.Units.Type[type].value
			? <table class="table table-sm unit-table mb-3">
				<thead class="thead-dark">
					<tr>
						<th colSpan={ 4 }>
							<UnitBadge type={ type } transparent size="large" />
						</th>
					</tr>
					<tr>
						<th>
							<Locale k="COMMON_UNIT_GRADE" />
						</th>

						{ RoleList
							.filter(role => Store.Units.Role[role].value)
							.map(role => <th>
								<UnitBadge role={ role } transparent size="large" />
							</th>) }
					</tr>
				</thead>
				<tbody>
					{ RarityList
						.filter(rarity => Store.Units.Rarity[rarity].value)
						.map(rarity => <tr>
							<th class={ `rarity-${RarityDisplay[rarity]}-force` }>{ RarityDisplay[rarity] }</th>

							{ RoleList
								.filter(role => Store.Units.Role[role].value)
								.map(role => <td>
									{ ArrayElse(
										UnitList(rarity, type, role),
										x => <>{
											x.map(unit => <UnitCard.Horizontal
												class="unit-list-item"
												unit={ unit }
												rarity={ rarity }
											// onClick={ (): void => void (route(`/units/${unit.uid}`)) }
											/>)
										}</>,
										<span class="text-secondary">
											<Locale k="UNIT_TABLE_EMPTY" />
										</span>,
									) }
								</td>) }
						</tr>) }
				</tbody>
			</table>
			: <></>) }
	</div>;
};
export default UnitsTable;
