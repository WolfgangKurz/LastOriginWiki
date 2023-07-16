import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconPeaceFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-peace-fill") } { ...props }>
		
  <path d="M14 13.292A8 8 0 0 0 8.5.015v7.778l5.5 5.5zm-.708.708L8.5 9.206v6.778a7.967 7.967 0 0 0 4.792-1.986zM7.5 15.985V9.207L2.708 14A7.967 7.967 0 0 0 7.5 15.985zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5z"/>

	</IconBase>;

export default IconPeaceFill;
