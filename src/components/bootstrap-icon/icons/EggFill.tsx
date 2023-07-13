import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconEggFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-egg-fill") } { ...props }>
		
  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z"/>

	</IconBase>;

export default IconEggFill;
