<template>
	<b-card no-body class="exp-calculator">
		<b-card-header>
			<b-icon-calculator class="mr-1" />
			<locale k="EXPCALC_TITLE" />
		</b-card-header>
		<b-card-body body-class="text-left">
			<b-row>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1"><locale k="EXPCALC_CURRENT_LV" /></div>
					<div class="ml-2 mb-2">
						<b-input v-model.number="baseLevel" />
					</div>
				</b-col>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1"><locale k="EXPCALC_CURRENT_EXP" /></div>
					<div class="ml-2 mb-2">
						<b-input v-model.number="baseEXP" />
					</div>
				</b-col>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1"><locale k="EXPCALC_CURRENT_BASE_GRADE" /></div>
					<div class="ml-2 mb-2">
						<b-form-select v-model="unitRarity" :options="rarityList" />
					</div>
				</b-col>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1"><locale k="EXPCALC_CORELINKS" /></div>
					<div class="ml-2 mb-2 text-center">
						<b-btn-group>
							<b-button variant="outline-secondary" :pressed="CoreLinks === 0" @click="CoreLinks = 0">0</b-button>
							<b-button variant="outline-success" :pressed="CoreLinks === 1" @click="CoreLinks = 1">1</b-button>
							<b-button variant="outline-success" :pressed="CoreLinks === 2" @click="CoreLinks = 2">2</b-button>
							<b-button variant="outline-success" :pressed="CoreLinks === 3" @click="CoreLinks = 3">3</b-button>
							<b-button variant="outline-success" :pressed="CoreLinks === 4" @click="CoreLinks = 4">4</b-button>
							<b-button variant="outline-primary" :pressed="CoreLinks === 5" @click="CoreLinks = 5">5</b-button>
						</b-btn-group>
					</div>
				</b-col>
			</b-row>

			<div class="mt-3"><locale k="EXPCALC_EQUIP_BONUS" /></div>
			<b-row class="mt-1" cols="1" cols-sm="2" cols-md="3">
				<div v-for="(equip, equipIdx) in ExpEquips" :key="`exp-calc-equip-${equipIdx}-0`" class="p-1">
					<b-card :data-invalid="equip.use ? 0 : 1" no-body>
						<b-card-header class="text-center">
							<b-checkbox v-model="equip.use" class="pr-4">
								<div class="mb-1">
									<equip-icon :image="equip.current.base.icon" size="small" />
								</div>
								<strong class="py-1 text-keep">
									<locale :k="`EQUIP_${equip.current.base.fullKey}`" />
								</strong>
							</b-checkbox>
						</b-card-header>
						<b-card-body>
							<b-row class="align-items-center">
								<b-col cols="auto" cols-md="12"><locale k="EXPCALC_EQUIP_GRADE" /></b-col>
								<b-col>
									<b-form-select v-model="equip.current" :options="RarityOptions(equip.equips)" />
								</b-col>
							</b-row>
							<b-row class="mt-1 align-items-center">
								<b-col cols="auto" cols-md="12"><locale k="EXPCALC_EQUIP_LEVEL" /></b-col>
								<b-col>
									<b-form-select v-model="equip.level" :options="equipLevelList" />
								</b-col>
							</b-row>
							<b-row class="mt-1 align-items-center" :data-invalid="equip.stack > 0 ? 0 : 1">
								<b-col cols="auto" cols-md="12"><locale k="EXPCALC_EQUIP_STACK" /></b-col>
								<b-col>
									<b-form-select v-model="equip.stack" :options="equipStackList" :disabled="equip.stack <= 0" />
								</b-col>
							</b-row>
						</b-card-body>
						<b-card-footer>
							<b-badge variant="dark"><locale k="EXPCALC_EXP" /></b-badge>
							<b-badge variant="warning" class="ml-2">x{{ A1(equip.bonus[equip.current.base.rarity][equip.level]) }}</b-badge>
							<b-badge v-if="equip.stack > 0" variant="info" class="ml-2">
								x<locale k="EXPCALC_STACKS_FORMAT" :p0="equip.stack" />
							</b-badge>
						</b-card-footer>
					</b-card>
				</div>
			</b-row>

			<div class="mt-3"><locale k="EXPCALC_SKILL_BONUS" /></div>
			<b-row class="mt-1" cols="1" cols-sm="2" cols-md="3">
				<div class="p-1">
					<b-card :data-invalid="skills.alexandra.use ? 0 : 1" no-body>
						<b-card-header class="text-center">
							<b-checkbox v-model="skills.alexandra.use" class="pr-4">
								<div class="mb-1">
									<unit-face uid="3P_Alexandra" size="40" />
								</div>
								<strong class="py-1 text-keep">
									<locale k="UNIT_3P_Alexandra" />
									<div>[<locale k="UNIT_SKILL_passive5_3P_Alexandra" />]</div>
								</strong>
							</b-checkbox>
						</b-card-header>
						<b-card-body>
							<b-row class="mt-1 align-items-center">
								<b-col cols="12" md="auto"><locale k="EXPCALC_SKILL_LEVEL" /></b-col>
								<b-col>
									<b-form-select v-model="skills.alexandra.level" :options="skillLevelList(true, true)" />
								</b-col>
							</b-row>
							<hr />
							<b-checkbox v-model="skills.alexandra.flavor">
								♥200
								<span class="d-inline-block">[<locale k="EXPCALC_SKILL_BONUS_FORMAT" p0="1" />]</span>
							</b-checkbox>
							<hr />
							<b-checkbox v-model="skills.alexandra.buff">
								<locale k="EXPCALC_SKILL_BUFF_DEBUFF" />
								<span class="d-inline-block">[<locale k="EXPCALC_SKILL_BONUS_FORMAT" p0="2" />]</span>
							</b-checkbox>
						</b-card-body>
						<b-card-footer>
							<b-badge variant="dark"><locale k="EXPCALC_EXP" /></b-badge>
							<b-badge variant="warning" class="ml-2">x{{ A1(skills.alexandra.bonus[skills.alexandra.level]) }}</b-badge>
						</b-card-footer>
					</b-card>
				</div>
				<div class="p-1">
					<b-card :data-invalid="skills.tommywalker.use ? 0 : 1" no-body>
						<b-card-header class="text-center">
							<b-checkbox v-model="skills.tommywalker.use" class="pr-4">
								<div class="mb-1">
									<unit-face uid="PECS_TommyWalker" size="40" />
								</div>
								<strong class="py-1 text-keep">
									<locale k="UNIT_PECS_TommyWalker" />
									<div>[<locale k="UNIT_SKILL_passive3_PECS_TommyWalker" />]</div>
								</strong>
							</b-checkbox>
						</b-card-header>
						<b-card-body>
							<b-row class="mt-1 align-items-center">
								<b-col cols="12" md="auto"><locale k="EXPCALC_SKILL_LEVEL" /></b-col>
								<b-col>
									<b-form-select v-model="skills.tommywalker.level" :options="skillLevelList(false, true)" />
								</b-col>
							</b-row>
							<hr />
							<b-checkbox v-model="skills.tommywalker.flavor" disabled>
								♥200
								<span class="d-inline-block">[<locale k="EXPCALC_SKILL_BONUS_FORMAT" p0="1" />]</span>
							</b-checkbox>
							<hr />
							<b-checkbox v-model="skills.tommywalker.buff">
								<locale k="EXPCALC_SKILL_BUFF_DEBUFF" />
								<span class="d-inline-block">[<locale k="EXPCALC_SKILL_BONUS_FORMAT" p0="2" />]</span>
							</b-checkbox>
						</b-card-body>
						<b-card-footer>
							<b-badge variant="dark"><locale k="EXPCALC_EXP" /></b-badge>
							<b-badge variant="warning" class="ml-2">x{{ A1(skills.tommywalker.bonus[skills.tommywalker.level]) }}</b-badge>
						</b-card-footer>
					</b-card>
				</div>
			</b-row>

			<div class="mt-3"><locale k="EXPCALC_STAGE" /></div>
			<b-row class="mt-1">
				<b-col cols="12">
					<b-form-select v-model="sortieArea" :options="areaList" />
				</b-col>
				<b-col cols="12" class="mt-2">
					<b-card no-body>
						<h4 class="m-2 p-1 clearfix">
							<div v-if="sortieArea.length === 0" class="text-center text-secondary">
								<locale k="EXPCALC_STAGE_TIP" />
							</div>
							<template v-else>
								<span v-for="(waveData, waveIdx) in sortieArea" :key="`exp-calc-explist-wave-${waveIdx}`">
									<b-icon-arrow-right v-if="waveIdx !== 0" class="mx-2" />
									<b-badge variant="stat-hp">
										<locale k="EXPCALC_STAGE_FORMAT" :p0="FormatNumber(waveData.clear)" :p1="FormatNumber(waveData.enemies)" />
									</b-badge>
								</span>
							</template>
						</h4>
					</b-card>
				</b-col>
			</b-row>
			<hr />
			<b-row>
				<b-col cols="12" lg="4">
					<div class="mb-1"><locale k="EXPCALC_TARGET_LEVEL" /></div>
					<div class="ml-2 mb-2">
						<b-input v-model.number="destLevel" />
					</div>
					<hr />

					<div class="mb-1"><locale k="EXPCALC_EVENT_BONUS" /></div>
					<div class="ml-2 mb-2">
						<b-row class="align-items-center">
							<b-col cols="auto" class="pr-0">+</b-col>
							<b-col>
								<b-input v-model.number="eventMultiply" />
							</b-col>
							<b-col cols="auto" class="pl-0">%</b-col>
						</b-row>
					</div>
					<hr />

					<div class="mb-1"><locale k="EXPCALC_LEADER_BONUS" /></div>
					<div class="ml-2 mb-2">
						<b-checkbox v-model="isLeader"><locale k="EXPCALC_LEADER_BONUS_DESC" /></b-checkbox>
					</div>
					<hr />

					<div class="mb-1"><locale k="EXPCALC_FACILITY_BONUS" /></div>
					<div class="ml-2 mb-2">
						<b-row v-for="(use, i) in facilityUse" :key="`exp-calc-facility-${i}`" class="align-items-center pb-1">
							<b-col cols="12" class="pr-0">
								<b-checkbox v-model="facilityUse[i]">
									<locale k="EXPCALC_FACILITY_EXP" :p0="i + 1" />
								</b-checkbox>
							</b-col>
							<b-col cols="12">
								<b-form-select v-model="facilityLevel[i]" :disabled="!use" :options="facilityLevelList" />
							</b-col>
						</b-row>
					</div>
					<hr />

					<div class="mb-1"><locale k="EXPCALC_BOOST" /></div>
					<div class="ml-2 mb-2">
						<b-checkbox v-model="isBoosted"><locale k="EXPCALC_BOOST_DESC" /></b-checkbox>
					</div>
				</b-col>
				<b-col cols="12" lg="8">
					<div class="mb-1">
						<b-icon-calculator class="mr-1" />
						<locale k="EXPCALC_RESULT" />
					</div>
					<div class="ml-4 mb-2">
						<template v-if="hasSumValues">
							<div class="mt-2"><locale k="EXPCALC_EQUIP_SKILL_BONUS" /></div>
							<h5 v-for="(waveData, wave) in sortieArea" :key="`exp-calc-bonus-wave-${wave}`">
								<b-badge variant="warning">
									<locale k="EXPCALC_WAVE_ENEMIES" :p0="wave + 1" :p1="FormatNumber(waveData.enemies)" />
								</b-badge>

								<b-badge
									v-for="(equip, equipIdx) in UsingExpEquips"
									:key="`exp-calc-equip-${equipIdx}-ret`"
									class="ml-1"
									variant="danger"
								>
									{{ RarityName(equip.current.base.rarity) }}
									{{ equip.current.base.name }}
									+{{ equip.level }} x{{ A1(equip.bonus[equip.current.base.rarity][equip.level]) }}
									<template v-if="equip.stack > 0">x{{ equip.stack }}</template>
								</b-badge>

								<b-badge v-if="skills.alexandra.use" class="ml-1" variant="success">
									<locale k="UNIT_SKILL_passive5_3P_Alexandra" />
									<span class="mx-1">lv.{{ skills.alexandra.level + 1 }}</span>
									x{{ A1(skills.alexandra.bonus[skills.alexandra.level]) }}
								</b-badge>

								<b-badge v-if="skills.tommywalker.use" class="ml-1" variant="success">
									<locale k="UNIT_SKILL_passive3_PECS_TommyWalker" />
									<span class="mx-1">lv.{{ skills.tommywalker.level + 1 }}</span>
									x{{ A1ME(skills.tommywalker.bonus[skills.tommywalker.level], waveData.enemies) }}
								</b-badge>
							</h5>
							<hr />
						</template>

						<h5 v-for="(waveData, wave) in sortieArea" :key="`exp-calc-result-wave-${wave}`">
							<b-badge variant="warning">
								<locale k="EXPCALC_WAVE_EXP" :p0="wave + 1" :p1="FormatNumber(waveData.clear)" />
							</b-badge>
							<b-badge v-if="isLeader" class="ml-1" variant="info">
								<locale k="EXPCALC_BADGES_LEADER" />
							</b-badge>

							<b-badge v-if="CoreLinks > 0" class="ml-1" variant="primary">
								<locale k="EXPCALC_BADGES_CORELINK" :p0="1 + CoreLinks * 0.04" />
							</b-badge>
							<b-badge v-show="hasSumValues" class="mx-1" variant="success">
								<locale k="EXPCALC_BADGES_EQUIP_SKILL" :p0="SumBonusValue(wave)" />
							</b-badge>
							<b-badge v-if="eventMultiply > 0" class="mx-1" variant="primary">
								<locale k="EXPCALC_BADGES_EVENT" :p0="eventMultiply / 100 + 1" />
							</b-badge>

							<template v-if="isBoosted">
								<b-icon-plus class="mx-1" />
								<b-badge class="mx-1" variant="primary">
									<locale k="EXPCALC_BADGES_BOOST" :p0="FormatNumber(waveData.clear)" />
								</b-badge>
							</template>

							<span v-for="(expBonus, faceIdx) in UsingFacility" :key="`exp-calc-result-facility-${faceIdx}`">
								<b-icon-plus class="mx-1" />
								<b-badge class="mx-1" variant="primary">
									<locale k="EXPCALC_BADGES_FACILITY" :p0="faceIdx + 1" :p1="FormatNumber(waveData.clear)" :p2="expBonus" />
								</b-badge>
							</span>

							<b-icon-arrow-right class="mx-1" />
							<b-badge variant="dark">{{ FormatNumber(ResultExp(wave)) }} EXP</b-badge>
						</h5>
						<hr />
						<h5>
							<b-badge variant="warning">
								<locale k="EXPCALC_REQUIRE_EXP" :p0="FormatNumber(requiredExp)" />
							</b-badge>
							<span class="px-1">&divide;</span>
							<b-badge variant="warning">
								<locale k="EXPCALC_REQUIRE_TOTAL" :p0="FormatNumber(sumExp)" />
							</b-badge>
							<b-icon-arrow-right class="mx-1" />
							<b-badge variant="dark">
								<locale k="EXPCALC_REQUIRE_SORTIES" :p0="FormatNumber(resultCount)" />
							</b-badge>
						</h5>
					</div>
				</b-col>
			</b-row>
		</b-card-body>
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { LocaleGet } from "@/libs/Locale";

import { UnitLevelTable } from "@/libs/Const";

import { FilterableEquip } from "@/libs/Types/Equip.Filterable";
import { Worlds } from "@/libs/Types/Map";

import FilterableEquipDB from "@/libs/DB/Equip.Filterable";
import MapDB from "@/libs/DB/Map";

import { FormSelectItem, FormSelectGroup, FormSelectData, FormSelectFirst } from "@/libs/FormSelect";

import UnitFace from "@/components/UnitFace.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import { FormatNumber, groupBy } from "@/libs/Functions";
import Decimal from "decimal.js";
import { ACTOR_GRADE } from "@/libs/Types/Enums";
import buffs from "@/json/buffs";
import { Equip, EquipItem } from "@/libs/Types/Equip";
import { BUFFEFFECT_TYPE } from "@/libs/Buffs/BuffEffect";
import { EquipItemDB } from "@/libs/DB/Equip";
import LazyLoad from "@/libs/LazyData";

interface AreaWave {
	clear: number;
	enemies: number;
	r: number;
}
interface AreaNode {
	text: string;
	value: AreaWave[];
}
interface AreaMap {
	label: string;
	options: AreaNode[];
}
// interface AreaWorld {
// 	label: string;
// 	options: AreaMap[];
// }

interface ExpEquipItem {
	use: boolean;

	current: EquipItem;
	equips: EquipItem[];

	level: number;
	stack: number;
	bonus: Record<ACTOR_GRADE, number[]>;
}

interface ExpSkillItem {
	use: boolean;
	level: number;
	bonus: number[];

	flavor: boolean;
	/** 벞디벞 */
	buff: boolean;
}

@Component({
	components: {
		UnitFace,
		EquipIcon,
	},
})
export default class ExpCalculator extends Vue {
	private unitRarity: ACTOR_GRADE = ACTOR_GRADE.SS;
	private baseLevel: number = 1;
	private baseEXP: number = 0;

	private destLevel: number = 100;
	private eventMultiply: number = 0;
	private CoreLinks: number = 0;

	private isLeader: boolean = true;
	private isBoosted: boolean = false;

	private facilityUse: boolean[] = [false, false, false, false];
	private facilityLevel: number[] = [9, 9, 9, 9];

	private sortieArea: AreaWave[] = [];

	private skills: Record<string, ExpSkillItem> = {
		alexandra: {
			use: false,
			level: 0,
			bonus: new Array(10 + 2 + 1)
				.fill(0)
				.map((_, x) => Decimal.mul(x, 2.25)
					.add(20)
					.div(100)
					.toNumber()),
			flavor: false,
			buff: false,
		},
		tommywalker: {
			use: false,
			level: 0,
			bonus: new Array(10 + 2 + 1)
				.fill(0)
				.map((_, x) => Decimal.mul(x, 0.25)
					.add(5)
					.div(100)
					.toNumber()),
			flavor: false,
			buff: false,
		},
	};

	private ExpEquips: ExpEquipItem[] = [];

	private get UsingExpEquips () {
		return this.ExpEquips.filter(x => x.use);
	}

	private get rarityList () {
		return [
			ACTOR_GRADE.B,
			ACTOR_GRADE.A,
			ACTOR_GRADE.S,
			ACTOR_GRADE.SS,
		].map(x => ({
			text: this.RarityName(x),
			value: x,
		}));
	}

	private get equipLevelList (): FormSelectItem<number>[] {
		return new Array(11)
			.fill(0)
			.map((_, x) => ({
				text: `+${x}`,
				value: x,
			}));
	}

	private get equipStackList (): FormSelectItem<number>[] {
		return new Array(3)
			.fill(0)
			.map((_, x) => ({
				text: LocaleGet("EXPCALC_STACKS_FORMAT", x + 1),
				value: x + 1,
			}));
	}

	private skillLevelList (bioroid: boolean, buffBonus: boolean) {
		return new Array(10)
			.fill(0)
			.map((_, x) => ({
				text: `Lv. ${x + 1}`,
				value: x,
			}));
	}

	private get skillLevelAGSList (): FormSelectItem<number>[] {
		return new Array(10)
			.fill(0)
			.map((_, x) => ({
				text: `Lv. ${x + 1}`,
				value: x,
			}));
	}

	private get facilityLevelList (): FormSelectItem<number>[] {
		return new Array(25)
			.fill(0)
			.map((_, x) => {
				const value = [
					1.25, 1.37, 1.5, 1.63, 1.75,
					1.88, 2, 2.13, 2.25, 2.38,
					2.5, 2.63, 2.75, 2.88, 3,
					3.13, 3.25, 3.38, 3.63, 3.75,
					4, 4.25, 4.5, 4.75, 5,
				][x];

				return {
					text: `Lv. ${x + 1} (${value}%)`,
					value: x,
				};
			});
	}

	private get areaList () {
		// const worlds: AreaWorld[] = [];
		const maps: AreaMap[] = [];
		for (const world in MapDB) {
			// const maps: AreaMap[] = [];
			for (const area in MapDB[world]) {
				const nodes: AreaNode[] = [];
				MapDB[world][area].list.forEach(map => {
					if (!map.wave) return;

					const waves: AreaWave[] = [];
					map.wave.forEach(w => {
						waves.push(
							w.reduce((p, c) => p.r > c.r ? p : {
								clear: c.e.exp,
								enemies: c.e.enemy.filter(e => e).length,
								r: c.r,
							}, { clear: 0, enemies: 0, r: 0 }),
						);
					});
					nodes.push({
						// eslint-disable-next-line no-irregular-whitespace
						text: `${map.text}　　　${LocaleGet(`WORLD_MAP_${world}_${map.text}`)}`,
						value: waves,
					});
				});
				if (
					nodes.length === 0 ||
					nodes.every(map => map.value.every(wave => wave.clear === 0))
				) continue;

				maps.push({
					label: world === "Story"
						? LocaleGet("EXPCALC_STAGE_AREA", area)
						: `${LocaleGet(`WORLD_${world}`)} - ${LocaleGet("EXPCALC_STAGE_AREA", area)}`,
					options: nodes,
				});
			}
			if (maps.length === 0) continue;

			// worlds.push({
			// 	label: world,
			// 	options: maps,
			// });
		}
		return maps;
	}

	private get requiredExp () {
		const rarityMultiply: Record<ACTOR_GRADE, number> = {
			[ACTOR_GRADE.SS]: 1.875,
			[ACTOR_GRADE.S]: 1.5,
			[ACTOR_GRADE.A]: 1.25,
			[ACTOR_GRADE.B]: 1,
		};

		const startExp = (() => {
			let exp = this.baseEXP;
			for (let i = 0; i < this.baseLevel; i++)
				exp += Math.floor((UnitLevelTable[i] || 0) * rarityMultiply[this.unitRarity]);
			return exp;
		})();
		const destExp = (() => {
			let exp = 0;
			for (let i = 0; i < this.destLevel; i++)
				exp += Math.floor((UnitLevelTable[i] || 0) * rarityMultiply[this.unitRarity]);
			return exp;
		})();
		return Math.max(0, destExp - startExp);
	}

	private get UsingFacility () {
		const table = [
			1.25, 1.37, 1.5, 1.63, 1.75,
			1.88, 2, 2.13, 2.25, 2.38,
			2.5, 2.63, 2.75, 2.88, 3,
			3.13, 3.25, 3.38, 3.63, 3.75,
			4, 4.25, 4.5, 4.75, 5,
		];

		return this.facilityUse
			.map((x, i) => x ? this.facilityLevel[i] : -1)
			.filter(x => x >= 0)
			.map(x => Decimal.div(table[x], 100).toNumber());
	}

	private get hasSumValues () {
		return this.skills.alexandra.use ||
			this.skills.tommywalker.use ||
			this.UsingExpEquips.length > 0;
	}

	private get sumExp () {
		return this.sortieArea
			.map((x, i) => i)
			.reduce((p, c) => p + this.ResultExp(c), 0);
	}

	private get resultCount () {
		const exp = this.sumExp;
		return Math.max(0, Math.ceil(this.requiredExp / exp));
	}

	private FormatNumber (num: number): string {
		return FormatNumber(num);
	}

	private RarityName (rarity: ACTOR_GRADE) {
		const table: Record<ACTOR_GRADE, string> = {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
		return table[rarity];
	}

	private RarityOptions (rarities: EquipItem[]) {
		return rarities.map(x => ({
			text: this.RarityName(x.base.rarity),
			value: x,
		}));
	}

	private A1 (value: number) {
		return Decimal.add(value, 1).toNumber();
	}

	private A1ME (value: number, enemies: number) {
		return this.A1(Decimal.mul(value, enemies).toNumber());
	}

	private SumBonusValue (wave: number) {
		let sumValue = new Decimal(0);

		this.UsingExpEquips
			.forEach(x => {
				sumValue = sumValue.add(
					Decimal.mul(
						x.bonus[x.current.base.rarity][x.level],
						Math.max(x.stack, 1),
					),
				);
			});

		if (this.skills.alexandra.use)
			sumValue = sumValue.add(this.skills.alexandra.bonus[this.skills.alexandra.level]);

		if (this.skills.tommywalker.use) {
			sumValue = sumValue.add(
				Decimal.mul(
					this.skills.tommywalker.bonus[this.skills.tommywalker.level],
					this.sortieArea[wave].enemies,
				),
			);
		}

		return sumValue.add(1).toNumber();
	}

	private ExpBonusMultiply (value: string) {
		if (value.endsWith("%"))
			return parseFloat(value.substr(0, value.length - 1)) * 0.01 + 1;
		else
			return parseFloat(value) * 0.01 + 1;
		// equip.equip.stats[equip.level][0].actions[0].params[0];
	}

	private ResultExp (wave: number) {
		const base = this.sortieArea[wave].clear;
		let exp = new Decimal(base);

		// {[(웨이브 경험치 X 리더 보너스) X 장비 및 스킬에 의한 상승량 총합] X 이벤트 경험치} X 링크 보너스 + 시설 경험치 + 부스트 경험치
		if (this.isLeader) exp = exp.mul(1.2).floor();

		exp = exp.mul(this.SumBonusValue(wave)).floor();
		exp = exp.mul(
			Decimal.div(this.eventMultiply, 100).add(1),
		).floor();
		exp = exp.mul(
			Decimal.div(this.CoreLinks, 25).add(1),
		).floor();

		if (this.isBoosted)
			exp = exp.add(Decimal.div(base, 2)).floor();

		this.UsingFacility.forEach(x => (exp = exp.add(Decimal.mul(base, x))));

		return Math.floor(exp.toNumber());
	}

	private mounted () {
		(() => {
			return FilterableEquipDB
				.filter(x => x.effects.some(y => y.type === BUFFEFFECT_TYPE.STAGE_EXP_UP))
				.forEach(async x => {
					if (x.rarity !== ACTOR_GRADE.SS) return false;
					if (!x.available) return false;

					const equips = await new Promise<EquipItem[]>((resolve, reject) => {
						const list = FilterableEquipDB.filter(y => y.type === x.type && y.key === x.key);

						const cbs: Array<(callback: (loaded: EquipItem | null) => void) => EquipItem | null> = [];
						list.forEach(x => cbs.push(cb => EquipItemDB(x.fullKey, x => cb(x))));

						LazyLoad(
							e => resolve(e.filter(x => x) as EquipItem[]),
							...cbs,
						);
					});

					const retGroup = {} as Record<ACTOR_GRADE, number[]>;
					equips.forEach(x => {
						const ret: number[] = [];
						for (let i = 0; i <= 10; i++) {
							const y = x.stats[i];
							if (!y) return false;

							const z = y.find(z => "buffs" in z && z.buffs.some(a => "exp" in a.value));
							if (!z || !("buffs" in z)) return false;

							const a = z.buffs.find(a => "exp" in a.value);
							if (!a || !("exp" in a.value)) return false;

							ret.push(Decimal.div(a.value.exp.base.replace("%", ""), 100).toNumber());
						}
						retGroup[x.base.rarity] = ret;
					});

					const current = equips.find(x => x.base.rarity === ACTOR_GRADE.SS) as EquipItem;

					const y = current.stats.find(y => y.some(z => "buffs" in z && z.buffs.some(a => "exp" in a.value)));
					if (!y) return false;

					const z = y.find(z => "buffs" in z && z.buffs.some(a => "exp" in a.value));
					if (!z || !("buffs" in z)) return false;

					this.ExpEquips.push({
						current,
						equips,
						use: false,

						// name: x.name,
						level: 10,
						stack: z.maxStack,
						bonus: retGroup,
					});
				});
		})();
	}
}
</script>

<style lang="scss">
#app > .container > .exp {
	.exp-calculator {
		[data-invalid="1"] {
			opacity: 0.5;
		}
	}
	.text-keep {
		word-break: keep-all;
	}
}
</style>
