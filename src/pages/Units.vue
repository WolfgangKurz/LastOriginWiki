<template>
	<div class="chars">
		<div class="text-center mb-3">
			<div class="btn-group">
				<button type="button" class="btn btn-outline-info" :class="{ active: DisplayType === 'table' }" @click="DisplayType = 'table'">
					<b-icon-table class="mr-1" />
					<locale k="UNITS_VIEW_TABLE" />
				</button>
				<button type="button" class="btn btn-outline-info" :class="{ active: DisplayType === 'list' }" @click="DisplayType = 'list'">
					<b-icon-grid-3x3-gap-fill class="mr-1" />
					<locale k="UNITS_VIEW_LIST" />
				</button>
				<button type="button" class="btn btn-outline-info" :class="{ active: DisplayType === 'group' }" @click="DisplayType = 'group'">
					<b-icon-tags-fill class="mr-1" />
					<locale k="UNITS_VIEW_GROUP" />
				</button>
				<button type="button" class="btn btn-outline-info" :class="{ active: DisplayType === 'time' }" @click="DisplayType = 'time'">
					<b-icon-hammer class="mr-1" />
					<locale k="UNITS_VIEW_CREATIONTIME" />
				</button>
			</div>
		</div>

		<div class="mb-2 text-left clearfix">
			<div class="float-right">
				<b-checkbox v-model="displayFilters"><locale k="UNITS_FILTERS_TOGGLE" /></b-checkbox>
			</div>
		</div>

		<b-collapse :visible="displayFilters">
			<b-card class="text-left">
				<b-row class="mb-2">
					<b-col>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-danger" :pressed="Filters.Rarity[5]" @click="Filters.Rarity[5] = !Filters.Rarity[5]">
								SS
							</b-button>
							<b-button variant="outline-danger" :pressed="Filters.Rarity[4]" @click="Filters.Rarity[4] = !Filters.Rarity[4]">
								S
							</b-button>
							<b-button variant="outline-danger" :pressed="Filters.Rarity[3]" @click="Filters.Rarity[3] = !Filters.Rarity[3]">
								A
							</b-button>
							<b-button variant="outline-danger" :pressed="Filters.Rarity[2]" @click="Filters.Rarity[2] = !Filters.Rarity[2]">
								B
							</b-button>
						</b-btn-group>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-success" :pressed="Filters.Type[0]" @click="Filters.Type[0] = !Filters.Type[0]">
								<locale k="COMMON_UNIT_TYPE_LIGHT" />
							</b-button>
							<b-button variant="outline-success" :pressed="Filters.Type[2]" @click="Filters.Type[2] = !Filters.Type[2]">
								<locale k="COMMON_UNIT_TYPE_MOBILITY" />
							</b-button>
							<b-button variant="outline-success" :pressed="Filters.Type[1]" @click="Filters.Type[1] = !Filters.Type[1]">
								<locale k="COMMON_UNIT_TYPE_HEAVY" />
							</b-button>
						</b-btn-group>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-primary" :pressed="Filters.Role[1]" @click="Filters.Role[1] = !Filters.Role[1]">
								<locale k="COMMON_UNIT_ROLE_ATTACKER" />
							</b-button>
							<b-button variant="outline-primary" :pressed="Filters.Role[0]" @click="Filters.Role[0] = !Filters.Role[0]">
								<locale k="COMMON_UNIT_ROLE_DEFENDER" />
							</b-button>
							<b-button variant="outline-primary" :pressed="Filters.Role[2]" @click="Filters.Role[2] = !Filters.Role[2]">
								<locale k="COMMON_UNIT_ROLE_SUPPORTER" />
							</b-button>
						</b-btn-group>
						<b-btn-group class="mx-2 mb-2">
							<b-button variant="outline-warning" :pressed="Filters.Body[0]" @click="Filters.Body[0] = !Filters.Body[0]">
								<locale k="COMMON_UNIT_BODY_BIOROID" />
							</b-button>
							<b-button variant="outline-warning" :pressed="Filters.Body[1]" @click="Filters.Body[1] = !Filters.Body[1]">
								<locale k="COMMON_UNIT_BODY_AGS" />
							</b-button>
						</b-btn-group>
					</b-col>
				</b-row>

				<b-row class="mb-4 mx-4">
					<b-col>
						<b-input-group>
							<b-input v-model="SearchText" :placeholder="LocaleGet('UNITS_SEARCH_PLACEHOLDER')" />
							<b-input-group-append>
								<b-button variant="danger" @click="SearchText = ''">
									<locale k="UNITS_SEARCH_RESET" />
								</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-col>
				</b-row>
				<hr class="my-2" />

				<template v-for="i in 2">
					<b-row :key="`units-skillfilter-row-${i}`">
						<b-col class="filter-label" md="auto" cols="12">
							<locale k="UNITS_FILTERS_ACTIVE_LABEL" :p0="i" />
						</b-col>
						<b-col md cols="12">
							<b-btn-group class="mx-2 mb-2">
								<b-button
									variant="outline-secondary"
									:pressed="Filters.Skill[i - 1].Elem[0]"
									@click="Filters.Skill[i - 1].Elem[0] = !Filters.Skill[i - 1].Elem[0]"
								>
									<elem-icon class="mr-0" elem="physics" />
								</b-button>
								<b-button
									variant="outline-secondary"
									:pressed="Filters.Skill[i - 1].Elem[1]"
									@click="Filters.Skill[i - 1].Elem[1] = !Filters.Skill[i - 1].Elem[1]"
								>
									<elem-icon class="mr-0" elem="fire" />
								</b-button>
								<b-button
									variant="outline-secondary"
									:pressed="Filters.Skill[i - 1].Elem[2]"
									@click="Filters.Skill[i - 1].Elem[2] = !Filters.Skill[i - 1].Elem[2]"
								>
									<elem-icon class="mr-0" elem="ice" />
								</b-button>
								<b-button
									variant="outline-secondary"
									:pressed="Filters.Skill[i - 1].Elem[3]"
									@click="Filters.Skill[i - 1].Elem[3] = !Filters.Skill[i - 1].Elem[3]"
								>
									<elem-icon class="mr-0" elem="lightning" />
								</b-button>
							</b-btn-group>

							<b-btn-group class="mx-2 mb-2">
								<b-button
									variant="outline-danger"
									:pressed="Filters.Skill[i - 1].GridType === 0"
									@click="Filters.Skill[i - 1].GridType = 0"
								>
									<locale k="UNITS_FILTERS_ACTIVE_GRID_ALL" />
								</b-button>
								<b-button
									variant="outline-danger"
									:pressed="Filters.Skill[i - 1].GridType === 1"
									@click="Filters.Skill[i - 1].GridType = 1"
								>
									<locale k="UNITS_FILTERS_ACTIVE_GRID_ONLY" />
								</b-button>
								<b-button
									variant="outline-danger"
									:pressed="Filters.Skill[i - 1].GridType === 2"
									@click="Filters.Skill[i - 1].GridType = 2"
								>
									<locale k="UNITS_FILTERS_ACTIVE_GRID_TARGET" />
								</b-button>
							</b-btn-group>

							<b-btn-group class="mx-2 mb-2">
								<b-button
									variant="outline-primary"
									:pressed="Filters.Skill[i - 1].DismissGuardType === 0"
									@click="Filters.Skill[i - 1].DismissGuardType = 0"
								>
									<locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_ALL" />
								</b-button>
								<b-button
									variant="outline-primary"
									:pressed="Filters.Skill[i - 1].DismissGuardType === 1"
									@click="Filters.Skill[i - 1].DismissGuardType = 1"
								>
									<locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_ONLY" />
								</b-button>
								<b-button
									variant="outline-primary"
									:pressed="Filters.Skill[i - 1].DismissGuardType === 2"
									@click="Filters.Skill[i - 1].DismissGuardType = 2"
								>
									<locale k="UNITS_FILTERS_ACTIVE_DISMISS_GUARD_NOT" />
								</b-button>
							</b-btn-group>
						</b-col>
					</b-row>
					<hr class="my-2" :key="`units-skillfilter-hr-${i}`" />
				</template>

				<b-row>
					<b-col class="filter-label" md="auto" cols="12"><locale k="UNITS_FILTERS_SKILL_EFFECTS_LABEL" /></b-col>
					<b-col md cols="12">
						<div class="clearfix">
							<div class="float-right">
								<b-checkbox v-model="displayUnitEffects"><locale k="UNITS_FILTERS_SKILL_EFFECTS_TOGGLE" /></b-checkbox>
							</div>

							<b-button-group class="mb-1 mr-1">
								<b-button variant="primary" @click="FillUnitEffectFilters">
									<locale k="UNITS_FILTERS_SKILL_EFFECTS_SELECTALL" />
								</b-button>
								<b-button variant="danger" @click="ClearUnitEffectFilters">
									<locale k="UNITS_FILTERS_SKILL_EFFECTS_DESELECTALL" />
								</b-button>
							</b-button-group>
							<b-button-group class="mb-1 mr-1">
								<b-button
									variant="outline-info"
									:pressed="Filters.EffectTarget.includes('self')"
									@click="ToggleEffectTargetFor('self')"
								>
									<locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_SELF" />
								</b-button>
								<b-button
									variant="outline-info"
									:pressed="Filters.EffectTarget.includes('team')"
									@click="ToggleEffectTargetFor('team')"
								>
									<locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_SQUAD" />
								</b-button>
								<b-button
									variant="outline-info"
									:pressed="Filters.EffectTarget.includes('enemy')"
									@click="ToggleEffectTargetFor('enemy')"
								>
									<locale k="UNIT_FILTERS_SKILL_EFFECTS_TARGET_ENEMY" />
								</b-button>
							</b-button-group>
						</div>
						<!-- <b-select :options="UnitEffects" /> -->
						<b-collapse :visible="displayUnitEffects">
							<b-table-simple small striped borderless>
								<b-tbody>
									<b-tr v-for="(group, gkey) in UnitEffects" :key="`unit-effect-group-${gkey}`">
										<b-td class="align-middle pr-2">
											<span class="effect-group-name">{{ EffectGroupNames[gkey] }} :</span>
										</b-td>
										<b-td>
											<template v-for="entity in group">
												<b-btn-group v-if="Array.isArray(entity)" :key="`unit-effect-${entity[0].type}`" class="mr-1 mb-1">
													<b-button
														v-for="subentity in entity"
														:key="`unit-effect-${subentity.type}-${subentity.pmType}`"
														variant="outline-secondary"
														:pressed="subentity.selected"
														@click="subentity.selected = !subentity.selected"
													>
														<locale :k="subentity.text">
															<template #p0>
																<locale v-if="subentity.pmType > 0" k="UNIT_FILTERS_SKILL_EFFECTS_PM_P" />
																<locale v-else k="UNIT_FILTERS_SKILL_EFFECTS_PM_M" />
															</template>
														</locale>
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
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-collapse>
					</b-col>
				</b-row>
			</b-card>
		</b-collapse>

		<hr class="my-2" />

		<units-table v-if="DisplayType === 'table'" :list="UnitList" />
		<units-normal v-else-if="DisplayType === 'list'" :list="UnitList" />
		<units-group v-else-if="DisplayType === 'group'" :list="UnitList" />
		<units-time-table v-else-if="DisplayType === 'time'" :list="UnitList" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { LocaleGet } from "@/libs/Locale";

import StoreModule, { EffectFilterListType, UnitDisplayType, UnitDisplayFilters, EffectFilterListItemPM, EffectFilterTargetType } from "@/libs/Store";

import UnitsTable from "./Units/Table.vue";
import UnitsNormal from "./Units/Normal.vue";
import UnitsGroup from "./Units/Group.vue";
import UnitsTimeTable from "./Units/TimeTable.vue";

import ElemIcon from "@/components/ElemIcon.vue";

import { FilterableUnit } from "@/libs/Types/Unit.Filterable";
import FilterableUnitDB from "@/libs/DB/Unit.Filterable";

import { UpdateTitle } from "@/libs/Functions";
import { SetMeta } from "@/libs/Meta";
import { BuffEffect, BuffEffectListGroupKeys, BuffEffectValue } from "@/libs/Buffs/BuffEffect";
import { SKILL_ATTR } from "@/libs/Types/Enums";

@Component({
	components: {
		UnitsTable,
		UnitsNormal,
		UnitsGroup,
		UnitsTimeTable,

		ElemIcon,
	},
})
export default class Units extends Vue {
	private unitModalDisplay: boolean = false;

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

	private get EffectGroupNames (): Record<string, string> {
		const ret: Record<BuffEffectListGroupKeys, string> = {
			stats: LocaleGet("BUFF_GROUP_STATS"),
			damageAdd: LocaleGet("BUFF_GROUP_DMG_UP"),
			damageReduce: LocaleGet("BUFF_GROUP_DMG_REDUCE"),
			guard: LocaleGet("BUFF_GROUP_GUARD"),
			speedAp: LocaleGet("BUFF_GROUP_AP"),
			offPierce: LocaleGet("BUFF_GROUP_OFF"),
			resist: LocaleGet("BUFF_GROUP_RESIST"),
			damage: LocaleGet("BUFF_GROUP_DMG"),
			etcBuff: LocaleGet("BUFF_GROUP_ETC_BUFF"),
			etcDebuff: LocaleGet("BUFF_GROUP_ETC_DEBUFF"),
		};
		return ret;
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
					let f = FilterableUnitDB.some(fu => fu.buffs.some(bg => bg.some(es => x[0].type.includes(es.type) && es.positive)));
					if (f) part.push(x[0]);

					// 감소치
					f = FilterableUnitDB.some(fu => fu.buffs.some(bg => bg.some(es => x[0].type.includes(es.type) && !es.positive)));
					if (f) part.push(x[1]);

					if (part.length > 0)
						ret.push(part);
				} else {
					// 상수치
					const f = FilterableUnitDB.some(fu => fu.buffs.some(bg => bg.some(es => x.type.includes(es.type))));
					if (f) ret.push(x);
				}
			});

		const dict: Record<string, EffectFilterListType> = {};
		const filters = StoreModule.unitEffectFilterList;
		ret.forEach(b => {
			Object.keys(filters).forEach(x => {
				const k = x as BuffEffectListGroupKeys;
				if (filters[k].some(y => Array.isArray(b) ? y.text === b[0].text : y.text === b.text)) {
					if (!(x in dict)) dict[x] = [];
					dict[x].push(b);
				}
			});
		});
		return dict;
	}

	private get UnitList () {
		const elem = new Array(2)
			.fill(0)
			.map((_, i) => [
				this.Filters.Skill[i].Elem[SKILL_ATTR.PHYSICS] ? SKILL_ATTR.PHYSICS : -1,
				this.Filters.Skill[i].Elem[SKILL_ATTR.FIRE] ? SKILL_ATTR.FIRE : -1,
				this.Filters.Skill[i].Elem[SKILL_ATTR.ICE] ? SKILL_ATTR.ICE : -1,
				this.Filters.Skill[i].Elem[SKILL_ATTR.LIGHTNING] ? SKILL_ATTR.LIGHTNING : -1,
			].filter(y => y > -1));

		return FilterableUnitDB
			.filter(x => LocaleGet(`UNIT_${x.uid}`).includes(this.SearchText))
			.filter((x) => {
				if (!this.Filters.Rarity[x.rarity]) return false;
				if (!this.Filters.Type[x.type]) return false;
				if (!this.Filters.Role[x.role]) return false;
				if (!this.Filters.Body[x.body]) return false;

				const elem1 = elem[0].some(y => y === x.skills.active1.elem || (x.skills.Factive1 && y === x.skills.Factive1.elem));
				const grid1 = this.Filters.Skill[0].GridType === 0 ||
					(this.Filters.Skill[0].GridType === 1 && (x.skills.active1.grid || (x.skills.Factive1 && x.skills.Factive1.grid))) ||
					(this.Filters.Skill[0].GridType === 2 && !(x.skills.active1.grid || (x.skills.Factive1 && x.skills.Factive1.grid)));
				const guard1 = this.Filters.Skill[0].DismissGuardType === 0 ||
					(
						this.Filters.Skill[0].DismissGuardType === 1 &&
						(x.skills.active1.guard || (x.skills.Factive1 && x.skills.Factive1.guard))
					) ||
					(
						this.Filters.Skill[0].DismissGuardType === 2 &&
						!(x.skills.active1.guard || (x.skills.Factive1 && x.skills.Factive1.guard))
					);

				const elem2 = elem[1].some(y => y === x.skills.active2.elem || (x.skills.Factive2 && y === x.skills.Factive2.elem));
				const grid2 = this.Filters.Skill[1].GridType === 0 ||
					(this.Filters.Skill[1].GridType === 1 && (x.skills.active2.grid || (x.skills.Factive2 && x.skills.Factive2.grid))) ||
					(this.Filters.Skill[1].GridType === 2 && !(x.skills.active2.grid || (x.skills.Factive2 && x.skills.Factive2.grid)));
				const guard2 = this.Filters.Skill[1].DismissGuardType === 0 ||
					(
						this.Filters.Skill[1].DismissGuardType === 1 &&
						(x.skills.active2.guard || (x.skills.Factive2 && x.skills.Factive2.guard))
					) ||
					(
						this.Filters.Skill[1].DismissGuardType === 2 &&
						!(x.skills.active2.guard || (x.skills.Factive2 && x.skills.Factive2.guard))
					);

				if (!(
					(elem1 && grid1 && guard1) ||
					(elem2 && grid2 && guard2)
				)) return false;

				return this.HasFilteredEffect(x);
			});
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

	private HasFilteredEffect (unit: FilterableUnit) {
		const target = FilterableUnitDB.find(x => x.uid === unit.uid);
		if (!target) return false;

		return target.buffs.some(x => x.some(y => {
			if (!this.Filters.EffectTarget.includes(y.target)) return false;

			return StoreModule.unitEffectFilterListFlatten.some(z => Array.isArray(z)
				? z.some(_ => _.selected && _.type.includes(y.type) && ((_.pmType > 0 && y.positive) || (_.pmType < 0 && !y.positive)))
				: z.selected && z.type.includes(y.type));
		}));
	}

	private mounted () {
		this.checkParams();

		SetMeta(["description", "twitter:description"], "전투원의 목록을 표시합니다. 원하는 전투원을 찾기 위해 검색할 수 있습니다.");
		SetMeta(["twitter:image", "og:image"], null);
		UpdateTitle(LocaleGet("MENU_UNITS"));
	}
}
</script>

<style lang="scss">
.effect-group-name {
	word-break: keep-all;
	white-space: nowrap;
}
</style>
