import { FunctionalComponent, h } from "preact";

import "./style.scss";

interface StatIconProps {
	stat: "ATK" | "DEF" | "HP" | "ACC" | "EV" | "Cri" | "SPD" | string;
	inline?: boolean;
}

const StatIcon: FunctionalComponent<StatIconProps> = (props) => {
	const list = ["ATK", "DEF", "HP", "ACC", "EV", "Cri", "SPD"];
	if (!list.includes(props.stat)) return <i />;

	return <div class="stat-icon" data-stat={ props.stat } data-inline={ props.inline ? 1 : 0 } />;
};
export default StatIcon;
