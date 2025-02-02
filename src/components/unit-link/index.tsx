import preact, { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Locale from "@/components/locale";
import { StaticDB, useDBData } from "@/libs/Loader";
import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import UnitFace from "@/components/unit-face";
import UnitCard from "@/components/unit-card";

interface UnitLinkProps {
	uid: string;
}

const UnitLink: FunctionalComponent<UnitLinkProps> = (props) => {
	const id = props.uid;

	const FilterableUnit = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	if (!FilterableUnit) return <span class="badge bg-info">{ id }</span>;

	const unit = FilterableUnit.find(x => x.uid === id);
	if (!unit) return <span class="badge bg-info">{ id }</span>;
	return <Link href={ `/units/${id}` }>
		<BootstrapTooltip
			placement="top"
			content={ <UnitCard
				class="text-center"
				unit={ unit }
				rarity={ unit.rarity }
				no-link
			/> }
		>
			<span class="badge bg-primary mx-1">
				<Locale plain k={ `UNIT_${id}` } />
				<Icons.Link45deg class="ms-1" />
			</span>
		</BootstrapTooltip>
		<div class="preload-area">
			<UnitFace uid={ id } />
		</div>
	</Link>;
};
export default UnitLink;
