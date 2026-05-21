import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import { FilterableFacility } from "@/types/DB/Facility.Filterable";

import { isActive } from "@/libs/Functions";
import { assertDBData, StaticDB, useDBData } from "@/libs/Loader";
import { SetMeta, UpdateTitle } from "@/libs/Site";
import { useLocale } from "@/libs/Locale";

import Locale from "@/components/locale";
import Loading from "@/components/loading";
import FacilityCard from "./components/facility-card";

const Facilities: FunctionalComponent = () => {
	const [loc] = useLocale();

	const [filters, setFilters] = useState(() => ({
		BioroidMaking: true,
		Cafeteria: true,
		Equipment: true,
		EXP: true,
		FacilityResource: true,
		FacilityUpgrade: true,
		Resource: true,
		WorkshopResource: true,
	}));

	SetMeta(["description", "twitter:description"], "기지 설비의 목록을 표시합니다.");
	SetMeta(["twitter:image", "og:image"], null);

	UpdateTitle(loc["MENU_FACILITIES"]);

	const FilterableFacilityDB = useDBData<FilterableFacility[]>(StaticDB.FilterableFacility);
	if (!assertDBData(FilterableFacilityDB)) return <Loading.Data />;

	const Facilities = FilterableFacilityDB
		.filter(x => filters[x.type])
		.sort((a, b) => a.uid < b.uid ? -1 : a.uid > b.uid ? 1 : 0);

	function toggleFilter<T extends keyof typeof filters> (key: T) {
		setFilters(v => {
			const o = Object.assign({}, v);
			o[key] = !o[key];
			return o;
		});
	}

	return <div class="facilities">
		<div class="card mb-4">
			<div class="card-body">
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.BioroidMaking)}` }
					onClick={ () => toggleFilter("BioroidMaking") }
				>
					<Locale k="FACILITY_FILTER_BioroidMaking" />
				</button>
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.Cafeteria)}` }
					onClick={ () => toggleFilter("Cafeteria") }
				>
					<Locale k="FACILITY_FILTER_Cafeteria" />
				</button>
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.Equipment)}` }
					onClick={ () => toggleFilter("Equipment") }
				>
					<Locale k="FACILITY_FILTER_Equipment" />
				</button>
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.EXP)}` }
					onClick={ () => toggleFilter("EXP") }
				>
					<Locale k="FACILITY_FILTER_EXP" />
				</button>
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.FacilityResource)}` }
					onClick={ () => toggleFilter("FacilityResource") }
				>
					<Locale k="FACILITY_FILTER_FacilityResource" />
				</button>
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.FacilityUpgrade)}` }
					onClick={ () => toggleFilter("FacilityUpgrade") }
				>
					<Locale k="FACILITY_FILTER_FacilityUpgrade" />
				</button>
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.Resource)}` }
					onClick={ () => toggleFilter("Resource") }
				>
					<Locale k="FACILITY_FILTER_Resource" />
				</button>
				<button
					class={ `btn btn-outline-primary m-1 ${isActive(filters.WorkshopResource)}` }
					onClick={ () => toggleFilter("WorkshopResource") }
				>
					<Locale k="FACILITY_FILTER_WorkshopResource" />
				</button>
			</div>
		</div>
		<div class="row row-cols-5 row-cols-md-4 row-cols-sm-3">
			{ Facilities.map(fac => <div class="col">
				<FacilityCard class="mb-4" facility={ fac } />
			</div>) }
		</div>
	</div>;
};
export default Facilities;
