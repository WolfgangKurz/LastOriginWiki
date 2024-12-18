import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconHandbagFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-handbag-fill") } { ...props }>
		
  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 0 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>

	</IconBase>;

export default IconHandbagFill;
