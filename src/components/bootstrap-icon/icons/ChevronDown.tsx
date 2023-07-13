import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronDown: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-down") } { ...props }>
		
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>

	</IconBase>;

export default IconChevronDown;
