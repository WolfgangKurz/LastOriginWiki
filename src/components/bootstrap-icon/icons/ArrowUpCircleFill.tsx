import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconArrowUpCircleFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-arrow-up-circle-fill") } { ...props }>
		
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>

	</IconBase>;

export default IconArrowUpCircleFill;
