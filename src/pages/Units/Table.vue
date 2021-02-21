<template>
	<div class="unit-table">
		<div class="mb-2">
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-secondary" :pressed="PromotionFilter === 0" @click="PromotionFilter = 0">
					<locale k="UNIT_TABLE_FILTERS_PROMOTION_NEVER" />
				</b-button>
				<b-button variant="outline-secondary" :pressed="PromotionFilter === 1" @click="PromotionFilter = 1">
					<locale k="UNIT_TABLE_FILTERS_PROMOTION_WITH" />
				</b-button>
				<b-button variant="outline-secondary" :pressed="PromotionFilter === 2" @click="PromotionFilter = 2">
					<locale k="UNIT_TABLE_FILTERS_PROMOTION_ONLY" />
				</b-button>
			</b-btn-group>
		</div>

		<template v-for="type in TypeList">
			<b-table-simple v-if="Filters.Type[type]" :key="`unit-table-body-${type}`" class="unit-table mb-3" small>
				<b-thead head-variant="dark">
					<b-tr>
						<b-th colspan="4">
							<unit-badge :type="type" transparent size="large" />
						</b-th>
					</b-tr>
					<b-tr>
						<b-th>
							<locale k="COMMON_UNIT_GRADE" />
						</b-th>
						<template v-for="role in RoleList">
							<b-th v-if="Filters.Role[role]" :key="`unit-table-head-${role}`">
								<unit-badge :role="role" transparent size="large" />
							</b-th>
						</template>
					</b-tr>
				</b-thead>
				<b-tbody>
					<template v-for="rarity in RarityList">
						<b-tr v-if="Filters.Rarity[rarity]" :key="`unit-table-body-${type}-${rarity}`">
							<b-th :class="`rarity-${RarityDisplay[rarity]}`">{{ RarityDisplay[rarity] }}</b-th>

							<template v-for="role in RoleList">
								<b-td v-if="Filters.Role[role]" :key="`unit-table-body-${type}-${rarity}-${role}`">
									<unit-card
										v-for="unit in UnitList(rarity, type, role)"
										:key="`unit-table-unit-${type}-${role}-${rarity}-${unit.uid}`"
										class="unit-list-item"
										:unit="unit"
										horizontal
										:rarity="rarity"
										@click="modalUnit(unit)"
									/>
								</b-td>
							</template>
						</b-tr>
					</template>
				</b-tbody>
			</b-table-simple>
		</template>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync, Emit } from "vue-property-decorator";

import StoreModule, { EffectFilterListType, EffectFilterTargetType, UnitDisplayFilters } from "@/libs/Store";

import RarityBadge from "@/components/RarityBadge.vue";
import UnitFace from "@/components/UnitFace.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import UnitCard from "./UnitCard.vue";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR, TARGET_TYPE } from "@/libs/Types/Enums";

import { BuffEffect } from "@/libs/Buffs/BuffEffect";
import { isBuffEffectValid, isPositiveBuffEffectValue } from "@/libs/Buffs/Helper";
import { RarityDisplay } from "@/libs/Const";

@Component({
	components: {
		RarityBadge,
		UnitFace,
		UnitBadge,
		UnitCard,
	},
})
export default class UnitsTable extends Vue {
	@Prop({
		type: Array,
		default: () => [],
	})
	private list!: FilterableUnit[];

	// Vuex -----
	private get SearchText () {
		return StoreModule.UnitSearchText;
	}

	private set SearchText (value: string) {
		StoreModule.setUnitSearchText(value);
	}

	private get PromotionFilter () {
		return StoreModule.UnitDisplayPromotionFilter;
	}

	private set PromotionFilter (value: number) {
		StoreModule.setUnitDisplayPromotionFilter(value);
	}

	private get Filters () {
		return StoreModule.UnitDisplayFilter;
	}

	private set Filters (value: UnitDisplayFilters) {
		StoreModule.setUnitDisplayFilter(value);
	}
	// Vuex -----

	private get RarityDisplay () {
		return RarityDisplay;
	}

	private get RarityList (): (keyof UnitDisplayFilters["Rarity"])[] {
		return [
			ACTOR_GRADE.B,
			ACTOR_GRADE.A,
			ACTOR_GRADE.S,
			ACTOR_GRADE.SS,
		];
	}

	private get TypeList (): (keyof UnitDisplayFilters["Type"])[] {
		return [
			ACTOR_CLASS.LIGHT,
			ACTOR_CLASS.AIR,
			ACTOR_CLASS.HEAVY,
		];
	}

	private get RoleList (): (keyof UnitDisplayFilters["Role"])[] {
		return [
			ROLE_TYPE.ATTACKER,
			ROLE_TYPE.DEFENDER,
			ROLE_TYPE.SUPPORTER,
		];
	}

	private UnitList (rarity: ACTOR_GRADE, type: ACTOR_CLASS, role: ROLE_TYPE) {
		return this.list
			.filter(x => {
				const rarityMatch = this.PromotionFilter === 1
					? (x.rarity === rarity) || (x.promo && x.promo.includes(rarity))
					: this.PromotionFilter === 2
						? x.promo && x.promo.includes(rarity)
						: x.rarity === rarity;

				return rarityMatch && x.type === type && x.role === role;
			});
	}

	private modalUnit (unit: FilterableUnit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.uid });
	}
}
</script>

<style lang="scss">
.unit-table {
	th {
		word-break: keep-all;
	}
	tbody th {
		vertical-align: middle;
	}
	td {
		border: 1px solid #ccc;

		.unit-list-item {
			padding: 2px 8px;
			border-bottom: 1px solid #d8d8d8;
			&:last-child {
				border-bottom: 0;
			}
			&:nth-child(2n) {
				background-color: #f0f0f0;
			}

			img.unit-face {
				display: inline-block;
				margin-right: 8px;
				width: 48px;
			}
			div.unit-name {
				line-height: 120%;
				font-weight: bold;
				font-size: 16px;
			}
			div.unit-flag .badge {
				box-shadow: 0 0 1px #000;
			}
		}
		&:empty::before {
			content: "없음";
			color: #aaa;
		}
	}
}
</style>
