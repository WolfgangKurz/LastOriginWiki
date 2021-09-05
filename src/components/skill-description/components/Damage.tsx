import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import { ElemType } from "@/types/DescriptionType";

import Locale from "@/components/locale";
import ElemIcon from "@/components/elem-icon";
import { Section } from "./Section";

import style from "./style.module.scss";

interface DamageProps {
	multiplier: number;
	bonus?: number;

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

export const Damage: FunctionalComponent<DamageProps> = (props) => {
	const bonus = Decimal.div(props.bonus || 0, 100);

	const v = Decimal.add(props.multiplier, bonus)
		.toFixed(10)
		.replace(/\.?0+$/, "");
	const valueHelp = !bonus.isZero()
		? <span class="badge bg-success ms-1">
			▲ { bonus.toNumber() }
		</span>
		: undefined;

	const el = elemTable[props.elem || "physics"];

	let elNode: preact.VNode | undefined;
	if (el) elNode = elDisp[el];

	return <Section typ="dmg">
		{ el && <ElemIcon elem={ el } inline /> }

		<Locale
			k="skill_description_damage"
			p={ [
				<span class={ style.Damage }>
					<span data-bonus={ bonus.toNumber() }>{ v }</span>
					{ valueHelp }
				</span>,
				elNode || <></>,
			] }
		/>
	</Section >;
};
