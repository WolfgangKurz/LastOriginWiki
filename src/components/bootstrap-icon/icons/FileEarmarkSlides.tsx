import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconFileEarmarkSlides: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-file-earmark-slides") } { ...props }>
		
  <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
  <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3zm.5 10.5c0 .276-.895.5-2 .5s-2-.224-2-.5.895-.5 2-.5 2 .224 2 .5z"/>
  <path fill-rule="evenodd" d="M4.504 6.438A.5.5 0 0 1 5 6h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 11.5 11h-3v2.016a7.795 7.795 0 0 0-1 0V11h-3a.5.5 0 0 1-.496-.562l.5-4zM7 7.221v2.558c0 .097.106.157.19.107l2.13-1.279a.125.125 0 0 0 0-.214l-2.13-1.28a.125.125 0 0 0-.19.109z"/>

	</IconBase>;

export default IconFileEarmarkSlides;
