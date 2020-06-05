<template>
	<div class="chars">
		<div class="text-center mb-3">
			<div class="btn-group">
				<button
					type="button"
					class="btn btn-outline-info"
					:class="{ active: filterType === 0 }"
					@click="filterType = 0"
				>일반 보기</button>
				<button
					type="button"
					class="btn btn-outline-info"
					:class="{ active: filterType === 1 }"
					@click="filterType = 1"
				>테이블 보기</button>
				<button
					type="button"
					class="btn btn-outline-info"
					:class="{ active: filterType === 2 }"
					@click="filterType = 2"
				>그룹별 보기</button>
			</div>
		</div>

		<units-normal
			v-if="filterType === 0"
			:normal-order.sync="normalOrder"
			:dict-interpolation.sync="dictInterpolation"
			:short-name-sort.sync="shortNameSort"
			@modal="modalUnit"
		/>
		<units-table
			v-else-if="filterType === 1"
			:filter-flags="filterFlags"
			:filter-promotion.sync="filterPromotion"
			@modal="modalUnit"
		/>
		<units-group
			v-else-if="filterType === 2"
			:group-by-shortname.sync="groupByShortname"
			@modal="modalUnit"
		/>

		<unit-modal :unit="selectedUnit" :display.sync="unitModalDisplay" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { CharFilterFlag } from "@/State";

import UnitsTable from "./Units/Table.vue";
import UnitsNormal from "./Units/Normal.vue";
import UnitsGroup from "./Units/Group.vue";

import UnitModal from "./Units/UnitModal.vue";
import { Unit } from "@/Types";

@Component({
	components: {
		UnitsTable,
		UnitsNormal,
		UnitsGroup,

		UnitModal,
	},
})
export default class Units extends Vue {
	private filterType: 0 | 1 | 2 = 0;
	private filterPromotion = false;
	private filterFlags: CharFilterFlag = {
		rarity: {
			ss: true,
			s: true,
			a: true,
			b: true,
		},
		type: {
			light: true,
			air: true,
			heavy: true,
		},
		role: {
			attacker: true,
			defender: true,
			supporter: true,
		},
		body: {
			bioroid: true,
			ags: true,
		},
	};

	private normalOrder: number = 0;
	private dictInterpolation: boolean = false;
	private shortNameSort: boolean = false;
	private groupByShortname: boolean = false;

	private unitModalDisplay: boolean = false;
	private selectedUnit: Unit = Unit.Empty;

	private modalUnit (target: Unit) {
		this.selectedUnit = target;
		this.unitModalDisplay = true;
	}
}
</script>

<style lang="scss">
</style>
