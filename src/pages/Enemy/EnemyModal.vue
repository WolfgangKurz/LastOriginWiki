<template>
	<b-modal v-if="enemy && target" v-model="displaySync" size="xl" centered hide-footer content-class="enemy-modal">
		<template #modal-title>
			<div class="text-left">
				{{ target.name }}
				<b-badge v-show="isEWEnemy" class="ml-2" variant="warning">영원한 전장</b-badge>
				<div style="font-size: 60%">{{ target.id }}</div>
			</div>
		</template>

		<div v-if="FamilyList.length > 1" class="text-right mb-1">
			<b-form-select v-model="targetId" size="sm" :options="FamilyList" />
		</div>

		<b-table-simple bordered fixed table-class="table-enemy-modal mt-2 text-center">
			<b-tbody>
				<b-tr class="d-table-row d-lg-none">
					<b-td class="p-0">
						<div class="icon-container">
							<div class="enemy-icon m-3">
								<img :src="`${AssetsRoot}/${imageExt}/tbar/${target.icon}.${imageExt}`" />
							</div>
							<b-row cols="2">
								<b-col class="bg-dark text-white">유형</b-col>
								<b-col>
									<unit-badge :type="enemy.type" size="large" transparent black />
								</b-col>
								<b-col class="bg-dark text-white">역할</b-col>
								<b-col>
									<unit-badge :role="enemy.role" size="large" transparent black />
								</b-col>
								<div>
									<b-col class="bg-dark text-white">등급</b-col>
								</div>
								<b-col>
									<rarity-badge :rarity="target.rarity" />
								</b-col>
							</b-row>
						</div>
					</b-td>
				</b-tr>
				<b-tr>
					<b-td rowspan="2" class="p-0 d-lg-table-cell d-none">
						<div class="icon-container">
							<div class="enemy-icon m-3">
								<img :src="`${AssetsRoot}/${imageExt}/tbar/${target.icon}.${imageExt}`" />
							</div>
							<b-row cols="2">
								<b-col class="bg-dark text-white">유형</b-col>
								<b-col>
									<unit-badge :type="enemy.type" size="large" transparent black />
								</b-col>
								<b-col class="bg-dark text-white">역할</b-col>
								<b-col>
									<unit-badge :role="enemy.role" size="large" transparent black />
								</b-col>
								<div>
									<b-col class="bg-dark text-white">등급</b-col>
								</div>
								<b-col class="border-bottom-0">
									<rarity-badge :rarity="target.rarity" />
								</b-col>
							</b-row>
						</div>
					</b-td>
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
										<strong class="pl-1">{{ (DB && DB.res.fire) || 0 }}%</strong>
									</b-td>
									<b-td data-type="ice">
										<elem-icon inline elem="ice" />
										<strong class="pl-1">{{ (DB && DB.res.chill) || 0 }}%</strong>
									</b-td>
									<b-td data-type="lightning">
										<elem-icon inline elem="lightning" />
										<strong class="pl-1">{{ (DB && DB.res.thunder) || 0 }}%</strong>
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
										<div class="status-col-value">{{ StatValue((DB && DB.hp) || [0, 0], true) }}</div>
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
										<div class="status-col-value">{{ StatValue((DB && DB.atk) || [0, 0]) }}</div>
									</b-td>
									<b-td class="text-left">
										<stat-icon inline stat="ACC" />
										<span class="status-col-head">적중률</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ (DB && DB.acc) || 0 }}%</div>
									</b-td>
								</b-tr>

								<b-tr>
									<b-td class="text-left">
										<stat-icon inline stat="Cri" />
										<span class="status-col-head">치명타</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ (DB && DB.cri) || 0 }}%</div>
									</b-td>
									<b-td class="text-left">
										<stat-icon inline stat="DEF" />
										<span class="status-col-head">방어력</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ StatValue((DB && DB.def) || [0, 0]) }}</div>
									</b-td>
								</b-tr>

								<b-tr>
									<b-td class="text-left">
										<stat-icon inline stat="EV" />
										<span class="status-col-head">회피율</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ (DB && DB.eva) || 0 }}%</div>
									</b-td>
									<b-td class="text-left">
										<stat-icon inline stat="SPD" />
										<span class="status-col-head">행동력</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ (DB && DB.spd) || 0 }}</div>
									</b-td>
								</b-tr>
							</b-tbody>
						</b-table-simple>
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>

		<b-container>
			<b-row class="enemy-display-tabs mt-1" cols="4" cols-md="8">
				<b-col
					v-for="(skill, idx) in Skills"
					:key="`enemy-modal-skill-${idx}`"
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
				<b-col :class="['info-tab-button', 'mt-1', displayTab === 'ai' ? 'border border-bottom-0' : 'border-bottom']">
					<a href="#" class="text-dark" @click.prevent="displayTab = 'ai'">
						<b-icon-cpu-fill class="my-2" />
					</a>
				</b-col>
				<b-col :class="['info-tab-button', 'mt-1', displayTab === 'desc' ? 'border border-bottom-0' : 'border-bottom']">
					<a href="#" class="text-dark" @click.prevent="displayTab = 'desc'">
						<b-icon-info-circle-fill class="my-2" />
					</a>
				</b-col>
			</b-row>

			<template v-for="(skill, idx) in Skills">
				<b-row v-if="displayTab === `skill${idx + 1}` && skill" :key="`enemy-modal-skill-${idx}`">
					<b-col class="border border-top-0 text-left p-3">
						<elem-icon :elem="skill.type" />
						<strong>{{ skill.name }}</strong>
						<small class="ml-1">Lv.1</small>

						<div class="float-md-right bg-dark ml-md-2 mt-2 mt-md-0 p-2 text-center">
							<skill-bound :target="skill.target" :buffs="skill.buff" :level="0" :passive="skill.passive" />
						</div>

						<div class="mt-3 skill-desc">
							<div>
								<elem-icon :elem="skill.buff.type" class="mr-1" />
								<b-badge v-if="skill.buff.dismiss_guard" variant="warning" class="mr-1">보호 무시</b-badge>
								<b-badge v-if="skill.buff.target_ground" variant="danger" class="mr-1" title="땅 찍기">그리드 지정</b-badge>
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

						<buff-list v-if="BuffList[skill.key].length > 0" :list="BuffList[skill.key]" />
					</b-col>
				</b-row>
			</template>
			<b-row v-if="displayTab === 'ai'">
				<b-col class="border border-top-0 text-left p-3">
					<enemy-ai :ai="target.ai" :skills="Skills" />
				</b-col>
			</b-row>
			<b-row v-if="displayTab === 'desc'">
				<b-col class="break-keep white-pre-line border border-top-0 text-left p-1">
					<div class="bg-dark text-light p-3">{{ target.desc }}</div>
				</b-col>
			</b-row>
		</b-container>

		<b-card class="border text-center mt-3" header="등장 스테이지" body-class="p-2">
			<div v-for="(area, aindex) in Sources" :key="`enemy-modal-source-${aindex}`">
				<hr v-if="aindex > 0" class="my-2" />
				<h6 v-if="area.length > 0 && area[0].EventName" style="font-weight: bold">{{ area[0].EventName }}</h6>
				<h6 v-else-if="area.length > 0 && area[0].IsChallenge" style="font-weight: bold">{{ area[0].ChallengeName }}</h6>
				<source-badge
					v-for="(source, sindex) in area"
					:key="`enemy-modal-source-badge-${aindex}-${sindex}-${source}`"
					:source="source"
					linked
				/>
			</div>
			<template v-if="isEWEnemy">
				<hr v-if="Sources.length > 0" class="my-2" />
				<b-badge variant="dark">영원한 전장</b-badge>
			</template>
			<div v-else-if="Object.keys(Sources).length === 0" class="secondary">등장 없음</div>
		</b-card>
	</b-modal>
</template>

<script lang="ts">
import { Decimal } from "decimal.js";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { ArrayUnique } from "@/libs/Functions";
import { BuffStat } from "@/libs/Buffs/Buffs";

import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import SourceBadge from "@/components/SourceBadge.vue";
import ElemIcon from "@/components/ElemIcon.vue";
import StatIcon from "@/components/StatIcon.vue";

import SkillBound from "@/components/SkillBound.vue";
import SkillDescription from "@/components/SkillDescription.vue";
import BuffList from "@/components/BuffList";

import EnemyAI from "./EnemyAI";

import EntitySource from "@/libs/EntitySource";

import { Enemy, EnemySkill } from "@/libs/Types/Enemy";
import { FilterableEnemy } from "@/libs/Types/Enemy.Filterable";

import LazyLoad, { LazyDataType } from "@/libs/LazyData";
import EnemyDB from "@/libs/DB/Enemy";
import FilterableEnemyDB from "@/libs/DB/Enemy.Filterable";

@Component({
	components: {
		UnitBadge,
		RarityBadge,
		SourceBadge,
		ElemIcon,
		StatIcon,

		SkillBound,
		SkillDescription,
		BuffList,

		"enemy-ai": EnemyAI,
	},
})
export default class EnemyModal extends Vue {
	private DB: LazyDataType<Enemy> = null;
	private InitialDB () {
		this.DB = null;

		const target = this.target;
		if (!target) return;

		LazyLoad(
			r => {
				const Equip = r[0] as Enemy;
				if (!Equip) return (this.DB = false);
				this.DB = Equip;
			},
			cb => EnemyDB(target.id, x => cb(x)),
		);
	}

	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	@Prop({
		required: true,
		validator (v: any) {
			return typeof v === "object" || v === null;
		},
	})
	private enemy!: FilterableEnemy;

	@Prop({
		type: Number,
		default: 1,
	})
	private level!: number;

	private targetId: string = "";

	private currentLevel: number = 1;

	private displayTab: "ai" | "desc" | string = "skill1";

	@Watch("displaySync")
	private WatchDisplay () {
		this.currentLevel = this.level;
		this.displayTab = "desc";

		this.targetId = this.enemy ? this.enemy.id : "";
	}

	@Watch("targetId")
	private WatchTargetId () {
		if (this.targetId && this.$route.path.startsWith("/enemy"))
			this.$router.push({ path: `/enemy/${this.targetId}` });
		this.InitialDB();
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get target () {
		if (!this.enemy) return null;
		return FilterableEnemyDB.find(x => x.id === this.targetId) || null;
	}

	private get isEWEnemy () {
		if (!this.target) return false;
		return /_EW[0-9]*$/.test(this.target.id);
	}

	private get FamilyList () {
		if (!this.enemy) return [];

		return FilterableEnemyDB
			.filter(x => (x.name === this.enemy.name))
			.map((x, i) => ({
				value: x.id,
				text: `${x.name} ${i + 1}`,
			}));
	}

	private get Skills () {
		if (!this.DB) return [];
		const list: Array<EnemySkill | undefined> = this.DB.skills;
		while (list.length < 6) list.push(undefined);
		return list;
	}

	private get Sources () {
		const target = this.target;
		if (!target) return [];

		const ret: string[][] = [];

		Object.keys(target.used)
			.forEach(x => ret.push(target.used[x]));

		ret.forEach((x, i) => (ret[i] = ArrayUnique(x)));
		return ret.map(x => x.map(y => new EntitySource(y)));
	}

	private GetRates (skill: EnemySkill) {
		if (!this.DB) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		return new Array(10).fill(skill.buff.rate * this.StatValue(this.DB.atk));
	}

	private Description (skill: EnemySkill) {
		if (!this.DB) return "";

		const v = Decimal.mul(
			this.StatValue(this.DB.atk),
			skill.buff.rate,
		)
			.floor()
			.toNumber();

		let t = skill.desc.toString();
		t = t.replace(/\{0\}/g, `[@::${v}~0: (${skill.buff.rate}배)]`);
		return t;
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
		const output: Record<string, BuffStat[]> = {};
		this.Skills.forEach(skill => {
			if (!skill) return null;

			const stat = skill.buff.buffs;
			output[skill.key] = stat;
		});

		return output;
	}

	private mounted () {
		this.InitialDB();
	}
}
</script>

<style lang="scss">
.enemy-modal {
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

	.table-enemy-modal {
		.icon-container {
			display: flex;
			margin-bottom: 1px;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.enemy-icon {
				border-radius: 3px;
				vertical-align: middle;
				overflow: hidden;

				img {
					display: block;
					width: 128px;
					height: 128px;
				}
			}
			> div:nth-child(2) {
				flex: 1;
				margin: 0;
				width: 100%;

				> .col {
					border-left: 0 !important;
					border-right: 0 !important;
				}
			}

			.col {
				margin-bottom: -1px;
				padding: 0.75rem;
				border: 1px solid #dee2e6;

				&.bg-dark {
					border-color: #454d55;
					font-weight: bold;
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
