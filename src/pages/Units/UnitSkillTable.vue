<template>
	<b-table-simple bordered table-class="table-unit-modal">
		<b-thead head-variant="dark">
			<b-tr>
				<b-th colspan="3">
					스킬 정보
					<b-btn-group v-if="HasFormChange" class="ml-2">
						<b-button
							variant="outline-warning"
							:pressed="formStateSync === 'normal'"
							size="sm"
							@click="formStateSync = 'normal'"
						>Normal</b-button>
						<b-button
							variant="outline-warning"
							:pressed="formStateSync === 'change'"
							size="sm"
							@click="formStateSync = 'change'"
						>F.Change</b-button>
					</b-btn-group>
				</b-th>
			</b-tr>
			<b-tr>
				<b-th>이름</b-th>
				<b-th class="d-md-table-cell d-none">
					설명 및 수치
					<b-form-select
						class="table-unit-level-select"
						size="sm"
						v-model="skillLevelSync"
						:options="SkillLevelList"
					/>
				</b-th>
				<b-th>AP &amp; 사거리 &amp; 범위</b-th>
			</b-tr>
			<b-tr class="d-md-none d-table-row">
				<b-th colspan="2">
					설명 및 수치
					<b-form-select
						class="table-unit-level-select"
						size="sm"
						v-model="skillLevelSync"
						:options="SkillLevelList"
					/>
				</b-th>
			</b-tr>
		</b-thead>
		<b-tbody>
			<template v-for="(skill, idx) in Skills">
				<b-tr :key="`unit-modal-skill-${idx}`">
					<b-td>
						<img class="skill-icon" :src="skill.icon" />
						<div class="text-bold">{{skill.name}}</div>

						<rarity-badge
							v-if="skill.isPassive && skill.index > rarityIndex"
							:rarity="rarityList[skill.index]"
						>{{rarityList[skill.index]}} 승급 스킬</rarity-badge>
					</b-td>
					<b-td class="text-left d-none d-md-table-cell">
						<div
							v-for="(line, lineIdx) in skill.desc"
							:key="`unit-modal-skill-desc-${lineIdx}`"
							class="unit-modal-skill"
						>
							<skill-description :text="line" :level="skillLevelSync" />
						</div>
					</b-td>
					<b-th variant="dark" class="text-center">
						<skill-bound
							:passive="skill.isPassive"
							:range="skill.range"
							:target="skill.target"
							:bound="skill.bound"
							:ap="skill.ap"
							:level="skillLevelSync + 1"
						/>
					</b-th>
				</b-tr>
				<b-tr :key="`unit-modal-skill-descrow-${idx}`" class="d-table-row d-md-none">
					<b-td class="text-left" colspan="2">
						<div
							v-for="(line, lineIdx) in skill.desc"
							:key="`unit-modal-skill-descrow-desc-${lineIdx}`"
							class="unit-modal-skill"
						>
							<skill-description :text="line" :level="skillLevelSync" />
						</div>
					</b-td>
				</b-tr>
			</template>
		</b-tbody>
	</b-table-simple>
</template>

<script lang="ts">
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import RarityBadge from "@/components/RarityBadge.vue";
import SkillBound from "@/components/SkillBound.vue";
import SkillDescription from "@/components/SkillDescription.vue";

import ElemIcon from "@/components/ElemIcon.vue";
import { RawSkill, Rarity, RawSkillUnit } from "@/Types";

import { UnitData, SkillData } from "@/DB";
import { AssetsRoot, ImageExtension } from "@/Const";

import SkinData from "@/json/unit-skin.json";
import CostData from "@/json/unit-cost.json";

type LRarity = "ss" | "s" | "a" | "b";

interface SkillItem extends RawSkillUnit {
	index: number;
	isPassive: boolean;
}
interface SkillTable {
	[key: string]: SkillItem;
}

@Component({
	components: {
		RarityBadge,
		SkillBound,
		SkillDescription,
	},
})
export default class UnitSkillTable extends Vue {
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
		type: String,
		required: true,
		validator: (x) => ["B", "A", "S", "SS"].includes(x),
	})
	private rarity!: Rarity;

	private rarityList: Rarity[] = ["B", "A", "S", "SS"];

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
		for (let i = 0; i < 13; i++)
			ret.push({ value: i, text: `Lv. ${i + 1}` });

		return ret;
	}
}
</script>
