import { createElement } from "preact";

enum ParseState {
	Idle,
	TagIn,
}
interface ParseTagInfo {
	type: string;
	attrs: Record<string, string>;
}
interface ParseTreeItem {
	tag: ParseTagInfo;
	parent: ParseTreeItem | null;
	children: Array<string | ParseTreeItem>;
}

export function ParseDescriptionText (text: string): preact.VNode[] {
	const tree: ParseTreeItem = {
		tag: { type: "root", attrs: {} },
		parent: null,
		children: [],
	};
	let current = tree;
	const parseBuffer: string[] = [];

	let state: ParseState = ParseState.Idle;

	function compileTags (tag: ParseTreeItem = tree): preact.VNode {
		return createElement(tag.tag.type, tag.tag.attrs, tag.children.map(r => typeof r === "string" ? r : compileTags(r)));

		// if (isColorValid()) { // last tag was color tag
		// 	const c = color();
		// 	if (parseItalic)
		// 		ret.push(<i data-color={ c } style={ { color: c } }>{ text }</i>);
		// 	else
		// 		ret.push(<span data-color={ c } style={ { color: c } }>{ text }</span>);
		// } else if (parseItalic)
		// 	ret.push(<i>{ text }</i>);
		// else
		// 	ret.push(<>{ text }</>);

	}

	for (let i = 0; i < text.length; i++) {
		const c = text[i];

		// [-] : close tag (close last tag?)
		// [/?] : close tag

		switch (state) {
			case ParseState.Idle: // Idle
				if (c === "[") {
					state = ParseState.TagIn;

					if (parseBuffer.length > 0) { // non-tagged buffer exists
						current.children.push(parseBuffer.join(""));
						parseBuffer.splice(0, parseBuffer.length); // clear buffer
					}
				} else
					parseBuffer.push(c);

				break;
			case ParseState.TagIn:
				if (c === "]") {
					state = ParseState.Idle;

					const tag = parseBuffer.join(""); // parsed tag
					parseBuffer.splice(0, parseBuffer.length); // clear buffer

					if (tag === "-") // close tag
						current = current.parent!;
					else if (tag.startsWith("/")) {
						const target = tag.substring(1);
						// close tag until find same tagname
						while (current.parent !== null) {
							let found = current.tag.type === target;
							current = current.parent;
							if (found) break;
						}
					} else if (/^[0-9A-Fa-f]{6}$/.test(tag)) { // color tag
						const t: ParseTreeItem = {
							tag: {
								type: "span",
								attrs: {
									"data-color": `#${tag}`,
									"style": `color:#${tag}`,
								},
							},
							parent: current,
							children: [],
						};
						current.children.push(t);
						current = t;
					} else {
						const t: ParseTreeItem = {
							tag: {
								type: tag,
								attrs: {},
							},
							parent: current,
							children: [],
						};
						current.children.push(t);
						current = t;
					}
					// parseDepth++;
				} else
					parseBuffer.push(c);

				break;
		}
	}
	if (parseBuffer.length > 0) // non-tagged buffer exists
		current.children.push(parseBuffer.join(""));

	return tree.children.map(r => typeof r === "string" ? <>{ r }</> : compileTags(r));
}
