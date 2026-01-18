export { SkinBanners } from "./Const.SkinBanners";

type SkillVideo_Plain = string[];
type SkillVideo_Platform = [true, ...string[]];
export const SkillVideo: Record<string, SkillVideo_Plain | SkillVideo_Platform> = {
	DS_Koyori_0: ["DS_Koyori.Skill2"],
	DS_Koyori_20: ["DS_Koyori.Skill2"],
	DS_Koyori_1: ["DS_Koyori_1.Skill2"],

	DS_Sarena_0: ["DS_Sarena.Skill2"],

	BR_Fafnir_0: [true, "BR_Fafnir.Skill2"],
	BR_Fafnir_1: [true, "BR_Fafnir_1.Skill2"],

	PECS_LemonadeGamma_0: ["PECS_LemonadeGamma.Skill2"],

	PECS_LemonadeEpsilon_0: [true, "PECS_LemonadeEpsilon.Skill2"],
	PECS_LemonadeEpsilon_1: [true, "PECS_LemonadeEpsilon_1.Skill2"],
};
