import { useEffect, useState } from "preact/hooks";

import Locale from "@/components/locale";

interface CountdownProps {
	to: Date;
}

const Countdown: FunctionalComponent<CountdownProps> = (props) => {
	const [left, setLeft] = useState(NaN);

	useEffect(() => {
		const to = props.to.getTime();
		const interval = setInterval(() => {
			const now = Date.now();
			setLeft(Math.floor((to - now) / 1000));
		}, 1000);

		return () => clearInterval(interval);
	}, [props.to]);

	if (isNaN(left) || props.to.getFullYear() === 9999)
		return <Locale k="TIME_EMPTY" />;
	else if (left < 0)
		return <Locale k="TIME_END" />;
	else {
		const d = Math.floor(left / 86400);
		const h = Math.floor(left / 3600) % 24;
		const m = Math.floor(left / 60) % 60;
		const s = left % 60;

		const time = [h, m, s].map(v => v.toString().padStart(2, "0"));

		if (d > 0)
			return <Locale
				k="TIME_LEFT"
				p={ [<Locale k="TIME_DATETIME" p={ [d, ...time] } />] }
			/>;
		else
			return <Locale
				k="TIME_LEFT"
				p={ [<Locale k="TIME_TIME" p={ [...time] } />] }
			/>;
	}
};
export default Countdown;
