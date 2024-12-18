import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconBorderOuter: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-border-outer") } { ...props }>
		
  <path d="M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z"/>
  <path d="M0 0v16h16V0H0zm1 1h14v14H1V1z"/>

	</IconBase>;

export default IconBorderOuter;
