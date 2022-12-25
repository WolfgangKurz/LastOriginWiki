import { useEffect, useLayoutEffect, useRef } from "preact/hooks";

import { objState } from "@/libs/State";
import cShuffleText from "@/libs/ShuffleText";

interface ShuffleTextProps {
	text: string;

	duration?: number;
	gap?: number;
}

const ShuffleText: FunctionalComponent<ShuffleTextProps> = (props) => {
	const instance = objState<cShuffleText | null>(null);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => () => { // dispose
		if (instance.value)
			instance.value.dispose();
	}, []);

	useLayoutEffect(() => { // text change, before DOM update
		const i = instance.value;
		if (i) {
			i.stop();
			if (props.text) {
				i.setText(props.text);
				i.start();
			}
		}
	}, [props.text]);

	useLayoutEffect(() => { // ref change
		let after: cShuffleText | null = instance.value;
		if (ref.current === after) return; // same instance

		if (after) {
			after.dispose();
			after = null;
		}

		if (ref.current) {
			after = new cShuffleText(ref.current);
			after.sourceRandomCharacter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
			after.emptyCharacter = "*";
			after.duration = props.duration || 800;
			after.timeGap = props.gap || 0;
			after.setText(props.text);
			after.start();
		}

		instance.set(after);
	}, [ref.current]);

	useLayoutEffect(() => {
		if (instance.value) {
			instance.value.duration = props.duration || 800;
			instance.value.timeGap = props.gap || 0;
		}
	}, [instance.value, props.duration, props.gap]);

	return <span ref={ ref } />;
};
export default ShuffleText;
