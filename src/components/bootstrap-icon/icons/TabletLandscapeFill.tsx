import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconTabletLandscapeFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-tablet-landscape-fill") } { ...props }>
		
  <path d="M2 14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2zm11-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>

	</IconBase>;

export default IconTabletLandscapeFill;
