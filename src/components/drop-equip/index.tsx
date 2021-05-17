import { Fragment, FunctionalComponent, h } from "preact";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import { RarityDisplay } from "@/libs/Const";

import Locale from "@/components/locale";
import EquipIcon from "@/components/equip-icon";

import "./style.scss";

interface DropEquipProps {
	class?: string;

	equip: FilterableEquip;
	count?: number;
	chance?: number;
}

const DropEquip: FunctionalComponent<DropEquipProps> = (props) => {
	const count = props.count || 1;
	const chance = props.chance || 100;

	return <div class={ `drop-equip p-2 text-dark ${props.class || ""}` }>
		<div class={ `card rarity-${RarityDisplay[props.equip.rarity]}` }>
			<div class="card-body">
				<EquipIcon class="float-start me-2" image={ props.equip.icon } />
				<div class="text-start">
					<span class="badge bg-secondary me-1">{ RarityDisplay[props.equip.rarity] }</span>
					<Locale k={ `EQUIP_${props.equip.fullKey}` } />

					{ count > 1
						? <span class="badge bg-dark ms-1">x{ count }</span>
						: <Fragment />
					}
					{ chance < 100
						? <small class="ps-1 text-bold">({ chance }%)</small>
						: <Fragment />
					}
				</div>
			</div>
		</div>
	</div>;
};
export default DropEquip;
