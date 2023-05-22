import { createRef, Component, RenderableProps, FunctionalComponent } from "preact";

import * as Popper from "@popperjs/core";

import Locale from "@/components/locale";

import style from "./style.module.scss";
import { useEffect, useRef, useState } from "preact/hooks";

interface CommentProps {
	display?: string;
	t?: string;

	locale?: boolean;
	loc?: boolean;
}

interface CommentState {
	popperInstance: Popper.Instance | null;
}

export const Comment: FunctionalComponent<CommentProps> = (props) => {
	const rootReference = useRef<HTMLDivElement>(null);
	const popupReference = useRef<HTMLDivElement>(null);

	const [popperInstance, setPopperInstance] = useState<Popper.Instance | null>(null);

	useEffect(() => {
		const root = rootReference.current;
		const el = popupReference.current;

		if (root && el) {
			if (popperInstance)
				popperInstance.destroy();

			const instance = Popper.createPopper(root, el, {
				placement: "bottom",
				modifiers: [{
					name: "offset",
					options: { offset: [0, 5] },
				}, {
					name: "preventOverflow",
					options: {
						altAxis: true,
						padding: 5,
					},
				}],
			});
			instance.update();

			setPopperInstance(instance);
		}

		return () => {
			if (popperInstance)
				popperInstance.destroy();
		};
	}, []);

	useEffect(() => { // update
		if (popperInstance)
			popperInstance.update();
	});

	const display = props.display || props.t;
	const locale = props.locale || props.loc;

	const _display = display
		? `UNIT_SKILL_SECTION_NAME_${display}`
		: "UNIT_SKILL_SECTION_NAME";

	const disp = locale
		? <Locale k={ _display } />
		: display;

	return <div class={ style.Comment } ref={ rootReference }>
		{ disp }

		<button type="button" onClick={ (e): void => e.preventDefault() } />
		<div class={ style.CommentPopup } ref={ popupReference }>
			<h2>{ disp }</h2>
			{ props.children }
		</div>
	</div>;
};
