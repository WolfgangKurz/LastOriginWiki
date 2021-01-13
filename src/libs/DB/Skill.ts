import LoadDBFactory from "../DB/DBLoader";
import { SkillGroup, SkillSlotKey, RawSkillEntity, SkillEntity } from "@/libs/Types/Skill";

export default (uid: string, callback?: (data: Partial<SkillGroup> | null) => void) => {
	return LoadDBFactory<Record<SkillSlotKey, RawSkillEntity>, Partial<SkillGroup>>(
		`skill-${uid}`,
		import(/* webpackChunkName: "chunk-db-skill-" */ `@/json/skill/${uid}`),
		(x) => {
			if (!x) return null;

			const ret: Partial<SkillGroup> = {};
			Object.keys(x).forEach(slot => {
				const skill = x[slot as SkillSlotKey];
				const type = slot.includes("active") ? "active" : "passive";

				const entity: SkillEntity = {
					...skill,
					icon: `${skill.icon}_${type}`,
				};
				ret[slot as SkillSlotKey] = entity;
			});
			return ret;
		},
	)(callback);
};
