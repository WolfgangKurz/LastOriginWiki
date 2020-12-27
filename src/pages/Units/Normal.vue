<template>
	<div class="unit-normal">
		<b-btn-group class="mx-2 mb-2">
			<b-button variant="outline-danger" :pressed="Order === 'dict'" @click="Order = 'dict'">도감 번호순</b-button>
			<b-button variant="outline-danger" :pressed="Order === 'name'" @click="Order = 'name'">이름순</b-button>
			<b-button variant="outline-danger" :pressed="Order === 'rarity'" @click="Order = 'rarity'">등급순</b-button>
		</b-btn-group>

		<b-btn-group class="mx-2 mb-2">
			<b-button variant="outline-secondary" :pressed="ShortName" :disabled="Order === 'dict'" @click="ShortName = !ShortName"
				>짧은 이름으로 정렬</b-button
			>
		</b-btn-group>

		<b-row cols="2" cols-lg="5" :cols-xl="6" :cols-md="4" :cols-sm="3">
			<b-col v-for="unit in UnitList" :key="`unit-normal-unit-${unit.id}`" class="mt-3">
				<unit-card :unit="unit" :class="{ invalid: !unit.group }" @click="modalUnit(unit)" />
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, PropSync, Emit } from "vue-property-decorator";

import StoreModule, { UnitListOrder, UnitDisplayFilters, EffectFilterTargetType } from "@/libs/Store";

import UnitData, { Unit } from "@/libs/DB/Unit";
import SkillData, { SkillSlotKey } from "@/libs/DB/Skill";

import UnitCard from "./UnitCard.vue";
import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, ROLE_TYPE, SKILL_ATTR, TARGET_TYPE } from "@/libs/Types/Enums";
import { BuffEffect } from "@/libs/Buffs/BuffEffect";
import { isBuffEffectValid } from "@/libs/Buffs/Helper";

interface UnitDict {
	[key: number]: Unit;
}

@Component({
	components: {
		UnitCard,
	},
})
export default class UnitsNormal extends Vue {
	// Vuex -----
	private get SearchText () {
		return StoreModule.UnitSearchText;
	}

	private set SearchText (value: string) {
		StoreModule.setUnitSearchText(value);
	}

	private get Order () {
		return StoreModule.UnitListOrder;
	}

	private set Order (value: UnitListOrder) {
		StoreModule.setUnitListOrder(value);
	}

	private get ShortName () {
		return StoreModule.UnitListSortAsShortName;
	}

	private set ShortName (value: boolean) {
		StoreModule.setUnitListSortAsShortName(value);
	}

	private get Filters () {
		return StoreModule.UnitDisplayFilter;
	}

	private set Filters (value: UnitDisplayFilters) {
		StoreModule.setUnitDisplayFilter(value);
	}
	// Vuex -----

	private HasFilteredEffect (unit: Unit, validator: (stat: BuffEffect) => boolean) {
		const isNumeric = (data: string) => {
			return /^[0-9]+\.?[0-9]*%?$/.test(data);
		};
		const _ = <T extends unknown> (__: T | undefined) => __ as T;

		const skills = SkillData[unit.uid];

		return Object.keys(skills).some(ss => {
			const __ = _(skills[ss as SkillSlotKey]);
			return __.buffs.data.some(l => l.buffs.some(es => {
				if ("target" in es) {
					const target: EffectFilterTargetType = es.target === TARGET_TYPE.SELF
						? "self"
						: es.target === TARGET_TYPE.OUR || es.target === TARGET_TYPE.OUR_GRID
							? "team"
							: "enemy";
					if (!this.Filters.EffectTarget.includes(target)) return false;
				}

				if ("type" in es)
					return validator(es);
				else
					return es.buffs.some(y => validator(y.value));
			}));
		});
	}

	private get UnitList (): Unit[] {
		const rarity = [
			this.Filters.Rarity[ACTOR_GRADE.B] ? ACTOR_GRADE.B : -1,
			this.Filters.Rarity[ACTOR_GRADE.A] ? ACTOR_GRADE.A : -1,
			this.Filters.Rarity[ACTOR_GRADE.S] ? ACTOR_GRADE.S : -1,
			this.Filters.Rarity[ACTOR_GRADE.SS] ? ACTOR_GRADE.SS : -1,
		].filter(x => x > -1);
		const type = [
			this.Filters.Type[ACTOR_CLASS.LIGHT] ? ACTOR_CLASS.LIGHT : -1,
			this.Filters.Type[ACTOR_CLASS.AIR] ? ACTOR_CLASS.AIR : -1,
			this.Filters.Type[ACTOR_CLASS.HEAVY] ? ACTOR_CLASS.HEAVY : -1,
		].filter(x => x > -1);
		const role = [
			this.Filters.Role[ROLE_TYPE.ATTACKER] ? ROLE_TYPE.ATTACKER : -1,
			this.Filters.Role[ROLE_TYPE.DEFENDER] ? ROLE_TYPE.DEFENDER : -1,
			this.Filters.Role[ROLE_TYPE.SUPPORTER] ? ROLE_TYPE.SUPPORTER : -1,
		].filter(x => x > -1);
		const body = [
			this.Filters.Body[ACTOR_BODY_TYPE.BIOROID] ? ACTOR_BODY_TYPE.BIOROID : -1,
			this.Filters.Body[ACTOR_BODY_TYPE.AGS] ? ACTOR_BODY_TYPE.AGS : -1,
		].filter(x => x > -1);
		const elem = [
			this.Filters.Elem[SKILL_ATTR.PHYSICS] ? SKILL_ATTR.PHYSICS : -1,
			this.Filters.Elem[SKILL_ATTR.FIRE] ? SKILL_ATTR.FIRE : -1,
			this.Filters.Elem[SKILL_ATTR.ICE] ? SKILL_ATTR.ICE : -1,
			this.Filters.Elem[SKILL_ATTR.LIGHTNING] ? SKILL_ATTR.LIGHTNING : -1,
		].filter(x => x > -1);

		const list = Object.values(UnitData)
			.map(x => {
				return {
					...x,
					id000: ("00" + x.id).substr(-3),
				};
			})
			.filter(x => {
				const skill = Object.keys(SkillData[x.uid]).map(z => SkillData[x.uid][z as SkillSlotKey]);

				return x.name.includes(this.SearchText) &&
					rarity.includes(x.rarity) &&
					type.includes(x.type) &&
					role.includes(x.role) &&
					body.includes(x.body) &&
					elem.some(y => skill.some(z => z && z.buffs.data[0].type === y)) &&
					this.HasFilteredEffect(x, (b) => isBuffEffectValid(b, StoreModule.unitEffectFilterListFlatten));
			});

		if (this.Order === "name") {
			if (this.ShortName)
				list.sort((x, y) => x.shortname < y.shortname ? -1 : 1);
			else
				list.sort((x, y) => x.name < y.name ? -1 : 1);
		} else if (this.Order === "rarity") {
			if (this.ShortName) {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: x.shortname < y.shortname ? -1 : 1,
				);
			} else {
				list.sort((x, y) =>
					x.rarity !== y.rarity
						? y.rarity - x.rarity
						: x.name < y.name ? -1 : 1,
				);
			}
		}

		return list;
	}

	private modalUnit (unit: Unit) {
		if (unit.group)
			this.$router.push({ path: "/units/" + unit.uid });
	}
}
</script>
