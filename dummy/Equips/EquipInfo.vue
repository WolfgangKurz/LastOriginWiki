<template>
	<div>
		<table class="table border">
			<tr>
				<td rowspan="3">
					<div class="position-relative d-inline-block">
						<equip-icon :name="`${name}_${rarity}`" size="large" />
						<equip-level :level="level" />
					</div>
				</td>

				<th class="table-dark">장비 유형</th>
				<td>
					{{EquipType}}
					<div v-if="isPrivate" class="badge badge-primary">전용장비</div>
				</td>
			</tr>
			<tr>
				<th class="table-dark">장비 등급</th>
				<td>
					<template v-if="RarityList.length === 1">{{rarity.toUpperCase()}}</template>
					<select v-else v-model="rarity" class="form-control form-control-sm">
						<option
							v-for="rarity in RarityList"
							:key="`rarity-select-${rarity}`"
							:value="rarity"
						>{{rarity.toUpperCase()}}</option>
					</select>
				</td>
			</tr>
			<tr>
				<th class="table-dark">장착 제한</th>
				<td>
					<span v-if="Limits.length === 0" class="text-secondary">-</span>
					<template v-else>
						<span v-for="limit in Limits" :key="`equip-limit-${limit}`">
							<unit-badge v-if="typeof limit === 'string'" :limit="limit" />
							<div v-else class="badge badge-primary">{{UnitName(limit)}}</div>
						</span>
					</template>
				</td>
			</tr>
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
</template>

<script lang="ts">
import $ from "jquery";
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

import { StatusText } from "@/libs/Status";
import { EquipData, UnitData } from "@/libs/DB";
import { Rarity } from "@/libs/Types";

import EquipLevel from "./EquipLevel.vue";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitBadge from "@/components/UnitBadge.vue";

import ElemIcon from "@/components/ElemIcon.vue";
import EquipIcon from "@/components/EquipIcon.vue";

@Component({
	components: {
		NodeRenderer,
		UnitBadge,

		ElemIcon,
		EquipIcon,
		EquipLevel,
	},
})
export default class EquipInfo extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private name!: string;

	private rarity: Rarity = "SS";
	private level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;

	@Watch("name")
	private WatchName () {
		this.level = 10;
	}

	private get Equip () {
		return _.find(EquipData, x => x.name === `${this.name}_${this.rarity}`) || null;
	}

	private get RarityList () {
		const equip = this.Equip;
		if (!equip) return [];

		const list = (["SS", "S", "A", "B"] as Rarity[])
			.filter((x) => _.some(EquipData, (y) => y.name.startsWith(this.name) && y.name.endsWith("_" + x)));

		if (!list.includes(this.rarity))
			this.rarity = _.first(list) || "SS";

		return list;
	}

	private get isPrivate () {
		const equip = this.Equip;
		if (!equip) return false;

		return equip.limit && equip.limit.every(y => typeof y === "number");
	}

	private get EquipType () {
		const equip = this.Equip;
		if (!equip) return "???";

		const typeTable: { [key: string]: string } = {
			chip: "칩",
			os: "OS",
			item: "보조장비",
		};

		let type = equip.name.substr(0, equip.name.indexOf("_"));
		type = typeTable[type] || "???";
		return type;
	}

	private get Limits () {
		const equip = this.Equip;
		if (!equip) return "???";

		return equip.limit || [];
	}

	private get StatusList () {
		const equip = this.Equip;
		if (!equip) return null;

		const stat = equip.stats[this.level];
		return stat.map(x => StatusText(this, x));
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
