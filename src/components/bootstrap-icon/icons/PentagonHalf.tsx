import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPentagonHalf: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-pentagon-half") } { ...props }>
		
  <path d="M8 1.288l6.842 5.56L12.267 15H8V1.288zM16 6.5L8 0 0 6.5 3 16h10l3-9.5z"/>

	</IconBase>;

export default IconPentagonHalf;
