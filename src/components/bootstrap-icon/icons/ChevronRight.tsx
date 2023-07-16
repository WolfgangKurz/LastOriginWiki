import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronRight: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-right") } { ...props }>
		
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>

	</IconBase>;

export default IconChevronRight;
