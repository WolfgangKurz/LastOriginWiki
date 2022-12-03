import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableFacility } from "@/types/DB/Facility.Filterable";

import Locale from "@/components/locale";
import FacilityIcon from "../facility-icon";

interface FacilityCardProps {
	class?: string;
	facility: FilterableFacility;
}

const FacilityCard: FunctionalComponent<FacilityCardProps> = (props) => {
	return <div class="card mb-4 facility-card">
		<div class="card-header">
			<Locale plain k={ `FACILITY_${props.facility.uid}` } />
		</div>
		<div class="card-body">
			<FacilityIcon facility={ props.facility } level={ 25 } />
		</div>

		<Link class="stretched-link" href={ `/facilities/${props.facility.uid}` } />
	</div>;
};
export default FacilityCard;
