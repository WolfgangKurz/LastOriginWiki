<template>
	<div class="unit-status" v-if="unit && unit.id">
		<b-input-group class="mb-3">
			<b-input readonly :value="StatsLink" />
			<b-input-group-append>
				<b-button variant="primary" @click="ExportSerialized">내보내기</b-button>
				<b-button variant="secondary" @click="ImportSerialized">가져오기</b-button>
			</b-input-group-append>
		</b-input-group>

		<b-card class="mb-3 text-left" :bg-variant="`rarity-${sUnit.Rarity}`">
			<b-row>
				<b-col cols="12" md="6">
					<div class="mr-2 float-left">
						<unit-face :id="unit.id" size="52" />
					</div>
					<strong class="pt-1">
						{{unit.name}}
						<b-badge class="ml-1" variant="secondary">{{sUnit.Rarity}}</b-badge>
					</strong>
					<div>
						<small>{{unit.group}}・{{UnitType}}・{{UnitRole}}</small>
					</div>
					<div class="clearfix" />
				</b-col>
				<hr class="d-md-none col-11" />
				<b-col cols="12" md="6">
					<strong>출격 비용</strong>
					<b-row>
						<b-col cols="4">
							<img class="res-icon" :src="`${AssetsRoot}/res-component.png`" />
							<span
								:class="`text-${sUnit.FullLinkBonus === 'discount' ? 'primary' : 'dark'}`"
							>{{CostTable.components[sUnit.LinkCount]}}</span>
						</b-col>
						<b-col cols="4">
							<img class="res-icon" :src="`${AssetsRoot}/res-nutrition.png`" />
							<span
								:class="`text-${sUnit.FullLinkBonus === 'discount' ? 'primary' : 'dark'}`"
							>{{CostTable.nutritions[sUnit.LinkCount]}}</span>
						</b-col>
						<b-col cols="4">
							<img class="res-icon" :src="`${AssetsRoot}/res-power.png`" />
							<span
								:class="`text-${sUnit.FullLinkBonus === 'discount' ? 'primary' : 'dark'}`"
							>{{CostTable.power[sUnit.LinkCount]}}</span>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-card>

		<b-row>
			<b-col cols="12" md="6" class="mb-2">
				<b-card class="unit-stat-display" bg-variant="dark">
					<b-row>
						<b-col v-for="resist in ResistList" :key="`unit-stats-resist=${resist}`" cols="4">
							<div class="status-col">
								<div class="status-col-icon">
									<elem-icon inline :elem="resist" />
								</div>
								<div class="status-col-content">
									<div class="status-col-head">{{StatList[`resist.${resist}`].name}}</div>
									<div
										class="status-col-value"
										:data-value="UnitStats.final[`resist.${resist}`].value"
										:data-type="resist"
									>
										{{UnitStats.final[`resist.${resist}`].value}}
										{{UnitStats.final[`resist.${resist}`].postfix}}
									</div>
								</div>
							</div>
						</b-col>
					</b-row>
					<hr />
					<template v-for="(entity, idx) in StatRows">
						<hr v-if="entity === false" :key="`unit-status-stat-row-${idx}`" />
						<b-row v-else :key="`unit-status-stat-row-${idx}`">
							<b-col
								v-for="key in entity.list"
								:key="`unit-status-stat-${key}`"
								class="mt-3"
								:cols="entity.size"
							>
								<div class="status-col">
									<div class="status-col-icon">
										<stat-icon inline :stat="key" />
									</div>
									<div class="status-col-content">
										<div class="status-col-head">{{StatList[key].name}}</div>

										<div
											v-if="key in UnitStats.non"
											class="status-col-value"
											:data-real="UnitStats.non[key].list.length === 0 ? 0 : 1"
										>
											<div v-if="UnitStats.non[key].list.length === 0">0%</div>
											<template v-else>
												<div
													v-for="(chance, chanceIdx) in UnitStats.non[key].list"
													:key="`unit-status-stat-${key}-${chanceIdx}`"
												>
													{{chance}}
													{{UnitStats.non[key].postfix}}
												</div>
											</template>
										</div>
										<div
											v-else-if="UnitStats.final[key].value !== UnitStats.base[key].value || !BaseStatList.includes(key)"
											class="status-col-value"
											data-real="1"
											:data-value="UnitStats.final[key].value"
										>
											{{UnitStats.final[key].value}}
											{{UnitStats.final[key].postfix}}
										</div>
										<div
											v-if="BaseStatList.includes(key)"
											class="status-col-value"
											data-real="0"
											:data-value="UnitStats.base[key].value"
										>
											{{UnitStats.base[key].value}}
											{{UnitStats.base[key].postfix}}
										</div>
									</div>
								</div>
							</b-col>
						</b-row>
					</template>
				</b-card>
			</b-col>
			<b-col cols="12" md="6">
				<b-card bg-variant="dark">
					<b-input-group>
						<b-input-group-prepend>
							<b-button variant="secondary" @click="sUnit.Level = 1">
								<b-icon-chevron-double-down />
							</b-button>
							<div class="input-prepend">Lv.</div>
						</b-input-group-prepend>
						<b-input class="pl-5" v-model="sUnit.Level" number />
						<b-input-group-append>
							<b-dropdown :variant="`rarity-${sUnit.Rarity}`" class="border-left">
								<template #button-content>{{sUnit.Rarity}}</template>
								<b-dropdown-item
									v-for="rarity in UnitRarities"
									:key="`unit-status-rarity-${rarity}`"
									@click="sUnit.Rarity = rarity"
								>{{rarity}}</b-dropdown-item>
							</b-dropdown>
							<b-button variant="secondary" @click="sUnit.Level = 100">
								<b-icon-chevron-double-up />
							</b-button>
						</b-input-group-append>
					</b-input-group>

					<unit-stats-upgrade class="mt-2" :unit="sUnit" />
					<unit-stats-core-link class="mt-2" :unit="sUnit" />
					<unit-stats-equip class="mt-2" :unit="sUnit" />
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { AssetsRoot } from "@/libs/Const";

import CostData from "@/json/unit-cost.json";

import { Unit, CostTable, RawCostTable } from "@/libs/Types";
import { UnitStatsData, EquipData } from "@/libs/DB";
import { FormatNumber } from "@/libs/Functions";

import { Unit as SimUnit } from "@/pages/Simulation/Simulation/Unit";
import { StatList, StatType, Stat, UnitStat, StatListTable } from "@/pages/Simulation/Simulation/Stats";

import UnitFace from "@/components/UnitFace.vue";
import ElemIcon from "@/components/ElemIcon.vue";
import StatIcon from "@/components/StatIcon.vue";

import UnitStatsUpgrade from "./Stats/UnitStatsUpgrade.vue";
import UnitStatsCoreLink from "./Stats/UnitStatsCoreLink.vue";
import UnitStatsEquip from "./Stats/UnitStatsEquip.vue";

@Component({
	components: {
		UnitFace,
		ElemIcon,
		StatIcon,

		UnitStatsUpgrade,
		UnitStatsCoreLink,
		UnitStatsEquip,
	},
})
export default class UnitStatus extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private unit!: Unit;

	@Prop({
		type: String,
		default: null,
	})
	private serialized!: string | null;

	private StatsLink: string = "";

	private gsUnit: SimUnit | null = null;
	private get sUnit (): SimUnit {
		if (this.gsUnit) {
			this.gsUnit.$off();
			this.gsUnit.$destroy();
			this.gsUnit = null;
		}

		this.gsUnit = new SimUnit();
		this.gsUnit.$on("update", () => (this.StatsLink = this.BuildLink()));
		this.gsUnit.SetUnit(this.unit.id);
		return this.gsUnit;
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get StatRows () {
		return [
			{
				size: 3,
				list: ["hp", "atk", "def", "acc"],
			},
			{
				size: 3,
				list: ["eva", "crit", "spd"],
			},
			false,

			{
				size: 4,
				list: ["armorpierce", "range"],
			},
			{
				size: 4,
				list: ["dmg.light", "dmg.air", "dmg.heavy"],
			},
			false,

			{
				size: 4,
				list: ["dr", "resist", "off"],
			},
			{
				size: 4,
				list: ["-acc", "-eva", "-range"],
			},
		];
	}

	private get UnitType () {
		return {
			light: "경장",
			air: "기동",
			heavy: "중장",
		}[this.unit.type];
	}

	private get UnitRole () {
		return {
			attacker: "공격기",
			defender: "보호기",
			supporter: "지원기",
		}[this.unit.role];
	}

	private get CostTable (): CostTable {
		type CostCell = [number, number, number, number, number, number];
		const key = `${this.sUnit.Rarity}_${this.unit.type}_${this.unit.role}`;
		const costData = CostData as unknown as RawCostTable;
		let table = costData[key][this.unit.body];

		if (this.sUnit.FullLinkBonus === "discount") {
			const isSS = this.sUnit.Rarity === "SS";
			const _ = (x: number) => Math.ceil(x * (isSS ? 0.75 : 0.8));

			table = JSON.parse(JSON.stringify(table));
			table.components[5] = _(table.components[5]);
			table.nutritions[5] = _(table.nutritions[5]);
			table.power[5] = _(table.power[5]);
		}
		return table;
	}

	private get StatList () {
		return StatList;
	}

	private get UnitRarities () {
		const order = {
			B: 1,
			A: 2,
			S: 3,
			SS: 4,
		};
		return [this.unit.rarity, ...this.unit.promotions || []].sort((a, b) => order[a] - order[b]);
	}

	private get ResistList () {
		return ["fire", "chill", "thunder"];
	}

	private get BaseStatList () {
		return ["atk", "def", "hp", "acc", "eva", "crit", "spd"];
	}

	private get UnitStats () {
		interface ResultType {
			name: string;
			final: number;
			added: number;
			rounded: boolean;
			value: string;
			list?: number[];
			postfix: string;
		}
		interface ResultContainer {
			base: Record<string, ResultType>;
			final: Record<string, ResultType>;
			non: Record<string, ResultType>;
		}

		const output: ResultContainer = {
			base: {},
			final: {},
			non: {},
		};
		for (const k in StatList) {
			const key = k as StatType;
			const stat = StatList[key];
			const sStat = this.sUnit.StatData[key];

			if (sStat.isIndependent) {
				output.non[key] = {
					name: stat.name,
					final: 0,
					added: 0,
					rounded: stat.rounded || false,
					value: "",
					postfix: stat.postfix || "",
					list: sStat.independentValues,
				};
				continue;
			}

			(() => {
				const final = this.FinalValue(sStat, key, false);
				const added = final - sStat.base;
				output.base[key] = {
					name: stat.name,
					final,
					added,
					rounded: stat.rounded || false,
					value: this.NumValue(final, !!stat.rounded, !!stat.literal),
					postfix: stat.postfix || "",
				};
			})();
			(() => {
				const final = this.FinalValue(sStat, key, true);
				const added = final - sStat.base;
				output.final[key] = {
					name: stat.name,
					final,
					added,
					rounded: stat.rounded || false,
					value: this.NumValue(final, !!stat.rounded, !!stat.literal),
					postfix: stat.postfix || "",
				};
			})();
		}

		return output;
	}

	private FinalValue (stat: Stat, key: StatType, buffed: boolean) {
		const buffType = !this.BaseStatList.includes(key);
		let value = stat.base;
		value += stat.pointed + stat.equiped;
		value += stat.linked;

		if (buffed) {
			value += value * stat.equipedRatio;
			if (buffType) {
				value += stat.fullLinkBonus;
				value *= 1 + (stat.fullLinkBonusRatio / 100);
			}
		}
		if (!buffType) {
			value += stat.fullLinkBonus;
			value *= 1 + (stat.fullLinkBonusRatio / 100);
		}

		return value;
	}

	private NumValue (value: number, rounded?: boolean, literal?: boolean) {
		const normalized = ((v) => {
			const fixed = v.toFixed(8);
			return parseFloat(
				fixed.substr(0, fixed.length - 6),
			); // 2자리만 남기고
		})(value);

		if (rounded)
			return (!literal && normalized >= 0 ? "+" : "") + FormatNumber(Math.round(normalized));
		else {
			const integer = FormatNumber(Math.floor(normalized));
			const float = ((x: number) => {
				const y = x.toString();
				if (!y.includes(".")) return "";
				return y.substr(y.indexOf("."));
			})(normalized);
			return (!literal && normalized >= 0 ? "+" : "") + integer + float;
		}
	}

	private ExportSerialized () {
		alert(
			window.btoa(JSON.stringify(this.sUnit.Serialize())),
		);
	}

	private ImportSerialized () {
		const input = prompt("공유 문자열을 입력해주세요.");

		if (input) {
			try {
				const x = window.atob(input);
				this.sUnit.Deserialize(x);
			} catch (e) {
				alert("올바르지 않은 공유 문자열입니다.");
			}
		}
	}

	private BuildLink (): string {
		const json = JSON.stringify(this.sUnit.Serialize());
		const based = window.btoa(json);

		const loc = window.location;

		return `${loc.origin}/units/stats/${based}`;
	}

	private created () {
		setTimeout(() => {
			const stored = localStorage.getItem(`unit-stats-${this.sUnit.Id}`);
			if (stored) {
				try {
					this.sUnit.Deserialize(stored);
				} finally {
					localStorage.removeItem(`unit-stats-${this.sUnit.Id}`);
				}
			}
		}, 100);
	}
}
</script>

<style lang="scss">
.unit-status {
	.card.bg-dark > .card-body > hr {
		margin-bottom: 0;
		border-top-color: rgba($white, 0.1);
	}

	.res-icon {
		width: 20px;
		margin-right: 0.5em;
	}

	.unit-stat-display .row {
		padding-left: 0.5rem;
		padding-right: 0.5rem;

		$list: ();
		@for $i from 1 through 12 {
			$list: join($list, #{".col-#{$i}"}, $separator: comma);
		}
		#{$list} {
			padding-left: 0.25rem;
			padding-right: 0.25rem;
		}
	}

	.status-col {
		display: flex;
		.status-col-content {
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
		}

		.status-col-head,
		.status-col-value {
			line-height: 1.2em;
			font-weight: bold;
			text-align: left;
		}

		.status-col-head {
			word-break: keep-all;
			font-size: 80%;
			color: $gray-500;
		}
		.status-col-value {
			color: $gray-400;

			&[data-type="fire"] {
				color: $red;
			}
			&[data-type="chill"] {
				color: lighten($cyan, 20%);
			}
			&[data-type="thunder"] {
				color: $yellow;
			}

			&[data-real="0"] {
				font-size: 90%;
			}
			&[data-real="1"] {
				color: lighten($cyan, 20%);

				&[data-value^="-"] {
					color: $red;
				}
			}

			&[data-value="+0"] {
				color: $gray-600;
			}
		}

		@include media-breakpoint-up("xs") {
			flex-direction: column;
			align-items: center;
			text-align: center;

			.status-col-icon {
				padding-right: 0;
			}
			.status-col-head {
				text-align: center;
			}
		}
		@include media-breakpoint-up("lg") {
			flex-direction: row;
			align-items: flex-start;
			text-align: left;

			.status-col-icon {
				padding-right: 0.5em;
			}
		}
	}

	.input-prepend {
		position: absolute;
		margin-left: 4.5em;
		line-height: 2.75em;
		font-weight: bold;
		font-size: 90%;
		color: $secondary;
		z-index: 5;
	}
}
</style>
