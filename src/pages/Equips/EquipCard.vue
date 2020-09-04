<template>
	<b-card bg-variant="dark" text-variant="white" class="my-1 equip-card" no-body>
		<b-card-header class="position-relative">
			<equip-icon :name="`${group.name}_ss`" size="big" />
			<div v-if="group.source.length > 0" class="equip-sources text-left">
				<source-badge
					v-for="(source, sindex) in group.source"
					:key="`equip-${group.name}-source-${sindex}-${source.source}`"
					class="mb-1"
					:source="source"
					minimum
				/>
			</div>
		</b-card-header>

		<b-card-body>
			<div class="equip-name">{{EquipNames[group.name] || group.name}}</div>
		</b-card-body>

		<a v-if="!noLink" href="#" class="stretched-link equip-stretched" @click.prevent="Click" />
	</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import EquipNameTable from "@/json/equip-names.json";
import EntitySource from "@/libs/EntitySource";
import { Dictionary } from "@/libs/Interface";

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
	private group!: {
		name: string;
		source: EntitySource[];
	};

	@Prop({
		type: Boolean,
		default: false,
	})
	private noLink!: boolean;

	private get EquipNames () {
		return EquipNameTable as Dictionary<string>;
	}

	private Click () {
		this.$emit("click", this.group.name);
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
