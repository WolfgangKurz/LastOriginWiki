import { FunctionalComponent } from "preact";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import { useLocale } from "@/libs/Locale";
import { StaticDB, useDBData } from "@/libs/Loader";

import Icons from "@/components/bootstrap-icon";
import BootstrapTooltip from "@/components/bootstrap-tooltip";
import RarityBadge from "@/components/rarity-badge";
import EquipCard from "@/components/equip-card";
import EquipIcon from "@/components/equip-icon";

import style from "./style.module.scss";

interface EquipProps {
	uid: string;

	onEquip?: (equip: FilterableEquip) => void;
}

export const Equip: FunctionalComponent<EquipProps> = (props) => {
	const [loc] = useLocale();

	const db = useDBData<FilterableEquip[]>(StaticDB.FilterableEquip);
	if (!db) return <></>;

	const equips = db.filter(x => x.fullKey === props.uid || x.fullKey.startsWith(props.uid));
	const equip = equips && equips[equips.length - 1];
	if (!equip) return <>{ props.uid }</>;

	const name = loc[`EQUIP_${equip.fullKey}`].replace(/ (RE|MP|SP|EX)$/, "");
	const k = equip.fullKey.replace(/_T[0-9]+$/, "");

	const href = `/equips/${equip.fullKey}`;

	return <>
		<a
			href={ href }
			onClick={ (e: Event): void => {
				e.preventDefault();
				e.stopPropagation();
				if (props.onEquip)
					props.onEquip(equip!);
			} }
		>
			<BootstrapTooltip
				placement="top"
				content={ <EquipCard class="text-center" equip={ equip } no-link /> }
			>
				<RarityBadge rarity="A">
					{ name || k } <Icons.Link45deg />
				</RarityBadge>
			</BootstrapTooltip>
		</a>
		<div class={ style.Preload }>
			<EquipIcon image={ equip.icon } />
		</div>
	</>;
};
