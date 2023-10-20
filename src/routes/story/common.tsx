import { ParseDescriptionText } from "@/libs/FunctionsX";

import { LocaleGet } from "@/components/locale";

// export function Nn (text: string) {
// 	return ParseDescriptionText(
// 		text.replace(/\{0\}/g, `[c][ffffff]${LocaleGet("STORY_PLAYER")}[-][/c]`)
// 			.replace(/&n/g, "\n"),
// 	);
// }
export function Nn (text: string) {
	return text.replace(/\{0\}/g, `[c][66bbff]${LocaleGet("STORY_PLAYER")}[-][/c]`)
		.replace(/&n/g, "\n")
		.replace(/\[(\/)?i\]/g, (p, p1) => `<${p1 || ""}>`)
		.replace(/\[c\]\[([^\]]+)\]/g, (p, p1) => `<span data-color="${p1}" style="color:#${p1}">`)
		.replace(/\[-\]\[\/c\]/g, "</span>");
}
export const fontFamily = ["IBM Plex Sans KR", "IBM Plex Sans", "Spoqa Han Sans", "Spoqa Han Sans JP", "sans-serif"];
