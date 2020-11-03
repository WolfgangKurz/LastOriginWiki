<template>
	<div class="unit-view">
		<b-row>
			<b-col cols="12" md="auto" class="text-left">
				<b-button variant="dark" @click="GoBack()">뒤로</b-button>
			</b-col>
			<b-col>
				<b-tabs nav-class="unit-display-tabs mb-3" align="right">
					<b-tab title-link-class="text-dark" :active="displayTab === 'information'" @click="displayTab = 'information'">
						<template #title> <b-icon-person-lines-fill class="mr-1" />전투원정보 </template>
					</b-tab>
					<b-tab title-link-class="text-dark" :active="displayTab === 'dialogue'" @click="displayTab = 'dialogue'">
						<template #title> <b-icon-chat-left-quote class="mr-1" />대사 </template>
					</b-tab>
					<b-tab title-link-class="text-dark" :active="displayTab === 'status'" @click="displayTab = 'status'">
						<template #title> <b-icon-calculator class="mr-1" />스테이터스 </template>
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
							{{ skin.t }}
						</template>
						<template v-else>{{ skin.t }}</template>
					</template>
				</b-tab>
			</b-tabs>
			<b-row>
				<b-col cols="12" md="3">
					<unit-skin-view v-if="SkinList[skinIndex]" :unit="unit" :skin="SkinList[skinIndex]" :index="skinIndex" collapsed detailable />
				</b-col>

				<b-col cols="12" md="9">
					<b-container class="table-unit-modal mt-4 mb-3">
						<b-row cols="2" cols-md="4" class="text-center">
							<b-col class="bg-dark text-white">도감 번호</b-col>
							<b-col>
								<small>No.&nbsp;</small>
								<strong>{{ unit.id }}</strong>
							</b-col>
							<b-col class="bg-dark text-white">소속</b-col>
							<b-col>
								<span class="break-keep">{{ unit.group }}</span>
							</b-col>
							<b-col class="bg-dark text-white">등급</b-col>
							<b-col>
								<rarity-badge :rarity="unit.rarity" size="medium">{{ RarityName[unit.rarity] }} 등급</rarity-badge>
							</b-col>
							<b-col class="bg-dark text-white">승급</b-col>
							<b-col>
								<template v-if="unit.promotions">
									<rarity-badge v-for="pro in unit.promotions" :key="`unit-promotion-${pro}`" :rarity="pro" size="medium"
										>{{ RarityName[pro] }} 승급</rarity-badge
									>
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
											<b-form-select class="table-unit-link-select" size="sm" v-model="linkCount" :options="LinkCountList" />
										</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr>
										<b-td>
											HP
											<span class="d-inline-block">
												+
												<b class="text-danger">{{ LinkBonus.Value.HP }}</b
												>%
											</span>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td>
											공격력
											<span class="d-inline-block">
												+
												<b class="text-danger">{{ LinkBonus.Value.Atk }}</b
												>%
											</span>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td>
											<template v-if="!LinkBonus.IsHP">
												{{ LinkBonus.Per }}
												<span class="d-inline-block">
													+
													<b class="text-danger">{{ LinkBonus.Value.Per[0] }}</b>
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
												<b class="text-danger">{{ LinkBonus.Value.EXP }}</b
												>%
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
										<b-th v-b-toggle.unit-drop-header>
											획득처
											<b-icon-arrows-expand class="ml-2" />
										</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr>
										<b-td class="p-0">
											<b-collapse id="unit-drop-header" class="p-3">
												<template v-if="unit.source.length === 0">
													<b-badge v-if="unit.craftable" variant="dark">
														<b-icon-hammer class="mr-1" />
														제조 {{ CraftTime }}
													</b-badge>
													<span v-else class="text-secondary">획득처 정보 없음 (제조 불가)</span>
												</template>
												<template v-else>
													<b-badge v-if="unit.craftable" variant="dark">
														<b-icon-hammer class="mr-1" />
														제조 {{ CraftTime }}
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
											</b-collapse>
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
										<b-th variant="dark">{{ i - 1 }}</b-th>
										<b-td :class="CostClass(i - 1, CostTable.metal[i - 1])">{{ CostTable.metal[i - 1] }}</b-td>
										<b-td :class="CostClass(i - 1, CostTable.nutrient[i - 1])">{{ CostTable.nutrient[i - 1] }}</b-td>
										<b-td :class="CostClass(i - 1, CostTable.power[i - 1])">{{ CostTable.power[i - 1] }}</b-td>
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
											{{ CurrentResists.fire }} %
										</b-th>
										<b-th class="text-center">
											<elem-icon elem="ice" />
											{{ CurrentResists.ice }} %
										</b-th>
										<b-th class="text-center">
											<elem-icon elem="lightning" />
											{{ CurrentResists.lightning }} %
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
											출격 비용 -{{ LinkBonus.Discount }}%
											<b-radio class="float-right" value="Discount" v-model="linkBonus" />
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">
											스킬 위력 +{{ LinkBonus.SkillPower }}%
											<b-radio class="float-right" value="Skill" v-model="linkBonus" />
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">
											{{ LinkBonus.Bonus3 }}
											<b-radio
												v-if="BonusSelectable(unit.fullLinkBonus.bonus3)"
												class="float-right"
												:value="unit.fullLinkBonus.bonus3"
												v-model="linkBonus"
											/>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">
											{{ LinkBonus.Bonus4 }}
											<b-radio
												v-if="BonusSelectable(unit.fullLinkBonus.bonus4)"
												class="float-right"
												:value="unit.fullLinkBonus.bonus4"
												v-model="linkBonus"
											/>
										</b-td>
									</b-tr>
									<b-tr>
										<b-td colspan="3">행동력 +{{ LinkBonus.Speed }}</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-col>
					</b-row>
				</b-col>
			</b-row>

			<b-alert v-if="unit.hasLimited" variant="primary" show>
				<div>이 전투원은 다음 전용장비를 갖고 있습니다.</div>
				<a :href="LimitedEquipURL" @click.prevent="GoTo(LimitedEquipURL)">
					<drop-equip class="limited-item-card" :equip="LimitedEquip" />
				</a>
			</b-alert>

			<unit-skill-table
				v-if="SkillsRaw"
				:skills="SkillsRaw"
				:skill-level.sync="skillLevel"
				:form-state.sync="formState"
				:rarity="unit.rarity"
				:buff-bonus="linkBonus === 'Buff'"
				:skill-bonus="linkBonus === 'Skill' ? LinkBonus.SkillPower : 0"
				:range-bonus="linkBonus === 'Range'"
			/>
		</template>
		<template v-if="displayTab === 'dialogue'">
			<unit-dialogue v-for="(voice, keyid) in VoiceList" :key="`unit-view-text-voice-${keyid}`" :unit="unit" :voice="voice" :id="voice.id" />
		</template>
		<unit-stats v-if="displayTab === 'status'" :unit="unit" :serialized="statusSerialized" />
	</div>
</template>

<script lang="tsx">
import _ from "lodash";
import { Decimal } from "decimal.js";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import StoreModule from "@/libs/Store";

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

import { RawSkin, SkinInfo, RawCostTable, RawSkill, Rarity, RawSkillUnit } from "@/libs/Types";
import { SkillData } from "@/libs/DB";

import { ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";
import UnitData, { Unit } from "@/libs/DB/Unit";
import EquipData from "@/libs/DB/Equip";
import UnitStatsData, { UnitStats as UnitStats_ } from "@/libs/DB/UnitStats";
import RequireResource from "@/libs/DB/RequireResource";

import { Unit as SimUnit } from "@/pages/Simulation/Simulation/Unit";

import SkinData from "@/json/unit-skin.json";
import CostData from "@/json/unit-cost.json";
import { GetRequireResource, UpdateTitle } from "@/libs/Functions";

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
	private rarityList: Record<ACTOR_GRADE, Rarity> = {
		[ACTOR_GRADE.B]: "B",
		[ACTOR_GRADE.A]: "A",
		[ACTOR_GRADE.S]: "S",
		[ACTOR_GRADE.SS]: "SS",
	};

	private costRarity: ACTOR_GRADE = ACTOR_GRADE.SS;

	private skinIndex: number = 0;

	private linkCount: number = 5;
	private formState: "normal" | "change" = "normal";

	private displayTab: "information" | "dialogue" | "status" = "information";

	private unitId: number = 0;
	private skillLevel: number = 0;

	private linkBonus: "" | "Discount" | "Skill" | "Buff" | "Range" = "";

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
			const iid = parseInt(params.id, 10);
			const unit = UnitData.find(x => x.id === iid);
			if (!unit)
				this.$router.replace("/units");
			else
				this.$router.replace("/units/" + unit.uid);
		} else {
			const unit = UnitData.find(x => x.uid === id);
			if (!unit) {
				this.$router.replace("/units");
				return;
			}
			this.unitId = unit.id;
			UpdateTitle("전투원정보", `${this.unit.name}`);
		}
	}

	private get unit () {
		return UnitData.find(x => x.id === this.unitId) || Unit.Empty;
	}

	private get RarityName () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private get LimitedEquip () {
		if (this.unit.hasLimited)
			return EquipData.find(x => x.fullKey === this.unit.hasLimited) || null;
		else
			return null;
	}

	private get LimitedEquipURL () {
		const unit = this.unit;
		if (!unit.hasLimited) return "";
		return `/equips/${unit.hasLimited}`;
	}

	private get LinkCountList () {
		return [0, 1, 2, 3, 4, 5];
	}

	private get CurrentResists () {
		const stat = UnitStatsData.find(x => x.id === this.unit.id && x.rarity === this.costRarity);
		return (stat || UnitStats_.Empty).Resist;
	}

	private get LinkBonus () {
		interface LinkBonusValueTable {
			ACC: [number, boolean];
			Cri: [number, boolean];
			DEF: [number, boolean];
			EV: [number, boolean];
			HP: [number, boolean];
			Skill: [number, boolean];
			SPD: [number, boolean];
		}

		const hasEva = this.unit.fullLinkBonus.bonus3 === "EV" || this.unit.fullLinkBonus.bonus4 === "EV";
		const isDef = this.unit.role === ROLE_TYPE.DEFENDER;

		const LinkBonusTable = {
			ACC: "적중",
			Cri: "치명타",
			DEF: "방어력",
			EV: "회피",
			HP: "HP",
			Skill: "스킬 위력",
			SPD: "행동력",
		};
		const LinkBonusValue: LinkBonusValueTable = {
			ACC: [35, true],
			Cri: [10, true],
			DEF: [15, true],
			EV: [10, true],
			HP: [0, true],
			Skill: [10, true],
			SPD: [0.1, false],
		};
		const FullLinkBonusTable = {
			"": "없음",
			Discount: "출격 자원 감소",
			Skill: "스킬 위력 +x%",
			ACC: "적중 +75%",
			Buff: "버프/디버프 효과 Lv+2",
			Cri: "치명타 +20%",
			DEF: "방어력 +20%",
			EV: "회피 +" + (isDef ? 20 : 15) + "%",
			HP: "HP +20%",
			Range: "사거리 +1",
			SPD: "행동력 +x",
		};

		return {
			IsHP: this.unit.linkBonus === "HP",
			Per: LinkBonusTable[this.unit.linkBonus],
			Value: {
				HP: Decimal.mul(this.unit.linkBonus === "HP" ? 125 : 100, this.linkCount)
					.div(5)
					.toNumber(),
				Atk: Decimal.mul(100, this.linkCount)
					.div(5)
					.toNumber(),
				Per: [
					Decimal.mul(LinkBonusValue[this.unit.linkBonus][0], this.linkCount)
						.div(5)
						.toNumber(),
					LinkBonusValue[this.unit.linkBonus][1],
				],
				EXP: Decimal.mul(20, this.linkCount)
					.div(5)
					.toNumber(),
			},

			Discount: this.unit.rarity === ACTOR_GRADE.SS ? 25 : 20,
			SkillPower: this.unit.fullLinkBonus.bonus2,
			Bonus3: FullLinkBonusTable[this.unit.fullLinkBonus.bonus3],
			Bonus4: FullLinkBonusTable[this.unit.fullLinkBonus.bonus4],
			Speed: this.unit.type === ACTOR_CLASS.AIR && this.unit.role === ROLE_TYPE.DEFENDER
				? (this.unit.rarity === ACTOR_GRADE.SS && hasEva ? 0.2 : 0.15)
				: 0.1,
		};
	}

	private get CraftTime () {
		const duration = this.unit.craftable;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return `${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)}`;
	}

	private get HasFormChange () {
		const raw = this.SkillsRaw;
		if (!raw) return false;

		return Object.keys(raw).some(x => x.startsWith("F"));
	}

	private get CostRarityList () {
		const list = [{
			value: this.unit.rarity,
			text: `${this.RarityName[this.unit.rarity]} 등급`,
		}];

		if (this.unit.promotions) {
			list.push(...this.unit.promotions.map(x => (
				{
					value: x,
					text: `${this.RarityName[x]} 승급`,
				}),
			));
		}

		return list;
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
			...(this.unit.marry
				? [{
					id: 0,
					...this.SkinList[0],
					isMarry: true,
				}]
				: []),
			...this.SkinList
				.slice(1)
				.map((x, i) => ({
					id: i + 1,
					...x,
					isMarry: false,
				})),
		];
	}

	private get CostTable () {
		return GetRequireResource(this.costRarity, this.unit.type, this.unit.role, this.unit.body, this.linkBonus === "Discount");
	}

	/**
	 * 형태 전환 전/후를 모두 포함한 스킬 목록
	 */
	private get SkillsRaw () {
		const table = SkillData[this.unit.uid] as (SkillTable | undefined);
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
		if (this.linkBonus === "Discount" && level === 5)
			return "text-primary";
		else
			return "";
	}

	private BonusSelectable (bonus: string) {
		return ["Buff", "Range"].includes(bonus);
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
