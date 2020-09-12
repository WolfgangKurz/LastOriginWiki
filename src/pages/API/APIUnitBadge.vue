<template>
	<b-card class="api-unit-badge" header="전투원 뱃지">
		<!-- 필터 -->
		<div class="mb-3">
			<b-btn-group class="ml-3 mb-2">
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
			<b-btn-group class="ml-3 mb-2">
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
			<b-btn-group class="ml-3 mb-2">
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
		</div>

		<b-dropdown class="d-inline-block mx-2" variant="outline-dark">
			<template #button-content>
				<template v-if="SelectedUnit === null">전투원을 선택해주세요.</template>
				<template v-else>
					<unit-face :id="SelectedUnit.id" size="40" class="mr-2" />
					{{SelectedUnit.name}}
				</template>
			</template>
			<b-dropdown-item
				v-for="unit in UnitList"
				:key="`simulation-unit-select-modal-${unit.id}`"
				@click="SelectedUnit = unit"
			>
				<unit-face :id="unit.id" size="40" class="mr-2" />
				<span class="d-inline-block mr-2">{{unit.name}}</span>
			</b-dropdown-item>
		</b-dropdown>
		<b-check class="d-inline-block mx-2" v-model="isSD">SD 아이콘</b-check>
		<img class="d-inline-block mx-2" :src="badgeURL" />

		<b-input class="mt-2" v-model="badgeURL" readonly />
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { UnitData } from "@/libs/DB";
import { UnitTableFilters } from "@/libs/Store";
import { Unit } from "@/libs/Types";

import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		UnitFace,
	},
})
export default class APIUnitBadge extends Vue {
	private SelectedUnit: Unit | null = null;

	private isSD: boolean = false;

	private Filters: UnitTableFilters = {
		Rarity: {
			SS: true,
			S: true,
			A: true,
			B: true,
		},
		Type: {
			Light: true,
			Air: true,
			Heavy: true,
		},
		Role: {
			Attacker: true,
			Defender: true,
			Supporter: true,
		},
		Body: {
			Bioroid: true,
			AGS: true,
		},
	};

	private get badgeURL () {
		if (!this.SelectedUnit) return "";

		const loc = window.location;
		return `${loc.origin}/api/${this.isSD ? "sd" : "unit"}/${this.SelectedUnit.shortname}`;
	}

	private get UnitList () {
		const list = Object.values(UnitData)
			.filter(x => {
				if (!this.Filters.Rarity.SS && x.rarity === "SS") return false;
				if (!this.Filters.Rarity.S && x.rarity === "S") return false;
				if (!this.Filters.Rarity.A && x.rarity === "A") return false;
				if (!this.Filters.Rarity.B && x.rarity === "B") return false;

				if (!this.Filters.Type.Light && x.type === "light") return false;
				if (!this.Filters.Type.Air && x.type === "air") return false;
				if (!this.Filters.Type.Heavy && x.type === "heavy") return false;

				if (!this.Filters.Role.Attacker && x.role === "attacker") return false;
				if (!this.Filters.Role.Defender && x.role === "defender") return false;
				if (!this.Filters.Role.Supporter && x.role === "supporter") return false;
				/*
				if (!this.Filters.body.bioroid && x.body === "bio") return false;
				if (!this.Filters.body.ags && x.body === "ags") return false;
				*/
				return true;
			});

		const unit = this.SelectedUnit;
		if (unit && !list.some(x => x.id === unit.id))
			this.SelectedUnit = null;

		return list;
	}
}
</script>

<style lang="scss">
.api-unit-badge {
	.dropdown-menu {
		max-height: 400px;
		overflow-y: auto;
	}
}
</style>
