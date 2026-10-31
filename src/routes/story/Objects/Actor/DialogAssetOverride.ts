/**
 * Dialogue groups provided by `dialogueassets` bundle of original game.
 * These groups are played with `GameManager.IsDialogAssetOverride` (absolute character transform).
 */
const DialogAssetGroups = new Set([
	"dg_ev26_1stagesumadven1ed",
	"dg_ev26_1stagesumadven2ed",
	"dg_ev26_1stagesumadven3op",
	"dg_ev26_1stagesumadven4ed",
	"dg_ev26_1stagesumadven4op",
	"dg_ev26_1stagesumadven5ed",
	"dg_ev26_1stagesumadven5op",
	"dg_ev26_1stagesumadven6ed",
	"dg_ev26_1stagesumadven6op",
	"dg_ev26_1stagesumadven7ed",
	"dg_ev26_1stagesumadven7op",
	"dg_ev26_1stagesumadven8ed",
	"dg_ev26_1stagesumadven8op",
	"dg_ev26_1stagesumadven9ed",
	"dg_ev26_1stagesumadven9op",
	"dg_ev26_1stagesumadven10ed",
	"dg_ev26_1stagesumadvenb1ed",
	"dg_ev26_1stagesumadvenb2ed",
	"dg_ev26_1stagesumadvenb3ed",
	"dg_ev26_1stagesumadvenb4ed",
	"dg_ev26_1stagesumadvenex1ed",
	"dg_ev26_1stagesumadvenex2ed",
	"dg_ev26_1stagesumadvenex3ed",

	"dg_ev28_1stagenightwalkingev1-1bop",
	"dg_ev28_1stagenightwalkingev1-1ed",
	"dg_ev28_1stagenightwalkingev1-1exop",
	"dg_ev28_1stagenightwalkingev1-2bop",
	"dg_ev28_1stagenightwalkingev1-2ed",
	"dg_ev28_1stagenightwalkingev1-2exop",
	"dg_ev28_1stagenightwalkingev1-2op",
	"dg_ev28_1stagenightwalkingev1-3bop",
	"dg_ev28_1stagenightwalkingev1-3ed",
	"dg_ev28_1stagenightwalkingev1-3exop",
	"dg_ev28_1stagenightwalkingev1-3op",
	"dg_ev28_1stagenightwalkingev1-4bop",
	"dg_ev28_1stagenightwalkingev1-4op",
	"dg_ev28_1stagenightwalkingev1-5ed",
	"dg_ev28_1stagenightwalkingev1-5op",
	"dg_ev28_1stagenightwalkingev1-6ed",
	"dg_ev28_1stagenightwalkingev1-6op",
	"dg_ev28_1stagenightwalkingev1-7op",
	"dg_ev28_1stagenightwalkingev1-8ed",
	"dg_ev28_1stagenightwalkingev1-8op",
	"dg_ev28_1stagenightwalkingev1-9op",
	"dg_ev28_1stagenightwalkingev1-10ed",

	"dg_ev41_1stage_celsi1ed",
	"dg_ev41_1stage_celsi1op",
	"dg_ev41_1stage_celsi2ed",
	"dg_ev41_1stage_celsi2op",
	"dg_ev41_1stage_celsi3ed",
	"dg_ev41_1stage_celsi4ed",
	"dg_ev41_1stage_celsi5ed",
	"dg_ev41_1stage_celsi5op",
	"dg_ev41_1stage_celsi6ed",
	"dg_ev41_1stage_celsi6op",
	"dg_ev41_1stage_celsi7ed",
	"dg_ev41_1stage_celsi8ed",
	"dg_ev41_1stage_celsi8op",

	"dg_ev42_1stage_sniev1-1ed",
	"dg_ev42_1stage_sniev1-1op",
	"dg_ev42_1stage_sniev1-2ed",
	"dg_ev42_1stage_sniev1-2op",
	"dg_ev42_1stage_sniev1-3ed",
	"dg_ev42_1stage_sniev1-3op",
	"dg_ev42_1stage_sniev1-4ed",
	"dg_ev42_1stage_sniev1-4op",
	"dg_ev42_1stage_sniev1-5ed",
	"dg_ev42_1stage_sniev1-6ed",
	"dg_ev42_1stage_sniev1-6op",
	"dg_ev42_1stage_sniev1-7ed",
	"dg_ev42_1stage_sniev1-7op",
	"dg_ev42_1stage_sniev1-8ed",

	"dg_mq01_1stage_c01_1_intro",
	"dg_mq01_1stage_c01_1_op",
	"dg_mq01_1stage_c01_2_ed",
	"dg_mq01_1stage_c01_3_ed",
	"dg_mq01_1stage_c01_4_ed",
	"dg_mq01_1stage_c01_4_op",
	"dg_mq01_1stage_c01_5_ed",
	"dg_mq01_1stage_c01_6_ed",
	"dg_mq01_1stage_c01_6_op",
	"dg_mq01_1stage_c01_7_ed",
	"dg_mq01_1stage_c01_7_op",

	"dg_mq02_1stage_c02_1_ed",
	"dg_mq02_1stage_c02_2_ed",
	"dg_mq02_1stage_c02_3_ed",
	"dg_mq02_1stage_c02_4_ed",
	"dg_mq02_1stage_c02_5_ed",
	"dg_mq02_1stage_c02_6_ed",
	"dg_mq02_1stage_c02_7_md",
	"dg_mq02_1stage_c02_7_op",
	"dg_mq02_1stage_c02_8_ed",
	"dg_mq02_1stage_c02_8_op",
	"dg_mq02_1stage_c02_9_ed",
	"dg_mq02_1stage_c02_9_md",
	"dg_mq02_1stage_c02_9_op",
	"dg_mq02_1stage_c02_10_ed",
]);

/** Group names used by `dialogRows[].Key` that differ from their containing asset names. */
const DialogAssetGroupAliases = new Map([
	["dg_ev26_1stagesumadven1bed", "dg_ev26_1stagesumadvenb1ed"],
	["dg_ev26_1stagesumadven2bed", "dg_ev26_1stagesumadvenb2ed"],
	["dg_ev26_1stagesumadven3bed", "dg_ev26_1stagesumadvenb3ed"],
	["dg_ev26_1stagesumadven4bed", "dg_ev26_1stagesumadvenb4ed"],
	["dg_ev26_1stagesumadven1exed", "dg_ev26_1stagesumadvenex1ed"],
	["dg_ev26_1stagesumadven2exed", "dg_ev26_1stagesumadvenex2ed"],
	["dg_ev26_1stagesumadven3exed", "dg_ev26_1stagesumadvenex3ed"],
	["dg_ev41_1stage_celsi3op", "dg_ev41_1stage_celsi3ed"],
	["dg_ev41_1stage_celsi4op", "dg_ev41_1stage_celsi4ed"],
]);

/** A typo in the original MQ01 C01_2_ED asset; only this exact row is an override. */
const DialogAssetRowKeys = new Set([
	"dg_mq01_1stge_c01_a2_ed_68",
]);

/** @param key key of dialogue row (`{group}_{index}`, with optional `_1` or `-1` branch suffixes) */
export function IsDialogAssetOverride (key: string): boolean {
	const normalizedKey = key.toLowerCase();
	if (DialogAssetRowKeys.has(normalizedKey)) return true;

	const group = normalizedKey.replace(/_[0-9]+(?:[_-][0-9]+)*$/, "");
	return DialogAssetGroups.has(DialogAssetGroupAliases.get(group) ?? group);
}
