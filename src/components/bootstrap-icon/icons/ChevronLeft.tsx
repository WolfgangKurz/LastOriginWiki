import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronLeft: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-left") } { ...props }>
		
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>

	</IconBase>;

export default IconChevronLeft;
