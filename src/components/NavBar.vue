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
				<b-nav-item :active="IsRoot" href="/" @click.prevent="GoTo('/')">홈</b-nav-item>

				<!--
				<b-nav-item :active="IsSimulation" href="/simulator" @click.prevent="GoTo('/simulator')">
					모의전투
					<b-badge variant="warning">α</b-badge>
				</b-nav-item>
				-->

				<b-nav-item :active="IsUnits" href="/units" @click.prevent="GoTo('/units')">전투원정보</b-nav-item>
				<b-nav-item :active="IsEquips" href="/equips" @click.prevent="GoTo('/equips')">장비정보</b-nav-item>
				<b-nav-item :active="IsFacilities" href="/facilities" @click.prevent="GoTo('/facilities')">설비정보</b-nav-item>
				<b-nav-item :active="IsWorlds" href="/worlds" @click.prevent="GoTo('/worlds')">세계정보</b-nav-item>
				<b-nav-item
					:active="IsChangelog"
					href="/changelog"
					@click.prevent="GoTo('/changelog')"
				>Changelog</b-nav-item>

				<b-nav-item-dropdown right>
					<template #button-content>기타</template>
					<b-dropdown-item href="/bgm" @click.prevent="GoTo('/bgm')">BGM</b-dropdown-item>
					<b-dropdown-item href="/eapi" @click.prevent="GoTo('/eapi')">API</b-dropdown-item>
					<b-dropdown-divider />
					<b-dropdown-item href="https://lastoriginmap.github.io/" target="_blank">
						지역별 철충 지도
						<b-icon-link45deg />
					</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { Emit, Prop, Component } from "vue-property-decorator";

import { AssetsRoot } from "@/libs/Const";

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

	private get IsFacilities () {
		return this.pageLower === "/facilities" || this.pageLower.startsWith("/facilities/");
	}

	private get IsWorlds () {
		return this.pageLower === "/worlds" || this.pageLower.startsWith("/worlds/");
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
