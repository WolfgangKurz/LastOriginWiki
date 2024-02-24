import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import UnitReference from "@/components/unit-reference";
import EnemyReference from "@/components/enemy-reference";

interface RefernceProps {
	r: string;
}

const Refernce: FunctionalComponent<RefernceProps> = (props) => {
	const t = props.r;

	return <Loader
		json={ [StaticDB.FilterableUnit, StaticDB.FilterableEnemy] }
		content={ () => {
			const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEnemy = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

			if (FilterableUnit.some(f => f.uid === t || `Char_${f.uid}_N` === t))
				return <UnitReference r={ t.replace(/^Char_(.+)_N$/, "$1") } />;

			if (FilterableEnemy.some(f => f.id === t || `MOB_MP_${f.id}` === t))
				return <EnemyReference r={ t.replace(/^MOB_MP_(.+)$/, "$1") } />;

			return <span class="badge bg-secondary">{ t }</span>;
		} }
	/>;
};
export default Refernce;
