import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconMouseFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-mouse-fill") } { ...props }>
		
  <path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z"/>

	</IconBase>;

export default IconMouseFill;
