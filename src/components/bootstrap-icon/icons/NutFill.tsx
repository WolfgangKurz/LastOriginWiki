import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconNutFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-nut-fill") } { ...props }>
		
  <path d="M4.58 1a1 1 0 0 0-.868.504l-3.429 6a1 1 0 0 0 0 .992l3.429 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196z"/>

	</IconBase>;

export default IconNutFill;
