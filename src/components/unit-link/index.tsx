import preact, { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Locale from "@/components/locale";
import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import IconLink45deg from "@/components/bootstrap-icon/icons/Link45deg";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import UnitFace from "@/components/unit-face";
import UnitCard from "@/components/unit-card";

interface UnitLinkProps {
	uid: string;
}

const UnitLink: FunctionalComponent<UnitLinkProps> = (props) =>
	<Loader json={ StaticDB.FilterableUnit } content={ (): preact.VNode => {
		const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

		const id = props.uid;
		const unit = FilterableUnit.find(x => x.uid === id);

		if (!unit)
			return <span class="badge bg-info">{ id }</span>;
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
					<IconLink45deg class="ms-1" />
				</span>
			</BootstrapTooltip>
			<div class="preload-area">
				<UnitFace uid={ id } />
			</div>
		</Link>;
	} } />;
export default UnitLink;
