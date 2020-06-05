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
				<b-nav-item :active="page === 'Home'" href="#" @click.prevent="GoTo('Home')">홈</b-nav-item>
				<b-nav-item :active="page === 'Simulation'" href="#" disabled>모의전투</b-nav-item>
				<b-nav-item :active="page === 'Units'" href="#" @click.prevent="GoTo('Units')">유닛정보</b-nav-item>
				<b-nav-item :active="page === 'Equips'" href="#" @click.prevent="GoTo('Equips')">장비정보</b-nav-item>
				<b-nav-item :active="page === 'Changelog'" href="#" @click.prevent="GoTo('Changelog')">Changelog</b-nav-item>
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

	private get AssetsRoot () {
		return AssetsRoot;
	}

	@Emit("goto")
	private GoTo (destination: string) {
		return undefined;
	}
}
</script>
