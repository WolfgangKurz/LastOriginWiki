import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const Icon%icon-pascal%: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-%icon%") } { ...props }>
		%content%
	</IconBase>;

export default Icon%icon-pascal%;
