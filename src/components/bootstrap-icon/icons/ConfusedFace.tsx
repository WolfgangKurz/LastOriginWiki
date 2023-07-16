import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const IconConfusedFace: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "iconamoon-confused-face") } viewBox="0 0 24 24" { ...props }>
		<g fill="none" stroke="currentColor" stroke-linejoin="round">
			<circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2" />
			<path stroke-width="3" d="M9 9.5h.01v.01H9zm6 0h.01v.01H15z" />
			<path stroke-linecap="round" stroke-width="2" d="M13 14c-1.48 0-2.773.804-3.465 2" />
		</g>
	</IconBase>;

export default IconConfusedFace;
