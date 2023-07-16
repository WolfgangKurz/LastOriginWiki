import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPhoneLandscape: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-phone-landscape") } { ...props }>
		
  <path d="M1 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6z"/>
  <path d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>

	</IconBase>;

export default IconPhoneLandscape;
