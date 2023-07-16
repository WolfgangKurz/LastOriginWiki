import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconToggleOn: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-toggle-on") } { ...props }>
		
  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>

	</IconBase>;

export default IconToggleOn;
