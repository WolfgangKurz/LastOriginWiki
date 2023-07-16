import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCalendar3Fill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-calendar3-fill") } { ...props }>
		
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3H0z"/>

	</IconBase>;

export default IconCalendar3Fill;
