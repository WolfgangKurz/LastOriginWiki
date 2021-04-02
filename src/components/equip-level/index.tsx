import { Fragment, FunctionalComponent, h } from "preact";

import style from "./style.scss";

interface EquipLevelProps {
	level: number | string;
	size?: number;
}

const EquipLevel: FunctionalComponent<EquipLevelProps> = (props) => {
	const lv = ((): number => {
		if (typeof props.level === "string") {
			const p = parseInt(props.level, 10);
			if (isNaN(p) || p <= 0) return 0;
			return p;
		}
		return props.level;
	})();
	return lv > 0
		? <div class={ style["equip-level"] } style={ { fontSize: `${props.size || 20}px` } }>+{ lv }</div>
		: <Fragment />;
};
export default EquipLevel;
