import { FunctionalComponent } from "preact";
import { useRef } from "preact/hooks";
import { Link, route } from "preact-router";

// import html2canvas from "@/external/html2canvas";
import { toJpeg } from "html-to-image";

import { AssetsRoot } from "@/libs/Const";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { ACTOR_GRADE, ITEM_GRADE, STAGE_SUB_TYPE } from "@/types/Enums";
import { MapNodeEntity, World } from "@/types/DB/Map";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import { groupBy, isActive } from "@/libs/Functions";
import { objState } from "@/libs/State";

import Loader, { GetJson, StaticDB } from "@/libs/Loader";
import Locale, { LocaleGet } from "@/components/locale";
import IconArrowLeft from "@/components/bootstrap-icon/icons/ArrowLeft";
import UnitFace from "@/components/unit-face";
import EquipIcon from "@/components/equip-icon";
import EquipPopup from "@/components/popup/equip-popup";
import PopupBase from "@/components/popup/base";

import style from "./style.module.scss";

function GetTypeIdx (node: MapNodeEntity, byOffset: boolean = false): 0 | 1 | 2 {
	const name = node.text;

	if (byOffset) return Math.floor(node.offset / 8) as (0 | 1 | 2);

	return /[0-9]+$/.test(name)
		? 1
		: /(Ex|C)$/.test(name)
			? 2
			: 0;
}

interface DropTableProps {
	wid: string;
	mid: string;
}

const DropTable: FunctionalComponent<DropTableProps> = (props) => {
	const tableRef = useRef<HTMLTableElement>(null);

	const unitRarities = objState<ACTOR_GRADE[]>([ACTOR_GRADE.SS, ACTOR_GRADE.S]);
	const equipRarities = objState<ITEM_GRADE[]>([ACTOR_GRADE.SS]);
	const selectedEquip = objState<FilterableEquip | null>(null);

	const HTMLDisplay = objState(false);
	const HTMLContent = objState("");

	SetMeta(
		["description", "twitter:description"],
		`${LocaleGet(`WORLD_${props.wid}`)}의 제 ${props.mid}구역의 드랍 테이블을 표시합니다.`,
	);
	SetMeta("keywords", `,${LocaleGet(`WORLD_${props.wid}`)}`, true);
	SetMeta(["twitter:image", "og:image"], `${AssetsRoot}/world/icons/${props.wid}_${props.mid}.png`);

	if (props.wid === "Sub")
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${props.wid}`));
	else
		UpdateTitle(LocaleGet("MENU_WORLDS"), LocaleGet(`WORLD_${props.wid}`), LocaleGet("WORLDS_WORLD_TITLE", props.mid));

	function toggleArray<T> (list: T[], value: T): T[] {
		if (list.includes(value)) {
			const ret = [...list];
			while (true) {
				const idx = ret.indexOf(value);
				if (idx === -1) break;
				ret.splice(idx, 1);
			}
			return ret;
		} else
			return [...list, value];
	}
	function exportToHtml (root: Node) {
		const allowStyles = [
			"display",
			"background-color", "color",
			"transform", "transform-origin",
			"font-weight",
			"border",
			// "border-left", "border-top", "border-right", "border-bottom",
			// "border-left-color", "border-top-color", "border-right-color", "border-bottom-color",
		];

		if (root instanceof Text) return root.nodeValue;

		if (root instanceof Element) {
			if (root.getAttribute("data-ignore-export")) return "";

			const style = window.getComputedStyle(root);
			const computedList: string[] = [];
			allowStyles.forEach(k => {
				if (style[k]) {
					const v = style[k] as string;
					if (v === "rgba(0, 0, 0, 0)" || v === "none") return;
					if (k === "font-weight" && v === "400") return;
					if (k === "display" && v !== "inline-block") return;

					if (k === "color" || k === "background-color") {
						if (v.startsWith("rgb(")) {
							computedList.push(`${k}:${v.replace(/rgb\((.+),(.+),(.+)\)/, (p, p1, p2, p3) => {
								const [r, g, b] = [parseInt(p1, 10), parseInt(p2, 10), parseInt(p3, 10)]
									.map(x => x.toString(16).padStart(2, "0"));
								return `#${r}${g}${b}`;
							})}`);
							return;
						}
					}
					computedList.push(`${k}:${v}`);
				}
			});

			const temp = root.cloneNode(true) as Element;

			let ret = "";
			if (root.childNodes && root.childNodes.length > 0) {
				root.childNodes.forEach(c => (ret += exportToHtml(c)));
				temp.innerHTML = ret;
			}

			const plain = style.cssText;
			const computed = [...computedList, plain].join(";");
			if (computed) temp.setAttribute("style", computed);

			if (temp.getAttribute("href") !== null) {
				const href = temp.getAttribute("href")!;
				if (href.startsWith("/"))
					temp.setAttribute("href", window.location.origin + href);

				temp.setAttribute("target", "_blank");
			}

			temp.removeAttribute("class");
			if (temp instanceof HTMLElement) {
				Object.keys(temp.dataset)
					.forEach(k => delete temp.dataset[k]);
			}
			return temp.outerHTML;
		}
	}

	return <>
		<div class="row">
			<div class="col-auto">
				<button class="btn btn-dark" onClick={ (): void => {
					if (props.wid === "Sub")
						route("/worlds/");
					else
						route(`/worlds/${props.wid}`);
				} }>
					<IconArrowLeft class="me-1" />
					{ props.wid === "Sub"
						? <Locale k="WORLDS_BACK_TO_WORLDS" />
						: <Locale k="WORLDS_BACK_TO_AREAS" />
					}
				</button>
			</div>
		</div>
		<hr />

		<div class="row mb-2">
			<div class="col">
				<div class="mb-1">
					<Locale k="WORLDS_DROP_EXPORT" />
				</div>
				<div class="btn-group mx-2 mb-2">
					<button class="btn btn-dark" onClick={ (e) => {
						e.preventDefault();
						if (tableRef.current) {
							const table = tableRef.current;
							HTMLContent.set(exportToHtml(table) || "");
							HTMLDisplay.set(true);
						}
					} }>
						<Locale k="WORLDS_DROP_EXPORT_HTML" />
					</button>
					<button class="btn btn-dark" onClick={ (e): void => {
						e.preventDefault();

						if (tableRef.current) {
							const el = tableRef.current;

							const table = tableRef.current;
							toJpeg(table, {
								quality: 1.0,
								skipFonts: true,
								backgroundColor: "#fff",
							})
								.then(url => {
									const anchor = document.createElement("a");
									anchor.download = `${props.wid}-${props.mid}.jpg`;
									anchor.href = url;
									anchor.click();
								});
							// html2canvas(table, { useCORS: true })
							// 	.then(canvas => {
							// 		const url = canvas.toDataURL("image/jpeg", 1.0);
							// 		const anchor = document.createElement("a");
							// 		anchor.download = `${props.wid}-${props.mid}.jpg`;
							// 		anchor.href = url;
							// 		anchor.click();
							// 	});
						}
					}
					}>
						<Locale k="WORLDS_DROP_EXPORT_JPG" />
					</button>
				</div>
			</div>
		</div>
		<hr />

		<table class={ `${style.Table} text-center` } ref={ tableRef }>
			<thead class={ style.TableHeader }>
				<tr>
					<th colSpan={ 4 }>
						<Locale k={ `WORLD_${props.wid}` } />
						<br />
						<Locale k="WORLDS_WORLD_TITLE" p={ [props.mid] } />

						<div class={ style.Filter } data-ignore-export="1">
							<div>
								<div class="mb-1">
									<Locale k="WORLDS_DROP_UNIT_DISPLAY" />
								</div>
								<div class="btn-group mx-2 mb-2">
									<button
										class={ `btn btn-sm btn-outline-danger ${isActive(unitRarities.value.includes(ACTOR_GRADE.SS))}` }
										onClick={ () => unitRarities.set(toggleArray(unitRarities.value, ACTOR_GRADE.SS)) }
									>SS</button>
									<button
										class={ `btn btn-sm btn-outline-danger ${isActive(unitRarities.value.includes(ACTOR_GRADE.S))}` }
										onClick={ () => unitRarities.set(toggleArray(unitRarities.value, ACTOR_GRADE.S)) }
									>S</button>
									<button
										class={ `btn btn-sm btn-outline-danger ${isActive(unitRarities.value.includes(ACTOR_GRADE.A))}` }
										onClick={ () => unitRarities.set(toggleArray(unitRarities.value, ACTOR_GRADE.A)) }
									>A</button>
									<button
										class={ `btn btn-sm btn-outline-danger ${isActive(unitRarities.value.includes(ACTOR_GRADE.B))}` }
										onClick={ () => unitRarities.set(toggleArray(unitRarities.value, ACTOR_GRADE.B)) }
									>B</button>
								</div>
							</div>
							<div>
								<div class="mb-1">
									<Locale k="WORLDS_DROP_EQUIP_DISPLAY" />
								</div>
								<div class="btn-group mx-2 mb-2">
									<button
										class={ `btn btn-sm btn-outline-success ${isActive(equipRarities.value.includes(ACTOR_GRADE.SS))}` }
										onClick={ () => equipRarities.set(toggleArray(equipRarities.value, ACTOR_GRADE.SS)) }
									>SS</button>
									<button
										class={ `btn btn-sm btn-outline-success ${isActive(equipRarities.value.includes(ACTOR_GRADE.S))}` }
										onClick={ () => equipRarities.set(toggleArray(equipRarities.value, ACTOR_GRADE.S)) }
									>S</button>
									<button
										class={ `btn btn-sm btn-outline-success ${isActive(equipRarities.value.includes(ACTOR_GRADE.A))}` }
										onClick={ () => equipRarities.set(toggleArray(equipRarities.value, ACTOR_GRADE.A)) }
									>A</button>
									<button
										class={ `btn btn-sm btn-outline-success ${isActive(equipRarities.value.includes(ACTOR_GRADE.B))}` }
										onClick={ () => equipRarities.set(toggleArray(equipRarities.value, ACTOR_GRADE.B)) }
									>B</button>
								</div>
							</div>
						</div>
					</th>
				</tr>
				<tr>
					<th />
					<th>
						<Locale k="WORLDS_DROP_AREA" />
					</th>
					<th>
						<Locale k="WORLDS_DROP_UNIT" />
					</th>
					<th>
						<Locale k="WORLDS_DROP_EQUIP" />
					</th>
				</tr>
			</thead>
			<tbody>
				<Loader
					json={ [StaticDB.FilterableUnit, StaticDB.FilterableEquip, `map/${props.wid}`] }
					content={ ((): preact.VNode => {
						const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
						const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip);
						const MapDB = GetJson<World>(`map/${props.wid}`);
						const Maps = MapDB[props.mid];

						const typeTable = {
							0: "SIDE",
							1: "MAIN",
							2: "EX",
						};
						const groups = groupBy(Maps.list, m => {
							const byOffset = !(props.wid || "").startsWith("Ev") || parseInt((props.wid || "Ev0").substring(2), 10) < 14;
							return GetTypeIdx(m, byOffset);
						});

						return <>
							{ Object.keys(groups)
								.sort((a, b) => {
									if (a === b) return 0;
									if (a === "1") return -1;
									if (b === "1") return 1;
									if (a === "0") return -1;
									if (b === "0") return -1;
									return 0;
								})
								.map(k => [k as unknown, groups[k]] as [keyof typeof groups, MapNodeEntity[]])
								.map(([k, g]) => {
									const targets = g.filter(n => n.type !== STAGE_SUB_TYPE.STORY && n.wave);
									return targets.map((n, i) => {
										const drops = n.wave!
											.reduce((p, c) => {
												return [
													...p,
													...c.map(c => c.e.drops.flatMap(d => d.id))
														.flat()
														.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as string[]),
												];
											}, [] as string[])
											.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as string[]);

										const units = drops
											.filter(x => x.startsWith("Char_"))
											.map(x => {
												const uid = x.replace(/^Char_(.+)_N$/, "$1");
												return FilterableUnitDB.find(x => x.uid === uid)!;
											})
											.filter(x => unitRarities.value.includes(x.rarity))
											.sort((a, b) => {
												const rd = b.rarity - a.rarity;
												if (rd === 0) return b.id - a.id;
												return rd;
											});

										const equips = drops.filter(x => x.startsWith("Equip_"))
											.map(x => x.replace(/^Equip_/, ""))
											.map(x => FilterableEquipDB.find(y => y.fullKey === x)!)
											.filter(x => equipRarities.value.includes(x.rarity))
											.sort((a, b) => b.rarity - a.rarity);

										return <tr data-type={ k }>
											{ i === 0 && <th rowSpan={ targets.length } class={ style.NodeType }>
												<span>{ typeTable[k] }</span>
											</th> }
											<th>{ n.text.replace(/^EV/, "") }</th>

											<td>
												{ units.length === 0
													? <span class="text-secondary">
														<Locale k="WORLDS_DROP_NO_RESULT" />
													</span>
													: units.map(u => <Link href={ `/units/${u.uid}` }>
														<UnitFace class="m-1" uid={ u.uid } size={ 64 } />
													</Link>)
												}
											</td>
											<td>
												{ equips.length === 0
													? <span class="text-secondary">
														<Locale k="WORLDS_DROP_NO_RESULT" />
													</span>
													: equips.map(e => <Link href={ `/equips/${e.fullKey}` } onClick={ (ev) => {
														ev.preventDefault();
														ev.stopPropagation();
														selectedEquip.set(e);
													} }>
														<EquipIcon class="m-1" image={ e.icon } size={ 64 } />
													</Link>)
												}
											</td>
										</tr>;
									});
								})
							}
						</>;
					}) }
				/>
			</tbody>
		</table>

		<EquipPopup
			equip={ selectedEquip.value }
			display
			asSub
			onHidden={ () => selectedEquip.set(null) }
		/>
		<PopupBase
			size="lg"
			display={ HTMLDisplay.value }
			onHidden={ () => HTMLDisplay.set(false) }
		>
			<small>{ HTMLContent.value }</small>
		</PopupBase>
	</>;
};
export default DropTable;
