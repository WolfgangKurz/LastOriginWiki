import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSuitDiamondFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-suit-diamond-fill") } { ...props }>
		
  <path d="M2.45 7.4L7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/>

	</IconBase>;

export default IconSuitDiamondFill;
