<template>
	<b-card no-body class="exp-calculator">
		<b-card-header>
			<b-icon-calculator class="mr-1" />
			경험치 계산기
		</b-card-header>
		<b-card-body body-class="text-left">
			<b-row>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1">현재 레벨</div>
					<div class="ml-2 mb-2">
						<b-input v-model.number="baseLevel" />
					</div>
				</b-col>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1">현재 경험치</div>
					<div class="ml-2 mb-2">
						<b-input v-model.number="baseEXP" />
					</div>
				</b-col>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1">전투원 기본 등급 (승급 전)</div>
					<div class="ml-2 mb-2">
						<b-form-select v-model="unitRarity" :options="rarityList" />
					</div>
				</b-col>
				<b-col cols="12" md="6" lg="3">
					<div class="mb-1">코어링크</div>
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

			<div class="mt-3">장비 보너스</div>
			<b-row class="mt-1" cols="1" cols-sm="2" cols-md="3">
				<div v-for="(equip, equipIdx) in ExpEquips" :key="`exp-calc-equip-${equipIdx}-0`" class="p-1">
					<b-card :data-invalid="equip.use ? 0 : 1" no-body>
						<b-card-header class="text-center">
							<b-checkbox v-model="equip.use" class="pr-4">
								<div class="mb-1">
									<equip-icon :image="equip.current.base.icon" size="small" />
								</div>
								<strong class="py-1 text-keep">{{ equip.current.base.name }}</strong>
							</b-checkbox>
						</b-card-header>
						<b-card-body>
							<b-row class="align-items-center">
								<b-col cols="auto" cols-md="12">등급 :</b-col>
								<b-col>
									<b-form-select v-model="equip.current" :options="RarityOptions(equip.equips)" />
								</b-col>
							</b-row>
							<b-row class="mt-1 align-items-center">
								<b-col cols="auto" cols-md="12">강화 :</b-col>
								<b-col>
									<b-form-select v-model="equip.level" :options="equipLevelList" />
								</b-col>
							</b-row>
							<b-row class="mt-1 align-items-center" :data-invalid="equip.stack > 0 ? 0 : 1">
								<b-col cols="auto" cols-md="12">중첩 :</b-col>
								<b-col>
									<b-form-select v-model="equip.stack" :options="equipStackList" :disabled="equip.stack <= 0" />
								</b-col>
							</b-row>
						</b-card-body>
						<b-card-footer>
							<b-badge variant="dark">경험치</b-badge>
							<b-badge variant="warning" class="ml-2">x{{ A1(equip.bonus[equip.current.base.rarity][equip.level]) }}</b-badge>
							<b-badge v-if="equip.stack > 0" variant="info" class="ml-2">x{{ equip.stack }} 중첩</b-badge>
						</b-card-footer>
					</b-card>
				</div>
			</b-row>

			<div class="mt-3">스킬 보너스</div>
			<b-row class="mt-1" cols="1" cols-sm="2" cols-md="3">
				<div class="p-1">
					<b-card :data-invalid="skills.alexandra.use ? 0 : 1" no-body>
						<b-card-header class="text-center">
							<b-checkbox v-model="skills.alexandra.use" class="pr-4">
								<div class="mb-1">
									<unit-face uid="3P_Alexandra" size="40" />
								</div>
								<strong class="py-1 text-keep">
									공진의 알렉산드라
									<span class="d-inline-block">[모범 교사]</span>
								</strong>
							</b-checkbox>
						</b-card-header>
						<b-card-body>
							<b-row class="mt-1 align-items-center">
								<b-col cols="12" md="auto">레벨 :</b-col>
								<b-col>
									<b-form-select v-model="skills.alexandra.level" :options="skillLevelList(true, true)" />
								</b-col>
							</b-row>
							<hr />
							<b-checkbox v-model="skills.alexandra.flavor">
								♥200
								<span class="d-inline-block">[스킬 레벨 Lv+1]</span>
							</b-checkbox>
							<hr />
							<b-checkbox v-model="skills.alexandra.buff">
								버프/디버프
								<span class="d-inline-block">[스킬 레벨 Lv+2]</span>
							</b-checkbox>
						</b-card-body>
						<b-card-footer>
							<b-badge variant="dark">경험치</b-badge>
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
									토미 워커
									<span class="d-inline-block">[잔해 재활용]</span>
								</strong>
							</b-checkbox>
						</b-card-header>
						<b-card-body>
							<b-row class="mt-1 align-items-center">
								<b-col cols="12" md="auto">레벨 :</b-col>
								<b-col>
									<b-form-select v-model="skills.tommywalker.level" :options="skillLevelList(false, true)" />
								</b-col>
							</b-row>
							<hr />
							<b-checkbox v-model="skills.tommywalker.flavor" disabled>
								♥200
								<span class="d-inline-block">[스킬 레벨 Lv+1]</span>
							</b-checkbox>
							<hr />
							<b-checkbox v-model="skills.tommywalker.buff">
								버프/디버프
								<span class="d-inline-block">[스킬 레벨 Lv+2]</span>
							</b-checkbox>
						</b-card-body>
						<b-card-footer>
							<b-badge variant="dark">경험치</b-badge>
							<b-badge variant="warning" class="ml-2">x{{ A1(skills.tommywalker.bonus[skills.tommywalker.level]) }}</b-badge>
						</b-card-footer>
					</b-card>
				</div>
			</b-row>

			<div class="mt-3">전투 지역</div>
			<b-row class="mt-1">
				<b-col cols="12">
					<b-form-select v-model="sortieArea" :options="areaList" />
				</b-col>
				<b-col cols="12" class="mt-2">
					<b-card no-body>
						<h4 class="m-2 p-1 clearfix">
							<div v-if="sortieArea.length === 0" class="text-center text-secondary">전투 지역을 선택해주세요.</div>
							<template v-else>
								<span v-for="(waveData, waveIdx) in sortieArea" :key="`exp-calc-explist-wave-${waveIdx}`">
									<b-icon-arrow-right v-if="waveIdx !== 0" class="mx-2" />
									<b-badge variant="stat-hp">
										{{ FormatNumber(waveData.clear) }} EXP, {{ FormatNumber(waveData.enemies) }} 철충
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
					<div class="mb-1">목표 레벨</div>
					<div class="ml-2 mb-2">
						<b-input v-model.number="destLevel" />
					</div>
					<hr />

					<div class="mb-1">이벤트 보너스</div>
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

					<div class="mb-1">리더 보너스</div>
					<div class="ml-2 mb-2">
						<b-checkbox v-model="isLeader">리더 경험치 1.2배</b-checkbox>
					</div>
					<hr />

					<div class="mb-1">경험치 부스트</div>
					<div class="ml-2 mb-2">
						<b-checkbox v-model="isBoosted">경험치 부스트 0.5배</b-checkbox>
					</div>
				</b-col>
				<b-col cols="12" lg="8">
					<div class="mb-1"><b-icon-calculator class="mr-1" />계산 결과 (전투원 경험치)</div>
					<div class="ml-4 mb-2">
						<template v-if="hasSumValues">
							<div class="mt-2">장비/스킬 보너스</div>
							<h5 v-for="(waveData, wave) in sortieArea" :key="`exp-calc-bonus-wave-${wave}`">
								<b-badge variant="warning">{{ wave + 1 }} 웨이브 {{ FormatNumber(waveData.enemies) }} 철충</b-badge>

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
									모범 교사 lv.{{ skills.alexandra.level + 1 }} x{{ A1(skills.alexandra.bonus[skills.alexandra.level]) }}
								</b-badge>

								<b-badge v-if="skills.tommywalker.use" class="ml-1" variant="success">
									잔해 재활용 lv.{{ skills.tommywalker.level + 1 }} x{{
										A1ME(skills.tommywalker.bonus[skills.tommywalker.level], waveData.enemies)
									}}
								</b-badge>
							</h5>
							<hr />
						</template>

						<h5 v-for="(waveData, wave) in sortieArea" :key="`exp-calc-result-wave-${wave}`">
							<b-badge variant="warning">{{ wave + 1 }} 웨이브 {{ FormatNumber(waveData.clear) }} EXP</b-badge>
							<b-badge v-if="isLeader" class="ml-1" variant="info">리더 x1.2</b-badge>

							<b-badge v-if="CoreLinks > 0" class="ml-1" variant="primary">코어링크 x{{ 1 + CoreLinks * 0.04 }}</b-badge>
							<b-badge v-show="hasSumValues" class="mx-1" variant="success">장비/스킬 보너스 x{{ SumBonusValue(wave) }}</b-badge>
							<b-badge v-if="eventMultiply > 0" class="mx-1" variant="primary">이벤트 보너스 x{{ eventMultiply / 100 + 1 }}</b-badge>

							<template v-if="isBoosted">
								<b-icon-plus class="mx-1" />
								<b-badge class="mx-1" variant="primary">경험치 부스트 {{ FormatNumber(waveData.clear) }} x0.5</b-badge>
							</template>

							<b-icon-arrow-right class="mx-1" />
							<b-badge variant="dark">{{ FormatNumber(ResultExp(wave)) }} EXP</b-badge>
						</h5>
						<hr />
						<h5>
							<b-badge variant="warning">필요 경험치 {{ FormatNumber(requiredExp) }}</b-badge>
							<span class="px-1">&divide;</span>
							<b-badge variant="warning">총 경험치 {{ FormatNumber(sumExp) }}</b-badge>
							<b-icon-arrow-right class="mx-1" />
							<b-badge variant="dark">{{ FormatNumber(resultCount) }} 회</b-badge>
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

import { UnitLevelTable, WorldNames } from "@/libs/Const";

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
				text: `${x + 1} 중첩`,
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
						text: `${map.text}　　　${map.name}`,
						value: waves,
					});
				});
				if (
					nodes.length === 0 ||
					nodes.every(map => map.value.every(wave => wave.clear === 0))
				) continue;

				maps.push({
					label: world === "Story"
						? `${area} 지역`
						: `${WorldNames[world] || world} - ${area} 지역`,
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

		// {[(웨이브 경험치 X 리더 보너스) X 장비 및 스킬에 의한 상승량 총합] X 이벤트 경험치} X 링크 보너스 + 시설 경험치
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
