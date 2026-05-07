import type { BuffStat } from "@/types/Buffs";

export interface Anomaly {
	icon: string;
	buffs: BuffStat[];
	lv: number;
}
