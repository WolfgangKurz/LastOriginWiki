<template>
	<div class="equips">
		<b-btn-group class="ml-3 mb-2">
			<b-button variant="outline-secondary" :pressed="Display.Chip" @click="Filter('Chip')">칩</b-button>
			<b-button variant="outline-secondary" :pressed="Display.OS" @click="Filter('OS')">OS</b-button>
			<b-button variant="outline-secondary" :pressed="Display.Public" @click="Filter('Public')">보조장비</b-button>
			<b-button variant="outline-secondary" :pressed="Display.Private" @click="Filter('Private')">전용장비</b-button>
		</b-btn-group>

		<b-btn-group class="ml-3 mb-2">
			<b-button
				variant="outline-warning"
				:pressed="Display.EternalWar"
				@click="Filter('EternalWar')"
			>영원한 전장</b-button>
		</b-btn-group>

		<b-row class="mt-4" cols-xl="6" cols-lg="5" cols-md="4" cols-sm="3" cols="2">
			<b-col v-for="group of EquipGroups" :key="`equip-${group}`" class="equip-item">
				<b-card bg-variant="dark" text-variant="white" class="my-1 w-100">
					<b-card-header class="position-relative">
						<equip-icon :name="`${group}_ss`" size="big" />
						<div v-if="EquipSource(group)" class="equip-sources">
							<b-badge variant="warning" class="equip-source">{{EquipSource(group)}}</b-badge>
						</div>
					</b-card-header>

					<b-card-body>
						<div class="equip-name">{{EquipName(group)}}</div>
					</b-card-body>

					<a href="#" class="stretched-link equip-stretched" @click.prevent="ShowEquip(group)" />
				</b-card>
			</b-col>
		</b-row>

		<equip-modal :name="SelectedEquip" :display.sync="ShowEquipModal" />
	</div>
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";

import EquipIcon from "./Equips/EquipIcon.vue";
import EquipModal from "./Equips/EquipModal.vue";

import EquipNameTable from "@/json/equip-names.json";
import { EquipData } from "@/DB";
import { Equip } from "@/Types";

@Component({
	components: {
		EquipIcon,
		EquipModal,
	},
})
export default class Equips extends Vue {
	private Display = {
		Chip: true,
		OS: true,
		Public: true,
		Private: true,
		EternalWar: false,
	};

	private SelectedEquip: string = "";

	private ShowEquipModal: boolean = false;

	private get EquipRarity () {
		return ["ss", "s", "a", "b"];
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

	private EquipName (name: string) {
		interface SSDict {
			[key: string]: string;
		}

		if (name in EquipNameTable)
			return (EquipNameTable as SSDict)[name];
		return name;
	}

	private EquipSource (name: string) {
		interface SSDict {
			[key: string]: string;
		}

		const source = Object.values(EquipData)
			.filter(x => x.name.startsWith(name))[0].source;

		const table: SSDict = {
			EternalWar: "영원한 전장",
		};
		if (source in table) return table[source];
		return source;
	}

	private ShowEquip (name: string) {
		this.SelectedEquip = name;
		this.ShowEquipModal = true;
	}

	private Filter (type: string) {
		const key = type as ("Chip" | "OS" | "Public" | "Private");
		this.Display[key] = !this.Display[key];
	}
}
</script>

<style lang="scss">
#app > .container > .equips {
	.equip-item {
		.equip-sources {
			position: absolute;
			left: 4px;
			top: 4px;
			line-height: 0;

			> .equip-source {
				box-shadow: 0 0 4px #000;
			}
		}

		.card-body {
			padding: 0.5em;
		}

		.equip-name {
			word-break: keep-all;
		}
		.equip-stretched {
			margin: 0;
			padding: 0;
			width: 1px;
			height: 1px;
			overflow: hidden;
		}
	}
}
</style>
