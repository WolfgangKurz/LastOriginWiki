import { FunctionalComponent } from "preact";

import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { EnemyGroupEnetity } from "@/types/DB/EnemyGroup";

import { objState } from "@/libs/State";
import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Loader, { StaticDB, GetJson } from "@/components/loader";
import Locale from "@/components/locale";
import EnemyPopup from "@/components/popup/enemy-popup";

import style from "./style.scss";

interface EnemyGroupCardProps {
	group: EnemyGroupEnetity;
}

const EnemyGroupCard: FunctionalComponent<EnemyGroupCardProps> = (props) => {
	const { group } = props;

	const ImageExt = ImageExtension();

	const selectedEnemy = objState<FilterableEnemy | null>(null);
	const selectedEnemyLevel = objState(1);

	return <Loader
		json={ StaticDB.FilterableEnemy }
		loading={ <div class={ style.GroupItem }>
			<div class={ style.GroupGrid }>
				{ new Array(9).fill(<i />) }
			</div>
			<div>
				<Locale k="ENEMY_GROUP_EXP" p={ ["-"] } />
			</div>
			<div>
				<small class={ style.GroupId }>-</small>
			</div>
		</div> }
		content={ (): preact.VNode => {
			const FilterableEnemyDB = GetJson<FilterableEnemy[]>(StaticDB.FilterableEnemy);

			return <div class={ style.GroupItem }>
				<div class={ style.GroupGrid }>
					{ group.grid.map(e => {
						if (e) {
							const enemy = FilterableEnemyDB.find(y => y.id === e.id);
							if (!enemy) return <span title={ e.id }>?</span>;

							return <img
								src={ `${AssetsRoot}/${ImageExt}/tbar/${enemy.icon}.${ImageExt}` }
								title={ e.id }
								onClick={ (ev): void => {
									ev.preventDefault();
									selectedEnemyLevel.set(e.lv);
									selectedEnemy.set(enemy);
								} }
							/>;
						}
						return <span />;
					}) }
				</div>
				<div>
					<Locale k="ENEMY_GROUP_EXP" p={ [group.exp] } />
				</div>
				<div>
					<small class={ style.GroupId }>{ group.id.replace(/^BATTLE_/, "") }</small>
					<small>
						{ group.id.includes("Ex-") && <div class="badge bg-danger ms-1">Ex</div> }
						{ group.id.includes("C-") && <div class="badge bg-danger ms-1">C</div> }
						{ group.id.includes("B-") && <div class="badge bg-success ms-1">B</div> }
						{ !group.id.includes("Rog-") && group.id.includes("-Boss") && <div class="badge bg-dark ms-1">BOSS</div> }
					</small>
				</div>

				<EnemyPopup
					enemy={ selectedEnemy.value }
					level={ selectedEnemyLevel.value }
					display
					asSub
					onHidden={ (): void => selectedEnemy.set(null) }
				/>
			</div>;
		} }
	/>;
};
export default EnemyGroupCard;