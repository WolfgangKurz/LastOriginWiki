import he from "he";

import parse, { ParseAttr, ParseNode } from "@/libs/DOMParser";

export type XMLNodeAttrs = Record<string, string>;
export type XMLNodeConvertCallback = (name: string, attrs: XMLNodeAttrs, inner: string, outer: string) => string;

function escapeXML (value: string): string {
	return he.escape(value);
}

function attrsToRecord (attrs: ParseAttr[]): XMLNodeAttrs {
	const ret: XMLNodeAttrs = {};

	for (const attr of attrs)
		ret[attr.name] = attr.value !== null
			? he.decode(attr.value)
			: "true";

	return ret;
}

function stringifyAttrs (attrs: ParseAttr[]): string {
	if (attrs.length === 0)
		return "";

	return attrs
		.map(attr => attr.value !== null
			? `${attr.name}="${escapeXML(he.decode(attr.value))}"`
			: attr.name)
		.join(" ");
}

function traverseXML (nodes: ParseNode[], cb: XMLNodeConvertCallback): string {
	return nodes.map(node => {
		if ("content" in node)
			return escapeXML(node.content);

		const attrs = attrsToRecord(node.attrs);
		const inner = traverseXML(node.childs, cb);
		const attrText = stringifyAttrs(node.attrs);
		const tagStart = attrText.length > 0
			? `<${node.name} ${attrText}`
			: `<${node.name}`;
		const outer = node.childs.length > 0
			? `${tagStart}>${inner}</${node.name}>`
			: `${tagStart} />`;

		return cb(node.name, attrs, inner, outer);
	}).join("");
}

/**
 * XML 문자열을 순회하며 각 요소 노드를 콜백 반환값으로 변환하는 함수
 */
export function convertXMLNode (template: string, cb: XMLNodeConvertCallback): string {
	try {
		const parsed = parse(template);
		return traverseXML(parsed.childs, cb);
	} catch {
		console.error("Failed to convert XML!", template);
		return template;
	}
}
