import { FunctionalComponent } from "preact";

import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import EntitySource from "@/libs/EntitySource";

import EquipIcon from "@/components/equip-icon";
import { LocaleGet } from "@/components/locale";
import SourceBadge from "@/components/source-badge";

import "./style.scss";

interface EquipCardProps {
	class?: string;
	equip: FilterableEquip;
	source?: EntitySource[];
	noLink?: boolean;
}

const EquipCard: FunctionalComponent<EquipCardProps> = (props) => {
	const equip = props.equip;

	const Name = LocaleGet(`EQUIP_${equip.fullKey}`)
		.replace(/ (RE|MP|SP|EX)$/, "");

	const Sources = (props.source || [])
		.reduce((p, c) => [...p, c], [] as EntitySource[]);

	return <div class={ `card my-1 equip-card bg-dark text-light ${props.class || ""}` }>
		<div class="card-header position-relative">
			<EquipIcon image={ equip.icon } size="big" />
			{ Sources.length > 0
				? <div class="equip-sources text-start">
					{ Sources.map(source => <SourceBadge class="mb-1" source={ source } minimum />) }
				</div>
				: <></> }
		</div>
		<div class="card-body">
			<div class="equip-name">{ Name }</div>
		</div>
	</div>;
};
export default EquipCard;
