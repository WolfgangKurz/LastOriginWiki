import { FunctionComponent } from "preact";

import { UnitDialogueAudioType } from "@/types/DB/Dialogue";

import { AssetsRoot } from "@/libs/Const";

import Locale from "@/components/locale";

import "./style.scss";

interface DialogueRowProps {
	type?: string;
	unitId?: string;
	isSkin?: boolean;
	dialogue?: string;
	audio?: UnitDialogueAudioType;
}

const DialogueRow: FunctionComponent<DialogueRowProps> = (props) => {
	const type = props.type || "";
	const unitId = props.unitId || "";
	const dialogue = props.dialogue || "";
	const audio = props.audio || "ko";

	/* eslint-disable camelcase */
	const TypeColor = ({
		Intro: "warning text-dark",
		Join: "dark",

		SquadJoin: "dark",
		Leader: "dark",
		SortiePick: "dark",
		StageStart: "dark",
		Retreat: "dark",
		SearchStart: "dark",
		SearchEnd: "dark",

		BattleFocus: "primary",
		ActionApprove: "primary",
		SpSkill: "primary",
		SpSkill_1: "primary",
		SpSkill_2: "primary",
		SpSkill_3: "primary",
		SpSkill_4: "primary",
		SpSkill_5: "primary",
		SpSkill_6: "primary",
		SpSkill_7: "primary",
		SpSkill_8: "primary",
		SpSkill_9: "primary",
		Retire: "primary",
		Repair: "primary",
		Reinforce: "primary",
		ItemEquip: "primary",
		CoreLink: "primary",
		PresentGet: "primary",

		Login: "success",
		Idle_01_01: "success",
		Idle_01_02: "success",
		Idle_01_03: "success",
		SPIdle_01_01: "success",
		Idle_02_01: "success",
		Idle_03_01: "success",
		Idle_04_01: "success",
		SPIdle_02_01: "success",

		Oath: "danger",
		OathIdle_01: "danger",
		MVP: "primary",
	} as Record<string, string>)[type] || "secondary";
	/* eslint-enable camelcase */

	const rowClass = `border-top bg-${TypeColor} text-light`;

	const voiceUrl = `${AssetsRoot}/audio/voice-${audio}/${unitId}_${type}.mp3`;

	return <div class="row dialogue-row my-2 my-sm-0">
		<div class={ `col col-12 col-sm-2 ${rowClass}` }>
			<Locale k={ `UNIT_DIALOGUE_TYPE_${type}` } />
		</div>
		<div class="col col-12 col-sm border dialogue">
			{ dialogue || <span class="text-secondary">-</span> }
		</div>
		<div class="col col-12 col-sm-auto border">
			<audio src={ voiceUrl } type="audio/mp3" controls preload="none" volume="0.5" />
		</div>
	</div>;
};
export default DialogueRow;
