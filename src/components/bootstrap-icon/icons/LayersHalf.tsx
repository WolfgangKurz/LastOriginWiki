import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconLayersHalf: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-layers-half") } { ...props }>
		
  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433L1.562 6 8 2.567 14.438 6 8 9.433z"/>

	</IconBase>;

export default IconLayersHalf;
