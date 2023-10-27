import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { MapNodeEntity } from "@/types/DB/Map";
import { STAGE_SUB_TYPE } from "@/types/Enums";

import { AssetsRoot } from "@/libs/Const";
import MapPosition from "@/libs/MapPosition";

import style from "./style.module.scss";

interface MapNodeProps {
	node: MapNodeEntity;

	type: STAGE_SUB_TYPE;
	// byOffset?: boolean;

	active?: boolean;
	missing?: boolean;
	icon?: string;
}
const MapNode: FunctionalComponent<MapNodeProps> = (props) => {
	const node = props.node;
	const typeIdx = props.type === STAGE_SUB_TYPE.STORY
		? 0 // temp
		: props.type;

	return <>
		<image
			href={ `${AssetsRoot}/world/node.png?v=2` }
			x="25"
			y="7"
			width="96"
			height="30"
		/>
		{ props.active && <image
			href={ `${AssetsRoot}/world/node-selected-${typeIdx}.png` }
			x="25"
			y="-1"
			width="96"
			height="38"
		/> }

		<image
			class={ style.NodeIcon }
			href={ props.icon
				? `${AssetsRoot}/world/badge/${props.icon}.png`
				: `${AssetsRoot}/world/mapicon_${typeIdx}${props.node.type === STAGE_SUB_TYPE.STORY ? "s" : "n"}.png`
			}
			x={ props.icon ? "4" : "8" }
			y={ props.icon ? "-4" : "1" }
			width={ props.icon ? "50" : "38" }
		/>
		{/* <rect x="60" y="12" width="4" height="18" fill={ colors[typeIdx] } /> */ }
		<text
			class="font-exo2"
			x="82" y="24"
			fill="#fff"
			textAnchor="middle"
			dominantBaseline="middle"
		>{ node.text }</text>

		{ props.missing && <text
			class={ style.missing }
			x="83"
			y="36"
			fill="#999"
			textAnchor="middle"
			dominantBaseline="middle"
		>missing link</text> }
	</>;
};


const padding = 20; // 패딩
const gx = 15; // 노드간 가로 거리
const gy = gx; // 노드간 세로 거리

const w = 136; // 노드 가로 크기
const h = 44; // 노드 세로 크기
const ww = w / 2; // 가로 절반 크기
const hh = h / 2; // 세로 절반 크기

const vw = w + gx;
const vh = h + gy;

const baseX = padding; // 기본 X
const baseY = padding; // 기본 Y

interface MapGridProps {
	nodes: MapNodeEntity[];
	selected: MapNodeEntity | null;
	hardcoded?: boolean;

	wid?: string;
	mid?: string;

	onSelect?: (selected: MapNodeEntity, el: HTMLAnchorElement, x: number) => void;
}

const MapGrid: FunctionalComponent<MapGridProps> = (props) => {
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (svgRef.current) {
			const ref = svgRef.current;
			const bound = ref.getBBox();
			const _w = Math.max(padding * 2 + w * 8 + gx * 7, bound.x + bound.width + padding);
			const _h = Math.max(padding * 2 + h * 3 + gy * 2, bound.y + bound.height + padding);
			ref.setAttribute("viewBox", `0 0 ${_w} ${_h}`);
			ref.style.minWidth = `${_w}px`;

			if (props.selected) {
				const node = props.selected;
				if (node.text && props.onSelect) {
					const el = svgRef.current.querySelector<HTMLAnchorElement>(`a[data-key="${node.key}"]`);
					if (el) {
						const x = parseFloat(el.dataset.x || "0");
						props.onSelect(node, el, x);
					}
				}
			}
		}
	}, []);

	const wid = props.wid || "";
	const mid = props.mid || "";
	const nodes = props.nodes.sort((a, b) => a.offset - b.offset);

	const RECTS = (() => {
		const ret: preact.VNode[] = [];
		const lines: preact.VNode[] = [];

		const byOffset = !props.hardcoded;
		const used: number[] = [];

		const line = (x1: number, y1: number, x2: number, y2: number, from: MapNodeEntity, to: MapNodeEntity) => <line
			x1={ x1 }
			y1={ y1 }
			x2={ x2 }
			y2={ y2 }
			stroke="rgba(255,255,255,0.75)"
			strokeWidth="2"
			strokeLinecap="round"
			data-from={ from.text }
			data-to={ to.text }
		/>;
		const render = (node: MapNodeEntity, missing: boolean = false) => {
			if (used.includes(node.offset)) return;
			used.push(node.offset);

			let x = node.offset % 8;
			let y = Math.floor(node.offset / 8);
			let type = node.type;

			const posX = x;
			const hasPos = (wid in MapPosition) && (mid in MapPosition[wid]);
			const vw2 = vw * 1.2;

			if (hasPos && !byOffset) {
				x = baseX + MapPosition[wid][mid][node.text][0] * vw2;
				y = baseY + MapPosition[wid][mid][node.text][1] * vh;

				if (type === STAGE_SUB_TYPE.STORY)
					type = MapPosition[wid][mid][node.text][3] || STAGE_SUB_TYPE.MAIN;
			} else {
				const offsetX = ((y - 1) % 2) * vw / 2;

				x = baseX + x * vw + offsetX;
				y = baseY + y * vh;
			}

			// render(nx, t, [node], undefined, true);
			ret.push(<a
				href={ node.text ? `/worlds/${wid}/${mid}/${node.text}` : undefined }
				data-key={ node.key }
				data-x={ x }
				onClick={ e => {
					e.preventDefault();
					if (node.text && props.onSelect)
						props.onSelect(node, e.currentTarget, x);
				} }
			>
				<g transform={ `translate(${x}, ${y})` }>
					<MapNode
						node={ node }
						type={ type }
						active={ props.selected === node }
						missing={ missing }
						icon={ hasPos && MapPosition[wid][mid][node.text][4] || undefined }
					// byOffset={ byOffset }
					/>
				</g>,
			</a>);

			nodes
				.filter(n => n.prev.includes(node.offset))
				.forEach(n => {
					if (!(hasPos && !byOffset) || MapPosition[wid][mid][n.text][2] !== false) {
						const posX2 = n.offset % 8;

						if (hasPos && !byOffset) {
							const toX = baseX + MapPosition[wid][mid][n.text][0] * vw2;
							const toY = baseY + MapPosition[wid][mid][n.text][1] * vh;

							if (x <= toX) {
								lines.push(line(
									x + ww,
									y + hh,
									toX + ww,
									toY + hh,
									node, n,
								));
							}
						} else if (posX2 === posX || (posX2 - posX === 1)) {
							const posY2 = Math.floor(n.offset / 8);
							const offsetX2 = ((posY2 - 1) % 2) * vw / 2;

							const fromX = x;
							const toX = baseX + posX2 * vw + offsetX2;

							const fromY = y;
							const toY = baseY + posY2 * vh;

							if (fromX <= toX) {
								lines.push(line(
									fromX + h,
									fromY + hh,
									toX + h,
									toY + hh,
									node, n,
								));
							}
						}
					}

					render(n, missing);
				});
		};

		nodes
			.filter(n => n.prev.length === 0)
			.forEach(n => render(n));

		const missing = nodes.filter(x => !used.includes(x.offset));
		if (missing.length > 0) {
			missing.forEach(x => render(x, true));
			lines.push(<rect
				x={ 0 }
				y={ baseY + vh * 4 - (vh - h) / 2 }
				width={ "100%" }
				height={ vh }
				fill="rgba(0,0,0,0.4)"
			/>);
		}

		// return [...ret, ...lines];
		return [...lines, ...ret];
	})();

	return <div class={ style.WorldsMapGrid }>
		<div class={ style.Preload }>
			<img src={ `${AssetsRoot}/world/mapicon_0n.png` } />
			<img src={ `${AssetsRoot}/world/mapicon_1n.png` } />
			<img src={ `${AssetsRoot}/world/mapicon_2n.png` } />
			<img src={ `${AssetsRoot}/world/mapicon_0s.png` } />
			<img src={ `${AssetsRoot}/world/mapicon_1s.png` } />
			<img src={ `${AssetsRoot}/world/mapicon_2s.png` } />
			<img src={ `${AssetsRoot}/world/node-selected-0.png` } />
			<img src={ `${AssetsRoot}/world/node-selected-1.png` } />
			<img src={ `${AssetsRoot}/world/node-selected-2.png` } />
		</div>

		<svg class={ style.MapGrid } xmlns="http://www.w3.org/2000/svg" ref={ svgRef }>
			{ RECTS }
		</svg>
	</div>;
};
export default MapGrid;
