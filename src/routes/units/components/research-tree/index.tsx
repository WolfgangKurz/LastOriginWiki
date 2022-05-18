import { ComponentChild, FunctionalComponent } from "preact";
import { createPortal } from "preact/compat";

import UseGraphviz from "@/external/graphviz";

import { ResearchTreeData, Unit } from "@/types/DB/Unit";
import { Research } from "@/types/DB/Research";
import { Consumable } from "@/types/DB/Consumable";

import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { objState } from "@/libs/State";
import ParseVDOM, { TravelVDOM } from "@/libs/VDomParser";
import { FormatNumber } from "@/libs/Functions";

import Loader, { StaticDB, GetJson } from "@/components/loader";
import UnitFace, { GetUnitFaceURL } from "@/components/unit-face";

import Locale from "@/components/locale";
import PopupBase from "@/components/popup/base";
import Icon from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";

import style from "./style.module.scss";

interface ResearchTreeProps {
	unit: Unit;
	research: ResearchTreeData[];
}

const ResearchTree: FunctionalComponent<ResearchTreeProps> = (props) => {
	const graph = objState<preact.VNode | boolean>(false);
	const display = objState(false);
	const curResearch = objState("");

	return <Loader json={ StaticDB.Research } content={ ((): preact.VNode => {
		const unit = props.unit;

		const ResearchDB = GetJson<Research[]>(StaticDB.Research);
		const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);
		const imgExt = ImageExtension();

		const keyTable: string[] = ["start"];
		const content: string[] = [];
		const trace = (from: number, parent: ResearchTreeData) => {
			if (!(parent.key in keyTable)) keyTable.push(parent.key);
			const idx = keyTable.indexOf(parent.key);

			const v = `${from} -> ${idx} [dir=back arrowsize=0.5 color=white];`;
			if (!content.includes(v)) content.push(v);

			const s = `${idx}:e [width=0.784 height=0.784 shape=square];`;
			if (!content.includes(s)) content.push(s);

			if (parent.next)
				parent.next.forEach(n => trace(idx, n));
		};
		props.research.forEach(n => trace(0, n));

		if (graph.value === false) {
			graph.set(true);

			(async () => {
				const graphviz = await UseGraphviz();

				const raw = graphviz.dot(`digraph G {
					rankdir=RL;
					fixedsize=true;
					concentrate=true;
					${content.join("")}
					0:e [width=0.784 height=0.784 shape=square];
				}`, "svg");

				const wrapper = document.createElement("div");
				wrapper.innerHTML = raw;
				const svg = wrapper.firstElementChild as SVGSVGElement;

				const node = ParseVDOM(svg) as preact.VNode;
				const next = (list: ComponentChild[], idx: number): number => {
					let offset = 1;
					while (idx + offset < list.length) {
						const e = list[idx + offset];
						if (typeof e === "object" && e !== null && "props" in e)
							return idx + offset;
						offset++;
					}
					return -1;
				};

				TravelVDOM(node, (el, parent, depth) => {
					// if (el.type === "g" && depth === 1) { // container
					// 	const p = el.props as Record<string, string>;
					// 	const tf = p.transform.split(/([^ (]+\([^)]+\))/g)
					// 		.filter(tf => !/^ +$/.test(tf))
					// 		.map(tf => {
					// 			if (tf.startsWith("rotate"))
					// 				return "rotate(90)";
					// 			else if (tf.startsWith("translate")) {
					// 				const value = tf.substring(10, tf.length - 1);
					// 				const vp = value.split(" ");
					// 				return `translate(${-vp[0]} ${-vp[0]})`;
					// 			}
					// 			return tf;
					// 		});
					// 	p.transform = tf.join(" ");
					// }

					if ((el.type === "polygon" && depth === 2) || el.type === "title") {
						const childs = parent!.props.children as ComponentChild[];
						const cidx = childs.indexOf(el);
						childs.splice(cidx, 1); // remove this
						return;
					}

					if (el.type === "polygon" && depth === 3) {
						const childs = parent!.props.children as ComponentChild[];
						if (!childs.some(x => typeof x === "object" && x && ("type" in x) && x.type === "text"))
							return; // not node

						const pt = ((el.props as any).points as string)
							.split(" ")
							.map(p => p.split(",").map(v => parseFloat(v)));

						const [x, y] = pt[1];
						const w = pt[0][0] - x;
						const h = pt[2][1] - y;

						const cidx = childs.indexOf(el);
						const nidx = next(childs, cidx);
						if (nidx === -1) {
							childs.splice(cidx, 1);
							return;
						}

						const content = ((childs[nidx] as preact.VNode).props.children as ComponentChild[])[0] as string;
						const index = parseInt(content, 10);
						const source = keyTable[index];
						if (source === "start") {
							childs.splice(cidx, nidx - cidx + 1, <image
								class={ style.ResearchIcon }
								href={ GetUnitFaceURL(unit.uid) }
								x={ x } y={ y }
								width={ w } height={ h }
							/>);
						} else {
							const research = ResearchDB.find(x => x.key === source);
							if (research) {
								childs.splice(cidx, nidx - cidx + 1, <a
									href="#"
									onClick={ (e): void => {
										e.preventDefault();
										curResearch.set(research.key);
										display.set(true);
									} }
								>
									<image
										class={ style.ResearchIcon }
										href={ `${AssetsRoot}/${imgExt}/research/${research.icon}.${imgExt}` }
										x={ x } y={ y }
										width={ w } height={ h }
									/>
								</a>);
							} else
								childs.splice(cidx, nidx - cidx + 1);
						}

					}
				});

				// const p = (node.props as any);
				// const vb = (p.viewBox as string).split(" ").map(x => parseFloat(x));
				// p.viewBox = `${vb[0]} ${vb[1]} ${vb[3]} ${vb[2]}`;
				// delete p.width;
				// delete p.height;

				graph.set(node);
			})();
		}

		const research = curResearch.value && ResearchDB.find(x => x.key === curResearch.value);

		const ResearchTime = ((): string => {
			const duration = research && research.time;
			if (!duration) return "-";

			const h = Math.floor(duration / 3600);
			const m = Math.floor(duration / 60) % 60;
			const s = duration % 60;
			return [h, m, s].map(x => x.toString().padStart(2, "0")).join(":");
		})();

		return <div class={ `p-3 ${style.ResearchTree}` }>
			{ typeof graph.value == "object"
				? graph.value
				: <span class="text-secondary">Graph loading...</span>
			}

			{ createPortal(<PopupBase
				display={ display.value }
				contentClass={ style.ResearchModal }
				bodyClass="pb-0"
				footerVariant="dark"
				footerText="white"
				footerClass="justify-content-start"
				header={ <div class="text-start">
					<Locale k={ `RESEARCH_${curResearch.value}` } />
				</div> }
				footer={ <div class="text-start p-2 flex-1">
					{ research && <div class={ style.ResearchInfo }>
						<span class="pe-3 font-exo2">
							<img class="res-icon" src={ `${AssetsRoot}/res-component.png` } />
							{ FormatNumber(research.resources[0]) }
						</span>
						<span class="pe-3 font-exo2">
							<img class="res-icon" src={ `${AssetsRoot}/res-nutrition.png` } />
							{ FormatNumber(research.resources[1]) }
						</span>
						<span class="pe-3 font-exo2">
							<img class="res-icon" src={ `${AssetsRoot}/res-power.png` } />
							{ FormatNumber(research.resources[2]) }
						</span>
						<span>
							<Icon class="me-1" icon="hourglass-split" />
							<span class="font-exo2">{ ResearchTime }</span>
						</span>

						<hr class="my-1" />

						{ research.items.length === 0
							? <span class="text-secondary">
								<Locale k="UNIT_VIEW_RESEARCH_ITEM_EMPTY" />
							</span>
							: research.items.map(e => {
								const item = ConsumableDB.find(c => c.key === e.item);
								if (!item) return <>-</>;

								return <span class="badge bg-semilight text-dark me-1 mb-1">
									<EquipIcon class="me-2 vertical-align-middle" image={ item.icon } size="24" />
									<Locale k={ `CONSUMABLE_${item.key}` } />
									&nbsp;x{ FormatNumber(e.count) }
								</span>;
							})
						}
					</div> }
				</div> }
				onHidden={ (): void => display.set(false) }
			>
				<div class="text-center mb-3">
					{ research && <>
						<img class={ style.ResearchPopupIcon } src={ `${AssetsRoot}/${imgExt}/research/${research.icon}.${imgExt}` } />
						<div class={ `mt-1 ${style.ResearchDesc}` }>
							<Locale k={ `RESEARCH_DESC_${curResearch.value}` } />
						</div>
					</> }
				</div>
			</PopupBase>, document.body) }
		</div>;
	}) } />;
};
export default ResearchTree;
