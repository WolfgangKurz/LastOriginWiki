import { FunctionalComponent, JSX } from "preact";

import { BuildClass } from "@/libs/Class";

import "./style.scss";

export interface IconProps {
	class?: string;
	size?: string | number;
	color?: string;
	viewBox?: string;
	style?: string | JSX.CSSProperties;
}

const IconBase: FunctionalComponent<IconProps> = (props) => {
	const size = props.size || "1em";
	const color = props.color || "currentColor";
	const viewBox = props.viewBox || "0 0 16 16";

	return <svg
		class={ BuildClass("bi", props.class) }
		xmlns="http://www.w3.org/2000/svg"
		viewBox={ viewBox }
		width={ size }
		height={ size }
		fill={ color }
		style={ props.style }
	>
		{ props.children }
	</svg>;
};
export default IconBase;
