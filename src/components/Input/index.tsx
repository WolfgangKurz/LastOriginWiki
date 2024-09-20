import { cn } from "@/libs/Class";

import style from "./style.module.scss";

interface InputProps {
	sm?: boolean;
}

const Input: FunctionalComponent<preact.JSX.HTMLAttributes<HTMLInputElement> & InputProps> =
	({ children, class: _class, ...props }) => {
		return <input
			class={ cn(style.Input, props.sm && style.Small, _class) }
			{ ...props }
		>
			{ children }
		</input>;
	};
export default Input;
