import { FunctionalComponent } from "preact";

import { cn } from "@/libs/Class";

import style from "./style.module.scss";

const Build = (className: string): FunctionalComponent =>
	((props) => <span class={ cn(style.Badge, className) }> { props.children }</span>);

export const BY: FunctionalComponent = Build(style.BY); // yellow, warning
export const BR: FunctionalComponent = Build(style.BR); // red, danger
export const BO: FunctionalComponent = Build(style.BO); // orange
export const BB: FunctionalComponent = Build(style.BB); // black, dark
export const BG: FunctionalComponent = Build(style.BG); // green, success
