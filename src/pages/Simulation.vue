<template>
	<div class="simulation">
		<b-alert variant="warning" show>
			아직 전투 시뮬레이션 기능을 이용할 수 없으며, 패시브 스킬 수치도
			<strong>반영되지 않습니다</strong>.
		</b-alert>

		<b-row class="justify-content-center">
			<b-col cols="12" sm="9" md="6" lg="3" class="mb-3">
				<b-card class="grid-card" no-body bg-variant="info" text-variant="white">
					<b-card-title>아군 편성</b-card-title>
					<b-aspect aspect="1">
						<div class="simulation-grid">
							<unit-formation
								v-for="i in 9"
								:key="`simulation-grid-formation-${i}`"
								:class="`formation-${i}`"
								:id="UnitGrid[i - 1].id"
								:info="UnitGrid[i - 1]"
								@add="SelectUnit(i - 1)"
								@remove.stop="Clear(i - 1)"
								@detail="Detail(i - 1)"
							/>
						</div>
					</b-aspect>
				</b-card>
			</b-col>
			<b-col cols="12" md="6" lg="3" class="mb-3">
				<b-card v-if="DetailUnit" no-body>
					<b-card-header>
						{{DetailUnit.Unit.name}}
						<rarity-badge :rarity="DetailUnit.Rarity" border />
					</b-card-header>

					<b-card-body class="text-left" style="font-size:90%">
						<b-row
							v-for="key in StatDispList"
							:key="`simulation-detail-stat-${key}`"
							class="align-items-center my-2"
						>
							<b-col cols="5">
								<span class="stat-label">
									<stat-icon :stat="key" />
									<strong>{{StatTable[key]}}</strong>
								</span>
							</b-col>
							<b-col cols="7">
								{{DetailPoints[key]}}
								<span
									class="value-diff"
									:data-diff="DetailPointsDiff[key]"
								>({{DetailPointsDiff[key] > 0 ? "▲" : "▼"}}{{DetailPointsDiff[key]}})</span>
								{{DetailPointsPostfix[key]}}
							</b-col>
						</b-row>
					</b-card-body>
				</b-card>
			</b-col>
			<b-col cols="12" md="12" lg="6">
				<b-card v-if="DetailUnit" no-body>
					<b-card-header>
						전투원 강화 / 링크 / 장비
						<span class="d-inline-block">
							<small class="px-4 text-danger">
								남은 강화 포인트
								<strong>{{RestPoint}}</strong>
							</small>
							<b-button variant="secondary" size="sm" @click="ResetStats">초기화</b-button>
						</span>
					</b-card-header>

					<b-card-body class="text-left">
						<b-row class="align-items-center mb-1">
							<b-col md="4" cols="12">
								<span class="stat-label">
									<stat-icon />
									<strong>레벨</strong>
								</span>
								<small class="text-secondary">Lv.</small>
								{{DetailUnit.Level}}
							</b-col>
							<b-col md="6" cols="8">
								<b-form-input type="range" min="1" max="100" v-model="DetailUnit.Level" />
							</b-col>
							<b-col md="2" cols="4">
								<b-select size="sm" :options="RarityList" v-model="DetailUnit.Rarity" />
							</b-col>
						</b-row>

						<b-row
							v-for="key in StatList"
							:key="`simulation-detail-stat-${key}`"
							class="align-items-center my-2"
						>
							<b-col md="4" cols="12">
								<span class="stat-label">
									<stat-icon :stat="key" />
									<strong>{{StatTable[key]}}</strong>
								</span>
								<small class="text-secondary">Lv.</small>
								{{DetailUnit.Stats[key]}}
							</b-col>
							<b-col md="6" cols="8">
								<b-progress
									class="progress-stat"
									:value="DetailUnit.Stats[key]"
									max="300"
									:variant="`stat-${key}`"
								/>
							</b-col>
							<b-col md="2" cols="4">
								<b-btn-group class="stat-button">
									<b-button
										variant="secondary"
										size="sm"
										@mousedown.prevent="StatEvent(key, 0, +1)"
										@touchstart.prevent="StatEvent(key, 0, +1)"
										@mouseup.prevent="StatEvent(key, 2, +1)"
										@mouseleave.prevent="StatEvent(key, 2, +1)"
										@touchend.prevent="StatEvent(key, 2, +1)"
									>+</b-button>
									<b-button
										variant="secondary"
										size="sm"
										@mousedown.prevent="StatEvent(key, 0, -1)"
										@touchstart.prevent="StatEvent(key, 0, -1)"
										@mouseup.prevent="StatEvent(key, 2, -1)"
										@mouseleave.prevent="StatEvent(key, 2, -1)"
										@touchend.prevent="StatEvent(key, 2, -1)"
									>-</b-button>
								</b-btn-group>
							</b-col>
						</b-row>

						<b-row>
							<b-col cols="12" class="text-center mt-2">
								<link-icon :id="DetailUnit.id" :linked.sync="DetailUnit.Linked[0]" />
								<link-icon :id="DetailUnit.id" :linked.sync="DetailUnit.Linked[1]" />
								<link-icon :id="DetailUnit.id" :linked.sync="DetailUnit.Linked[2]" />
								<link-icon :id="DetailUnit.id" :linked.sync="DetailUnit.Linked[3]" />
								<link-icon :id="DetailUnit.id" :linked.sync="DetailUnit.Linked[4]" />
							</b-col>
						</b-row>

						<b-row>
							<b-col cols="12" class="text-center mt-2">
								<item-slot type="Chip" name="chip_atk" :level="10" />
								<item-slot type="Chip" name="chip_atk-crit" :level="10" />
								<item-slot type="OS" />
								<item-slot type="Public" />
							</b-col>
						</b-row>
					</b-card-body>
				</b-card>
			</b-col>
		</b-row>

		<unit-select-modal :display.sync="UnitSelecting" :list="UnitGrid" @select="Select" />
	</div>
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { UnitSimulationInfo } from "./Simulation/Simulation";
import UnitSelectModal from "./Simulation/UnitSelectModal.vue";
import UnitFormation from "./Simulation/UnitFormation.vue";

import RarityBadge from "@/components/RarityBadge.vue";
import StatIcon from "./Simulation/StatIcon.vue";
import LinkIcon from "./Simulation/LinkIcon.vue";
import ItemSlot from "./Simulation/ItemSlot.vue";

import { UnitStatsData } from "@/DB";
import { Unit, UnitStats, UnitStatsPoint } from "@/Types";
import { StatValue } from "@/UnitStat";

@Component({
	components: {
		UnitSelectModal,
		UnitFormation,

		RarityBadge,
		StatIcon,
		LinkIcon,
		ItemSlot,
	},
})
export default class Simulation extends Vue {
	private UnitSelecting: boolean = false;
	private UnitSelectingIndex: number = -1;

	private DetailUnit: UnitSimulationInfo | null = null;

	private UnitGrid: UnitSimulationInfo[] = new Array(9)
		.fill(UnitSimulationInfo.Empty)
		.map((x, i) => {
			return i === 4 ? UnitSimulationInfo.Init(3) : x;
		});

	private readonly StatList = ["atk", "def", "hp", "acc", "eva", "crit"];
	private readonly StatDispList = ["atk", "def", "hp", "acc", "eva", "crit", "spd"];

	private readonly StatTable = {
		atk: "공격력",
		def: "방어력",
		hp: "체력",
		acc: "적중률",
		eva: "회피율",
		crit: "치명타",
		spd: "행동력",
	};

	private readonly DetailPointsPostfix = {
		atk: "",
		def: "",
		hp: "",
		acc: "%",
		eva: "%",
		crit: "%",
		spd: "",
	};

	private get RestPoint () {
		if (!this.DetailUnit) return 0;

		const detail = this.DetailUnit;
		const stats = detail.Stats;

		let max = detail.Level * 3;
		Object.keys(stats).forEach(x => (max -= stats[x as keyof UnitStatsPoint] || 0));
		return max;
	}

	private get RarityList () {
		if (!this.DetailUnit) return [];

		const detail = this.DetailUnit;

		if (detail.Unit.promotions) {
			return [
				{
					value: detail.Unit.rarity,
					text: detail.Unit.rarity,
				},
				...detail.Unit.promotions.map(x => ({ value: x, text: x })),
			];
		} else {
			return [{
				value: detail.Unit.rarity,
				text: detail.Unit.rarity,
			}];
		}
	}

	private get LinkCount () {
		if (!this.DetailUnit) return 0;
		return this.DetailUnit.Linked.filter(x => x).length;
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

		if (!this.DetailUnit) return null;

		const detail = this.DetailUnit;
		const unit = detail.Unit;

		const hasEva = unit.linkBonus.entry3 === "eva" || unit.linkBonus.entry4 === "eva";
		const isAirDef = unit.type === "air" && unit.role === "defender";

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
			eva: "회피 +" + (isAirDef ? 20 : 15) + "%",
			hp: "HP +20%",
			range: "사거리 +1",
		};

		return {
			IsHP: unit.linkBonus.per === "hp",
			Per: LinkBonusTable[unit.linkBonus.per],
			Value: {
				HP: (unit.linkBonus.per === "hp" ? 125 : 100) * this.LinkCount / 5,
				Atk: 100 * this.LinkCount / 5,
				Per: [
					LinkBonusValue[unit.linkBonus.per][0] * this.LinkCount / 5,
					LinkBonusValue[unit.linkBonus.per][1],
				],
				EXP: 20 * this.LinkCount / 5,
			},

			Discount: unit.rarity === "SS" ? 25 : 20,
			SkillPower: unit.linkBonus.skillPower,
			Entry3: FullLinkBonusTable[unit.linkBonus.entry3],
			Entry4: FullLinkBonusTable[unit.linkBonus.entry4],
			Speed: unit.type === "air" && unit.role === "defender"
				? (unit.rarity === "SS" && hasEva ? 0.2 : 0.15)
				: 0.1,
		};
	}

	private SelectUnit (index: number) {
		this.UnitSelecting = true;
		this.UnitSelectingIndex = index;
	}

	private Clear (index: number) {
		this.$set(this.UnitGrid, index, UnitSimulationInfo.Empty);
		this.DetailUnit = null;
	}

	private Detail (index: number) {
		this.DetailUnit = this.UnitGrid[index];
	}

	private Select (id: number) {
		if (this.UnitGrid.some(x => x.id === id)) return;
		this.UnitSelecting = false;

		const index = this.UnitSelectingIndex;
		this.$set(this.UnitGrid, index, UnitSimulationInfo.Init(id));
	}

	private get DetailBasePoints (): UnitStatsPoint {
		const detail = this.DetailUnit;
		if (!detail) return UnitStats.EmptyPoint;

		const base = UnitStatsData[detail.id][detail.Rarity];
		if (!base) return UnitStats.EmptyPoint;

		return {
			atk: this.UnitStatValue("atk", true),
			def: this.UnitStatValue("def", true),
			hp: this.UnitStatValue("hp", true),
			acc: this.UnitStatValue("acc", true),
			eva: this.UnitStatValue("eva", true),
			crit: this.UnitStatValue("crit", true),
			spd: base.spd,
		};
	}

	private get DetailPoints (): UnitStatsPoint {
		const detail = this.DetailUnit;
		if (!detail) return UnitStats.EmptyPoint;

		const base = UnitStatsData[detail.id][detail.Rarity];
		if (!base) return UnitStats.EmptyPoint;

		return {
			atk: this.UnitStatValue("atk"),
			def: this.UnitStatValue("def"),
			hp: this.UnitStatValue("hp"),
			acc: this.UnitStatValue("acc"),
			eva: this.UnitStatValue("eva"),
			crit: this.UnitStatValue("crit"),
			spd: base.spd,
		};
	}

	private get DetailPointsDiff (): UnitStatsPoint {
		return {
			atk: this.DetailPoints.atk - this.DetailBasePoints.atk,
			def: this.DetailPoints.def - this.DetailBasePoints.def,
			hp: this.DetailPoints.hp - this.DetailBasePoints.hp,
			acc: this.DetailPoints.acc - this.DetailBasePoints.acc,
			eva: this.DetailPoints.eva - this.DetailBasePoints.eva,
			crit: this.DetailPoints.crit - this.DetailBasePoints.crit,
			spd: (this.DetailPoints.spd || 0) - (this.DetailBasePoints.spd || 0),
		};
	}

	private UnitStatValue (stat: keyof UnitStats, base: boolean = false) {
		if (!this.DetailUnit) return 0;

		const detail = this.DetailUnit;
		const table = UnitStatsData[detail.id][detail.Rarity];
		if (!table) return 0;

		const baseValue = table[stat];
		const linkBonus = this.LinkBonus;
		if (!linkBonus) return 0;

		if (Array.isArray(baseValue)) {
			const value = detail.Stats[stat as keyof UnitStatsPoint];

			return StatValue(
				stat as keyof UnitStatsPoint,
				{
					from: baseValue[0],
					to: baseValue[1],
					level: detail.Level,
					linkBonus: ["hp", "atk", "exp"],
				},
				(base ? 0 : value) || 0, // Stat point
				base ? 0 : (stat === "atk" ? 100 + 150 : 0), // Equip value
				base ? 0 : this.LinkCount, // Link count
				base ? 0 : 0, // Bonus factor
				(base || stat !== detail.Unit.linkBonus.per ? 0 : linkBonus.Value.Per[0] as number), // Bonus value
			);
		} else {
			const value = detail.Stats[stat as keyof UnitStatsPoint];

			return StatValue(
				stat as keyof UnitStatsPoint,
				{
					from: baseValue,
					to: baseValue,
					level: detail.Level,
					linkBonus: ["hp", "atk", "exp"],
				},
				(base ? 0 : value) || 0, // Stat point
				0, // Equip value
				base ? 0 : this.LinkCount, // Link count
				base ? 0 : 0, // Bonus factor
				base || stat !== detail.Unit.linkBonus.per ? 0 : linkBonus.Value.Per[0] as number, // Bonus value
			);
		}
	}

	private ResetStats () {
		if (!this.DetailUnit) return;

		const detail = this.DetailUnit;
		const stats = detail.Stats;

		Object.keys(stats).forEach(x => (stats[x as keyof UnitStatsPoint] = 0));
	}

	private StatEventWorking = false;
	private StatEventInterval = 300;
	private StatEventTimer = 0;
	private StatEvent (key: keyof UnitStatsPoint, state: 0 | 1 | 2, amount: number) {
		if (!this.DetailUnit) return;
		if (state === 1 && !this.StatEventWorking) return;

		this.StatEventTimer = 0;
		if (state === 0) {
			this.StatEventWorking = true;
			this.StatEvent(key, 1, amount);
		} else if (state === 1) {
			if (this.StatEventTimer > 0) return;

			if (
				(this.RestPoint - amount >= 0) &&
				(this.RestPoint - amount <= this.DetailUnit.Level * 3) &&
				(this.DetailUnit.Stats[key] || 0) + amount >= 0
			)
				this.DetailUnit.Stats[key] += amount;

			this.StatEventTimer = setTimeout(() => {
				this.StatEventTimer = 0;
				this.StatEvent(key, 1, amount);
			}, this.StatEventInterval);

			this.StatEventInterval -= 30;
			if (this.StatEventInterval < 20) this.StatEventInterval = 20;
		} else {
			if (this.StatEventTimer > 0) clearTimeout(this.StatEventTimer);
			this.StatEventTimer = 0;

			this.StatEventInterval = 300;
			this.StatEventWorking = false;
		}
	}
}
</script>

<style lang="scss">
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

#app > .container > .simulation {
	.grid-card {
		.card-title {
			margin: 10px;
			font-weight: bold;
			font-size: 16px;
		}
	}
	.simulation-grid {
		$offset: 10px;
		$size: 78px;
		$gap: 5px;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: $gap;

		padding: $offset;
		width: 100%;
		height: 100%;
		border-radius: 4px;

		background-color: #202020;
		background-image: url($assetsRoot+"/simulation/GridBack.png");
		background-position: center;
		background-size: cover;
	}

	.progress-stat > .progress-bar {
		transition: none;
	}
	span.stat-label {
		display: inline-block;
		width: 80px;
	}
	.stat-button > .btn {
		line-height: 1.2;
	}

	.value-diff {
		font-weight: bold;
		color: $success;

		&[data-diff="0"] {
			display: none;
		}
		&[data-diff^="-"] {
			color: $danger;
		}
	}
}
</style>
