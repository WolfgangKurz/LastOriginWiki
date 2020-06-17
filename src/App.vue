<template>
	<div id="app">
		<nav-bar :page="CurrentPage()" @goto="GoTo" />

		<div class="container p-4">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import "bootstrap";

import { Component, Vue, Ref } from "vue-property-decorator";

import NavBar from "@/components/NavBar.vue";
import Home from "@/pages/Home.vue";
import Units from "@/pages/Units.vue";
import Equips from "@/pages/Equips.vue";
import Changelog from "@/pages/Changelog.vue";

@Component({
	components: {
		NavBar,
	},
})
export default class App extends Vue {
	private GoTo (path: string) {
		this.$router.push({ path });
	}

	private CurrentPage () {
		return this.$router.currentRoute.path;
	}
}
</script>

<style lang="scss">
@import "@/theme/bootstrap.scss";
@import "@/theme/theme.scss";
@import "bootstrap-vue/src/index";

// @import "assets/font/SpoqaHanSans-kr.css";
@import "https://lastorigin-wiki-assets.s3.ap-northeast-2.amazonaws.com/font/SpoqaHanSans-kr.css";

.navbar-brand > img {
	width: 32px;
	height: 32px;
}
html body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-family: "Spoqa Han Sans", sans-serif;
	font-weight: 400;
	font-size: 16px;
	text-align: center;
}

.btn-group > .btn.active + .btn.active,
.btn-group > .btn:focus + .btn.active,
.btn-group > .btn:hover + .btn.active,
.btn-group > .btn.active + .btn:focus,
.btn-group > .btn.active + .btn:hover {
	border-left: 1px solid transparentize(#fff, 0.5) !important;
}
</style>
