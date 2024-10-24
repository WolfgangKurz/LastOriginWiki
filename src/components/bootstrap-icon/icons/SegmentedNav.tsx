import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSegmentedNav: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-segmented-nav") } { ...props }>
		
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z"/>

	</IconBase>;

export default IconSegmentedNav;
