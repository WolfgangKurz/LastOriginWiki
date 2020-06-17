<template>
	<div class="simulation">
		<b-alert variant="warning" show>
			아직 전투 시뮬레이션 기능을
			<strong class="text-danger">이용할 수 없으며</strong>,
			조건이 붙은 장비 수치와 패시브 스킬 수치도
			<strong class="text-danger">반영되지 않습니다</strong>.
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
				<unit-stat-view v-if="DetailUnit" :unit="DetailUnit" />
			</b-col>
			<b-col cols="12" md="12" lg="6">
				<unit-stat-edit v-if="DetailUnit" :unit="DetailUnit" @reset="ResetStats()" />
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
import UnitStatView from "./Simulation/UnitStatView.vue";
import UnitStatEdit from "./Simulation/UnitStatEdit.vue";

import { UnitStatsData } from "@/libs/DB";
import { Unit, UnitStats, UnitStatsPoint } from "@/libs/Types";
import { StatValue } from "@/libs/UnitStat";

@Component({
	components: {
		UnitSelectModal,
		UnitFormation,
		UnitStatView,
		UnitStatEdit,
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

	private ResetStats () {
		if (!this.DetailUnit) return;

		const detail = this.DetailUnit;
		const stats = detail.Stats;

		Object.keys(stats).forEach(x => (stats[x as keyof UnitStatsPoint] = 0));
	}
}
</script>

<style lang="scss">
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
}
</style>
