import preact, { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import UnitFace from "@/components/unit-face";
import UnitCard from "@/components/unit-card";
import Loader, { GetJson, StaticDB } from "@/components/loader";

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
					unit={ unit }
					rarity={ unit.rarity }
					no-link
				/> }
			>
				<span class="badge bg-primary mx-1">
					<Locale k={ `UNIT_${id}` } />
					<Icon icon="link-45deg" class="ms-1" />
				</span>
			</BootstrapTooltip>
			<div class="preload-area">
				<UnitFace uid={ id } />
			</div>
		</Link>;
	} } />;
export default UnitLink;
