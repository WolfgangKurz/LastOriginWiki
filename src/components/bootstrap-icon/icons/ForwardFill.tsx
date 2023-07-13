import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconForwardFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-forward-fill") } { ...props }>
		
  <path d="M9.77 12.11l4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z"/>

	</IconBase>;

export default IconForwardFill;
