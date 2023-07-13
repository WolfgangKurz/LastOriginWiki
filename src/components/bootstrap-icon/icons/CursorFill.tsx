import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCursorFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-cursor-fill") } { ...props }>
		
  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>

	</IconBase>;

export default IconCursorFill;
