import { FunctionalComponent } from "preact";
import { useMemo, useState } from "preact/hooks";

import { UnitDialogueAudioType, UnitDialogueDataType } from "@/types/DB/Dialogue";

import { AssetsRoot } from "@/libs/Const";
import { TitleCalls } from "@/libs/Const.3";
import { isActive } from "@/libs/Functions";

import UnitDialogue, { VoiceItem } from "../../components/unit-dialogue";
import TitleCallDisplay from "../../components/titlecall-display";
import IconTranslate from "@/components/bootstrap-icon/icons/Translate";
import IconMicFill from "@/components/bootstrap-icon/icons/MicFill";

import { SubpageProps } from "..";

const DialogueTab: FunctionalComponent<SubpageProps> = ({ display, unit, SkinList }) => {
	const [dialogueLang, setDialogueLang] = useState<keyof UnitDialogueDataType>("KR");
	const [dialogueAudio, setDialogueAudio] = useState<UnitDialogueAudioType>("ko");

	const LangList: Array<keyof UnitDialogueDataType> = ["KR", "JP", "EN", "TC"];

	const VoiceList: VoiceItem[] = useMemo(() => [
		{
			...SkinList[0],
			isMarriage: false,
		},
		...(unit.marriageVoice
			? [{
				...SkinList[0],
				isMarriage: true,
			}]
			: []),

		...SkinList
			.slice(1)
			// .filter(x => !x.isPro)
			.flatMap((x, i) => {
				const r: VoiceItem[] = [{
					...x,
					isMarriage: false,
				}];

				if (LangList.some(l => {
					const d = unit.dialogue[l];
					return d && `${x.sid}M` in d;
				})) {
					r.push({
						...x,
						isMarriage: true,
					});
				}

				return r;
			}),
	], [unit, SkinList]);

	return <div style={ { display: display ? "" : "none" } }>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<IconTranslate class="me-1" />
			</div>

			{ LangList.map(lang => <button
				class={ `btn btn-outline-primary ${isActive(dialogueLang === lang)}` }
				onClick={ (): void => setDialogueLang(lang) }
			>
				<img src={ `${AssetsRoot}/flags/${lang}.png` } alt={ lang } />
			</button>) }
		</div>
		<div class="input-group justify-content-center my-1">
			<div class="input-group-text">
				<IconMicFill class="me-1" />
			</div>

			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio === "ko")}` }
				onClick={ (): void => setDialogueAudio("ko") }
			>한국어</button>
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio === "jp")}` }
				onClick={ (): void => setDialogueAudio("jp") }
			>日本語 N</button>
			<button
				class={ `btn btn-outline-primary ${isActive(dialogueAudio === "jpdmm")}` }
				onClick={ (): void => setDialogueAudio("jpdmm") }
			>日本語 R</button>
		</div>

		{ VoiceList.map(voice => <UnitDialogue
			key={ `voice${voice.isMarriage ? "-M" : ""}-${voice.sid ?? 0}` }
			unit={ unit }
			voice={ voice }
			lang={ dialogueLang }
			audio={ dialogueAudio }
		/>) }

		{ unit.uid in TitleCalls && <TitleCallDisplay
			unitId={ unit.uid }
			voiceList={ VoiceList }
		/> }
	</div>;
};
export default DialogueTab;
