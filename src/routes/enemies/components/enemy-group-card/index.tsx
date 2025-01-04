import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";
import { EnemyGroupEnetity, EnemyGroupMap } from "@/types/DB/EnemyGroup";

import { StaticDB, useDBData } from "@/libs/Loader";
import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Locale from "@/components/locale";
import Loading from "@/components/loading";
import EnemyPopup from "@/components/popup/enemy-popup";

import style from "./style.module.scss";

interface EnemyGroupCardProps {
	drops: EnemyGroupMap;
	enemies: EnemyGroupMap;
	group: EnemyGroupEnetity;
}

const EnemyGroupCard: FunctionalComponent<EnemyGroupCardProps> = (props) => {
	const { group } = props;

	const ImageExt = ImageExtension();

	const [selectedEnemy, setSelectedEnemy] = useState<FilterableEnemy | null>(null);
	const [selectedEnemyLevel, setSelectedEnemyLevel] = useState(1);

	const FilterableEnemyDB = useDBData<FilterableEnemy[]>(StaticDB.FilterableEnemy);
	if (FilterableEnemyDB === undefined) {
		return <div class={ style.GroupItem }>
			<div class={ style.GroupGrid }>
				{ new Array(9).fill(<i />) }
			</div>
			<div>
				<Locale k="ENEMY_GROUP_EXP" p={ ["-"] } />
			</div>
			<div>
				<small class={ style.GroupId }>-</small>
			</div>
		</div>;
	}
	if (!FilterableEnemyDB) return <Loading.Error />;

	return <div class={ style.GroupItem }>
		<div class={ style.GroupGrid }>
			{ group.grid.map(e => {
				if (e !== 0) {
					const id = props.enemies[e[0]];
					const lv = e[1];

					const enemy = FilterableEnemyDB.find(y => y.id === id);
					if (!enemy) return <span title={ id }>?</span>;

					return <img
						src={ `${AssetsRoot}/${ImageExt}/tbar/${enemy.icon}.${ImageExt}` }
						title={ id }
						onClick={ (ev): void => {
							ev.preventDefault();
							setSelectedEnemyLevel(lv);
							setSelectedEnemy(enemy);
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
			enemy={ selectedEnemy }
			level={ selectedEnemyLevel }
			display
			asSub
			onHidden={ (): void => setSelectedEnemy(null) }
		/>
	</div>;
};
export default EnemyGroupCard;
