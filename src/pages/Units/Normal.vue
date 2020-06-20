<template>
	<div class="unit-normal">
		<b-btn-group class="mx-2 mb-2">
			<b-button variant="outline-danger" :pressed="Order === 'dict'" @click="Order = 'dict'">도감 번호순</b-button>
			<b-button variant="outline-danger" :pressed="Order === 'name'" @click="Order = 'name'">이름순</b-button>
			<b-button variant="outline-danger" :pressed="Order === 'rarity'" @click="Order = 'rarity'">등급순</b-button>
		</b-btn-group>

		<b-btn-group class="mx-2 mb-2">
			<b-button
				variant="outline-secondary"
				:pressed="DictIntp"
				:disabled="Order !== 'dict'"
				@click="DictIntp = !DictIntp"
			>빈 도감번호 채우기</b-button>
			<b-button
				variant="outline-secondary"
				:pressed="ShortName"
				:disabled="Order === 'dict'"
				@click="ShortName = !ShortName"
			>짧은 이름으로 정렬</b-button>
		</b-btn-group>

		<b-row class="mb-4 mx-4">
			<b-col>
				<b-input v-model="SearchText" placeholder="전투원 검색" />
			</b-col>
			<b-col cols="auto">
				<b-button variant="danger" @click="SearchText = ''">지우기</b-button>
			</b-col>
		</b-row>

		<b-row
			cols="2"
			cols-lg="5"
			:cols-xl="DictIntp ? 5 : 6"
			:cols-md="DictIntp ? 5 : 4"
			:cols-sm="DictIntp ? 2 : 3"
		>
			<b-col v-for="unit in UnitList" :key="`unit-normal-unit-${unit.id}`" class="mt-3">
				<unit-card :unit="unit" :class="{ invalid: !unit.group }" @click="modalUnit(unit)" />
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync, Emit } from "vue-property-decorator";

import StoreModule, { UnitListOrder } from "@/libs/Store";

import UnitCard from "./UnitCard.vue";

import { UnitData } from "@/libs/DB";
import { Unit } from "@/libs/Types";

interface UnitDict {
	[key: number]: Unit;
}

@Component({
	components: {
		UnitCard,
	},
})
export default class UnitsNormal extends Vue {
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

	private get DictIntp () {
		return StoreModule.UnitListDictionaryInterpolation;
	}

	private set DictIntp (value: boolean) {
		StoreModule.setUnitListDictionaryInterpolation(value);
	}

	private get ShortName () {
		return StoreModule.UnitListSortAsShortName;
	}

	private set ShortName (value: boolean) {
		StoreModule.setUnitListSortAsShortName(value);
	}
	// Vuex -----

	private get UnitList (): Unit[] {
		if (this.DictIntp) {
			return new Array(Object.values(UnitData).reduce((x, y) => Math.max(x, y.id), 0))
				.fill(0)
				.map((_, x) => x + 1)
				.map<Unit>(x => {
					return (x in UnitData)
						? UnitData[x]
						: {
							...Unit.Empty,
							id: x,
						};
				})
				.filter(x => x.name.includes(this.SearchText));
		} else {
			const list = Object.values(UnitData)
				.map(x => {
					return {
						...x,
						id000: ("00" + x.id).substr(-3),
					};
				})
				.filter(x => x.name.includes(this.SearchText));

			if (this.Order === "name") {
				if (this.ShortName)
					list.sort((x, y) => x.shortname < y.shortname ? -1 : 1);
				else
					list.sort((x, y) => x.name < y.name ? -1 : 1);
			} else if (this.Order === "rarity") {
				const rarities = { SS: 0, S: 1, A: 2, B: 3 };
				if (this.ShortName) {
					list.sort((x, y) =>
						rarities[x.rarity] < rarities[y.rarity]
							? -1
							: rarities[x.rarity] > rarities[y.rarity]
								? 1
								: x.shortname < y.shortname
									? -1
									: 1,
					);
				} else {
					list.sort((x, y) =>
						rarities[x.rarity] < rarities[y.rarity]
							? -1
							: rarities[x.rarity] > rarities[y.rarity]
								? 1
								: x.name < y.name
									? -1
									: 1,
					);
				}
			}

			return list;
		}
	}

	private modalUnit (unit: Unit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.id });
	}
}
</script>
