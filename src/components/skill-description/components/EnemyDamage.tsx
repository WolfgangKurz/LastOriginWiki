import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import { ElemType } from "@/types/DescriptionType";

import Locale from "@/components/locale";
import ElemIcon from "@/components/elem-icon";
import { Section } from "./Section";

import style from "./style.module.scss";

interface EnemyDamageProps {
	multiplier: number;
	rate?: string;

	elem?: ElemType;
}

const elemTable: Record<string, "" | "physics" | "fire" | "ice" | "lightning"> = {
	"": "",

	fire: "fire",

	ice: "ice",
	chill: "ice",

	thunder: "lightning",
	lightning: "lightning",
	electric: "lightning",

	physics: "physics",
};
const elDisp = {
	physics: <Locale k="COMMON_ELEM_PHYSICS" />,
	fire: <Locale k="COMMON_ELEM_FIRE" />,
	ice: <Locale k="COMMON_ELEM_ICE" />,
	lightning: <Locale k="COMMON_ELEM_ELECTRIC" />,
};

export const EnemyDamage: FunctionalComponent<EnemyDamageProps> = (props) => {
	const v = new Decimal(props.multiplier)
		.toFixed(10)
		.replace(/\.?0+$/, "");
	const r = new Decimal(props.rate || "0")
		.toFixed(10)
		.replace(/\.?0+$/, "");

	const el = elemTable[props.elem || "physics"];

	let elNode: preact.VNode | undefined;
	if (el) elNode = elDisp[el];

	return <Section typ="dmg">
		{ el && <ElemIcon elem={ el } inline /> }

		<Locale
			k="skill_description_damage_value"
			p={ [
				<span class={ style.Damage }>
					<span>{ v }</span>
				</span>,
				elNode || <></>,
				<Section typ="cond">
					<Locale k="skill_description_damage_value_rate" p={ [r] } />
				</Section>,
			] }
		/>
	</Section >;
};
