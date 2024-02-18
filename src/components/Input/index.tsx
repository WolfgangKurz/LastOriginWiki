import { cn } from "@/libs/Class";

import style from "./style.module.scss";

const Input: FunctionalComponent<preact.JSX.HTMLAttributes<HTMLInputElement>> =
	({ children, class: _class, ...props }) => {
		return <input
			class={ cn(style.Input, _class) }
			{ ...props }
		>
			{ children }
		</input>;
	};
export default Input;
