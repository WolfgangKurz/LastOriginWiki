import * as preactHooks from "preact/hooks";

declare module "preact/hooks" {
	export function useState<S> (initialState: S | (() => S)): [Readonly<S>, StateUpdater<S>];
	export function useState<S = undefined> (): [
		Readonly<S> | undefined,
		StateUpdater<S | undefined>
	];
}
