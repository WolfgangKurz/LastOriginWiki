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
		/>
		<units-table
			v-else-if="filterType === 1"
			:filter-flags="filterFlags"
			:filter-promotion.sync="filterPromotion"
		/>
		<units-group v-else-if="filterType === 2" :group-by-shortname.sync="groupByShortname" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";

import { CharFilterFlag } from "@/State";

import UnitsTable from "./Units/Table.vue";
import UnitsNormal from "./Units/Normal.vue";
import UnitsGroup from "./Units/Group.vue";

import { Unit } from "@/Types";
import { UnitData } from "@/DB";

@Component({
	components: {
		UnitsTable,
		UnitsNormal,
		UnitsGroup,
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

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	@Watch("unitModalDisplay")
	private unitModalDisplayWatch (value: boolean, prev: boolean) {
		if (prev && !value)
			this.$router.push({ path: "/units/" });
	}

	private checkParams () {
		const params = this.$route.params;

		if ("id" in params)
			this.$router.replace("/units/" + params.id);
		else
			this.unitModalDisplay = false;
	}

	private mounted () {
		this.checkParams();
	}
}
</script>

<style lang="scss">
</style>
