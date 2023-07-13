import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCheck2: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-check2") } { ...props }>
		
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>

	</IconBase>;

export default IconCheck2;
