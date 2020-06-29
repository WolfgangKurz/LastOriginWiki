<template>
	<b-card no-body class="unit-stat-view">
		<b-card-header>
			<b-row class="align-items-center">
				<b-col>
					{{unit.Unit.name}}
					<rarity-badge :rarity="unit.Rarity" border />
				</b-col>
				<b-col cols="auto">
					<b-button variant="secondary" size="sm" @click="EmitEdit()">수치 수정</b-button>
				</b-col>
			</b-row>
		</b-card-header>

		<b-card-body class="text-left" style="font-size:90%">
			<b-row>
				<b-col lg="4" cols="12">
					<b-check class="ml-2" size="sm" v-model="includePercentValue">% 수치 계산</b-check>
					<hr />

					<b-row
						v-for="value in ValueData"
						:key="`simulation-detail-stat-${value.key}`"
						class="align-items-center my-2"
					>
						<b-col cols="5">
							<span class="stat-label">
								<stat-icon :stat="value.key" />
								<strong>{{value.name}}</strong>
							</span>
						</b-col>
						<b-col cols="7">
							{{NumValue(value.final, value.rounded)}}
							<span
								class="value-diff d-inline-block"
								:data-diff="value.added"
							>
								({{value.added > 0 ? "▲" : "▼"}}
								{{NumValue(value.added, value.rounded)}})
							</span>
							{{value.postfix}}
						</b-col>
					</b-row>

					<hr />

					<div class="unit-stat-linkbonus">
						<b-row>
							<b-col cols="5" class="pr-0">HP</b-col>
							<b-col cols="7">
								+{{LinkBonus.Value.HP}}%
								<span
									class="text-info"
								>({{NumValue(unit.StatData.hp.linked, true)}})</span>
							</b-col>
						</b-row>
						<b-row>
							<b-col cols="5" class="pr-0">공격력</b-col>
							<b-col cols="7">
								+{{LinkBonus.Value.Atk}}%
								<span
									class="text-info"
								>({{NumValue(unit.StatData.atk.linked, true)}})</span>
							</b-col>
						</b-row>
						<b-row v-if="!LinkBonus.IsHP">
							<b-col cols="5" class="pr-0">{{LinkBonus.Per.name}}</b-col>
							<b-col cols="7">
								+{{NumValue(LinkBonus.Value.Per.value, LinkBonus.Value.Per.rounded)}}{{LinkBonus.Value.Per.postfix}}
								<span
									class="text-info"
								>
									<template
										v-if="unit.StatData[LinkBonus.Value.Per.key]"
									>({{NumValue(unit.StatData[LinkBonus.Value.Per.key].linked, LinkBonus.Value.Per.rounded)}})</template>
									<template v-else>({{NumValue(LinkBonus.Value.Per.value, LinkBonus.Value.Per.rounded)}})</template>
								</span>
							</b-col>
						</b-row>
						<b-row>
							<b-col cols="5" class="pr-0">획득 경험치</b-col>
							<b-col cols="7">
								+{{LinkBonus.Value.EXP}}%
								<span class="text-info">({{NumValue(LinkBonus.Value.EXP, true)}})</span>
							</b-col>
						</b-row>
					</div>
				</b-col>
				<b-col lg="8" cols="12" class="vert-separator-lg">
					<hr class="d-lg-none" />여기에 전투원 버프 목록
				</b-col>
			</b-row>
		</b-card-body>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { Unit } from "./Simulation/Unit";
import { StatList, Stat, StatType } from "./Simulation/Stats";

import { UnitStatsData, EquipData } from "@/libs/DB";
import { FormatNumber } from "@/libs/Functions";

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
	private unit!: Unit;

	private includePercentValue: boolean = true;

	private get LinkCount () {
		return this.unit.Linked.filter(x => x).length;
	}

	private get ValueData () {
		const output = [];
		for (const k in StatList) {
			const key = k as StatType;
			const stat = StatList[key];

			const final = this.FinalValue(this.unit.StatData[key], key);
			const added = final - this.unit.StatData[key].base;

			output.push({
				key,
				name: stat.name,
				final,
				added,
				rounded: stat.rounded,
				postfix: stat.postfix || "",
			});
		}
		return output;
	}

	private get LinkBonus () {
		return this.unit.LinkBonus;
	}

	private FinalValue (stat: Stat, key: StatType) {
		let value = stat.base;
		value += stat.pointed + stat.equiped;
		value += stat.linked;

		if (this.includePercentValue)
			value += value * stat.equipedRatio;

		return value;
	}

	private NumValue (value: number, rounded?: boolean) {
		const normalized = ((v) => {
			const fixed = v.toFixed(8);
			return parseFloat(
				fixed.substr(0, fixed.length - 6),
			); // 2자리만 남기고
		})(value);

		if (rounded)
			return FormatNumber(Math.round(normalized));
		else {
			const integer = FormatNumber(Math.floor(normalized));
			const float = ((x: number) => {
				const y = x.toString();
				if (!y.includes(".")) return "";
				return y.substr(y.indexOf("."));
			})(normalized);
			return integer + float;
		}
	}

	private EmitEdit () {
		this.$emit("edit");
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
