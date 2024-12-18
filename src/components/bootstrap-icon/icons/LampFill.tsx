import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconLampFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-lamp-fill") } { ...props }>
		
  <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm5.5-2l.276-.553a.25.25 0 0 1 .448 0L8.5 1h-1zm-.615 8h2.23C9.968 10.595 11 12.69 11 13.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5c0-.81 1.032-2.905 1.885-4.5z"/>

	</IconBase>;

export default IconLampFill;
