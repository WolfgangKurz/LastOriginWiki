<template>
	<div class="error-404">
		<img :src="`${AssetsRoot}/${imageExt}/face/132.${imageExt}`" />
		<div class="code">404 Not Found</div>
		<div class="description">
			이런! 유미가 페이지를 찾을 수 없다고 합니다.
			<br />주소가 잘못되었거나, 지금은 사라진 페이지겠죠.
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import { UpdateTitle } from "@/libs/Functions";

@Component({})
export default class Page404 extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private mounted () {
		UpdateTitle("404 Not Found");
	}
}
</script>

<style lang="scss">
#app > .container > .error-404 {
	padding: 3em 0;
	text-align: center;

	> div.code {
		letter-spacing: 3px;
		font-size: 48px;
	}
	> div.description {
		padding: 0.5em;
		font-size: 20px;
	}
}
</style>
