<template>
	<a :href="`/units/${unit}`" @click="Process">
		<b-badge variant="primary" style="font-size:100%">
			<locale :k="`UNIT_${unit}`" />
		</b-badge>
	</a>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class UnitReference extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private unit!: string;

	private Process () {
		this.$router.push({
			path: `/units/${this.unit}`,
		});
	}
}
</script>
