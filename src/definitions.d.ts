import * as preactHooks from "preact/hooks";

declare module "react" { // react type-guard
	export type CanvasHTMLAttributes<T extends HTMLCanvasElement> = HTMLAttributes<T>;
}

declare module "opentype.js" {

}
