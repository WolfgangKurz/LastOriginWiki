import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCircleSquare: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-circle-square") } { ...props }>
		
  <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z"/>
  <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"/>

	</IconBase>;

export default IconCircleSquare;
