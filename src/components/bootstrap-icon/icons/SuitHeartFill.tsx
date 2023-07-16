import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSuitHeartFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-suit-heart-fill") } { ...props }>
		
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>

	</IconBase>;

export default IconSuitHeartFill;
