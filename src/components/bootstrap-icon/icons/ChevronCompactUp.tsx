import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronCompactUp: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-compact-up") } { ...props }>
		
  <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>

	</IconBase>;

export default IconChevronCompactUp;
