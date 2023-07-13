import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronUp: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-up") } { ...props }>
		
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>

	</IconBase>;

export default IconChevronUp;
