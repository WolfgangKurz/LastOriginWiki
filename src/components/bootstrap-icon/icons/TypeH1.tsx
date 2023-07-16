import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconTypeH1: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-type-h1") } { ...props }>
		
  <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"/>

	</IconBase>;

export default IconTypeH1;
