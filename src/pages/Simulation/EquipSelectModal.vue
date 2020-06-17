<template>
	<b-modal v-model="displaySync" hide-footer size="md" modal-class="unit-select-modal">
		<template #modal-title>전투원 선택</template>

		<!-- 필터 -->
		<div class="mb-3">
			<b-button variant="outline-secondary" :pressed="Display.Chip" @click="Filter('Chip')">칩</b-button>
			<b-button variant="outline-secondary" :pressed="Display.OS" @click="Filter('OS')">OS</b-button>
			<b-button variant="outline-secondary" :pressed="Display.Public" @click="Filter('Public')">보조장비</b-button>
			<b-button variant="outline-secondary" :pressed="Display.Private" @click="Filter('Private')">전용장비</b-button>
		</div>

		<b-row class="justify-content-center">
			<b-col cols="8" class="mb-4">
				<b-dropdown variant="outline-dark">
					<template #button-content>
						<template v-if="SelectedEquipGroup.name === ''">장비를 선택해주세요.</template>
						<template v-else>
							<equip-icon :name="`${SelectedEquipGroup.name}_ss`" size="40" class="mr-2" />
							{{SelectedEquipGroup.name}}
						</template>
					</template>
					<b-dropdown-item
						v-for="group in EquipGroup"
						:key="`simulation-equip-select-modal-${group}`"
						@click="SelectEquipGroup(group)"
					>
						<equip-icon :name="`${group}_ss`" size="40" class="mr-2" />
						<span class="d-inline-block mr-2">{{EquipNames[group]}}</span>
					</b-dropdown-item>
				</b-dropdown>
				<!--  :options="UnitList" -->
			</b-col>
			<b-col cols="12">
				<b-button variant="info" @click="Select(SelectedEquipGroup)">전투원 선택</b-button>
			</b-col>
		</b-row>
	</b-modal>
</template>

<script lang="ts">
import _ from "lodash";

import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, PropSync, Ref } from "vue-property-decorator";

import EquipIcon from "@/components/EquipIcon.vue";

import EquipNameTable from "@/json/equip-names.json";
import { EquipData, UnitData } from "@/libs/DB";
import { Equip, LRarity } from "@/libs/Types";

@Component({
	components: {
		EquipIcon,
	},
})
export default class EquipSelectModal extends Vue {
	@PropSync("display", {
		type: Boolean,
		default: false,
	})
	private displaySync!: boolean;

	private SelectedEquipGroup: string = "";
	private rarity: LRarity = "ss";

	private Display = {
		Chip: true,
		OS: true,
		Public: true,
		Private: true,
		EternalWar: false,
	};

	private get EquipNames () {
		return EquipNameTable;
	}

	private get EquipGroups () {
		const group = _.groupBy(EquipData, (x) => x.name.substr(0, x.name.lastIndexOf("_")));
		return _
			.keys(group)
			.filter(x => {
				const baseType = x.substr(0, x.indexOf("_"));
				const first = _.first(group[x]);
				if (!first) return false;

				// 영전장비
				if (this.Display.EternalWar && first.source !== "EternalWar") return false;

				// 전용장비
				if (first.limit && first.limit.every(y => typeof y === "number")) return this.Display.Private;

				if (baseType === "chip") return this.Display.Chip;
				if (baseType === "os") return this.Display.OS;
				if (baseType === "item") return this.Display.Public;

				return false;
			});
	}

	private SelectEquipGroupGroup (group: string) {
		this.SelectedEquipGroup = group;
	}

	private Select (group: string) {
		this.$emit("select", group, this.rarity, EquipData.filter(x => x.name === `${group}_${this.rarity}`)[0]);
	}

	private Filter (type: string) {
		const key = type as ("Chip" | "OS" | "Public" | "Private");
		this.Display[key] = !this.Display[key];
	}
}
</script>

<style lang="scss">
.unit-select-modal {
	.dropdown-menu {
		max-height: 400px;
		overflow-y: auto;
	}
}
</style>
