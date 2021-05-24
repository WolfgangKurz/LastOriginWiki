import { FunctionalComponent } from "preact";

import { ACTOR_GRADE } from "@/types/Enums";

import { RarityDisplay } from "@/libs/Const";

import style from "./style.scss";

interface RarityBadgeProps {
	class?: string;
	rarity: "B" | "A" | "S" | "SS" | "SSS" | ACTOR_GRADE;
	size?: "normal" | "medium" | "large";
	border?: boolean;
}

const RarityBadge: FunctionalComponent<RarityBadgeProps> = (props) => {
	const rarity = typeof props.rarity === "string"
		? props.rarity
		: RarityDisplay[props.rarity];

	const className = [
		"badge",
		"bg-light",
		"rarity-badge",
		props.border ? style["bordered"] : "",
		props.class || "",
		style["rarity-badge"],
		`rarity-${rarity}-force`,
	]
		.filter(x => x)
		.join(" ");

	return <span
		class={ className }
		data-rarity={ rarity }
		data-size={ props.size }
	>
		{ props.children || rarity }
	</span>;
};
export default RarityBadge;
