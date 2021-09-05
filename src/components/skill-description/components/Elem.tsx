import { FunctionalComponent } from "preact";

import ElemIcon from "@/components/elem-icon";

interface ElemProps {
	type: "fire" | "ice" | "lightning";
}

export const Elem: FunctionalComponent<ElemProps> = (props) =>
	<ElemIcon elem={ props.type } inline />;
