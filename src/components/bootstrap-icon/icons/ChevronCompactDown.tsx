import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronCompactDown: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-compact-down") } { ...props }>
		
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>

	</IconBase>;

export default IconChevronCompactDown;
