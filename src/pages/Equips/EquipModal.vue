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
						<equip-icon :id="`${target.fullKey}`" size="large" />
						<equip-level :level="level" />
					</div>
				</b-col>
				<b-col class="nested">
					<b-row cols="2">
						<b-col class="bg-dark text-white">장비 유형</b-col>
						<b-col>
							<b-badge v-if="isPrivate" variant="primary">전용장비</b-badge>
							<template v-else>{{ EquipType }}</template>
						</b-col>
						<b-col class="bg-dark text-white">장비 등급</b-col>
						<b-col>
							<template v-if="RarityList.length === 1">{{ rarity }}</template>
							<b-form-select v-else v-model="rarity" size="sm" :options="RarityList" />
						</b-col>
						<b-col class="bg-dark text-white">장착 제한</b-col>
						<b-col>
							<span v-if="Limits.length === 0" class="text-secondary">-</span>
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
		</b-container>

		<b-table-simple bordered fixed table-class="text-center">
			<b-tbody>
				<b-tr>
					<b-th variant="dark">획득처</b-th>
				</b-tr>
				<b-tr>
					<b-td>
						<b-badge v-if="target.craftable" variant="dark">
							<b-icon-hammer class="mr-1" />
							제조 가능
						</b-badge>

						<div v-for="(area, aindex) in Sources" :key="`equip-modal-source-${aindex}`">
							<hr v-if="(target && target.craftable) || aindex > 0" class="my-1" />
							<source-badge
								v-for="(source, sindex) in area"
								:key="`equip-modal-drop-${aindex}-${sindex}-${source}`"
								:source="source"
								detail
								linked
							/>
						</div>
						<template v-if="Sources.length === 0">
							<b-badge v-if="target.craftable" variant="dark">제조 가능</b-badge>
							<span v-else class="text-secondary">획득처 정보 없음 (제조 불가)</span>
						</template>
					</b-td>
				</b-tr>
				<b-tr>
					<b-th variant="dark">강화 레벨 +{{ level }}</b-th>
				</b-tr>
				<b-tr>
					<b-td>
						<b-input type="range" min="0" max="10" v-model="level" number />
					</b-td>
				</b-tr>
				<b-tr>
					<b-th variant="dark">
						0 -&gt; {{ level }}
						<span class="pl-2">강화 비용</span>
					</b-th>
				</b-tr>
				<b-tr>
					<b-td>
						<span v-if="level === 0" class="text-secondary">강화 없음</span>
						<template v-else>
							<span class="px-2">
								<div class="d-inline-block px-2">
									<img class="res-icon" :src="`${AssetsRoot}/res-component.png`" />
									<img class="res-icon" :src="`${AssetsRoot}/res-nutrition.png`" />
									<img class="res-icon" :src="`${AssetsRoot}/res-power.png`" />
								</div>
								<div class="d-inline-block">각 자원 총 {{ UpgradeCostText }}</div>
							</span>
							<hr class="d-sm-none" />
							<span class="d-none d-sm-inline text-secondary">|</span>
							<span class="px-2">
								<img class="upmodule-icon" :src="`${AssetsRoot}/${imageExt}/equips/Chip_Enchant_T4.${imageExt}`" />
								{{ Math.ceil(UpgradeCost / 400) }}개 필요
							</span>
						</template>
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>

		<b-list-group class="text-left" v-if="StatusList">
			<b-list-group-item v-for="(status, idx) in StatusList" :key="`status-line-${idx}`">
				<node-renderer :elem="status" />
				<!--
				<div v-if="status.unknown" class="unknown-status float-right" title="정확하지 않을 수 있습니다" v-b-tooltip.hover.left>&#x26A0;</div>
				-->
			</b-list-group-item>
		</b-list-group>
	</b-modal>
</template>

<script lang="ts">
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { FormatNumber } from "@/libs/Functions";
import EquipStatus from "@/libs/Equips/EquipStatus";

import NodeRenderer from "@/components/NodeRenderer.vue";
import UnitBadge from "@/components/UnitBadge.vue";
import UnitFace from "@/components/UnitFace.vue";
import SourceBadge from "@/components/SourceBadge.vue";

import ElemIcon from "@/components/ElemIcon.vue";
import EquipIcon from "@/components/EquipIcon.vue";
import EquipLevel from "./EquipLevel.vue";

import { Rarity, Equip } from "@/libs/Types";
import { EquipData, UnitData } from "@/libs/DB";

@Component({
	components: {
		NodeRenderer,
		UnitBadge,
		UnitFace,
		SourceBadge,

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

	private rarity: Rarity = "SS";
	private level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;

	@Watch("name")
	private WatchName () {
		this.level = 10;
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get target () {
		if (!this.equip) return null;
		return EquipData.find(x => x.type === this.equip.type && x.key === this.equip.key && x.rarity === this.rarity) || null;
	}

	private get RarityList () {
		if (!this.equip) return [];
		return EquipData
			.filter(x => x.key === this.equip.key && x.type === this.equip.type)
			.map(x => x.rarity);
	}

	private get Sources () {
		if (!this.target) return [];
		return this.target.source;
	}

	private get isPrivate () {
		if (!this.target) return false;
		return this.target.limit && this.target.limit.every(y => typeof y === "number");
	}

	private get EquipType () {
		if (!this.equip) return "???";

		const typeTable: Record<string, string> = {
			Chip: "칩",
			OS: "OS",
			Item: "보조장비",
		};

		const type = this.equip.type;
		return typeTable[type] || "???";
	}

	/** 1 레벨 강화당 상승하는 필요치 배율 */
	private get UpgradeIncrementals () {
		return {
			B: 3 / 4,
			A: 5 / 6,
			S: 10 / 17,
			SS: 11 / 20,
		};
	}

	private get UpgradeCost () {
		if (!this.equip) return 0;

		const base = this.equip.upgrade;
		const per = this.UpgradeIncrementals[this.rarity];
		const lv = this.level;

		let sum = 0;
		for (let i = 0; i < lv; i++)
			sum += Math.floor(base * (1 + per * i));
		return sum;
	}

	private get UpgradeCostText () {
		return FormatNumber(this.UpgradeCost);
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
		return stat.reduce((p, c) => [...p, ...EquipStatus(this, c)], [] as JSX.Element[]);
	}

	private UnitName (idx: number) {
		return UnitData[idx].name;
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
		width: 24px;
		margin-right: 0.125em;
	}
	.upmodule-icon {
		width: 32px;
		margin-right: 0.25em;
	}
}
</style>
