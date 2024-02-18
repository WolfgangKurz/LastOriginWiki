import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { UnitsListProps } from "../";

import { groupBy } from "@/libs/Functions";

import Locale from "@/components/locale";
import UnitCard from "@/components/unit-card";

import "./style.scss";
import Badge from "@/components/Badge";

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
		<div class="text-center">
			<div class="d-inline-block alert alert-primary">
				<Badge class="me-2" variant="danger">
					@deprecated
				</Badge>
				This page will be removed in the future.
			</div>
		</div>

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
						<div class="row row-cols-1 row-cols-lg-8 row-cols-md-6 row-cols-sm-4 justify-content-center">
							{ TimeList[time].map(unit => <div class="col">
								<UnitCard class="unit-list-item text-center" unit={ unit } />
							</div>) }
						</div>
					</td>
				</tr>) }
			</tbody>
		</table>
	</div>;
};
export default UnitsTimetable;
