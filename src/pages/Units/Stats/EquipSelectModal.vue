<template>
	<b-modal v-model="displaySync" hide-footer size="md" modal-class="equip-select-modal">
		<template #modal-title>장비 선택</template>

		<!-- 필터 -->
		<b-row>
			<b-col class="mb-3">
				<b-select :options="RarityList" v-model="rarity" />
			</b-col>
			<b-col class="mb-3">
				<b-select :options="LevelList" v-model="equipLevel" />
			</b-col>
		</b-row>

		<b-row class="justify-content-center">
			<b-col cols="8" class="mb-4">
				<b-dropdown variant="outline-dark">
					<template #button-content>
						<template v-if="SelectedEquipGroup === ''">장비를 선택해주세요.</template>
						<template v-else>
							<equip-icon :name="`${SelectedEquipGroup}_${rarity}`" size="40" class="mr-2" />
							{{EquipNames[SelectedEquipGroup]}}
							<rarity-badge class="ml-1" :rarity="rarity.toUpperCase()" border />
							<b-badge v-if="equipLevel > 0" variant="info">+ {{equipLevel}}</b-badge>
						</template>
					</template>
					<b-dropdown-item
						v-for="group in EquipGroups"
						:key="`simulation-equip-select-modal-${group}`"
						@click="SelectEquipGroup(group)"
					>
						<equip-icon :name="`${group}_ss`" size="40" class="mr-2" />
						<span class="d-inline-block mr-2">{{EquipNames[group]}}</span>
					</b-dropdown-item>
				</b-dropdown>
			</b-col>
			<b-col v-if="StatusList" cols="12" class="mb-3">
				<b-list-group class="text-left">
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
			</b-col>
			<b-col cols="12">
				<b-btn-group>
					<b-button variant="primary" @click="Select(SelectedEquipGroup)">장비 선택</b-button>
					<b-button variant="secondary" @click="Select('')">장비 해제</b-button>
				</b-btn-group>
			</b-col>
		</b-row>
	</b-modal>
</template>

<script lang="ts">
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync, Ref } from "vue-property-decorator";

import NodeRenderer from "@/components/NodeRenderer.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import ElemIcon from "@/components/ElemIcon.vue";

import EquipNameTable from "@/json/equip-names.json";

import { EquipData, UnitData } from "@/libs/DB";
import { Equip, LRarity, EquipType } from "@/libs/Types";
import { StatusText } from "@/libs/Status";

@Component({
	components: {
		NodeRenderer,
		RarityBadge,
		EquipIcon,
		ElemIcon,
	},
})
export default class EquipSelectModal extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	@Prop({
		type: String,
		default: "",
	})
	private name!: string;

	@Prop({
		type: Number,
		default: 0,
	})
	private level!: number;

	@Prop({
		type: String,
		default: "",
	})
	private type!: EquipType;

	@Prop({
		type: Number,
		default: 0,
	})
	private target!: number;

	private SelectedEquipGroup: string = "";
	private rarity: LRarity = "ss";
	private equipLevel: number = 10;

	@Watch("display", { immediate: true })
	private DisplayWatch (value: boolean) {
		if (!value) {
			this.SelectedEquipGroup = "";
			this.rarity = "ss";
		} else if (this.name) {
			const name = this.name.substr(0, this.name.lastIndexOf("_"));
			const rarity = this.name.substr(this.name.lastIndexOf("_") + 1) as LRarity;
			this.SelectedEquipGroup = name;
			this.rarity = rarity || "ss";
			this.equipLevel = this.level;
		}
	}

	private get LevelList () {
		return new Array(11)
			.fill(0)
			.map((x, i) => ({
				value: i,
				text: `+ ${i}`,
			}));
	}

	private get RarityList () {
		const list = (["ss", "s", "a", "b"] as LRarity[])
			.map(x => ({ value: x, text: x.toUpperCase() }));

		const name = this.SelectedEquipGroup;
		if (name === "") return list;

		const rarities = EquipData
			.filter(x => name === x.name.substr(0, x.name.lastIndexOf("_")))
			.map(x => x.name.substr(x.name.lastIndexOf("_") + 1));

		const output = list.filter(x => rarities.includes(x.value));
		if (!output.some(x => x.value === this.rarity)) this.rarity = output[0].value;
		return output;
	}

	private get EquipNames () {
		return EquipNameTable;
	}

	private get EquipGroups () {
		const group = _.groupBy(EquipData, (x) => x.name.substr(0, x.name.lastIndexOf("_")));
		return _
			.keys(group)
			.filter(x => {
				const baseType = x.substr(0, x.indexOf("_"));
				const first = _.first(group[x]);
				if (!first) return false;

				if (this.target && first.limit) {
					const u = UnitData[this.target];
					let ret = false;

					for (const y of first.limit) {
						if (typeof y === "number") {
							if (y === u.id) {
								ret = true;
								break;
							}
						} else {
							const _ = y.split("+")
								.map(z => {
									switch (z) {
										case "light":
										case "air":
										case "heavy":
											return u.type === z;
										case "attacker":
										case "defender":
										case "supporter":
											return u.role === z;
									}
									return false;
								})
								.every(z => z);

							if (_) {
								ret = true;
								break;
							}
						}
					}
					if (!ret) return false;
				}

				if (baseType !== "chip" && this.type === "Chip") return false;
				if (baseType !== "os" && this.type === "OS") return false;
				if (baseType !== "item" && this.type === "Public") return false;

				return true;
			});
	}

	private get StatusList () {
		if (!this.SelectedEquipGroup) return null;

		const equip = EquipData.filter(x => x.name === `${this.SelectedEquipGroup}_${this.rarity}`)[0];
		const stat = equip.stats[this.equipLevel];
		return stat.map(x => StatusText(this, x));
	}

	private SelectEquipGroup (group: string) {
		this.SelectedEquipGroup = group;
	}

	private Select (group: string) {
		if (group === "")
			this.$emit("select", "", "ss", 10);
		else
			this.$emit("select", group, this.rarity, this.equipLevel);
	}
}
</script>

<style lang="scss">
.equip-select-modal {
	.dropdown-menu {
		max-height: 240px;
		overflow-y: auto;
	}
}
</style>
