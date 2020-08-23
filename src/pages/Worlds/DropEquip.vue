<template>
	<div class="drop-equip p-2 text-dark">
		<b-card :class="`rarity-${rarity}`">
			<equip-icon class="float-left mr-2" :name="`${name}_${rarityLower}`" />
			<div class="text-left">
				<b-badge variant="secondary">{{rarity}}</b-badge>
				{{EquipNames[name] || name}}
			</div>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import EquipNameTable from "@/json/equip-names.json";
import EquipIcon from "@/components/EquipIcon.vue";
import RarityBadge from "@/components/RarityBadge.vue";

import { UnitData } from "@/libs/DB";

@Component({
	components: {
		EquipIcon,
	},
})
export default class DropEquip extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private name!: string;

	@Prop({
		type: String,
		default: "SS",
	})
	private rarity!: string;

	private get rarityLower () {
		return this.rarity.toLowerCase();
	}

	private get EquipNames () {
		return EquipNameTable;
	}
}
</script>

<style lang="scss">
.drop-equip {
	word-break: keep-all;
	user-select: none;
	cursor: pointer;

	.equip-icon {
		background-color: #000;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
}
</style>
