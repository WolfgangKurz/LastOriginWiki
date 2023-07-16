import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCaretUpFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-caret-up-fill") } { ...props }>
		
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>

	</IconBase>;

export default IconCaretUpFill;
