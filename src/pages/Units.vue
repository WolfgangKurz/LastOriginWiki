<template>
	<div class="chars">
		<div class="text-center mb-3">
			<div class="btn-group">
				<button
					type="button"
					class="btn btn-outline-info"
					:class="{ active: DisplayType === 'table' }"
					@click="DisplayType = 'table'"
				>테이블 보기</button>
				<button
					type="button"
					class="btn btn-outline-info"
					:class="{ active: DisplayType === 'list' }"
					@click="DisplayType = 'list'"
				>목록 보기</button>
				<button
					type="button"
					class="btn btn-outline-info"
					:class="{ active: DisplayType === 'group' }"
					@click="DisplayType = 'group'"
				>그룹별 보기</button>
			</div>
		</div>

		<units-table v-if="DisplayType === 'table'" />
		<units-normal v-else-if="DisplayType === 'list'" />
		<units-group v-else-if="DisplayType === 'group'" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";

import StoreModule, { UnitDisplayType } from "@/libs/Store";

import UnitsTable from "./Units/Table.vue";
import UnitsNormal from "./Units/Normal.vue";
import UnitsGroup from "./Units/Group.vue";

import { Unit } from "@/libs/Types";
import { UnitData } from "@/libs/DB";

@Component({
	components: {
		UnitsTable,
		UnitsNormal,
		UnitsGroup,
	},
})
export default class Units extends Vue {
	private unitModalDisplay: boolean = false;
	private selectedUnit: Unit = Unit.Empty;

	// Vuex -----
	private get DisplayType () {
		return StoreModule.UnitDisplayType;
	}

	private set DisplayType (value: UnitDisplayType) {
		StoreModule.setUnitDisplayType(value);
	}
	// Vuex -----

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
