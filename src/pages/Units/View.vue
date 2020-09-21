<template>
	<div class="unit-view">
		<b-row>
			<b-col cols="12" md="auto" class="text-left">
				<b-button variant="dark" @click="GoBack()">뒤로</b-button>
			</b-col>
			<b-col>
				<b-tabs nav-class="unit-display-tabs mb-3" align="right">
					<b-tab
						title-link-class="text-dark"
						:active="displayTab === 'information'"
						@click="displayTab = 'information'"
					>
						<template #title>
							<b-icon-person-lines-fill class="mr-1" />전투원정보
						</template>
					</b-tab>
					<b-tab
						title-link-class="text-dark"
						:active="displayTab === 'dialogue'"
						@click="displayTab = 'dialogue'"
					>
						<template #title>
							<b-icon-chat-left-quote class="mr-1" />대사
						</template>
					</b-tab>
					<b-tab
						title-link-class="text-dark"
						:active="displayTab === 'status'"
						@click="displayTab = 'status'"
					>
						<template #title>
							<b-icon-calculator class="mr-1" />스테이터스
						</template>
					</b-tab>
				</b-tabs>
			</b-col>
		</b-row>

		<template v-if="displayTab === 'information'">
			<!-- 스킨, 번호, 소속, 등급, 승급, 유형, 역할 -->
			<b-tabs v-model="skinIndex" nav-class="unit-skin-tabs">
				<b-tab
					v-for="(skin, index) in SkinList"
					:key="`unit-skin-${index}`"
					:title-link-class="index === skinIndex ? `rarity-${skin.isPro ? 'SS' : unit.rarity}-force text-dark` : 'text-dark'"
					:active="index === 0"
				>
					<template #title>
						<template v-if="skin.isPro">
							<b-badge v-if="index === skinIndex" variant="light">SS 승급</b-badge>
							<rarity-badge v-else rarity="SS">SS 승급</rarity-badge>
							{{skin.t}}
						</template>
						<template v-else>{{skin.t}}</template>
					</template>
				</b-tab>
			</b-tabs>
			<b-row>
				<b-col cols="12" md="3">
					<unit-skin-view
						v-if="SkinList[skinIndex]"
						:unit="unit"
						:skin="SkinList[skinIndex]"
						:index="skinIndex"
						collapsed
						detailable
					/>
				</b-col>

				<b-col cols="12" md="9">
					<b-container class="table-unit-modal mt-4 mb-3">
						<b-row cols="2" cols-md="4" class="text-center">
							<b-col class="bg-dark text-white">도감 번호</b-col>
							<b-col>
								<small>No.&nbsp;</small>
								<strong>{{unit.id}}</strong>
							</b-col>
							<b-col class="bg-dark text-white">소속</b-col>
							<b-col>
								<span class="break-keep">{{unit.group}}</span>
							</b-col>
							<b-col class="bg-dark text-white">등급</b-col>
							<b-col>
								<rarity-badge :rarity="unit.rarity" size="medium">{{unit.rarity}} 등급</rarity-badge>
							</b-col>
							<b-col class="bg-dark text-white">승급</b-col>
							<b-col>
								<template v-if="unit.promotions">
									<rarity-badge
										v-for="pro in unit.promotions"
										:key="`unit-promotion-${pro}`"
										:rarity="pro"
										size="medium"
									>{{pro}} 승급</rarity-badge>
								</template>
								<template v-else>
									<span class="text-secondary">승급 없음</span>
								</template>
							</b-col>
							<b-col class="bg-dark text-white">유형</b-col>
							<b-col>
								<unit-badge :type="unit.type" size="large" transparent black />
							</b-col>
							<b-col class="bg-dark text-white">역할</b-col>
							<b-col>
								<unit-badge :role="unit.role" size="large" transparent black />
							</b-col>
						</b-row>
					</b-container>

					<b-row>
						<b-col cols="12" md="4">
							<b-table-simple bordered fixed table-class="text-center table-unit-modal">
								<b-thead head-variant="dark">
									<b-tr>
										<b-th>
											링크 보너스
											<b-form-select
												class="table-unit-link-select"
												size="sm"
												v-model="linkCount"
												:options="LinkCountList"
											/>
										</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr>
										<b-td>
											HP
											<span class="d-inline-block">
												+
												<b class="text-danger">{{LinkBonus.Value.HP}}</b>%
											</span>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td>
											공격력
											<span class="d-inline-block">
												+
												<b class="text-danger">{{LinkBonus.Value.Atk}}</b>%
											</span>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td>
											<template v-if="!LinkBonus.IsHP">
												{{LinkBonus.Per}}
												<span class="d-inline-block">
													+
													<b class="text-danger">{{LinkBonus.Value.Per[0]}}</b>
													<template v-if="LinkBonus.Value.Per[1]">%</template>
												</span>
											</template>
											<b v-else class="text-secondary">-</b>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td>
											획득 경험치
											<span class="d-inline-block">
												+
												<b class="text-danger">{{LinkBonus.Value.EXP}}</b>%
											</span>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-col>
						<b-col cols="12" md="8">
							<b-table-simple bordered fixed table-class="text-center table-unit-modal">
								<b-thead head-variant="dark">
									<b-tr>
										<b-th>획득처</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr>
										<b-td>
											<template v-if="unit.source.length === 0">
												<b-badge v-if="unit.craftable" variant="dark">제조 가능</b-badge>
												<span v-else class="text-secondary">획득처 정보 없음 (제조 불가)</span>
											</template>
											<template v-else>
												<b-badge v-if="unit.craftable" variant="dark">
													<b-icon-hammer class="mr-1" />제조 가능
												</b-badge>

												<div v-for="(area, aindex) in unit.source" :key="`unit-view-source-${aindex}`">
													<hr v-if="unit.craftable || aindex > 0" class="my-1" />
													<source-badge
														v-for="(source, sindex) in area"
														:key="`unit-view-drop-${aindex}-${sindex}-${source}`"
														:source="source"
														detail
														linked
													/>
												</div>
											</template>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-col>
					</b-row>

					<b-row>
						<b-col cols="12" sm="6">
							<b-table-simple bordered fixed table-class="text-center table-unit-modal">
								<b-thead head-variant="dark">
									<b-tr>
										<b-th colspan="4">
											출격 비용
											<b-form-select
												v-if="CostRarityList.length > 1"
												class="table-unit-rarity-select"
												size="sm"
												v-model="costRarity"
												:options="CostRarityList"
											/>
										</b-th>
									</b-tr>
									<b-tr>
										<b-th>링크</b-th>
										<b-th>부품</b-th>
										<b-th>영양</b-th>
										<b-th>전력</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr v-for="i in 6" :key="`unit-modal-cost-${i}`" class="text-center">
										<b-th variant="dark">{{i - 1}}</b-th>
										<b-td
											:class="CostClass(i - 1, CostTable.components[i - 1])"
										>{{CostTable.components[i - 1]}}</b-td>
										<b-td
											:class="CostClass(i - 1, CostTable.nutritions[i - 1])"
										>{{CostTable.nutritions[i - 1]}}</b-td>
										<b-td :class="CostClass(i - 1, CostTable.power[i - 1])">{{CostTable.power[i - 1]}}</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-col>
						<b-col cols="12" sm="6" class="fulllink-table">
							<b-table-simple bordered fixed table-class="text-left table-unit-modal">
								<b-thead head-variant="dark">
									<b-tr>
										<b-th class="text-center">
											<elem-icon elem="fire" />
											{{unit.resists.fire}} %
										</b-th>
										<b-th class="text-center">
											<elem-icon elem="chill" />
											{{unit.resists.chill}} %
										</b-th>
										<b-th class="text-center">
											<elem-icon elem="thunder" />
											{{unit.resists.thunder}} %
										</b-th>
									</b-tr>
									<b-tr>
										<b-th colspan="3" class="text-center">풀링크 보너스</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr>
										<b-td colspan="3">
											없음
											<b-radio class="float-right" value v-model="linkBonus" />
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">
											출격 비용 -{{LinkBonus.Discount}}%
											<b-radio class="float-right" value="discount" v-model="linkBonus" />
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">
											스킬 위력 +{{LinkBonus.SkillPower}}%
											<b-radio class="float-right" value="skill" v-model="linkBonus" />
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">
											{{LinkBonus.Entry3}}
											<b-radio
												v-if="BonusSelectable(unit.linkBonus.entry3)"
												class="float-right"
												:value="unit.linkBonus.entry3"
												v-model="linkBonus"
											/>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">
											{{LinkBonus.Entry4}}
											<b-radio
												v-if="BonusSelectable(unit.linkBonus.entry4)"
												class="float-right"
												:value="unit.linkBonus.entry4"
												v-model="linkBonus"
											/>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">행동력 +{{LinkBonus.Speed}}</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-col>
					</b-row>
				</b-col>
			</b-row>

			<b-alert v-if="unit.hasLimited[0]" variant="primary" show>
				<div>이 전투원은 다음 전용장비를 갖고 있습니다.</div>
				<a :href="LimitedEquipURL" @click.prevent="GoTo(LimitedEquipURL)">
					<drop-equip class="limited-item-card" :name="unit.hasLimited[1]" :rarity="unit.hasLimited[0]" />
				</a>
			</b-alert>

			<unit-skill-table
				v-if="SkillsRaw"
				:skills="SkillsRaw"
				:skill-level.sync="skillLevel"
				:form-state.sync="formState"
				:rarity="unit.rarity"
				:buff-bonus="linkBonus === 'buff'"
				:skill-bonus="linkBonus === 'skill' ? LinkBonus.SkillPower : 0"
				:range-bonus="linkBonus === 'range'"
			/>
		</template>
		<template v-if="displayTab === 'dialogue'">
			<unit-dialogue
				v-for="(voice, keyid) in VoiceList"
				:key="`unit-view-text-voice-${keyid}`"
				:unit="unit"
				:voice="voice"
				:id="voice.id"
			/>
		</template>
		<unit-stats v-if="displayTab === 'status'" :unit="unit" :serialized="statusSerialized" />
	</div>
</template>

<script lang="tsx">
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import StoreModule from "@/libs/Store";

import { StatusText } from "@/libs/Status";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitFace from "@/components/UnitFace.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import SkillBound from "@/components/SkillBound.vue";
import SkillDescription from "@/components/SkillDescription.vue";
import SourceBadge from "@/components/SourceBadge.vue";
import ElemIcon from "@/components/ElemIcon.vue";
import DropEquip from "@/pages/Worlds/DropEquip.vue";

import UnitSkillTable from "./UnitSkillTable.vue";
import UnitSkinView from "./UnitSkinView.vue";
import UnitDialogue from "./UnitDialogue.vue";
import UnitStats from "./UnitStats.vue";

import { Unit, RawSkin, SkinInfo, RawCostTable, CostTable, RawSkill, Rarity, RawSkillUnit, LinkBonusType } from "@/libs/Types";
import { UnitData, SkillData } from "@/libs/DB";
import { Unit as SimUnit } from "@/pages/Simulation/Simulation/Unit";

import SkinData from "@/json/unit-skin.json";
import CostData from "@/json/unit-cost.json";
import { UpdateTitle } from "@/libs/Functions";

interface SkillItem extends RawSkillUnit {
	index: number;
	isPassive: boolean;
}
interface SkillTable {
	[key: string]: SkillItem;
}
interface VoiceItem extends SkinInfo {
	id: number;
	isDef: boolean;
	isPro: boolean;
	isMarry: boolean;
}

@Component({
	components: {
		NodeRenderer,
		UnitBadge,
		RarityBadge,
		UnitFace,
		ElemIcon,
		SkillBound,
		SkillDescription,
		SourceBadge,
		DropEquip,
		UnitSkillTable,
		UnitSkinView,
		UnitDialogue,
		UnitStats,
	},
})
export default class UnitView extends Vue {
	private rarityList: Rarity[] = ["B", "A", "S", "SS"];
	private costRarity: Rarity = "SS";

	private skinIndex: number = 0;

	private linkCount: number = 5;
	private linkBonusDiscount: boolean = false;
	private formState: "normal" | "change" = "normal";

	private displayTab: "information" | "dialogue" | "status" = "information";

	private unitId: number = 0;
	private skillLevel: number = 0;

	private linkBonus: "" | "discount" | "skill" | "buff" | "range" = "";

	private statusSerialized: string | null = null;

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	private GoBack () {
		this.$router.back();
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private checkParams () {
		const params = this.$route.params;

		if ("stats" in params) {
			try {
				const _ = params.stats;
				const u = new SimUnit();
				const json = window.atob(_);

				u.Deserialize(json);
				localStorage.setItem(`unit-stats-${u.Id}`, json);
				u.$destroy();

				this.$router.replace(`/units/${u.Id}`);
				this.displayTab = "status";
			} catch (e) {
				// TODO : 올바르지 않은 공유 문자열 주소
			}
			return;
		} else if (!("id" in params)) {
			this.$router.replace("/units");
			return;
		}

		const id = params.id;
		if (/^[0-9]+$/.test(id)) {
			this.unitId = parseInt(params.id, 10);
			UpdateTitle(["전투원정보", `${this.unit.name}`]);
		}
	}

	private get unit () {
		return UnitData[this.unitId] || Unit.Empty;
	}

	private get LimitedEquipURL () {
		const unit = this.unit;
		if (!unit.hasLimited[0]) return "";
		return `/equips/${unit.hasLimited[0]}/${unit.hasLimited[1]}`;
	}

	private get LinkCountList () {
		return [0, 1, 2, 3, 4, 5];
	}

	private get LinkBonus () {
		interface LinkBonusValueTable {
			acc: [number, boolean];
			crit: [number, boolean];
			def: [number, boolean];
			eva: [number, boolean];
			hp: [number, boolean];
			skill: [number, boolean];
			spd: [number, boolean];
		}

		const hasEva = this.unit.linkBonus.entry3 === "eva" || this.unit.linkBonus.entry4 === "eva";
		const isDef = this.unit.role === "defender";

		const LinkBonusTable = {
			acc: "적중",
			crit: "치명타",
			def: "방어력",
			eva: "회피",
			hp: "HP",
			skill: "스킬 위력",
			spd: "행동력",
		};
		const LinkBonusValue: LinkBonusValueTable = {
			acc: [35, true],
			crit: [10, true],
			def: [15, true],
			eva: [10, true],
			hp: [0, true],
			skill: [10, true],
			spd: [0.1, false],
		};
		const FullLinkBonusTable = {
			"": "없음",
			discount: "출격 자원 감소",
			skill: "스킬 위력 +x%",
			acc: "적중 +75%",
			buff: "버프/디버프 효과 Lv+2",
			crit: "치명타 +20%",
			def: "방어력 +20%",
			eva: "회피 +" + (isDef ? 20 : 15) + "%",
			hp: "HP +20%",
			range: "사거리 +1",
			spd: "행동력 +x",
		};

		return {
			IsHP: this.unit.linkBonus.per === "hp",
			Per: LinkBonusTable[this.unit.linkBonus.per],
			Value: {
				HP: (this.unit.linkBonus.per === "hp" ? 125 : 100) * this.linkCount / 5,
				Atk: 100 * this.linkCount / 5,
				Per: [
					parseFloat((LinkBonusValue[this.unit.linkBonus.per][0] * this.linkCount / 5).toFixed(4)),
					LinkBonusValue[this.unit.linkBonus.per][1],
				],
				EXP: 20 * this.linkCount / 5,
			},

			Discount: this.unit.rarity === "SS" ? 25 : 20,
			SkillPower: this.unit.linkBonus.skillPower,
			Entry3: FullLinkBonusTable[this.unit.linkBonus.entry3],
			Entry4: FullLinkBonusTable[this.unit.linkBonus.entry4],
			Speed: this.unit.type === "air" && this.unit.role === "defender"
				? (this.unit.rarity === "SS" && hasEva ? 0.2 : 0.15)
				: 0.1,
		};
	}

	private get HasFormChange () {
		const raw = this.SkillsRaw;
		if (!raw) return false;

		return Object.keys(raw).some(x => x.startsWith("F"));
	}

	private get CostRarityList () {
		const list = [{
			value: this.unit.rarity,
			text: `${this.unit.rarity} 등급`,
		}];

		if (this.unit.promotions) {
			list.push(...this.unit.promotions.map(x => (
				{
					value: x,
					text: `${x} 승급`,
				}),
			));
		}

		return list;
	}

	private get rarityIndex () {
		return this.rarityList.indexOf(this.unit.rarity);
	}

	private get Skin () {
		interface SkinTable {
			[key: string]: RawSkin;
		}

		if (this.unit.id in SkinData)
			return (SkinData as unknown as SkinTable)[this.unit.id];
		return null;
	}

	private get SkinList () {
		interface SkinItem extends SkinInfo {
			isDef: boolean;
			isPro: boolean;
		}

		const list: SkinItem[] = [];

		const skin = this.Skin;
		if (!skin) return list;

		// 캐릭터 기본 스킨
		list.push({
			...skin,
			t: this.unit.name,
			isDef: true,
			isPro: false,
			name: "",
			desc: "",
		});

		if (skin.skins) {
			list.push(...skin.skins.map((x, y) => {
				return {
					...x,
					isDef: false,
					isPro: false,
				};
			}));
		}

		if (skin.P) {
			list.push({
				...skin.P,
				isDef: false,
				isPro: true,
			});
		}

		this.Reset();
		return list;
	}

	private get VoiceList (): VoiceItem[] {
		return [
			{
				id: 0,
				...this.SkinList[0],
				isMarry: false,
			},
			{
				id: 0,
				...this.SkinList[0],
				isMarry: true,
			},
			...this.SkinList
				.slice(1)
				.map((x, i) => ({
					id: i + 1,
					...x,
					isMarry: false,
				})),
		];
	}

	private get CostTable (): CostTable {
		type CostCell = [number, number, number, number, number, number];
		const key = `${this.costRarity}_${this.unit.type}_${this.unit.role}`;
		let table = (CostData as unknown as RawCostTable)[key][this.unit.body];

		if (this.linkBonus === "discount") {
			const isSS = this.costRarity === "SS";
			const _ = (x: number) => Math.ceil(x * (isSS ? 0.75 : 0.8));

			table = JSON.parse(JSON.stringify(table));
			table.components[5] = _(table.components[5]);
			table.nutritions[5] = _(table.nutritions[5]);
			table.power[5] = _(table.power[5]);
		}
		return table;
	}

	/**
	 * 형태 전환 전/후를 모두 포함한 스킬 목록
	 */
	private get SkillsRaw () {
		const table = SkillData[this.unit.id] as SkillTable;
		if (table) {
			Object.keys(table)
				.forEach(x => {
					const y = /(passive|active)([0-9]+)/.exec(table[x].key);
					if (!y) return;

					table[x].index = parseInt(y[2], 10);
					table[x].isPassive = y[1].includes("passive");
				});
		}
		return table;
	}

	/**
	 * 현재 선택 형태에 맞춘 스킬 목록
	 */
	private get Skills () {
		const output: SkillTable = {};
		const raw = this.SkillsRaw;
		if (!raw) return [];

		const keys = Object.keys(raw);
		return keys
			.filter(x => !x.startsWith("F"))
			.map(x => {
				const keyf = `F${x}`;
				if (this.formState === "change" && keys.includes(keyf))
					return raw[keyf];
				else
					return raw[x];
			});
	}

	private get SkillLevelList () {
		const ret = [];
		for (let i = 0; i < 13; i++)
			ret.push({ value: i, text: `Lv. ${i + 1}` });

		return ret;
	}

	private CostClass (level: number, value: number) {
		if (value === 0) return "text-secondary";
		if (this.linkBonus === "discount" && level === 5)
			return "text-primary";
		else
			return "";
	}

	private BonusSelectable (bonus: string) {
		return ["buff", "range"].includes(bonus);
	}

	private Reset () {
		this.skinIndex = 0;
		this.skillLevel = 9;
		this.formState = "normal";
		this.costRarity = this.unit.rarity;
	}

	private mounted () {
		this.checkParams();
	}
}
</script>

<style lang="scss">
@function ratio($x, $y) {
	@return ($y / $x * 100) * 1%;
}

.unit-view {
	.tab-box {
		padding: 10px;
		border: 1px solid #dee2e6;
	}

	// .fulllink-table {
	//	padding-top: 0.55em;
	// }

	.table-unit-modal.container {
		.col {
			margin-bottom: -1px;
			padding: 0.75rem;
			border: 1px solid #dee2e6;
			&.bg-dark {
				border-color: #454d55;
				font-weight: bold;
			}
		}
	}
	.table-unit-modal.table-bordered {
		td,
		th {
			vertical-align: middle;
			word-break: keep-all;
		}
		th.table-dark {
			border-color: #454d55;
		}

		.rarity-badge {
			border: 1px solid rgba(0, 0, 0, 0.33);
			box-shadow: 0 0 1px #000;
		}
	}

	.table-unit-link-select {
		margin-left: 5px;
		width: 64px;
		vertical-align: baseline;
	}
	.table-unit-level-select,
	.table-unit-rarity-select {
		margin-left: 5px;
		width: 96px;
		vertical-align: baseline;
	}

	.skill-icon {
		height: 64px;
	}
	.unit-modal-skill {
		padding: 3px 0;
		border-bottom: 1px solid #dee2e6;

		&:last-child {
			border-bottom: 0;
		}
	}

	.limited-item-card {
		display: inline-block;
		width: 100%;
		max-width: 20rem;
	}
}

.break-keep {
	word-break: keep-all;
}
</style>
