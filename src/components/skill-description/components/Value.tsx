import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import style from "./style.module.scss";

interface ValueProps {
	base: number;
	per: number;
	level: number;
	ratio?: boolean;
	ratio2?: boolean;
	invert?: boolean;
	signless?: boolean;
	floor?: boolean;
}

export const Value: FunctionalComponent<ValueProps> = (props) => {
	let v = Decimal.add(props.base, Decimal.mul(props.per, props.level))
		.mul(props.ratio2 ? 10000 : props.ratio ? 100 : 1);

	const positive = v.isPositive();
	const sign = props.invert ? !positive : positive;

	const signFlag = v.isZero()
		? ""
		: sign ? "+" : "-";

	v = v.abs();
	if (props.floor) v = v.floor();

	return <span class={ style.Value } data-sign={ signFlag }>
		{ !props.signless ? signFlag : <></> }
		{ v.toFixed(10).replace(/\.?0+$/, "") }
		{ (props.ratio || props.ratio2) && "%" }
	</span>;
};
