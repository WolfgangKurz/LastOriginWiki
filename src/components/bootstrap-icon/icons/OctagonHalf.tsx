import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconOctagonHalf: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-octagon-half") } { ...props }>
		
  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM8 15h2.9l4.1-4.1V5.1L10.9 1H8v14z"/>

	</IconBase>;

export default IconOctagonHalf;
