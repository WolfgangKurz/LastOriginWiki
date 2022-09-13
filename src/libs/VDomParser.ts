import { createElement } from "preact";

export default function ParseVDOM (el: Node): preact.ComponentChild {
	switch (el.nodeType) {
		case Node.ELEMENT_NODE:
			break;

		case Node.ATTRIBUTE_NODE:
			throw new Error("ATTRIBUTE_NODE not implemented");

		case Node.TEXT_NODE:
			return (el as Text).textContent;

		case Node.COMMENT_NODE:
			return undefined; // Skip Comment Node
	}

	const _el = el as Element;
	const tag = _el.tagName;

	const attrs: Record<string, string> = {};
	const attrKeys = Object.keys(_el.attributes);
	attrKeys.forEach(k => {
		const attr = _el.attributes.item(k as unknown as number);
		if (!attr) return;

		attrs[attr.name] = attr.value;
	});

	const childs: preact.ComponentChild[] = [];
	_el.childNodes.forEach(c => childs.push(ParseVDOM(c)));

	return createElement(tag, attrs, childs.filter(x => x));
}

export function TravelVDOM (node: preact.VNode, cb: (vdom: preact.VNode, parent: preact.VNode | undefined, depth: number) => void, parent?: preact.VNode, depth: number = 0): void {
	cb(node, parent, depth);

	const childs = Array.isArray(node.props.children)
		? node.props.children
		: [node.props.children];

	childs.forEach(c => {
		if (typeof c === "object" && c !== null && "props" in c)
			TravelVDOM(c, cb, node, depth + 1);
	});
}
