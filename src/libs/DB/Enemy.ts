import LoadDBFactory from "@/libs/DB/DBLoader";
import { Enemy } from "@/libs/Types/Enemy";

export default (uid: string, callback?: (data: Enemy | null) => void) => {
	return LoadDBFactory<Enemy>(
		`enemy-${uid}`,
		import(/* webpackChunkName: "chunk-db-enemy-" */ `@/json/enemy/${uid}`),
	)(callback);
};
