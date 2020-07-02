<template>
	<div class="testpage text-left">
		<center>
			<h2>LobbyAnimation Test</h2>
			<anim-viewer />
		</center>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import AnimViewer from "@/components/AnimViewer.vue";

@Component({
	components: {
		AnimViewer,
	},
})
export default class Test extends Vue {
}
</script>

<style lang="scss">
</style>
