import { FunctionalComponent } from "preact";

import { SKILL_ATTR } from "@/types/Enums";

import style from "./style.scss";

interface ElemIconProps {
	class?: string;
	elem?: "fire" | "ice" | "lightning" | "physics" | SKILL_ATTR;
	inline?: boolean;
}

const ElemIcon: FunctionalComponent<ElemIconProps> = (props) => (
	props.elem !== undefined
		? <div class={`elem-icon ${style["elem-icon"]} ${props.class || ""}`} data-elem={ props.elem } data-inline={ props.inline } />
		: <></>
);
export default ElemIcon;
