import { FunctionalComponent } from "preact";

import { UnitDialogueAudioType, UnitDialogueDataType } from "@/types/DB/Dialogue";

import { objState } from "@/libs/State";
import { AssetsRoot } from "@/libs/Const";
import { isActive } from "@/libs/Functions";

import Icon from "@/components/bootstrap-icon";

import UnitDialogue, { VoiceItem } from "../../components/unit-dialogue";

import { SubpageProps } from "..";

const DialogueTab: FunctionalComponent<SubpageProps> = ({ display, unit, SkinList }) => {
	const dialogueLang = objState<keyof UnitDialogueDataType>("KR");
	const dialogueAudio = objState<UnitDialogueAudioType>("ko");

	const LangList: Array<keyof UnitDialogueDataType> = ["KR", "JP", "EN", "TC"];

	const VoiceList: VoiceItem[] = [
		{
			id: "",
			...SkinList[0],
			isMarriage: false,
		},
		...(unit.marriageVoice
			? [{
				id: "",
				...SkinList[0],
				isMarriage: true,
			}]
			: []),

		...SkinList
			.slice(1)
			.filter(x => !x.isPro)
			.flatMap((x, i) => {
				const r: VoiceItem[] = [{
					id: `${i + 1}`,
					...x,
					isMarriage: false,
				}];

				if (LangList.some(l => {
					const d = unit.dialogue[l];
					return d && `${i + 1}M` in d;
				})) {
					r.push({
						id: `${i + 1}`,
						...x,
						isMarriage: true,
					});
				}

				return r;
			}),
	];

	return <div style={ { display: display ? "" : "none" } }>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="translate" class="me-1" />
			</div>

			{ LangList.map(lang => <button
				class={ `btn btn-outline-primary ${isActive(dialogueLang.value === lang)}` }
				onClick={ (): void => dialogueLang.set(lang) }
			>
				<img src={ `${AssetsRoot}/flags/${lang}.png` } alt={ lang } />
			</button>) }
		</div>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<Icon icon="mic-fill" class="me-1" />
			</div>

			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio.value === "ko")}` }
				onClick={ (): void => dialogueAudio.set("ko") }
			>한국어</button>
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio.value === "jp")}` }
				onClick={ (): void => dialogueAudio.set("jp") }
			>日本語 N</button>
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio.value === "jpdmm")}` }
				onClick={ (): void => dialogueAudio.set("jpdmm") }
			>日本語 R</button>
		</div>

		{ VoiceList.map(voice => <UnitDialogue
			unit={ unit }
			voice={ voice }
			id={ voice.id }
			lang={ dialogueLang.value }
			audio={ dialogueAudio.value }
		/>) }
	</div>;
};
export default DialogueTab;
