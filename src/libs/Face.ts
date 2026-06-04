import { FACETYPE } from "@/types/Enums";

type FaceTypeKey = keyof typeof FACETYPE;

const FaceTypeTable: Partial<Record<FaceTypeKey, string>> = {
	"EXPRESSIONLESS": "Expressionless",
	"RESOLVE": "Resolve",
	"CLOSEEYE": "CloseEye",
	"EMBARRASS": "Embarrass",
	"EMBARRASSED": "Embarrass",
	"WORRY": "Worry",
	"BIGSMILE": "BigSmile",
	"SURPRISED": "Surprised",
	"SMILE": "Smile",
	"WHAT": "What",
	"ANGER": "Anger",
	"PROUD": "Proud",
	"QUESTION": "Question",
	"SHY": "Shy",
	"SORRY": "Sorry",
	"TSUN": "Tsun",
	"SERIOUS": "Serious",
	"IDLE": "Idle",
	"LAUGH": "Laugh",
	"SULK": "Sulk",
	"HURT": "Hurt",
	"SAD": "Sad",
	"RELIEF": "Relief",
	"TEMPTATION": "Temptation",
	"WRYSMILE": "WrySmile",
	"NERVOUS": "Nervous",
	"SHAME": "Shame",
	"DOYA": "Doya",
	"ANGER1": "Anger1",
	"ANGER2": "Anger2",
	"SHY1": "Shy1",
	"CYNICAL": "Cynical",
	"SMILE2": "Smile2",
	"HAPPY": "Happy",
	"EMBARRASS2": "Embarrass2",
	"SHY2": "Shy2",
	"EMBARRASS1": "Embarrass1",
	"TSUN2": "Tsun2",
	"BIGSMILE2": "BigSmile2",
	"CLOSEEYE2": "CloseEye2",
	"IDLEGL": "IdleGL",
	"HAPPYGL": "HappyGL",
	"EMBARRASSGL": "EmbarrassGL",
	"SADGL1": "SadGL1",
	"SULLEN": "Sullen",
};

export const FaceTable: Record<FACETYPE, string> = (() => {
	const ret = {} as Record<FACETYPE, string>;
	Object.keys(FACETYPE)
		.filter(r => !/^[0-9]+$/.test(r))
		.forEach(k => {
			const key = k as FaceTypeKey;
			ret[FACETYPE[key]] = FaceTypeTable[key] ?? k;
		});
	return ret;
})();
