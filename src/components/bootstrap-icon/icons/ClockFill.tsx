import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconClockFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-clock-fill") } { ...props }>
		
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>

	</IconBase>;

export default IconClockFill;
