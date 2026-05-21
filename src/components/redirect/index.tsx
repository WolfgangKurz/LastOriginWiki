import { FunctionalComponent, RenderableProps } from "preact";
import { Route, useLocation } from "preact-iso";
import { useEffect, useState } from "preact/hooks";

interface RedirectProps {
	which?: (props: Record<string, any>) => boolean;
	path: string;
	to: string | ((props: Record<string, any>) => string);
}
const Redirect: FunctionalComponent<RedirectProps> = (props) => <Route
	path={ props.path }
	component={ () => {
		const loc = useLocation();
		useEffect(() => {
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
				loc.route(props.to, true);
			else
				loc.route(props.to(_props), true);
		});
		return <></>;
	} }
/>;
export default Redirect;
