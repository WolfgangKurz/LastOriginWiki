/**
 * Dialogue groups provided by `dialogueassets` bundle of original game.
 * These groups are played with `GameManager.IsDialogAssetOverride` (absolute character transform).
 */
const DialogAssetGroups = new Set([
	"dg_ev41_1stage_celsi1ed", "dg_ev41_1stage_celsi1op",
	"dg_ev41_1stage_celsi2ed", "dg_ev41_1stage_celsi2op",
	"dg_ev41_1stage_celsi3ed",
	"dg_ev41_1stage_celsi4ed",
	"dg_ev41_1stage_celsi5ed", "dg_ev41_1stage_celsi5op",
	"dg_ev41_1stage_celsi6ed", "dg_ev41_1stage_celsi6op",
	"dg_ev41_1stage_celsi7ed",
	"dg_ev41_1stage_celsi8ed", "dg_ev41_1stage_celsi8op",
]);

/** @param key key of dialogue row (`{group}_{index}`) */
export function IsDialogAssetOverride (key: string): boolean {
	return DialogAssetGroups.has(key.replace(/_[0-9]+$/, "").toLowerCase());
}
