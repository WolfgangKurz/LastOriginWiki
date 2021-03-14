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

export const CurrentLocale = LangValidation(getCookie("LO_LANG"));
