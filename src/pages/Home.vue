<template>
	<div class="home">
		<h2>
			<img class="heading-icon" :src="`${AssetsRoot}/icon.png`" />
			멸망 전의 전술 교본
		</h2>

		<b-alert v-if="imageExt === 'png'" variant="danger" show>
			현재
			<strong>"WEBP"</strong> 이미지를 사용할 수 없는 브라우저 환경이기 때문에
			<strong>"PNG"</strong> 이미지를 불러오도록 되어있습니다.
			<br />사이트 내 이미지들을 보는데 10배 가까이 데이터를 사용하게 되며,
			데이터를 절약하기 위해서 전투원의 전체 이미지는 기본
			<strong>"닫음"</strong> 상태가 됩니다.
		</b-alert>

		<p>
			<i>멸망 전의 전술 교본</i>은 각종 패시브 스킬과 장비 효과가 적용된 후의 실질적인 스테이터스 수치를 계산하기 위한 시뮬레이터입니다.
		</p>
		<p>정보가 부족해 입력되지 않았거나 잘못된 수치가 기입된 장비 및 전투원이 있을 수 있습니다.</p>
		<b-alert variant="warning" show>시뮬레이터 (전투원 스테이터스 계산기) 기능은 현재 일부만 이용할 수 있습니다.</b-alert>
		<hr />

		<p>
			사이트 개발:
			<a href="mailto:wolfgangkurzdev@gmail.com">wolfgangkurzdev@gmail.com</a>
		</p>
		<p>정보에 오류가 있는 경우 정확한 수치가 표시된 스크린샷과 함께 메일 주시면 최대한 빠르게 확인하겠습니다.</p>
		<hr />

		<p>
			장비 및 전투원의 아이콘 등
			<i>(주)스마트조이</i>의
			<i>라스트오리진(LastOrigin)</i>에서 사용된 자원은 모두
			<i>(주)스마트조이</i>의
			<i>라스트오리진(LastOrigin)</i>의 자원이며, 해당 자원의 모든 권리는
			<i>(주)스마트조이</i>에게 있습니다.
		</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

@Component({})
export default class Home extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private mounted () {
		UpdateTitle([]);
	}
}
</script>

<style lang="scss">
#app > .container > .home {
	img.heading-icon {
		width: 80px;
		height: 80px;
	}
	i {
		padding: 1px 4px;
		border-radius: 3px;
		background-color: #eee;
	}
}
</style>
