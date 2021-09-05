import { FunctionalComponent } from "preact";

import { BuffIconType } from "@/types/DescriptionType";

import { AssetsRoot } from "@/libs/Const";

import style from "./style.module.scss";

interface BuffProps {
	typ: BuffIconType;
}

export const Buff: FunctionalComponent<BuffProps> = (props) => {
	return <img class={ style.Buff } src={ `${AssetsRoot}/webp/buff/BuffIcon_${props.typ}.webp` } />;
};
