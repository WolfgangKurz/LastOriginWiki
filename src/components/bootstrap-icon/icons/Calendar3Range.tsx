import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconCalendar3Range: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-calendar3-range") } { ...props }>
		
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M7 10a1 1 0 0 0 0-2H1v2h6zm2-3h6V5H9a1 1 0 0 0 0 2z"/>

	</IconBase>;

export default IconCalendar3Range;
