import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconLayoutSidebarReverse: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-layout-sidebar-reverse") } { ...props }>
		
  <path d="M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V2z"/>

	</IconBase>;

export default IconLayoutSidebarReverse;
