import { FunctionalComponent } from "preact";
import { Link } from "preact-router";
import Store, { toggle } from "@/store";

import { EffectFilterListItemPM, EffectFilterListItemSingle, EffectFilterListType } from "@/types/Buff";
import { BuffEffectList, BuffEffectListGroupKeys } from "@/types/BuffEffect";
import { ITEM_TYPE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import { useUpdate } from "@/libs/hooks";
import { CurrentDB } from "@/libs/DB";
import { AssetsRoot, CurrentDate, CurrentEvent, EquipTypeDisplay, ImageExtension, RarityDisplay } from "@/libs/Const";
import { DecomposeHangulSyllable, groupBy, isActive } from "@/libs/Functions";
import EntitySource from "@/libs/EntitySource";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import { DBSourceConverter, GetJson, JsonLoaderCore, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import EquipCard from "@/components/equip-card";
import EffectFilterPopup from "@/components/popup/effect-filter-popup";
import EquipPopup from "@/components/popup/equip-popup";

import style from "./style.module.scss";

interface EquipGroupEntity {
	equip: FilterableEquip;
	name: string;
	source: EntitySource[];
}

interface EquipsProps {
	uid?: string;
}

const EquipList: FunctionalComponent<EquipsProps> = (props) => {
	const update = useUpdate();

	const FilterableUnitDB = GetJson<FilterableUnit[] | null>(StaticDB.FilterableUnit);
	if (!FilterableUnitDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableUnit).then(() => update());

	const FilterableEquipDB = GetJson<FilterableEquip[] | null>(StaticDB.FilterableEquip, r => r ? DBSourceConverter(r) : null);
	if (!FilterableEquipDB) JsonLoaderCore(CurrentDB, StaticDB.FilterableEquip).then(() => update());

	const selectedEquip = FilterableEquipDB && props.uid
		? FilterableEquipDB.find(x => x.fullKey === props.uid) || null
		: null;

	const Filters = Store.Equips;

	function FillSourceFilters (value: boolean): void {
		[
			Filters.Source.General,
			Filters.Source.Limited,
			Filters.Source.EternalWar,
			Filters.Source.NewEternalWar,
			Filters.Source.InfiniteWar,
			Filters.Source.SubStory,
			Filters.Source.Exchange,
			Filters.Source.OldExchange,
			Filters.Source.EventMap,
			Filters.Source.EventExchange,
			Filters.Source.OldEventMap,
			Filters.Source.OldEventExchange,
			Filters.Source.Map,
			Filters.Source.SideMap,
			Filters.Source.ExMap,
			Filters.Source.Challenge,
			Filters.Source.NotImplemented,
			Filters.Source.Roguelike,
		].forEach(v => {
			if (v.value !== value) toggle(v);
		});
	}

	if (props.uid) {
		if (selectedEquip) {
			const eq = selectedEquip;

			SetMeta(
				["description", "twitter:description"],
				`${RarityDisplay[eq.rarity]}급 ${EquipTypeDisplay()[eq.type]} ${LocaleGet(`EQUIP_${eq.fullKey}`)}의 정보입니다. ` +
				"레벨별 효과, 획득처, 강화 비용을 확인할 수 있습니다.",
			);
			SetMeta("keywords", `,${LocaleGet(`EQUIP_${eq.fullKey}`)}`, true);
			SetMeta(
				["twitter:image", "og:image"],
				`${AssetsRoot}/${ImageExtension()}/item/${eq.icon}.${ImageExtension()}`,
			);
		}

		UpdateTitle(LocaleGet("MENU_EQUIPS"), selectedEquip ? LocaleGet(`EQUIP_${selectedEquip.fullKey}`) : "???");
	}

	const EquipEffects = ((): Record<string, EffectFilterListType> => {
		if (!FilterableEquipDB) return {};

		const ret: EffectFilterListType = [];

		Filters.EffectFilters.value.forEach(x => {
			if (Array.isArray(x)) {
				// 증감치
				const part: EffectFilterListItemPM[] = [];

				// 증가치
				let f = FilterableEquipDB.some(eq => eq.effects.some(es => x[0].type.includes(es.type) && es.positive));
				if (f) part.push(x[0]);

				// 감소치
				f = FilterableEquipDB.some(eq => eq.effects.some(es => x[0].type.includes(es.type) && !es.positive));
				if (f) part.push(x[1]);

				if (part.length > 0)
					ret.push(part);
			} else {
				// 상수치
				const f = FilterableEquipDB.some(eq => eq.effects.some(es => x.type.includes(es.type)));
				if (f) ret.push(x);
			}
		});

		const dict: Record<string, EffectFilterListType> = {};
		const filters = BuffEffectList;
		ret.forEach(b => {
			Object.keys(filters).forEach(x => {
				const k = x as BuffEffectListGroupKeys;
				if (filters[k].some(y => Array.isArray(b) ? y.text === b[0].text : y.text === b.text)) {
					if (!(x in dict)) dict[x] = [];
					dict[x].push(b);
				}
			});
		});
		return dict;
	})();

	function HasFilteredEffect (eq: FilterableEquip): boolean {
		return Filters.EffectFilters.value
			.reduce(
				(p, c) => Array.isArray(c) ? [...p, ...c] : [...p, c],
				[] as Array<EffectFilterListItemSingle | EffectFilterListItemPM>,
			)
			.filter(x => x.selected)
			.every(selectedBuff => {
				return eq.effects
					.filter(targetBuff => selectedBuff.type.includes(targetBuff.type))
					.some(targetBuff => {
						if ("pmType" in selectedBuff) {
							return (selectedBuff.pmType > 0 && targetBuff.positive) ||
								(selectedBuff.pmType < 0 && !targetBuff.positive);
						}
						return true;
					});
			});
	}

	const EquipGroups = ((): EquipGroupEntity[] => {
		if (!FilterableUnitDB || !FilterableEquipDB) return [];

		const group = groupBy(FilterableEquipDB, (x) => `${x.type}_${x.key}` as string);
		return Object.keys(group)
			.map(x => group[x])
			.map(x => {
				const last = [...x].sort((a, b) => b.rarity - a.rarity)[0];
				const makable = x.some(y => y.craft);

				const source = ((items): EntitySource[] => {
					const list: EntitySource[] = [];
					let map = false;

					if (items.every(y => !y.available))
						list.push(new EntitySource("Uninstalled"));

					if (items.some(y => y.roguelike))
						list.push(new EntitySource("Roguelike"));

					for (const item of items) {
						if (item.limit && item.limit.every(y => FilterableUnitDB.some(z => z.uid === y))) {
							item.limit
								.forEach(y => list.push(new EntitySource(`Private:${y}`)));
						}

						for (const area of item.source) {
							for (const es of area) {
								// 현재 이벤트 맵 드랍 / 교환소 대상일 경우에만
								// if (es.IsEvent && CurrentEvent !== es.EventId) continue;

								// 현재 교환소 대상일 경우에만
								// if (!es.IsEvent && es.IsExchange && es.ExchangeDate !== CurrentDate) continue;

								// const hash = es.toString();
								if (es.IsMap) map = true;
								list.push(es);
							}
						}
					}

					// 맵 한군데서만 드랍
					const output = list.unique(y => y.toShort());
					const isPriv = output.some(y => y.IsPrivateItem);

					if (
						((isPriv && output.length === 1) || output.length === 0) && // 전용장비 여부를 제외하고 획득처가 없으며
						!map && // 드랍이 아니며
						!makable // 제조도 불가능하면
					) {
						output.splice( // 한정임
							0,
							output.length,
							new EntitySource("Limited"),
							...output.filter(y => y.IsPrivateItem),
						);
					}

					return output;
				})(x);

				return {
					equips: x,
					last,
					source,
					sourceRaw: x.reduce(
						(p, c) => [
							...(
								c.limit && c.limit.every(y => FilterableUnitDB.some(z => z.uid === y))
									? c.limit.map(y => new EntitySource(`Private:${y}`))
									: []
							),
							...p,
							...c.source.reduce((p2, c2) => [...p2, ...c2], []),
							...source.filter(y => y.IsUninstalled),
							...source.filter(y => y.IsRoguelike),
						],
						[] as EntitySource[],
					),
				};
			})
			.filter(x => {
				try {
					const equip = x.equips[0];
					const Name = LocaleGet(`EQUIP_${equip.fullKey}`)
						.replace(/ (RE|MP|SP|EX)$/, "");

					const firstName = Name
						.split("")
						.map(x => DecomposeHangulSyllable(x) || x)
						.map(x => typeof x === "object" ? x.initial || "" : x)
						.join("");

					return new RegExp(Filters.SearchText.value, "i").test(Name) ||
						new RegExp(Filters.SearchText.value, "i").test(firstName);
				} catch {
					return false;
				}
			})
			.filter(x => {
				if (x.equips.length === 0) return false;

				// 전용장비
				const last = x.last;
				if (last.limit && last.limit.every(y => FilterableUnitDB.some(z => z.uid === y))) { // 전용 장비임
					if (!Filters.Type.Exclusive)
						return false; // 전용 장비 필터가 꺼짐
				} else { // 그 외 유형
					const types: ITEM_TYPE[] = [];
					if (Filters.Type.Chip.value) types.push(ITEM_TYPE.CHIP);
					if (Filters.Type.OS.value) types.push(ITEM_TYPE.SPCHIP);
					if (Filters.Type.Item.value) types.push(ITEM_TYPE.SUBEQ);
					if (!types.includes(last.type)) return false;
				}

				// 효과 필터
				if (x.equips.every(y => !HasFilteredEffect(y)))
					return false;

				// 획득처
				const sources = x.source.unique(y => y.toShort());
				// console.log(x.last.fullKey, sources);

				if (Filters.Source.EternalWar.value && sources.some(y => y.IsEternalWarExchange)) return true;
				if (Filters.Source.NewEternalWar.value && sources.some(y => y.IsNewEternalWarExchange || y.IsNewEternalWar)) return true;
				if (Filters.Source.InfiniteWar.value && sources.some(y => y.IsAltiteExchange || y.IsInfiniteWar)) return true;

				if (Filters.Source.Exchange.value && sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate === CurrentDate)) return true;
				if (Filters.Source.OldExchange.value && sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate !== CurrentDate)) return true;

				if (Filters.Source.SubStory.value && sources.some(y => y.IsSubStory)) return true;
				if (Filters.Source.EventExchange.value && sources.some(y => y.IsEvent && y.IsExchange && y.EventId === CurrentEvent)) return true;
				if (Filters.Source.OldEventExchange.value && sources.some(y => y.IsEvent && y.IsExchange && y.EventId !== CurrentEvent)) return true;

				if (Filters.Source.EventMap.value && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId === CurrentEvent)) return true;
				if (Filters.Source.OldEventMap.value && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId !== CurrentEvent)) return true;

				if (Filters.Source.ExMap.value && sources.some(y => y.IsMap && y.IsExMap && !y.IsEvent && !y.IsExchange)) return true;
				if (Filters.Source.SideMap.value && sources.some(y => y.IsMap && y.IsSideMap && !y.IsEvent && !y.IsExchange)) return true;
				if (Filters.Source.Map.value && sources.some(y => y.IsMap && !y.IsExMap && !y.IsSideMap && !y.IsEvent)) return true;

				if (Filters.Source.Limited.value && sources.some(y => y.IsLimited)) return true;

				if (Filters.Source.Challenge.value && sources.some(y => y.IsChallenge)) return true;

				if (Filters.Source.NotImplemented.value && sources.some(y => y.IsUninstalled)) return true;
				if (Filters.Source.Roguelike.value && sources.some(y => y.IsRoguelike)) return true;

				if (Filters.Source.General.value && sources.filter(y => !y.IsPrivateItem).length === 0 && x.equips.some(y => y.craft))
					return true;

				return false;
			})
			.map<EquipGroupEntity>(x => ({
				equip: x.last,
				name: `${x.last.type}_${x.last.key}`,
				source: ((y): EntitySource[] => {
					const m = y.filter(z => !z.IsPrivateItem);
					if (m.length === 1 && m[0].IsMap) return y;
					return y.filter(z => z.IsPrivateItem || !z.IsMap);
				})(x.source),
			}));
	})();

	return <div class="equips">
		<div class="card text-start">
			<div class="card-body">
				<div class="row mb-2">
					<div class="col-12 col-md-auto filter-label">
						<Locale k="EQUIP_FILTER_TYPE" />
					</div>
					<div class="cols12 col-md">
						<div class="btn-group mx-1">
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Type.Chip)}` }
								onClick={ () => toggle(Filters.Type.Chip) }
							>
								<Locale k="EQUIP_FILTER_TYPE_CHIP" />
							</button>
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Type.OS)}` }
								onClick={ () => toggle(Filters.Type.OS) }
							>
								<Locale k="EQUIP_FILTER_TYPE_OS" />
							</button>
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Type.Item)}` }
								onClick={ () => toggle(Filters.Type.Item) }
							>
								<Locale k="EQUIP_FILTER_TYPE_ITEM" />
							</button>
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Type.Exclusive)}` }
								onClick={ () => toggle(Filters.Type.Exclusive) }
							>
								<Locale k="EQUIP_FILTER_TYPE_EXCLUSIVE" />
							</button>
						</div>
					</div>
				</div>

				<div class="row mb-4">
					<div class="col">
						<div class="input-group">
							<input
								class="form-control"
								value={ Filters.SearchText }
								onInput={ (e) => (Filters.SearchText.value = (e.target as any).value) }
								placeholder={ LocaleGet("EQUIP_SEARCH_PLACEHOLDER") } />

							<button class="btn btn-danger" onClick={ () => (Filters.SearchText.value = "") }>
								<Locale k="EQUIP_SEARCH_RESET" />
							</button>
						</div>
					</div>
				</div>

				<hr class="my-2" />

				<div class="row">
					<div class="col-12 col-md-auto filter-label">
						<Locale k="EQUIP_FILTER_SOURCE" />
					</div>
					<div class="col-12 col-md">
						<div class="clearfix">
							<div class="btn-group float-start d-block mb-1">
								<button class="btn btn-primary" onClick={ (): void => FillSourceFilters(true) }>
									<Locale k="EQUIP_FILTER_SELECTALL" />
								</button>
								<button class="btn btn-danger" onClick={ (): void => FillSourceFilters(false) }>
									<Locale k="EQUIP_FILTER_DESELECTALL" />
								</button>
							</div>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-dark ${isActive(Filters.Source.General)}` }
								onClick={ () => toggle(Filters.Source.General) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_GENERAL" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Source.Limited)}` }
								onClick={ () => toggle(Filters.Source.Limited) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_LIMITED" />
							</button>
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Source.EternalWar)}` }
								onClick={ () => toggle(Filters.Source.EternalWar) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_ETERNALWAR" />
							</button>
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Source.NewEternalWar)}` }
								onClick={ () => toggle(Filters.Source.NewEternalWar) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_NEWETERNALWAR" />
							</button>
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Source.InfiniteWar)}` }
								onClick={ () => toggle(Filters.Source.InfiniteWar) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_INFINITEWAR" />
							</button>
							<button
								class={ `btn btn-outline-secondary ${isActive(Filters.Source.SubStory)}` }
								onClick={ () => toggle(Filters.Source.SubStory) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_SUBSTORY" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-info ${isActive(Filters.Source.Exchange)}` }
								onClick={ () => toggle(Filters.Source.Exchange) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_EXCHANGE" />
							</button>
							<button
								class={ `btn btn-outline-info ${isActive(Filters.Source.OldExchange)}` }
								onClick={ () => toggle(Filters.Source.OldEventExchange) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_OLD_EXCHANGE" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-success ${isActive(Filters.Source.Map)}` }
								onClick={ () => toggle(Filters.Source.Map) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_MAP_NORMAL" />
							</button>
							<button
								class={ `btn btn-outline-success ${isActive(Filters.Source.SideMap)}` }
								onClick={ () => toggle(Filters.Source.SideMap) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_MAP_SIDE" />
							</button>
							<button
								class={ `btn btn-outline-success ${isActive(Filters.Source.ExMap)}` }
								onClick={ () => toggle(Filters.Source.ExMap) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_MAP_EX" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-danger ${isActive(Filters.Source.EventMap)}` }
								onClick={ () => toggle(Filters.Source.EventMap) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_EVENT_MAP" />
							</button>
							<button
								class={ `btn btn-outline-danger ${isActive(Filters.Source.EventExchange)}` }
								onClick={ () => toggle(Filters.Source.EventExchange) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_EVENT_EXCHANGE" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-danger ${isActive(Filters.Source.OldEventMap)}` }
								onClick={ () => toggle(Filters.Source.OldEventMap) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_OLD_EVENT_MAP" />
							</button>
							<button
								class={ `btn btn-outline-danger ${isActive(Filters.Source.OldEventExchange)}` }
								onClick={ () => toggle(Filters.Source.OldEventExchange) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_OLD_EVENT_EXCHANGE" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-primary ${isActive(Filters.Source.Challenge)}` }
								onClick={ () => toggle(Filters.Source.Challenge) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_CHALLENGE" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-dark ${isActive(Filters.Source.NotImplemented)}` }
								onClick={ () => toggle(Filters.Source.NotImplemented) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_NOT_IMPLEMENTED" />
							</button>
						</div>

						<div class="btn-group mx-1 mb-1">
							<button
								class={ `btn btn-outline-warning ${isActive(Filters.Source.Roguelike)}` }
								onClick={ () => toggle(Filters.Source.Roguelike) }
							>
								<Locale k="EQUIP_FILTER_SOURCE_ROGUELIKE" />
							</button>
						</div>
					</div>
				</div>
				<hr class="my-2" />
				<div class="row">
					<div class="col-12 col-md-auto filter-label">
						<Locale k="EQUIP_FILTER_EFFECTS" />
					</div>
					<div class="col-12 col-md">
						<EffectFilterPopup
							class="ms-2"
							display="EQUIP_FILTER_DISPLAY_EFFECTS"
							effects={ EquipEffects }
							list={ Filters.EffectFilters.value }
							setter={ (list) => Filters.EffectFilters.value = list }
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="mb-2 text-start clearfix">
			<Locale k="EQUIP_RESULT_COUNT" p={ [EquipGroups.length] } />
		</div>

		<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 mt-4">
			{ EquipGroups.map(group => <div class="col">
				<Link href={ `/equips/${group.equip.fullKey}` } class={ style["equip-card-link"] }>
					<EquipCard class="w-100" equip={ group.equip } source={ group.source } noLink />
				</Link>
			</div>) }
		</div>

		<EquipPopup key="equip-popup" equip={ selectedEquip } display />
	</div>;
};
export default EquipList;
