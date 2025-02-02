import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import { StaticDB, useDBData } from "@/libs/Loader";
import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import UnitCard from "@/components/unit-card";
import UnitFace from "@/components/unit-face";

interface UnitReferenceProps {
	r: string;
}

const UnitReference: FunctionalComponent<UnitReferenceProps> = (props) => {
	const unit = props.r;

	const FilterableUnitDB = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!FilterableUnitDB) {
		return <Link href={ `/units/${unit}` }>
			<span class="badge bg-substory">
				<Locale plain k={ `UNIT_${unit}` } />
				<Icons.Link45deg class="ms-1" />
			</span>
		</Link>;
	}

	const found = FilterableUnitDB.find(x => x.uid === unit);
	if (!found) {
		return <Link href={ `/units/${unit}` }>
			<span class="badge bg-substory">
				<Locale plain k={ `UNIT_${unit}` } />
				<Icons.Link45deg class="ms-1" />
			</span>
		</Link>;
	}

	return <Link href={ `/units/${unit}` } >
		<BootstrapTooltip
			placement="top"
			content={ <UnitCard
				class="text-center"
				unit={ found }
				rarity={ found.rarity }
				no-link
			/> }
		>
			<span class="badge bg-substory mx-1">
				<Locale plain k={ `UNIT_${unit}` } />
				<Icons.Link45deg class="ms-1" />
			</span>
		</BootstrapTooltip>
		<div class="preload-area">
			<UnitFace uid={ unit } />
		</div>
	</Link>;
};
export default UnitReference;
