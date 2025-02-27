import { FunctionalComponent } from "preact";
import Decimal from "decimal.js";

import style from "./style.module.scss";

interface ValueProps {
	base?: number;
	per?: number;
	level: number;
	ratio?: boolean;
	ratio2?: boolean;
	invert?: boolean;
	signless?: boolean;
	floor?: boolean;
	forcePN?: "p" | "n";
	detail?: boolean;
}

export const Value: FunctionalComponent<ValueProps> = (props) => {
	if (props.base !== undefined && props.per !== undefined) {
		let v = Decimal.add(props.base, Decimal.mul(props.per, props.level))
			.mul(props.ratio2 ? 10000 : props.ratio ? 100 : 1);

		const positive = v.isPositive();
		const sign = props.invert ? !positive : positive;

		const signFlag = props.forcePN
			? props.forcePN === "p"
				? "+"
				: "-"
			: v.isZero()
				? ""
				: sign
					? "+" : "-";

		v = v.abs();
		if (props.floor) v = v.floor();

		if (signFlag && !props.signless)
			v = v.abs();

		return <span class={ style.Value } data-sign={ signFlag }>
			{ !props.signless ? signFlag : <></> }
			{ v.toFixed(10).replace(/\.?0+$/, "") }
			{ (props.ratio || props.ratio2) && "%" }

			{ props.detail && <span class={ style.Detail }>
				({ [
					signFlag,
					Decimal(props.per).mul(props.ratio2 ? 10000 : props.ratio ? 100 : 1).toNumber(),
					(props.ratio || props.ratio2) && "%",
				] }/Lv.)
			</span> }
		</span>;
	} else if (props.forcePN) {
		const signFlag = props.forcePN === "p" ? "+" : "-";

		return <span class={ style.Value } data-sign={ signFlag }>
			{ !props.signless ? signFlag : <></> }?
		</span>;
	}
	else
		return <span class={ style.Value } data-sign="">?</span>;
};
