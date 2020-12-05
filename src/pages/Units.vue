<template>
	<div class="chars">
		<div class="text-center mb-3">
			<div class="btn-group">
				<button type="button" class="btn btn-outline-info" :class="{ active: DisplayType === 'table' }" @click="DisplayType = 'table'">
					<b-icon-table class="mr-1" />테이블 보기
				</button>
				<button type="button" class="btn btn-outline-info" :class="{ active: DisplayType === 'list' }" @click="DisplayType = 'list'">
					<b-icon-grid-3x3-gap-fill class="mr-1" />목록 보기
				</button>
				<button type="button" class="btn btn-outline-info" :class="{ active: DisplayType === 'group' }" @click="DisplayType = 'group'">
					<b-icon-tags-fill class="mr-1" />그룹별 보기
				</button>
			</div>
		</div>

		<div class="mb-2 text-left clearfix">
			<div class="float-right">
				<b-checkbox v-model="displayFilters">필터 표시</b-checkbox>
			</div>
		</div>

		<b-collapse :visible="displayFilters">
			<b-card class="text-left">
				<b-row class="mb-2">
					<b-col>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-danger" :pressed="Filters.Rarity[5]" @click="Filters.Rarity[5] = !Filters.Rarity[5]"
								>SS</b-button
							>
							<b-button variant="outline-danger" :pressed="Filters.Rarity[4]" @click="Filters.Rarity[4] = !Filters.Rarity[4]"
								>S</b-button
							>
							<b-button variant="outline-danger" :pressed="Filters.Rarity[3]" @click="Filters.Rarity[3] = !Filters.Rarity[3]"
								>A</b-button
							>
							<b-button variant="outline-danger" :pressed="Filters.Rarity[2]" @click="Filters.Rarity[2] = !Filters.Rarity[2]"
								>B</b-button
							>
						</b-btn-group>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-success" :pressed="Filters.Type[0]" @click="Filters.Type[0] = !Filters.Type[0]"
								>경장형</b-button
							>
							<b-button variant="outline-success" :pressed="Filters.Type[2]" @click="Filters.Type[2] = !Filters.Type[2]"
								>기동형</b-button
							>
							<b-button variant="outline-success" :pressed="Filters.Type[1]" @click="Filters.Type[1] = !Filters.Type[1]"
								>중장형</b-button
							>
						</b-btn-group>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-primary" :pressed="Filters.Role[1]" @click="Filters.Role[1] = !Filters.Role[1]"
								>공격기</b-button
							>
							<b-button variant="outline-primary" :pressed="Filters.Role[0]" @click="Filters.Role[0] = !Filters.Role[0]"
								>보호기</b-button
							>
							<b-button variant="outline-primary" :pressed="Filters.Role[2]" @click="Filters.Role[2] = !Filters.Role[2]"
								>지원기</b-button
							>
						</b-btn-group>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-warning" :pressed="Filters.Body[0]" @click="Filters.Body[0] = !Filters.Body[0]"
								>바이오로이드</b-button
							>
							<b-button variant="outline-warning" :pressed="Filters.Body[1]" @click="Filters.Body[1] = !Filters.Body[1]">AGS</b-button>
						</b-btn-group>
					</b-col>
				</b-row>

				<b-row class="mb-4 mx-4">
					<b-col>
						<b-input-group>
							<b-input v-model="SearchText" placeholder="전투원 검색" />
							<b-input-group-append>
								<b-button variant="danger" @click="SearchText = ''">지우기</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-col>
				</b-row>
				<hr class="my-2" />

				<b-row>
					<b-col class="filter-label" md="auto" cols="12">스킬 효과 필터 :</b-col>
					<b-col md cols="12">
						<div class="clearfix">
							<div class="float-right">
								<b-checkbox v-model="displayUnitEffects">스킬 효과 필터 목록 표시</b-checkbox>
							</div>

							<b-button-group class="mb-1 mr-1">
								<b-button variant="primary" @click="FillUnitEffectFilters">모두 선택</b-button>
								<b-button variant="danger" @click="ClearUnitEffectFilters">모두 선택 해제</b-button>
							</b-button-group>
							<b-button-group class="mb-1 mr-1">
								<b-button
									variant="outline-info"
									:pressed="Filters.EffectTarget.includes('self')"
									@click="ToggleEffectTargetFor('self')"
									>자신</b-button
								>
								<b-button
									variant="outline-info"
									:pressed="Filters.EffectTarget.includes('team')"
									@click="ToggleEffectTargetFor('team')"
									>아군</b-button
								>
								<b-button
									variant="outline-info"
									:pressed="Filters.EffectTarget.includes('enemy')"
									@click="ToggleEffectTargetFor('enemy')"
									>적군</b-button
								>
							</b-button-group>
						</div>
						<!-- <b-select :options="UnitEffects" /> -->
						<b-collapse :visible="displayUnitEffects">
							<template v-for="entity in UnitEffects">
								<b-btn-group v-if="Array.isArray(entity)" :key="`unit-effect-${entity[0].type}`" class="mr-1 mb-1">
									<b-button
										v-for="subentity in entity"
										:key="`unit-effect-${subentity.type}-${subentity.pmType}`"
										variant="outline-secondary"
										:pressed="subentity.selected"
										@click="subentity.selected = !subentity.selected"
									>
										{{ subentity.text + (subentity.pmType > 0 ? " 증가" : " 감소") }}
									</b-button>
								</b-btn-group>
								<b-button
									v-else
									:key="`unit-effect-${entity.type}`"
									class="mr-1 mb-1"
									variant="outline-secondary"
									:pressed="entity.selected"
									@click="entity.selected = !entity.selected"
								>
									{{ entity.text }}
								</b-button>
							</template>
						</b-collapse>
					</b-col>
				</b-row>
			</b-card>
		</b-collapse>

		<hr class="my-2" />

		<units-table v-if="DisplayType === 'table'" />
		<units-normal v-else-if="DisplayType === 'list'" />
		<units-group v-else-if="DisplayType === 'group'" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";

import StoreModule, { EffectFilterListType, UnitDisplayType, UnitDisplayFilters, EffectFilterListItemPM, EffectFilterTargetType } from "@/libs/Store";

import UnitsTable from "./Units/Table.vue";
import UnitsNormal from "./Units/Normal.vue";
import UnitsGroup from "./Units/Group.vue";

import UnitData, { Unit } from "@/libs/DB/Unit";
import SkillData, { SkillSlotKey } from "@/libs/DB/Skill";

import { UpdateTitle } from "@/libs/Functions";
import { SetMeta } from "@/libs/Meta";
import { BuffEffect, BuffEffectValue } from "@/libs/Buffs/BuffEffect";
import { isPositiveBuffEffect } from "@/libs/Buffs/Helper";

@Component({
	components: {
		UnitsTable,
		UnitsNormal,
		UnitsGroup,
	},
})
export default class Units extends Vue {
	private unitModalDisplay: boolean = false;
	private selectedUnit: Unit = Unit.Empty;

	private displayFilters: boolean = false;
	private displayUnitEffects: boolean = false;

	// Vuex -----
	private get SearchText () {
		return StoreModule.UnitSearchText;
	}

	private set SearchText (value: string) {
		StoreModule.setUnitSearchText(value);
	}

	private get DisplayType () {
		return StoreModule.UnitDisplayType;
	}

	private set DisplayType (value: UnitDisplayType) {
		StoreModule.setUnitDisplayType(value);
	}

	private get Filters () {
		return StoreModule.UnitDisplayFilter;
	}

	private set Filters (value: UnitDisplayFilters) {
		StoreModule.setUnitDisplayFilter(value);
	}
	// Vuex -----

	@Watch("$route")
	private routeChanged () {
		this.checkParams();
	}

	@Watch("unitModalDisplay")
	private unitModalDisplayWatch (value: boolean, prev: boolean) {
		if (prev && !value)
			this.$router.push({ path: "/units/" });
	}

	private checkParams () {
		const params = this.$route.params;

		if ("id" in params)
			this.$router.replace("/units/" + params.id);
		else
			this.unitModalDisplay = false;
	}

	private get UnitEffects () {
		const ret: EffectFilterListType = [];
		const _ = <T extends unknown> (__: T | undefined) => __ as T;

		StoreModule.unitEffectFilterListFlatten
			.forEach(x => {
				if (Array.isArray(x)) {
					// 증감치
					const part: EffectFilterListItemPM[] = [];

					// 증가치
					let f = Object.keys(SkillData).some(su =>
						Object.keys(SkillData[su]).some(ss =>
							_(SkillData[su][ss as SkillSlotKey]).levels.some(l => l.buffs.some(es => {
								if ("type" in es)
									return x[0].type.includes(es.type) && isPositiveBuffEffect(es);
								else
									return es.buffs.some(b => x[0].type.includes(b.value.type) && isPositiveBuffEffect(b.value));
							})),
						),
					);
					if (f) part.push(x[0]);

					// 감소치
					f = Object.keys(SkillData).some(su =>
						Object.keys(SkillData[su]).some(ss =>
							_(SkillData[su][ss as SkillSlotKey]).levels.some(l => l.buffs.some(es => {
								if ("type" in es)
									return x[1].type.includes(es.type) && !isPositiveBuffEffect(es);
								else
									return es.buffs.some(b => x[1].type.includes(b.value.type) && !isPositiveBuffEffect(b.value));
							})),
						),
					);
					if (f) part.push(x[1]);

					if (part.length > 0)
						ret.push(part);
				} else {
					// 상수치
					const f = Object.keys(SkillData).some(su =>
						Object.keys(SkillData[su]).some(ss =>
							_(SkillData[su][ss as SkillSlotKey]).levels.some(l => l.buffs.some(es => {
								if ("type" in es)
									return x.type.includes(es.type);
								else
									return es.buffs.some(b => x.type.includes(b.value.type));
							})),
						),
					);
					if (f) ret.push(x);
				}
			});
		return ret;
	}

	private ToggleEffectTargetFor (type: EffectFilterTargetType) {
		const idx = this.Filters.EffectTarget.indexOf(type);
		if (idx >= 0)
			this.Filters.EffectTarget.splice(idx, 1);
		else
			this.Filters.EffectTarget.push(type);
	}

	private FillUnitEffectFilters () {
		StoreModule.FillUnitDisplayEffectFilter();
	}

	private ClearUnitEffectFilters () {
		StoreModule.ClearUnitDisplayEffectFilter();
	}

	private mounted () {
		this.checkParams();

		SetMeta(["description", "twitter:description"], "전투원의 목록을 표시합니다. 원하는 전투원을 찾기 위해 검색할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle("전투원정보");
	}
}
</script>

<style lang="scss">
</style>
