import { MISSION_OBJECT_TYPE, MISSION_TRIGGER_TYPE } from "@/types/Enums";

export default interface Mission {
	key: string;

	objectType: MISSION_OBJECT_TYPE;
	objectValue: string;

	triggerType: MISSION_TRIGGER_TYPE;
	triggerValue: string;
}
