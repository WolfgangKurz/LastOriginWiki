<template>
	<div class="page-loading">
		<div class="code">리소스 로드중...</div>
		<div class="description">
			페이지에 필요한 리소스를 불러오고 있습니다.<br />
			잠시만 기다려주세요!
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { AssetsRoot, ImageExtension } from "@/libs/Const";

import { UpdateTitle } from "@/libs/Functions";

@Component({})
export default class RouterLoading extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}
}
</script>

<style lang="scss">
#app > .container > .page-loading {
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
