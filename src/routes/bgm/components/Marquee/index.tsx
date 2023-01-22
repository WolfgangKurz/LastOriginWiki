import { useEffect, useRef, useState } from "preact/hooks";

import { BuildClass } from "@/libs/Class";

import style from "./style.module.scss";

const Marquee: FunctionalComponent = (props) => {
	const [active, setActive] = useState(false);
	const marqueeBaseRef = useRef<HTMLDivElement>(null);
	const marqueeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = window.setInterval(() => {
			if (!marqueeBaseRef.current) return;
			if (!marqueeRef.current) return;

			const elBase = marqueeBaseRef.current;
			const el = marqueeRef.current;
			setActive(elBase.clientWidth < el.scrollWidth);
		}, 100);

		return () => {
			window.clearInterval(interval);
		};
	}, []);

	return <div
		class={ BuildClass(style.Marquee, active && style.active) }
		ref={ marqueeBaseRef }
	>
		<div ref={ marqueeRef }>
			{ props.children }
		</div>
	</div>;
};
export default Marquee;
