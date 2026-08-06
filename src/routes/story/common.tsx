// import { ParseDescriptionText } from "@/libs/FunctionsX";
// export function Nn (text: string) {
// 	return ParseDescriptionText(
// 		text.replace(/\{0\}/g, `[c][ffffff]${LocaleGet("STORY_PLAYER")}[-][/c]`)
// 			.replace(/&n/g, "\n"),
// 	);
// }
// export function Nn (text: string) {
// 	return text.replace(/[<>]/g, p => p === "<" ? "&lt;" : "&gt;")
// 		.replace(/\{0\}/g, `[c][66bbff]${LocaleGet("STORY_PLAYER")}[-][/c]`)
// 		.replace(/&n/g, "\n")
// 		.replace(/\[(\/)?i\]/g, (p, p1) => `<${p1 || ""}>`)
// 		.replace(/\[c\]\[([^\]]+)\]/g, (p, p1) => `<span data-color="${p1}" style="color:#${p1}">`)
// 		.replace(/\[-\]\[\/c\]/g, "</span>");
// }

export function Nn (text: string, playerName: string) {
	return text
		.replace(/\{0\}/g, `[c][66bbff]${playerName}[-][/c]`)
		.replace(/&n/g, "\n")
		.replace(/\[c\]\[([^\]]+)\]/g, (_, p1) => `\0color\0${p1}\0`)
		.replace(/\[-\]\[\/c\]/g, "\0")
		.replace(/[<>]/g, (_) => `\0spchar\0${_}\0.\0`);
}
