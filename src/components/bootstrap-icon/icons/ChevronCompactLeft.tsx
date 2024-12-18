import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronCompactLeft: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-compact-left") } { ...props }>
		
  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>

	</IconBase>;

export default IconChevronCompactLeft;
