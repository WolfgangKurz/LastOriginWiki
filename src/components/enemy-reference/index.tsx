import { FunctionalComponent } from "preact";
import { Link, route } from "preact-router";

import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Loader, { GetJson, StaticDB } from "@/components/loader";
import Locale from "@/components/locale";
import Icon from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

interface EnemyReferenceProps {
	r: string;
}

const EnemyReference: FunctionalComponent<EnemyReferenceProps> = (props) => {
	const enemy = props.r;
	const ImageExt = ImageExtension();

	return <Loader
		json={ StaticDB.FilterableEnemy } content={ ((): preact.VNode => {
			const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

			const found = FilterableEnemyDB.find(x => x.id === enemy);
			if (!found) {
				return <Link href={ `/enemies/${enemy}` }>
					<span class="badge bg-danger">
						<Locale plain k={ `ENEMY_${enemy}` } />
						<Icon icon="link-45deg" class="ms-1" />
					</span>
				</Link>;
			}

			return <Link href={ `/enemies/${enemy}` } >
				<BootstrapTooltip
					placement="top"
					content={ <div>
						<img src={ `${AssetsRoot}/${ImageExt}/tbar/${found.icon}.${ImageExt}` } />
						<div class="my-1" style="font-size:0.8em;font-weight:bold">
							<Locale k={ `ENEMY_${found.id}` } />
						</div>

						<Link href="#" class="stretched-link" onClick={ (e: Event): void => {
							e.preventDefault();
							route(`/enemies/${enemy}`);
						} } />
					</div> }
				>
					<span class="badge bg-danger mx-1">
						<Locale plain k={ `ENEMY_${enemy}` } />
						<Icon icon="link-45deg" class="ms-1" />
					</span>
				</BootstrapTooltip>
				<div class="preload-area">
					<img src={ `${AssetsRoot}/${ImageExt}/tbar/${found.icon}.${ImageExt}` } />
				</div>
			</Link>;
		}) }
		loading={ <Link href={ `/enemies/${enemy}` }>
			<span class="badge bg-danger">
				<Locale plain k={ `ENEMY_${enemy}` } />
				<Icon icon="link-45deg" class="ms-1" />
			</span>
		</Link> }
	/>;
};
export default EnemyReference;
