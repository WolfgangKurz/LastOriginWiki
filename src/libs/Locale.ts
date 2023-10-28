import { getCookie, setCookie } from "@/libs/Cookie";

export function ChangeLanguage (lang: LocaleTypes): void {
	setCookie("LO_LANG", lang);
	window.location.reload();
}

export type LocaleTypes = "KR" | "JP" | "EN" | "TC" | "SC";
// export const LocaleList: LocaleTypes[] = ["KR", "JP", "EN", "TC", "SC"];
export const LocaleList: LocaleTypes[] = ["KR", "JP", "EN", "TC"];

function LangValidation (name: string | undefined): LocaleTypes {
	const list = LocaleList as string[];
	if (!name || !list.includes(name)) return "KR";
	return name as LocaleTypes;
}

const defaultLang = ((): LocaleTypes => {
	const lang = ((window.navigator as any).userLanguage || window.navigator.language) as string;
	const langp = lang.split("-")[0].toLowerCase();
	switch (langp) {
		case "ja":
			return "JP";
		case "en":
			return "EN";
		case "ko":
			return "KR";

		default:
			if (lang.startsWith("zh-Hant"))
				return "TC";
			else if (lang.startsWith("zh-Hans"))
				return "SC";
			return "KR";
	}
})();

export const CurrentLocale = LangValidation(getCookie("LO_LANG", defaultLang));
