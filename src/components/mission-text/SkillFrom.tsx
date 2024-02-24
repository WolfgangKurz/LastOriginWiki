import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import UnitReference from "@/components/unit-reference";
import EnemyReference from "@/components/enemy-reference";

interface SkillFromProps {
	r: string;
}

const SkillFrom: FunctionalComponent<SkillFromProps> = (props) => {
	return <Loader
		json={ [StaticDB.SkillFrom, StaticDB.FilterableUnit, StaticDB.FilterableEnemy] }
		content={ () => {
			const FilterableUnit = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEnemy = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);
			const SkillFrom = GetJson<Record<string, string>>(StaticDB.SkillFrom);

			if (props.r in SkillFrom) {
				const t = SkillFrom[props.r];

				if (FilterableUnit.some(f => f.uid === t))
					return <UnitReference r={ t } />;

				if (FilterableEnemy.some(f => f.id === t || `MOB_MP_${f.id}` === t))
					return <EnemyReference r={ t } />;

				return <span class="badge bg-danger">{ t }</span>;
			}
			return <span class="badge bg-danger">{ props.r }</span>;
		} }
	/>;
};
export default SkillFrom;
