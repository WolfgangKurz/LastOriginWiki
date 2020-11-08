<template>
	<div class="home">
		<b-alert variant="primary" show>
			<template v-if="IsEW">
				<b-badge variant="light" style="font-size: 100%">제 {{ EWNo }}차 영원한 전장</b-badge>이 진행중입니다. 종료까지
				<b-badge variant="danger" style="font-size: 100%">{{ LeftEW }} 일</b-badge>남았습니다.
			</template>
			<template v-else>
				<b-badge variant="light" style="font-size: 100%">제 {{ EWNo - 1 }}차 영원한 전장</b-badge>가 종료되었습니다.
				<b-badge variant="light" style="font-size: 100%">제 {{ EWNo }}차 영원한 전장</b-badge>은
				<b-badge variant="danger" style="font-size: 100%">{{ LeftEW - 14 + 1 }}</b-badge
				>일 후에 시작합니다.
			</template>
		</b-alert>

		<h2>
			<img class="heading-icon" :src="`${AssetsRoot}/icon.png`" />
			멸망 전의 전술 교본
		</h2>
		<div class="mb-4 text-secondary">{{ BuildTime }}에 빌드됨</div>

		<b-alert v-if="imageExt === 'png'" variant="danger" show>
			현재
			<strong>"WEBP"</strong> 이미지를 사용할 수 없는 브라우저 환경이기 때문에 <strong>"PNG"</strong> 이미지를 불러오도록 되어있습니다.
			<br />사이트 내 이미지들을 보는데 10배 가까이 데이터를 사용하게 되며, 데이터를 절약하기 위해서 모바일에서 전투원의 전체 이미지는 기본
			<strong>"닫음"</strong> 상태가 됩니다.
		</b-alert>

		<p>
			<i>멸망 전의 전술 교본</i>은 전투원과 장비, 설비의 정보를 볼 수 있는 정보 사이트입니다.<br />
			각종 패시브 스킬과 장비 효과가 적용된 후의 실질적인 스테이터스 수치를 계산하기 위한 시뮬레이터를 목표로 개발중에 있습니다.
		</p>
		<hr />

		<b-alert variant="success" show>
			현재 대사 텍스트가 입력되지 않은 전투원이 매우 많습니다. 입력해야하는 대사 분량이 너무 많아 개발자 혼자 작업할 수가 없어 발생한
			문제입니다.<br />
			이 문제를 해결하고자 현재
			<a href="https://docs.google.com/spreadsheets/d/1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00" target="_blank">전투원 대사 DB</a>의 기여를
			받고 있습니다. 많은 참여 부탁드립니다.
		</b-alert>
		<hr />

		<b-alert variant="warning" show>시뮬레이터 (전투원 스테이터스 계산기) 기능은 현재 일부만 이용할 수 있습니다.</b-alert>
		<hr />

		<p>
			사이트 개발:
			<a href="mailto:wolfgangkurzdev@gmail.com">wolfgangkurzdev@gmail.com</a>
		</p>
		<p>정보에 오류가 있는 경우, 스크린샷과 함께 메일 주시면 최대한 빠르게 확인하겠습니다.</p>
		<hr />

		<p>
			장비 및 전투원의 아이콘, 수치 데이터 등
			<i>(주)스마트조이</i>의 <i>라스트오리진(LastOrigin)</i>에서 사용된 자원은 모두 <i>(주)스마트조이</i>의 <i>라스트오리진(LastOrigin)</i>의
			자원이며, 해당 자원의 모든 권리는 <i>(주)스마트조이</i>에게 있습니다.
		</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { ImageExtension, AssetsRoot } from "@/libs/Const";
import { UpdateTitle } from "@/libs/Functions";

import BuildTime from "@/buildtime";

@Component({})
export default class Home extends Vue {
	private get AssetsRoot () {
		return AssetsRoot;
	}

	private get imageExt () {
		return ImageExtension();
	}

	private get BuildTime () {
		if (process.env.NODE_ENV === "development")
			return "Development Mode";
		else
			return BuildTime;
	}

	private get EWCount () {
		return Math.floor(Date.now() / (24 * 60 * 60 * 1000) + 3) % 28;
	}

	private get EWNo () {
		return Math.floor((Date.now() / (24 * 60 * 60 * 1000) + 3) / 28) - 648;
	}

	private get IsEW () {
		return this.EWCount >= 14;
	}

	private get LeftEW () {
		return 27 - this.EWCount;
	}

	private get NextEW () {
		const date = new Date();
		date.setDate(date.getDate() - this.EWCount + 14 - 1);
		return `${date.getMonth() + 1}월 ${date.getDate()}일`;
	}

	private mounted () {
		UpdateTitle();
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
