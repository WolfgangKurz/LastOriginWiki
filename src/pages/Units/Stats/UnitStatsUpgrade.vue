<template>
	<b-card class="text-left" no-body>
		<b-card-header v-b-toggle.collapse_stats>
			전투원 강화
			<div :class="UnitStatsHeaderClass">
				<small class="pr-2">잔여 포인트</small>
				<b-badge pill :variant="LeftClass">{{unit.LeftPoints}}</b-badge>
			</div>
		</b-card-header>
		<b-collapse id="collapse_stats">
			<b-card-body>
				<b-row
					v-for="key in PointableStatList"
					:key="`simulation-edit-stat-${key}`"
					class="align-items-center my-2"
				>
					<b-col lg="5" cols="12" class="text-left">
						<span class="stat-label">
							<stat-icon :stat="key" />
							<strong>{{StatList[key].name}}</strong>
						</span>
						<span class="d-inline-block">
							<small class="text-secondary">Lv.</small>
							<span class="stat-level">
								<b-input class="stat-input" v-model="unit.Stats[key]" size="xs" min="0" max="300" number />
							</span>
						</span>
					</b-col>
					<b-col lg="7" cols="12">
						<b-input
							class="progress-stat"
							type="range"
							v-model="unit.Stats[key]"
							number
							min="0"
							max="300"
						/>
					</b-col>
				</b-row>
			</b-card-body>
		</b-collapse>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import StatIcon from "@/components/StatIcon.vue";

import { Unit } from "@/pages/Simulation/Simulation/Unit";
import { StatList } from "@/pages/Simulation/Simulation/Stats";

@Component({
	components: {
		StatIcon,
	},
})
export default class UnitStatsUpgrade extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	private get StatList () {
		return StatList;
	}

	private get UnitStatsHeaderClass () {
		const sUnit = this.unit;
		return {
			"float-right": true,
			"text-success": sUnit.LeftPoints > 0,
			"text-danger": sUnit.LeftPoints < 0,
			"text-primary": sUnit.LeftPoints === 0,
		};
	}

	private get PointableStatList () {
		return ["atk", "def", "hp", "acc", "eva", "crit"];
	}

	private get LeftClass () {
		const unit = this.unit;
		return unit.LeftPoints > 0
			? "success"
			: unit.LeftPoints < 0
				? "danger"
				: "primary";
	}
}
</script>

<style lang="scss">
span.stat-label {
	display: inline-block;
	width: 80px;
	text-align: left;
}
input.stat-input {
	display: inline-block;
	margin-left: 0.25rem;
	width: 4rem;
}
</style>
