<template>
	<b-table-simple bordered table-class="table-unit-modal">
		<b-thead head-variant="dark">
			<b-tr>
				<b-th colspan="3">
					<locale k="UNIT_SKILL" />
					<b-btn-group v-if="HasFormChange" class="ml-2">
						<b-button variant="outline-warning" :pressed="formStateSync === 'normal'" size="sm" @click="formStateSync = 'normal'">
							Normal
						</b-button>
						<b-button variant="outline-warning" :pressed="formStateSync === 'change'" size="sm" @click="formStateSync = 'change'">
							F.Change
						</b-button>
					</b-btn-group>
				</b-th>
			</b-tr>
			<b-tr>
				<b-th><locale k="UNIT_SKILL_NAME" /></b-th>
				<b-th class="d-md-table-cell d-none">
					<locale k="UNIT_SKILL_DESCRIPTION" />
					<b-form-select class="table-unit-level-select" size="sm" v-model="skillLevelSync" :options="SkillLevelList" />
					<span class="text-secondary pl-2">|</span>
					<div class="d-inline-block ml-2">
						<b-checkbox class="d-inline-block mr-2" v-model="loveBonus">
							<locale k="UNIT_SKILL_FAVOR_200" />
						</b-checkbox>
						<b-checkbox class="d-inline-block mr-2" v-model="displayBuffList">
							<locale k="UNIT_SKILL_DISPLAY_BUFF" />
						</b-checkbox>
					</div>
				</b-th>
				<b-th><locale k="UNIT_SKILL_RANGE" /></b-th>
			</b-tr>
			<b-tr class="d-md-none d-table-row">
				<b-th colspan="2">
					<locale k="UNIT_SKILL_DESCRIPTION" />
					<b-form-select class="table-unit-level-select" size="sm" v-model="skillLevelSync" :options="SkillLevelList" />
					<div>
						<b-checkbox class="d-inline-block mr-2" v-model="loveBonus">
							<locale k="UNIT_SKILL_FAVOR_200" />
						</b-checkbox>
						<b-checkbox class="d-inline-block mr-2" v-model="displayBuffList">
							<locale k="UNIT_SKILL_DISPLAY_BUFF" />
						</b-checkbox>
					</div>
				</b-th>
			</b-tr>
		</b-thead>
		<b-tbody>
			<template v-for="(skill, idx) in Skills">
				<b-tr :key="`unit-modal-skill-${idx}`">
					<b-td>
						<img class="skill-icon" :src="`${AssetsRoot}/${imageExt}/skill/${skill.icon}.${imageExt}`" />
						<div class="text-bold">
							<locale :k="`UNIT_SKILL_${skill.key}_${uid}`" />
							<br />
							<elem-icon :elem="skill.buffs.data[skill.buffs.index[skillLevelSync]].type" class="mx-0" />
						</div>

						<b-badge v-if="skill.index === 7" variant="info"><locale k="UNIT_SKILL_DUMMY" /></b-badge>
						<rarity-badge v-else-if="skill.isPassive && skill.index > rarityIndex" :rarity="rarityList[skill.index]">
							{{ RarityName[rarityList[skill.index]] }}
							<locale k="UNIT_SKILL_PROMOTION_SKILL" />
						</rarity-badge>
					</b-td>
					<b-td class="text-left d-none d-md-table-cell">
						<div class="unit-modal-skill">
							<b-badge v-if="skill.buffs.data[skill.buffs.index[skillLevelSync]].dismiss_guard" variant="warning" class="mr-1">
								<locale k="UNIT_SKILL_DISMISS_GUARD" />
							</b-badge>
							<b-badge
								v-if="skill.buffs.data[skill.buffs.index[skillLevelSync]].target_ground && !skill.isPassive"
								variant="danger"
								class="mr-1"
								:title="LocaleGet('UNIT_SKILL_GRID_TARGET_TIP')"
							>
								<locale k="UNIT_SKILL_GRID_TARGET" />
							</b-badge>
							<b-badge v-if="skill.buffs.data[skill.buffs.index[skillLevelSync]].acc_bonus" variant="success" class="mr-1">
								<locale k="UNIT_SKILL_ACC_BONUS" />
								{{
									(skill.buffs.data[skill.buffs.index[skillLevelSync]].acc_bonus > 0 ? "+" : "") +
									skill.buffs.data[skill.buffs.index[skillLevelSync]].acc_bonus
								}}%
							</b-badge>
							<summon-badge :summon="skill.buffs.data[skill.buffs.index[skillLevelSync]].summon" class="mr-1" />
						</div>

						<div>
							<div v-for="(line, lineIdx) in GetDesc(skill)" :key="`unit-modal-skill-desc-${lineIdx}`" class="unit-modal-skill">
								<span v-if="!line" class="text-secondary">
									<locale k="UNIT_SKILL_NO_DESCRIPTION" />
								</span>
								<skill-description
									v-else
									:text="line"
									:rates="GetRates(skill)"
									:level="skillLevelSync"
									:buff-bonus="buffBonus"
									:skill-bonus="skillBonus"
									:love-bonus="loveBonus"
								/>
							</div>
						</div>

						<div v-if="BuffRates[skill.key].some((x) => x !== 100)">
							<b-badge variant="danger">
								<locale k="UNIT_SKILL_BUFF_RATE" :p0="BuffRates[skill.key][skillLevelSync]" />
							</b-badge>
							<small class="text-secondary ml-1">
								<locale k="UNIT_SKILL_BUFF_RATE_DESC" />
							</small>
						</div>

						<buff-list v-if="displayBuffList && BuffList[skill.key].length > 0" :list="BuffList[skill.key]" :level="ComputedLevel" />
					</b-td>
					<b-th variant="dark" class="text-center">
						<skill-bound
							:passive="skill.isPassive"
							:buffs="skill.buffs"
							:target="skill.target"
							:level="skillLevelSync + 1"
							:range-bonus="rangeBonus"
						/>
					</b-th>
				</b-tr>
				<b-tr :key="`unit-modal-skill-descrow-${idx}`" class="d-table-row d-md-none">
					<b-td class="text-left" colspan="2">
						<div class="unit-modal-skill">
							<b-badge v-if="skill.buffs.data[skill.buffs.index[skillLevelSync]].dismiss_guard" variant="warning" class="mr-1">
								<locale k="UNIT_SKILL_DISMISS_GUARD" />
							</b-badge>
							<b-badge
								v-if="skill.buffs.data[skill.buffs.index[skillLevelSync]].target_ground && !skill.isPassive"
								variant="danger"
								class="mr-1"
								:title="LocaleGet('UNIT_SKILL_GRID_TARGET_TIP')"
							>
								<locale k="UNIT_SKILL_GRID_TARGET" />
							</b-badge>
							<b-badge v-if="skill.buffs.data[skill.buffs.index[skillLevelSync]].acc_bonus" variant="success" class="mr-1">
								<locale k="UNIT_SKILL_ACC_BONUS" />
								{{
									(skill.buffs.data[skill.buffs.index[skillLevelSync]].acc_bonus > 0 ? "+" : "") +
									skill.buffs.data[skill.buffs.index[skillLevelSync]].acc_bonus
								}}%
							</b-badge>
							<summon-badge :summon="skill.buffs.data[skill.buffs.index[skillLevelSync]].summon" class="mr-1" />
						</div>

						<div>
							<div v-for="(line, lineIdx) in GetDesc(skill)" :key="`unit-modal-skill-desc-${lineIdx}`" class="unit-modal-skill">
								<span v-if="!line" class="text-secondary">
									<locale k="UNIT_SKILL_NO_DESCRIPTION" />
								</span>
								<skill-description
									v-else
									:text="line"
									:rates="GetRates(skill)"
									:level="skillLevelSync"
									:buff-bonus="buffBonus"
									:skill-bonus="skillBonus"
									:love-bonus="loveBonus"
								/>
							</div>
						</div>

						<div v-if="BuffRates[skill.key].some((x) => x !== 100)">
							<b-badge variant="danger">
								<locale k="UNIT_SKILL_BUFF_RATE" :p0="BuffRates[skill.key][skillLevelSync]" />
							</b-badge>
							<small class="text-secondary ml-1">
								<locale k="UNIT_SKILL_BUFF_RATE_DESC" />
							</small>
						</div>

						<buff-list v-if="displayBuffList && BuffList[skill.key].length > 0" :list="BuffList[skill.key]" :level="ComputedLevel" />
					</b-td>
				</b-tr>
			</template>
		</b-tbody>
	</b-table-simple>
</template>

<script lang="ts">
import Decimal from "decimal.js";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";
import { LocaleGet } from "@/libs/Locale";

import RarityBadge from "@/components/RarityBadge.vue";
import SkillBound from "@/components/SkillBound.vue";
import SkillDescription from "@/components/SkillDescription.vue";
import BuffList from "@/components/BuffList";

import ElemIcon from "@/components/ElemIcon.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import SummonBadge from "./SummonBadge.vue";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import { ACTOR_GRADE } from "@/libs/Types/Enums";
import { BuffStat } from "@/libs/Buffs/Buffs";

import { SkillEntity, RawSkillEntity, SkillSummonInfo } from "@/libs/Types/Skill";
import { Summon } from "@/libs/Types/Summon";
import { FilterableUnit } from "@/libs/Types/Unit.Filterable";

interface SkillItem extends SkillEntity {
	index: number;
	isPassive: boolean;
}
type SkillTable = Record<string, SkillItem>;

@Component({
	components: {
		RarityBadge,
		SkillBound,
		SkillDescription,
		BuffList,

		ElemIcon,
		EquipIcon,
		SummonBadge,
	},
})
export default class UnitSkillTable extends Vue {
	@Prop({
		type: String,
		default: "",
	})
	private uid!: string;

	@Prop({
		type: Object,
		required: true,
	})
	private skills!: SkillTable;

	@PropSync("skillLevel", {
		type: Number,
		default: 9,
	})
	private skillLevelSync!: number;

	@PropSync("formState", {
		type: String,
		default: "normal",
	})
	private formStateSync!: "normal" | "change";

	@Prop({
		type: Number,
		required: true,
		validator: (x) => [ACTOR_GRADE.B, ACTOR_GRADE.A, ACTOR_GRADE.S, ACTOR_GRADE.SS].includes(x),
	})
	private rarity!: ACTOR_GRADE;

	@Prop({
		type: Boolean,
		default: false,
	})
	private buffBonus!: boolean;

	@Prop({
		type: Number,
		default: 0,
	})
	private skillBonus!: number;

	@Prop({
		type: Boolean,
		default: false,
	})
	private rangeBonus!: boolean;

	private rarityList: ACTOR_GRADE[] = [0, 0, ACTOR_GRADE.B, ACTOR_GRADE.A, ACTOR_GRADE.S, ACTOR_GRADE.SS];
	private loveBonus: boolean = false;
	private displayBuffList: boolean = false;

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get HasFormChange () {
		const raw = this.skills;
		if (!raw) return false;

		return Object.keys(raw).some(x => x.startsWith("F"));
	}

	private get rarityIndex () {
		return this.rarityList.indexOf(this.rarity);
	}

	private get RarityName () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	/**
	 * 현재 선택 형태에 맞춘 스킬 목록
	 */
	private get Skills () {
		const output: SkillTable = {};
		const raw = this.skills;
		if (!raw) return [];

		const keys = Object.keys(raw);
		return keys
			.filter(x => !x.startsWith("F"))
			.map(x => {
				const keyf = `F${x}`;
				if (this.formStateSync === "change" && keys.includes(keyf))
					return raw[keyf];
				else
					return raw[x];
			});
	}

	private get SkillLevelList () {
		const ret = [];
		for (let i = 0; i < 10; i++)
			ret.push({ value: i, text: `Lv. ${i + 1}` });

		return ret;
	}

	private get ComputedLevel () {
		const level = this.skillLevelSync + (this.loveBonus ? 1 : 0) + (this.buffBonus ? 2 : 0);
		return level;
	}

	private get BuffList () {
		const output: Record<string, BuffStat[]> = {};

		Object.keys(this.skills)
			.forEach(key => {
				const skill = this.skills[key];
				if (!skill) return null;

				const stat = skill.buffs.data[skill.buffs.index[this.skillLevelSync]].buffs;
				output[key] = stat;
			});

		return output;
	}

	private get BuffRates () {
		const output: Record<string, number[]> = {};
		Object.keys(this.skills)
			.forEach(key => {
				const skill = this.skills[key];
				if (!skill) return null;

				output[key] = skill.buffs.index.map(x => skill.buffs.data[x].buff_rate);
			});

		return output;
	}

	private GetDesc (skill: SkillItem) {
		return LocaleGet(`UNIT_SKILL_DESC_${skill.key}_${this.uid}`)
			.split("\n");
	}

	private GetRates (skill: SkillItem) {
		return skill.buffs.index.map(x => skill.buffs.data[x].rate);
	}
}
</script>
