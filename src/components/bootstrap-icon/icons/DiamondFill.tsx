import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconDiamondFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-diamond-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>

	</IconBase>;

export default IconDiamondFill;
