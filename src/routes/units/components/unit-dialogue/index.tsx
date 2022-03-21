import { FunctionalComponent } from "preact";

import { SKIN_IN_PARTS } from "@/types/Enums";
import { RawUnitDialogueEntity, UnitDialogueDataType } from "@/types/DB/Dialogue";
import { Unit, UnitSkin } from "@/types/DB/Unit";

import { UniqueID } from "@/libs/Functions";

import Locale from "@/components/locale";
import DialogueRow from "@/routes/units/components/dialogue-row";

export interface VoiceItem extends UnitSkin {
	id: number;
	isDef: boolean;
	isPro: boolean;
	isMarriage: boolean;
}

interface UnitDialogueProps {
	unit: Unit;
	voice: VoiceItem;
	id: number;
	lang: keyof UnitDialogueDataType;

}

const UnitDialogue: FunctionalComponent<UnitDialogueProps> = (props) => {
	const unit = props.unit;
	const voice = props.voice;

	const VoiceKey = ((v): string => {
		if (v.isMarriage) return "M";
		if (v.isPro) return "P";
		if (v.isDef) return "0";
		return v.id.toString();
	})(voice);

	const TypeList = ((): Array<keyof RawUnitDialogueEntity> => {
		const db = unit.dialogue[props.lang];
		if (!db) return [];

		if (VoiceKey in db) {
			const diag = db[VoiceKey];
			return Object.keys(diag) as Array<keyof RawUnitDialogueEntity>;
		}

		return [
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
	})();

	const Dialogue = ((): Partial<RawUnitDialogueEntity> => {
		const db = unit.dialogue[props.lang];
		if (db && VoiceKey in db) return db[VoiceKey];

		/* eslint-disable camelcase */
		return {
			Intro: "???",
			Join: "???",
			SquadJoin: "???",
			Leader: "???",
			SortiePick: "???",
			StageStart: "???",
			Retreat: "???",
			SearchStart: "???",
			SearchEnd: "???",
			BattleFocus: "???",
			ActionApprove: "???",
			SpSkill: "???",
			SpSkill_2: "???",
			SpSkill_3: "???",
			SpSkill_4: "???",
			SpSkill_5: "???",
			Retire: "???",
			Repair: "???",
			Reinforce: "???",
			ItemEquip: "???",
			CoreLink: "???",
			PresentGet: "???",
			Login: "???",
			Idle_01_01: "???",
			Idle_01_02: "???",
			Idle_01_03: "???",
			SPIdle_01_01: "???",
			Idle_02_01: "???",
			Idle_03_01: "???",
			Idle_04_01: "???",
			SPIdle_02_01: "???",
			Oath: "???",
			OathIdle_01: "???",
			MVP: "???",
		};
		/* eslint-enable camelcase */
	})();

	const IsVoiceAvailable = (voice.parts & SKIN_IN_PARTS.VOICE) > 0 || voice.isDef;

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
			if (voice.isMarriage) return "_Marriage";
			if (voice.isDef) return "";
			if (voice.isPro) return "_PS1";
			return `_NS${props.id}`;
		})();
		return `${uid}${postfix}`;
	})();

	const collapseId = UniqueID("unit-dialogue-");

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
				{ props.voice.sid === null
					? <Locale plain k={ `UNIT_${unit.uid}` } />
					: <Locale plain k={ `UNIT_SKIN_${unit.uid}_${voice.sid}` } />
				}

				{ voice.isMarriage
					? <strong class="text-danger ps-4"><Locale k="UNIT_DIALOGUE_MARRIAGE" /></strong>
					: <></>
				}
				{ IsMissing
					? <span class="badge bg-danger ms-3"><Locale k="UNIT_DIALOGUE_EMPTY" /></span>
					: IsPartial
						? <span class="badge bg-warning text-dark ms-3"><Locale k="UNIT_DIALOGUE_MISSING" /></span>
						: <></>
				}
			</div>
			<div id={ collapseId } class="collapse">
				<div class="card-body">
					{ TypeList.map(type => <DialogueRow
						unitId={ unitId }
						isSkin={ !voice.isDef }
						type={ type }
						dialogue={ Dialogue[type] }
						lang={ props.lang }
					/>) }
				</div>
			</div>
		</div>
		: <></>;
};
export default UnitDialogue;
