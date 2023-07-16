import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconRecord2Fill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-record2-fill") } { ...props }>
		
  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
  <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>

	</IconBase>;

export default IconRecord2Fill;
