import { ACTOR_BODY_TYPE, ROLE_TYPE, ACTOR_CLASS, ACTOR_GRADE } from "@/libs/Types/Enums";

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

import Data from "@/json/require-resource.json";
export default Data as RequireResource;
