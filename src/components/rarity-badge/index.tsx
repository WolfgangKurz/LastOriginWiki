import { FunctionalComponent } from "preact";

import { ACTOR_GRADE } from "@/types/Enums";

import { RarityDisplay } from "@/libs/Const";

import Badge from "@/components/Badge";

import style from "./style.module.scss";
import { cn } from "@/libs/Class";

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

	return <Badge
		class={ cn(
			"rarity-badge",
			props.border && style.bordered,
			props.class,
			style["rarity-badge"],
		) }
		variant={ `rarity-${rarity}` }
		data-rarity={ rarity }
		data-size={ props.size }
	>
		{ props.children || rarity }
	</Badge>;
};
export default RarityBadge;
