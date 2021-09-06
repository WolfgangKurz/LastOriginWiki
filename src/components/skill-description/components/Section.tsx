import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";

import style from "./style.module.scss";

interface SectionProps {
	typ?: "dmg" | "note" | "buff" | "important" | "attr" | "cond" | "chance" | "ref";
}

export const Section: FunctionalComponent<SectionProps> = (props) => {
	let rarity: NonNullable<typeof RarityBadge["defaultProps"]>["rarity"];

	switch (props.typ) {
		case undefined:
			rarity = "S";
			break;
		case "dmg":
			rarity = "SS";
			break;
		case "note":
			rarity = "B";
			break;

		case "buff":
			return <span class={ `badge bg-light text-dark ${style.Section}` }>{ props.children }</span>;
		case "important":
			return <span class={ `badge bg-primary ${style.Section}` }>{ props.children }</span>;
		case "attr":
			return <span class={ `badge bg-warning text-dark ${style.Section}` }>{ props.children }</span>;
		case "cond":
			return <span class={ `badge bg-dark ${style.Section}` }>{ props.children }</span>;
		case "chance":
			return <span class={ `badge bg-success ${style.Section}` }>{ props.children }</span>;
		case "ref":
			return <span class={ `badge text-dark ${style.Subsection} ${style.Section}` }>{ props.children }</span>;
	}

	return <RarityBadge class={ style.Section } rarity={ rarity }>{ props.children }</RarityBadge>;
};
