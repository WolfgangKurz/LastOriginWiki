import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSlash: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-slash") } { ...props }>
		
  <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"/>

	</IconBase>;

export default IconSlash;
