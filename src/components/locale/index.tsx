import { ComponentType, FunctionalComponent, createElement } from "preact";

import { CurrentLocale, LocaleTypes } from "@/libs/Locale";

import { GetJson, StaticDB } from "@/components/loader";

type LocaleComponentProp<T> = Record<string, ComponentType<T>>;

const paramRegex = /({[0-9]+})/g;

/**
 * `Node` 목록을 자식까지 `VNode` 또는 `VNode[]`로 변환하는 함수
 */
function traverseVNode<T> (nodes: Node[] | NodeListOf<ChildNode>, p: LocaleProps<T>["p"], components: LocaleComponentProp<T>): preact.VNode[] {
	const ret: preact.VNode[] = [];

	nodes.forEach((x: Node) => {
		switch (x.nodeType) {
			case Node.TEXT_NODE:
				{
					const text = (x as Text).data || "";
					ret.push(
						...text.split(paramRegex).map(x => {
							const r = paramRegex.exec(x);
							return r
								? ((): preact.VNode => {
									const idx = parseInt(r[1].substr(1, r[1].length - 2), 10);
									if (p) {
										const v = p[idx];
										if (typeof v === "string" || typeof v === "number" || typeof v === "boolean")
											return <>{ p[idx] }</>;
										return v;
									}
									return <></>;
								})()
								: <>{ x }</>;
						}),
					);
				}
				break;
			case Node.ELEMENT_NODE:
				{
					const y = x as Element;
					const attrs: Record<string, string> = {};

					const attributes = y.attributes;
					for (const item of attributes) {
						if (item.name.toLowerCase() === "class")
							continue; // className은 staticClass로 지정하기 때문에 제외
						attrs[item.name] = item.value;
					}

					if (x.nodeName in components) {
						const comp = components[x.nodeName];
						ret.push(createElement<any>(
							comp,
							{ ...attrs } as any,
							traverseVNode(x.childNodes, p, components),
						));
					} else {
						ret.push(createElement(
							x.nodeName,
							{ ...attrs, class: y.className },
							traverseVNode(x.childNodes, p, components),
						));
					}
				}
				break;
		}
	});
	return ret;
}

/**
 * HTML(XML) 문자열을 `VNode` 또는 `VNode[]`로 변환하는 함수
 */
function parseVNode<T> (template: string, p: LocaleProps<T>["p"], components: LocaleComponentProp<T>): preact.VNode[] {
	const ret: preact.VNode[] = [];
	const parser = new DOMParser();

	try {
		const parsed = parser.parseFromString(`<x>${template}</x>`, "text/xml");
		ret.push(...traverseVNode(parsed.childNodes[0].childNodes, p, components));
	} catch {
		throw new Error("Failed to parse HTML");
	}

	return ret;
}

export const GetLocaleTable = (locale: LocaleTypes) =>
	GetJson<Record<string, string>>(StaticDB.Locale[locale]);

export interface LocaleProps<T> {
	k: string;
	p?: Array<string | number | boolean | preact.VNode>;
	preprocessor?: (source: string) => string;
	fallback?: string | number | boolean | preact.VNode;
	components?: LocaleComponentProp<T>;
	plain?: boolean;
}

const Locale: FunctionalComponent<LocaleProps<any>> = (props) => {
	const locale = GetLocaleTable(CurrentLocale);

	if (locale) {
		let t = locale[props.k];
		if (t) {
			if (props.preprocessor)
				t = props.preprocessor(t);

			if (props.plain) {
				return <>{ (t).split(paramRegex).map(x => {
					const r = paramRegex.exec(x);
					return r
						? ((): preact.VNode => {
							const idx = parseInt(r[1].substr(1, r[1].length - 2), 10);
							if (props.p) {
								const v = props.p[idx];
								if (typeof v === "string" || typeof v === "number" || typeof v === "boolean")
									return <>{ props.p[idx] }</>;
								return v;
							}
							return <></>;
						})()
						: <>{ x }</>;
				}) }</>;
			}
			return <>{ parseVNode(t, props.p, props.components || {}) }</>;
		}

		return typeof props.fallback === "string" ||
			typeof props.fallback === "number" ||
			typeof props.fallback === "boolean"
			? <>{ props.fallback }</>
			: typeof props.fallback === "undefined"
				? <>{ props.k }</>
				: props.fallback;
	}
	return <>{ props.k }</>;
};
export default Locale;

export function LocaleGet (k: string, ...p: any[]): string {
	const locale = GetLocaleTable(CurrentLocale);
	const t = (locale && locale[k]) || k;
	return t.replace(/\{([0-9]+)\}/g, (p0, p1) => {
		const idx = parseInt(p1, 10);
		if (idx < 0 || idx >= p.length) return "";
		return p[idx];
	});
}

export function LocaleExists (k: string): boolean {
	const locale = GetLocaleTable(CurrentLocale);
	return locale && k in locale;
}
