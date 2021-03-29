import { Fragment, FunctionalComponent, h } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import JsonLoader, { GetJson, StaticDB } from "@/libs/JsonLoader";
import { RarityDisplay } from "@/libs/Const";

import Locale from "@/components/locale";
import UnitFace from "@/components/unit-face";

import "./style.scss";

interface DropUnitProps {
	id: string | number;
	chance?: number;
}

const DropUnit: FunctionalComponent<DropUnitProps> = (props) => {
	const chance = props.chance || 100;

	return JsonLoader(
		StaticDB.FilterableUnit,
		() => {
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

			const unit = typeof props.id === "number"
				? FilterableUnitDB.find(x => x.id === props.id)
				: FilterableUnitDB.find(x => x.uid === props.id);

			return <div class="drop-unit p-2 text-dark">
				{ unit
					? <div class={ `card text-start rarity-${RarityDisplay[unit.rarity]}` }>
						<div class="card-body">
							<UnitFace class="float-start me-2" uid={ unit.uid } size="48" type="mini" />
							<div>
								<span class="badge bg-secondary me-1 bordered">{ RarityDisplay[unit.rarity] }</span>
								<span class="unit-info">
									<i class="unit-type" data-type={ unit.type } />
									<i class="unit-role" data-role={ unit.role } />
								</span>
							</div>
							<div class="float-start">
								<Locale k={ `UNIT_${unit.uid}` } />
							</div>
							{ chance < 100
								? <small class="ms-1 text-bold">({ chance }%)</small>
								: <Fragment />
							}
						</div>
					</div>
					: <Fragment />
				}
			</div>;
		},
	);
};
export default DropUnit;
