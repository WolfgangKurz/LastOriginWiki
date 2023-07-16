import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconVolumeOffFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-volume-off-fill") } { ...props }>
		
  <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>

	</IconBase>;

export default IconVolumeOffFill;
