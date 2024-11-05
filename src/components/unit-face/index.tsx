import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { BuildClass, cn } from "@/libs/Class";

import sheetMeta from "./generated";
import style from "./style.module.scss";

const facePlaceholder = "data:image/gif;base64,R0lGODlhAAEAAYAAAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAAACwAAAAAAAEAAQAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wscLDxMXGx8jJysvMzc7PwMHS09TV1tfY2drb3N3e39DR4uPk5ebn6Onq6+zt7u/g4fLz9PX29/j5+vv8/f7/8PMKDAgQQLGjyIMKHChQwbOnwIMaLEiRQrWryIMaPGjV8cO3r8CDKkyJEkS5o8iTKlypUsW7p8CTOmzJk0a9q8iTOnzp08e/r8CTSo0KFEixo9ijSp0qVMmzp9CjWq1KlUq1q9ijWr1q1cu3r9Cjas2LFky5o9izat2rVs2x4rAAA7";

interface UnitFaceProps {
	class?: string;
	uid: string;
	skin?: number;
	size?: number | string;
	type?: "mini";
	sd?: boolean;
	raw?: boolean;

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

	if (!props.raw) {
		if (props.sd) {
			const offset = sheetMeta.sd[`${props.uid}_${props.skin ?? 0}`] ?? sheetMeta.face[`${props.uid}_${props.skin ?? 0}`];
			if (offset) {
				if (props.size) {
					const isNum = typeof props.size === "number" || /^[0-9]+(\.[0-9]+)?$/.test(props.size);
					const n = isNum ? props.size : undefined;
					const s = {
						width: props.size,
						height: props.size,
						"--size": `${n}px`,
						"--x": offset[0],
						"--y": offset[1],
					};

					return <img
						class={ cn("unit-face", props.class, style.UnitFace, style.Optimized, style.SD) }
						data-uid={ props.uid }
						data-type={ props.type }
						width={ n }
						height={ n }
						src={ facePlaceholder }
						style={ Object.assign(s, props.style || {}) }
						alt={ props.uid }
					/>;
				} else {
					const s = {
						"--x": offset[0],
						"--y": offset[1],
					};

					return <img
						class={ cn("unit-face", props.class, style.UnitFace, style.Optimized, style.SD) }
						data-uid={ props.uid }
						data-type={ props.type }
						src={ facePlaceholder }
						style={ Object.assign(s, props.style || {}) }
						alt={ props.uid }
					/>;
				}
			}
		} else {
			const offset = sheetMeta.face[`${props.uid}_${props.skin ?? 0}`];
			if (offset) {
				if (props.size) {
					const isNum = typeof props.size === "number" || /^[0-9]+(\.[0-9]+)?$/.test(props.size);
					const n = isNum ? props.size : undefined;
					const s = {
						width: props.size,
						height: props.size,
						"--size": `${n}px`,
						"--x": offset[0],
						"--y": offset[1],
					};

					return <img
						class={ cn("unit-face", props.class, style.UnitFace, style.Optimized) }
						data-uid={ props.uid }
						data-type={ props.type }
						width={ n }
						height={ n }
						src={ facePlaceholder }
						style={ Object.assign(s, props.style || {}) }
						alt={ props.uid }
					/>;
				} else {
					const s = {
						"--x": offset[0],
						"--y": offset[1],
					};

					return <img
						class={ cn("unit-face", props.class, style.UnitFace, style.Optimized) }
						data-uid={ props.uid }
						data-type={ props.type }
						src={ facePlaceholder }
						style={ Object.assign(s, props.style || {}) }
						alt={ props.uid }
					/>;
				}
			}
		}
	}

	if (props.size) {
		const isNum = typeof props.size === "number" || /^[0-9]+(\.[0-9]+)?$/.test(props.size);
		const n = isNum ? props.size : undefined;
		const s = {
			width: props.size,
			height: props.size,
		};

		return <img
			class={ cn("unit-face", props.class, style.UnitFace) }
			data-uid={ props.uid }
			data-type={ props.type }
			src={ path }
			width={ n }
			height={ n }
			style={ Object.assign(s, props.style || {}) }
			alt={ props.uid }
			onError={ e => {
				e.preventDefault();
				if (!fallback) setFallback(true);
			} }
		/>;
	}
	return <img
		class={ cn("unit-face", props.class, style.UnitFace) }
		data-uid={ props.uid }
		data-type={ props.type }
		src={ path }
		style={ props.style }
		alt={ props.uid }
		onError={ e => {
			e.preventDefault();
			if (!fallback) setFallback(true);
		} }
	/>;
};
export default UnitFace;
