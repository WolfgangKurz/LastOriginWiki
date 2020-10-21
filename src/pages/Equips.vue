<template>
	<div class="equips">
		<div class="text-center mb-3">
			<b-alert variant="warning" show>
				"만월의 야상곡", "할로윈 파크 패닉!", "세인트 오르카의 비밀작전", "이상한 나라의 초코여왕" 이벤트 정보가 입력되지 않았습니다. 드랍처
				및 교환소 정보를 입력하지 않아 일부 장비가
				<b-badge variant="secondary">한정</b-badge>으로 분류 및 표시될 수 있습니다. <br />또, 장비 좌측 상단의
				<b-badge variant="secondary">획득처 없음</b-badge>표시는 <b-badge variant="danger">현재 진행중인 이벤트</b-badge>및
				<b-badge variant="exchange">현재 기간 교환소</b-badge>기준입니다. 이전 이벤트 또는 기간에 드랍/교환 가능했던 장비어도 현재 획득처가
				없다면 표시됩니다.
			</b-alert>
		</div>

		<div class="mb-2 text-left clearfix">
			<div class="float-right">
				<b-checkbox v-model="displayFilters">필터 표시</b-checkbox>
			</div>
			총 {{ EquipGroups.length }} 개의 장비
		</div>

		<b-collapse :visible="displayFilters">
			<b-card class="text-left">
				<b-row>
					<b-col class="filter-label" md="auto" cols="12">장비 유형 :</b-col>
					<b-col md cols="12">
						<b-btn-group class="mx-1">
							<b-button variant="outline-secondary" :pressed="Display.Type.Chip" @click="Filter('Type', 'Chip')">칩</b-button>
							<b-button variant="outline-secondary" :pressed="Display.Type.OS" @click="Filter('Type', 'OS')">OS</b-button>
							<b-button variant="outline-secondary" :pressed="Display.Type.Public" @click="Filter('Type', 'Public')">보조장비</b-button>
							<b-button variant="outline-secondary" :pressed="Display.Type.Private" @click="Filter('Type', 'Private')"
								>전용장비</b-button
							>
						</b-btn-group>
					</b-col>
				</b-row>
				<hr class="my-2" />
				<b-row>
					<b-col class="filter-label" md="auto" cols="12">장비 획득처 :</b-col>
					<b-col md cols="12">
						<div clas="mx-1 mb-1">
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-secondary" :pressed="Display.Source.Limited" @click="Filter('Source', 'Limited')"
									>한정</b-button
								>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-dark" :pressed="Display.Type.EndlessWar" @click="Filter('Type', 'EndlessWar')"
									>영원한 전장</b-button
								>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-apocrypha" :pressed="Display.Source.Apocrypha" @click="Filter('Source', 'Apocrypha')"
									>외전</b-button
								>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-exchange" :pressed="Display.Source.Exchange" @click="Filter('Source', 'Exchange')"
									>교환소</b-button
								>
								<b-button
									variant="outline-exchange-old"
									:pressed="Display.Source.OldExchange"
									@click="Filter('Source', 'OldExchange')"
									>지난 교환소</b-button
								>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-danger" :pressed="Display.Source.ExMap" @click="Filter('Source', 'ExMap')">Ex 맵</b-button>
								<b-button variant="outline-success" :pressed="Display.Source.SideMap" @click="Filter('Source', 'SideMap')"
									>사이드 맵</b-button
								>
								<b-button variant="outline-warning" :pressed="Display.Source.Map" @click="Filter('Source', 'Map')">일반 맵</b-button>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-warning" :pressed="Display.Source.EventMap" @click="Filter('Source', 'EventMap')"
									>이벤트 맵</b-button
								>
								<b-button
									variant="outline-event-exchange"
									:pressed="Display.Source.EventExchange"
									@click="Filter('Source', 'EventExchange')"
									>이벤트 교환소</b-button
								>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-warning" :pressed="Display.Source.OldEventMap" @click="Filter('Source', 'OldEventMap')"
									>지난 이벤트 맵</b-button
								>
								<b-button
									variant="outline-event-exchange-old"
									:pressed="Display.Source.OldEventExchange"
									@click="Filter('Source', 'OldEventExchange')"
									>지난 이벤트 교환소</b-button
								>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-primary" :pressed="Display.Source.Challenge" @click="Filter('Source', 'Challenge')"
									>외부 통신 요청</b-button
								>
							</b-btn-group>
							<b-btn-group class="mx-1 mb-1">
								<b-button variant="outline-black" :pressed="Display.Source.Uninstalled" @click="Filter('Source', 'Uninstalled')"
									>미구현</b-button
								>
							</b-btn-group>
						</div>
					</b-col>
				</b-row>
				<template v-if="false">
					<hr class="my-2" />
					<b-row>
						<b-col class="filter-label" md="auto" cols="12">장비 효과 :</b-col>
						<b-col md cols="12">
							<div class="clearfix">
								<div class="float-right">
									<b-checkbox v-model="displayEquipEffects">장비 효과 목록 표시</b-checkbox>
								</div>

								<b-button-group class="d-block mb-1">
									<b-button variant="primary" @click="FillEquipEffectFilters">모두 선택</b-button>
									<b-button variant="danger" @click="ClearEquipEffectFilters">모두 선택 해제</b-button>
								</b-button-group>
							</div>
							<!-- <b-select :options="EquipEffects" /> -->
							<b-collapse :visible="displayEquipEffects">
								<template v-for="(entity, idx) in EquipEffects">
									<b-btn-group v-if="Array.isArray(entity)" :key="`equip-effect-${idx}`" class="mr-1 mb-1">
										<b-button
											v-for="subentity in entity"
											:key="`equip-effect-${idx}-${subentity.value}`"
											variant="outline-secondary"
											:pressed="Display.Effects.includes(subentity.value)"
											@click="EffectFilterToggle(subentity.value)"
											>{{ subentity.text }}</b-button
										>
									</b-btn-group>
									<b-button
										v-else
										:key="`equip-effect-${entity.value}`"
										class="mr-1 mb-1"
										variant="outline-secondary"
										:pressed="Display.Effects.includes(entity.value)"
										@click="EffectFilterToggle(entity.value)"
										>{{ entity.text }}</b-button
									>
								</template>
							</b-collapse>
						</b-col>
					</b-row>
				</template>
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
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import EquipIcon from "@/components/EquipIcon.vue";
import SourceBadge from "@/components/SourceBadge.vue";

import EquipCard from "./Equips/EquipCard.vue";
import EquipModal from "./Equips/EquipModal.vue";

import { ITEM_TYPE } from "@/libs/Types/Enums";
import EquipData, { Equip } from "@/libs/DB/Equip";

import { CurrentEvent, CurrentDate } from "@/libs/Const";
import { ArrayUnique, UpdateTitle } from "@/libs/Functions";
import { Rarity } from "@/libs/Types";
import EntitySource from "@/libs/EntitySource";

import StoreModule, { EquipDisplayType } from "@/libs/Store";

@Component({
	components: {
		EquipIcon,
		SourceBadge,

		EquipCard,
		EquipModal,
	},
})
export default class Equips extends Vue {
	private selectedEquip: Equip | null = null;

	private equipModalDisplay: boolean = false;

	private displayFilters: boolean = false;
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
			UpdateTitle("장비정보", `${this.selectedEquip ? this.selectedEquip.name : "???"}`);
		} else {
			this.equipModalDisplay = false;
			UpdateTitle("장비정보");
		}
	}

	private get EquipRarity () {
		return ["ss", "s", "a", "b"];
	}

	private get EquipEffects () {
		const actName: Record<string, string> = {
			acc: "적중",
			armorpierce: "방어 관통",
			atk: "공격력",
			ap: "AP",
			chance: "효과 발동",
			crit: "치명타",
			def: "방어력",
			dmg: "피해량",
			dp: "방어막/피해감소 무시",
			eva: "회피",
			exp: "획득 경험치",
			dr: "받는 피해",
			barrier: "방어막",
			hit: "지속피해",
			hp: "체력",
			"hp-atk": "공격력 비례 체력 감소",
			mindmg: "피해 최소화",
			off: "특정 효과 해제",
			range: "사거리",
			revive: "전투 속행",
			scout: "정찰 활성화",
			skill: "n번 스킬",
			spd: "행동력",
			stun: "행동 불가",
		};
		const func = (x: string) => ({
			value: x,
			text: (() => {
				switch (x) {
					case "+atk":
					case "+armorpierce":
					case "+ap":
					case "+chance":
					case "+crit":
					case "+def":
					case "+dp":
					case "+eva":
					case "+exp":
					case "-dr": // dr은 sign이 반대
					case "+barrier":
					case "+hp":
					case "+range":
					case "+spd":
						return `${actName[x.substr(1)]} 증가`;

					case "-atk":
					case "-armorpierce":
					case "-ap":
					case "-chance":
					case "-crit":
					case "-def":
					case "-dp":
					case "-eva":
					case "-exp":
					case "+dr": // dr은 sign이 반대
					case "-barrier":
					case "-hp":
					case "-range":
					case "-spd":
						return `${actName[x.substr(1)]} 감소`;

					case "+acc": return "적중 증가";
					case "-acc": return "적중 감소";

					case "counter": return "반격";
					case "+dmg": return "대타입 피해량 증가";
					case "-dmg": return "대타입 피해량 감소";
					case "hp-atk": return "공격력 비례 체력 감소";
					case "hit1": return "지속 고정 피해";
					case "hit2": return "지속 속성 피해";

					case "+resist1": return "효과 저항 증가";
					case "-resist1": return "효과 저항 감소";
					case "+resist2": return "속성 저항 증가";
					case "-resist2": return "속성 저항 감소";
					case "resist3": return "스테이터스 감소 무효";

					case "revive": return "전투 속행";

					case "off1": return "스테이터스 감소 해제";
					case "off2": return "해로운 효과 해제";

					case "scout": return "정찰";
					case "stun": return "스킬 사용 불가";

					case "skill": return "스킬 강화";
					default: return "?";
				}
			})(),
		});

		return StoreModule.equipEffectFilterList
			.map(x =>
				Array.isArray(x)
					? x.map(y => func(y))
					: func(x),
			);
	}

	private get EquipGroups () {
		const group = _.groupBy(EquipData, (x) => `${x.type}_${x.key}`);
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
						if (item.limit && item.limit.every(y => typeof y === "number")) {
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
								c.limit && c.limit.every(y => typeof y === "number")
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
				if (last.limit && last.limit.every(y => typeof y === "number")) { // 전용 장비임
					if (!this.Display.Type.Private) return false; // 전용 장비 필터가 꺼짐
				} else { // 그 외 유형
					const types = [];
					if (this.Display.Type.Chip) types.push(ITEM_TYPE.CHIP);
					if (this.Display.Type.OS) types.push(ITEM_TYPE.SPCHIP);
					if (this.Display.Type.Public) types.push(ITEM_TYPE.SUBEQ);
					if (!types.includes(last.type)) return false;
				}

				// 효과 필터
				if (x.equips.every(y => !this.HasFilteredEffect(y))) return false;

				// 획득처
				if (this.Display.Type.EndlessWar && sources.some(y => y.IsEndlessWar)) return true;

				if (this.Display.Source.Exchange && sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate === CurrentDate)) return true;
				if (this.Display.Source.OldExchange && sources.some(y => y.IsExchange && !y.IsEvent && y.ExchangeDate !== CurrentDate)) return true;

				if (this.Display.Source.Apocrypha && sources.some(y => y.IsApocrypha)) return true;
				if (this.Display.Source.EventExchange && sources.some(y => y.IsEvent && y.IsExchange && y.EventId === CurrentEvent)) return true;
				if (this.Display.Source.OldEventExchange && sources.some(y => y.IsEvent && y.IsExchange && y.EventId !== CurrentEvent)) return true;

				if (this.Display.Source.EventMap && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId === CurrentEvent)) return true;
				if (this.Display.Source.OldEventMap && sources.some(y => y.IsEvent && !y.IsExchange && y.EventId !== CurrentEvent)) return true;

				if (this.Display.Source.ExMap && sources.some(y => y.IsMap && y.IsExMap && !y.IsEvent && !y.IsExchange)) return true;
				if (this.Display.Source.SideMap && sources.some(y => y.IsMap && y.IsSideMap && !y.IsEvent && !y.IsExchange)) return true;
				if (this.Display.Source.Map && sources.some(y => y.IsMap && !y.IsExMap && !y.IsSideMap && !y.IsEvent)) return true;

				if (this.Display.Source.Limited && sources.some(y => y.IsLimited)) return true;
				if (this.Display.Source.Limited && sources.length === 0) return true;

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

	private HasFilteredEffect (eq: Equip) {
		const isNumeric = (data: string) => {
			return /^[0-9]+\.?[0-9]*%?$/.test(data);
		};

		return true;
		/*
		eq.stats
			.some(y => y
				.some(z => z.actions.some(a => {
					let sign = "";
					let target = a.act;
					const p = a.params;
					const p0 = p.length > 0 ? p[0] : "";
					const p1 = p.length > 1 ? p[1] : "";
					const p2 = p.length > 2 ? p[2] : "";

					switch (a.act) {
						case "atk":
						case "armorpierce":
						case "ap":
						case "chance":
						case "crit":
						case "def":
						case "dp":
						case "eva":
						case "exp":
						case "barrier":
						case "hp":
						case "range":
						case "spd":
						case "dr":
						case "dmg":
							sign = p0[0] === "-" ? "-" : "+";
							break;

						case "acc":
							if (a.params.length === 1)
								sign = p0[0] === "-" ? "-" : "+";
							else if (a.params.length === 2)
								sign = p1[0] === "-" ? "-" : "+";
							break;

						case "resist":
							if (a.params.length === 1) {
								if (isNumeric(p0)) { // 효과 저항 증감
									sign = p0[0] === "-" ? "-" : "+";
									target = "resist1";
								} else { // 속성 저항 증감
									sign = p0[0] === "-" ? "-" : "+";
									target = "resist3";
								}
							} else if (a.params.length === 2) { // 효과 감소 무효
								sign = p1[0] === "-" ? "-" : "+";
								target = "resist2";
							}
							break;

						case "hit":
							if (p.length === 1)
								target = "hit1"; // 지속 고정 피해
							else
								target = "hit2"; // 지속 속성 피해
							break;

						case "off":
							if (p.length === 2)
								target = "off1";
							else if (isNumeric(p0))
								target = "off2";
							else if (p.length >= 1)
								target = "off1";
							else
								target = "off2";
							break;
					}

					return this.Display.Effects.includes(sign + target);
				})),
			);
		*/
	}

	private EffectFilterToggle (value: string) {
		if (this.Display.Effects.includes(value))
			this.Display.Effects.splice(this.Display.Effects.indexOf(value), 1);
		else
			this.Display.Effects.push(value);
	}

	private FillEquipEffectFilters () {
		StoreModule.FillEquipDisplayFilter();
	}

	private ClearEquipEffectFilters () {
		StoreModule.ClearEquipDisplayFilter();
	}

	private EquipBase (name: string) {
		return Object.values(EquipData).filter(x => x.name.startsWith(name))[0];
	}

	private modalEquip (fullKey: string) {
		this.selectedEquip = EquipData.find(x => x.fullKey === fullKey) || null;
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
