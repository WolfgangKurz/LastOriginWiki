import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import "./style.scss";

interface EnemyCardProps {
	enemy: FilterableEnemy;
}

const EnemyCard: FunctionalComponent<EnemyCardProps> = (props) => {
	const enemy = props.enemy;

	const imageExt = ImageExtension();

	return <div class={ `card enemy-card position-relative my-1 bg-${enemy.isBoss ? "danger" : "dark"} text-light` }>
		<img class="card-img-top" src={ `${AssetsRoot}/${imageExt}/tbar/${enemy.icon}.${imageExt}` } />
		<div class="card-body">
			<div class="card-title">
				<div class="enemy-info">
					<RarityBadge rarity={ enemy.rarity } />
					<span>
						<span class="d-inline-block">
							<i class="enemy-type" data-type={ enemy.type } />
							<i class="enemy-role" data-role={ enemy.role } />
						</span>
					</span>
				</div>
				{ enemy.isBoss
					? <strong><Locale k={ `ENEMY_${enemy.id}` } /></strong>
					: <Locale k={ `ENEMY_${enemy.id}` } />
				}
			</div>
		</div>

		<Link
			class="stretched-link enemy-strected"
			href={ `/enemies/${enemy.id}` }
		/>
	</div>;
};
export default EnemyCard;