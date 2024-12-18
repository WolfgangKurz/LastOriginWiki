import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconMouse2Fill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-mouse2-fill") } { ...props }>
		
  <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"/>

	</IconBase>;

export default IconMouse2Fill;
