import { cn } from "@/libs/Class";
import style from "./style.module.scss";

interface BadgeProps {
	class?: string;
	variant?: string;
}

const Badge: FunctionalComponent<BadgeProps> = (props) => {
	return <span class={ cn(
		style.Badge,
		props.variant && style[`Variant-${props.variant}`],
		props.class,
	) }>
		{ props.children }
	</span>;
};
export default Badge;
