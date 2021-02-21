<template>
	<b-modal v-model="displaySync" hide-footer size="md" modal-class="equip-select-modal">
		<template #modal-title><locale k="UNIT_STATUS_EQUIP_SELECT_TITLE" /></template>

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
			<b-col class="mb-4">
				<b-dropdown variant="outline-dark">
					<template #button-content>
						<template v-if="!SelectedEquip">
							<locale k="UNIT_STATUS_EQUIP_SELECT_DESC" />
						</template>
						<template v-else>
							<equip-icon :image="SelectedEquip.icon" size="40" class="mr-2" />
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
						<equip-icon :image="group.icon" size="40" class="mr-2" />
						<span class="d-inline-block mr-2">{{ group.name }}</span>
					</b-dropdown-item>
				</b-dropdown>
			</b-col>
			<b-col v-if="EffectList" cols="12" class="mb-3">
				<buff-list v-if="SelectedEquipData && EffectList.length > 0" :list="EffectList" :level="equipLevel" />
			</b-col>
			<b-col cols="12">
				<b-btn-group>
					<b-button variant="primary" @click="Select(SelectedEquip)">
						<locale k="UNIT_STATUS_EQUIP_SELECT" />
					</b-button>
					<b-button variant="secondary" @click="Select(null)">
						<locale k="UNIT_STATUS_EQUIP_DESELECT" />
					</b-button>
				</b-btn-group>
			</b-col>
		</b-row>
	</b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync, Ref } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import { ACTOR_CLASS, ACTOR_GRADE, ITEM_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import { FilterableEquip } from "@/libs/Types/Equip.Filterable";
import { EquipItem } from "@/libs/Types/Equip";

import FilterableUnitDB from "@/libs/DB/Unit.Filterable";
import FilterableEquipDB from "@/libs/DB/Equip.Filterable";
import { EquipItemDB } from "@/libs/DB/Equip";

import EquipStatus from "@/libs/Buffs/BuffStatus";

import RarityBadge from "@/components/RarityBadge.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import ElemIcon from "@/components/ElemIcon.vue";

import BuffList from "@/components/BuffList";

import { groupBy } from "@/libs/Functions";
import { RarityDisplay } from "@/libs/Const";

@Component({
	components: {
		RarityBadge,
		EquipIcon,
		ElemIcon,

		BuffList,
	},
})
export default class EquipSelectModal extends Vue {
	private SelectedEquipData: EquipItem | null = null;

	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	@Prop({
		type: Object,
		default: null,
	})
	private equip!: FilterableEquip;

	@Prop({
		type: Number,
		default: 10,
	})
	private level!: number;

	@Prop({
		type: Number,
		default: ITEM_TYPE.CHIP,
	})
	private type!: ITEM_TYPE;

	@Prop({
		type: String,
		default: 0,
	})
	private target!: string;

	private rarity: ACTOR_GRADE = ACTOR_GRADE.SS;
	private SelectedEquip: FilterableEquip | null = null;
	private equipLevel: number = 10;

	@Watch("display", { immediate: true })
	private DisplayWatch (value: boolean) {
		this.SelectedEquipData = null;

		if (!value)
			this.SelectedEquip = null;
		else if (this.equip) {
			this.SelectedEquip = this.equip;
			this.equipLevel = this.level;
		}
		this.$forceUpdate();
	}

	@Watch("rarity")
	private DisplayRarity () {
		const e = this.SelectedEquip;
		this.SelectEquipGroup(e ? `${e.type}_${e.key}` : null);
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
		const list = [
			ACTOR_GRADE.B,
			ACTOR_GRADE.A,
			ACTOR_GRADE.S,
			ACTOR_GRADE.SS,
		].map(x => ({ value: x, text: RarityDisplay[x] }));
		if (!this.SelectedEquip) return list;

		const key = this.SelectedEquip.key;
		const type = this.SelectedEquip.type;

		const base = `${type}_${key}_T`;
		const rarities = FilterableEquipDB
			.filter(x => x.key === key && x.type === type)
			.map(x => x.rarity)
			.map(x => ({ value: x, text: RarityDisplay[x] }));

		return rarities;
	}

	private get EquipGroups () {
		const group = groupBy(FilterableEquipDB, (x) => `${x.type}_${x.key}`);
		return Object.keys(group)
			.map(x => group[x])
			.filter(x_ => {
				const first = x_[0];
				const type = first.type;
				const key = first.key;

				if (this.target && first.limit) {
					const u = FilterableUnitDB.find(x => x.uid === this.target);
					if (!u) return false;
					let ret = false;

					for (const y of first.limit) {
						if (y === u.uid) {
							ret = true;
							break;
						} else {
							const _ = y.split("+")
								.map(z => {
									switch (z) {
										case "Light": return u.type === ACTOR_CLASS.LIGHT;
										case "Air": return u.type === ACTOR_CLASS.AIR;
										case "Heavy": return u.type === ACTOR_CLASS.HEAVY;
										case "Attacker": return u.role === ROLE_TYPE.ATTACKER;
										case "Defender": return u.role === ROLE_TYPE.DEFENDER;
										case "Supporter": return u.role === ROLE_TYPE.SUPPORTER;
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

				if (type !== ITEM_TYPE.CHIP && this.type === ITEM_TYPE.CHIP) return false;
				if (type !== ITEM_TYPE.SPCHIP && this.type === ITEM_TYPE.SPCHIP) return false;
				if (type !== ITEM_TYPE.SUBEQ && this.type === ITEM_TYPE.SUBEQ) return false;

				return true;
			})
			.map(x_ => {
				const rarityList = ["", "B", "A", "S", "SS"];
				const last = [...x_].sort((a, b) => b.rarity - a.rarity)[0];
				const type = ({
					[ITEM_TYPE.CHIP]: "Chip",
					[ITEM_TYPE.SPCHIP]: "System",
					[ITEM_TYPE.SUBEQ]: "Sub",
				} as Record<ITEM_TYPE, string>)[last.type];
				const key = last.key;

				return {
					fullKey: `${type}_${key}_T${last.rarity - 1}`,
					baseKey: `${type}_${key}`,
					name: LocaleGet(`EQUIP_${last.fullKey}`).replace(/ (RE|MP|SP|EX)$/, ""),
					icon: last.icon,
				};
			});
	}

	private get EffectList () {
		if (!this.SelectedEquip) return null;

		if (this.SelectedEquipData)
			return this.SelectedEquipData.stats[this.equipLevel];

		const prev = EquipItemDB(this.SelectedEquip.fullKey, x => (this.SelectedEquipData = x));
		if (prev) {
			this.SelectedEquipData = prev;
			return prev.stats[this.equipLevel];
		}

		return null;
	}

	private get SelectedEquipName () {
		if (!this.SelectedEquip) return "";
		return LocaleGet(`EQUIP_${this.SelectedEquip.fullKey}`)
			.replace(/ (RE|MP|SP|EX)$/, "");
	}

	private SelectEquipGroup (group: string | null) {
		if (!group) return;

		const grp = FilterableEquipDB
			.filter(x => {
				const type = ({
					[ITEM_TYPE.CHIP]: "Chip",
					[ITEM_TYPE.SPCHIP]: "System",
					[ITEM_TYPE.SUBEQ]: "Sub",
				} as Record<ITEM_TYPE, string>)[x.type];
				return `${type}_${x.key}` === group;
			})
			.sort((a, b) => b.rarity - a.rarity);

		if (grp.length === 0) return;
		if (this.SelectedEquip)
			this.SelectedEquipData = null;

		const match = grp.find(x => x.rarity === this.rarity);
		if (match)
			this.SelectedEquip = match;
		else {
			this.SelectedEquip = grp[0];
			this.rarity = grp[0].rarity;
		}
	}

	private Select (equip: FilterableEquip | null) {
		if (!this.SelectedEquipData) return;

		if (!equip)
			this.$emit("select", null);
		else
			this.$emit("select", equip, this.equipLevel, this.SelectedEquipData);
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
