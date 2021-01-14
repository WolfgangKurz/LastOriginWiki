<template>
	<div class="drop-equip p-2 text-dark">
		<b-card :class="`rarity-${RarityDisplay[equip.rarity]}`">
			<equip-icon class="float-left mr-2" :image="equip.icon" />
			<div class="text-left">
				<b-badge variant="secondary">{{ RarityDisplay[equip.rarity] }}</b-badge>
				{{ equip.name }}
				<small v-if="chance < 100" class="pl-1 text-bold">({{ chance }}%)</small>
			</div>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import EquipIcon from "@/components/EquipIcon.vue";

import { RarityDisplay } from "@/libs/Const";
import { ACTOR_GRADE } from "@/libs/Types/Enums";

import { FilterableEquip } from "@/libs/Types/Equip.Filterable";

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
	private equip!: FilterableEquip;

	@Prop({
		type: Number,
		default: 100,
	})
	private chance!: number;

	private get RarityDisplay () {
		return RarityDisplay;
	}
}
</script>

<style lang="scss">
.drop-equip {
	word-break: keep-all;
	user-select: none;
	cursor: pointer;

	.equip-icon {
		background-color: transparentize(#000, 0.8);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
}
</style>
