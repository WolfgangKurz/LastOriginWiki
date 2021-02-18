import json from "@/locale";
const LocaleData = json as Record<keyof typeof json, Record<string, string>>;
export default LocaleData;

export function LocaleGet (keys: string | string[], ...params: any[]) {
	const lang: "KR" | "EN" | "JP" = window.GLOBAL_LANG || "KR";
	const get = (key: string) => LocaleData[lang][key] || LocaleData.KR[key] || null;

	if (typeof keys === "string") keys = [keys];
	for (const key of keys) {
		const value = get(key);
		if (value !== null) {
			return value.replace(/\{([0-9]+)\}/g, (_, p1) => {
				const index = parseInt(p1, 10);
				return params[index] || `{${p1}}`;
			});
		}
	}
	return keys[keys.length - 1];
}
