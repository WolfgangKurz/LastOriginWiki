import { ACTOR_BODY_TYPE, ROLE_TYPE, ACTOR_CLASS, ACTOR_GRADE } from "@/libs/Types/Enums";

import Data from "@/json/require-resource";

type RequireResourceDataDatum = [number, number, number, number, number, number];
type RequireResourceData = {
	metal: RequireResourceDataDatum;
	nutrient: RequireResourceDataDatum;
	power: RequireResourceDataDatum;
};
type RequireResourceGradeClassRole = {
	[key in ACTOR_BODY_TYPE]: RequireResourceData;
};
type RequireResourceGradeClass = {
	[key in ROLE_TYPE]: RequireResourceGradeClassRole;
};
type RequireResourceGrade = {
	[key in ACTOR_CLASS]: RequireResourceGradeClass;
};
export type RequireResource = {
	[key in ACTOR_GRADE]: RequireResourceGrade;
};

/**
 * `null` : Not requested
 * `false` : Loading
 * `RequireResource` : Loaded
 */
type DBCallback<T> = (data: T) => void;
let internalDB: RequireResource | false | null = null;
const callbackQueue: DBCallback<RequireResource>[] = [];
export default function RequireResourceDB (callback?: (data: RequireResource) => void): RequireResource | null {
	if (!internalDB) {
		if (callback) callbackQueue.push(callback);

		if (internalDB !== false) {
			internalDB = false;
			import(/* webpackChunkName: "chunk-db-require-resource" */ "@/json/require-resource")
				.then(x => {
					internalDB = x.default as unknown as RequireResource;
					callbackQueue.forEach(y => y(internalDB as RequireResource));
				});
		}
		return null;
	}
	return internalDB;
}
