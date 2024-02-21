import { cn } from "@/libs/Class";

import style from "./style.module.scss";

interface SeparatorProps {
	class?: string;
	marginless?: boolean;
	vert?: boolean;
	light?: boolean;
}

const Separator: FunctionalComponent<SeparatorProps> = (props) =>
	<div class={ cn(
		style.Separator,
		props.marginless && style.Marginless,
		props.vert ? style.Vert : style.Horz,
		props.light ? style.Light : style.Dark,
		props.class,
	) } />;
export default Separator;
