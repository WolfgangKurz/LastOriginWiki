import { FunctionalComponent } from "preact";

import { FACETYPE } from "@/types/Enums";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FaceTable } from "@/libs/Face";

import style from "./style.module.scss";
import Locale from "@/components/locale";

interface UnitFace2Props {
	class?: string;
	uid: string;
	type: FACETYPE;
	skin?: number;
	size?: number | string;

	style?: Record<string, string> | string;
}

export function GetUnitFace2URL (uid: string, type: FACETYPE | string, skin: number = 0): string {
	const ext = ImageExtension();
	if (!uid) return `${AssetsRoot}/${ext}/face/transparent.${ext}`;

	const ftype = typeof type === "string"
		? type
		: FaceTable[type];

	return `${AssetsRoot}/${ext}/face2/${uid}_${skin === 0 ? "N" : `NS${skin}`}_${ftype}.${ext}`;
}

const UnitFace2: FunctionalComponent<UnitFace2Props> = (props) => {
	const path = GetUnitFace2URL(props.uid, props.type, props.skin || 0);

	return <div class={ style.UnitFace2 }>
		<div class="mb-1 text-center">
			{ (() => {
				if (props.size) {
					return <img
						class={ `unit-face2 ${props.class || ""}` }
						data-type={ props.type }
						src={ path }
						width={ props.size }
						height={ props.size }
						style={ props.style }
					/>;
				}
				return <img
					class={ `unit-face2 ${props.class || ""}` }
					data-type={ props.type }
					src={ path }
					style={ props.style }
				/>;
			})() }
		</div>
		<span class="text-light">
			<Locale k={ `FACE_TYPE_${props.type}` } />
		</span>
	</div>;
};
export default UnitFace2;
