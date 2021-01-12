<template>
	<lazy-data-base :data="DB">
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
					<buff-list v-if="EffectList.length > 0" :list="EffectList" :level="equipLevel" />
				</b-col>
				<b-col cols="12">
					<b-btn-group>
						<b-button variant="primary" @click="Select(SelectedEquip)">장비 선택</b-button>
						<b-button variant="secondary" @click="Select(null)">장비 해제</b-button>
					</b-btn-group>
				</b-col>
			</b-row>
		</b-modal>
	</lazy-data-base>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync, Ref } from "vue-property-decorator";

import { ACTOR_CLASS, ACTOR_GRADE, ITEM_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";

import LazyLoad, { LazyDataType } from "@/libs/LazyData";
import FilterableUnitDB, { FilterableUnit } from "@/libs/DB/Unit.Filterable";
import EquipDB, { Equip } from "@/libs/DB/Equip";

import EquipStatus from "@/libs/Buffs/BuffStatus";

import RarityBadge from "@/components/RarityBadge.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import ElemIcon from "@/components/ElemIcon.vue";

import BuffList from "@/components/BuffList";

import { groupBy } from "@/libs/Functions";
interface DBData {
	FilterableUnit: FilterableUnit[];
	Equip: Equip[];
}

@Component({
	components: {
		RarityBadge,
		EquipIcon,
		ElemIcon,

		BuffList,
	},
})
export default class EquipSelectModal extends Vue {
	private DB: LazyDataType<DBData> = null;
	private InitialDB () {
		this.DB = null;

		LazyLoad(
			r => {
				const FilterableUnit = r[0] as FilterableUnit[];
				const Equip = r[1] as Equip[];

				if (!FilterableUnit) return (this.DB = false);
				if (!Equip) return (this.DB = false);

				this.DB = {
					FilterableUnit,
					Equip,
				};
			},
			cb => FilterableUnitDB(x => cb(x)),
			cb => EquipDB(x => cb(x)),
		);
	}

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
		if (!this.DB) return [];

		const table = {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};

		const list = [
			ACTOR_GRADE.B,
			ACTOR_GRADE.A,
			ACTOR_GRADE.S,
			ACTOR_GRADE.SS,
		].map(x => ({ value: x, text: table[x] }));
		if (!this.SelectedEquip.key) return list;

		const key = this.SelectedEquip.key;
		const type = this.SelectedEquip.type;

		const base = `${type}_${key}_T`;
		const rarityList = ["", "B", "A", "S", "SS"];

		const rarities = this.DB.Equip
			.filter(x => x.key === key && x.type === type)
			.map(x => x.rarity)
			.map(x => ({ value: x, text: table[x] }));

		return rarities;
	}

	private get EquipGroups () {
		const db = this.DB;
		if (!db) return [];

		const group = groupBy(db.Equip, (x) => `${x.type}_${x.key}`);
		return Object.keys(group)
			.map(x => group[x])
			.filter(x_ => {
				const first = x_[0];
				const type = first.type;
				const key = first.key;

				if (this.target && first.limit) {
					const u = db.FilterableUnit.find(x => x.uid === this.target);
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
					name: last.name.replace(/ (RE|MP|SP|EX)$/, ""),
					icon: last.icon,
				};
			});
	}

	private get EffectList () {
		if (!this.SelectedEquip.key) return null;

		return this.SelectedEquip.stats[this.equipLevel];
	}

	private get SelectedEquipName () {
		if (!this.SelectedEquip.key) return "";
		return this.SelectedEquip.name.replace(/ (RE|MP|SP|EX)$/, "");
	}

	private SelectEquipGroup (group: string) {
		if (!this.DB) return;

		const grp = this.DB.Equip
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
			this.$emit("select", { ...Equip.Empty, type: this.type }, 10);
		else
			this.$emit("select", equip, this.equipLevel);
	}

	private mounted () {
		this.InitialDB();
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
