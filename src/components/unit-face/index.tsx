import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";

import style from "./style.module.scss";

interface UnitFaceProps {
	class?: string;
	uid: string;
	skin?: number;
	size?: number | string;
	type?: "mini";
	sd?: boolean;

	fallback?: string;
	style?: Record<string, string> | string;
}

export function GetUnitFaceURL (uid: string, skin: number = 0, sd: boolean = false): string {
	const ext = ImageExtension();
	if (!uid) return `${AssetsRoot}/transparent.png`;

	if (uid.startsWith("Core_") || uid.startsWith("Module_"))
		return `${AssetsRoot}/${ext}/face/${uid}_0.${ext}`;

	if (sd) {
		if (uid.startsWith("TbarIcon_"))
			return `${AssetsRoot}/${ext}/tbar/${uid}.${ext}`;

		if (skin === 20)
			return `${AssetsRoot}/${ext}/tbar/TbarIcon_${uid}_PS1.${ext}`;
		else if (skin === 21)
			return `${AssetsRoot}/${ext}/tbar/TbarIcon_${uid}_SS1.${ext}`;
		else if (skin > 0)
			return `${AssetsRoot}/${ext}/tbar/TbarIcon_${uid}_NS${skin}.${ext}`;

		return `${AssetsRoot}/${ext}/tbar/TbarIcon_${uid}_N.${ext}`;
	}

	return `${AssetsRoot}/${ext}/face/${uid}_${skin}.${ext}`;
}

const UnitFace: FunctionalComponent<UnitFaceProps> = (props) => {
	const [fallback, setFallback] = useState(false);

	useEffect(() => {
		if (fallback) setFallback(false);
	}, [props.uid, props.skin, props.sd, props.fallback]);

	const path = useMemo(() => {
		return (fallback || props.uid === "!") && props.fallback
			? props.fallback
			: GetUnitFaceURL(props.uid, props.skin || 0, props.sd || false);
	}, [props.uid, props.skin, props.sd, fallback, props.fallback]);

	if (props.size) {
		const isNum = typeof props.size === "number" || /^[0-9]+(\.[0-9]+)?$/.test(props.size);
		const n = isNum ? props.size : undefined;
		const s = {
			width: props.size,
			height: props.size,
		};

		return <img
			class={ BuildClass("unit-face", props.class, style.UnitFace) }
			data-uid={ props.uid }
			data-type={ props.type }
			data-d={ JSON.stringify(props) }
			src={ path }
			width={ n }
			height={ n }
			style={ Object.assign(s, props.style || {}) }
			onError={ e => {
				e.preventDefault();
				if (!fallback) setFallback(true);
			} }
		/>;
	}
	return <img
		class={ BuildClass("unit-face", props.class, style.UnitFace) }
		data-uid={ props.uid }
		data-type={ props.type }
		data-d={ JSON.stringify(props) }
		src={ path }
		style={ props.style }
		onError={ e => {
			e.preventDefault();
			if (!fallback) setFallback(true);
		} }
	/>;
};
export default UnitFace;
