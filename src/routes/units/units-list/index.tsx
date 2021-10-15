import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { UnitsListProps } from "../";

import { objState } from "@/libs/State";
import { isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import UnitCard from "@/components/unit-card";

const UnitsList: FunctionalComponent<UnitsListProps> = (props) => {
	const Order = objState<"dict" | "name" | "rarity">("dict");
	const ShortName = objState<boolean>(false);

	const UnitList = ((): FilterableUnit[] => {
		const list = props.list;

		if (Order.value === "name") {
			if (ShortName.value)
				list.sort((x, y) => LocaleGet(`UNIT_SHORT_${x.uid}`) < LocaleGet(`UNIT_SHORT_${y.uid}`) ? -1 : 1);
			else
				list.sort((x, y) => LocaleGet(`UNIT_${x.uid}`) < LocaleGet(`UNIT_${y.uid}`) ? -1 : 1);
		} else if (Order.value === "rarity") {
			if (ShortName.value) {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: LocaleGet(`UNIT_SHORT_${x.uid}`) < LocaleGet(`UNIT_SHORT_${y.uid}`) ? -1 : 1,
				);
			} else {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: LocaleGet(`UNIT_${x.uid}`) < LocaleGet(`UNIT_${y.uid}`) ? -1 : 1,
				);
			}
		}
		return list;
	})();

	return <div class="unit-normal">
		<div class="btn-group mx-2 mb-2">
			<button class={ `btn btn-outline-danger ${isActive(Order.value === "dict")}` } onClick={ (): void => Order.set("dict") }>
				<Locale k="UNIT_NORMAL_ORDERBY_NO" />
			</button>
			<button class={ `btn btn-outline-danger ${isActive(Order.value === "name")}` } onClick={ (): void => Order.set("name") }>
				<Locale k="UNIT_NORMAL_ORDERBY_NAME" />
			</button>
			<button class={ `btn btn-outline-danger ${isActive(Order.value === "rarity")}` } onClick={ (): void => Order.set("rarity") }>
				<Locale k="UNIT_NORMAL_ORDERBY_GRADE" />
			</button>
		</div>

		<div class="btn-group mx-2 mb-2">
			<button
				class={ `btn btn-outline-secondary ${isActive(ShortName.value)}` }
				disabled={ Order.value === "dict" }
				onClick={ (): void => ShortName.set(!ShortName.value) }
			>
				<Locale k="UNIT_NORMAL_ORDERBY_SHORTNAME" />
			</button>
		</div>

		<div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-lg-6 row-cols-xl-8">
			{ UnitList.map(unit => <div class="col mt-3">
				<UnitCard unit={ unit } class={ !unit.group ? "invalid" : "" } shortName={ ShortName.value } />
			</div>) }
		</div>
	</div>;
};
export default UnitsList;
