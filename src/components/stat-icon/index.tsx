import { FunctionalComponent } from "preact";

import "./style.scss";

interface StatIconProps {
	class?: string;

	stat: "ATK" | "DEF" | "HP" | "ACC" | "EVA" | "CRI" | "SPD" | string;
	inline?: boolean;
}

const StatIcon: FunctionalComponent<StatIconProps> = (props) => {
	const list = ["ATK", "DEF", "HP", "ACC", "EVA", "CRI", "SPD"];
	if (!list.includes(props.stat)) return <i />;

	return <div class={ `stat-icon ${props.class || ""}` } data-stat={ props.stat } data-inline={ props.inline ? 1 : 0 } />;
};
export default StatIcon;
