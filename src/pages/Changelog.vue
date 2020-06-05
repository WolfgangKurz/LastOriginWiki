<template>
	<div class="changelog text-left">
		<h2>변경 기록</h2>
		<p>
			<i>멸망 전의 전술 교본</i> 사이트의 변경 기록을 작성한 문서입니다.
		</p>
		<hr />

		<b-card class="mt-2">
			<template #header>2020-06-06</template>
			<b-card-text>배포 시작</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-06-05</template>
			<b-card-text>
				<b-badge variant="warning">켈베로스 "드림위버 웨딩 스페셜 : 오늘은 얌전히!"</b-badge>,
				<b-badge variant="warning">세띠 "드림위버 웨딩 스페셜 : 안식처"</b-badge>,
				<b-badge variant="warning">블랙 웜 S9</b-badge> 스킨 추가
				<br />
				<b-badge variant="warning">세띠</b-badge> 스킬 정보 추가
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-06-04</template>
			<b-card-text>유닛 스킬 정보 작성 완료 (세띠, 럼버제인 제외)</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-30</template>
			<b-card-text>
				<b-badge variant="warning">유닛 모달</b-badge> 내 스킨에
				<b-badge variant="warning">로비 애니메이션</b-badge> 여부 추가.
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-23</template>
			<b-card-text>
				<b-badge variant="warning">유닛 모달</b-badge> 완성.
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-21</template>
			<b-card-text>
				유닛정보
				<b-badge variant="warning">일반 보기</b-badge>,
				<b-badge variant="warning">그룹별 보기</b-badge> 완성.
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-18</template>
			<b-card-text>
				유닛정보
				<b-badge variant="warning">테이블 보기</b-badge> 완성.
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-17</template>
			<b-card-text>장비정보 페이지 완성.</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-16</template>
			<b-card-text>프로젝트 시작.</b-card-text>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Changelog extends Vue {
}
</script>

<style lang="scss">
#app > .container > .changelog {
	.badge {
		margin-bottom: 5px;
		font-size: inherit;
	}
}
</style>
