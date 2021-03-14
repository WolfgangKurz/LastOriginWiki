import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import Locale from "@/components/locale";
import JsonLoader, { GetJson, StaticDB } from "@/libs/JsonLoader";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import UnitCard from "@/components/unit-card";
import Icon from "@/components/bootstrap-icon";
import UnitFace from "@/components/unit-face";

interface UnitReferenceProps {
	r: string;
}

const UnitReference: FunctionalComponent<UnitReferenceProps> = (props) => {
	const unit = props.r;

	return JsonLoader(
		StaticDB.FilterableUnit,
		() => {
			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);

			const found = FilterableUnitDB.find(x => x.uid === unit);
			if (!found) {
				return <Link href={ `/units/${unit}` }>
					<span class="badge bg-substory">
						<Locale k={ `UNIT_${unit}` } />
						<Icon icon="link-45deg" class="ms-1" />
					</span>
				</Link>;
			}

			return <Link href={ `/units/${unit}` } >
				<BootstrapTooltip
					placement="top"
					content={ <UnitCard.Card
						unit={ found }
						rarity={ found.rarity }
						no-link
					/> }
				>
					<span class="badge bg-substory mx-1">
						<Locale k={ `UNIT_${unit}` } />
						<Icon icon="link-45deg" class="ms-1" />
					</span>
				</BootstrapTooltip>
				<div class="preload-area">
					<UnitFace uid={ unit } />
				</div>
			</Link>;
		},
		<Link href={ `/units/${unit}` }>
			<span class="badge bg-substory">
				<Locale k={ `UNIT_${unit}` } />
				<Icon icon="link-45deg" class="ms-1" />
			</span>
		</Link>,
	);
};
export default UnitReference;
