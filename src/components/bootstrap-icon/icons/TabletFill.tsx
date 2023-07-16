import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconTabletFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-tablet-fill") } { ...props }>
		
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>

	</IconBase>;

export default IconTabletFill;
