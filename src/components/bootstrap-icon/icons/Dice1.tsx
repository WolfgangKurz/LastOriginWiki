import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconDice1: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-dice-1") } { ...props }>
		
  <circle cx="8" cy="8" r="1.5"/>
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>

	</IconBase>;

export default IconDice1;
