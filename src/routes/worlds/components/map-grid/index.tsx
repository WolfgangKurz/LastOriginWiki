import { createRef, Component, FunctionalComponent, RenderableProps } from "preact";
import { Link } from "preact-router";

import { MapNodeEntity } from "@/types/DB/Map";
import { STAGE_SUB_TYPE } from "@/types/Enums";

import { AssetsRoot } from "@/libs/Const";

import style from "./style.module.scss";

interface MapNodeProps {
	node: MapNodeEntity;
	byOffset?: boolean;

	active?: boolean;
	missing?: boolean;
}

function GetTypeIdx (node: MapNodeEntity, byOffset: boolean = false): 0 | 1 | 2 {
	const key = node.key;

	if (byOffset) return Math.floor(node.offset / 8) as (0 | 1 | 2);

	return /[0-9]+$/.test(key)
		? 1
		: /(Ex|C)$/.test(key)
			? 2
			: 0;
}

const MapNode: FunctionalComponent<MapNodeProps> = (props) => {
	const node = props.node;
	const typeIdx = GetTypeIdx(node, props.byOffset);
	// const colors: string[] = [
	// 	"#61d42a",
	// 	"#fdc902",
	// 	"#ff3443",
	// ];

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
			href={ `${AssetsRoot}/world/mapicon_${typeIdx}${props.node.type === STAGE_SUB_TYPE.STORY ? "s" : "n"}.png` }
			x="8" y="1" width="38"
		/>
		{/* <rect x="60" y="12" width="4" height="18" fill={ colors[typeIdx] } /> */ }
		<text x="82" y="23" fill="#fff" textAnchor="middle" dominantBaseline="middle">{ node.text }</text>

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

const vw = w + gx;
const vh = h + gy;

const baseX = padding; // 기본 X
const baseY = padding; // 기본 Y

interface NewMapGridProps {
	nodes: MapNodeEntity[];
	selected: MapNodeEntity | null;

	wid?: string;
	mid?: string;

	onSelect?: (selected: MapNodeEntity) => void;
}

class MapGrid extends Component<NewMapGridProps>{
	private svgRef = createRef<SVGSVGElement>();

	constructor () {
		super();
	}

	componentDidMount () {
		if (this.svgRef.current) {
			const ref = this.svgRef.current;
			const bound = ref.getBBox();
			const _w = Math.max(padding * 2 + w * 8 + gx * 7, bound.x + bound.width + padding);
			const _h = Math.max(padding * 2 + h * 3 + gy * 2, bound.y + bound.height + padding);
			ref.setAttribute("viewBox", `0 0 ${_w} ${_h}`);
			ref.style.minWidth = `${_w}px`;
		}
	}

	render (props: RenderableProps<NewMapGridProps>) {
		const wid = props.wid || "";
		const mid = props.mid || "";
		const nodes = props.nodes.sort((a, b) => a.offset - b.offset);

		const RECTS = (() => {
			const ret: preact.VNode[] = [];
			const lines: preact.VNode[] = [];

			const hasStory = nodes.some(x => x.type === STAGE_SUB_TYPE.STORY);
			const byOffset = !(props.wid || "").startsWith("Ev") || parseInt((props.wid || "Ev0").substring(2), 10) < 14
			|| props.wid === "Ev15";

			const mainXTable: Record<number, number> = {};
			const used: number[] = [];

			const zigzagV = vw * 3 / 5;
			let mainX: number = 0;
			let exX: number = baseX + zigzagV;
			let missingX: number = baseX;

			const yTable: Record<number, number> = {
				0: 0,
				1: vh,
				2: vh * (hasStory ? 3 : 2),
				3: vh * (hasStory ? 4 : 3),
			};

			const render = (node: MapNodeEntity, x: number, missing: boolean = false) => {
				if (used.includes(node.offset)) return;
				used.push(node.offset);

				const line = (x1: number, y1: number, x2: number, y2: number, baseX: number, from: MapNodeEntity, to: MapNodeEntity) => <line
					x1={ baseX + x1 }
					y1={ baseY + y1 }
					x2={ baseX + x2 }
					y2={ baseY + y2 }
					stroke="rgba(255,255,255,0.75)"
					strokeWidth="1.5"
					strokeLinecap="round"
					data-from={ from.text }
					data-to={ to.text }
				/>;

				const nodeType = missing ? 3 : GetTypeIdx(node, byOffset);
				let y = yTable[nodeType] + (nodeType === 1 && mainX === 1 ? vh : 0);

				if (byOffset) {
					x = baseX + (node.offset % 8) * vw + (Math.floor(node.offset / 8 - 1) * vw / 2);
					y = Math.floor(node.offset / 8) * vh;
				}

				// render(nx, t, [node], undefined, true);
				ret.push(<Link
					href={ node.text ? `/worlds/${wid}/${mid}/${node.text}` : undefined }
					onClick={ (e: Event): void => {
						e.preventDefault();
						if (node.text && props.onSelect)
							props.onSelect(node);
					} }
				>
					<g transform={ `translate(${x}, ${baseY + y})` }>
						<MapNode
							node={ node }
							active={ props.selected === node }
							missing={ missing }
							byOffset={ byOffset }
						/>
					</g>,
				</Link>);

				if (nodeType === 1 && hasStory)
					mainX = (mainX + 1) % 2;
				else if (nodeType === 2)
					exX += hasStory ? zigzagV * 2 : vw;
				else if (nodeType === 3)
					missingX += vw;

				if (hasStory)
					mainXTable[node.offset] = mainX;

				nodes
					.filter(n => n.prev.includes(node.offset))
					.forEach(n => {
						const nType = missing ? 3 : GetTypeIdx(n, byOffset);
						const rx = nType === 0
							? nType === nodeType ? vw : (hasStory ? 0 : zigzagV)
							: nType === 1
								? nType === nodeType ? (hasStory ? zigzagV : vw) : 0
								: nType === 2
									? (hasStory ? 0 : zigzagV)
									: vw;

						(() => {
							if (!byOffset || Math.abs((n.offset % 8) - (node.offset % 8)) <= 1) {
								if (nType !== 2) {
									if (nodeType === 1 && nType === 1) { // Main -> Main
										if (hasStory) {
											lines.push(line(
												w / 2,
												vh + (mainX === 1 ? 0 : vh) + h / 2,
												rx + w / 2,
												vh + (mainX === 1 ? vh : 0) + h / 2,
												x,
												node, n,
											));
										} else {
											lines.push(line(
												w / 2,
												vh + h / 2,
												rx + w / 2,
												vh + h / 2,
												x,
												node, n,
											));
										}
									} else if (nodeType === 1) { // Main -> others
										if (byOffset && (n.offset % 8) <= (node.offset % 8))
											return;

										lines.push(line(
											w / 2,
											vh + (!hasStory || (mainXTable[node.offset] === 1) ? 0 : vh) + h / 2,
											w / 2 + (hasStory ? 0 : zigzagV),
											yTable[nType] + h / 2,
											x,
											node, n,
										));
									} else if (nType === 1) { // others -> Main
										lines.push(line(
											w / 2,
											yTable[nodeType] + h / 2,
											w / 2 + (hasStory ? 0 : zigzagV),
											yTable[nType] + h / 2,
											x,
											node, n,
										));
									} else if (nodeType !== 3 && nType !== 3) { // others -> others (except missing)
										lines.push(line(
											w / 2,
											yTable[nType] + h / 2,
											vw + w / 2,
											yTable[nType] + h / 2,
											x,
											node, n,
										));
									}
								} else if (nodeType === nType) {
									lines.push(line(
										w / 2,
										yTable[nodeType] + h / 2,
										w / 2 + vw,
										yTable[nType] + h / 2,
										hasStory ? exX - vw : x,
										node, n,
									));
								}
							}
						})();

						render(
							n,
							nType === 2
								? exX
								: nType === 3
									? missingX
									: x + rx,
							missing,
						);
					});
			};

			nodes
				.filter(n => n.prev.length === 0)
				.forEach(n => render(n, baseX));

			const missing = nodes.filter(x => !used.includes(x.offset));
			if (missing.length > 0) {
				missing.forEach(x => render(x, baseX, true));
				lines.push(<rect
					x={ 0 }
					y={ baseY + vh * 4 - (vh - h) / 2 }
					width={ "100%" }
					height={ vh }
					fill="rgba(0,0,0,0.4)"
				/>);
			}

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

			<svg class={ style.MapGrid } xmlns="http://www.w3.org/2000/svg" ref={ this.svgRef }>
				{ RECTS }
			</svg>
		</div>;
	}
}
export default MapGrid;
