<template>
	<div class="unit-group">
		<div class="mb-3">
			<b-btn-group class="mb-2">
				<b-button
					variant="outline-secondary"
					:pressed="groupByShortnameSync"
					@click="groupByShortnameSync = !groupByShortnameSync"
				>세부 그룹 합치기</b-button>
			</b-btn-group>
		</div>

		<b-container
			v-for="(list, group) in GroupList"
			:key="`unit-group-${group}`"
			class="unit-group mb-3"
		>
			<b-row cols="1" cols-lg="2" class="text-center">
				<b-col class="bg-dark text-white">
					<img :src="`${AssetsRoot}/${imageExt}/group/${GroupKeyTable[group]}.${imageExt}`" />
					<div>{{group}}</div>
				</b-col>
				<b-col>
					<b-row cols="2" cols-xl="5" cols-lg="4" cols-md="3" cols-sm="2">
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

import UnitCard from "./UnitCard.vue";

import { UnitData } from "@/DB";
import { Unit, Rarity, UnitType, UnitRole } from "@/Types";
import { AssetsRoot, ImageExtension } from "@/Const";

import { CharFilterFlag } from "@/State";

@Component({
	components: {
		UnitCard,
	},
})
export default class UnitsGroup extends Vue {
	@PropSync("groupByShortname", {
		type: Boolean,
		default: false,
	})
	private groupByShortnameSync!: boolean;

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

		if (this.groupByShortnameSync)
			g = _.groupBy(UnitData, x => x.shortgroup);
		else
			g = _.groupBy(UnitData, x => x.group);

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

	.unit-group > .row > .col:nth-child(2n + 1) {
		padding: 10px;
		vertical-align: middle;
		word-break: keep-all;

		> img {
			width: 96px;
		}
	}

	.unit-group > .row > .col:nth-child(2n) {
		border: 1px solid #ccc;

		> .row {
			margin: 0;
		}
	}
}
</style>
