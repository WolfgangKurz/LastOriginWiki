import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconHurricane: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-hurricane") } { ...props }>
		
  <path d="M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6.001-4.9zM10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>

	</IconBase>;

export default IconHurricane;
