import { Consumable } from "@/types/DB/Consumable";

import { FormatNumber } from "@/libs/Functions";

import Locale from "@/components/locale";
import ItemIcon from "@/components/item-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";

import style from "./style.module.scss";

interface ItemRewardProps {
	item: Consumable;
	count?: number;
}

const ItemReward: FunctionalComponent<ItemRewardProps> = (props) => {
	return <BootstrapTooltip
		content={ <div>
			<Locale k={ `CONSUMABLE_${props.item.key}` } />

			{ props.count !== undefined && props.count > 1
				? <div class={ style.ItemCount }>
					x { FormatNumber(props.count) }
				</div>
				: <></>
			}
		</div> }
	>
		<div class={ style.ItemReward }>
			<ItemIcon item={ props.item.icon } />

			{ props.count !== undefined && props.count > 1
				? <div class={ style.ItemCount }>
					{ FormatNumber(props.count) }
				</div>
				: <></>
			}
		</div>
	</BootstrapTooltip>;
};
export default ItemReward;
