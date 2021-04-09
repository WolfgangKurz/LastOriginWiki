import { Fragment, FunctionalComponent, h } from "preact";

import { FormatNumber } from "@/libs/Functions";

import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";

import "./style.scss";

interface EssenceBadgeProps {
	count: number;
	refund?: boolean;
}

const EssenceBadge: FunctionalComponent<EssenceBadgeProps> = (props) => {
	const count = props.count || 1;

	return <div class="essence-badge p-2 text-dark" data-count={ count }>
		<div class={ "card bg-danger text-light" }>
			<div class="card-body">
				<EquipIcon class="float-start me-2" image={ "UI_Icon_Consumable_RoguePoint" } />
				<div class="text-start">
					<Locale k="ROGUELIKE_ESSENCE" />
					<span class="badge bg-dark ms-1">x{ FormatNumber(count) }</span>
				</div>
				{ props.refund
					? <div class="text-end">
						<small>
							* <Locale k="ROGUELIKE_NODE_REWARD_REFUND" />
						</small>
					</div>
					: <Fragment />
				}
			</div>
		</div>
	</div>;
};
export default EssenceBadge;
