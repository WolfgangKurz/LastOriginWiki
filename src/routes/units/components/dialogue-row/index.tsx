import { FunctionComponent } from "preact";
import { useMemo } from "preact/hooks";

import { UnitDialogueAudioType } from "@/types/DB/Dialogue";

import { AssetsRoot } from "@/libs/Const";
import { BuildClass } from "@/libs/Class";
import { ParseDescriptionText } from "@/libs/FunctionsX";

import Locale from "@/components/locale";

import style from "./style.module.scss";

interface DialogueRowProps {
	type?: string;
	unitId?: string;
	isSkin?: boolean;
	dialogue?: string | string[];
	audio?: UnitDialogueAudioType;
}

const DialogueRow: FunctionComponent<DialogueRowProps> = (props) => {
	const type = props.type || "";
	const unitId = props.unitId || "";
	const dialogue = props.dialogue || "";
	const audio = props.audio || "ko";

	/* eslint-disable camelcase */
	const TypeColor = useMemo(() =>
		({
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
		} as Record<string, string>)[type] || "secondary",
		[type],
	);
	/* eslint-enable camelcase */

	const voiceUrl = useMemo(() => `${AssetsRoot}/audio/voice-${audio}/${unitId}_${type}.mp3`, [audio, unitId, type]);

	return <div class={ BuildClass(style.DialogueRow, "row my-2 my-sm-0") }>
		<div class={ BuildClass(style.TypeColumn, `bg-${TypeColor} text-bg-${TypeColor}`, "col col-12 col-sm-2 border-top") }>
			<Locale k={ `UNIT_DIALOGUE_TYPE_${type}` } />
		</div>
		{ Array.isArray(dialogue)
			? <div class="col col-12 col-sm px-0 flex-column">
				{ dialogue.map((d, i) => {
					const voice = `${AssetsRoot}/audio/voice-${audio}/${unitId}_${type}_${i + 1}.mp3`;

					return <div class="row mx-0">
						<div class={ BuildClass(style.Dialogue, "col col-12 col-sm border-end border-bottom") }>
							{ (d && ParseDescriptionText(d)) || <span class="text-secondary">-</span> }
						</div>
						<div class={ BuildClass(style.AudioColumn, "col col-12 col-sm-auto border") }>
							<audio
								src={ voice }
								type="audio/mp3"
								controls
								preload="none"
								volume="0.5"
							/>
						</div>
					</div>;
				}) }
			</div>
			: <>
				<div class={ BuildClass(style.Dialogue, "col col-12 col-sm border") }>
					{ (dialogue && ParseDescriptionText(dialogue)) || <span class="text-secondary">-</span> }
				</div>
				<div class={ BuildClass(style.AudioColumn, "col col-12 col-sm-auto border") }>
					<audio
						src={ voiceUrl }
						type="audio/mp3"
						controls
						preload="none"
						volume="0.5"
					/>
				</div>
			</>
		}
	</div>;
};
export default DialogueRow;
