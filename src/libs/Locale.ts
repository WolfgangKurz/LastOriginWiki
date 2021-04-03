import { getCookie } from "@/libs/Functions";

export function ChangeLanguage (lang: LocaleTypes): void {
	document.cookie = `LO_LANG=${lang}; path=/`;
	window.location.reload(true);
}

export type LocaleTypes = "KR" | "EN" | "JP";
export const LocaleList: LocaleTypes[] = ["KR", "EN", "JP"];

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
		default:
			return "KR";
	}
})();

export const CurrentLocale = LangValidation(getCookie("LO_LANG", defaultLang));
