<template>
	<b-modal v-model="displaySync" centered hide-footer :title="EquipName(name)">
		<b-table-simple bordered fixed table-class="text-center">
			<b-tbody>
				<b-tr>
					<b-td colspan="2" rowspan="3">
						<div class="position-relative d-inline-block">
							<equip-icon :name="`${name}_${lRarity}`" size="large" />
							<equip-level :level="level" />
						</div>
					</b-td>

					<b-th variant="dark">장비 유형</b-th>
					<b-td>
						{{EquipType}}
						<b-badge v-if="isPrivate" variant="primary">전용장비</b-badge>
					</b-td>
				</b-tr>
				<b-tr>
					<b-th variant="dark">장비 등급</b-th>
					<b-td>
						<template v-if="RarityList.length === 1">{{raritySync.toUpperCase()}}</template>
						<b-form-select v-else v-model="raritySync" size="sm" :options="RarityList" />
					</b-td>
				</b-tr>
				<b-tr>
					<b-th variant="dark">장착 제한</b-th>
					<b-td>
						<span v-if="Limits.length === 0" class="text-secondary">-</span>
						<template v-else>
							<span v-for="limit in Limits" :key="`equip-limit-${limit}`">
								<unit-badge v-if="typeof limit === 'string'" :limit="limit" />
								<b-badge v-else variant="primary">{{UnitName(limit)}}</b-badge>
							</span>
						</template>
					</b-td>
				</b-tr>
				<b-tr>
					<b-th colspan="4" variant="dark">강화 레벨 (+{{level}})</b-th>
				</b-tr>
				<b-tr>
					<b-td colspan="4">
						<b-form-input type="range" min="0" max="10" v-model="level" />
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>

		<b-list-group class="text-left" v-if="StatusList">
			<b-list-group-item v-for="(status, idx) in StatusList" :key="`status-line-${idx}`">
				<node-renderer :elem="status.display" />
				<div
					v-if="status.unknown"
					class="unknown-status float-right"
					title="정확하지 않을 수 있습니다"
					v-b-tooltip.hover.left
				>&#x26A0;</div>
			</b-list-group-item>
		</b-list-group>
	</b-modal>
</template>

<script lang="ts">
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { StatusText } from "@/Status";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import UnitFace from "@/components/UnitFace.vue";

import ElemIcon from "@/components/ElemIcon.vue";
import EquipIcon from "./EquipIcon.vue";
import EquipLevel from "./EquipLevel.vue";

import { Rarity } from "@/Types";
import { EquipData, UnitData } from "@/DB";

import EquipNameTable from "@/json/equip-names.json";

type LRarity = "ss" | "s" | "a" | "b";

@Component({
	components: {
		NodeRenderer,
		UnitBadge,
		UnitFace,

		ElemIcon,
		EquipIcon,
		EquipLevel,
	},
})
export default class EquipModal extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	@PropSync("rarity", {
		type: String,
		default: "SS",
	})
	private raritySync!: Rarity;

	@Prop({
		type: String,
		required: true,
	})
	private name!: string;

	private level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;

	@Watch("name")
	private WatchName () {
		this.level = 10;
	}

	private get lRarity (): LRarity {
		return this.raritySync.toLowerCase() as LRarity;
	}

	private get Equip () {
		return _.find(EquipData, x => x.name === `${this.name}_${this.lRarity}`) || null;
	}

	private get RarityList () {
		const list = (["ss", "s", "a", "b"] as LRarity[])
			.filter((x) => _.some(EquipData, (y) => y.name.startsWith(this.name) && y.name.endsWith("_" + x)))
			.map((x) => x.toUpperCase() as Rarity);

		if (!list.includes(this.raritySync))
			this.raritySync = (list[0] || "SS") as Rarity;

		return list.map(x => ({ value: x, text: x }));
	}

	private get isPrivate () {
		const equip = this.Equip;
		if (!equip) return false;

		return equip.limit && equip.limit.every(y => typeof y === "number");
	}

	private get EquipType () {
		interface SSDict {
			[key: string]: string;
		}

		const equip = this.Equip;
		if (!equip) return "???";

		const typeTable: SSDict = {
			chip: "칩",
			os: "OS",
			item: "보조장비",
		};

		let type = equip.name.substr(0, equip.name.indexOf("_"));
		type = typeTable[type] || "???";
		return type;
	}

	private EquipName (name: string) {
		interface SSDict {
			[key: string]: string;
		}

		if (name in EquipNameTable)
			return (EquipNameTable as SSDict)[name];
		return name;
	}

	private get Limits () {
		const equip = this.Equip;
		if (!equip) return ["???"];

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
}
</script>

<style lang="scss">
.unknown-status {
	user-select: none;
	cursor: pointer;
}
</style>
