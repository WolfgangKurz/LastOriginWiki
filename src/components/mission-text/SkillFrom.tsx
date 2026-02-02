import { FunctionalComponent } from "preact";

import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { StaticDB, useDBData } from "@/libs/Loader";

import Loading from "@/components/loading";
import UnitReference from "@/components/unit-reference";
import EnemyReference from "@/components/enemy-reference";

interface SkillFromProps {
	r: string;
}

const SkillFrom: FunctionalComponent<SkillFromProps> = (props) => {
	const FilterableUnit = useDBData<FilterableUnit[]>(StaticDB.FilterableUnit);
	const FilterableEnemy = useDBData<FilterableEnemy[]>(StaticDB.FilterableEnemy);
	const SkillFrom = useDBData<Record<string, string>>(StaticDB.SkillFrom);
	if (!FilterableUnit || !FilterableEnemy || !SkillFrom) return <Loading.Data />;

	if (props.r in SkillFrom) {
		const t = SkillFrom[props.r];

		if (FilterableUnit.some(f => f.uid === t))
			return <UnitReference r={ t } />;

		if (FilterableEnemy.some(f => f.id === t || `MOB_MP_${f.id}` === t))
			return <EnemyReference r={ t } />;

		return <span class="badge bg-danger">{ t }</span>;
	}
	return <span class="badge bg-danger">{ props.r }</span>;
};
export default SkillFrom;
