import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconDice1Fill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-dice-1-fill") } { ...props }>
		
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>

	</IconBase>;

export default IconDice1Fill;
