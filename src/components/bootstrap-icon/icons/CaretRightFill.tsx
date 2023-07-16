import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCaretRightFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-caret-right-fill") } { ...props }>
		
  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>

	</IconBase>;

export default IconCaretRightFill;
