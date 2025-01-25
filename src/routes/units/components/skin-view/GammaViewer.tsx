import { FunctionalComponent } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import { GammaHost } from "@/libs/Const";

import style from "./style.module.scss";

type GammaCommand = (type: string, message: any) => void;

interface GammaViewerProps {
	model: string;

	displayTouchCollider?: boolean;
	hidePart?: boolean;
	hideBG?: boolean;
	face?: string;

	onFaceList?: (list: string[], prefix: string) => void; // prefix for compatibility with PixiView
	onPartAvailable?: (available: boolean) => void;
	onBGAvailable?: (available: boolean) => void;
}
const GammaViewer: FunctionalComponent<GammaViewerProps> = (props) => {
	const [[command], setCommand] = useState<[(GammaCommand | null)]>([null]);

	const model = useMemo(() => {
		if (props.model.includes("/")) {
			const i = props.model.indexOf("/");
			const platform = props.model.substring(0, i);
			const mid = props.model.substring(i).toLowerCase();
			return platform + mid;
		}
		return props.model.toLowerCase();
	}, [props.model]);

	useEffect(() => {
		const cb = (e: MessageEvent<any>) => {
			if (typeof (e.data) !== "object" || !("type" in e.data)) return;

			console.log("gamma: ", e.data);
			switch (e.data.type) {
				case "facelist":
					if (props.onFaceList)
						props.onFaceList(e.data.data as string[], "");
					break;
				case "part":
					if (props.onPartAvailable)
						props.onPartAvailable(!!e.data.data);
					break;
				case "bg":
					if (props.onBGAvailable)
						props.onBGAvailable(!!e.data.data);
					break;
			}
		};
		window.addEventListener("message", cb);

		return () => window.removeEventListener("message", cb);
	}, []);

	useEffect(() => {
		if (!command) return;

		const display = !!props.displayTouchCollider;
		command("collider", { active: display });
	}, [command, props.displayTouchCollider]);
	useEffect(() => {
		if (!command) return;

		const display = !props.hideBG;
		command("bg", { active: display });
	}, [command, props.hideBG]);
	useEffect(() => {
		if (!command) return;

		const display = !props.hidePart;
		command("part", { active: display });
	}, [command, props.hidePart]);
	useEffect(() => {
		if (!command) return;

		command("face", { face: props.face || "idle" });
	}, [command, props.face]);
	useEffect(() => {
		if (!command) return;

		command("model", { model });
	}, [command, model]);

	return <>
		<iframe
			class={ style.GammaViewer }
			src={ GammaHost }
			onLoad={ e => {
				const iframe = e.currentTarget;
				setCommand([(type, message) => iframe.contentWindow?.postMessage({ type, ...message }, "*")]);
			} }
		/>
	</>;
};
export default GammaViewer;
