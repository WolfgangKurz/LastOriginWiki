<template>
	<div
		class="map-node"
		:data-hidden="node.type === '' ? 1 : 0"
		:data-pos="`${node.pos[0]},${node.pos[1]}`"
	>
		<img :src="`${AssetsRoot}/world/mapicon_${node.pos[1]}.png`" />
		<div class="name d-none d-sm-block" :data-active="active ? 1 : 0">{{node.name}}</div>
		<div class="name d-sm-none" :data-active="active ? 1 : 0">{{shortName}}</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import { AssetsRoot, ImageExtension } from "@/libs/Const";
import { MapNodeEntity } from "@/libs/Types";

@Component({})
export default class MapNode extends Vue {
	@Prop({
		type: Object,
		required: true,
		validator: (x: MapNodeEntity) => {
			if (x.type === "") return true; // Empty Node

			if (!["N", "B", "Ex", "C"].includes(x.type)) return false;
			if (!x.name) return false;

			if (
				!Array.isArray(x.pos) ||
				(x.pos.length as number) !== 2 ||
				typeof x.pos[0] !== "number" ||
				typeof x.pos[1] !== "number"
			) return false;

			if (
				x.prev !== undefined &&
				(
					!Array.isArray(x.prev) ||
					(x.prev.length as number) !== 2 ||
					typeof x.prev[0] !== "number" ||
					typeof x.prev[1] !== "number"
				)
			) return false;

			return true;
		},
	})
	private node!: MapNodeEntity;

	@Prop({
		type: Boolean,
		default: false,
	})
	private active!: boolean;

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get shortName () {
		const name = this.node.name;
		return name.includes("-")
			? name.substr(name.indexOf("-") + 1)
			: name;
	}
}
</script>

<style lang="scss">
.map-node {
	position: relative;
	margin-bottom: 1em;
	text-align: center;
	z-index: 3;

	user-select: none;
	cursor: pointer;

	&[data-hidden="1"] {
		visibility: hidden;
	}

	> img {
		max-width: 100%;
	}
	> div.name {
		position: absolute;
		margin-left: -1px;
		margin-bottom: 0px;
		padding: 1px 2px;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.6);
		font-weight: bold;
		font-size: 11px;
		color: #fff;

		&[data-active="1"] {
			background-color: transparentize(map-get($theme-colors, "primary"), 0.4);
		}
	}
}
</style>
