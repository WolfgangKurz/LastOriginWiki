import type { ROLE_TYPE } from "@/types/Enums";
import { useMemo } from "preact/hooks";

import { cn } from "@/libs/Class";
import { UniqueID } from "@/libs/Functions";

import style from "./style.module.scss";

interface UnitRoleIconProps {
	class?: string;

	role: ROLE_TYPE;
	variant?: string;
}

const UnitRoleIcon: FunctionalComponent<UnitRoleIconProps> = (props) => {
	const filterId = useMemo(() => props.variant && UniqueID("tint-filter-"), [props.variant]);
	const filterValue = useMemo(() => {
		if (!props.variant) return "";

		const style = getComputedStyle(document.documentElement);
		const color = style.getPropertyValue(`--${props.variant}`);
		if (!color) return "";

		const _r = parseInt(color.slice(1, 3), 16) / 255;
		const _g = parseInt(color.slice(3, 5), 16) / 255;
		const _b = parseInt(color.slice(5, 7), 16) / 255;
		return [
			`${_r} 0 0 0 0`,
			`0 ${_g} 0 0 0`,
			`0 0 ${_b} 0 0`,
			`0 0 0 1 0`,
		].join(" ");
	}, [props.variant]);

	return <>
		<div
			class={ cn(
				style.UnitRoleIcon,
				style[`Role-${props.role}`],
				props.class,
			) }
			style={ { "--filter": filterId && `url(#${filterId})` } }
		>
			{ filterId && filterValue && <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 1 1">
				<defs>
					<filter id={ filterId }>
						<feColorMatrix type="matrix" values={ filterValue } color-interpolation-filters="sRGB" />
					</filter>
				</defs>
			</svg> }
		</div>
	</>;
};
export default UnitRoleIcon;
