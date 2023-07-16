import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCaretDown: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-caret-down") } { ...props }>
		
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>

	</IconBase>;

export default IconCaretDown;
