import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import { groupBy, isActive } from "@/libs/Functions";
import { assertDBData, StaticDB, useDBData } from "@/libs/Loader";

import Locale from "@/components/locale";
import Loading from "@/components/loading";
import EquipCard from "@/components/equip-card";

import "./style.scss";

const EquipTimetable: FunctionalComponent = () => {
	const [craftableOnly, setCraftableOnly] = useState(false);

	function CraftTime (time: string): string {
		const duration = parseInt(time, 10);

		const h = Math.floor(duration / 60).toString().padStart(2, "0");
		const m = (duration % 60).toString().padStart(2, "0");
		return `${h}:${m}:--`;
	}

	const list = useDBData<FilterableEquip[]>(StaticDB.FilterableEquip);
	if (!assertDBData(list)) return <Loading.Data />;

	const TimeList = groupBy(
		craftableOnly
			? list.filter(x => x.craft)
			: list,
		x => x.craft === false
			? "-"
			: Math.floor(x.craft / 60).toString(),
	);
	const SortedList = Object.keys(TimeList)
		.sort((a, b) => {
			if (a === "-") return -1;
			if (b === "-") return 1;

			const _a = parseInt(a, 10);
			const _b = parseInt(b, 10);
			return _a - _b;
		});

	return <div class="equip-time-table">
		<button
			class={ `btn btn-outline-danger mb-2 ${isActive(craftableOnly)}` }
			onClick={ (e): void => {
				e.preventDefault();
				setCraftableOnly(!craftableOnly);
			} }
		>
			<Locale k="EQUIP_CREATIONTIME_CRAFTABLEONLY" />
		</button>

		<table class="table table-striped equip-table mb-3">
			<thead class="thead-dark">
				<tr>
					<th><Locale k="EQUIP_CREATIONTIME_TIME" /></th>
					<th><Locale k="EQUIP_CREATIONTIME_EQUIP" /></th>
				</tr>
			</thead>
			<tbody>
				{ SortedList.map(time => <tr>
					<td class="align-middle p-2">
						{ time === "-"
							? <Locale k="EQUIP_TIME_NOCRAFT" />
							: CraftTime(time)
						}</td>
					<td>
						<div class="row row-cols-8 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 justify-content-center">
							{ TimeList[time].map(equip => <div class="col">
								<EquipCard class="unit-list-item" equip={ equip } />
							</div>) }
						</div>
					</td>
				</tr>) }
			</tbody>
		</table>
	</div>;
};
export default EquipTimetable;
