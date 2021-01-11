export interface RawUnitDialogueEntity {
	Join: string;
	SquadJoin: string;
	Leader: string;
	SortiePick: string;
	StageStart: string;
	Retreat: string;
	SearchStart: string;
	SearchEnd: string;
	BattleFocus: string;
	ActionApprove: string;

	/* eslint-disable camelcase */
	SpSkill: string;
	SpSkill_1: string;
	SpSkill_2: string;
	SpSkill_3: string;
	SpSkill_4: string;
	SpSkill_5: string;
	SpSkill_6: string;
	SpSkill_7: string;
	SpSkill_8: string;
	SpSkill_9: string;
	/* eslint-enable camelcase */

	Retire: string;
	Repair: string;
	Reinforce: string;
	ItemEquip: string;
	CoreLink: string;
	PresentGet: string;
	Login: string;

	/* eslint-disable camelcase */
	Idle_01_01: string;
	Idle_01_02: string;
	Idle_01_03: string;
	SPIdle_01_01: string;
	Idle_02_01: string;
	Idle_03_01: string;
	Idle_04_01: string;
	SPIdle_02_01: string;
	Oath: string;
	OathIdle_01: string;
	MVP: string;
	/* eslint-enable camelcase */
}
export interface RawUnitDialogue {
	[key: string]: { // Unit
		[key: string]: Partial<RawUnitDialogueEntity>; // Skin
	};
}

export interface UnitDialogueDataType {
	ko: RawUnitDialogue | false | null;
	jp: RawUnitDialogue | false | null;
}

/**
 * `null` : Not requested
 * `false` : Loading
 * `RawUnitDialogue` : Loaded
 */
const internalDB: UnitDialogueDataType = { ko: null, jp: null };
const callbackQueue = {
	ko: [] as DBCallback<RawUnitDialogue>[],
	jp: [] as DBCallback<RawUnitDialogue>[],
};

export default function EnemyDB (type: keyof UnitDialogueDataType, callback?: (data: RawUnitDialogue) => void): RawUnitDialogue | null {
	const sub = internalDB[type];
	if (!sub) {
		if (callback) callbackQueue[type].push(callback);

		if (internalDB[type] !== false) {
			internalDB[type] = false;
			import(/* webpackChunkName: "chunk-db-dialogue" */ `@/json/unit-dialogue-${type}`)
				.then(x => {
					internalDB[type] = x.default as unknown as RawUnitDialogue;
					callbackQueue[type].forEach(y => y(internalDB[type] as RawUnitDialogue));
				});
		}
		return null;
	}
	return sub;
}
