import json from "@/json/locale";
const LocaleData = json as Record<keyof typeof json, Record<string, string>>;
export default LocaleData;

export function LocaleGet (key: string) {
	const lang: "KR" | "EN" | "JP" = window.GLOBAL_LANG || "KR";
	return LocaleData[lang][key] || LocaleData.KR[key] || key;
}
