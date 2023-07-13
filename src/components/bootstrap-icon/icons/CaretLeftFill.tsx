import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCaretLeftFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-caret-left-fill") } { ...props }>
		
  <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>

	</IconBase>;

export default IconCaretLeftFill;
