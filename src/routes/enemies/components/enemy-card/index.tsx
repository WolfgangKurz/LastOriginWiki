import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

import { FilterableEnemy } from "@/types/DB/Enemy.Filterable";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import "./style.scss";

interface EnemyCardProps {
	enemy: FilterableEnemy;
}

const imageExt = ImageExtension();
const EnemyCard: FunctionalComponent<EnemyCardProps> = (props) => {
	const enemy = props.enemy;
	const name = <Locale k={ `ENEMY_${enemy.id}` } />;

	// ${enemy.isBoss ? "danger" : "dark"}
	return <div class="card enemy-card position-relative my-1 bg-dark text-light">
		<img class="card-img-top" src={ `${AssetsRoot}/${imageExt}/tbar/${enemy.icon}.${imageExt}` } />
		<div class="additional-info text-start">
			{ enemy.isBoss
				? <span class="badge bg-danger info-badge">
					<Locale k="ENEMY_BOSS" />
				</span>
				: <></>
			}
			{ "NEW" in enemy.used
				? <span class="badge bg-light text-dark info-badge">
					<Locale k="ENEMY_NEW_ETERNALWAR" />
				</span>
				: <></>
			}
			{ Object.keys(enemy.used).length === 0
				? <span class="badge bg-secondary info-badge">
					<Locale k="ENEMY_VIEW_STAGE_NONE" />
				</span>
				: <></>
			}
		</div>

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

				<span class={ enemy.isBoss ? "fw-bold" : "" }>{ name }</span>
			</div>
		</div>

		<Link
			class="stretched-link enemy-strected"
			href={ `/enemies/${enemy.id}` }
		/>
	</div>;
};
export default EnemyCard;
