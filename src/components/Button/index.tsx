import { cn } from "@/libs/Class";

import style from "./style.module.scss";
import { FunctionalComponent, Ref, RenderableProps } from "preact";
import { PropsWithoutRef, forwardRef } from "preact/compat";

interface ButtonProps {
	class?: string;
	sm?: boolean;

	active?: boolean;
	disabled?: boolean;

	outline?: boolean;
	variant?: string;
	textVariant?: string;

	onClick?: () => void;
}
interface ButtonGroupProps {
	class?: string;
	ref?: Ref<HTMLButtonElement>;
}

const Button: FunctionalComponent<PropsWithoutRef<ButtonProps> & { ref?: Ref<HTMLButtonElement>; }> & {
	Group: FunctionalComponent<ButtonGroupProps>,
} = Object.assign(
	forwardRef<HTMLButtonElement, ButtonProps>((props: RenderableProps<ButtonProps>, ref) => {
		return <button
			type="button"
			class={ cn(
				style.Button,
				props.sm && style.Small,
				props.active && style.Active,
				props.variant && style[`Variant-${props.variant}`],
				props.textVariant && style[`TextVariant-${props.textVariant}`],
				props.outline && style.Outline,
				props.class,
			) }
			disabled={ props.disabled }
			onClick={ e => {
				e.preventDefault();
				if (props.onClick)
					props.onClick();
			} }
			ref={ ref }
		>
			{ props.children }
		</button>;
	}),
	{
		Group: (props) => <div class={ cn(style.ButtonGroup, props.class) }>{ props.children }</div>,
	},
);

export default Button;
