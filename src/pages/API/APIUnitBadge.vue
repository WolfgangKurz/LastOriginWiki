<template>
	<b-card class="api-unit-badge" header="전투원 뱃지">
		<!-- 필터 -->
		<div class="mb-3">
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
		</div>

		<b-dropdown class="d-inline-block mx-2" variant="outline-dark">
			<template #button-content>
				<template v-if="SelectedUnit === null">전투원을 선택해주세요.</template>
				<template v-else>
					<unit-face :uid="SelectedUnit.uid" size="40" class="mr-2" />
					{{ SelectedUnit.name }}
				</template>
			</template>
			<b-dropdown-item v-for="unit in UnitList" :key="`simulation-unit-select-modal-${unit.uid}`" @click="SelectedUnit = unit">
				<unit-face :uid="unit.uid" size="40" class="mr-2" />
				<span class="d-inline-block mr-2">{{ unit.name }}</span>
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

import { UnitDisplayFilters } from "@/libs/Store";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR } from "@/libs/Types/Enums";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import FilterableUnitDB from "@/libs/DB/Unit.Filterable";

import UnitFace from "@/components/UnitFace.vue";

@Component({
	components: {
		UnitFace,
	},
})
export default class APIUnitBadge extends Vue {
	private SelectedUnit: FilterableUnit | null = null;

	private isSD: boolean = false;

	private Filters: UnitDisplayFilters = {
		Rarity: {
			[ACTOR_GRADE.B]: true,
			[ACTOR_GRADE.A]: true,
			[ACTOR_GRADE.S]: true,
			[ACTOR_GRADE.SS]: true,
		},
		Type: {
			[ACTOR_CLASS.LIGHT]: true,
			[ACTOR_CLASS.AIR]: true,
			[ACTOR_CLASS.HEAVY]: true,
		},
		Role: {
			[ROLE_TYPE.ATTACKER]: true,
			[ROLE_TYPE.DEFENDER]: true,
			[ROLE_TYPE.SUPPORTER]: true,
		},
		Body: {
			[ACTOR_BODY_TYPE.BIOROID]: true,
			[ACTOR_BODY_TYPE.AGS]: true,
			[ACTOR_BODY_TYPE.SUMMON]: false,
			[ACTOR_BODY_TYPE.TOTEM]: false,
		},
		Skill: [
			{
				Elem: {
					[SKILL_ATTR.PHYSICS]: true,
					[SKILL_ATTR.FIRE]: true,
					[SKILL_ATTR.ICE]: true,
					[SKILL_ATTR.LIGHTNING]: true,
				},
				GridType: 0,
				DismissGuardType: 0,
			},
			{
				Elem: {
					[SKILL_ATTR.PHYSICS]: true,
					[SKILL_ATTR.FIRE]: true,
					[SKILL_ATTR.ICE]: true,
					[SKILL_ATTR.LIGHTNING]: true,
				},
				GridType: 0,
				DismissGuardType: 0,
			},
		],
		Effects: [],
		EffectTarget: [],
	};

	private get badgeURL () {
		if (!this.SelectedUnit) return "";

		const loc = window.location;
		return `${loc.origin}/api/${this.isSD ? "sd" : "unit"}/${this.SelectedUnit.shortname}`;
	}

	private get UnitList () {
		const list = Object.values(FilterableUnitDB)
			.filter(x => {
				if (!this.Filters.Rarity[ACTOR_GRADE.SS] && x.rarity === ACTOR_GRADE.SS) return false;
				if (!this.Filters.Rarity[ACTOR_GRADE.S] && x.rarity === ACTOR_GRADE.S) return false;
				if (!this.Filters.Rarity[ACTOR_GRADE.A] && x.rarity === ACTOR_GRADE.A) return false;
				if (!this.Filters.Rarity[ACTOR_GRADE.B] && x.rarity === ACTOR_GRADE.B) return false;

				if (!this.Filters.Type[ACTOR_CLASS.LIGHT] && x.type === ACTOR_CLASS.LIGHT) return false;
				if (!this.Filters.Type[ACTOR_CLASS.AIR] && x.type === ACTOR_CLASS.AIR) return false;
				if (!this.Filters.Type[ACTOR_CLASS.HEAVY] && x.type === ACTOR_CLASS.HEAVY) return false;

				if (!this.Filters.Role[ROLE_TYPE.ATTACKER] && x.role === ROLE_TYPE.ATTACKER) return false;
				if (!this.Filters.Role[ROLE_TYPE.DEFENDER] && x.role === ROLE_TYPE.DEFENDER) return false;
				if (!this.Filters.Role[ROLE_TYPE.SUPPORTER] && x.role === ROLE_TYPE.SUPPORTER) return false;
				/*
				if (!this.Filters.body.bioroid && x.body === "bio") return false;
				if (!this.Filters.body.ags && x.body === "ags") return false;
				*/
				return true;
			});

		const unit = this.SelectedUnit;
		if (unit && !list.some(x => x.uid === unit.uid))
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
