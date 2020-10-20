<template>
	<div class="drop-equip p-2 text-dark">
		<b-card :class="`rarity-${rarity}`">
			<equip-icon class="float-left mr-2" :name="equip.fullKey" />
			<div class="text-left">
				<b-badge variant="secondary">{{equip.rarity}}</b-badge>
				{{equip.name}}
			</div>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import EquipIcon from "@/components/EquipIcon.vue";
import RarityBadge from "@/components/RarityBadge.vue";

import { Equip } from "@/libs/DB/Equip";

@Component({
	components: {
		EquipIcon,
	},
})
export default class DropEquip extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private equip!: Equip;
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
