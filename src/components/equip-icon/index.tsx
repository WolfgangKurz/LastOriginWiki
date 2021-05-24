import { FunctionalComponent } from "preact";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

import style from "./style.scss";

interface EquipIconProps {
	class?: string;
	image: string;
	size?: "small" | "normal" | "big" | "large" | string | number;
}

const EquipIcon: FunctionalComponent<EquipIconProps> = (props) => {
	const size = props.size || "normal";

	const imageExt = ImageExtension();
	const Icon = `${AssetsRoot}/${imageExt}/item/${props.image}.${imageExt}`;

	const NumericSize = ((): number => {
		switch (size) {
			case "small": return 40;
			case "normal": return 48;
			case "big": return 64;
			case "large": return 128;
		}
		return (typeof size === "number" ? size : parseFloat(size)) || 48;
	})();

	return <div class={ `equip-icon ${style["equip-icon"]} ${props.class || ""}` }>
		<img src={ Icon } width={ NumericSize } height={ NumericSize } />
	</div>;
};
export default EquipIcon;
