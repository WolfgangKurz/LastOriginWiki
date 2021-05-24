import { FunctionalComponent } from "preact";
import { Link } from "preact-router";
import { actions, ActionsType, Connect, StoreType } from "@/store";

import { EffectFilterListItemPM, EffectFilterListItemSingle, EffectFilterListType } from "@/types/Buff";
import { BuffEffectList, BuffEffectListGroupKeys } from "@/types/BuffEffect";
import { ITEM_TYPE } from "@/types/Enums";
import { FilterableUnit } from "@/types/DB/Unit.Filterable";
import { FilterableEquip } from "@/types/DB/Equip.Filterable";

import { AssetsRoot, CurrentDate, CurrentEvent, EquipTypeDisplay, ImageExtension, RarityDisplay } from "@/libs/Const";
import { groupBy, isActive } from "@/libs/Functions";
import EntitySource from "@/libs/EntitySource";
import { SetMeta, UpdateTitle } from "@/libs/Site";

import Loader, { DBSourceConverter, GetJson, StaticDB } from "@/components/loader";
import Locale, { LocaleGet } from "@/components/locale";
import EquipCard from "@/components/equip-card";
import EffectFilterPopup from "@/components/popup/effect-filter-popup";
import EquipPopup from "@/components/popup/equip-popup";

import style from "./style.scss";

interface EquipGroupEntity {
	equip: FilterableEquip;
	name: string;
	source: EntitySource[];
}

interface EquipsProps {
	uid?: string;
}

const Equips: FunctionalComponent<EquipsProps> = (props) => {
	if (!props.uid) {
		SetMeta(["description", "twitter:description"], "장비의 목록을 표시합니다. 원하는 장비를 찾기 위해 검색할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle(LocaleGet("MENU_EQUIPS"));
	}

	return Connect("Equips", actions, (store: any): preact.VNode =>
		<Loader json={ [StaticDB.FilterableUnit, StaticDB.FilterableEquip] } content={ ((): preact.VNode => {
			const Filters = store.Equips as StoreType["Equips"];
			const {
				toggleEquipTypeChip,
				toggleEquipTypeOS,
				toggleEquipTypeItem,
				toggleEquipTypeExclusive,

				toggleEquipSourceLimited,
				toggleEquipSourceEndlessWar,
				toggleEquipSourceSubStory,
				toggleEquipSourceExchange,
				toggleEquipSourceOldExchange,
				toggleEquipSourceEventMap,
				toggleEquipSourceEventExchange,
				toggleEquipSourceOldEventMap,
				toggleEquipSourceOldEventExchange,
				toggleEquipSourceMap,
				toggleEquipSourceSideMap,
				toggleEquipSourceExMap,
				toggleEquipSourceChallenge,
				toggleEquipSourceUninstalled,
				toggleEquipSourceRoguelike,

				setEquipEffectFilters,
			} = store as ActionsType<StoreType>;

			function FillSourceFilters (value: boolean): void {
				if (value !== Filters.Source.Limited) toggleEquipSourceLimited();
				if (value !== Filters.Source.EndlessWar) toggleEquipSourceEndlessWar();
				if (value !== Filters.Source.SubStory) toggleEquipSourceSubStory();
				if (value !== Filters.Source.Exchange) toggleEquipSourceExchange();
				if (value !== Filters.Source.OldExchange) toggleEquipSourceOldExchange();
				if (value !== Filters.Source.EventMap) toggleEquipSourceEventMap();
				if (value !== Filters.Source.EventExchange) toggleEquipSourceEventExchange();
				if (value !== Filters.Source.OldEventMap) toggleEquipSourceOldEventMap();
				if (value !== Filters.Source.OldEventExchange) toggleEquipSourceOldEventExchange();
				if (value !== Filters.Source.Map) toggleEquipSourceMap();
				if (value !== Filters.Source.SideMap) toggleEquipSourceSideMap();
				if (value !== Filters.Source.ExMap) toggleEquipSourceExMap();
				if (value !== Filters.Source.Challenge) toggleEquipSourceChallenge();
				if (value !== Filters.Source.Uninstalled) toggleEquipSourceUninstalled();
				if (value !== Filters.Source.Roguelike) toggleEquipSourceRoguelike();
			}

			const FilterableUnitDB = GetJson<FilterableUnit[]>(StaticDB.FilterableUnit);
			const FilterableEquipDB = GetJson<FilterableEquip[]>(StaticDB.FilterableEquip, DBSourceConverter);

			const selectedEquip = props.uid
				? FilterableEquipDB.find(x => x.fullKey === props.uid) || null
				: null;

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
				const ret: EffectFilterListType = [];
				const _ = <T extends unknown> (__: T | undefined): T => __ as T;

				Filters.EffectFilters.forEach(x => {
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
				return Filters.EffectFilters
					.reduce((p, c) => Array.isArray(c) ? [...p, ...c] : [...p, c], [] as Array<EffectFilterListItemSingle | EffectFilterListItemPM>)
					.filter(x => x.selected)
					.every(selectedBuff => {
						return eq.effects
							.filter(targetBuff => selectedBuff.type.includes(targetBuff.type))
							.some(targetBuff => {
								if ("pmType" in selectedBuff)
									return (selectedBuff.pmType > 0 && targetBuff.positive) || (selectedBuff.pmType < 0 && !targetBuff.positive);
								return true;
							});
					});
			}

			const EquipGroups = ((): EquipGroupEntity[] => {
				const group = groupBy(FilterableEquipDB, (x) => `${x.type}_${x.key}`);
				return Object.keys(group)
					.map(x => group[x])
					.map(x => {
						const last = [...x].sort((a, b) => b.rarity - a.rarity)[0];

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
										if (es.IsEvent && CurrentEvent !== es.EventId) continue;

										// 현재 교환소 대상일 경우에만
										if (!es.IsEvent && es.IsExchange && es.ExchangeDate !== CurrentDate) continue;

										// const hash = es.toString();
										if (es.IsMap) map = true;
										list.push(es);
									}
								}
							}

							// 맵 한군데서만 드랍
							const output = list.unique(y => y.toShort());
							const isPriv = output.some(y => y.IsPrivateItem);

							if (((isPriv && output.length === 1) || output.length === 0) && !map)
								output.splice(0, output.length, new EntitySource("Limited"), ...output.filter(y => y.IsPrivateItem));

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
						if (x.equips.length === 0) return false;

						// 전용장비
						const last = x.last;
						if (last.limit && last.limit.every(y => FilterableUnitDB.some(z => z.uid === y))) { // 전용 장비임
							if (!Filters.Type.Exclusive)
								return false; // 전용 장비 필터가 꺼짐
						} else { // 그 외 유형
							const types = [];
							if (Filters.Type.Chip) types.push(ITEM_TYPE.CHIP);
							if (Filters.Type.OS) types.push(ITEM_TYPE.SPCHIP);
							if (Filters.Type.Item) types.push(ITEM_TYPE.SUBEQ);
							if (!types.includes(last.type)) return false;
						}

						// 효과 필터
						if (x.equips.every(y => !HasFilteredEffect(y)))
							return false;

						// 획득처
						const sources = x.source.unique(y => y.toShort());

						if (Filters.Source.EndlessWar && sources.some(y => y.IsEndlessWar)) return true;

						if (Filters.Source.Exchange && sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate === CurrentDate))
							return true;
						if (
							Filters.Source.OldExchange &&
							sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate !== CurrentDate)
						)
							return true;

						if (Filters.Source.SubStory && sources.some(y => y.IsSubStory)) return true;
						if (Filters.Source.EventExchange && sources.some(y => y.IsEvent && y.IsExchange && y.EventId === CurrentEvent))
							return true;
						if (
							Filters.Source.OldEventExchange &&
							sources.some(y => y.IsEvent && y.IsExchange && y.EventId !== CurrentEvent)
						)
							return true;

						if (Filters.Source.EventMap && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId === CurrentEvent))
							return true;
						if (Filters.Source.OldEventMap && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId !== CurrentEvent))
							return true;

						if (Filters.Source.ExMap && sources.some(y => y.IsMap && y.IsExMap && !y.IsEvent && !y.IsExchange)) return true;
						if (
							Filters.Source.SideMap &&
							sources.some(y => y.IsMap && y.IsSideMap && !y.IsEvent && !y.IsExchange)
						) return true;
						if (Filters.Source.Map && sources.some(y => y.IsMap && !y.IsExMap && !y.IsSideMap && !y.IsEvent)) return true;

						if (Filters.Source.Limited && (sources.some(y => y.IsLimited) || (sources.length === 0))) return true;

						if (Filters.Source.Challenge && sources.some(y => y.IsChallenge)) return true;

						if (Filters.Source.Uninstalled && sources.some(y => y.IsUninstalled)) return true;
						if (Filters.Source.Roguelike && sources.some(y => y.IsRoguelike)) return true;

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
						<div class="row">
							<div class="col-12 col-md-auto filter-label">
								<Locale k="EQUIP_FILTER_TYPE" />
							</div>
							<div class="cols12 col-md">
								<div class="btn-group mx-1">
									<button
										class={ `btn btn-outline-secondary ${isActive(Filters.Type.Chip)}` }
										onClick={ toggleEquipTypeChip }
									>
										<Locale k="EQUIP_FILTER_TYPE_CHIP" />
									</button>
									<button
										class={ `btn btn-outline-secondary ${isActive(Filters.Type.OS)}` }
										onClick={ toggleEquipTypeOS }
									>
										<Locale k="EQUIP_FILTER_TYPE_OS" />
									</button>
									<button
										class={ `btn btn-outline-secondary ${isActive(Filters.Type.Item)}` }
										onClick={ toggleEquipTypeItem }
									>
										<Locale k="EQUIP_FILTER_TYPE_ITEM" />
									</button>
									<button
										class={ `btn btn-outline-secondary ${isActive(Filters.Type.Exclusive)}` }
										onClick={ toggleEquipTypeExclusive }
									>
										<Locale k="EQUIP_FILTER_TYPE_EXCLUSIVE" />
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
										class={ `btn btn-outline-secondary ${isActive(Filters.Source.Limited)}` }
										onClick={ toggleEquipSourceLimited }
									>
										<Locale k="EQUIP_FILTER_SOURCE_LIMITED" />
									</button>
									<button
										class={ `btn btn-outline-secondary ${isActive(Filters.Source.EndlessWar)}` }
										onClick={ toggleEquipSourceEndlessWar }
									>
										<Locale k="EQUIP_FILTER_SOURCE_ENDLESSWAR" />
									</button>
									<button
										class={ `btn btn-outline-secondary ${isActive(Filters.Source.SubStory)}` }
										onClick={ toggleEquipSourceSubStory }
									>
										<Locale k="EQUIP_FILTER_SOURCE_SUBSTORY" />
									</button>
								</div>

								<div class="btn-group mx-1 mb-1">
									<button
										class={ `btn btn-outline-info ${isActive(Filters.Source.Exchange)}` }
										onClick={ toggleEquipSourceExchange }
									>
										<Locale k="EQUIP_FILTER_SOURCE_EXCHANGE" />
									</button>
									<button
										class={ `btn btn-outline-info ${isActive(Filters.Source.OldExchange)}` }
										onClick={ toggleEquipSourceOldExchange }
									>
										<Locale k="EQUIP_FILTER_SOURCE_OLD_EXCHANGE" />
									</button>
								</div>

								<div class="btn-group mx-1 mb-1">
									<button
										class={ `btn btn-outline-success ${isActive(Filters.Source.Map)}` }
										onClick={ toggleEquipSourceMap }
									>
										<Locale k="EQUIP_FILTER_SOURCE_MAP_NORMAL" />
									</button>
									<button
										class={ `btn btn-outline-success ${isActive(Filters.Source.SideMap)}` }
										onClick={ toggleEquipSourceSideMap }
									>
										<Locale k="EQUIP_FILTER_SOURCE_MAP_SIDE" />
									</button>
									<button
										class={ `btn btn-outline-success ${isActive(Filters.Source.ExMap)}` }
										onClick={ toggleEquipSourceExMap }
									>
										<Locale k="EQUIP_FILTER_SOURCE_MAP_EX" />
									</button>
								</div>

								<div class="btn-group mx-1 mb-1">
									<button
										class={ `btn btn-outline-danger ${isActive(Filters.Source.EventMap)}` }
										onClick={ toggleEquipSourceEventMap }
									>
										<Locale k="EQUIP_FILTER_SOURCE_EVENT_MAP" />
									</button>
									<button
										class={ `btn btn-outline-danger ${isActive(Filters.Source.EventExchange)}` }
										onClick={ toggleEquipSourceEventExchange }
									>
										<Locale k="EQUIP_FILTER_SOURCE_EVENT_EXCHANGE" />
									</button>
								</div>

								<div class="btn-group mx-1 mb-1">
									<button
										class={ `btn btn-outline-danger ${isActive(Filters.Source.OldEventMap)}` }
										onClick={ toggleEquipSourceOldEventMap }
									>
										<Locale k="EQUIP_FILTER_SOURCE_OLD_EVENT_MAP" />
									</button>
									<button
										class={ `btn btn-outline-danger ${isActive(Filters.Source.OldEventExchange)}` }
										onClick={ toggleEquipSourceOldEventExchange }
									>
										<Locale k="EQUIP_FILTER_SOURCE_OLD_EVENT_EXCHANGE" />
									</button>
								</div>

								<div class="btn-group mx-1 mb-1">
									<button
										class={ `btn btn-outline-primary ${isActive(Filters.Source.Challenge)}` }
										onClick={ toggleEquipSourceChallenge }
									>
										<Locale k="EQUIP_FILTER_SOURCE_CHALLENGE" />
									</button>
								</div>

								<div class="btn-group mx-1 mb-1">
									<button
										class={ `btn btn-outline-dark ${isActive(Filters.Source.Uninstalled)}` }
										onClick={ toggleEquipSourceUninstalled }
									>
										<Locale k="EQUIP_FILTER_SOURCE_NOT_IMPLEMENTED" />
									</button>
								</div>

								<div class="btn-group mx-1 mb-1">
									<button
										class={ `btn btn-outline-warning ${isActive(Filters.Source.Roguelike)}` }
										onClick={ toggleEquipSourceRoguelike }
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
									list={ Filters.EffectFilters }
									setter={ setEquipEffectFilters }
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="mb-2 text-start clearfix">
					<Locale k="EQUIP_RESULT_COUNT" p={ [EquipGroups.length] } />
				</div>

				<EquipPopup equip={ selectedEquip } display />

				<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 mt-4">
					{ EquipGroups.map(group => <div class="col">
						<Link href={ `/equips/${group.equip.fullKey}` } class={ style["equip-card-link"] }>
							<EquipCard class="w-100" equip={ group.equip } source={ group.source } noLink />
						</Link>
					</div>) }
				</div>
			</div>;
		}) } />,
	);
};
export default Equips;
