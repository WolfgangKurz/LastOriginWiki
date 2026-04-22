import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import { ElemType } from "@/types/DescriptionType";

import Locale from "@/components/locale";
import ElemIcon from "@/components/elem-icon";
import { Section } from "./Section";

import style from "./style.module.scss";
import { useMemo } from "preact/hooks";

interface DamageProps {
	multiplier: number;
	bonus?: number;

	elem?: ElemType | ElemType[];
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
	const bonus = useMemo(() => Decimal.div(props.bonus || 0, 100), [props.bonus]);
	const numBonus = useMemo(() => bonus.toNumber(), [bonus]);

	const v = useMemo(
		() => Decimal.add(props.multiplier, bonus)
			.toFixed(10)
			.replace(/\.?0+$/, ""),
		[props.multiplier, bonus],
	);
	const valueHelp = useMemo(
		() => !bonus.isZero()
			? <span class="badge bg-success ms-1">
				▲ { bonus.toNumber() }
			</span>
			: undefined,
		[bonus],
	);

	const normEls = useMemo(() => Array.isArray(props.elem) && props.elem.length === 1 ? props.elem[0] : props.elem, [props.elem]);
	const els = useMemo(
		() => !props.elem
			? [elemTable[""]]
			: (Array.isArray(props.elem) ? props.elem : [props.elem])
				.map(r => elemTable[r]),
		[props.elem],
	);
	const elNodes = useMemo(
		() => els
			.map(v => elDisp[v])
			.gap(<>・</>),
		[els],
	);
	const elIcons = useMemo(
		() => els
			.map(el => el && <ElemIcon elem={ el } inline />)
			.filter(el => el),
		[els],
	);

	return <Section typ="dmg">
		{ elIcons }

		<Locale
			k={ Array.isArray(normEls) ? "skill_description_adaptive_damage" : "skill_description_damage" }
			p={ [
				<span class={ style.Damage }>
					<span data-bonus={ numBonus }>{ v }</span>
					{ valueHelp }
				</span>,
				<>{ elNodes }</>,
			] }
		/>
	</Section >;
};
