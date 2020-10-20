<template>
	<b-card bg-variant="dark" text-variant="white" class="my-1 equip-card" no-body>
		<b-card-header class="position-relative">
			<equip-icon :id="`${equip.fullKey}`" size="big" />
			<div v-if="Sources.length > 0" class="equip-sources text-left">
				<source-badge
					v-for="(source, sindex) in Sources"
					:key="`equip-${equip.fullKey}-source-${sindex}-${source.source}`"
					class="mb-1"
					:source="source"
					minimum
				/>
			</div>
		</b-card-header>

		<b-card-body>
			<div class="equip-name">{{ Name }}</div>
		</b-card-body>

		<a v-if="!noLink" href="#" class="stretched-link equip-stretched" @click.prevent="Click" />
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { Equip } from "@/libs/DB/Equip";
import EntitySource from "@/libs/EntitySource";

import EquipIcon from "@/components/EquipIcon.vue";
import SourceBadge from "@/components/SourceBadge.vue";

@Component({
	components: {
		EquipIcon,
		SourceBadge,
	},
})
export default class EquipCard extends Vue {
	@Prop({
		type: Object,
		required: true,
	})
	private equip!: Equip;

	@Prop({
		type: Array,
		default: () => [],
	})
	private source!: EntitySource[];

	@Prop({
		type: Boolean,
		default: false,
	})
	private noLink!: boolean;

	private get Name () {
		return this.equip.name.replace(/ (RE|MP|SP|EX)$/, "");
	}

	private get Sources () {
		return this.source.reduce((p, c) => [...p, c], [] as EntitySource[]);
	}

	private Click () {
		this.$emit("click", this.equip.fullKey);
	}
}
</script>

<style lang="scss">
.equip-card {
	.equip-sources {
		position: absolute;
		margin-left: -0.25em;
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
</style>
