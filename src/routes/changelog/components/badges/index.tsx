import { FunctionalComponent } from "preact";

import Badge from "@/components/Badge";

const Build = (variant: string): FunctionalComponent =>
	((props) => <Badge variant={ variant }>{ props.children }</Badge>);

export const BY: FunctionalComponent = Build("warning"); // yellow
export const BR: FunctionalComponent = Build("danger"); // red
export const BO: FunctionalComponent = Build("orange"); // orange
export const BB: FunctionalComponent = Build("dark"); // black
export const BG: FunctionalComponent = Build("success"); // green
