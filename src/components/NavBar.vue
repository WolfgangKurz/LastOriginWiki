<template>
	<b-navbar toggleable="lg" variant="light">
		<b-navbar-brand>
			<img :src="`${AssetsRoot}/icon.png`" />
			<locale k="COMMON_TITLE" />
		</b-navbar-brand>

		<b-navbar-toggle target="topNavbarList">
			<span class="navbar-toggler-icon" />
		</b-navbar-toggle>

		<b-collapse id="topNavbarList" is-nav>
			<b-navbar-nav class="mr-auto">
				<b-nav-item :active="IsRoot" href="/" @click.prevent="GoTo('/')"><locale k="MENU_HOME" /></b-nav-item>

				<!--
				<b-nav-item :active="IsSimulation" href="/simulator" @click.prevent="GoTo('/simulator')">
					모의전투
					<b-badge variant="warning">α</b-badge>
				</b-nav-item>
				-->
				<b-nav-item :active="IsUnits" href="/units" @click.prevent="GoTo('/units')"><locale k="MENU_UNITS" /></b-nav-item>
				<b-nav-item :active="IsEquips" href="/equips" @click.prevent="GoTo('/equips')"><locale k="MENU_EQUIPS" /></b-nav-item>
				<b-nav-item :active="IsEnemy" href="/enemy" @click.prevent="GoTo('/enemy')"><locale k="MENU_ENEMIES" /></b-nav-item>
				<b-nav-item :active="IsFacilities" href="/facilities" @click.prevent="GoTo('/facilities')"><locale k="MENU_FACILITIES" /></b-nav-item>
				<b-nav-item :active="IsWorlds" href="/worlds" @click.prevent="GoTo('/worlds')"><locale k="MENU_WORLDS" /></b-nav-item>
				<b-nav-item :active="IsExchange" href="/exchange" @click.prevent="GoTo('/exchange')"><locale k="MENU_EXCHANGES" /></b-nav-item>
				<b-nav-item :active="IsChangelog" href="/changelog" @click.prevent="GoTo('/changelog')"><locale k="MENU_CHANGELOG" /></b-nav-item>

				<b-nav-item-dropdown right>
					<template #button-content><locale k="MENU_ETC" /></template>
					<b-dropdown-item href="/exp" @click.prevent="GoTo('/exp')"><locale k="MENU_ETC_EXPCALC" /></b-dropdown-item>
					<b-dropdown-item href="/bgm" @click.prevent="GoTo('/bgm')"><locale k="MENU_ETC_BGM" /></b-dropdown-item>
					<b-dropdown-item href="/eapi" @click.prevent="GoTo('/eapi')"><locale k="MENU_ETC_API" /></b-dropdown-item>
					<b-dropdown-divider />
					<b-dropdown-item href="https://arca.live/b/lastorigin/4474753" target="_blank">
						<locale k="MENU_ETC_EX01" />
						<b-icon-link45deg />
					</b-dropdown-item>
					<b-dropdown-item href="https://lastoriginmap.github.io/" target="_blank">
						<locale k="MENU_ETC_EX02" />
						<b-icon-link45deg />
					</b-dropdown-item>
				</b-nav-item-dropdown>
				<b-nav-item-dropdown right>
					<template #button-content>
						<b-icon-globe2 class="mr-1" />
						<locale k="COMMON_LANG" />
					</template>
					<b-dropdown-item href="#" @click.prevent="ChangeLang('KR')">KR</b-dropdown-item>
					<b-dropdown-item href="#" @click.prevent="ChangeLang('EN')">EN</b-dropdown-item>
					<!-- <b-dropdown-item href="#" @click.prevent="ChangeLang('JP')">JP</b-dropdown-item> -->
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

	private get IsEnemy () {
		return this.pageLower === "/enemy" || this.pageLower.startsWith("/enemy/");
	}

	private get IsFacilities () {
		return this.pageLower === "/facilities" || this.pageLower.startsWith("/facilities/");
	}

	private get IsWorlds () {
		return this.pageLower === "/worlds" || this.pageLower.startsWith("/worlds/");
	}

	private get IsExchange () {
		return this.pageLower === "/exchange" || this.pageLower.startsWith("/exchange/");
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

	private ChangeLang (lang: string) {
		document.cookie = `LO_LANG=${lang}`;
		window.location.reload(true);
	}
}
</script>

<style lang="scss" scoped>
.navbar-brand > img {
	width: 32px;
	height: 32px;
}
.navbar-nav .nav-item {
	padding: 0 10px;
}
</style>
