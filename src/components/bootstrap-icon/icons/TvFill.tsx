import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconTvFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-tv-fill") } { ...props }>
		
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"/>

	</IconBase>;

export default IconTvFill;
