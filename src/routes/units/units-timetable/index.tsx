import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { UnitsListProps } from "../";

import { groupBy } from "@/libs/Functions";

import Locale from "@/components/locale";
import UnitCard from "@/components/unit-card";

import "./style.scss";

const UnitsTimetable: FunctionalComponent<UnitsListProps> = (props) => {
	function CraftTime (time: string): string {
		const duration = parseInt(time, 10);

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return `${(`0${h}`).substr(-2)}:${(`0${m}`).substr(-2)}:${(`0${s}`).substr(-2)}`;
	}

	const TimeList = ((): Record<string | number, FilterableUnit[]> => {
		const units = props.list.filter(x => x.craft);
		return groupBy(units, x => x.craft as number);
	})();

	return <div class="unit-time-table">
		<table class="table table-striped unit-table mb-3">
			<thead class="thead-dark">
				<tr>
					<th><Locale k="UNIT_CREATIONTIME_TIME" /></th>
					<th><Locale k="UNIT_CREATIONTIME_UNIT" /></th>
				</tr>
			</thead>
			<tbody>
				{ Object.keys(TimeList).map(time => <tr>
					<td class="align-middle p-2">{ CraftTime(time) }</td>
					<td>
						<div class="row row-cols-1 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 justify-content-center">
							{ TimeList[time].map(unit => <div class="col">
								<UnitCard class="unit-list-item" unit={ unit } />
							</div>) }
						</div>
					</td>
				</tr>) }
			</tbody>
		</table>
	</div>;
};
export default UnitsTimetable;
