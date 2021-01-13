import LoadDBFactory from "../DB/DBLoader";
import { RawUnitDialogue } from "@/libs/Types/Dialogue";

export default (locale: string, callback?: (data: RawUnitDialogue | null) => void) => {
	return LoadDBFactory<RawUnitDialogue>(
		`dialogue-${locale}`,
		import(/* webpackChunkName: "chunk-db-dialogue-" */ `@/json/dialogue/${locale}`),
	)(callback);
};
