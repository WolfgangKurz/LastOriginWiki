<template>
	<div class="page-timeout">
		<img :src="`${AssetsRoot}/${imageExt}/face/PECS_BS_0.${imageExt}`" />
		<div class="code">408 Request Timeout</div>
		<div class="description">
			이런! 유미가 리소스를 불러오지 못했다고 합니다.
			<br />일시적인 문제일 수 있으니, 다시 시도해봐야겠네요.
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import { UpdateTitle } from "@/libs/Functions";

@Component({})
export default class RouterTimeout extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private mounted () {
		UpdateTitle("408 Request Timeout");
	}
}
</script>

<style lang="scss">
#app > .container > .page-timeout {
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
