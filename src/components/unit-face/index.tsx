import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FunctionalComponent, h } from "preact";

import style from "./style.scss";

interface UnitFaceProps {
	class?: string;
	uid: string;
	skin?: number;
	size?: number | string;
	type?: "mini";
	sd?: boolean;
}

export function GetUnitFaceURL (uid: string, skin: number = 0, sd: boolean = false): string {
	const ext = ImageExtension();
	if (!uid) return `${AssetsRoot}/${ext}/face/transparent.${ext}`;

	if (uid.startsWith("Core_") || uid.startsWith("Module_"))
		return `${AssetsRoot}/${ext}/face/${uid}_0.${ext}`;

	if (sd) {
		if (uid.startsWith("TbarIcon_"))
			return `${AssetsRoot}/${ext}/tbar/${uid}.${ext}`;

		if (skin === 20)
			return `${AssetsRoot}/${ext}/tbar/TbarIcon_${uid}_PS1.${ext}`;
		else if (skin > 0)
			return `${AssetsRoot}/${ext}/tbar/TbarIcon_${uid}_NS${skin}.${ext}`;

		return `${AssetsRoot}/${ext}/tbar/TbarIcon_${uid}_N.${ext}`;
	}

	return `${AssetsRoot}/${ext}/face/${uid}_${skin}.${ext}`;
}

const UnitFace: FunctionalComponent<UnitFaceProps> = (props) => {
	const path = GetUnitFaceURL(props.uid, props.skin || 0, props.sd || false);
	if (props.size) {
		return <img
			class={ `unit-face ${props.class || ""} ${style["unit-face"]}` }
			data-type={ props.type }
			src={ path }
			width={ props.size }
			height={ props.size }
		/>;
	}
	return <img class={ `unit-face ${props.class || ""} ${style["unit-face"]}` }
		data-type={ props.type }
		src={ path }
	/>;
};
export default UnitFace;
