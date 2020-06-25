<template>
	<b-modal v-model="displaySync" centered hide-footer :title="EquipName(name)">
		<b-container class="table-equip-modal mt-4 mb-3">
			<b-row cols="1" cols-md="2">
				<b-col>
					<div class="position-relative d-inline-block">
						<equip-icon :name="`${name}_${lRarity}`" size="large" />
						<equip-level :level="level" />
					</div>
				</b-col>
				<b-col class="nested">
					<b-row cols="2">
						<b-col class="bg-dark text-white">장비 유형</b-col>
						<b-col>
							{{EquipType}}
							<b-badge v-if="isPrivate" variant="primary">전용장비</b-badge>
						</b-col>
						<b-col class="bg-dark text-white">장비 등급</b-col>
						<b-col>
							<template v-if="RarityList.length === 1">{{raritySync.toUpperCase()}}</template>
							<b-form-select v-else v-model="raritySync" size="sm" :options="RarityList" />
						</b-col>
						<b-col class="bg-dark text-white">장착 제한</b-col>
						<b-col>
							<span v-if="Limits.length === 0" class="text-secondary">-</span>
							<template v-else>
								<span v-for="limit in Limits" :key="`equip-limit-${limit}`">
									<unit-badge v-if="typeof limit === 'string'" :limit="limit" />
									<b-badge v-else variant="primary">{{UnitName(limit)}}</b-badge>
								</span>
							</template>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>

		<b-table-simple bordered fixed table-class="text-center">
			<b-tbody>
				<b-tr>
					<b-th variant="dark">획득처</b-th>
				</b-tr>
				<b-tr>
					<b-td>
						<div v-for="(area, aindex) in Sources" :key="`equip-modal-source-${aindex}`">
							<hr v-if="aindex > 0" class="my-1" />
							<source-badge
								v-for="(source, sindex) in area"
								:key="`equip-modal-drop-${aindex}-${sindex}-${source}`"
								:source="source"
								detail
							/>
						</div>
						<template v-if="Sources.length === 0">
							<span class="text-secondary">획득처 정보 없음 (제조 제외)</span>
						</template>
					</b-td>
				</b-tr>
				<b-tr>
					<b-th variant="dark">강화 레벨 (+{{level}})</b-th>
				</b-tr>
				<b-tr>
					<b-td>
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

import { StatusText } from "@/libs/Status";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import UnitFace from "@/components/UnitFace.vue";
import SourceBadge from "@/components/SourceBadge.vue";

import ElemIcon from "@/components/ElemIcon.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import EquipLevel from "./EquipLevel.vue";

import { Rarity, LRarity } from "@/libs/Types";
import { EquipData, UnitData } from "@/libs/DB";

import EquipNameTable from "@/json/equip-names.json";

@Component({
	components: {
		NodeRenderer,
		UnitBadge,
		UnitFace,
		SourceBadge,

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
		return EquipData.find(x => x.name === `${this.name}_${this.lRarity}`) || null;
	}

	private get RarityList () {
		const list = (["ss", "s", "a", "b"] as LRarity[])
			.filter((x) => _.some(EquipData, (y) => y.name.startsWith(this.name) && y.name.endsWith("_" + x)))
			.map((x) => x.toUpperCase() as Rarity);

		if (!list.includes(this.raritySync))
			this.raritySync = (list[0] || "SS") as Rarity;

		return list.map(x => ({ value: x, text: x }));
	}

	private get Sources () {
		const equip = this.Equip;
		if (!equip) return [];
		return equip.source;
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

.table-equip-modal.container {
	margin-bottom: 0 !important;

	.col {
		margin-bottom: -1px;
		padding: 0.75rem;
		border: 1px solid #dee2e6;
		&.bg-dark {
			border-color: #454d55;
			font-weight: bold;
		}
		&.nested {
			padding: 0;
			border: 0;

			> .row {
				margin: 0;
			}
		}
	}
}
</style>
