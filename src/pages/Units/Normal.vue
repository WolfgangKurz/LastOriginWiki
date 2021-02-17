<template>
	<div class="unit-normal">
		<b-btn-group class="mx-2 mb-2">
			<b-button variant="outline-danger" :pressed="Order === 'dict'" @click="Order = 'dict'">
				<locale k="UNIT_NORMAL_ORDERBY_NO" />
			</b-button>
			<b-button variant="outline-danger" :pressed="Order === 'name'" @click="Order = 'name'">
				<locale k="UNIT_NORMAL_ORDERBY_NAME" />
			</b-button>
			<b-button variant="outline-danger" :pressed="Order === 'rarity'" @click="Order = 'rarity'">
				<locale k="UNIT_NORMAL_ORDERBY_GRADE" />
			</b-button>
		</b-btn-group>

		<b-btn-group class="mx-2 mb-2">
			<b-button variant="outline-secondary" :pressed="ShortName" :disabled="Order === 'dict'" @click="ShortName = !ShortName">
				<locale k="UNIT_NORMAL_ORDERBY_SHORTNAME" />
			</b-button>
		</b-btn-group>

		<b-row cols="2" cols-lg="5" :cols-xl="6" :cols-md="4" :cols-sm="3">
			<b-col v-for="unit in UnitList" :key="`unit-normal-unit-${unit.uid}`" class="mt-3">
				<unit-card :unit="unit" :class="{ invalid: !unit.group }" @click="modalUnit(unit)" />
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import StoreModule, { UnitListOrder, UnitDisplayFilters } from "@/libs/Store";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";

import UnitCard from "./UnitCard.vue";

@Component({
	components: {
		UnitCard,
	},
})
export default class UnitsNormal extends Vue {
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

	private get Order () {
		return StoreModule.UnitListOrder;
	}

	private set Order (value: UnitListOrder) {
		StoreModule.setUnitListOrder(value);
	}

	private get ShortName () {
		return StoreModule.UnitListSortAsShortName;
	}

	private set ShortName (value: boolean) {
		StoreModule.setUnitListSortAsShortName(value);
	}

	private get Filters () {
		return StoreModule.UnitDisplayFilter;
	}

	private set Filters (value: UnitDisplayFilters) {
		StoreModule.setUnitDisplayFilter(value);
	}
	// Vuex -----

	private get UnitList (): FilterableUnit[] {
		const list = this.list;

		if (this.Order === "name") {
			if (this.ShortName)
				list.sort((x, y) => LocaleGet(`UNIT_SHORT_${x.uid}`) < LocaleGet(`UNIT_SHORT_${y.uid}`) ? -1 : 1);
			else
				list.sort((x, y) => LocaleGet(`UNIT_${x.uid}`) < LocaleGet(`UNIT_${y.uid}`) ? -1 : 1);
		} else if (this.Order === "rarity") {
			if (this.ShortName) {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: LocaleGet(`UNIT_SHORT_${x.uid}`) < LocaleGet(`UNIT_SHORT_${y.uid}`) ? -1 : 1,
				);
			} else {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: LocaleGet(`UNIT_${x.uid}`) < LocaleGet(`UNIT_${y.uid}`) ? -1 : 1,
				);
			}
		}

		return list;
	}

	private modalUnit (unit: FilterableUnit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.uid });
	}
}
</script>
