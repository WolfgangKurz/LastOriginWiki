import { Component, FunctionalComponent, RenderableProps } from "preact";
import { route } from "preact-router";
import { useState } from "preact/hooks";

interface RedirectProps {
	which?: (props: Record<string, any>) => boolean;
	to: string | ((props: Record<string, any>) => string);
}

const Redirect: FunctionalComponent<RedirectProps> = (props) => {
	const Update = (): void => {
		const _props = (typeof props.to !== "string") || props.which
			? ((): Record<string, any> => {
				const reserved = ["children", "ref", "key", "jsx", "to", "which"];
				const ret: Record<string, any> = {};
				for (const key in props) {
					if (reserved.includes(key)) continue;
					ret[key] = props[key as keyof RenderableProps<RedirectProps>];
				}
				return ret;
			})()
			: {};

		if (props.which && !props.which(_props)) return;

		if (typeof props.to === "string")
			route(props.to, true);
		else
			route(props.to(_props), true);
	};

	useState(() => Update()); // every update

	return null;
};
export default Redirect;
