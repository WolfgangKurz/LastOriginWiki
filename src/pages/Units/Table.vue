<template>
	<div class="unit-table">
		<div>
			<b-btn-group class="mx-2 mb-4">
				<b-button
					variant="outline-secondary"
					:pressed="IncludePromotions"
					@click="IncludePromotions = !IncludePromotions"
				>승급 후 등급 포함</b-button>
			</b-btn-group>

			<b-btn-group class="mx-2 mb-4">
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.SS"
					@click="Filters.Rarity.SS = !Filters.Rarity.SS"
				>SS</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.S"
					@click="Filters.Rarity.S = !Filters.Rarity.S"
				>S</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.A"
					@click="Filters.Rarity.A = !Filters.Rarity.A"
				>A</b-button>
				<b-button
					variant="outline-danger"
					:pressed="Filters.Rarity.B"
					@click="Filters.Rarity.B = !Filters.Rarity.B"
				>B</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-4">
				<b-button
					variant="outline-success"
					:pressed="Filters.Type.Light"
					@click="Filters.Type.Light = !Filters.Type.Light"
				>경장형</b-button>
				<b-button
					variant="outline-success"
					:pressed="Filters.Type.Air"
					@click="Filters.Type.Air = !Filters.Type.Air"
				>기동형</b-button>
				<b-button
					variant="outline-success"
					:pressed="Filters.Type.Heavy"
					@click="Filters.Type.Heavy = !Filters.Type.Heavy"
				>중장형</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-4">
				<b-button
					variant="outline-primary"
					:pressed="Filters.Role.Attacker"
					@click="Filters.Role.Attacker = !Filters.Role.Attacker"
				>공격기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="Filters.Role.Defender"
					@click="Filters.Role.Defender = !Filters.Role.Defender"
				>보호기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="Filters.Role.Supporter"
					@click="Filters.Role.Supporter = !Filters.Role.Supporter"
				>지원기</b-button>
			</b-btn-group>
			<b-btn-group class="mx-2 mb-4">
				<b-button
					variant="outline-warning"
					:pressed="Filters.Body.Bioroid"
					@click="Filters.Body.Bioroid = !Filters.Body.Bioroid"
				>바이오로이드</b-button>
				<b-button
					variant="outline-warning"
					:pressed="Filters.Body.AGS"
					@click="Filters.Body.AGS = !Filters.Body.AGS"
				>AGS</b-button>
			</b-btn-group>
		</div>

		<b-row class="mb-4 mx-4">
			<b-col>
				<b-input v-model="SearchText" placeholder="전투원 검색" />
			</b-col>
			<b-col cols="auto">
				<b-button variant="danger" @click="SearchText = ''">지우기</b-button>
			</b-col>
		</b-row>

		<template v-for="type in TypeList">
			<b-table-simple
				v-if="Filters.Type[type]"
				:key="`unit-table-body-${type}`"
				class="unit-table mb-3"
				small
			>
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
							<b-th :class="`rarity-${rarity}`">{{rarity}}</b-th>

							<template v-for="role in RoleList">
								<b-td v-if="Filters.Role[role]" :key="`unit-table-body-${type}-${rarity}-${role}`">
									<unit-card
										v-for="unit in UnitList(rarity, type, role)"
										:key="`unit-table-unit-${type}-${role}-${rarity}-${unit.id}`"
										class="unit-list-item"
										:unit="unit"
										horizontal
										:promoted="unit.rarity !== rarity"
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

import { UnitData } from "@/libs/DB";
import { Unit, Rarity, UnitType, UnitRole } from "@/libs/Types";

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

	private get IncludePromotions () {
		return StoreModule.UnitTablePromotions;
	}

	private set IncludePromotions (value: boolean) {
		StoreModule.setUnitTablePromotions(value);
	}

	private get Filters () {
		return StoreModule.UnitTableFilter;
	}

	private set Filters (value: UnitTableFilters) {
		StoreModule.setUnitTableFilter(value);
	}
	// Vuex -----

	private get RarityList (): (keyof UnitTableFilters["Rarity"])[] {
		return ["B", "A", "S", "SS"];
	}

	private get TypeList (): (keyof UnitTableFilters["Type"])[] {
		return ["Light", "Air", "Heavy"];
	}

	private get RoleList (): (keyof UnitTableFilters["Role"])[] {
		return ["Attacker", "Defender", "Supporter"];
	}

	private UnitList (rarity: Rarity, type: UnitType, role: UnitRole) {
		if (this.IncludePromotions) {
			return _.filter(UnitData, (x) => {
				const rarityMatch = x.rarity === rarity || (typeof x.promotions !== "undefined" && x.promotions.includes(rarity));
				return (
					rarityMatch &&
					x.type === type.toLowerCase() &&
					x.role === role.toLowerCase() && (
						(x.body === "bio" && this.Filters.Body.Bioroid) ||
						(x.body === "ags" && this.Filters.Body.AGS)
					)
				);
			});
		} else {
			return _(UnitData)
				.filter(x => x.name.includes(this.SearchText))
				.filter(x => (
					x.rarity === rarity &&
					x.type === type.toLowerCase() &&
					x.role === role.toLowerCase() && (
						(x.body === "bio" && this.Filters.Body.Bioroid) ||
						(x.body === "ags" && this.Filters.Body.AGS)
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
