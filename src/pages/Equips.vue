<template>
	<div class="equips">
		<div class="text-center mb-3">
			<b-alert variant="warning" show>
				장비 좌측 상단의 <b-badge variant="secondary">획득처 없음</b-badge>표시는 <b-badge variant="danger">현재 진행중인 이벤트</b-badge>및
				<b-badge variant="exchange">현재 기간 교환소</b-badge>기준입니다.<br />
				이전 이벤트 또는 기간에 드랍/교환 가능했던 장비어도 현재 획득처가 없다면 표시됩니다.
			</b-alert>
		</div>

		<div class="mb-2 text-left clearfix">
			<div class="float-right">
				<b-checkbox v-model="displayFilters"><locale k="EQUIP_DISPLAY_FILTERS" /></b-checkbox>
			</div>
			<locale k="EQUIP_RESULT_COUNT" :p0="EquipGroups.length" />
		</div>

		<b-collapse :visible="displayFilters">
			<b-card class="text-left">
				<b-row>
					<b-col class="filter-label" md="auto" cols="12">
						<locale k="EQUIP_FILTER_TYPE" />
					</b-col>
					<b-col md cols="12">
						<b-btn-group class="mx-1">
							<b-button variant="outline-secondary" :pressed="Display.Type.Chip" @click="Filter('Type', 'Chip')">
								<locale k="EQUIP_FILTER_TYPE_CHIP" />
							</b-button>
							<b-button variant="outline-secondary" :pressed="Display.Type.OS" @click="Filter('Type', 'OS')">
								<locale k="EQUIP_FILTER_TYPE_OS" />
							</b-button>
							<b-button variant="outline-secondary" :pressed="Display.Type.Public" @click="Filter('Type', 'Public')">
								<locale k="EQUIP_FILTER_TYPE_ITEM" />
							</b-button>
							<b-button variant="outline-secondary" :pressed="Display.Type.Private" @click="Filter('Type', 'Private')">
								<locale k="EQUIP_FILTER_TYPE_EXCLUSIVE" />
							</b-button>
						</b-btn-group>
					</b-col>
				</b-row>
				<hr class="my-2" />
				<b-row>
					<b-col class="filter-label" md="auto" cols="12">
						<locale k="EQUIP_FILTER_SOURCE" />
					</b-col>
					<b-col md cols="12">
						<div class="clearfix">
							<div class="float-right">
								<b-checkbox v-model="displayEquipSources">
									<locale k="EQUIP_FILTER_DISPLAY_SOURCES" />
								</b-checkbox>
							</div>

							<b-button-group class="float-left d-block mb-1">
								<b-button variant="primary" @click="FillEquipSourceFilters">
									<locale k="EQUIP_FILTER_SELECTALL" />
								</b-button>
								<b-button variant="danger" @click="ClearEquipSourceFilters">
									<locale k="EQUIP_FILTER_DESELECTALL" />
								</b-button>
							</b-button-group>
						</div>

						<b-collapse :visible="displayEquipSources">
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-secondary" :pressed="Display.Source.Limited" @click="Filter('Source', 'Limited')">
									<locale k="EQUIP_FILTER_SOURCE_LIMITED" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-dark" :pressed="Display.Source.EndlessWar" @click="Filter('Source', 'EndlessWar')">
									<locale k="EQUIP_FILTER_SOURCE_ENDLESSWAR" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button
									variant="outline-supplementary"
									:pressed="Display.Source.Supplementary"
									@click="Filter('Source', 'Supplementary')"
								>
									<locale k="EQUIP_FILTER_SOURCE_SUBSTORY" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-exchange" :pressed="Display.Source.Exchange" @click="Filter('Source', 'Exchange')">
									<locale k="EQUIP_FILTER_SOURCE_EXCHANGE" />
								</b-button>
								<b-button
									variant="outline-exchange-old"
									:pressed="Display.Source.OldExchange"
									@click="Filter('Source', 'OldExchange')"
								>
									<locale k="EQUIP_FILTER_SOURCE_OLD_EXCHANGE" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-danger" :pressed="Display.Source.ExMap" @click="Filter('Source', 'ExMap')">
									<locale k="EQUIP_FILTER_SOURCE_MAP_EX" />
								</b-button>
								<b-button variant="outline-success" :pressed="Display.Source.SideMap" @click="Filter('Source', 'SideMap')">
									<locale k="EQUIP_FILTER_SOURCE_MAP_SIDE" />
								</b-button>
								<b-button variant="outline-warning" :pressed="Display.Source.Map" @click="Filter('Source', 'Map')">
									<locale k="EQUIP_FILTER_SOURCE_MAP_NORMAL" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-warning" :pressed="Display.Source.EventMap" @click="Filter('Source', 'EventMap')">
									<locale k="EQUIP_FILTER_SOURCE_EVENT_MAP" />
								</b-button>
								<b-button
									variant="outline-event-exchange"
									:pressed="Display.Source.EventExchange"
									@click="Filter('Source', 'EventExchange')"
								>
									<locale k="EQUIP_FILTER_SOURCE_EVENT_EXCHANGE" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-warning" :pressed="Display.Source.OldEventMap" @click="Filter('Source', 'OldEventMap')">
									<locale k="EQUIP_FILTER_SOURCE_OLD_EVENT_MAP" />
								</b-button>
								<b-button
									variant="outline-event-exchange-old"
									:pressed="Display.Source.OldEventExchange"
									@click="Filter('Source', 'OldEventExchange')"
								>
									<locale k="EQUIP_FILTER_SOURCE_OLD_EVENT_EXCHANGE" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-primary" :pressed="Display.Source.Challenge" @click="Filter('Source', 'Challenge')">
									<locale k="EQUIP_FILTER_SOURCE_CHALLENGE" />
								</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-black" :pressed="Display.Source.Uninstalled" @click="Filter('Source', 'Uninstalled')">
									<locale k="EQUIP_FILTER_SOURCE_NOT_IMPLEMENTED" />
								</b-button>
							</b-btn-group>
						</b-collapse>
					</b-col>
				</b-row>
				<hr class="my-2" />
				<b-row>
					<b-col class="filter-label" md="auto" cols="12"><locale k="EQUIP_FILTER_EFFECTS" /></b-col>
					<b-col md cols="12">
						<div class="clearfix">
							<div class="float-right">
								<b-checkbox v-model="displayEquipEffects">
									<locale k="EQUIP_FILTER_DISPLAY_EFFECTS" />
								</b-checkbox>
							</div>

							<b-button-group class="float-left d-block mb-1">
								<b-button variant="primary" @click="FillEquipEffectFilters">
									<locale k="EQUIP_FILTER_SELECTALL" />
								</b-button>
								<b-button variant="danger" @click="ClearEquipEffectFilters">
									<locale k="EQUIP_FILTER_DESELECTALL" />
								</b-button>
							</b-button-group>
						</div>
						<!-- <b-select :options="EquipEffects" /> -->
						<b-collapse :visible="displayEquipEffects">
							<b-table-simple small striped borderless>
								<b-tbody>
									<b-tr v-for="(group, gkey) in EquipEffects" :key="`equip-effect-group-${gkey}`">
										<b-td class="align-middle pr-2">
											<span class="effect-group-name">{{ EffectGroupNames[gkey] }} :</span>
										</b-td>
										<b-td>
											<template v-for="entity in group">
												<b-btn-group v-if="Array.isArray(entity)" :key="`equip-effect-${entity[0].type}`" class="mr-1 mb-1">
													<b-button
														v-for="subentity in entity"
														:key="`equip-effect-${subentity.type}-${subentity.pmType}`"
														variant="outline-secondary"
														:pressed="subentity.selected"
														@click="subentity.selected = !subentity.selected"
													>
														<locale :k="subentity.text">
															<template #p0>
																<locale v-if="subentity.pmType > 0" k="UNIT_FILTERS_SKILL_EFFECTS_PM_P" />
																<locale v-else k="UNIT_FILTERS_SKILL_EFFECTS_PM_M" />
															</template>
														</locale>
													</b-button>
												</b-btn-group>
												<b-button
													v-else
													:key="`equip-effect-${entity.type}`"
													class="mr-1 mb-1"
													variant="outline-secondary"
													:pressed="entity.selected"
													@click="entity.selected = !entity.selected"
												>
													{{ entity.text }}
												</b-button>
											</template>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-collapse>
					</b-col>
				</b-row>
			</b-card>
		</b-collapse>

		<b-row class="mt-4" cols-xl="6" cols-lg="5" cols-md="4" cols-sm="3" cols="2">
			<b-col v-for="group of EquipGroups" :key="`equip-${group.name}`">
				<equip-card class="w-100" :equip="group.equip" :source="group.source" @click="modalEquipRequest" />
			</b-col>
		</b-row>

		<equip-modal :equip="selectedEquip" :display.sync="equipModalDisplay" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import EquipIcon from "@/components/EquipIcon.vue";
import SourceBadge from "@/components/SourceBadge.vue";

import EquipCard from "./Equips/EquipCard.vue";
import EquipModal from "./Equips/EquipModal.vue";

import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";
import { BuffEffect, BuffEffectListGroupKeys, BuffEffectValue, BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import { FilterableEquip } from "@/libs/Types/Equip.Filterable";

import FilterableUnitDB from "@/libs/DB/Unit.Filterable";
import FilterableEquipDB from "@/libs/DB/Equip.Filterable";

import { CurrentEvent, CurrentDate, AssetsRoot, ImageExtension, RarityDisplay, EquipTypeDisplay } from "@/libs/Const";
import { ArrayUnique, groupBy, UpdateTitle } from "@/libs/Functions";
import { Rarity } from "@/libs/Types";
import EntitySource from "@/libs/EntitySource";

import StoreModule, { EffectFilterListItemPM, EffectFilterListItemSingle, EffectFilterListType, EquipDisplayType } from "@/libs/Store";
import { SetMeta } from "@/libs/Meta";
import { isBuffEffectValid, isPositiveBuffEffect, isPositiveBuffEffectValue } from "@/libs/Buffs/Helper";

@Component({
	components: {
		EquipIcon,
		SourceBadge,

		EquipCard,
		EquipModal,
	},
})
export default class Equips extends Vue {
	private selectedEquip: FilterableEquip | null = null;

	private equipModalDisplay: boolean = false;

	private displayFilters: boolean = false;
	private displayEquipSources: boolean = false;
	private displayEquipEffects: boolean = false;

	// Vuex -----
	private get Display () {
		return StoreModule.EquipDisplayFilter;
	}

	private set Display (value: EquipDisplayType) {
		StoreModule.setEquipDisplayFilter(value);
	}
	// Vuex -----

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	@Watch("equipModalDisplay")
	private equipModalDisplayWatch (value: boolean, prev: boolean) {
		if (prev && !value)
			this.$router.push({ path: "/equips/" });
	}

	private checkParams () {
		const params = this.$route.params;

		if ("id" in params) {
			this.modalEquip(params.id);

			if (this.selectedEquip) {
				const eq = this.selectedEquip;

				SetMeta(
					["description", "twitter:description"],
					`${RarityDisplay[eq.rarity]}급 ${EquipTypeDisplay()[eq.type]} ${eq.name}의 정보입니다. 레벨별 효과, 획득처, 강화 비용을 확인할 수 있습니다.`,
				);
				SetMeta("keywords", `,${eq.name}`, true);
				SetMeta(
					["twitter:image", "og:image"],
					`${AssetsRoot}/${ImageExtension()}/item/${eq.icon}.${ImageExtension()}`,
				);
			}

			UpdateTitle(LocaleGet("MENU_EQUIPS"), `${this.selectedEquip ? this.selectedEquip.name : "???"}`);
		} else {
			this.equipModalDisplay = false;

			SetMeta(["description", "twitter:description"], "장비의 목록을 표시합니다. 원하는 장비를 찾기 위해 검색할 수 있습니다.");
			SetMeta(["twitter:image", "og:image"], null);
			UpdateTitle(LocaleGet("MENU_EQUIPS"));
		}
	}

	private get EffectGroupNames (): Record<string, string> {
		const ret: Record<BuffEffectListGroupKeys, string> = {
			stats: LocaleGet("BUFF_GROUP_STATS"),
			damageAdd: LocaleGet("BUFF_GROUP_DMG_UP"),
			damageReduce: LocaleGet("BUFF_GROUP_DMG_REDUCE"),
			guard: LocaleGet("BUFF_GROUP_GUARD"),
			speedAp: LocaleGet("BUFF_GROUP_AP"),
			offPierce: LocaleGet("BUFF_GROUP_OFF"),
			resist: LocaleGet("BUFF_GROUP_RESIST"),
			damage: LocaleGet("BUFF_GROUP_DMG"),
			etcBuff: LocaleGet("BUFF_GROUP_ETC_BUFF"),
			etcDebuff: LocaleGet("BUFF_GROUP_ETC_DEBUFF"),
		};
		return ret;
	}

	private get EquipGroups () {
		const group = groupBy(FilterableEquipDB, (x) => `${x.type}_${x.key}`);
		return Object.keys(group)
			.map(x => group[x])
			.map(x_ => {
				const last = [...x_].sort((a, b) => b.rarity - a.rarity)[0];

				const source = ((items) => {
					const list: EntitySource[] = [];
					let map = false;

					if (items.every(y => !y.available))
						list.push(new EntitySource("Uninstalled"));

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
					const output = ArrayUnique(list, y => y.toShort());
					const isPriv = output.some(y => y.IsPrivateItem);

					/*
					const exceptPrivate = output.filter(y => !y.IsPrivateItem);
					if (exceptPrivate.length === 1 && exceptPrivate[0].IsMap)
						return output;
					else if (exceptPrivate.length === 0 && !map) {
						return [
							...(
								output.length !== exceptPrivate.length
									? [...output.filter(y => y.IsPrivateItem)]
									: []
							),
							new EntitySource("Limited"),
						];
					} else
						return output;
					*/

					if (((isPriv && output.length === 1) || output.length === 0) && !map)
						output.splice(0, output.length, new EntitySource("Limited"), ...output.filter(y => y.IsPrivateItem));

					return output;
				})(x_);

				return {
					equips: x_,
					last,
					source,
					sourceRaw: x_.reduce(
						(p, c) => [
							...(
								c.limit && c.limit.every(y => FilterableUnitDB.some(z => z.uid === y))
									? c.limit.map(y => new EntitySource(`Private:${y}`))
									: []
							),
							...p,
							...c.source.reduce((p2, c2) => [...p2, ...c2], []),
							...source.filter(y => y.IsUninstalled),
						],
						[] as EntitySource[],
					),
				};
			})
			.filter(x => {
				if (x.equips.length === 0) return false;

				const sources = ArrayUnique(
					x.sourceRaw,
					y => y.toShort(),
				);

				// 전용장비
				const last = x.last;
				if (last.limit && last.limit.every(y => FilterableUnitDB.some(z => z.uid === y))) { // 전용 장비임
					if (!this.Display.Type.Private)
						return false; // 전용 장비 필터가 꺼짐
				} else { // 그 외 유형
					const types = [];
					if (this.Display.Type.Chip) types.push(ITEM_TYPE.CHIP);
					if (this.Display.Type.OS) types.push(ITEM_TYPE.SPCHIP);
					if (this.Display.Type.Public) types.push(ITEM_TYPE.SUBEQ);
					if (!types.includes(last.type)) return false;
				}

				// 효과 필터
				if (x.equips.every(y => !this.HasFilteredEffect(y)))
					return false;

				// 획득처
				if (this.Display.Source.EndlessWar && sources.some(y => y.IsEndlessWar)) return true;

				if (this.Display.Source.Exchange && sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate === CurrentDate)) return true;
				if (this.Display.Source.OldExchange && sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate !== CurrentDate)) return true;

				if (this.Display.Source.Supplementary && sources.some(y => y.IsSupplementary)) return true;
				if (this.Display.Source.EventExchange && sources.some(y => y.IsEvent && y.IsExchange && y.EventId === CurrentEvent)) return true;
				if (this.Display.Source.OldEventExchange && sources.some(y => y.IsEvent && y.IsExchange && y.EventId !== CurrentEvent)) return true;

				if (this.Display.Source.EventMap && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId === CurrentEvent)) return true;
				if (this.Display.Source.OldEventMap && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId !== CurrentEvent)) return true;

				if (this.Display.Source.ExMap && sources.some(y => y.IsMap && y.IsExMap && !y.IsEvent && !y.IsExchange)) return true;
				if (this.Display.Source.SideMap && sources.some(y => y.IsMap && y.IsSideMap && !y.IsEvent && !y.IsExchange)) return true;
				if (this.Display.Source.Map && sources.some(y => y.IsMap && !y.IsExMap && !y.IsSideMap && !y.IsEvent)) return true;

				if (this.Display.Source.Limited && sources.some(y => y.IsLimited)) return true;
				if (this.Display.Source.Limited && sources.length === 0) return true;

				if (this.Display.Source.Challenge && sources.some(y => y.IsChallenge)) return true;

				if (this.Display.Source.Uninstalled && sources.some(y => y.IsUninstalled)) return true;

				return false;
			})
			.map(x => ({
				equip: x.last,
				name: `${x.last.type}_${x.last.key}`,
				source: ((y) => {
					const m = y.filter(z => !z.IsPrivateItem);

					if (m.length === 1 && m[0].IsMap)
						return y;
					else
						return y.filter(z => z.IsPrivateItem || !z.IsMap);
				})(x.source),
			}));
	}

	private get EquipEffects () {
		const ret: EffectFilterListType = [];

		StoreModule.equipEffectFilterListFlatten
			.forEach(x => {
				if (Array.isArray(x)) {
					// 증감치
					const part: EffectFilterListItemPM[] = [];

					// 증가치
					let f = FilterableEquipDB.some(eq => eq.effects.some(es => x[0].type.includes(es.type) && es.positive));
					if (f) part.push(x[0]);

					// 감소치
					f = FilterableEquipDB.some(eq => eq.effects.some(es => x[1].type.includes(es.type) && !es.positive));
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
		const filters = StoreModule.unitEffectFilterList;
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
	}

	private HasFilteredEffect (eq: FilterableEquip) {
		return eq.effects.some(y => {
			return StoreModule.equipEffectFilterListFlatten.some(z => Array.isArray(z)
				? z.some(_ => _.selected && _.type.includes(y.type) && ((_.pmType > 0 && y.positive) || (_.pmType < 0 && !y.positive)))
				: z.selected && z.type.includes(y.type));
		});
	}

	private FillEquipEffectFilters () {
		StoreModule.FillEquipDisplayEffectFilter();
	}

	private ClearEquipEffectFilters () {
		StoreModule.ClearEquipDisplayEffectFilter();
	}

	private FillEquipSourceFilters () {
		StoreModule.FillEquipDisplaySourceFilter();
	}

	private ClearEquipSourceFilters () {
		StoreModule.ClearEquipDisplaySourceFilter();
	}

	private modalEquip (fullKey: string) {
		this.selectedEquip = FilterableEquipDB.find(x => x.fullKey === fullKey) || null;
		this.equipModalDisplay = true;
	}

	private modalEquipRequest (name: string) {
		if (name)
			this.$router.push({ path: `/equips/${name}` });
	}

	private Filter (category: keyof EquipDisplayType, type: string) {
		switch (category) {
			case "Type":
				((key) => {
					this.Display.Type[key] = !this.Display.Type[key];
				})(type as keyof EquipDisplayType["Type"]);
				break;
			case "Source":
				((key) => {
					this.Display.Source[key] = !this.Display.Source[key];
				})(type as keyof EquipDisplayType["Source"]);
				break;
		}
	}

	private mounted () {
		this.checkParams();
	}
}
</script>

<style lang="scss">
#app > .container > .equips {
	.filter-label {
		width: 120px;
		flex: 0 0 auto;

		& + div .btn {
			word-break: keep-all;
		}
	}
}
</style>
