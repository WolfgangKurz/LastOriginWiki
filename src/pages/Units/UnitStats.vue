<template>
	<div class="unit-status" v-if="unit && unit.id">
		<!-- <b-input-group class="mb-3">
			<b-input readonly :value="StatsLink" />
			<b-input-group-append>
				<b-button variant="primary" @click="ExportSerialized">내보내기</b-button>
				<b-button variant="secondary" @click="ImportSerialized">가져오기</b-button>
			</b-input-group-append>
		</b-input-group> -->

		<b-card class="mb-3 text-left" :bg-variant="`rarity-${sUnit.Rarity}`">
			<b-row>
				<b-col cols="12" md="6">
					<div class="mr-2 float-left">
						<unit-face :uid="unit.uid" size="52" />
					</div>
					<strong class="pt-1">
						{{ unit.name }}
						<b-badge class="ml-1" variant="secondary">{{ RarityName[sUnit.Rarity] }}</b-badge>
					</strong>
					<div>
						<small>{{ unit.group }}・{{ UnitType }}・{{ UnitRole }}</small>
					</div>
					<div class="clearfix" />
				</b-col>
				<hr class="d-md-none col-11" />
				<b-col cols="12" md="6">
					<strong>출격 비용</strong>
					<b-row>
						<b-col cols="4">
							<img class="res-icon" :src="`${AssetsRoot}/res-component.png`" />
							<span :class="`text-${IsCostDiscount ? 'primary' : 'dark'}`">{{ CostTable.metal[sUnit.LinkCount] }}</span>
						</b-col>
						<b-col cols="4">
							<img class="res-icon" :src="`${AssetsRoot}/res-nutrition.png`" />
							<span :class="`text-${IsCostDiscount ? 'primary' : 'dark'}`">{{ CostTable.nutrient[sUnit.LinkCount] }}</span>
						</b-col>
						<b-col cols="4">
							<img class="res-icon" :src="`${AssetsRoot}/res-power.png`" />
							<span :class="`text-${IsCostDiscount ? 'primary' : 'dark'}`">{{ CostTable.power[sUnit.LinkCount] }}</span>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-card>

		<b-row>
			<b-col cols="12" md="6" class="mb-2">
				<b-card class="unit-stat-display" bg-variant="dark">
					<b-row>
						<b-col v-for="(statKey, resist) in ResistList" :key="`unit-stats-resist-${resist}`" cols="4">
							<div class="status-col">
								<div class="status-col-icon">
									<elem-icon inline :elem="resist" />
								</div>
								<div class="status-col-content">
									<div class="status-col-head">{{ StatName[statKey] }}</div>
									<div class="status-col-value" :data-value="UnitStats.final[statKey].value" :data-type="resist">
										{{ UnitStats.final[statKey].value }}
										{{ StatPostfix[statKey] }}
									</div>
								</div>
							</div>
						</b-col>
					</b-row>
					<hr />
					<template v-for="(entity, idx) in StatRows">
						<hr v-if="typeof entity === 'boolean'" :key="`unit-status-stat-row-${idx}`" />
						<b-row v-else :key="`unit-status-stat-row-${idx}`">
							<b-col v-for="key in entity.list" :key="`unit-status-stat-${key}`" class="mt-3" :cols="entity.size">
								<div class="status-col">
									<div class="status-col-icon">
										<stat-icon inline :stat="key" />
									</div>
									<div class="status-col-content">
										<div class="status-col-head">{{ StatName[key] }}</div>

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
													{{ chance }}
													{{ StatPostfix[key] }}
												</div>
											</template>
										</div>
										<div
											v-else-if="UnitStats.final[key].value !== UnitStats.base[key].value || !BaseStatList.includes(key)"
											class="status-col-value"
											data-real="1"
											:data-value="UnitStats.final[key].value"
										>
											{{ UnitStats.final[key].value }}
											{{ StatPostfix[key] }}
										</div>
										<div
											v-if="BaseStatList.includes(key)"
											class="status-col-value"
											data-real="0"
											:data-value="UnitStats.base[key].value"
										>
											{{ UnitStats.base[key].value }}
											{{ StatPostfix[key] }}
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
							<b-dropdown :variant="`rarity-${RarityName[sUnit.Rarity]}`" class="border-left">
								<template #button-content>{{ RarityName[sUnit.Rarity] }}</template>
								<b-dropdown-item
									v-for="rarity in UnitRarities"
									:key="`unit-status-rarity-${rarity.value}`"
									@click="sUnit.Rarity = rarity.value"
									>{{ rarity.text }}</b-dropdown-item
								>
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
import { Decimal } from "decimal.js";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { AssetsRoot, SortieCost } from "@/libs/Const";

import { ACTOR_BODY_TYPE, ACTOR_CLASS, ACTOR_GRADE, CURRENCY_TYPE, ROLE_TYPE } from "@/libs/Types/Enums";
import UnitData, { LinkBonusType, Unit } from "@/libs/DB/Unit";
import UnitStatsData from "@/libs/DB/UnitStats";
import EquipData from "@/libs/DB/Equip";

import { FormatNumber } from "@/libs/Functions";

import { Unit as SimUnit } from "@/pages/Simulation/Simulation/Unit";
import { StatType, Stat, UnitStat, StatListTable, RatioStats, LiteralStats } from "@/pages/Simulation/Simulation/Stats";

import UnitFace from "@/components/UnitFace.vue";
import ElemIcon from "@/components/ElemIcon.vue";
import StatIcon from "@/components/StatIcon.vue";

import UnitStatsUpgrade from "./Stats/UnitStatsUpgrade.vue";
import UnitStatsCoreLink from "./Stats/UnitStatsCoreLink.vue";
import UnitStatsEquip from "./Stats/UnitStatsEquip.vue";
import { SortieCostBody } from "@/libs/Types";

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

	// private StatsLink: string = "";

	private gsUnit: SimUnit | null = null;
	private get sUnit (): SimUnit {
		if (this.gsUnit) {
			this.gsUnit.$off();
			this.gsUnit.$destroy();
			this.gsUnit = null;
		}

		this.gsUnit = new SimUnit();
		// this.gsUnit.$on("update", () => (this.StatsLink = this.BuildLink()));
		this.gsUnit.SetUnit(this.unit.uid);
		return this.gsUnit;
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get StatRows (): Array<boolean | { size: number; list: StatType[]; }> {
		return [
			{
				size: 3,
				list: ["HP", "ATK", "DEF", "ACC"],
			},
			{
				size: 3,
				list: ["EV", "Cri", "SPD"],
			},
			false,

			{
				size: 4,
				list: ["armor_pierce", "Range"],
			},
			{
				size: 4,
				list: ["damage.light", "damage.air", "damage.heavy"],
			},
			false,

			{
				size: 4,
				list: ["damage_reduce", "Resist", "off"],
			},
			{
				size: 4,
				list: ["off.-ACC", "off.-EV", "off.-Range"],
			},
		];
	}

	private get UnitType () {
		return {
			[ACTOR_CLASS.TROOPER]: "경장",
			[ACTOR_CLASS.MOBILITY]: "기동",
			[ACTOR_CLASS.ARMORED]: "중장",
		}[this.unit.type];
	}

	private get UnitRole () {
		return {
			[ROLE_TYPE.ATTACKER]: "공격기",
			[ROLE_TYPE.DEFENDER]: "보호기",
			[ROLE_TYPE.SUPPORTER]: "지원기",
		}[this.unit.role];
	}

	private GetRequireResource (rarity: ACTOR_GRADE, type: ACTOR_CLASS, role: ROLE_TYPE, body: ACTOR_BODY_TYPE, fullLinkBonus: LinkBonusType) {
		const table = (() => {
			const o = SortieCost[rarity][type][role][body as keyof SortieCostBody];
			return {
				metal: [...o[CURRENCY_TYPE.METAL]],
				nutrient: [...o[CURRENCY_TYPE.NUTRIENT]],
				power: [...o[CURRENCY_TYPE.POWER]],
			};
		})();

		const discount = (x: number) => {
			switch (fullLinkBonus) {
				case "Cost_20":
					return Decimal.mul(x, 0.8)
						.ceil()
						.toNumber();
				case "Cost_25":
					return Decimal.mul(x, 0.75)
						.ceil()
						.toNumber();
				case "Cost_30":
					return Decimal.mul(x, 0.7)
						.ceil()
						.toNumber();
				case "Cost_35":
					return Decimal.mul(x, 0.65)
						.ceil()
						.toNumber();
			}
			return x;
		};

		table.metal[5] = discount(table.metal[5]);
		table.nutrient[5] = discount(table.nutrient[5]);
		table.power[5] = discount(table.power[5]);
		return table;
	}

	private get CostTable () {
		return this.GetRequireResource(
			this.sUnit.Rarity,
			this.sUnit.Unit.type,
			this.sUnit.Unit.role,
			this.sUnit.Unit.body,
			this.sUnit.LinkSum === 5
				? this.sUnit.FullLinkBonus
				: "",
		);
	}

	private get IsCostDiscount () {
		return this.sUnit.LinkSum === 5 && this.sUnit.FullLinkBonus.startsWith("Cost_");
	}

	private get RarityName (): Record<ACTOR_GRADE, string> {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private get UnitRarities () {
		return [this.unit.rarity, ...this.unit.promotions || []]
			.sort()
			.map(x => ({
				value: x,
				text: this.RarityName[x],
			}));
	}

	private get ResistList (): Record<string, StatType> {
		return {
			fire: "resist.fire",
			ice: "resist.ice",
			lightning: "resist.lightning",
		};
	}

	private get BaseStatList (): StatType[] {
		return ["ATK", "DEF", "HP", "ACC", "EV", "Cri", "SPD"];
	}

	private get StatName (): Record<StatType, string> {
		return {
			"resist.fire": "화염 저항",
			"resist.ice": "냉기 저항",
			"resist.lightning": "번개 저항",
			ATK: "공격력",
			DEF: "방어력",
			HP: "체력",
			ACC: "적중률",
			EV: "회피율",
			Cri: "치명타",
			SPD: "행동력",
			armor_pierce: "방어 관통",
			Range: "사거리",
			"damage.light": "대경장 피해량",
			"damage.air": "대기동 피해량",
			"damage.heavy": "대중장 피해량",
			damage_reduce: "받는 피해 감소",
			Resist: "효과 저항",
			off: "효과 해제",
			"off.-ACC": "적중 감소 해제",
			"off.-EV": "회피 감소 해제",
			"off.-Range": "사거리 감소 해제",
		};
	}

	private get StatPostfix (): Record<StatType, string> {
		const ret = {} as Record<StatType, string>;
		(Object.keys(UnitStat.Empty) as StatType[])
			.forEach(x => (ret[x] = RatioStats.includes(x) ? "%" : ""));
		return ret;
	}

	private get UnitStats () {
		interface ResultType {
			key: string;
			final: number;
			added: number;
			value: string;
			list: number[];
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
		const keys = Object.keys(this.sUnit.StatData) as StatType[];
		keys.forEach(key => {
			const sStat = this.sUnit.StatData[key];

			const floor = ["HP", "ATK", "DEF", "Range"].includes(key);

			if (sStat.isIndependent) {
				output.non[key] = {
					key,
					final: 0,
					added: 0,
					value: "",
					list: sStat.independentValues,
				};
				return;
			}

			(() => {
				const final = this.FinalValue(sStat, key, false, floor);
				const added = Decimal.sub(final, sStat.base).toNumber();
				output.base[key] = {
					key,
					final,
					added,
					value: this.NumValue(final, key),
					list: [],
				};
			})();
			(() => {
				const final = this.FinalValue(sStat, key, true, floor);
				const added = Decimal.sub(final, sStat.base).toNumber();
				output.final[key] = {
					key,
					final,
					added,
					value: this.NumValue(final, key),
					list: [],
				};
			})();
		});

		return output;
	}

	private FinalValue (stat: Stat, key: StatType, buffed: boolean, floor: boolean = false) {
		const buffType = !this.BaseStatList.includes(key);
		let value = new Decimal(stat.base)
			.add(stat.pointed)
			.add(stat.equiped)
			.add(stat.linked);

		if (buffed) {
			value = value.add(value.mul(stat.equipedRatio));
			if (buffType) {
				value = value.add(stat.fullLinkBonus);
				value = value.mul(
					Decimal.div(stat.fullLinkBonusRatio, 100).add(1),
				);
			}
		}
		if (!buffType) {
			value = value.add(stat.fullLinkBonus);
			value = value.mul(
				Decimal.div(stat.fullLinkBonusRatio, 100).add(1),
			);
		}

		if (floor)
			return value.floor().toNumber();
		else
			return value.toNumber();
	}

	private NumValue (value: number, key: StatType) {
		const ratio = RatioStats.includes(key);
		const literal = LiteralStats.includes(key);

		if (ratio && literal)
			return value.toString();
		else if (ratio && !literal)
			return `${value >= 0 ? "+" : ""}${value}`;
		else if (!ratio && literal) {
			return new Decimal(value)
				.toNumber()
				.toString();
		} else {
			return (value >= 0 ? "+" : "") + new Decimal(value)
				.toNumber()
				.toString();
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
			const stored = localStorage.getItem(`unit-stats-${this.sUnit.Uid}`);
			if (stored) {
				try {
					this.sUnit.Deserialize(stored);
				} finally {
					localStorage.removeItem(`unit-stats-${this.sUnit.Uid}`);
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
			&[data-type="ice"] {
				color: lighten($cyan, 20%);
			}
			&[data-type="lightning"] {
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
