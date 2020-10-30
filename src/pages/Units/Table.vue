<template>
	<div class="unit-table">
		<div class="mb-2">
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-secondary" :pressed="PromotionFilter === 0" @click="PromotionFilter = 0"> 승급 보지 않기 </b-button>
				<b-button variant="outline-secondary" :pressed="PromotionFilter === 1" @click="PromotionFilter = 1"> 승급 후 등급 보기 </b-button>
				<b-button variant="outline-secondary" :pressed="PromotionFilter === 2" @click="PromotionFilter = 2"> 승급만 보기 </b-button>
			</b-btn-group>
		</div>

		<div class="mb-2">
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-danger" :pressed="Filters.Rarity[5]" @click="Filters.Rarity[5] = !Filters.Rarity[5]">SS</b-button>
				<b-button variant="outline-danger" :pressed="Filters.Rarity[4]" @click="Filters.Rarity[4] = !Filters.Rarity[4]">S</b-button>
				<b-button variant="outline-danger" :pressed="Filters.Rarity[3]" @click="Filters.Rarity[3] = !Filters.Rarity[3]">A</b-button>
				<b-button variant="outline-danger" :pressed="Filters.Rarity[2]" @click="Filters.Rarity[2] = !Filters.Rarity[2]">B</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-success" :pressed="Filters.Type[0]" @click="Filters.Type[0] = !Filters.Type[0]">경장형</b-button>
				<b-button variant="outline-success" :pressed="Filters.Type[2]" @click="Filters.Type[2] = !Filters.Type[2]">기동형</b-button>
				<b-button variant="outline-success" :pressed="Filters.Type[1]" @click="Filters.Type[1] = !Filters.Type[1]">중장형</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-primary" :pressed="Filters.Role[1]" @click="Filters.Role[1] = !Filters.Role[1]">공격기</b-button>
				<b-button variant="outline-primary" :pressed="Filters.Role[0]" @click="Filters.Role[0] = !Filters.Role[0]">보호기</b-button>
				<b-button variant="outline-primary" :pressed="Filters.Role[2]" @click="Filters.Role[2] = !Filters.Role[2]">지원기</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-2">
				<b-button variant="outline-warning" :pressed="Filters.Body[0]" @click="Filters.Body[0] = !Filters.Body[0]">바이오로이드</b-button>
				<b-button variant="outline-warning" :pressed="Filters.Body[1]" @click="Filters.Body[1] = !Filters.Body[1]">AGS</b-button>
			</b-btn-group>
		</div>

		<div class="mb-4 mx-4">
			<b-input-group>
				<b-input v-model="SearchText" placeholder="전투원 검색" />
				<b-input-group-append>
					<b-button variant="danger" @click="SearchText = ''">지우기</b-button>
				</b-input-group-append>
			</b-input-group>
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
						<b-th>등급</b-th>
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
							<b-th :class="`rarity-${RarityName[rarity]}`">{{ RarityName[rarity] }}</b-th>

							<template v-for="role in RoleList">
								<b-td v-if="Filters.Role[role]" :key="`unit-table-body-${type}-${rarity}-${role}`">
									<unit-card
										v-for="unit in UnitList(rarity, type, role)"
										:key="`unit-table-unit-${type}-${role}-${rarity}-${unit.id}`"
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
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync, Emit } from "vue-property-decorator";

import StoreModule, { UnitTableFilters } from "@/libs/Store";

import RarityBadge from "@/components/RarityBadge.vue";
import UnitFace from "@/components/UnitFace.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import UnitCard from "./UnitCard.vue";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE } from "@/libs/Types/Enums";
import UnitData, { Unit } from "@/libs/DB/Unit";

@Component({
	components: {
		RarityBadge,
		UnitFace,
		UnitBadge,
		UnitCard,
	},
})
export default class UnitsTable extends Vue {
	// Vuex -----
	private get SearchText () {
		return StoreModule.UnitSearchText;
	}

	private set SearchText (value: string) {
		StoreModule.setUnitSearchText(value);
	}

	private get PromotionFilter () {
		return StoreModule.UnitTablePromotionFilter;
	}

	private set PromotionFilter (value: number) {
		StoreModule.setUnitTablePromotionFilter(value);
	}

	private get Filters () {
		return StoreModule.UnitTableFilter;
	}

	private set Filters (value: UnitTableFilters) {
		StoreModule.setUnitTableFilter(value);
	}
	// Vuex -----

	private get RarityName () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private get RarityList (): (keyof UnitTableFilters["Rarity"])[] {
		return [
			ACTOR_GRADE.B,
			ACTOR_GRADE.A,
			ACTOR_GRADE.S,
			ACTOR_GRADE.SS,
		];
	}

	private get TypeList (): (keyof UnitTableFilters["Type"])[] {
		return [
			ACTOR_CLASS.LIGHT,
			ACTOR_CLASS.AIR,
			ACTOR_CLASS.HEAVY,
		];
	}

	private get RoleList (): (keyof UnitTableFilters["Role"])[] {
		return [
			ROLE_TYPE.ATTACKER,
			ROLE_TYPE.DEFENDER,
			ROLE_TYPE.SUPPORTER,
		];
	}

	private UnitList (rarity: ACTOR_GRADE, type: ACTOR_CLASS, role: ROLE_TYPE) {
		if (this.PromotionFilter === 1 || this.PromotionFilter === 2) {
			return UnitData
				.filter((x) => {
					const rarityMatch = (this.PromotionFilter === 1 && x.rarity === rarity) ||
						(x.promotions && x.promotions.includes(rarity));
					return rarityMatch &&
						x.type === type &&
						x.role === role &&
						(
							(x.body === ACTOR_BODY_TYPE.BIOROID && this.Filters.Body[ACTOR_BODY_TYPE.BIOROID]) ||
							(x.body === ACTOR_BODY_TYPE.AGS && this.Filters.Body[ACTOR_BODY_TYPE.AGS])
						);
				});
		} else {
			return _(UnitData)
				.filter(x => x.name.includes(this.SearchText))
				.filter(x => (
					x.rarity === rarity &&
					x.type === type &&
					x.role === role && (
						(x.body === ACTOR_BODY_TYPE.BIOROID && this.Filters.Body[ACTOR_BODY_TYPE.BIOROID]) ||
						(x.body === ACTOR_BODY_TYPE.AGS && this.Filters.Body[ACTOR_BODY_TYPE.AGS])
					)
				));
		}
	}

	private modalUnit (unit: Unit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.id });
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
