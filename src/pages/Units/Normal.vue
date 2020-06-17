<template>
	<div class="unit-normal">
		<b-btn-group class="ml-3 mb-2">
			<b-button
				variant="outline-danger"
				:pressed="normalOrderSync === 0"
				@click="normalOrderSync = 0"
			>도감 번호순</b-button>
			<b-button
				variant="outline-danger"
				:pressed="normalOrderSync === 1"
				@click="normalOrderSync = 1"
			>이름순</b-button>
			<b-button
				variant="outline-danger"
				:pressed="normalOrderSync === 2"
				@click="normalOrderSync = 2"
			>등급순</b-button>
		</b-btn-group>

		<b-btn-group class="ml-3 mb-2">
			<b-button
				variant="outline-secondary"
				:pressed="dictInterpolationSync"
				:disabled="normalOrderSync !== 0"
				@click="invDictInterpolation()"
			>빈 도감번호 채우기</b-button>
			<b-button
				variant="outline-secondary"
				:pressed="shortNameSortSync"
				:disabled="normalOrderSync === 0"
				@click="invShortNameSort()"
			>짧은 이름으로 정렬</b-button>
		</b-btn-group>

		<b-row
			cols="2"
			cols-lg="5"
			:cols-xl="dictInterpolationSync ? 5 : 6"
			:cols-md="dictInterpolationSync ? 5 : 4"
			:cols-sm="dictInterpolationSync ? 2 : 3"
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

import UnitCard from "./UnitCard.vue";

import { UnitData } from "@/libs/DB";

import { CharFilterFlag } from "@/libs/State";
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
	@PropSync("normalOrder", {
		type: Number,
		default: 0,
	})
	private normalOrderSync!: number;

	@PropSync("dictInterpolation", {
		type: Boolean,
		default: false,
	})
	private dictInterpolationSync!: boolean;

	@PropSync("shortNameSort", {
		type: Boolean,
		default: false,
	})
	private shortNameSortSync!: boolean;

	private get UnitList (): Unit[] {
		if (this.dictInterpolationSync) {
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
				});
		} else {
			const list = Object.values(UnitData)
				.map(x => {
					return {
						...x,
						id000: ("00" + x.id).substr(-3),
					};
				});

			if (this.normalOrderSync === 1) {
				if (this.shortNameSortSync)
					list.sort((x, y) => x.shortname < y.shortname ? -1 : 1);
				else
					list.sort((x, y) => x.name < y.name ? -1 : 1);
			} else if (this.normalOrderSync === 2) {
				const rarities = { SS: 0, S: 1, A: 2, B: 3 };
				if (this.shortNameSortSync) {
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

	private invDictInterpolation () {
		if (this.normalOrderSync === 0)
			this.dictInterpolationSync = !this.dictInterpolationSync;
	}

	private invShortNameSort () {
		if (this.normalOrderSync !== 0)
			this.shortNameSortSync = !this.shortNameSortSync;
	}

	private modalUnit (unit: Unit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.id });
	}
}
</script>
