import { FunctionalComponent } from "preact";

import { cn } from "@/libs/Class";

import "bootstrap-icons/font/bootstrap-icons.scss";
import "./style.scss";
import { useMemo } from "preact/hooks";

export interface IconProps {
	class?: string;
	size?: string | number;
	color?: string;
	// viewBox?: string;
	style?: string | JSX.CSSProperties;
}

const bi = (name: string): FunctionalComponent<IconProps> => {
	return (props) => {
		const size = props.size;
		const color = props.color;

		const style = useMemo(() => {
			if (!props.style)
				return {
					width: size, height: size,
					color: color,
				};

			if (typeof props.style === "string")
				return [
					size && `width:${size};height:${size}`,
					color && `color:${color}`,
					props.style
				].filter(r => r).join(";");

			return {
				width: size, height: size,
				color: color,
				...props.style,
			};
		}, [props.style, size, color]);

		return <i
			class={ cn("bi", `bi-${name}`, props.class) }
			style={ style }
		/>;
	};
};

const kebab = (i: string): string => i
	.replace(/[A-Z]/g, (p) => `-${p.toLowerCase()}`)
	.replace(/_/g, "-")
	.replace(/([a-zA-Z])([0-9])/, "$1-$2")
	.replace(/^-/, "");
const proxy = new Proxy({}, {
	get (_, p) {
		const k = kebab(p?.toString() ?? "");
		return bi(kebab(k));
	},
});
Object.freeze(proxy);

// const Icons = {
// 	QuestionCircleFill: bi("question-circle-fill"),
// 	PlayCircleFill: bi("play-circle-fill"),
// 	Highlights: bi("highlights"),
// };
const Icons: Record<string, FunctionalComponent<IconProps>> = proxy;
export default Icons;
