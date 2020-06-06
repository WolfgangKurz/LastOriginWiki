<template>
	<div class="changelog text-left">
		<h2>변경 기록</h2>
		<p>
			<i>멸망 전의 전술 교본</i> 사이트의 변경 기록을 작성한 문서입니다.
		</p>
		<hr />

		<b-card class="mt-2">
			<template #header>2020-06-06</template>
			<b-card-text>
				<div>배포 시작</div>
				<div>레벨 10 이상의 스킬 범위가 정상적으로 표시되지 않는 문제 수정</div>
				<div>
					<b-badge variant="warning">오베로니아 레아</b-badge>의 2번째 패시브 스킬
					<b-badge variant="warning">기상 최적화</b-badge>의 1~9 레벨 범위가 올바르지 않은 문제 수정
				</div>
				<div>승급 후 자원 소모도 볼 수 있도록 수정</div>
				<div>파이어폭스를 제외한 브라우저에서 스킨이 잘려 표시되는 문제 수정</div>
				<div>모바일 사이즈에서 유닛 정보 내용이 넘치는 문제 수정</div>
				<div>모바일 사이즈에서 스킬 정보가 넘치는 문제 수정</div>
				<div>
					<b-badge variant="warning">세띠</b-badge>의 유형, 2번째 액티브 스킬
					<b-badge variant="warning">쏘지마세요!</b-badge>의 사거리와 AP가 잘못 기입되어있던 문제 수정
				</div>
				<div>
					<b-badge variant="warning">레이시</b-badge>의 1번째 패시브 스킬
					<b-badge variant="warning">전자기 공명</b-badge>의 전기 속성 아군 설명이 올바르지 못하게 표시되던 문제 수정
				</div>
				<div>
					<b-badge variant="warning">라비아타 프로토타입</b-badge>의 2번째 액티브 스킬
					<b-badge variant="warning">철충 대파괴</b-badge>의 AP가 누락되어있던 문제 수정
				</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-06-05</template>
			<b-card-text>
				<div>
					<b-badge variant="warning">켈베로스 "드림위버 웨딩 스페셜 : 오늘은 얌전히!"</b-badge>,
					<b-badge variant="warning">세띠 "드림위버 웨딩 스페셜 : 안식처"</b-badge>,
					<b-badge variant="warning">블랙 웜 S9</b-badge>스킨 추가
				</div>
				<div>
					<b-badge variant="warning">세띠</b-badge>스킬 정보 추가
				</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-06-04</template>
			<b-card-text>
				<div>유닛 스킬 정보 작성 완료 (세띠, 럼버제인 제외)</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-30</template>
			<b-card-text>
				<div>
					<b-badge variant="warning">유닛 모달</b-badge>내 스킨에
					<b-badge variant="warning">로비 애니메이션</b-badge>여부 추가.
				</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-23</template>
			<b-card-text>
				<div>
					<b-badge variant="warning">유닛 모달</b-badge>완성.
				</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-21</template>
			<b-card-text>
				<div>
					유닛정보
					<b-badge variant="warning">일반 보기</b-badge>,
					<b-badge variant="warning">그룹별 보기</b-badge>완성.
				</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-18</template>
			<b-card-text>
				<div>
					유닛정보
					<b-badge variant="warning">테이블 보기</b-badge>완성.
				</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-17</template>
			<b-card-text>
				<div>장비정보 페이지 완성.</div>
			</b-card-text>
		</b-card>
		<b-card class="mt-2">
			<template #header>2020-05-16</template>
			<b-card-text>
				<div>프로젝트 시작.</div>
			</b-card-text>
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
	.card-text > div {
		padding: 4px 0 3px;
		border-bottom: 1px solid #d9d9d9;

		&:last-child {
			border-bottom: 0;
		}
	}
	.badge {
		margin-bottom: 5px;
		font-size: inherit;
	}
}
</style>
