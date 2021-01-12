<template>
	<div class="unit-table">
		<b-table-simple class="unit-table mb-3" striped>
			<b-thead head-variant="dark">
				<b-tr>
					<b-th>제조 시간</b-th>
					<b-th>전투원</b-th>
				</b-tr>
			</b-thead>
			<b-tbody>
				<template v-for="(units, time) in TimeList">
					<b-tr :key="`unit-time-table-body-${time}`">
						<b-td class="align-middle p-2">{{ CraftTime(time) }}</b-td>
						<b-td>
							<b-row cols-sm="2" cols-md="4" cols-lg="6" cols="8" class="justify-content-center">
								<b-col v-for="unit in units" :key="`unit-time-table-unit-${unit.uid}`">
									<unit-card class="unit-list-item" :unit="unit" :rarity="unit.rarity" @click="modalUnit(unit)" />
								</b-col>
							</b-row>
						</b-td>
					</b-tr>
				</template>
			</b-tbody>
		</b-table-simple>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync, Emit } from "vue-property-decorator";

import StoreModule, { EffectFilterListType, EffectFilterTargetType, UnitDisplayFilters } from "@/libs/Store";

import RarityBadge from "@/components/RarityBadge.vue";
import UnitFace from "@/components/UnitFace.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import UnitCard from "./UnitCard.vue";

import { FilterableUnit } from "@/libs/DB/Unit.Filterable";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";
import { BuffEffect } from "@/libs/Buffs/BuffEffect";
import { isBuffEffectValid, isPositiveBuffEffectValue } from "@/libs/Buffs/Helper";
import { groupBy } from "@/libs/Functions";

@Component({
	components: {
		RarityBadge,
		UnitFace,
		UnitBadge,
		UnitCard,
	},
})
export default class UnitsTable extends Vue {
	@Prop({
		type: Array,
		default: () => [],
	})
	private list!: FilterableUnit[];

	// Vuex -----
	private get SearchText () {
		return StoreModule.UnitSearchText;
	}

	private set SearchText (value: string) {
		StoreModule.setUnitSearchText(value);
	}

	private get Filters () {
		return StoreModule.UnitDisplayFilter;
	}

	private set Filters (value: UnitDisplayFilters) {
		StoreModule.setUnitDisplayFilter(value);
	}
	// Vuex -----

	private get RarityName () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private get TypeList (): (keyof UnitDisplayFilters["Type"])[] {
		return [
			ACTOR_CLASS.LIGHT,
			ACTOR_CLASS.AIR,
			ACTOR_CLASS.HEAVY,
		];
	}

	private get RoleList (): (keyof UnitDisplayFilters["Role"])[] {
		return [
			ROLE_TYPE.ATTACKER,
			ROLE_TYPE.DEFENDER,
			ROLE_TYPE.SUPPORTER,
		];
	}

	private CraftTime (time: string) {
		const duration = parseInt(time, 10);

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return `${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)}`;
	}

	private get TimeList () {
		const rarity = [
			this.Filters.Rarity[ACTOR_GRADE.B] ? ACTOR_GRADE.B : -1,
			this.Filters.Rarity[ACTOR_GRADE.A] ? ACTOR_GRADE.A : -1,
			this.Filters.Rarity[ACTOR_GRADE.S] ? ACTOR_GRADE.S : -1,
			this.Filters.Rarity[ACTOR_GRADE.SS] ? ACTOR_GRADE.SS : -1,
		].filter(x => x > -1);
		const type = [
			this.Filters.Type[ACTOR_CLASS.LIGHT] ? ACTOR_CLASS.LIGHT : -1,
			this.Filters.Type[ACTOR_CLASS.AIR] ? ACTOR_CLASS.AIR : -1,
			this.Filters.Type[ACTOR_CLASS.HEAVY] ? ACTOR_CLASS.HEAVY : -1,
		].filter(x => x > -1);
		const role = [
			this.Filters.Role[ROLE_TYPE.ATTACKER] ? ROLE_TYPE.ATTACKER : -1,
			this.Filters.Role[ROLE_TYPE.DEFENDER] ? ROLE_TYPE.DEFENDER : -1,
			this.Filters.Role[ROLE_TYPE.SUPPORTER] ? ROLE_TYPE.SUPPORTER : -1,
		].filter(x => x > -1);
		const body = [
			this.Filters.Body[ACTOR_BODY_TYPE.BIOROID] ? ACTOR_BODY_TYPE.BIOROID : -1,
			this.Filters.Body[ACTOR_BODY_TYPE.AGS] ? ACTOR_BODY_TYPE.AGS : -1,
		].filter(x => x > -1);

		const units = this.list.filter(x => x.craft);
		return groupBy(units, x => x.craft as number);
	}

	private modalUnit (unit: FilterableUnit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.uid });
	}
}
</script>

<style lang="scss">
.unit-time-table {
	th {
		word-break: keep-all;
	}
	tbody th {
		vertical-align: middle;
	}
	td {
		border: 1px solid #ccc;
	}
}
</style>
