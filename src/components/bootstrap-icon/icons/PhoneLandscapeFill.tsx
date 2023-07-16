import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPhoneLandscapeFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-phone-landscape-fill") } { ...props }>
		
  <path d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>

	</IconBase>;

export default IconPhoneLandscapeFill;
