import { BuffStat } from "@/types/Buffs";
import { Equip } from "@/types/DB/Equip";
import { TARGET_TYPE } from "@/types/Enums";

import SimulatorEquip from "../types/Equip";

export function GetBuffList (slot: SimulatorEquip | null, equip: Equip | null): BuffStat[] {
	const ret: BuffStat[] = [];
	// if (!slot || !equip) return [];

	// const aliasTarget = [TARGET_TYPE.SELF, TARGET_TYPE.OUR, TARGET_TYPE.OUR_GRID, TARGET_TYPE.ALL_GRID, TARGET_TYPE.ALL_UNIT];
	// if (!slot) return [];

	// const eq = equip.stats[slot.level];
	// eq.forEach(b => {
	// 	if ("type" in b) return; // 확률 스탯... 이딴건 없음

	// 	// 아군 또는 본인 대상일 경우에만
	// 	if (!aliasTarget.includes(b.target)) return;

	// 	ret.push({
	// 		enabled: b.buffs
	// 			.map((_, bi) => `${b.key}_${bi}`)
	// 			.filter(x => x in slot.buffs),
	// 		buff: b,
	// 		level: slot.level,
	// 	});
	// });

	return ret;
}
