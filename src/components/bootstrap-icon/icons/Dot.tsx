import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconDot: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-dot") } { ...props }>
		
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>

	</IconBase>;

export default IconDot;
