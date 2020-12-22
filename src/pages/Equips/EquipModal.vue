<template>
	<b-modal v-if="equip && target" v-model="displaySync" centered hide-footer content-class="equip-modal">
		<template #modal-title>
			<div class="text-left">
				{{ target.name }}
				<div style="font-size: 60%">{{ target.fullKey }}</div>
			</div>
		</template>

		<b-container class="table-equip-modal mb-3">
			<b-row cols="1" cols-md="2">
				<b-col class="icon-container">
					<div class="position-relative d-inline-block">
						<equip-icon :image="`${target.icon}`" size="large" />
						<equip-level :level="level" />
					</div>
				</b-col>
				<b-col class="nested">
					<b-row cols="2">
						<b-col class="bg-dark text-white">장비 유형</b-col>
						<b-col>
							<b-badge v-if="isUninstalled" variant="black">미구현</b-badge>
							<b-badge v-if="isPrivate" variant="primary">전용장비</b-badge>
							<div>
								<b-badge variant="success">{{ EquipType }}</b-badge>
							</div>
						</b-col>
						<b-col class="bg-dark text-white">장비 등급</b-col>
						<b-col>
							<template v-if="RarityList.length === 1">{{ RarityDisplay[rarity] }}</template>
							<b-form-select v-else v-model="rarity" size="sm" :options="RarityList" />
						</b-col>
						<b-col class="bg-dark text-white">장착 제한</b-col>
						<b-col>
							<span v-if="Limits.length === 0" class="text-secondary">제한 없음</span>
							<template v-else>
								<span v-for="limit in Limits" :key="`equip-limit-${limit}`">
									<unit-badge v-if="typeof limit === 'string'" :limit="limit" />
									<a v-else :href="`/units/${limit}`" @click.prevent="GoTo(`/units/${limit}`)">
										<b-badge class="unit-name-badge" variant="primary">{{ UnitName(limit) }} 🔗</b-badge>
									</a>
								</span>
							</template>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-row class="mt-1">
				<b-col class="break-keep white-pre-line">{{ target.desc }}</b-col>
			</b-row>
		</b-container>

		<b-tabs nav-class="equip-display-tabs mt-2">
			<b-tab title-link-class="text-dark" :active="displayTab === 'info'" @click="displayTab = 'info'">
				<template #title>
					<b-icon-receipt class="mr-1" />
					장비효과
				</template>
			</b-tab>
			<b-tab title-link-class="text-dark" :active="displayTab === 'drop'" @click="displayTab = 'drop'">
				<template #title>
					<b-icon-basket-fill class="mr-1" />
					획득처
				</template>
			</b-tab>
			<b-tab title-link-class="text-dark" :active="displayTab === 'enchant'" @click="displayTab = 'enchant'">
				<template #title>
					<b-icon-cpu-fill class="mr-1" />
					강화비용
				</template>
			</b-tab>
		</b-tabs>

		<template v-if="displayTab === 'info'">
			<b-table-simple bordered fixed table-class="text-center">
				<b-tbody>
					<b-tr>
						<b-th variant="dark">강화 레벨 +{{ level }}</b-th>
					</b-tr>
					<b-tr>
						<b-td>
							<b-input type="range" min="0" max="10" v-model="level" number />
						</b-td>
					</b-tr>
				</b-tbody>
			</b-table-simple>

			<buff-list v-if="StatusList" :list="StatusList" />
		</template>

		<template v-if="displayTab === 'drop'">
			<b-container>
				<b-row>
					<b-col class="text-center pt-2">
						<b-badge v-if="target.craftable" variant="dark">
							<b-icon-hammer class="mr-1" />
							제조 {{ CraftTime }}
						</b-badge>

						<div v-for="(area, aindex) in Sources" :key="`equip-modal-source-${aindex}`">
							<hr v-if="(target && target.craftable) || aindex > 0" class="my-1" />
							<h6 v-if="area.length > 0 && area[0].EventName" style="font-weight: bold">{{ area[0].EventName }}</h6>
							<h6 v-else-if="area.length > 0 && area[0].IsChallenge" style="font-weight: bold">{{ area[0].ChallengeName }}</h6>
							<source-badge
								v-for="(source, sindex) in area"
								:key="`equip-modal-drop-${aindex}-${sindex}-${source}`"
								:source="source"
								linked
							/>
						</div>
						<template v-if="Sources.length === 0">
							<b-badge v-if="target.craftable" variant="dark">
								<b-icon-hammer class="mr-1" />
								제조 {{ CraftTime }}
							</b-badge>
							<span v-else class="text-secondary">획득처 정보 없음 (제조 불가)</span>
						</template>
					</b-col>
				</b-row>
			</b-container>
		</template>

		<b-table-simple v-if="displayTab === 'enchant'" bordered table-class="text-center">
			<b-tbody>
				<b-tr>
					<b-th variant="dark">레벨</b-th>
					<b-th variant="dark">강화 비용</b-th>
					<b-th variant="dark">
						<img class="upmodule-icon" :src="`${AssetsRoot}/${imageExt}/item/UI_Icon_Equip_ChipSet_T4.${imageExt}`" />
					</b-th>
					<b-th variant="dark">총 비용</b-th>
					<b-th variant="dark">
						<img class="upmodule-icon" :src="`${AssetsRoot}/${imageExt}/item/UI_Icon_Equip_ChipSet_T4.${imageExt}`" />
					</b-th>
				</b-tr>
				<b-tr v-for="lv of 10" :key="`equip-modal-enchant-${lv}`">
					<b-th variant="dark">+{{ lv }}</b-th>
					<b-td>{{ UpgradeCostText(lv) }}</b-td>
					<b-td>
						<span class="text-secondary">x</span>
						{{ Math.ceil(UpgradeCost(lv) / 400) }}
					</b-td>
					<b-td>{{ UpgradeCostText(lv, true) }}</b-td>
					<b-td>
						<span class="text-secondary">x</span>
						{{ Math.ceil(UpgradeCost(lv, true) / 400) }}
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>
	</b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FormatNumber } from "@/libs/Functions";

import UnitBadge from "@/components/UnitBadge.vue";
import UnitFace from "@/components/UnitFace.vue";
import SourceBadge from "@/components/SourceBadge.vue";
import BuffList from "@/components/BuffList";

import ElemIcon from "@/components/ElemIcon.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import EquipLevel from "./EquipLevel.vue";

import { ACTOR_GRADE, ITEM_TYPE } from "@/libs/Types/Enums";
import EquipData, { Equip } from "@/libs/DB/Equip";
import UnitData from "@/libs/DB/Unit";
import Decimal from "decimal.js";

@Component({
	components: {
		UnitBadge,
		UnitFace,
		SourceBadge,
		BuffList,

		ElemIcon,
		EquipIcon,
		EquipLevel,
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
	private equip!: Equip;

	private rarity: ACTOR_GRADE = ACTOR_GRADE.SS;
	private level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;

	private displayTab: "info" | "drop" | "enchant" = "info";

	@Watch("equip")
	private WatchEquip () {
		this.level = 10;
		this.displayTab = "info";
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get target () {
		if (!this.equip) return null;
		return EquipData.find(x => x.type === this.equip.type && x.key === this.equip.key && x.rarity === this.rarity) || (() => {
			const typeTable: Record<ITEM_TYPE, string> = {
				[ITEM_TYPE.CHIP]: "Chip",
				[ITEM_TYPE.SPCHIP]: "System",
				[ITEM_TYPE.SUBEQ]: "Sub",

				[ITEM_TYPE.PCITEM]: "",
				[ITEM_TYPE.CONSUMABLE]: "",
				[ITEM_TYPE.MATERIAL]: "",
				[ITEM_TYPE.__MAX__]: "",
			};

			const found = EquipData.filter(x => x.type === this.equip.type && x.key === this.equip.key);
			if (found.length === 0) return null;
			const eq = found.sort((a, b) => (b.rarity - a.rarity))[0];
			this.rarity = eq.rarity;
			return eq;
		})();
	}

	private get RarityList () {
		if (!this.equip) return [];
		return EquipData
			.filter(x => x.key === this.equip.key && x.type === this.equip.type)
			.map(x => ({
				value: x.rarity,
				text: this.RarityDisplay[x.rarity],
			}));
	}

	private get Sources () {
		if (!this.target) return [];
		return this.target.source;
	}

	private get isPrivate () {
		if (!this.target) return false;
		return this.target.limit && this.target.limit.every(y => typeof y === "number");
	}

	private get isUninstalled () {
		if (!this.target) return false;
		return !this.target.available;
	}

	private get EquipType () {
		if (!this.equip) return "???";

		const typeTable = {
			[ITEM_TYPE.CHIP]: "칩",
			[ITEM_TYPE.SPCHIP]: "OS",
			[ITEM_TYPE.SUBEQ]: "보조장비",
		} as Record<ITEM_TYPE, string>;

		const type = this.equip.type;
		return typeTable[type] || "???";
	}

	private get RarityDisplay () {
		return {
			[ACTOR_GRADE.B]: "B",
			[ACTOR_GRADE.A]: "A",
			[ACTOR_GRADE.S]: "S",
			[ACTOR_GRADE.SS]: "SS",
		};
	}

	private get CraftTime () {
		if (!this.target) return "-";

		const duration = this.target.craftable;
		if (!duration) return "-";

		const h = Math.floor(duration / 3600);
		const m = Math.floor(duration / 60) % 60;
		const s = duration % 60;
		return `${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)}`;
	}

	/** 1 레벨 강화당 상승하는 필요치 배율 */
	private get UpgradeIncrementals () {
		return {
			[ACTOR_GRADE.B]: Decimal.div(3, 4),
			[ACTOR_GRADE.A]: Decimal.div(5, 6),
			[ACTOR_GRADE.S]: Decimal.div(10, 17),
			[ACTOR_GRADE.SS]: Decimal.div(11, 20),
		};
	}

	private UpgradeCost (level: number, sum: boolean = false) {
		if (!this.target) return 0;

		const base = this.target.upgrade;
		const per = this.UpgradeIncrementals[this.rarity];

		if (sum) {
			let v = new Decimal(0);
			for (let i = 1; i <= level; i++)
				v = v.add(this.UpgradeCost(i, false));

			return v
				.floor()
				.toNumber();
		}
		return Decimal.mul(per, level - 1)
			.add(1)
			.mul(base)
			.floor()
			.toNumber();
	}

	private UpgradeCostText (level: number, sum: boolean = false) {
		return FormatNumber(this.UpgradeCost(level, sum));
	}

	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private get Limits () {
		if (!this.target) return ["???"];
		return this.target.limit || [];
	}

	private get StatusList () {
		if (!this.target) return null;

		const stat = this.target.stats[this.level];
		return stat;
	}

	private UnitName (idx: number) {
		const char = UnitData.find(x => x.id === idx);
		if (char) return char.name;
		return `Unit${idx}`;
	}
}
</script>

<style lang="scss">
.equip-modal {
	.unknown-status {
		user-select: none;
		cursor: pointer;
	}
	.badge.unit-name-badge {
		white-space: normal;
		word-break: keep-all;
	}

	.white-pre-line {
		white-space: pre-line;
	}

	.table-equip-modal.container {
		margin-bottom: 0 !important;

		.col {
			margin-bottom: -1px;
			padding: 0.75rem;
			border: 1px solid #dee2e6;

			&.icon-container {
				display: flex;
				justify-content: center;
				align-items: center;
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

	.res-icon {
		margin-right: 0.125em;
		width: 24px;
	}
	.upmodule-icon {
		margin: 0;
		width: 32px;
	}
}
</style>
