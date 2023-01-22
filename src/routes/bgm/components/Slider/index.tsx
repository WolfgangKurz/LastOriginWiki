import { BuildClass } from "@/libs/Class";

import style from "./style.module.scss";

function IsNonUndefined<T> (value: T | undefined): value is T {
	return value !== undefined;
}

interface SliderProps {
	class?: string;

	min?: number;
	max?: number;
	value?: number;

	disabled?: boolean;

	onChange?(value: number): void;
}

const Slider: FunctionalComponent<SliderProps> = (props) => {
	const { min, max, value } = props;
	const isValid = IsNonUndefined(min) && IsNonUndefined(max) && IsNonUndefined(value);

	const percent = isValid
		? (value - min) / (max - min)
		: 0;

	function getOffsetX (e: MouseEvent): number {
		let x = e.offsetX;
		let el = e.target;
		if (!el) return 0;

		while (e.currentTarget !== el) {
			if (!(el instanceof HTMLElement)) break;

			x += el.offsetLeft;
			el = el.offsetParent;
		}
		return x;
	}

	return <div
		class={ BuildClass(style.Slider, props.disabled && style.Disabled, props.class) }
		onPointerDown={ e => {
			e.preventDefault();

			if (props.disabled) return;

			if (e.buttons === 1) { // left button
				const px = getOffsetX(e);
				e.currentTarget.setPointerCapture(e.pointerId);

				const w = e.currentTarget.clientWidth;
				const x = Math.min(Math.max(0, px), w);

				const p = x / w;
				if (isValid && props.onChange)
					props.onChange(min + (max - min) * p);
			}
		} }
		onPointerMove={ e => {
			e.preventDefault();

			if (props.disabled) return;

			if (e.buttons === 1) { // left button
				const px = getOffsetX(e);
				const w = e.currentTarget.clientWidth;
				const x = Math.min(Math.max(0, px), w);

				const p = x / w;
				if (isValid && props.onChange)
					props.onChange(min + (max - min) * p);
			}
		} }
		onPointerUp={ e => {
			e.preventDefault();
			e.currentTarget.releasePointerCapture(e.pointerId);
		} }
	>
		<div class={ style.Track }>
			{ isValid && <>
				<div
					class={ style.Progress }
					style={ { width: `${percent * 100}%` } }
				/>
				<div
					class={ style.Thumb }
					style={ { left: `${percent * 100}%` } }
				/>
			</> }
		</div>
	</div>;
};
export default Slider;
