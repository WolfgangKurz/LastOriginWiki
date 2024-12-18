import { BuildClass } from "@/libs/Class";
import IconBase, { IconProps } from "../base";

const Tshirt: FunctionalComponent<IconProps> = ({ class: _class, ...props }) =>
	<IconBase class={ BuildClass(_class, "bi-tshirt") } { ...props }>

  <path d="M15.95 2.64 11.03.2C10.53.9 9.4 1.39 8.09 1.39S5.65.9 5.14.2L.22 2.64c-.2.1-.28.34-.18.54l1.45 2.89c.1.2.34.28.54.18l1.43-.7c.27-.13.58.06.58.36V12.33c0 .45.36.81.81.81h6.47c.45 0 .81-.36.81-.81V5.92c0-.3.31-.5.58-.36l1.43.7c.2.1.44.02.54-.18L16.13 3.18c.1-.2.02-.44-.18-.54z"/>

	</IconBase>;
export default Tshirt;
