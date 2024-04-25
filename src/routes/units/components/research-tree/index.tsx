import { FunctionalComponent, JSX } from "preact";
import { createPortal, useEffect, useLayoutEffect, useRef, useState } from "preact/compat";

import { ResearchTreeData, Unit } from "@/types/DB/Unit";
import { Research } from "@/types/DB/Research";
import { Consumable } from "@/types/DB/Consumable";

import { CurrentDB } from "@/libs/DB";
import { useUpdate } from "@/libs/hooks";
import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { parseVNode } from "@/libs/VNode";
import { TravelVDOM } from "@/libs/VDomParser";
import { FormatNumber } from "@/libs/Functions";

import Loader, { StaticDB, GetJson, JsonLoaderCore } from "@/libs/Loader";
import { GetUnitFaceURL } from "@/components/unit-face";

import Locale from "@/components/locale";
import IconHourglassSplit from "@/components/bootstrap-icon/icons/HourglassSplit";
import PopupBase from "@/components/popup/base";
import EquipIcon from "@/components/equip-icon";

import style from "./style.module.scss";

interface ResearchTreeProps {
	unit: Unit;
}

const ResearchTree: FunctionalComponent<ResearchTreeProps> = (props) => {
	const update = useUpdate();

	const [display, setDisplay] = useState(false);
	const [curResearch, setCurResearch] = useState("");
	const [svg, setSVG] = useState<preact.VNode | undefined>(undefined);

	const svgRef = useRef<HTMLDivElement>(null);

	const imgExt = ImageExtension();

	const unit = props.unit;
	if (!unit.research) return <></>;

	const ResearchDB = GetJson<Research[]>(StaticDB.Research);
	const ConsumableDB = GetJson<Consumable[]>(StaticDB.Consumable);

	useEffect(() => {
		fetch(`${AssetsRoot}/svg/${CurrentDB}/research/${unit.uid}.svg?_=0`)
			.then(r => r.text())
			.then(r => r.replace(/@~/g, AssetsRoot))
			.then(r => {
				setSVG(parseVNode(r, [], {})[0]);
			});
	}, []);

	useEffect(() => {
		if (svgRef.current) {
			const root = svgRef.current;

			const svg = root.querySelector("svg");
			if (svg) {
				const vb = svg.getAttribute("viewBox")?.split(" ");
				if (vb) {
					const h = parseInt(vb[3], 10);
					svg.style.maxHeight = `${h * 2}px`;
				}
			}

			root.querySelectorAll("image").forEach(el => {
				const p = el.parentElement;
				if (!p) return;

				const _link = el.getAttribute("href") || "";
				if (_link.startsWith("@/")) // unit face
					el.setAttribute("href", GetUnitFaceURL(_link.substring(2)));
				else if (_link.startsWith("$/")) // research icon
					el.setAttribute("href", `${AssetsRoot}/${imgExt}/research/${_link.substring(2)}.${imgExt}`);

				const key = p.getAttribute("data-key");
				if (key) {
					p.removeAttribute("data-key");

					p.addEventListener("click", (e) => {
						e.preventDefault();
						setCurResearch(key);
						setDisplay(true);
					});
				}
			});
		}
	}, [svgRef.current]);

	useLayoutEffect(() => {
		if (!ResearchDB)
			JsonLoaderCore(CurrentDB, StaticDB.Research).then(() => update());
	}, [ResearchDB]);

	useLayoutEffect(() => {
		if (!ConsumableDB)
			JsonLoaderCore(CurrentDB, StaticDB.Consumable).then(() => update());
	}, [ConsumableDB]);

	const research = curResearch && ResearchDB && ResearchDB.find(x => x.key === curResearch);
	const ResearchTime = ((): string => {
		const duration = research && research.time;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return [h, m, s].map(x => x.toString().padStart(2, "0")).join(":");
	})();

	return <div class={ `p-3 ${style.ResearchTree}` }>
		{ svg && <div ref={ svgRef }>{ svg }</div> }

		{ createPortal(<PopupBase
			display={ display }
			contentClass={ style.ResearchModal }
			bodyClass="pb-0"
			footerVariant="dark"
			footerText="white"
			footerClass="justify-content-start"
			header={ <div class="text-start">
				<Locale k={ `RESEARCH_${curResearch}` } />
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
						<IconHourglassSplit class="me-1" />
						<span class="font-exo2">{ ResearchTime }</span>
					</span>

					<hr class="my-1" />

					{ research.items.length === 0
						? <span class="text-secondary">
							<Locale k="UNIT_VIEW_RESEARCH_ITEM_EMPTY" />
						</span>
						: research.items.map(e => {
							const item = ConsumableDB && ConsumableDB.find(c => c.key === e.item);
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
			onHidden={ (): void => setDisplay(false) }
		>
			<div class="text-center mb-3">
				{ research && <>
					<img class={ style.ResearchPopupIcon } src={ `${AssetsRoot}/${imgExt}/research/${research.icon}.${imgExt}` } />
					<div class={ `mt-1 ${style.ResearchDesc}` }>
						<Locale k={ `RESEARCH_DESC_${curResearch}` } />
					</div>
				</> }
			</div>
		</PopupBase>, document.body) }
	</div>;
};
export default ResearchTree;
