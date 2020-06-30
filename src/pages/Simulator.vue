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
								:unit="Simulator.Grid[i - 1]"
								@add="PrepareGrid(i - 1)"
								@remove.stop="ClearGrid(i - 1)"
								@focus="FocusGrid(i - 1)"
							/>
						</div>
					</b-aspect>
					<b-card-footer>
						<b-button class="mx-1" size="sm" variant="dark" @click="ExportAlias">내보내기</b-button>
						<b-button class="mx-1" size="sm" variant="dark">불러오기</b-button>
					</b-card-footer>
				</b-card>
			</b-col>
			<b-col cols="12" xl="9" class="mb-3">
				<unit-stat-view
					v-if="FocusedGrid >= 0"
					:unit="Simulator.Grid[FocusedGrid]"
					@edit="EditUnit(FocusedGrid)"
				/>
			</b-col>
		</b-row>

		<unit-select-modal :display.sync="UnitSelecting" :list="Simulator.Grid" @select="SetGridUnit" />
		<unit-edit-modal
			:display.sync="UnitEditing"
			:unit="Simulator.Grid[UnitEditingIndex]"
			@reset="ResetStats()"
		/>
	</div>
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import UnitSelectModal from "./Simulation/UnitSelectModal.vue";
import UnitFormation from "./Simulation/UnitFormation.vue";
import UnitStatView from "./Simulation/UnitStatView.vue";
import UnitEditModal from "./Simulation/UnitEditModal.vue";

import { UnitStatsData } from "@/libs/DB";
import { Unit, UnitStats, UnitStatsPoint } from "@/libs/Types";

import Simulation from "./Simulation/Simulation/Simulation";

interface Dictionary<T> {
	[key: string]: T;
}

@Component({
	components: {
		UnitSelectModal,
		UnitFormation,
		UnitStatView,
		UnitEditModal,
	},
})
export default class Simulator extends Vue {
	// #region UnitSelecting, UnitSelectingIndex
	private UnitSelectingIndex: number = -1;

	private set UnitSelecting (value: boolean) {
		if (!value) this.UnitSelectingIndex = -1;
	}

	private get UnitSelecting () {
		return this.UnitSelectingIndex >= 0;
	}
	// #endregion

	// #region UnitEditing, UnitEditingIndex
	private UnitEditingIndex: number = -1;

	private set UnitEditing (value: boolean) {
		if (!value) this.UnitEditingIndex = -1;
	}

	private get UnitEditing () {
		return this.UnitEditingIndex >= 0;
	}
	// #endregion

	private Simulator: Simulation = new Simulation();

	private FocusedGrid: number = -1;

	/**
	 * 전투원이 존재하는 격자를 선택
	 */
	private FocusGrid (index: number) {
		this.FocusedGrid = index;
	}

	/**
	 * 특정 격자의 전투원을 없앰
	 */
	private ClearGrid (index: number) {
		this.Simulator.Clear(index);
		if (this.FocusedGrid === index)
			this.FocusedGrid = -1;
	}

	/**
	 * 선택된 격자에 새 전투원을 배치할 준비 (선택한 격자 번호 저장)
	 */
	private PrepareGrid (index: number) {
		this.UnitSelectingIndex = index;
	}

	/**
	 * 모달에서 선택된 전투원을 격자에 배치
	 */
	private SetGridUnit (unitId: number) {
		this.Simulator.SetGrid(this.UnitSelectingIndex, unitId);
		this.UnitSelectingIndex = -1;
	}

	/**
	 * 전달된 전투원의 스탯을 수정하는 상태로 만듭니다.
	 */
	private EditUnit (unitId: number) {
		this.UnitEditingIndex = unitId;
	}

	private ExportAlias () {
		const data: Dictionary<any> = {};
		for (let i = 0; i < this.Simulator.Grid.length; i++) {
			const g = this.Simulator.Grid[i];
			if (g) data[i + 1] = g.Serialize();
		}
		alert(window.btoa(JSON.stringify(data)));
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
