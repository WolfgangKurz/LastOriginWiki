<template>
	<div>
		<changelog-item title="Build 7873" date="2021-02-16">
			<template #bugfix>
				<li><rarity-badge border rarity="S">S급 장비</rarity-badge>의 강화 비용이 잘못 표시되던 문제를 수정했습니다.</li>
				<li>일부 전투원의 짧은 이름이 제대로 적용되어있지 않던 문제를 수정했습니다.</li>
			</template>
			<template #new> </template>
			<template #update> </template>
			<template #skin>
				<li>
					<b-badge variant="warning">T-14 미호</b-badge>의 <b-badge variant="danger">천년의 약속</b-badge> 스킨의 가격 정보가
					갱신되었습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7856" date="2021-02-13">
			<template #site>
				<li>일부 스크립트를 CDN 경유로 변경하였습니다.</li>
			</template>
			<template #bugfix>
				<li>
					<b-badge variant="warning">전투원정보</b-badge>의 <b-badge variant="info">테이블 보기</b-badge>의 헤더 아이콘이 잘못 표시되던 점을
					수정했습니다.
				</li>
				<li>
					<b-badge variant="warning">전투원정보</b-badge>의 전투원 대사에서 스킨의 서약 대사는 <b-badge variant="dark">미구현</b-badge>으로
					표시되도록 수정했습니다.
				</li>
				<li>일부 소모품의 이미지가 표시되지 않던 점을 수정했습니다.</li>
			</template>
			<template #new>
				<li><b-badge variant="warning">적 정보</b-badge> 팝업에 해당 적 팝업으로 바로 이동하는 주소 링크를 추가했습니다.</li>
			</template>
			<template #update>
				<li>
					<b-badge variant="warning">적 정보</b-badge> 팝업에서 레벨을 변경하면 현재 주소에도 해당 레벨이 반영되도록 수정했습니다. 적 정보
					주소를 적의 레벨과 함께 공유할 수 있습니다.
				</li>
				<li>
					<b-badge variant="warning">전투원정보</b-badge>의 <b-badge variant="info">전투원 카드</b-badge>의 전투원 유형을 인게임에서
					사용하는 아이콘으로 변경하고 카드의 좌상단으로 옮겼습니다.
				</li>
			</template>
			<template #skin>
				<li>
					<b-badge variant="warning">켈베로스</b-badge>의 <b-badge variant="danger">드림위버 웨딩 스페셜 : 오늘은 얌전히!</b-badge> 스킨의
					로비 애니메이션 여부와 가격 정보가 갱신되었습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7845" date="2021-02-08">
			<template #new>
				<li>신규 전투원 <b-badge variant="warning">천향의 히루메</b-badge>의 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">누군가 바랐던 소원</b-badge> 이벤트 정보가 추가되었습니다. (교환소 정보는 이후 추가됩니다.)</li>
				<li>신규 적 정보가 추가되었습니다.</li>
			</template>
			<template #update>
				<li>일부 적의 정보가 갱신되었습니다.</li>
			</template>
			<template #skin>
				<li><b-badge variant="warning">T-14 미호</b-badge>의 <b-badge variant="danger">천 년의 약속</b-badge> 스킨 정보가 추가되었습니다.</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="warning">사라카엘</b-badge>의 대사 일부가 잘못입력되어있던 점을 수정했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7842" date="2021-02-01">
			<template #bugfix>
				<li>
					<b-badge variant="warning">P/A-00 그리폰</b-badge>의 2번째 패시브 <b-badge variant="info">연계 폭격</b-badge>의 적용 대상이
					올바르지 않던 점을 수정했습니다.
				</li>
				<li>
					일부 환경에서 전투원 스킬 정보의 <b-badge variant="primary">아군 대상</b-badge> 또는
					<b-badge variant="primary">본인 대상</b-badge> 표기가 줄바꿈되는 문제를 수정했습니다.
				</li>
			</template>
			<template #new>
				<li>신규 전투원 <b-badge variant="warning">사라카엘</b-badge>의 정보가 추가되었습니다.</li>
				<li>신규 장비 <b-badge variant="warning">개량형 방어 역장</b-badge>의 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">2021년 02월 교환소</b-badge> 정보가 추가되었습니다.</li>
			</template>
			<template #update>
				<li>전투원 스킬 정보의 비 증감값 계수의 가시성을 개선했습니다.</li>
				<li>전투원 대사의 <b-badge variant="warning">누락</b-badge>을 <b-badge variant="dark">미구현</b-badge>으로 변경하였습니다.</li>
			</template>
			<template #skin>
				<li><b-badge variant="warning">드라큐리나</b-badge>의 중파 이미지 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">레이시</b-badge>의 <b-badge variant="danger">머무를 장소</b-badge> 스킨 정보가 추가되었습니다.</li>
			</template>
		</changelog-item>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ChangelogItem from "./ChangelogItem/ChangelogItem";
import RarityBadge from "@/components/RarityBadge.vue";

@Component({
	components: {
		ChangelogItem,
		RarityBadge,
	},
})
// eslint-disable-next-line camelcase
export default class Changelog_202102 extends Vue { }
</script>
