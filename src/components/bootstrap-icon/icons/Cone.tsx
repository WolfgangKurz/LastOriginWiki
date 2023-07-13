import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCone: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-cone") } { ...props }>
		
  <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125L7.03 1.88z"/>

	</IconBase>;

export default IconCone;
