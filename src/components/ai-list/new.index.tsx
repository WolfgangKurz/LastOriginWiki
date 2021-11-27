import { FunctionalComponent } from "preact";
import { CSSProperties } from "react";
import ReactFlow, { ArrowHeadType, Background, BackgroundVariant, Edge, Elements, Node as _Node, Position } from "react-flow-renderer";
import * as acorn from "acorn";

import Locale from "@/components/locale";

import style from "./style.module.scss";

const edgeBase: Partial<Edge<any>> = {
	type: "straight",
	arrowHeadType: ArrowHeadType.ArrowClosed,
	style: { stroke: "#040404" },
	labelBgPadding: [7, 1],
	// labelStyle: { lineHeight: 1.2, fontSize: "75%" },
};

interface ParseSession {
	elIndex: number;
	x: number;
	y: number;
	prev: string[];
}

const stepX = 300;
const stepY = 80;

function last<T> (arr: T[]): T {
	return arr[arr.length - 1];
}
function rasterize (data: acorn.Expression | acorn.SpreadElement | acorn.Super): string {
	switch (data.type) {
		case "Super": return "super";
		case "Identifier": return data.name;
		case "Literal": return data.value?.toString() || "undefined";

		case "CallExpression":
			switch (rasterize(data.callee)) {
				case "targets":
					// return `${rasterize(data.arguments[0])}번 스킬의 사정거리 내에 존재하는 적`;
					return `${rasterize(data.callee)}(${rasterize(data.arguments[0])})`;
				case "skill":
					return `적이 ${rasterize(data.arguments[0])}번 스킬을 ${rasterize(data.arguments[1])}에 사용`;
			}
			return "";
	}
	return "???";
}
function conv (data: acorn.Expression, session: ParseSession): _Node<any> {
	let disp: preact.VNode = <>???</>;
	const style: CSSProperties = {};

	switch (data.type) {
		case "BinaryExpression":
			disp = <>
				{ rasterize(data.left) }
				&nbsp;
				{ data.operator }
				&nbsp;
				{ rasterize(data.right) }
			</>;
			break;
		case "CallExpression":
			disp = <>
				{ rasterize(data.callee) }
				({ data.arguments.map(a => rasterize(a)).join(", ") })
			</>;
			break;
	}

	return {
		id: `n${session.elIndex}`,
		data: { label: disp },
		style,
		position: { x: session.x + 10, y: session.y + 10 },
	};
}
function ParseCore (nodes: acorn.Expression[], session: ParseSession, labelType?: number): Elements {
	function newEdge (): Edge<any> {
		return {
			...edgeBase,
			id: `e${session.elIndex}`,
			source: last(session.prev),
			target: `n${session.elIndex}`,
			label: labelType === -1
				? "아니라면"
				: labelType === 1
					? "맞다면"
					: undefined,
			labelStyle: {
				// ...edgeBase.labelStyle,
				fill: "#fff",
			},
			labelBgStyle: {
				fill: labelType === -1
					? "#9f4f4f"
					: labelType === 1
						? "#4f9f4f"
						: undefined,
			},
			sourceHandle: "left",
		};
	}
	const ret: Elements = [];

	nodes.forEach(exp => {
		switch (exp.type) {
			case "ConditionalExpression":
				session.elIndex++;
				ret.push({
					...conv(exp.test, session),
					style: { background: "#fffcdf" },
					targetPosition: labelType === -1 ? Position.Top : labelType === 1 ? Position.Left : undefined,
				});
				ret.push(newEdge());
				session.prev.push(`n${session.elIndex}`);

				// session.y += stepY;
				session.x += stepX;
				session.elIndex++;
				ret.push(...ParseCore([exp.consequent], session, 1));
				session.x -= stepX;

				session.y += stepY;
				session.elIndex++;
				ret.push(...ParseCore([exp.alternate], session, -1));
				session.y -= stepY;

				session.prev.pop();
				break;
			case "CallExpression":
				session.elIndex++;
				ret.push({
					...conv(exp, session),
					targetPosition: labelType === -1 ? Position.Top : labelType === 1 ? Position.Left : undefined,
				});
				ret.push(newEdge());
				break;
		}
	});
	// { ...edgeBase, id: "e1-2", source: "start", target: "2", label: "test" },
	// { ...edgeBase, id: "e1-3", source: "start", target: "3", label: "test" },

	return ret;
}
function Parse (data: string): Elements {
	const ret: Elements = [];
	const session: ParseSession = {
		elIndex: 1,
		x: 0,
		y: 100,
		prev: [],
	};

	ret.push({
		id: "start",
		data: { label: <Locale k="AI_START" /> },
		position: { x: 10, y: 10 },
		style: { background: "#ffdfdf" },
	});
	session.prev.push("start");

	const cond = (acorn.parse(data).body as acorn.ExpressionStatement[])
		.map(exp => exp.expression);

	ret.push(...ParseCore(cond, session));
	console.log(ret);
	return ret;
}

const AIList: FunctionalComponent = (): preact.VNode => {
	const ai = `
	targets(2) > 0
		? skill(2, random)
		: targets(1) > 0
			? skill(1, random)
			: movable(1)
				? move(1)
				: movable(2)
					? move(2)
					: wait()`;
	const elements = Parse(ai);

	return <div class={ `border ${style.AIList}` } style="height:1200px">
		<ReactFlow
			elements={ elements }
			defaultZoom={ 1.5 }
			nodesDraggable={ false }
			nodesConnectable={ false }
			elementsSelectable={ false }
			zoomOnScroll={ false }
			zoomOnPinch={ false }
			zoomOnDoubleClick={ false }
			panOnScroll={ false }
			preventScrolling={ false }
		>
			<Background variant={ BackgroundVariant.Dots } gap={ 10 } size={ 0.4 } />
		</ReactFlow>
	</div>;
};
export default AIList;
