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
						<template v-if="!SelectedEquip.key">장비를 선택해주세요.</template>
						<template v-else>
							<equip-icon :id="SelectedEquip.fullKey" size="40" class="mr-2" />
							{{ SelectedEquipName }}
							<rarity-badge class="ml-1" :rarity="SelectedEquip.rarity" border />
							<b-badge v-if="equipLevel > 0" variant="info">+ {{ equipLevel }}</b-badge>
						</template>
					</template>
					<b-dropdown-item
						v-for="group in EquipGroups"
						:key="`simulation-equip-select-modal-${group.baseKey}`"
						@click="SelectEquipGroup(group.baseKey)"
					>
						<equip-icon :id="group.fullKey" size="40" class="mr-2" />
						<span class="d-inline-block mr-2">{{ group.name }}</span>
					</b-dropdown-item>
				</b-dropdown>
			</b-col>
			<b-col v-if="EffectList" cols="12" class="mb-3">
				<b-list-group class="text-left">
					<b-list-group-item v-for="(status, idx) in EffectList" :key="`status-line-${idx}`">
						<node-renderer :elem="status" />
						<!--
						<div v-if="status.unknown" class="unknown-status float-right" title="정확하지 않을 수 있습니다" v-b-tooltip.hover.left>
							&#x26A0;
						</div>
						-->
					</b-list-group-item>
				</b-list-group>
			</b-col>
			<b-col cols="12">
				<b-btn-group>
					<b-button variant="primary" @click="Select(SelectedEquip)">장비 선택</b-button>
					<b-button variant="secondary" @click="Select(null)">장비 해제</b-button>
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

import { EquipData, UnitData } from "@/libs/DB";
import { Equip, Rarity, EquipType } from "@/libs/Types";
import EquipStatus from "@/libs/Equips/EquipStatus";

import NodeRenderer from "@/components/NodeRenderer.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import ElemIcon from "@/components/ElemIcon.vue";

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
		type: Object,
		default: null,
	})
	private equip!: Equip;

	@Prop({
		type: Number,
		default: 10,
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

	private rarity: Rarity = "SS";
	private SelectedEquip: Equip = Equip.Empty;
	private equipLevel: number = 10;

	@Watch("display", { immediate: true })
	private DisplayWatch (value: boolean) {
		if (!value)
			this.SelectedEquip = Equip.Empty;
		else if (this.equip) {
			this.SelectedEquip = this.equip;
			this.equipLevel = this.level;
		}
	}

	@Watch("rarity")
	private DisplayRarity () {
		const e = this.SelectedEquip;
		this.SelectEquipGroup(`${e.type}_${e.key}`);
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
		const list = (["SS", "S", "A", "B"] as Rarity[])
			.map(x => ({ value: x, text: x }));

		if (!this.SelectedEquip.key) return list;

		const key = this.SelectedEquip.key;
		const type = this.SelectedEquip.type;

		const base = `${type}_${key}_T`;
		const rarityList = ["", "B", "A", "S", "SS"];

		const rarities = EquipData
			.filter(x => x.key === key && x.type === type)
			.map(x => x.rarity)
			.map(x => ({ value: x, text: x }));

		return rarities;
	}

	private get EquipGroups () {
		const group = _.groupBy(EquipData, (x) => `${x.type}_${x.key}`);
		return Object.keys(group)
			.map(x => group[x])
			.filter(x_ => {
				const first = x_[0];
				const type = first.type;
				const key = first.key;

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

				if (type !== "Chip" && this.type === "Chip") return false;
				if (type !== "OS" && this.type === "OS") return false;
				if (type !== "Item" && this.type === "Public") return false;

				return true;
			})
			.map(x_ => {
				const rarityList = ["", "B", "A", "S", "SS"];
				const last = [...x_].sort((a, b) => rarityList.indexOf(b.rarity) - rarityList.indexOf(a.rarity))[0];
				const type = {
					Chip: "Chip",
					OS: "System",
					Item: "Sub",
				}[last.type];
				const key = last.key;
				const rarityIdx = rarityList.indexOf(last.rarity);

				return {
					fullKey: `${type}_${key}_T${rarityIdx}`,
					baseKey: `${type}_${key}`,
					name: last.name.replace(/ (RE|MP|SP|EX)$/, ""),
				};
			});
	}

	private get EffectList () {
		if (!this.SelectedEquip.key) return null;

		const stats = this.SelectedEquip.stats[this.equipLevel];
		return stats.reduce((p, c) => [...p, ...EquipStatus(this, c)], [] as JSX.Element[]);
	}

	private get SelectedEquipName () {
		if (!this.SelectedEquip.key) return "";
		return this.SelectedEquip.name.replace(/ (RE|MP|SP|EX)$/, "");
	}

	private SelectEquipGroup (group: string) {
		const rarityList = ["", "B", "A", "S", "SS"];
		const grp = EquipData
			.filter(x => {
				const type = {
					Chip: "Chip",
					OS: "System",
					Item: "Sub",
				}[x.type];
				return `${type}_${x.key}` === group;
			})
			.sort((a, b) => rarityList.indexOf(b.rarity) - rarityList.indexOf(a.rarity));

		if (grp.length === 0) return;
		if (this.SelectedEquip) {
			const rarity = this.rarity;
			const match = grp.find(x => x.rarity === rarity);
			if (match)
				this.SelectedEquip = match;
			else
				this.SelectedEquip = grp[0];
		}
	}

	private Select (equip: Equip | null) {
		if (!equip)
			this.$emit("select", Equip.Empty, 10);
		else
			this.$emit("select", equip, this.equipLevel);
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
