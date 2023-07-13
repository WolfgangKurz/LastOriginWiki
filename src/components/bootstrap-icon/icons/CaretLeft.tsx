import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCaretLeft: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-caret-left") } { ...props }>
		
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>

	</IconBase>;

export default IconCaretLeft;
