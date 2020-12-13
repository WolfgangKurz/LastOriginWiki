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

			<b-row class="my-4">
				<b-col cols="12" class="mb-1">장비 보너스</b-col>

				<template v-for="(equip, equipIdx) in ExpEquips">
					<b-col cols="12" lg="7" :key="`exp-calc-equip-${equipIdx}-0`" :data-invalid="equip.use ? 0 : 1">
						<div class="ml-2">
							<b-row>
								<b-col cols="12" md="auto" class="mb-2">
									<b-checkbox v-model="equip.use">
										<span>
											<equip-icon :name="`${equip.name}_${equip.rarity.toLowerCase()}`" size="small" />
											<strong class="ml-2 py-1">{{ equip.name }}</strong>
										</span>
									</b-checkbox>
								</b-col>
								<b-col>
									<b-form-select v-model="equip.rarity" :options="rarityList" />
								</b-col>
								<b-col>
									<b-form-select v-model="equip.level" :options="equipLevelList" />
								</b-col>
								<b-col v-if="equip.count > 0">
									<b-form-select v-model="equip.count" :options="equipStackList" />
								</b-col>
							</b-row>
						</div>
					</b-col>
					<b-col cols="12" lg="5" :key="`exp-calc-equip-${equipIdx}-1`" class="pl-4 mb-4" :data-invalid="equip.use ? 0 : 1">
						<span class="pl-4">
							경험치 x{{ AsRounded(equip.bonus[equip.level]) }}
							<span v-if="equip.count > 0" class="pl-2">x {{ equip.count }}</span>
						</span>
					</b-col>
				</template>
			</b-row>

			<b-row class="my-4">
				<b-col cols="12" class="mb-1">스킬 보너스</b-col>

				<b-col cols="12" lg="7" :data-invalid="skills.alexandra.use ? 0 : 1">
					<div class="ml-2">
						<b-row>
							<b-col cols="12" md="auto" class="mb-2">
								<b-checkbox v-model="skills.alexandra.use">
									<span>
										<unit-face uid="3P_Alexandra" size="40" />
										<strong class="ml-2 py-1">공진의 알렉산드라 [모범 교사]</strong>
									</span>
								</b-checkbox>
							</b-col>
							<b-col>
								<b-form-select v-model="skills.alexandra.level" :options="skillLevelList" />
							</b-col>
						</b-row>
					</div>
				</b-col>
				<b-col cols="12" lg="5" class="pl-4 mb-4" :data-invalid="skills.alexandra.use ? 0 : 1">
					<span class="pl-4">경험치 x{{ AsRounded(skills.alexandra.bonus[skills.alexandra.level]) }}</span>
				</b-col>

				<b-col cols="12" lg="7" :data-invalid="skills.tommywalker.use ? 0 : 1">
					<div class="ml-2">
						<b-row>
							<b-col cols="12" md="auto" class="mb-2">
								<b-checkbox v-model="skills.tommywalker.use">
									<span>
										<unit-face uid="PECS_TommyWalker" size="40" />
										<strong class="ml-2 py-1">토미 워커 [잔해 재활용]</strong>
									</span>
								</b-checkbox>
							</b-col>
							<b-col>
								<b-form-select v-model="skills.tommywalker.level" :options="skillLevelList" />
							</b-col>
						</b-row>
					</div>
				</b-col>
				<b-col cols="12" lg="5" class="pl-4 mb-4" :data-invalid="skills.tommywalker.use ? 0 : 1">
					<span class="pl-4">경험치 x{{ AsRounded(skills.tommywalker.bonus[skills.tommywalker.level]) }}</span>
				</b-col>
			</b-row>

			<b-row>
				<b-col cols="12" md="6">
					<div class="mb-1">전투 지역</div>
					<div class="ml-2 mb-2">
						<b-form-select v-model="sortieArea" :options="areaList" />
					</div>
				</b-col>
				<b-col cols="12" md="6">
					<div class="mb-1">전투 지역 경험치</div>
					<div class="ml-2 mb-2">
						<b-card no-body>
							<h4 class="m-2 p-1 clearfix">
								<span v-for="(waveData, waveIdx) in sortieArea" :key="`exp-calc-explist-wave-${waveIdx}`">
									<b-icon-arrow-right v-if="waveIdx !== 0" class="mx-2" />
									<b-badge variant="stat-hp">
										{{ FormatNumber(waveData.exp) }} EXP, {{ FormatNumber(waveData.enemies) }} 철충
									</b-badge>
								</span>
							</h4>
						</b-card>
					</div>
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
									{{ equip.rarity }}
									{{ EquipNames[equip.name] }}
									+{{ equip.level }} x{{ AsRounded(equip.bonus[equip.level]) }}
									<template v-if="equip.count > 0">x{{ equip.count }}</template>
								</b-badge>

								<b-badge v-if="skills.alexandra.use" class="ml-1" variant="success">
									모범 교사 lv.{{ skills.alexandra.level + 1 }} x{{ AsRounded(skills.alexandra.bonus[skills.alexandra.level]) }}
								</b-badge>

								<b-badge v-if="skills.tommywalker.use" class="ml-1" variant="success">
									잔해 재활용 lv.{{ skills.tommywalker.level + 1 }} x{{
										AsRounded(1 + (skills.tommywalker.bonus[skills.tommywalker.level] - 1) * waveData.enemies)
									}}
								</b-badge>
							</h5>
							<hr />
						</template>

						<h5 v-for="(waveData, wave) in sortieArea" :key="`exp-calc-result-wave-${wave}`">
							<b-badge variant="warning">{{ wave + 1 }} 웨이브 {{ FormatNumber(waveData.exp) }} EXP</b-badge>
							<b-badge v-if="isLeader" class="ml-1" variant="info">리더 x1.2</b-badge>

							<b-badge v-if="CoreLinks > 0" class="ml-1" variant="primary">코어링크 x{{ 1 + CoreLinks * 0.04 }}</b-badge>

							<b-badge v-show="hasSumValues" class="mx-1" variant="success"
								>장비/스킬 보너스 x{{ AsRounded(SumBonusValue(wave)) }}</b-badge
							>

							<b-badge v-if="eventMultiply > 0" class="mx-1" variant="primary"
								>이벤트 보너스 x{{ AsRounded(eventMultiply / 100 + 1) }}</b-badge
							>

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

import { WorldNames } from "@/libs/Const";

import EquipData, { Equip } from "@/libs/DB/Equip";
import { ExpData } from "@/libs/DB";
import { ExpEntity, Rarity } from "@/libs/Types";
import { FormSelectItem, FormSelectGroup, FormSelectData, FormSelectFirst } from "@/libs/FormSelect";

import UnitFace from "@/components/UnitFace.vue";
import EquipIcon from "@/components/EquipIcon.vue";

interface ExpEquipItem {
	name: string;
	use: boolean;
	rarity: Rarity;
	level: number;
	count: number;
	equip: Equip;
	bonus: number[];
}

interface ExpSkillItem {
	use: boolean;
	level: number;
	bonus: number[];
}

@Component({
	components: {
		UnitFace,
		EquipIcon,
	},
})
export default class EXP extends Vue {
	private baseLevel: number = 1;
	private baseEXP: number = 0;
	private destLevel: number = 100;
	private eventMultiply: number = 0;
	private CoreLinks: number = 0;
	private isLeader: boolean = true;

	private unitRarity: Rarity = "SS";
	private sortieArea: ExpEntity[] = FormSelectFirst(this.areaList)?.value ?? [];

	private skills: Record<string, ExpSkillItem> = {
		alexandra: {
			use: false,
			level: 0,
			bonus: new Array(10 + 2 + 1)
				.fill(0)
				.map((_, x) => (20 + x * 2.25) * 0.01 + 1),
		},
		tommywalker: {
			use: false,
			level: 0,
			bonus: new Array(10 + 2 + 1)
				.fill(0)
				.map((_, x) => (5 + x * 0.25) * 0.01 + 1),
		},
	};

	private ExpEquips: ExpEquipItem[] = [];
	/*
	((): ExpEquipItem[] => {
		const group = _.groupBy(EquipData, (x) => x.name.substr(0, x.name.lastIndexOf("_")));
		return _
			.keys(group)
			.map(x => {
				const baseType = x.substr(0, x.indexOf("_"));
				const first = _.first(group[x]);
				if (!first || !first.stats.some(y => y.some(z => z.actions.some(a => a.act === "exp"))))
					return false;

				const name = first.name.substr(0, first.name.lastIndexOf("_"));
				if (name === "chip_exp") {
					return new Array(2)
						.fill(0)
						.map(() => ({
							name,
							use: false,
							rarity: "SS",
							level: 0,
							count: 1,
							equip: first,
							bonus: first.stats.map(y => this.ExpBonusMultiply(y[0].actions[0].params[0])),
						}) as ExpEquipItem);
				} else {
					return {
						name,
						use: false,
						rarity: "SS",
						level: 0,
						count: 0,
						equip: first,
						bonus: first.stats.map(y => this.ExpBonusMultiply(y[0].actions[0].params[0])),
					} as ExpEquipItem;
				}
			})
			.filter(x => typeof x !== "boolean")
			.reduce((po, c) => {
				const p = po as ExpEquipItem[];
				return Array.isArray(c) ? [...p, ...c] : [...p, c as ExpEquipItem];
			}, []) as ExpEquipItem[];
	})();
	*/

	private get MapData () {
		return ExpData.map;
	}

	private get LevelTable () {
		return ExpData.table;
	}

	private get UsingExpEquips () {
		return this.ExpEquips.filter(x => x.use);
	}

	private get rarityList (): FormSelectItem<Rarity>[] {
		return ["B", "A", "S", "SS"]
			.map(x => ({ text: x, value: x as Rarity }));
	}

	private get equipLevelList (): FormSelectItem<number>[] {
		return new Array(11)
			.fill(0)
			.map((_, x) => ({
				text: `+ ${x}`,
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

	private get skillLevelList (): FormSelectItem<number>[] {
		return new Array(10 + 2 + 1)
			.fill(0)
			.map((_, x) => {
				let postfix = "";
				switch (x) {
					case 10:
						postfix = " (호감도)";
						break;
					case 11:
						postfix = " (벞디벞)";
						break;
					case 12:
						postfix = " (벞디벞+호감도)";
						break;
				}
				return {
					text: `lv. ${x + 1}${postfix}`,
					value: x,
				};
			});
	}

	private get areaList () {
		const ret: FormSelectData<ExpEntity[]> = [];
		Object.keys(this.MapData).forEach(x => {
			const grp: FormSelectItem<ExpEntity[]>[] = [];

			const prefix = this.MapData[x].type ? x.substr(2) || "1" : x;

			Object.keys(this.MapData[x]).forEach(y => {
				if (y === "type") return;

				const z = y.endsWith("Ex")
					? y.substr(0, y.length - 2) + "2"
					: y;

				grp.push({
					text: `${x}-${y} (${prefix}${z})`,
					value: this.MapData[x][y] as ExpEntity[],
				});
			});
			ret.push({
				label: this.MapData[x].type
					? `${WorldNames[this.MapData[x].type]} ${prefix} 구역`
					: `${x} 구역`,
				options: grp,
			});
		});
		return ret;
	}

	private get requiredExp () {
		const rarityMultiply = {
			SS: 1.875,
			S: 1.5,
			A: 1.25,
			B: 1,
		};

		const startExp = (() => {
			let exp = this.baseEXP;
			for (let i = 0; i < this.baseLevel; i++)
				exp += Math.floor((this.LevelTable[i] || 0) * rarityMultiply[this.unitRarity]);
			return exp;
		})();
		const destExp = (() => {
			let exp = 0;
			for (let i = 0; i < this.destLevel; i++)
				exp += Math.floor((this.LevelTable[i] || 0) * rarityMultiply[this.unitRarity]);
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

	private SumBonusValue (wave: number) {
		let sumValue = 1;

		this.UsingExpEquips
			.forEach(x => (sumValue += (x.bonus[x.level] - 1) * (x.count > 0 ? x.count : 1)));

		if (this.skills.alexandra.use)
			sumValue += this.skills.alexandra.bonus[this.skills.alexandra.level] - 1;

		if (this.skills.tommywalker.use)
			sumValue += (this.skills.tommywalker.bonus[this.skills.tommywalker.level] - 1) * this.sortieArea[wave].enemies;

		return sumValue;
	}

	private ExpBonusMultiply (value: string) {
		if (value.endsWith("%"))
			return parseFloat(value.substr(0, value.length - 1)) * 0.01 + 1;
		else
			return parseFloat(value) * 0.01 + 1;
		// equip.equip.stats[equip.level][0].actions[0].params[0];
	}

	private AsRounded (value: number) {
		let x = value.toFixed(4);
		while (x.endsWith("0")) x = x.substr(0, x.length - 1);

		if (x.endsWith(".")) x = x.substr(0, x.length - 1);
		return x;
	}

	private ResultExp (wave: number) {
		let exp = this.sortieArea[wave].exp;

		// {[(웨이브 경험치 X 리더 보너스) X 장비 및 스킬에 의한 상승량 총합] X 이벤트 경험치} X 링크 보너스 + 시설 경험치
		exp *= (this.isLeader ? 1.2 : 1);

		exp *= this.SumBonusValue(wave);
		exp *= this.eventMultiply * 0.01 + 1;
		exp *= 1 + this.CoreLinks * 0.04;

		return Math.floor(exp);
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
}
</style>
