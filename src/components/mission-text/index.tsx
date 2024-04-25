import { FunctionalComponent } from "preact";

import { MISSION_OBJECT_TYPE, MISSION_TRIGGER_TYPE } from "@/types/Enums";
import Mission from "@/types/DB/Mission";

import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import { LocaleGet } from "@/components/locale";
import Reference from "./Reference";
import SkillFrom from "./SkillFrom";
import SkillName from "./SkillName";
import { parseVNode } from "@/libs/VNode";

interface MissionTextRawProps {
	objectType: MISSION_OBJECT_TYPE;
	objectValue: string;

	triggerType: MISSION_TRIGGER_TYPE;
	triggerValue: string;
}

const MissionTextRaw: FunctionalComponent<MissionTextRawProps> = (props) => {
	function num (_v: number): string {
		const base = parseInt(LocaleGet("Mission_Unit_Base"), 10);

		const part: string[] = [];

		let v = _v;
		let level = 0;
		while (v > 0) {
			const cur = v % base;
			v = Math.floor(v / base);
			if (cur > 0)
				part.push(LocaleGet(`Mission_Unit_${level}`, cur));
			level++;
		}
		return part.reverse().join(" ");
	}

	const kTrigger = (() => {
		switch (props.triggerType) {
			case MISSION_TRIGGER_TYPE.NONE: return "NONE";
			case MISSION_TRIGGER_TYPE.ROUND_LIMIT_LESS: return "ROUND_LIMIT_LESS";
			case MISSION_TRIGGER_TYPE.DEATH_COUNT_LESS: return "DEATH_COUNT_LESS";
			case MISSION_TRIGGER_TYPE.BY_ONESKILL: return "BY_ONE_SKILL";
			case MISSION_TRIGGER_TYPE.BY_SPCCHARACTER: return "BY_SPECIFIC_CHARACTER";
			case MISSION_TRIGGER_TYPE.WITH_SPCCHARACTER: return "WITH_SPECIFIC_CHARACTER";
			case MISSION_TRIGGER_TYPE.SPCCHARACTER_ALIVE: return "SPECIFIC_CHARACTER_ALIVE";
			case MISSION_TRIGGER_TYPE.BEATEN_LESS: return "BEATEN_LESS";
			case MISSION_TRIGGER_TYPE.WITH_TROOPER_LESS: return "WITH_TROOPER_LESS";
			case MISSION_TRIGGER_TYPE.WITH_ARMORED_LESS: return "WITH_ARMORED_LESS";
			case MISSION_TRIGGER_TYPE.WITH_MOBILITY_LESS: return "WITH_MOBILITY_LESS";
			case MISSION_TRIGGER_TYPE.WITH_TROOPER_MORE: return "WITH_TROOPER_MORE";
			case MISSION_TRIGGER_TYPE.WITH_ARMORED_MORE: return "WITH_ARMORED_MORE";
			case MISSION_TRIGGER_TYPE.WITH_MOBILITY_MORE: return "WITH_MOBILITY_MORE";
			case MISSION_TRIGGER_TYPE.WITH_ROBOT_LESS: return "WITH_ROBOT_LESS";
			case MISSION_TRIGGER_TYPE.WITH_ANDROID_LESS: return "WITH_ANDROID_LESS";
			case MISSION_TRIGGER_TYPE.WITH_ROBOT_MORE: return "WITH_ROBOT_MORE";
			case MISSION_TRIGGER_TYPE.WITH_ANDROID_MORE: return "WITH_ANDROID_MORE";
			case MISSION_TRIGGER_TYPE.SQUAD_LESS: return "SQUAD_LESS";
			case MISSION_TRIGGER_TYPE.SQUAD_MORE: return "SQUAD_MORE";
			case MISSION_TRIGGER_TYPE.BY_SPC_SKILL: return "BY_SPECIFIC_SKILL";
			case MISSION_TRIGGER_TYPE.NO_SPC_SKILL: return "NO_SPECIFIC_SKILL";
			case MISSION_TRIGGER_TYPE.SQUAD_CHANGE_MORE: return "SQUAD_CHANGE_MORE";
			case MISSION_TRIGGER_TYPE.SQUAD_CHANGE_LESS: return "SQUAD_CHANGE_LESS";
			case MISSION_TRIGGER_TYPE.DAMAGE_RECORD: return "DAMAGE_RECORD";
			default: return "";
		}
	})();
	const kObject = (() => {
		switch (props.objectType) {
			case MISSION_OBJECT_TYPE.STAGE_CLEAR: return "STAGE_CLEAR";
			case MISSION_OBJECT_TYPE.KILL_ENEMY: return "KILL_ENEMY";
			case MISSION_OBJECT_TYPE.KILL_SPCENEMY: return "KILL_SPECIFIC_ENEMY";
			default: return "";
		}
	})();

	const trigger = LocaleGet(
		`Mission_Trigger_${kTrigger}`,
		`<strong class="text-danger">${props.triggerValue}</strong>`,
		props.triggerValue,
		`<strong class="text-danger">${num(parseInt(props.triggerValue, 10))}</strong>`,
	);
	const object = LocaleGet(
		`Mission_Object_${kObject}`,
		`<strong class="text-primary">${props.objectValue}</strong>`,
		trigger,
		props.objectValue,
	);

	const node = parseVNode(object, [], {
		ref: Reference,
		from: SkillFrom,
		skill: SkillName,
	});
	return <span class="mission-text">{ node }</span>;
};

interface MissionTextProps {
	mission: string;
}

const MissionText: FunctionalComponent<MissionTextProps> & {
	Raw: typeof MissionTextRaw,
} = (props) => {
	return <Loader json={ StaticDB.Mission } content={ () => {
		const missions = GetJson<Mission[]>(StaticDB.Mission);
		const mission = missions.find(m => m.key === props.mission);

		if (mission) {
			return <MissionText.Raw
				objectType={ mission.objectType }
				objectValue={ mission.objectValue }
				triggerType={ mission.triggerType }
				triggerValue={ mission.triggerValue }
			/>;
		}
		return <span class="text-secondary">???</span>;
	} } />;
};
MissionText.Raw = MissionTextRaw;

export default MissionText;
