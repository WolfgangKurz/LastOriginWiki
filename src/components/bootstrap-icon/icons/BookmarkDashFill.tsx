import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconBookmarkDashFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-bookmark-dash-fill") } { ...props }>
		
  <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>

	</IconBase>;

export default IconBookmarkDashFill;
