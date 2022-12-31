import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import UnitCard from "@/components/unit-card";
import UnitFace from "@/components/unit-face";

interface UnitReferenceProps {
	r: string;
}

const UnitReference: FunctionalComponent<UnitReferenceProps> = (props) => {
	const unit = props.r;

	return <Loader
		json={ StaticDB.FilterableUnit } content={ ((): preact.VNode => {
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

			const found = FilterableUnitDB.find(x => x.uid === unit);
			if (!found) {
				return <Link href={ `/units/${unit}` }>
					<span class="badge bg-substory">
						<Locale plain k={ `UNIT_${unit}` } />
						<Icon icon="link-45deg" class="ms-1" />
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
						<Icon icon="link-45deg" class="ms-1" />
					</span>
				</BootstrapTooltip>
				<div class="preload-area">
					<UnitFace uid={ unit } />
				</div>
			</Link>;
		}) }
		loading={ <Link href={ `/units/${unit}` }>
			<span class="badge bg-substory">
				<Locale plain k={ `UNIT_${unit}` } />
				<Icon icon="link-45deg" class="ms-1" />
			</span>
		</Link> }
	/>;
};
export default UnitReference;
