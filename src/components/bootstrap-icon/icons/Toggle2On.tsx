import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconToggle2On: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-toggle2-on") } { ...props }>
		
  <path d="M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z"/>
  <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z"/>

	</IconBase>;

export default IconToggle2On;
