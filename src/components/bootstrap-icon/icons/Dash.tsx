import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconDash: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-dash") } { ...props }>
		
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>

	</IconBase>;

export default IconDash;
