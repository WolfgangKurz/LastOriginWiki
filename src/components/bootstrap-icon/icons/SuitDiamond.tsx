import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconSuitDiamond: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-suit-diamond") } { ...props }>
		
  <path d="M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468zM6.848.613a1.39 1.39 0 0 1 2.304 0l4.56 6.468a1.61 1.61 0 0 1 0 1.838l-4.56 6.468a1.39 1.39 0 0 1-2.304 0L2.288 8.92a1.61 1.61 0 0 1 0-1.838L6.848.613z"/>

	</IconBase>;

export default IconSuitDiamond;
