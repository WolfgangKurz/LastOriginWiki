import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconRecord2: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-record2") } { ...props }>
		
  <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>

	</IconBase>;

export default IconRecord2;
