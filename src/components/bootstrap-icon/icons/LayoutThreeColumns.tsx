import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconLayoutThreeColumns: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-layout-three-columns") } { ...props }>
		
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11v14z"/>

	</IconBase>;

export default IconLayoutThreeColumns;
