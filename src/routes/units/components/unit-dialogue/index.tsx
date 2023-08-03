import { FunctionalComponent } from "preact";

import { SKIN_IN_PARTS } from "@/types/Enums";
import { RawUnitDialogueEntity, UnitDialogueAudioType, UnitDialogueDataType } from "@/types/DB/Dialogue";
import { Unit, UnitSkin } from "@/types/DB/Unit";

import { UniqueID } from "@/libs/Functions";

import Locale from "@/components/locale";
import UnitFace from "@/components/unit-face";
import DialogueRow from "../dialogue-row";

export interface VoiceItem extends UnitSkin {
	id: string;
	isDef: boolean;
	isPro: boolean;
	isMarriage: boolean;
}

interface UnitDialogueProps {
	unit: Unit;
	voice: VoiceItem;
	id: string;
	lang: keyof UnitDialogueDataType;
	audio: UnitDialogueAudioType;
}

const UnitDialogue: FunctionalComponent<UnitDialogueProps> = (props) => {
	const unit = props.unit;
	const voice = props.voice;

	const VoiceKey = ((v): string => {
		if (v.isMarriage) return `${v.sid || ""}M`;
		if (v.sid !== null) return v.sid.toString();
		return "";
	})(voice);

	const TypeList = ((): Array<keyof RawUnitDialogueEntity> => {
		const db = unit.dialogue[props.lang];
		if (!db) return [];

		const defaultTypes = [
			...(voice.isDef && !voice.isMarriage ? ["Join"] : []),
			"SquadJoin",
			"Leader",

			"SortiePick",
			"StageStart",
			"Retreat",
			"SearchStart",
			"SearchEnd",

			"BattleFocus",
			"ActionApprove",
			"SpSkill",
			"SpSkill_1",
			"SpSkill_2",
			"SpSkill_3",
			"SpSkill_4",
			"SpSkill_5",
			"SpSkill_6",
			"SpSkill_7",
			"SpSkill_8",
			"SpSkill_9",
			"Retire",
			"Repair",
			"Reinforce",
			"ItemEquip",
			"CoreLink",
			"PresentGet",

			"Login",
			"Idle_01_01",
			"Idle_01_02",
			"Idle_01_03",
			"SPIdle_01_01",
			"Idle_02_01",
			"Idle_03_01",
			"Idle_04_01",
			"SPIdle_02_01",

			"Oath",
			"OathIdle_01",
			"MVP",
		] as Array<keyof RawUnitDialogueEntity>;

		if (VoiceKey in db) {
			const diag = db[VoiceKey];
			return (Object.keys(diag) as Array<keyof RawUnitDialogueEntity>)
				.sort((a, b) => defaultTypes.indexOf(a) - defaultTypes.indexOf(b));
		}

		return defaultTypes;
	})();

	const Dialogue = ((): Partial<RawUnitDialogueEntity> => {
		const db = unit.dialogue[props.lang];
		if (db && VoiceKey in db) return db[VoiceKey];

		/* eslint-disable camelcase */
		return {
			// Intro: "",
			Join: "",
			SquadJoin: "",
			Leader: "",
			SortiePick: "",
			StageStart: "",
			Retreat: "",
			SearchStart: "",
			SearchEnd: "",
			BattleFocus: "",
			ActionApprove: "",
			SpSkill: "",
			SpSkill_2: "",
			SpSkill_3: "",
			SpSkill_4: "",
			SpSkill_5: "",
			Retire: "",
			Repair: "",
			Reinforce: "",
			ItemEquip: "",
			CoreLink: "",
			PresentGet: "",
			Login: "",
			Idle_01_01: "",
			Idle_01_02: "",
			Idle_01_03: "",
			SPIdle_01_01: "",
			Idle_02_01: "",
			Idle_03_01: "",
			Idle_04_01: "",
			SPIdle_02_01: "",
			Oath: "",
			OathIdle_01: "",
			MVP: "",
		};
		/* eslint-enable camelcase */
	})();

	const IsVoiceAvailable = (voice.parts & (1 << SKIN_IN_PARTS.VOICE)) > 0 || voice.isDef;

	const IsMissing = ((): boolean => {
		const db = unit.dialogue[props.lang];
		if (!db) return true;
		return Object.values(Dialogue).every(x => !x);
	})();

	const IsPartial = ((): boolean => {
		const db = unit.dialogue[props.lang];
		if (!db) return false;
		return Object.values(Dialogue).some(x => !x);
	})();

	const unitId = ((): string => {
		const uid = unit.uid || "";
		const postfix = ((): string => {
			if (voice.isMarriage) {
				if (props.voice.metadata.voiceId !== undefined)
					return `_NS${props.voice.metadata.voiceId}_Marriage`;
				return "_Marriage";
			}
			if (voice.isPro) {
				if (props.voice.metadata.voiceId !== undefined)
					return `_NS${props.voice.metadata.voiceId}_PS1`;
				return "_PS1";
			}
			if (voice.isDef) return "";

			if (props.voice.metadata.voiceId === undefined) return "";
			return `_NS${props.voice.metadata.voiceId}`;
		})();
		return `${uid}${postfix}`;
	})();

	const collapseId = UniqueID("unit-dialogue-");

	const cv: string | undefined = props.voice.sid === null
		? voice.isMarriage
			? unit.cv.M && unit.cv.M[props.audio]
			: unit.cv[""] && unit.cv[""][props.audio]
		: unit.cv[props.voice.sid] && unit.cv[props.voice.sid]![props.audio];

	return IsVoiceAvailable
		? <div class="card mt-2 text-start" lang={ props.lang }>
			<div
				class="card-header"
				data-bs-toggle="collapse"
				data-bs-target={ `#${collapseId}` }
				aria-expanded="false"
				aria-controls={ collapseId }
				role="button"
			>
				<UnitFace class="float-start me-3" uid={ unit.uid } skin={ voice.metadata.imageId ?? 0 } size="56" />

				<div>
					<strong>
						{ props.voice.sid === null
							? <Locale plain k={ `UNIT_${unit.uid}` } />
							: <Locale plain k={ `UNIT_SKIN_${unit.uid}_${voice.sid}` } />
						}
					</strong>
				</div>
				<div class="mt-1">
					{ voice.isMarriage
						? <span class="badge bg-danger me-2">
							<Locale k="UNIT_DIALOGUE_MARRIAGE" />
						</span>
						: <></>
					}
					{ IsMissing
						? <span class="badge bg-secondary me-2"><Locale k="UNIT_DIALOGUE_EMPTY" /></span>
						: IsPartial
							? <span class="badge bg-warning text-dark me-2"><Locale k="UNIT_DIALOGUE_MISSING" /></span>
							: <></>
					}
					{ cv
						? <span class="badge bg-success me-2">
							<strong class="me-2">CV</strong>
							{ cv }
						</span>
						: <></>
					}
				</div>
			</div>
			<div id={ collapseId } class="collapse">
				<div class="card-body">
					{ TypeList.map(type => <DialogueRow
						unitId={ unitId }
						isSkin={ !voice.isDef }
						type={ type }
						dialogue={ Dialogue[type] }
						audio={ props.audio }
					/>) }
				</div>
			</div>
		</div>
		: <></>;
};
export default UnitDialogue;
