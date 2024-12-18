import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconToggle2Off: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-toggle2-off") } { ...props }>
		
  <path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"/>
  <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"/>

	</IconBase>;

export default IconToggle2Off;
