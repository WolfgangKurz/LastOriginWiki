import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconChevronCompactRight: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-chevron-compact-right") } { ...props }>
		
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>

	</IconBase>;

export default IconChevronCompactRight;
