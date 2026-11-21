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

export interface FormattedTextRun {
	text: string;
	color?: string;
	bold?: boolean;
}

/**
 * Converts BB codes (`[c][RRGGBB]...[-][/c]`, `[b]...[/b]`, nestable) to flat runs.
 * Each formatted run is encoded as `\0props\0content\0`, props = `color=RRGGBB;bold`.
 */
export function Nn (text: string, playerName: string) {
	const src = text
		.replace(/\{0\}/g, `[c][66bbff]${playerName}[-][/c]`)
		.replace(/\[username\]/g, playerName)
		.replace(/&n/g, "\n");

	type StackItem = { type: "color"; value: string; } | { type: "bold"; };
	const stack: StackItem[] = [];

	const popLast = (type: StackItem["type"]) => {
		for (let i = stack.length - 1; i >= 0; i--) {
			if (stack[i].type === type) {
				stack.splice(i, 1);
				return;
			}
		}
	};

	let out = "";
	const emit = (content: string) => {
		if (!content) return;

		const props: string[] = [];
		const color = stack.findLast(s => s.type === "color");
		if (color) props.push(`color=${color.value}`);
		if (stack.some(s => s.type === "bold")) props.push("bold");

		out += props.length > 0
			? `\0${props.join(";")}\0${content}\0`
			: content;
	};

	const tagRegex = /\[[cC]\]\[([^\]]+)\]|\[-\]\[\/[cC]\]|\[\/[cC]\]|\[-\]|\[[bB]\]|\[\/[bB]\]/g;
	let last = 0;
	for (const m of src.matchAll(tagRegex)) {
		emit(src.substring(last, m.index));
		last = m.index + m[0].length;

		const tag = m[0].toLowerCase();
		if (m[1] !== undefined)
			stack.push({ type: "color", value: m[1] });
		else if (tag === "[b]")
			stack.push({ type: "bold" });
		else if (tag === "[/b]")
			popLast("bold");
		else // [-][/c], [/c], [-]
			popLast("color");
	}
	emit(src.substring(last));

	return out;
}

/** Decodes the output of `Nn` into runs */
export function ParseFormattedText (text: string): FormattedTextRun[] {
	return text
		.split(/(\0[^\0]+\0[^\0]+\0)/g)
		.filter(p => p.length > 0)
		.map<FormattedTextRun>(p => {
			const r = /^\0([^\0]+)\0([^\0]+)\0$/.exec(p);
			if (!r) return { text: p };

			const run: FormattedTextRun = { text: r[2] };
			r[1].split(";").forEach(prop => {
				const [k, v] = prop.split("=");
				if (k === "color") run.color = v;
				else if (k === "bold") run.bold = true;
			});
			return run;
		});
}
