import { FACETYPE } from "@/types/Enums";

export const FaceTable: Record<FACETYPE, string> = (() => {
	const ret: Record<FACETYPE, string> = {} as any;
	Object.keys(FACETYPE)
		.filter(r => !/^[0-9]+$/.test(r))
		.forEach(k => {
			ret[FACETYPE[k]] = k;
		});
	return ret;
})();
