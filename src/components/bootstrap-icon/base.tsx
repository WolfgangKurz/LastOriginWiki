import { FunctionalComponent } from "preact";

import "./style.scss";
import { BuildClass } from "@/libs/Class";

export interface IconProps {
	class?: string;
	size?: string | number;
	color?: string;
}

const IconBase: FunctionalComponent<IconProps> = (props) => {
	const size = props.size || "1em";
	const color = props.color || "currentColor";

	return <svg
		class={ BuildClass("bi", props.class) }
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		width={ size }
		height={ size }
		fill={ color }
	>
		{ /* icon here */ }
	</svg>;
};
export default IconBase;
