import { FunctionalComponent } from "preact";
import { useLocation } from "preact-iso";

import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { assertDBData, StaticDB, useDBData } from "@/libs/Loader";

import Locale from "@/components/locale";
import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

interface EnemyReferenceProps {
	r: string;
}

const EnemyReference: FunctionalComponent<EnemyReferenceProps> = (props) => {
	const loc = useLocation();
	const enemy = props.r;
	const ImageExt = ImageExtension();

	const FilterableEnemyDB = useDBData<FilterableEnemy[]>(StaticDB.FilterableEnemy);
	if (!assertDBData(FilterableEnemyDB)) {
		return <a href={ `/enemies/${enemy}` }>
			<span class="badge bg-danger">
				<Locale k={ `ENEMY_${enemy}` } />
				<Icons.Link45deg class="ms-1" />
			</span>
		</a>;
	}

	const found = FilterableEnemyDB.find(x => x.id === enemy);
	if (!found) {
		return <a href={ `/enemies/${enemy}` }>
			<span class="badge bg-danger">
				<Locale k={ `ENEMY_${enemy}` } />
				<Icons.Link45deg class="ms-1" />
			</span>
		</a>;
	}

	return <a href={ `/enemies/${enemy}` } >
		<BootstrapTooltip
			placement="top"
			content={ <div>
				<img src={ `${AssetsRoot}/${ImageExt}/tbar/${found.icon}.${ImageExt}` } />
				<div class="my-1" style="font-size:0.8em;font-weight:bold">
					<Locale k={ `ENEMY_${found.id}` } />
				</div>

				<a href="#" class="stretched-link" onClick={ (e: Event): void => {
					e.preventDefault();
					loc.route(`/enemies/${enemy}`);
				} } />
			</div> }
		>
			<span class="badge bg-danger mx-1">
				<Locale k={ `ENEMY_${enemy}` } />
				<Icons.Link45deg class="ms-1" />
			</span>
		</BootstrapTooltip>
		<div class="preload-area">
			<img src={ `${AssetsRoot}/${ImageExt}/tbar/${found.icon}.${ImageExt}` } />
		</div>
	</a>;
};
export default EnemyReference;
