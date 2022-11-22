import { ComponentChild, FunctionalComponent, VNode } from "preact";
import { createPortal } from "preact/compat";

import mermaid from "mermaid";

import { ResearchTreeData, Unit } from "@/types/DB/Unit";
import { Research } from "@/types/DB/Research";
import { Consumable } from "@/types/DB/Consumable";

import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { objState } from "@/libs/State";
import { TravelVDOM } from "@/libs/VDomParser";
import { FormatNumber } from "@/libs/Functions";

import Loader, { StaticDB, GetJson } from "@/components/loader";
import { GetUnitFaceURL } from "@/components/unit-face";

import Locale from "@/components/locale";
import PopupBase from "@/components/popup/base";
import Icon from "@/components/bootstrap-icon";
import EquipIcon from "@/components/equip-icon";

import style from "./style.module.scss";
import { parseVNode } from "@/libs/VNode";
import { renderToString } from "preact-render-to-string";

interface ResearchTreeProps {
	unit: Unit;
	research: ResearchTreeData[];
}

mermaid.mermaidAPI.initialize({
	startOnLoad: false,
	theme: "dark",
});

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
		const tree: Record<string | number, number[]> = {};
		const content: string[] = [];
		const trace = (from: number, parent: ResearchTreeData) => {
			if (!(parent.key in keyTable)) keyTable.push(parent.key);
			const idx = keyTable.indexOf(parent.key);

			if (!(idx in tree)) tree[idx] = [];
			if (!tree[idx].includes(from)) tree[idx].push(from);

			if (parent.next)
				parent.next.forEach(n => trace(idx, n));
		};
		props.research.forEach(n => trace(0, n));

		{ // build graph script
			const f = (r: string | number): string =>
				`${r}[<span class='${style.ResearchEntity}'>$$${r}</span>]`;

			const taked: string[] = [];
			const keys = Object.keys(tree);
			for (let i = 0; i < keys.length; i++) {
				let k = keys[i];

				if (taked.includes(k)) continue;
				taked.push(k);

				let to = tree[k];
				let v = `${f(k)} --> ${to.map(f).join(" & ")}`;

				while (to.length === 1) { // to single node
					k = to[0].toString();

					if (taked.includes(k)) break;
					taked.push(k);

					to = tree[k];
					if (!to) break;
					v += ` --> ${to.map(f).join(" & ")}`;
				}

				content.push(v);
			}
		}

		if (graph.value === false) {
			graph.set(true);

			const script = `flowchart LR\n${content.join("\n")}`;

			mermaid.mermaidAPI.render("research-tree", script, (svg, f) => {
				const _style = svg
					.replace(/.*<style>(.+)<\/style>.*/g, "$1")
					.replaceAll("&gt;", ">");

				const node = parseVNode(
					svg.replace(/(.*<style>).+(<\/style>.*)/g, `$1${_style}$2`),
					[], {},
				)[0];

				TravelVDOM(node, (rel) => {
					if ((rel.props as any).class !== "root") return;

					TravelVDOM(rel, (el, parent, depth) => {
						if (el.type === "rect") { // node
							const childs = parent!.props.children as ComponentChild[];

							const size = (el.props as any).width as number;

							let index = -1;
							TravelVDOM(childs[1] as VNode, (_el) => {
								if (_el && _el.type === "span" && (_el.props as any).class === style.ResearchEntity) {
									const $$idx = renderToString(<>{ _el.props.children }</>);
									if ($$idx && $$idx.startsWith("$$"))
										index = parseInt($$idx.substring(2), 10);
								}
							});
							if (index === -1) return;

							const source = keyTable[index];
							childs.splice(0, childs.length);

							if (source === "start") {
								childs.push(<image
									class={ style.ResearchIcon }
									href={ GetUnitFaceURL(unit.uid) }
									width={ size }
									height={ size }
									x={ -size / 2 }
									y={ -size / 2 }
								/>);
							} else {
								const research = ResearchDB.find(x => x.key === source);
								if (research) {
									childs.push(<a
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
											width={ size }
											height={ size }
											x={ -size / 2 }
											y={ -size / 2 }
										/>
									</a>);
								}
							}
						}
					});
				});

				graph.set(node);
			});
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
