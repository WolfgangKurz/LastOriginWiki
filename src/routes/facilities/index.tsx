import { FunctionalComponent, h } from "preact";

import { FilterableFacility } from "@/types/DB/Facility.Filterable";

import { objState } from "@/libs/State";
import JsonLoader, { GetJson, StaticDB } from "@/libs/JsonLoader";
import { isActive } from "@/libs/Functions";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import FacilityCard from "./components/facility-card";
import Locale, { LocaleGet } from "@/components/locale";

const Facilities: FunctionalComponent = () => {
	const Filters = {
		BioroidMaking: objState<boolean>(true),
		Cafeteria: objState<boolean>(true),
		Equipment: objState<boolean>(true),
		EXP: objState<boolean>(true),
		FacilityResource: objState<boolean>(true),
		FacilityUpgrade: objState<boolean>(true),
		Resource: objState<boolean>(true),
		WorkshopResource: objState<boolean>(true),
	};

	SetMeta(["description", "twitter:description"], "기지 설비의 목록을 표시합니다.");
	SetMeta(["twitter:image", "og:image"], null);

	UpdateTitle(LocaleGet("MENU_FACILITIES"));

	return JsonLoader(
		StaticDB.FilterableFacility,
		() => {
			const FilterableFacilityDB = GetJson<FilterableFacility[]>(StaticDB.FilterableFacility);
			const Facilities = FilterableFacilityDB
				.filter(x => Filters[x.type].value)
				.sort((a, b) => a.uid < b.uid ? -1 : a.uid > b.uid ? 1 : 0);

			return <div class="facilities">
				<div class="card mb-4">
					<div class="card-body">
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.BioroidMaking.value)}` }
							onClick={ (): void => Filters.BioroidMaking.set(!Filters.BioroidMaking.value) }
						>
							<Locale k="FACILITY_FILTER_BioroidMaking" />
						</button>
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.Cafeteria.value)}` }
							onClick={ (): void => Filters.Cafeteria.set(!Filters.Cafeteria.value) }
						>
							<Locale k="FACILITY_FILTER_Cafeteria" />
						</button>
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.Equipment.value)}` }
							onClick={ (): void => Filters.Equipment.set(!Filters.Equipment.value) }
						>
							<Locale k="FACILITY_FILTER_Equipment" />
						</button>
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.EXP.value)}` }
							onClick={ (): void => Filters.EXP.set(!Filters.EXP.value) }
						>
							<Locale k="FACILITY_FILTER_EXP" />
						</button>
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.FacilityResource.value)}` }
							onClick={ (): void => Filters.FacilityResource.set(!Filters.FacilityResource.value) }
						>
							<Locale k="FACILITY_FILTER_FacilityResource" />
						</button>
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.FacilityUpgrade.value)}` }
							onClick={ (): void => Filters.FacilityUpgrade.set(!Filters.FacilityUpgrade.value) }
						>
							<Locale k="FACILITY_FILTER_FacilityUpgrade" />
						</button>
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.Resource.value)}` }
							onClick={ (): void => Filters.Resource.set(!Filters.Resource.value) }
						>
							<Locale k="FACILITY_FILTER_Resource" />
						</button>
						<button
							class={ `btn btn-outline-primary m-1 ${isActive(Filters.WorkshopResource.value)}` }
							onClick={ (): void => Filters.WorkshopResource.set(!Filters.WorkshopResource.value) }
						>
							<Locale k="FACILITY_FILTER_WorkshopResource" />
						</button>
					</div>
				</div>
				<div class="row row-cols-5 row-cols-md-4 row-cols-sm-3">
					{ Facilities.map((fac, key) => <div class="col">
						<FacilityCard class="mb-4" facility={ fac } />
					</div>) }
				</div>
			</div>;
		},
	);
};
export default Facilities;
