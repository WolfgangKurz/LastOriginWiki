import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ko from "javascript-time-ago/locale/ko";
import ja from "javascript-time-ago/locale/ja";
import zhHant from "javascript-time-ago/locale/zh-Hant";

import { LocaleTypes } from "@/types/Locale";

export function SetupLibraries () {
	TimeAgo.addLocale(en);
	TimeAgo.addLocale(ko);
	TimeAgo.addLocale(ja);
	TimeAgo.addLocale(zhHant);
}

export function GetTimeAgoLocale(locale: LocaleTypes): string {
	switch(locale) {
		case "EN": return "en";
		case "KR": return "ko";
		case "JP": return "ja";
		case "TC": return "zh-Hant";
		default:
			return "en";
	}
}
