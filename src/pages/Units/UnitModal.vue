<template>
	<b-modal
		v-model="displaySync"
		centered
		hide-footer
		size="lg"
		modal-class="unit-modal"
		:header-class="`rarity-${unit.rarity}`"
	>
		<template #modal-title>
			<unit-face :id="unit.id" :size="30" type="mini" />
			{{unit.name}}
		</template>

		<!-- 스킨, 번호, 소속, 등급, 승급, 유형, 역할 -->
		<b-table-simple bordered fixed table-class="text-center table-unit-modal">
			<b-tbody>
				<b-tr>
					<b-td colspan="4">
						<b-tabs v-model="skinIndex" nav-class="unit-skin-tabs">
							<b-tab
								v-for="(skin, index) in SkinList"
								:key="`unit-${unit.id}-skin-${index}`"
								:title-link-class="index === skinIndex ? 'bg-dark text-white' : 'text-dark'"
								:active="index === 0"
							>
								<template #title>
									<template v-if="skin.isPro">
										<rarity-badge rarity="SS">SS 승급</rarity-badge>
										{{skin.t}}
									</template>
									<template v-else>{{skin.t}}</template>
								</template>
							</b-tab>
						</b-tabs>

						<div
							v-if="SkinList[skinIndex]"
							class="unit-full"
							:class="{ 'unit-full-collapse': !skinDisplay }"
						>
							<div class="unit-skin-toggle" @click="skinDisplay = !skinDisplay" />
							<div
								v-if="SkinList[skinIndex].A"
								class="unit-skin-animated"
								title="이 스킨은 '로비 애니메이션'이 존재합니다."
								v-b-tooltip.hover.bottomright.v-primary
							/>

							<div class="unit-full-bg" />
							<div class="unit-full-group">
								<div>
									<img :src="`${AssetsRoot}/${imageExt}/group/${unit.groupkey}.${imageExt}`" />
								</div>
							</div>
							<div class="unit-full-unit">
								<img :src="SkinImageURL" />
							</div>

							<div
								v-if="!(SkinList[skinIndex].isPro || SkinList[skinIndex].isDef) &&  SkinList[skinIndex].price"
								class="skin-price"
							>
								<img :src="`${AssetsRoot}/tuna.png`" />
								{{SkinList[skinIndex].price}}
							</div>

							<div
								v-if="(!SkinList[skinIndex].X && SkinList[skinIndex].D && !IsSimplified) || SkinList[skinIndex].X"
								class="skin-toggle skin-toggle-damaged"
								:data-damaged="IsDamaged ? 1 : 0"
								@click="IsDamaged = !IsDamaged"
							/>
							<div
								v-if="(!SkinList[skinIndex].X && SkinList[skinIndex].S && !IsDamaged) || SkinList[skinIndex].X"
								class="skin-toggle skin-toggle-simplified"
								:data-simplified="IsSimplified ? 1 : 0"
								@click="IsSimplified = !IsSimplified"
							/>
							<div
								v-if="SkinList[skinIndex].G"
								class="skin-toggle skin-toggle-platform"
								:data-platform="IsGoogle ? 1 : 0"
								@click="IsGoogle = !IsGoogle"
							/>
						</div>
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>

		<b-container class="table-unit-modal mb-4">
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
							:key="`unit-${unit.id}-promotion-${pro}`"
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

		<b-table-simple bordered fixed table-class="text-center table-unit-modal">
			<b-thead head-variant="dark">
				<b-tr>
					<b-th colspan="4">
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
					<b-td>
						공격력
						<span class="d-inline-block">
							+
							<b class="text-danger">{{LinkBonus.Value.Atk}}</b>%
						</span>
					</b-td>
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

		<b-row>
			<b-col cols="12" sm="6">
				<b-table-simple bordered fixed table-class="text-center table-unit-modal">
					<b-thead head-variant="dark">
						<b-tr>
							<b-th colspan="4">
								소모 자원
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
							<b-td :class="CostDiscountClass(i - 1)">{{CostTable.components[i - 1]}}</b-td>
							<b-td :class="CostDiscountClass(i - 1)">{{CostTable.nutritions[i - 1]}}</b-td>
							<b-td :class="CostDiscountClass(i - 1)">{{CostTable.power[i - 1]}}</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</b-col>
			<b-col cols="12" sm="6" class="fulllink-table">
				<b-table-simple bordered fixed table-class="text-left table-unit-modal mt-sm-5">
					<b-thead head-variant="dark">
						<b-tr>
							<b-th class="text-center">풀링크 보너스</b-th>
						</b-tr>
					</b-thead>
					<b-tbody>
						<b-tr>
							<b-td>
								출격 비용 -{{LinkBonus.Discount}}%
								<b-checkbox class="float-right" v-model="linkBonusDiscount" />
							</b-td>
						</b-tr>
						<b-tr>
							<b-td>스킬 위력 +{{LinkBonus.SkillPower}}%</b-td>
						</b-tr>
						<b-tr>
							<b-td>{{LinkBonus.Entry3}}</b-td>
						</b-tr>
						<b-tr>
							<b-td>{{LinkBonus.Entry4}}</b-td>
						</b-tr>
						<b-tr>
							<b-td>행동력 +{{LinkBonus.Speed}}</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</b-col>
		</b-row>

		<unit-skill-table
			:skills="SkillsRaw"
			:skill-level.sync="skillLevel"
			:form-state.sync="formState"
			:rarity="unit.rarity"
		/>
	</b-modal>
</template>

<script lang="tsx">
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { StatusText } from "@/Status";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitFace from "@/components/UnitFace.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import SkillBound from "@/components/SkillBound.vue";
import SkillDescription from "@/components/SkillDescription.vue";
import ElemIcon from "@/components/ElemIcon.vue";

import UnitSkillTable from "./UnitSkillTable.vue";

import { Unit, RawSkin, SkinInfo, RawCostTable, CostTable, RawSkill, Rarity, RawSkillUnit, LinkBonusType } from "@/Types";

import { UnitData, SkillData } from "@/DB";
import { AssetsRoot, ImageExtension } from "@/Const";

import SkinData from "@/json/unit-skin.json";
import CostData from "@/json/unit-cost.json";

type LRarity = "ss" | "s" | "a" | "b";

interface SkillItem extends RawSkillUnit {
	index: number;
	isPassive: boolean;
}
interface SkillTable {
	[key: string]: SkillItem;
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
		UnitSkillTable,
	},
})
export default class UnitModal extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	private rarityList: Rarity[] = ["B", "A", "S", "SS"];
	private costRarity: Rarity = "SS";

	private skinIndex: number = 0;
	private skinDisplay: boolean = this.imageExt === "webp";

	private IsDamaged: boolean = false;
	private IsSimplified: boolean = false;
	private IsGoogle: boolean = false;

	private linkCount: number = 5;
	private linkBonusDiscount: boolean = false;
	private formState: "normal" | "change" = "normal";

	private skillLevel: number = 0;

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
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
			acc: "적중 +75%",
			buff: "버프/디버프 효과 Lv+2",
			crit: "치명타 +20%",
			def: "방어력 +20%",
			eva: "회피 +15%",
			hp: "HP +20%",
			range: "사거리 +1",
		};
		const hasEva = this.unit.linkBonus.entry3 === "eva" || this.unit.linkBonus.entry4 === "eva";

		return {
			IsHP: this.unit.linkBonus.per === "hp",
			Per: LinkBonusTable[this.unit.linkBonus.per],
			Value: {
				HP: (this.unit.linkBonus.per === "hp" ? 125 : 100) * this.linkCount / 5,
				Atk: 100 * this.linkCount / 5,
				Per: [
					LinkBonusValue[this.unit.linkBonus.per][0] * this.linkCount / 5,
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

	private get DisplayId () {
		return ("00" + this.unit.id).substr(-3);
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

		list.push({
			t: this.unit.name,
			D: skin.D,
			S: skin.S,
			X: skin.X,
			A: skin.A,
			G: skin.G,
			isDef: true,
			isPro: false,
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

	private get SkinImageURL () {
		const skin = this.SkinList[this.skinIndex];
		let list: string[] = [];

		if (skin.isDef) {
			list = [
				AssetsRoot,
				"/",
				this.imageExt,
				"/full/",
				this.DisplayId,
				this.IsDamaged ? "D" : "",
				this.IsSimplified ? "_S" : "",
				".",
				this.imageExt,
			];
		} else if (skin.isPro) {
			list = [
				AssetsRoot,
				"/",
				this.imageExt,
				"/full/",
				this.DisplayId,
				this.IsDamaged ? "D" : "",
				"_P",
				this.IsSimplified ? "S" : "",
				".",
				this.imageExt,
			];
		} else if (this.skinIndex) {
			list = [
				AssetsRoot,
				"/",
				this.imageExt,
				"/full/",
				this.DisplayId,
				this.IsDamaged ? "D" : "",
				"_",
				this.skinIndex.toString(),
				this.IsSimplified ? "S" : "",
				".",
				this.imageExt,
			];
		}

		const ret = list.join("");
		if (skin.G && this.IsGoogle)
			return ret.replace(/full/g, "full-g");
		else
			return ret;
	}

	private get CostTable (): CostTable {
		type CostCell = [number, number, number, number, number, number];
		const key = `${this.costRarity}_${this.unit.type}_${this.unit.role}`;
		let table = (CostData as unknown as RawCostTable)[key][this.unit.body];

		if (this.linkBonusDiscount) {
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

	private CostDiscountClass (level: number) {
		if (this.linkBonusDiscount && level === 5)
			return "text-primary";
		else
			return "";
	}

	private Reset () {
		this.skinIndex = 0;
		this.IsDamaged = false;
		this.IsSimplified = false;
		this.skillLevel = 9;
		this.formState = "normal";
		this.costRarity = this.unit.rarity;
	}

	@Watch("skinIndex")
	private SkinIndexWatch () {
		this.IsDamaged = false;
		this.IsSimplified = false;
	}
}
</script>

<style lang="scss">
@function ratio($x, $y) {
	@return ($y / $x * 100) * 1%;
}

.unit-modal {
	.unit-skin-tabs {
		border-bottom: 0;
	}

	.unit-full {
		position: relative;
		padding: 0;
		overflow: hidden;

		&.unit-full-collapse {
			> .unit-full-bg {
				padding-top: 52px !important;
			}

			> .skin-toggle,
			> .unit-full-group,
			> .unit-full-unit {
				display: none;
			}
			> .unit-full-bg {
				&::before {
					height: 10rem;
					transform: translateY(-50%) rotate(180deg);
				}
				&::after {
					display: none;
				}
			}
		}

		.unit-skin-toggle {
			position: absolute;
			top: 10px;
			left: 10px;
			width: 32px;
			height: 32px;
			background-image: url($assetsRoot+"/display-icon.png");
			background-repeat: no-repeat;
			background-size: 32px 32px;
			cursor: pointer;
			z-index: 10;
		}

		.unit-skin-animated {
			position: absolute;
			top: 10px;
			left: 60px;
			width: 32px;
			height: 32px;
			background-image: url($assetsRoot+"/icon-animated.png");
			background-repeat: no-repeat;
			background-size: 32px 32px;
			z-index: 10;
		}

		> .unit-full-bg {
			padding-top: ratio(4, 3);
			background-image: url($assetsRoot+"/bg/unit-bg.png");
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;

			&::before,
			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				transform-origin: 50% 50%;
				background-image: url($assetsRoot+"/bg/unit-bg-net.png");
				background-position: center bottom;
				background-repeat: no-repeat;
				background-size: 100%;
			}
			&::before {
				transform: translateY(-20%) rotate(180deg) scale(1.1);
			}
			&::after {
				transform: translateY(20%) scale(1.1);
			}
		}

		> .unit-full-group {
			position: absolute;
			display: flex;
			padding: 4%;
			left: 0;
			top: 0;
			max-height: 40%;
			text-align: left;
			overflow: hidden;

			> div {
				flex: 1;
				> img {
					height: 100%;
					opacity: 0.22;
				}
			}
		}

		> .unit-full-unit {
			$margin: 4%;
			position: absolute;
			display: flex;
			margin: $margin;
			left: 0;
			top: 0;
			width: (100% - $margin * 2);
			height: (100% - $margin * 2);

			align-items: center;
			justify-content: center;

			> img {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				max-width: 100%;
				max-height: 100%;
			}
		}

		> .skin-price {
			position: absolute;
			bottom: 10px;
			right: 15px;
			color: #fff;

			> img {
				height: 20px;
			}
		}

		> .skin-toggle {
			cursor: pointer;

			&.skin-toggle-damaged {
				position: absolute;
				top: 10px;
				right: 10px;
				width: 64px;
				height: 62px;
				background-image: url($assetsRoot+"/damaged-icon.png");
				background-repeat: no-repeat;
				background-size: 128px 62px;

				&[data-damaged="1"] {
					background-position-x: -64px;
				}
			}
			&.skin-toggle-simplified {
				position: absolute;
				top: 80px;
				right: 28px;
				width: 28px;
				height: 28px;
				background-image: url($assetsRoot+"/simplify-icon.png");
				background-repeat: no-repeat;
				background-position-x: -28px;
				background-size: 56px 28px;

				&[data-simplified="1"] {
					background-position-x: 0;
				}
			}
			&.skin-toggle-platform {
				position: absolute;
				top: 150px;
				right: 28px;
				width: 28px;
				height: 28px;
				background-image: url($assetsRoot+"/icon-platform.png");
				background-repeat: no-repeat;
				background-position-x: -28px;
				background-size: 56px 28px;

				&[data-platform="1"] {
					background-position-x: 0;
				}
			}
		}
	}

	.fulllink-table {
		padding-top: 0.55em;
	}

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

	.table-unit-link-select,
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
}

.break-keep {
	word-break: keep-all;
}
</style>
