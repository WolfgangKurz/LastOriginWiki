import he from "he";

enum ParsingStat {
	Idle = 0,
	TagBeforeName = 1,
	TagName = 2,
	TagAttrsIdle = 3,
	TagAttrsName = 4,
	TagAttrsValue = 5,
	TagAttrsValueQuote = 6,
	TagClosing = 7,
}

export interface ParseAttr {
	name: string;
	value: string | null;
}
export type ParseNode = ParseText | ParseElement;
export interface ParseText {
	content: string;
}
export interface ParseElement {
	name: string;
	attrs: ParseAttr[];
	childs: ParseNode[];
}

const isWhitespace = (c: string): boolean => [" ", "\t", "\r", "\n"].includes(c);

function textNode (text: string): ParseText {
	return { content: he.decode(text) };
}

export default function parse (source: string): ParseElement {
	const skips = ["script", "style"];

	const root: ParseElement = {
		name: "#root",
		attrs: [],
		childs: [],
	};

	const stack: ParseElement[] = [root];
	let last: ParseElement = root;

	let attr: ParseAttr = { name: "", value: null };

	const buffer: string[] = [];
	const contentBuffer: string[] = [];
	const clear = (): string[] => buffer.splice(0, buffer.length);

	let stat: ParsingStat = ParsingStat.Idle;
	let quote: "\"" | "'" = "\"";

	let skipping: string | null = null;
	let selfClosing = false;

	const sourceLength = source.length;
	for (let i = 0; i < sourceLength; i++) {
		const c = source[i];

		if (stat === ParsingStat.Idle) { // 태그 시작 안함
			if (c === "<") {
				stat = ParsingStat.TagBeforeName;

				if (buffer.length > 0) { // 텍스트 노드 삽입
					last.childs.push(textNode(buffer.join("")));
					clear();
				}
			} else if (skipping)
				contentBuffer.push(c);
			else
				buffer.push(c);
		} else if (stat === ParsingStat.TagBeforeName) {
			if (c === "/") {
				stat = ParsingStat.TagClosing;

				if (buffer.length > 0) { // 텍스트 노드 삽입
					last.childs.push(textNode(buffer.join("")));
					clear();
				}
			} else if (isWhitespace(c) || skipping !== null) { // 태그명 전에 공백이 나타나거나, 평문 태그에서 종료 문자가 아니라면 무시
				if (skipping)
					contentBuffer.push("<", c);
				else
					buffer.push("<", c);

				stat = ParsingStat.Idle;
			} else {
				i--;
				stat = ParsingStat.TagName;
			}
		} else if (stat === ParsingStat.TagClosing) {
			if (c === ">") {
				stat = ParsingStat.Idle;

				if (skipping) {
					if (buffer.join("") === skipping) {
						skipping = null;
						last.childs.push({ content: contentBuffer.join("") });
						contentBuffer.splice(0, contentBuffer.length - 1);

						stack.pop();
						last = stack[stack.length - 1];
					} else
						contentBuffer.push(`</${buffer}>`);
				} else {
					stack.pop();
					last = stack[stack.length - 1];
				}
				clear();
			} else
				buffer.push(c);
		} else if (stat === ParsingStat.TagName) {
			if (isWhitespace(c) || c === ">") {
				if (isWhitespace(c))
					stat = ParsingStat.TagAttrsIdle;
				else
					stat = ParsingStat.Idle;

				last.childs.push(last = {
					name: buffer.join(""),
					attrs: [],
					childs: [],
				});
				stack.push(last);
				if (skips.some(x => x === last.name.toLowerCase()))
					skipping = last.name;
				clear();
			} else if (c === "/") { // 공백 없는 바로 닫는 태그
				stat = ParsingStat.TagAttrsIdle;
				selfClosing = true;
			} else
				buffer.push(c);

		} else if (stat === ParsingStat.TagAttrsIdle) {
			if (c === ">") {
				stat = ParsingStat.Idle;

				if (selfClosing) {
					last.childs.push({
						name: buffer.join(""),
						attrs: [],
						childs: [],
					});
					clear();
					selfClosing = false;
				}
			} else if (!isWhitespace(c)) { // 띄어쓰기 제외한 값이 있는 경우
				stat = ParsingStat.TagAttrsName;

				attr = { name: "", value: null };
				i--;
			}
		} else if (stat === ParsingStat.TagAttrsName) {
			if (c === "=" || isWhitespace(c) || c === ">" || (c === "/" && source[i + 1] === ">")) {
				attr.name = (attr.name || "") + buffer.join("");
				attr.value = null;
				clear();

				if (isWhitespace(c) || c === ">") {
					if (isWhitespace(c))
						stat = ParsingStat.TagAttrsIdle;
					else
						stat = ParsingStat.Idle;

					last.attrs.push(attr);
				} else if (c === "/") { // 단일 종료 태그
					stat = ParsingStat.Idle;
					i++;

					stack.pop();
					last = stack[stack.length - 1];
				} else
					stat = ParsingStat.TagAttrsValue;
			} else
				buffer.push(c);
		} else if (stat === ParsingStat.TagAttrsValue) {
			if (c === "\"" || c === "'") {
				stat = ParsingStat.TagAttrsValueQuote;
				quote = c;
				clear();
			} else if (isWhitespace(c)) {
				stat = ParsingStat.TagAttrsIdle;

				attr.value = buffer.length > 0
					? buffer.join("")
					: null; // value 없는 attribute
				last.attrs.push(attr);
				clear();
			} else
				buffer.push(c);
		} else if (stat === ParsingStat.TagAttrsValueQuote) {
			if (c === quote) {
				stat = ParsingStat.TagAttrsIdle;

				attr.value = buffer.join("");
				last.attrs.push(attr);
				clear();
			} else
				buffer.push(c);
		}
	}
	if (buffer.length > 0)
		last.childs.push(textNode(buffer.join("")));

	return root;
}
