import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconTabletLandscape: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-tablet-landscape") } { ...props }>
		
  <path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z"/>
  <path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>

	</IconBase>;

export default IconTabletLandscape;
