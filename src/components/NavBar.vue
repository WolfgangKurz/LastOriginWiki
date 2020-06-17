<template>
	<b-navbar toggleable="lg" variant="light">
		<b-navbar-brand>
			<img :src="`${AssetsRoot}/icon.png`" />
			멸망 전의 전술 교본
		</b-navbar-brand>

		<b-navbar-toggle target="topNavbarList">
			<span class="navbar-toggler-icon" />
		</b-navbar-toggle>

		<b-collapse id="topNavbarList" is-nav>
			<b-navbar-nav class="mr-auto">
				<b-nav-item :active="IsRoot" href="#" @click.prevent="GoTo('/')">홈</b-nav-item>

				<b-nav-item v-if="!Dev" :active="IsSimulation" href="#" disabled>모의전투</b-nav-item>
				<b-nav-item v-else :active="IsSimulation" href="#" @click.prevent="GoTo('/simulation')">
					모의전투
					<b-badge variant="warning">BETA</b-badge>
				</b-nav-item>

				<b-nav-item :active="IsUnits" href="#" @click.prevent="GoTo('/units')">유닛정보</b-nav-item>
				<b-nav-item :active="IsEquips" href="#" @click.prevent="GoTo('/equips')">장비정보</b-nav-item>
				<b-nav-item :active="IsChangelog" href="#" @click.prevent="GoTo('/changelog')">Changelog</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { Emit, Prop, Component } from "vue-property-decorator";

import { AssetsRoot } from "@/Const";

@Component({})
export default class NavBar extends Vue {
	@Prop({
		type: String,
		required: true,
	})
	private page!: string;

	private get pageLower () {
		return this.page.toLowerCase();
	}

	private get IsRoot () {
		return this.pageLower === "/";
	}

	private get IsSimulation () {
		return this.pageLower === "/simulation" || this.pageLower.startsWith("/simulation/");
	}

	private get IsUnits () {
		return this.pageLower === "/units" || this.pageLower.startsWith("/units/");
	}

	private get IsEquips () {
		return this.pageLower === "/equips" || this.pageLower.startsWith("/equips/");
	}

	private get IsChangelog () {
		return this.pageLower === "/changelog" || this.pageLower.startsWith("/changelog/");
	}

	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get Dev () {
		return process.env.NODE_ENV === "development";
	}

	@Emit("goto")
	private GoTo (destination: string) {
		return undefined;
	}
}
</script>

<style lang="scss" scoped>
.navbar-nav .nav-item {
	padding: 0 10px;
}
</style>
