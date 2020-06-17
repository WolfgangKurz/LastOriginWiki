<template>
	<div class="modal fade" id="unit-modal">
		<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{UnitName(name)}}</h5>
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<table class="table border">
						<tr>
							<td rowspan="3">
								<div class="position-relative d-inline-block"></div>
							</td>

							<th class="table-dark">장비 유형</th>
							<td>
								{{UnitType}}
								<div v-if="isPrivate" class="badge badge-primary">전용장비</div>
							</td>
						</tr>
						<tr>
							<th class="table-dark">장비 등급</th>
							<td>{{rarity.toUpperCase()}}</td>
						</tr>
						<tr></tr>
						<tr>
							<th colspan="3" class="table-dark">강화 레벨 (+{{level}})</th>
						</tr>
						<tr>
							<td colspan="3">
								<input type="range" class="custom-range" min="0" max="10" v-model="level" />
							</td>
						</tr>
					</table>

					<ul class="list-group text-left">
						<li v-for="(status, idx) in StatusList" :key="`status-line-${idx}`" class="list-group-item">
							<node-renderer :elem="status.display" />
							<div
								v-if="status.unknown"
								class="unknown-status float-right"
								data-toggle="tooltip"
								data-placement="left"
								title="정확하지 않을 수 있습니다"
							>&#x26A0;</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import $ from "jquery";
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

import { StatusText } from "@/libs/Status";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitBadge from "@/components/UnitBadge.vue";

import ElemIcon from "@/components/ElemIcon.vue";
import UnitIcon from "@/components/UnitIcon.vue";
import UnitLevel from "@/components/UnitLevel.vue";
import { UnitData } from "@/libs/DB";
import { LRarity } from "@/libs/Types";

@Component({
	components: {
		NodeRenderer,
		UnitBadge,

		ElemIcon,
		UnitIcon,
		UnitLevel,
	},
})
export default class UnitModal extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private name!: string;

	private rarity: LRarity = "ss";
	private level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;

	@Watch("name")
	private WatchName () {
		this.level = 10;
	}

	private get Unit () {
		return _.find(UnitData, x => x.name === `${this.name}_${this.rarity}`) || null;
	}

	private get RarityList () {
		const unit = this.Unit;
		if (!unit) return [];

		const list = (["ss", "s", "a", "b"] as LRarity[])
			.filter((x) => _.some(UnitData, (y) => y.name.startsWith(this.name) && y.name.endsWith("_" + x)));

		if (!list.includes(this.rarity))
			this.rarity = _.first(list) || "ss";

		return list;
	}

	private get UnitType () {
		const unit = this.Unit;
		if (!unit) return "???";

		const typeTable: { [key: string]: string } = {
			chip: "칩",
			os: "OS",
			item: "보조장비",
		};

		let type = unit.name.substr(0, unit.name.indexOf("_"));
		type = typeTable[type] || "???";
		return type;
	}

	private UnitName (idx: number) {
		return UnitData[idx].name;
	}

	private updated () {
		this.$nextTick(() => $("[data-toggle=\"tooltip\"]").tooltip());
	}
}
</script>

<style lang="scss">
.unknown-status {
	user-select: none;
	cursor: pointer;
}
</style>
