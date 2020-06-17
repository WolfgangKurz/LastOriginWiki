<template>
	<div class="unit-table">
		<div class="mb-3">
			<b-btn-group class="mb-2">
				<b-button
					variant="outline-secondary"
					:pressed="filterPromotionSync"
					@click="filterPromotionSync = !filterPromotionSync"
				>승급 후 등급 포함</b-button>
			</b-btn-group>

			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.ss"
					@click="filterFlags.rarity.ss = !filterFlags.rarity.ss"
				>SS</b-button>
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.s"
					@click="filterFlags.rarity.s = !filterFlags.rarity.s"
				>S</b-button>
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.a"
					@click="filterFlags.rarity.a = !filterFlags.rarity.a"
				>A</b-button>
				<b-button
					variant="outline-danger"
					:pressed="filterFlags.rarity.b"
					@click="filterFlags.rarity.b = !filterFlags.rarity.b"
				>B</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-success"
					:pressed="filterFlags.type.light"
					@click="filterFlags.type.light = !filterFlags.type.light"
				>경장형</b-button>
				<b-button
					variant="outline-success"
					:pressed="filterFlags.type.air"
					@click="filterFlags.type.air = !filterFlags.type.air"
				>기동형</b-button>
				<b-button
					variant="outline-success"
					:pressed="filterFlags.type.heavy"
					@click="filterFlags.type.heavy = !filterFlags.type.heavy"
				>중장형</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-primary"
					:pressed="filterFlags.role.attacker"
					@click="filterFlags.role.attacker = !filterFlags.role.attacker"
				>공격기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="filterFlags.role.defender"
					@click="filterFlags.role.defender = !filterFlags.role.defender"
				>보호기</b-button>
				<b-button
					variant="outline-primary"
					:pressed="filterFlags.role.supporter"
					@click="filterFlags.role.supporter = !filterFlags.role.supporter"
				>지원기</b-button>
			</b-btn-group>
			<b-btn-group class="ml-3 mb-2">
				<b-button
					variant="outline-warning"
					:pressed="filterFlags.body.bioroid"
					@click="filterFlags.body.bioroid = !filterFlags.body.bioroid"
				>바이오로이드</b-button>
				<b-button
					variant="outline-warning"
					:pressed="filterFlags.body.ags"
					@click="filterFlags.body.ags = !filterFlags.body.ags"
				>AGS</b-button>
			</b-btn-group>
		</div>

		<template v-for="type in TypeList">
			<b-table-simple
				v-if="filterFlags.type[type]"
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
							<b-th v-if="filterFlags.role[role]" :key="`unit-table-head-${role}`">
								<unit-badge :role="role" transparent size="large" />
							</b-th>
						</template>
					</b-tr>
				</b-thead>
				<b-tbody>
					<template v-for="rarity in RarityList">
						<b-tr
							v-if="filterFlags.rarity[rarity.toLowerCase()]"
							:key="`unit-table-body-${type}-${rarity}`"
						>
							<b-th :class="`rarity-${rarity}`">{{rarity}}</b-th>

							<template v-for="role in RoleList">
								<b-td v-if="filterFlags.role[role]" :key="`unit-table-body-${type}-${rarity}-${role}`">
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

import RarityBadge from "@/components/RarityBadge.vue";
import UnitFace from "@/components/UnitFace.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import UnitCard from "./UnitCard.vue";

import { UnitData } from "@/DB";
import { Unit, Rarity, UnitType, UnitRole } from "@/Types";

import { CharFilterFlag } from "@/State";

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
		type: Object,
		required: true,
	})
	private filterFlags!: CharFilterFlag;

	@PropSync("filterPromotion", {
		type: Boolean,
		default: false,
	})
	private filterPromotionSync!: boolean;

	private get RarityList (): Rarity[] {
		return ["B", "A", "S", "SS"];
	}

	private get TypeList (): UnitType[] {
		return ["light", "air", "heavy"];
	}

	private get RoleList (): UnitRole[] {
		return ["attacker", "defender", "supporter"];
	}

	private UnitList (rarity: Rarity, type: UnitType, role: UnitRole) {
		if (this.filterPromotionSync) {
			return _.filter(UnitData, (x) => {
				const rarityMatch = x.rarity === rarity || (typeof x.promotions !== "undefined" && x.promotions.includes(rarity));
				return (
					rarityMatch &&
					x.type === type &&
					x.role === role && (
						(x.body === "bio" && this.filterFlags.body.bioroid) ||
						(x.body === "ags" && this.filterFlags.body.ags)
					)
				);
			});
		} else {
			return _.filter(UnitData, x => (
				x.rarity === rarity &&
				x.type === type &&
				x.role === role && (
					(x.body === "bio" && this.filterFlags.body.bioroid) ||
					(x.body === "ags" && this.filterFlags.body.ags)
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
