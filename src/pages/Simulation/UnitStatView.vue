<template>
	<b-card no-body class="unit-stat-view">
		<b-card-header>
			{{unit.Unit.name}}
			<rarity-badge :rarity="unit.Rarity" border />
		</b-card-header>

		<b-card-body class="text-left" style="font-size:90%">
			<b-check class="ml-2" size="sm" v-model="includePercentValue">% 수치 계산</b-check>
			<hr />

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
					{{NumValue(FinalPoints[key], false)}}
					<span
						class="value-diff d-inline-block"
						:data-diff="DiffPoints[key]"
					>
						({{DiffPoints[key] > 0 ? "▲" : "▼"}}
						{{NumValue(DiffPoints[key], false)}})
					</span>
					{{DetailPointsPostfix[key]}}
				</b-col>
			</b-row>

			<hr />

			<div class="unit-stat-linkbonus">
				<b-row>
					<b-col cols="5" class="pr-0">HP</b-col>
					<b-col cols="7">
						+{{LinkBonus.Value.HP}}%
						<span class="text-info">({{NumValue(LinkPoints.hp)}})</span>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="5" class="pr-0">공격력</b-col>
					<b-col cols="7">
						+{{LinkBonus.Value.Atk}}%
						<span class="text-info">({{NumValue(LinkPoints.atk)}})</span>
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

import { UnitStatsPoint, Unit, UnitStats, UnitStatsPointAll } from "@/libs/Types";
import { UnitSimulationInfo, StatDispList, DetailPointsPostfix, StatTable } from "./Simulation";

import { UnitStatsData, EquipData } from "@/libs/DB";
import { FormatNumber } from "@/libs/Functions";
import { StatValue } from "@/libs/UnitStat";

import RarityBadge from "@/components/RarityBadge.vue";
import StatIcon from "./StatIcon.vue";

interface UnitEquipPoints {
	atk: number;
	atkP: number;
	def: number;
	defP: number;
	hp: number;
	hpP: number;
	acc: number;
	accP: number;
	eva: number;
	evaP: number;
	crit: number;
	critP: number;
	spd: number;
	spdP: number;
}

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

	private includePercentValue: boolean = true;

	private get StatDispList () {
		return StatDispList;
	}

	private get DetailPointsPostfix () {
		return DetailPointsPostfix;
	}

	private get StatTable () {
		return StatTable;
	}

	private get BasePoints (): UnitStatsPointAll {
		const detail = this.unit;
		const base = UnitStatsData[detail.id][detail.Rarity];
		if (!base) {
			return {
				...UnitStats.EmptyPoint,
				spd: 0,
			};
		}

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

	private get FinalPoints (): UnitStatsPointAll {
		const detail = this.unit;
		const base = UnitStatsData[detail.id][detail.Rarity];
		if (!base) {
			return {
				...UnitStats.EmptyPoint,
				spd: 0,
			};
		}

		return {
			atk: this.UnitStatValue("atk"),
			def: this.UnitStatValue("def"),
			hp: this.UnitStatValue("hp"),
			acc: this.UnitStatValue("acc"),
			eva: this.UnitStatValue("eva"),
			crit: this.UnitStatValue("crit"),
			spd: this.UnitStatValue("spd"),
		};
	}

	private get DiffPoints (): UnitStatsPointAll {
		return {
			atk: this.FinalPoints.atk - this.BasePoints.atk,
			def: this.FinalPoints.def - this.BasePoints.def,
			hp: this.FinalPoints.hp - this.BasePoints.hp,
			acc: this.FinalPoints.acc - this.BasePoints.acc,
			eva: this.FinalPoints.eva - this.BasePoints.eva,
			crit: this.FinalPoints.crit - this.BasePoints.crit,
			spd: this.FinalPoints.spd - this.BasePoints.spd,
		};
	}

	private get EquipValues (): UnitEquipPoints {
		const detail = this.unit;
		const base = UnitStatsData[detail.id][detail.Rarity];
		if (!base)
			return { atk: 0, atkP: 0, def: 0, defP: 0, hp: 0, hpP: 0, acc: 0, accP: 0, eva: 0, evaP: 0, crit: 0, critP: 0, spd: 0, spdP: 0 };

		return {
			...(this.EquipStatValue("atk") as { atk: number; atkP: number }),
			...(this.EquipStatValue("def") as { def: number; defP: number }),
			...(this.EquipStatValue("hp") as { hp: number; hpP: number }),
			...(this.EquipStatValue("acc") as { acc: number; accP: number }),
			...(this.EquipStatValue("eva") as { eva: number; evaP: number }),
			...(this.EquipStatValue("crit") as { crit: number; critP: number }),
			...(this.EquipStatValue("spd") as { spd: number; spdP: number }),
		};
	}

	private get LinkPoints () {
		return {
			hp: this.UnitStatValue("hp", "link") - this.BasePoints.hp,
			atk: this.UnitStatValue("atk", "link") - this.BasePoints.atk,
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
		const isLink = type === "link";
		const isAll = type === "all";

		if (Array.isArray(baseValue)) {
			const value = detail.Stats[stat as keyof UnitStatsPoint] || 0;

			const withEquip = StatValue(
				stat as keyof UnitStatsPoint,
				{
					from: baseValue[0],
					to: baseValue[1],
					level: detail.Level,
					linkBonus: ["hp", "atk", "exp"],
				},
				isBase || isLink ? 0 : value, // Stat point
				isBase || isLink ? 0 : this.EquipValues[stat], // Equip value
				isBase ? 0 : this.LinkCount, // Link count
				isBase ? 0 : 0, // Bonus factor
				stat !== detail.Unit.linkBonus.per || !(isLink || isAll)
					? 0
					: linkBonus.Value.Per[0] as number, // Bonus value
			);
			return this.includePercentValue && !(isBase || isLink)
				? withEquip * (1 + 0.01 * this.EquipValues[(stat + "P") as keyof UnitEquipPoints])
				: withEquip;
		} else {
			const value = detail.Stats[stat as keyof UnitStatsPoint] || 0;

			const withEquip = StatValue(
				stat as keyof UnitStatsPoint,
				{
					from: baseValue,
					to: baseValue,
					level: detail.Level,
					linkBonus: ["hp", "atk", "exp"],
				},
				isBase || isLink ? 0 : value, // Stat point
				isBase || isLink ? 0 : this.EquipValues[stat], // Equip value
				isBase ? 0 : this.LinkCount, // Link count
				isBase ? 0 : 0, // Bonus factor
				stat !== detail.Unit.linkBonus.per || !(isLink || isAll)
					? 0
					: linkBonus.Value.Per[0] as number, // Bonus value
			);
			return this.includePercentValue && !(isBase || isLink)
				? withEquip * (1 + 0.01 * this.EquipValues[(stat + "P") as keyof UnitEquipPoints])
				: withEquip;
		}
	}

	private EquipStatValue (target: keyof UnitStats) {
		interface Table {
			[key: string]: number;
		}
		const percentBased = ["acc", "crit", "eva"];
		let value = 0;
		let valueP = 0;
		this.unit.Equips
			.filter(x => x.Name)
			.forEach(x => {
				const name = `${x.Name}_${x.Rarity}`;
				const level = x.Level;

				const equip = EquipData.find(x => x.name === name);
				if (!equip) return;

				const stats = equip.stats[level];
				for (const stat of stats) {
					if (stat.on.length > 0) continue;

					for (const act of stat.actions) {
						if (act.rand) continue;
						if (act.act !== target) continue;

						const perc = act.params[0].endsWith("%");
						const val = perc
							? act.params[0].substr(0, act.params[0].length - 1)
							: act.params[0];

						// 고정 수치거나
						// % 수치인데 수치가 % 베이스인 경우
						if (!perc || (perc && percentBased.includes(target)))
							value += parseFloat(val);
						else
							valueP += parseFloat(val);
					}
				}
			});

		const map: Table = {};
		map[target] = value;
		map[`${target}P`] = valueP;
		return map;
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
		const normalized = ((v) => {
			const fixed = value.toFixed(8);
			return parseFloat(
				fixed.substr(0, fixed.length - 6),
			); // 2자리만 남기고
		})(value);

		return FormatNumber(
			floor
				? Math.floor(normalized)
				: normalized,
		);
	}
}
</script>

<style lang="scss" scoped>
.unit-stat-view {
	span.value-diff {
		font-weight: bold;
		color: $success;

		&[data-diff="0"] {
			display: none !important;
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
