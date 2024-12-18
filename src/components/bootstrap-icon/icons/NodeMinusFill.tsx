import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconNodeMinusFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-node-minus-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M16 8a5 5 0 0 1-9.975.5H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025A5 5 0 0 1 16 8zm-2 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 14 8z"/>

	</IconBase>;

export default IconNodeMinusFill;
