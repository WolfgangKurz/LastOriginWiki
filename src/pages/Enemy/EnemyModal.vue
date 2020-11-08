<template>
	<b-modal v-if="enemy && target" v-model="displaySync" centered hide-footer content-class="enemy-modal">
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
		<b-container class="table-enemy-modal mb-3">
			<b-row cols="1" cols-md="2">
				<b-col class="icon-container">
					<div class="position-relative d-inline-block">
						<div class="enemy-icon">
							<img :src="`${AssetsRoot}/${imageExt}/tbar/${target.icon}.${imageExt}`" />
						</div>
					</div>
				</b-col>
				<b-col class="nested">
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
										<strong class="pl-1">{{ target.res.fire }}%</strong>
									</b-td>
									<b-td data-type="ice">
										<elem-icon inline elem="ice" />
										<strong class="pl-1">{{ target.res.chill }}%</strong>
									</b-td>
									<b-td data-type="lightning">
										<elem-icon inline elem="lightning" />
										<strong class="pl-1">{{ target.res.thunder }}%</strong>
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
										<div class="status-col-value">{{ StatValue(target.hp, true) }}</div>
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
										<div class="status-col-value">{{ StatValue(target.atk) }}</div>
									</b-td>
									<b-td class="text-left">
										<stat-icon inline stat="ACC" />
										<span class="status-col-head">적중률</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ target.acc }}%</div>
									</b-td>
								</b-tr>

								<b-tr>
									<b-td class="text-left">
										<stat-icon inline stat="Cri" />
										<span class="status-col-head">치명타</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ target.cri }}%</div>
									</b-td>
									<b-td class="text-left">
										<stat-icon inline stat="DEF" />
										<span class="status-col-head">방어력</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ StatValue(target.def) }}</div>
									</b-td>
								</b-tr>

								<b-tr>
									<b-td class="text-left">
										<stat-icon inline stat="EV" />
										<span class="status-col-head">회피율</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ target.eva }}%</div>
									</b-td>
									<b-td class="text-left">
										<stat-icon inline stat="SPD" />
										<span class="status-col-head">행동력</span>
									</b-td>
									<b-td>
										<div class="status-col-value">{{ target.spd }}</div>
									</b-td>
								</b-tr>
							</b-tbody>
						</b-table-simple>
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>

		<b-container>
			<b-row class="enemy-display-tabs mt-1" cols="4" cols-md="7">
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
				<b-col :class="['info-tab-button', 'mt-1', displayTab === 'desc' ? 'border border-bottom-0' : 'border-bottom']">
					<a href="#" class="text-dark" @click.prevent="displayTab = 'desc'">
						<b-icon-info-circle-fill />
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
							<skill-bound target="enemy" :ap="skill.ap" :level="1" :passive="skill.passive" :range="skill.range" :bound="skill.grid" />
						</div>

						<div class="mt-3 skill-desc break-keep white-pre-line">
							<skill-description :text="Description(skill)" :level="1" />
						</div>

						<!-- <b-list-group v-if="StatusList" class="text-left">
							<b-list-group-item v-for="(status, idx) in StatusList" :key="`status-line-${idx}`">
								<node-renderer :elem="status" />
							</b-list-group-item>
						</b-list-group> -->
						<hr />
						<div class="mt-2 text-center text-secondary">세부 버프 목록은 준비중!</div>
					</b-col>
				</b-row>
			</template>
			<b-row v-if="displayTab === 'desc'">
				<b-col class="break-keep white-pre-line border border-top-0 text-left p-3">{{ target.desc }}</b-col>
			</b-row>
		</b-container>

		<b-card class="border text-center mt-3" header="등장 스테이지" body-class="p-2">
			<div v-for="(area, aindex) in Sources" :key="`unit-view-source-${aindex}`">
				<hr v-if="aindex > 0" class="my-2" />
				<source-badge v-for="(source, sindex) in area" :key="`unit-view-drop-${aindex}-${sindex}-${source}`" :source="source" detail linked />
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
import { ArrayUnique, FormatNumber } from "@/libs/Functions";
import EquipStatus from "@/libs/Equips/EquipStatus";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import RarityBadge from "@/components/RarityBadge.vue";
import SourceBadge from "@/components/SourceBadge.vue";
import ElemIcon from "@/components/ElemIcon.vue";
import StatIcon from "@/components/StatIcon.vue";

import SkillBound from "@/components/SkillBound.vue";
import SkillDescription from "@/components/SkillDescription.vue";

import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";
import EnemyData, { Enemy, EnemySkill } from "@/libs/DB/Enemy";
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
export default class EquipModal extends Vue {
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
	private enemy!: Enemy;

	@Prop({
		type: Number,
		default: 1,
	})
	private level!: number;

	private targetId: string = "";

	private currentLevel: number = 1;

	private displayTab: "desc" | string = "skill1";

	@Watch("displaySync")
	private WatchDisplay () {
		this.currentLevel = this.level;
		this.displayTab = "skill1";

		this.targetId = this.enemy ? this.enemy.id : "";
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		// return ImageExtension();
		return "png";
	}

	private get target () {
		if (!this.enemy) return null;
		return EnemyData.find(x => x.id === this.targetId) || null;
	}

	private get isEWEnemy () {
		if (!this.target) return false;
		return /_EW[0-9]*$/.test(this.target.id);
	}

	private get FamilyList () {
		if (!this.enemy) return [];
		return EnemyData
			.filter(x => (x.name === this.enemy.name))
			.map((x, i) => ({
				value: x.id,
				text: `${x.name} ${i + 1}`,
			}));
	}

	private get Skills () {
		if (!this.target) return [];
		const list: Array<EnemySkill | undefined> = this.target.skills;
		while (list.length < 6) list.push(undefined);
		return list;
	}

	private get Sources () {
		if (!this.target) return [];
		// return this.target.source;

		const ret: string[][] = [];
		const keys: string[] = [];

		Object.keys(MapData).forEach(x =>
			Object.keys(MapData[x]).forEach(y =>
				MapData[x][y].list.forEach(z =>
					z.enemy.forEach(w => w.filter(e => e && e.id === this.targetId).forEach(e => {
						if (!keys.includes(x)) keys.push(x);
						const idx = keys.indexOf(x);

						while (ret.length <= idx)
							ret.push([]);

						if (x === "Story")
							ret[idx].push(z.text);
						else
							ret[idx].push(`Ev:${x}:${z.text}`);
					})),
				),
			),
		);

		ret.forEach((x, i) => (ret[i] = ArrayUnique(x)));
		return ret;
	}

	private get RarityDisplay () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private Description (skill: EnemySkill) {
		if (!this.target) return "";

		const v = Decimal.mul(
			this.StatValue(this.target.atk),
			skill.rate,
		)
			.floor()
			.toNumber();

		let t = skill.desc.toString();
		t = t.replace(/\{0\}/g, `[@::${v}~0: (${skill.rate}배)]`);
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

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	// private get StatusList () {
	// 	if (!this.target) return null;

	// 	const stat = this.target.stats[this.currentLevel];
	// 	return stat.reduce((p, c) => [...p, ...EquipStatus(this, c)], [] as JSX.Element[]);
	// }

	// private UnitName (idx: number) {
	// 	const char = UnitData.find(x => x.id === idx);
	// 	if (char) return char.name;
	// 	return `Unit${ idx; }`;
	// }
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
	}
	.skill-icon {
		width: 100%;
	}

	.white-pre-line {
		white-space: pre-line;
	}

	.table-enemy-modal.container {
		margin-bottom: 0 !important;

		.col {
			margin-bottom: -1px;
			padding: 0.75rem;
			border: 1px solid #dee2e6;

			&.icon-container {
				display: flex;
				justify-content: center;
				align-items: center;

				.enemy-icon {
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
