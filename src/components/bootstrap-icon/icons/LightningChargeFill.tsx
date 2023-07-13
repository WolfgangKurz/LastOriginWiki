import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconLightningChargeFill: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-lightning-charge-fill") } { ...props }>
		
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>

	</IconBase>;

export default IconLightningChargeFill;
