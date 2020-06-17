<template>
	<b-card no-body class="unit-stat-view">
		<b-card-header>
			{{unit.Unit.name}}
			<rarity-badge :rarity="unit.Rarity" border />
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
					<span class="value-diff" :data-diff="DetailPointsDiff[key]">
						({{DetailPointsDiff[key] > 0 ? "▲" : "▼"}}
						{{NumValue(DetailPointsDiff[key], false)}})
					</span>
					{{NumValue(DetailPointsPostfix[key], false)}}
				</b-col>
			</b-row>

			<hr />

			<div class="unit-stat-linkbonus">
				<b-row>
					<b-col cols="5" class="pr-0">HP</b-col>
					<b-col cols="7">
						+{{LinkBonus.Value.HP}}%
						<span class="text-info">({{NumValue(DetailLinkPoints.hp)}})</span>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="5" class="pr-0">공격력</b-col>
					<b-col cols="7">
						+{{LinkBonus.Value.Atk}}%
						<span class="text-info">({{NumValue(DetailLinkPoints.atk)}})</span>
					</b-col>
				</b-row>
				<b-row v-if="!LinkBonus.IsHP">
					<b-col cols="5" class="pr-0">{{LinkBonus.Per}}</b-col>
					<b-col cols="7">
						+{{LinkBonus.Value.Per[0] + LinkBonus.Value.Per[1]}}
						<span
							class="text-info"
						>({{NumValue(LinkBonus.Value.Per[0], false)}})</span>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="5" class="pr-0">획득 경험치</b-col>
					<b-col cols="7">
						+{{LinkBonus.Value.EXP}}%
						<span class="text-info">({{NumValue(LinkBonus.Value.EXP)}})</span>
					</b-col>
				</b-row>
			</div>
		</b-card-body>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { UnitStatsPoint, Unit, UnitStats } from "@/libs/Types";
import { UnitSimulationInfo, StatDispList, DetailPointsPostfix, StatTable } from "./Simulation";

import { UnitStatsData } from "@/libs/DB";
import { FormatNumber } from "@/libs/Functions";
import { StatValue } from "@/libs/UnitStat";

import RarityBadge from "@/components/RarityBadge.vue";
import StatIcon from "./StatIcon.vue";

@Component({
	components: {
		StatIcon,
		RarityBadge,
	},
})
export default class UnitStatView extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: UnitSimulationInfo;

	private get StatDispList () {
		return StatDispList;
	}

	private get DetailPointsPostfix () {
		return DetailPointsPostfix;
	}

	private get StatTable () {
		return StatTable;
	}

	private get DetailBasePoints (): UnitStatsPoint {
		const detail = this.unit;
		const base = UnitStatsData[detail.id][detail.Rarity];
		if (!base) return UnitStats.EmptyPoint;

		return {
			atk: this.UnitStatValue("atk", "base"),
			def: this.UnitStatValue("def", "base"),
			hp: this.UnitStatValue("hp", "base"),
			acc: this.UnitStatValue("acc", "base"),
			eva: this.UnitStatValue("eva", "base"),
			crit: this.UnitStatValue("crit", "base"),
			spd: base.spd,
		};
	}

	private get DetailPoints (): UnitStatsPoint {
		const detail = this.unit;
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

	private get DetailLinkPoints () {
		return {
			hp: this.UnitStatValue("hp", "link") - this.DetailBasePoints.hp,
			atk: this.UnitStatValue("atk", "link") - this.DetailBasePoints.atk,
		};
	}

	private UnitStatValue (stat: keyof UnitStats, type: "all" | "base" | "link" = "all") {
		const detail = this.unit;
		const table = UnitStatsData[detail.id][detail.Rarity];
		if (!table) return 0;

		const baseValue = table[stat];
		const linkBonus = this.LinkBonus;
		if (!linkBonus) return 0;

		const isBase = type === "base";
		const isLink = type === "link" || type === "all";

		if (Array.isArray(baseValue)) {
			const value = detail.Stats[stat as keyof UnitStatsPoint] || 0;

			return StatValue(
				stat as keyof UnitStatsPoint,
				{
					from: baseValue[0],
					to: baseValue[1],
					level: detail.Level,
					linkBonus: ["hp", "atk", "exp"],
				},
				isBase ? 0 : value, // Stat point
				isBase ? 0 : (stat === "atk" ? 0 : 0), // Equip value
				!isLink ? 0 : this.LinkCount, // Link count
				isBase ? 0 : 0, // Bonus factor
				!isLink || stat !== detail.Unit.linkBonus.per ? 0 : linkBonus.Value.Per[0] as number, // Bonus value
			);
		} else {
			const value = detail.Stats[stat as keyof UnitStatsPoint] || 0;

			return StatValue(
				stat as keyof UnitStatsPoint,
				{
					from: baseValue,
					to: baseValue,
					level: detail.Level,
					linkBonus: ["hp", "atk", "exp"],
				},
				isBase ? 0 : value, // Stat point
				0, // Equip value
				!isLink ? 0 : this.LinkCount, // Link count
				isBase ? 0 : 0, // Bonus factor
				!isLink || stat !== detail.Unit.linkBonus.per ? 0 : linkBonus.Value.Per[0] as number, // Bonus value
			);
		}
	}

	private get LinkCount () {
		return this.unit.Linked.filter(x => x).length;
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

		const detail = this.unit;
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
					LinkBonusValue[unit.linkBonus.per][1] ? "%" : "",
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

	private NumValue (value: number, floor: boolean = true) {
		return FormatNumber(
			floor
				? Math.floor(value)
				: value,
		);
	}
}
</script>

<style lang="scss" scoped>
.unit-stat-view {
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

	.unit-stat-linkbonus {
		font-weight: bold;
	}
}
</style>
