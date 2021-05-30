import { MapEnemyData, MapWaveDrop } from "@/types/DB/Map";

export default interface EnemyGroup {
	[key: string]: EnemyGroupEnetity;
}

export interface EnemyGroupEnetity {
	id: string;
	exp: number;
	drops: MapWaveDrop[];
	grid: Array<MapEnemyData | null>;
}
