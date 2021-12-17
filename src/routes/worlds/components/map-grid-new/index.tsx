import { createRef, Component, FunctionalComponent, RenderableProps } from "preact";
import { Link } from "preact-router";

import { MapNodeEntity } from "@/types/DB/Map";
import { STAGE_SUB_TYPE } from "@/types/Enums";

import { AssetsRoot } from "@/libs/Const";
import { groupBy } from "@/libs/Functions";

import style from "./style.module.scss";

interface MapNodeProps {
	node: MapNodeEntity;
	active?: boolean;
	missing?: boolean;
}

function GetTypeIdx (name: string): 0 | 1 | 2 {
	return /[0-9]+$/.test(name)
		? 1
		: /(Ex|C)$/.test(name)
			? 2
			: 0;
}

const MapNode: FunctionalComponent<MapNodeProps> = (props) => {
	const name = props.node.text;
	const typeIdx = GetTypeIdx(name);
	const colors: string[] = [
		"#61d42a",
		"#fdc902",
		"#ff3443",
	];

	return <>
		{ props.active && <image x="-10" y="-10" href={ `${AssetsRoot}/world/node-selected.png` } width="156" height="65" /> }

		<image href={ `${AssetsRoot}/world/node.png` } width="136" height="45" />
		<image
			href={ `${AssetsRoot}/world/mapicon_${typeIdx}${props.node.type === STAGE_SUB_TYPE.STORY ? "s" : "n"}.png` }
			x="8" y="-6" width="38"
		/>
		<rect x="60" y="12" width="4" height="18" fill={ colors[typeIdx] } />
		<text x="68" y="14" fill="#000" dominantBaseline="hanging">{ name }</text>

		{ props.missing && <text class={ style.missing } x="68" y="28" fill="#444" dominantBaseline="hanging">missing</text> }
	</>;
};

interface NewMapGridProps {
	nodes: MapNodeEntity[];
	selected: MapNodeEntity | null;

	wid?: string;
	mid?: string;

	onSelect?: (selected: MapNodeEntity) => void;
}

const padding = 20; // 패딩

const px = 10; // 분할점 거리
const ps = 7; // 분할 도착점 크기
const pbs = 9; // 분할 시작점 크기

const w = 136; // 노드 가로 크기
const h = 45; // 노드 세로 크기

const v = w + 30; // 노드간 거리 + w
const t = h + 30; // 노드간 세로 거리 + h

const baseX = padding + -v; // 기본 X
const baseY = padding + t; // 기본 Y

class NewMapGrid extends Component<NewMapGridProps>{
	private svgRef = createRef<SVGSVGElement>();

	constructor () {
		super();
	}

	componentDidMount () {
		if (this.svgRef.current) {
			const ref = this.svgRef.current;
			const bound = ref.getBBox();
			const w = bound.x + bound.width + padding;
			const h = bound.y + bound.height + padding;
			ref.setAttribute("viewBox", `0 0 ${w} ${h}`);
			ref.style.minWidth = `${w}px`;
		}
	}

	render (props: RenderableProps<NewMapGridProps>) {
		const wid = props.wid || "";
		const mid = props.mid || "";

		const RECTS = (() => {
			const ret: preact.VNode[] = [];
			const used: number[] = [];

			const render = (x: number, y: number, data: MapNodeEntity[], parent?: number, missing: boolean = false): void => {
				const c = data.length;

				const rx = x + v + (c > 1 ? px * 2 + v - w : 0);
				const by = (c - 1) * -0.5 * t;
				data.forEach((node, i) => {
					used.push(node.offset);

					const ny = i * t;
					const ry = y + by + ny;

					ret.push(
						<Link
							href={ node.text ? `/worlds/${wid}/${mid}/${node.text}` : undefined }
							onClick={ (e: Event): void => {
								e.preventDefault();
								if (node.text && props.onSelect)
									props.onSelect(node);
							} }
						>
							<g transform={ `translate(${baseX + rx}, ${baseY + ry})` }>
								<MapNode node={ node } active={ props.selected === node } missing={ missing } />
							</g>,
						</Link>,
					);
					if (parent !== undefined) {
						if (c > 1) {
							ret.push(<>
								<line
									x1={ baseX + x + w + px * 2 }
									y1={ baseY + y + (h / 2) }
									x2={ baseX + rx - px }
									y2={ baseY + ry + (h / 2) }
									stroke="rgba(255,255,255,0.875)"
									strokeWidth="1"
									strokeLinecap="round"
								/>
								<rect
									x={ baseX + rx - px - (ps / 2) }
									y={ baseY + ry + (h / 2) - (ps / 2) }
									width={ ps }
									height={ ps }
									fill="#fff"
								/>
							</>);
						} else {
							ret.push(<line
								x1={ baseX + x + w }
								y1={ baseY + y + (h / 2) }
								x2={ baseX + rx }
								y2={ baseY + ry + (h / 2) }
								stroke="rgba(255,255,255,0.875)"
								strokeWidth="1"
								strokeLinecap="round"
							/>);
						}
					}

					travel(rx, ry, node.offset);
				});

				if (c > 1) {
					ret.push(<>
						<line
							x1={ baseX + x + w }
							y1={ baseY + y + (h / 2) }
							x2={ baseX + x + w + px * 2 }
							y2={ baseY + y + (h / 2) }
							stroke="rgba(255,255,255,0.875)"
							strokeWidth="1"
							strokeLinecap="round"
						/>
						<rect
							x={ baseX + x + w + px * 2 - (pbs / 2) }
							y={ baseY + y + (h / 2) - (pbs / 2) }
							width={ pbs }
							height={ pbs }
							fill="#fff"
						/>
						<rect
							x={ baseX + x + w + px * 2 - (pbs / 2) - 2 }
							y={ baseY + y + (h / 2) - (pbs / 2) - 2 }
							width={ pbs + 4 }
							height={ pbs + 4 }
							fill="transparent"
							stroke="#fff"
						/>
					</>);
				}
			};
			const travel = (x: number, y: number, parent?: number) => {
				const childs = props.nodes.filter(x => parent !== undefined ? x.prev.includes(parent) : x.prev.length === 0);
				const groups = groupBy(childs, x => GetTypeIdx(x.text));

				if ("1" in groups) {
					render(x, y, groups[1], parent);

					if ("0" in groups) {
						const dy = - t + h / 2;
						render(x + w / 2 - dy + px * 2, y - t, groups[0]);
						ret.push(<>
							<line
								x1={ baseX + x + v + w / 2 }
								y1={ baseY + y }
								x2={ baseX + x + v + w / 2 - dy }
								y2={ baseY + y + dy }
								stroke="rgba(255,255,255,0.875)"
								strokeWidth="1"
								strokeLinecap="round"
							/>
							<rect
								x={ baseX + x + v + w / 2 - dy - (ps / 2) }
								y={ baseY + y + dy - (ps / 2) }
								width={ ps }
								height={ ps }
								fill="#fff"
							/>
						</>);
					}

					if ("2" in groups) {
						const dy = t + h / 2;
						render(x + w / 2 - dy + px * 2, y - t, groups[2]);
						ret.push(<>
							<line
								x1={ baseX + x + v + w / 2 }
								y1={ baseY + y }
								x2={ baseX + x + v + w / 2 - dy }
								y2={ baseY + y + dy }
								stroke="rgba(255,255,255,0.875)"
								strokeWidth="1"
								strokeLinecap="round"
							/>
							<rect
								x={ baseX + x + v + w / 2 - dy - (ps / 2) }
								y={ baseY + y + dy - (ps / 2) }
								width={ ps }
								height={ ps }
								fill="#fff"
							/>
						</>);
					}
				} else
					render(x, y, childs, parent);
			};
			travel(0, 0);

			let nx = 0;
			props.nodes.forEach(node => {
				if (node.prev.length === 0 || used.includes(node.offset)) return;

				render(nx, t, [node], undefined, true);
				nx += v;
			});

			return ret;
		})();

		return <div class={ style.WorldsMapGrid }>
			{/* { props.nodes.map(node => <div data-pos={ node.offset }>
			<Link
				href={ node.text ? `/worlds/${wid}/${mid}/${node.text}` : undefined }
				onClick={ (e: Event): void => {
					e.preventDefault();
					if (node.text) SelectNode(node);
				} }>
				<MapNode node={ node } active={ props.selected === node } />
			</Link>
		</div>) } */}

			<svg class={ style.MapGrid } xmlns="http://www.w3.org/2000/svg" ref={ this.svgRef }>
				{ RECTS }
			</svg>
		</div>;
	}
}
export default NewMapGrid;
