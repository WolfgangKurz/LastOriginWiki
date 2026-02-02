import { FunctionalComponent } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";

import cShuffleText from "@/libs/ShuffleText";

interface ShuffleTextProps {
	text: string;

	duration?: number;
	gap?: number;
}

const ShuffleText: FunctionalComponent<ShuffleTextProps> = (props) => {
	const [instance, setInstance] = useState<cShuffleText | null>(null);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => () => { // dispose
		instance?.dispose();
	}, []);

	useLayoutEffect(() => { // text change, before DOM update
		if (instance) {
			instance.stop();
			if (props.text) {
				instance.setText(props.text);
				instance.start();
			}
		}
	}, [props.text]);

	useLayoutEffect(() => { // ref change
		let after = instance;
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

		setInstance(after);
	}, [ref.current]);

	useLayoutEffect(() => {
		if (instance) {
			instance.duration = props.duration || 800;
			instance.timeGap = props.gap || 0;
		}
	}, [instance, props.duration, props.gap]);

	return <span ref={ ref } />;
};
export default ShuffleText;
