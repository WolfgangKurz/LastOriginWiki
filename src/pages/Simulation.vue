<template>
	<div class="simulation">
		<b-alert show>씨뮬레이션</b-alert>

		<b-row>
			<b-col cols="3">
				<b-card class="grid-card" no-body bg-variant="warning" text-variant="white">
					<b-card-title>아군 편성</b-card-title>
					<b-aspect aspect="1">
						<div class="simulation-grid">
							<unit-formation
								v-for="i in 9"
								:key="`simulation-grid-formation-${i}`"
								:class="`formation-${i}`"
								:id="UnitGrid[i - 1]"
								@click="SelectUnit(i)"
							/>
						</div>
					</b-aspect>
				</b-card>
			</b-col>
		</b-row>

		<unit-select-modal :display.sync="UnitSelecting" @select="Select" />
	</div>
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import UnitSelectModal from "./Simulation/UnitSelectModal.vue";
import UnitFormation from "./Simulation/UnitFormation.vue";

import { Unit } from "@/Types";

@Component({
	components: {
		UnitSelectModal,
		UnitFormation,
	},
})
export default class Simulation extends Vue {
	private UnitSelecting: boolean = false;
	private UnitSelectingIndex: number = -1;

	private UnitGrid: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	private SelectUnit (index: number) {
		this.UnitSelecting = true;
		this.UnitSelectingIndex = index - 1;
	}

	private Select (id: number, unit: Unit) {
		this.UnitSelecting = false;
		this.UnitGrid[this.UnitSelectingIndex] = id;
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

		background-image: url($assetsRoot+"/simulation/Background_Make_2.png");
		background-position: center;
		background-size: cover;
	}
}
</style>
