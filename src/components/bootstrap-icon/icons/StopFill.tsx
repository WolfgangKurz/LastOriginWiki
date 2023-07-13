import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconStopFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-stop-fill") } { ...props }>
		
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>

	</IconBase>;

export default IconStopFill;
