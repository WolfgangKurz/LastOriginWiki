import * as preactHooks from "preact/hooks";

declare module "react" { // react type-guard
	export type CanvasHTMLAttributes<T extends HTMLCanvasElement> = HTMLAttributes<T>;
}

declare module "opentype.js" { }

declare module "preact-router" { // Re-define for new-style
	export function Link (props: preact.JSX.AnchorHTMLAttributes<HTMLAnchorElement>): preact.VNode;
}
