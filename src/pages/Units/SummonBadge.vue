<template>
	<div class="summon-badge" v-if="summon">
		<b-badge variant="dark" class="summon-badge">
			"{{ summon.name }}" 소환 / 최대 {{ summon.overlap }}체 소환 가능 / {{ summon.lifecycle }} 라운드 지속 🔗
			<a href="#" class="stretched-link" @click.prevent="display = true" />
		</b-badge>
		<b-modal v-model="display" size="lg" centered hide-footer content-class="summon-modal">
			<template #modal-title>
				<div class="text-left">
					{{ summon.name }}
					<div style="font-size: 60%">{{ summon.id }}</div>
				</div>
			</template>

			<b-container class="table-summon-modal mb-3">
				<b-row cols="1" cols-md="2">
					<b-col class="icon-container">
						<div class="position-relative d-inline-block">
							<div class="summon-icon">
								<img :src="`${AssetsRoot}/${imageExt}/tbar/${summon.icon}.${imageExt}`" />
							</div>
						</div>
					</b-col>
					<b-col class="nested">
						<b-row cols="2">
							<b-col class="bg-dark text-white">유형</b-col>
							<b-col>
								<unit-badge :type="summon.type" size="large" transparent black />
							</b-col>
							<b-col class="bg-dark text-white">역할</b-col>
							<b-col>
								<unit-badge :role="summon.role" size="large" transparent black />
							</b-col>
							<div>
								<b-col class="bg-dark text-white">등급</b-col>
							</div>
							<b-col>
								<rarity-badge :rarity="summon.rarity" />
							</b-col>
						</b-row>
					</b-col>
				</b-row>
			</b-container>

			<b-table-simple bordered fixed table-class="mt-2 text-center">
				<b-tbody>
					<b-tr>
						<b-td variant="dark">
							<b-input-group>
								<b-input-group-prepend>
									<b-button variant="secondary" @click="currentLevel = 1">
										<b-icon-chevron-double-down />
									</b-button>
									<b-button variant="secondary" @click="() => (currentLevel = Math.max(currentLevel - 1, 1))">
										<b-icon-chevron-down />
									</b-button>
									<div class="input-prepend">Lv.</div>
								</b-input-group-prepend>
								<b-input class="pl-5" v-model="currentLevel" number />
								<b-input-group-append>
									<b-button variant="secondary" @click="() => (currentLevel = Math.min(currentLevel + 1, 100))">
										<b-icon-chevron-up />
									</b-button>
									<b-button variant="secondary" @click="currentLevel = 100">
										<b-icon-chevron-double-up />
									</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-td>
					</b-tr>
					<b-tr>
						<b-td class="bg-dark status-col p-0">
							<b-table-simple borderless table-class="mb-0">
								<b-tbody>
									<b-tr class="text-center text-white resist-parent">
										<b-td data-type="fire">
											<elem-icon inline elem="fire" />
											<strong class="pl-1">{{ summon.res.fire }}%</strong>
										</b-td>
										<b-td data-type="ice">
											<elem-icon inline elem="ice" />
											<strong class="pl-1">{{ summon.res.chill }}%</strong>
										</b-td>
										<b-td data-type="lightning">
											<elem-icon inline elem="lightning" />
											<strong class="pl-1">{{ summon.res.thunder }}%</strong>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
							<b-table-simple borderless table-class="mb-0">
								<b-tbody>
									<b-tr>
										<b-td class="text-left">
											<stat-icon inline stat="HP" />
											<span class="status-col-head">HP</span>
										</b-td>
										<b-td>
											<div class="status-col-value">{{ StatValue(summon.hp, true) }}</div>
										</b-td>
										<b-td class="text-left" />
										<b-td />
									</b-tr>

									<b-tr>
										<b-td class="text-left">
											<stat-icon inline stat="ATK" />
											<span class="status-col-head">공격력</span>
										</b-td>
										<b-td>
											<div class="status-col-value">{{ StatValue(summon.atk) }}</div>
										</b-td>
										<b-td class="text-left">
											<stat-icon inline stat="ACC" />
											<span class="status-col-head">적중률</span>
										</b-td>
										<b-td>
											<div class="status-col-value">{{ summon.acc }}%</div>
										</b-td>
									</b-tr>

									<b-tr>
										<b-td class="text-left">
											<stat-icon inline stat="Cri" />
											<span class="status-col-head">치명타</span>
										</b-td>
										<b-td>
											<div class="status-col-value">{{ summon.cri }}%</div>
										</b-td>
										<b-td class="text-left">
											<stat-icon inline stat="DEF" />
											<span class="status-col-head">방어력</span>
										</b-td>
										<b-td>
											<div class="status-col-value">{{ StatValue(summon.def) }}</div>
										</b-td>
									</b-tr>

									<b-tr>
										<b-td class="text-left">
											<stat-icon inline stat="EV" />
											<span class="status-col-head">회피율</span>
										</b-td>
										<b-td>
											<div class="status-col-value">{{ summon.eva }}%</div>
										</b-td>
										<b-td class="text-left">
											<stat-icon inline stat="SPD" />
											<span class="status-col-head">행동력</span>
										</b-td>
										<b-td>
											<div class="status-col-value">{{ summon.spd }}</div>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</b-td>
					</b-tr>
				</b-tbody>
			</b-table-simple>

			<b-container>
				<b-row class="summon-display-tabs mt-1" cols="4" cols-md="7">
					<b-col
						v-for="(skill, idx) in Skills"
						:key="`summon-modal-skill-${idx}`"
						:class="['mt-1', displayTab === `skill${idx + 1}` ? 'border border-bottom-0' : 'border-bottom']"
					>
						<a href="#" @click.prevent="displayTab = `skill${idx + 1}`">
							<img
								v-if="skill"
								class="skill-icon my-2"
								:src="`${AssetsRoot}/${imageExt}/skill/${skill.icon}_${skill.passive ? 'passive' : 'active'}.${imageExt}`"
							/>
						</a>
					</b-col>
				</b-row>

				<template v-for="(skill, idx) in Skills">
					<b-row v-if="displayTab === `skill${idx + 1}` && skill" :key="`summon-modal-skill-${idx}`">
						<b-col class="border border-top-0 text-left p-3">
							<elem-icon :elem="skill.type" />
							<strong>{{ skill.name }}</strong>
							<small class="ml-1">Lv.1</small>

							<div class="float-md-right bg-dark ml-md-2 mt-2 mt-md-0 p-2 text-center">
								<skill-bound :target="skill.target" :levels="skill.buff" :level="0" :passive="skill.passive" />
							</div>

							<div class="mt-3 skill-desc">
								<div>
									<elem-icon :elem="skill.buff.type" class="mr-1" />
									<b-badge v-if="skill.buff.dismiss_guard" variant="warning" class="mr-1">보호 무시</b-badge>
									<b-badge v-if="skill.buff.target_ground" variant="danger" class="mr-1">땅 찍기</b-badge>
									<b-badge v-if="skill.buff.acc_bonus" variant="success" class="mr-1">
										적중 보정
										{{ (skill.buff.acc_bonus > 0 ? "+" : "") + skill.buff.acc_bonus }}%
									</b-badge>
								</div>
								<hr class="my-1" />

								<div class="break-keep white-pre-line">
									<skill-description :text="Description(skill)" :level="0" :rates="GetRates(skill)" />
								</div>
							</div>

							<div class="clearfix" />
							<hr />

							<b-list-group v-if="BuffList[skill.key].length > 0" class="text-left mt-2">
								<b-list-group-item v-for="(status, idx) in BuffList[skill.key]" :key="`summon-status-line-${idx}`">
									<node-renderer :elem="status" />
								</b-list-group-item>
							</b-list-group>
						</b-col>
					</b-row>
				</template>
			</b-container>
		</b-modal>
	</div>
</template>

<script lang="ts">
import { Decimal } from "decimal.js";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { ArrayUnique, FormatNumber } from "@/libs/Functions";
import BuffStatus from "@/libs/Buffs/BuffStatus";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import SourceBadge from "@/components/SourceBadge.vue";
import ElemIcon from "@/components/ElemIcon.vue";
import StatIcon from "@/components/StatIcon.vue";

import SkillBound from "@/components/SkillBound.vue";
import SkillDescription from "@/components/SkillDescription.vue";

import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";
import SummonData, { Summon, SummonSkill } from "@/libs/DB/Summon";
import UnitData from "@/libs/DB/Unit";
import MapData from "@/libs/DB/Map";

@Component({
	components: {
		NodeRenderer,
		UnitBadge,
		RarityBadge,
		SourceBadge,
		ElemIcon,
		StatIcon,

		SkillBound,
		SkillDescription,
	},
})
export default class SummonBadge extends Vue {
	@Prop({
		required: true,
		validator (v: any) {
			return typeof v === "object" || v === null;
		},
	})
	private summon!: Summon;

	private currentLevel: number = 1;

	private display: boolean = false;

	private displayTab: string = "skill1";

	@Watch("displaySync")
	private WatchDisplay () {
		this.displayTab = "skill1";
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get FamilyList () {
		if (!this.summon) return [];
		return SummonData
			.filter(x => (x.name === this.summon.name))
			.map((x, i) => ({
				value: x.id,
				text: `${x.name} ${i + 1}`,
			}));
	}

	private get Skills () {
		if (!this.summon) return [];
		const list: Array<SummonSkill | undefined> = this.summon.skills;
		while (list.length < 6) list.push(undefined);
		return list;
	}

	private get RarityDisplay () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private Description (skill: SummonSkill) {
		if (!this.summon) return "";

		const v = Decimal.mul(
			this.StatValue(this.summon.atk),
			skill.buff.rate,
		)
			.floor()
			.toNumber();

		let t = skill.desc.toString();
		t = t.replace(/\{0\}/g, `[@::${v}~0: (${skill.buff.rate}배)]`);
		return t;
	}

	private GetRates (skill: SummonSkill) {
		if (!this.summon) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		return new Array(10).fill(skill.buff.rate);
	}

	private StatValue (stat: [number, number], floorPer: boolean = false) {
		if (floorPer) {
			return Decimal.add(
				stat[0],
				Decimal.mul(
					Decimal.floor(stat[1]),
					this.currentLevel - 1,
				),
			)
				.floor()
				.toNumber();
		} else {
			return Decimal.add(
				stat[0],
				Decimal.mul(stat[1], this.currentLevel - 1),
			)
				.floor()
				.toNumber();
		}
	}

	private get BuffList () {
		const output: Record<string, JSX.Element[]> = {};
		this.Skills.forEach(skill => {
			if (!skill) return null;

			const stat = skill.buff.buffs;
			output[skill.key] = stat.reduce((p, c) => [...p, ...BuffStatus(this, c, 1)], [] as JSX.Element[]);
		});

		return output;
	}
}
</script>

<style lang="scss">
.summon-badge {
	display: inline-block;

	> .badge {
		position: relative;
	}
}
.summon-modal {
	.unknown-status {
		user-select: none;
		cursor: pointer;
	}

	.info-tab-button svg {
		width: 100%;
		height: 100%;
		max-width: 56px;
		max-height: 56px;
	}
	.skill-icon {
		width: 100%;
		max-width: 56px;
	}

	.white-pre-line {
		white-space: pre-line;
	}

	.table-summon-modal.container {
		margin-bottom: 0 !important;

		.col {
			margin-bottom: -1px;
			padding: 0.75rem;
			border: 1px solid #dee2e6;

			&.icon-container {
				display: flex;
				justify-content: center;
				align-items: center;

				.summon-icon {
					display: inline-block;
					border-radius: 3px;
					vertical-align: middle;
					overflow: hidden;

					img {
						display: block;
						width: 128px;
						height: 128px;
					}
				}
			}

			&.bg-dark {
				border-color: #454d55;
				font-weight: bold;
			}
			&.nested {
				padding: 0;
				border: 0;

				> .row {
					margin: 0;
				}
			}
		}
	}

	.skill-desc .rarity-badge {
		border: 1px solid rgba(0, 0, 0, 0.33);
		box-shadow: 0 0 1px #000;
	}

	.resist-parent {
		[data-type="fire"] {
			color: $red;
		}
		[data-type="ice"] {
			color: lighten($cyan, 20%);
		}
		[data-type="lightning"] {
			color: $yellow;
		}
	}

	.input-prepend {
		position: absolute;
		margin-left: 7.75em;
		line-height: 2.75em;
		font-weight: bold;
		font-size: 90%;
		color: $secondary;
		z-index: 5;
	}

	.status-col {
		> table {
			margin: auto;
			width: auto;
		}

		.status-col-head,
		.status-col-value {
			line-height: 1.2em;
			font-weight: bold;
			text-align: left;
		}

		.status-col-head {
			margin-left: 0.25em;
			word-break: keep-all;
			color: $gray-500;
		}
		.status-col-value {
			color: $gray-400;
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
}
</style>
