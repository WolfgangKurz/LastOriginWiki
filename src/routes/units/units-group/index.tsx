import { FunctionalComponent, h } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { UnitsListProps } from "../";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { groupBy, isActive } from "@/libs/Functions";

import Locale, { LocaleGet } from "@/components/locale";
import UnitCard from "@/components/unit-card";

import "./style.scss";

const UnitsGroup: FunctionalComponent<UnitsListProps> = (props) => {
	const imageExt = ImageExtension();

	const Merge = objState<boolean>(false);

	const GroupKeyTable = ((): Record<string, string> => {
		const g = groupBy(props.list, x => LocaleGet(`UNIT_GROUP_${Merge.value ? x.shortgroup : x.group}`));
		const r: Record<string, string> = {};
		for (const k in g) r[k] = g[k][0].shortgroup;
		return r;
	})();

	const GroupedList = ((): Record<string, FilterableUnit[]> => {
		const list = props.list;

		const g = groupBy(list, x => LocaleGet(`UNIT_GROUP_${Merge.value ? x.shortgroup : x.group}`));
		const r: Record<string, FilterableUnit[]> = {};
		Object.keys(g)
			.sort()
			.forEach(k => (r[k] = g[k]));
		return r;
	})();

	return <div class="unit-group">
		<div class="mb-4">
			<div class="btn-group">
				<button class={ `btn btn-outline-secondary ${isActive(Merge.value)}` } onClick={ (): void => Merge.set(!Merge.value) }>
					<Locale k="UNIT_GROUP_MERGE_SUBGROUP" />
				</button>
			</div>
		</div>

		{ Object.keys(GroupedList).map(group => <div class="container unit-group mb-3">
			<div class="row text-center">
				<div class="col-12 col-lg-2 col-md-3 bg-dark text-light">
					<img src={ `${AssetsRoot}/${imageExt}/group/${GroupKeyTable[group]}.${imageExt}` } />
					<div>
						<Locale k={ group } />
					</div>
				</div>
				<div class="col-12 col-lg-10 col-md-9">
					<div class="row row-cols-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3">
						{ GroupedList[group].map(unit => <div class="col unit-list-item">
							<UnitCard.Card unit={ unit } />
						</div>) }
					</div>
				</div>
			</div>
		</div>) }
	</div>;
};
export default UnitsGroup;
