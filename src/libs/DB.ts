import UnitDialogueDB from "@/json/unit-dialogue.json";
import SkillDB from "@/json/unit-skill.json";
import MapDB from "@/json/map.json";
import ExpDB from "@/json/exp.json";
import StoryDB from "@/json/story.json";

import {
	RawSkill, RawUnitDialogue,
	Worlds, ExpRaw, StoryRaw,
} from "@/libs/Types";

import { ImageExtension, AssetsRoot } from "@/libs/Const";

function CompileSkill () {
	const imgExt = ImageExtension();
	const table = JSON.parse(JSON.stringify(SkillDB)) as unknown as RawSkill;
	const keys = Object.keys(table);
	for (const key of keys) {
		const skills = table[key];

		const keys2 = Object.keys(skills);
		for (const key2 of keys2) {
			const skill = skills[key2];

			const type = key2.includes("active") ? "active" : "passive";

			skill.icon = `${AssetsRoot}/${imgExt}/skill/${skill.icon}_${type}.${imgExt}`;
		}
	}
	return table;
}
export const SkillData = CompileSkill();
export const UnitDialogueData: RawUnitDialogue = UnitDialogueDB;
export const MapData = MapDB as unknown as Worlds;
export const ExpData: ExpRaw = ExpDB;
export const StoryData: StoryRaw[] = StoryDB;
