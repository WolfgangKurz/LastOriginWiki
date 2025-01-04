import { MapEnemyData, MapWaveDrop } from "@/types/DB/Map";

type EnemyGroup = EnemyGroupData & {
	"#drops": EnemyGroupMap;
	"#enemies": EnemyGroupMap;
};
export default EnemyGroup;

export interface EnemyGroupData {
	[key: string]: EnemyGroupEnetity;
}
export type EnemyGroupMap = [key: string];

export interface EnemyGroupEnetity {
	id: string;
	exp: number;
	drops: Record<string, number>;
	grid: Array<[index: number, level: number] | 0>;
}
