import { getCookie } from "@/libs/Functions";

export function ChangeLanguage (lang: LocaleTypes): void {
	document.cookie = `LO_LANG=${lang}; path=/`;
	window.location.reload();
}

export type LocaleTypes = "KR" | "EN" | "JP" | "zhTW";
export const LocaleList: LocaleTypes[] = ["KR", "EN", "JP", "zhTW"];

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
			if (lang === "zh-TW")
				return "zhTW";
			return "KR";
	}
})();

export const CurrentLocale = LangValidation(getCookie("LO_LANG", defaultLang));
