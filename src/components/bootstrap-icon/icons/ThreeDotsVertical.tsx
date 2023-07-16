import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconThreeDotsVertical: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-three-dots-vertical") } { ...props }>
		
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>

	</IconBase>;

export default IconThreeDotsVertical;
