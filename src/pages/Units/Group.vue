<template>
	<div class="unit-group">
		<div class="mb-4">
			<b-btn-group>
				<b-button variant="outline-secondary" :pressed="Merge" @click="Merge = !Merge">세부 그룹 합치기</b-button>
			</b-btn-group>
		</div>

		<b-row class="mb-4 mx-4">
			<b-col>
				<b-input v-model="SearchText" placeholder="전투원 검색" />
			</b-col>
			<b-col cols="auto">
				<b-button variant="danger" @click="SearchText = ''">지우기</b-button>
			</b-col>
		</b-row>

		<b-container v-for="(list, group) in GroupList" :key="`unit-group-${group}`" class="unit-group mb-3">
			<b-row class="text-center">
				<b-col class="bg-dark text-white" cols="12" lg="2" md="3">
					<img :src="`${AssetsRoot}/${imageExt}/group/${GroupKeyTable[group]}.${imageExt}`" />
					<div>{{ group }}</div>
				</b-col>
				<b-col cols="12" lg="10" md="9">
					<b-row cols="2" cols-xl="5" cols-lg="4" cols-md="3" cols-sm="3">
						<b-col v-for="unit in list" :key="`unit-group-${group}-${unit.id}`" class="unit-list-item">
							<unit-card :unit="unit" @click="modalUnit(unit)" />
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync, Emit } from "vue-property-decorator";

import StoreModule, { UnitListOrder } from "@/libs/Store";

import UnitCard from "./UnitCard.vue";

import UnitData, { Unit } from "@/libs/DB/Unit";
import { AssetsRoot, ImageExtension } from "@/libs/Const";

@Component({
	components: {
		UnitCard,
	},
})
export default class UnitsGroup extends Vue {
	// Vuex -----
	private get SearchText () {
		return StoreModule.UnitSearchText;
	}

	private set SearchText (value: string) {
		StoreModule.setUnitSearchText(value);
	}

	private get Merge () {
		return StoreModule.UnitGroupMerge;
	}

	private set Merge (value: boolean) {
		StoreModule.setUnitGroupMerge(value);
	}
	// Vuex -----

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get GroupKeyTable () {
		interface SSDict {
			[key: string]: string;
		}

		const g = _.groupBy(UnitData, x => x.group);
		const r: SSDict = {};
		for (const k in g)
			r[k] = g[k][0].groupkey;

		return r;
	}

	private get GroupList () {
		interface SUDict {
			[key: string]: Unit[];
		}

		let g: _.Dictionary<Unit[]>;
		const list = _(UnitData)
			.filter(x => x.name.includes(this.SearchText));

		if (this.Merge)
			g = list.groupBy(x => x.shortgroup).toJSON();
		else
			g = list.groupBy(x => x.group).toJSON();

		const r: SUDict = {};
		Object.keys(g)
			.sort()
			.forEach(k => (r[k] = g[k]));

		return r;
	}

	private modalUnit (unit: Unit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.id });
	}
}
</script>

<style lang="scss">
.unit-group {
	width: 100%;

	.unit-group > .row > *:nth-child(2n + 1) {
		display: grid;
		grid-template-rows: 1fr auto auto 1fr;
		padding: 10px;
		vertical-align: middle;
		word-break: keep-all;
		justify-content: center;
		justify-items: center;

		> img {
			width: 96px;
		}

		*:nth-child(1) {
			grid-row: 2;
		}
		*:nth-child(2) {
			grid-row: 3;
		}
	}

	.unit-group > .row > *:nth-child(2n) {
		border: 1px solid #ccc;

		> .row {
			margin: 0;
		}
	}
}
</style>
