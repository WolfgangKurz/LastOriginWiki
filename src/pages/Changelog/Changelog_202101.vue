<template>
	<div>
		<changelog-item title="Build 7608" date="2021-01-04">
			<template #new>
				<li>신규 전투원 <b-badge variant="warning">마키나</b-badge>의 정보가 추가되었습니다.</li>
				<li>신규 전투원 <b-badge variant="warning">A-15 샐러맨더</b-badge>의 정보가 추가되었습니다.</li>
			</template>
			<template #skin>
				<li>일부 전투원 스킨의 가격이 누락되어있던 점을 수정했습니다.</li>
				<li>
					<b-badge variant="warning">자비로운 리앤</b-badge>의 스킨 <b-badge variant="danger">데이트 복장</b-badge>의 중파 일러스트가 추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">세라피아스 앨리스</b-badge>의 스킨 <b-badge variant="danger">해변의 여왕의 유혹</b-badge>의 정보가 추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">AL 레이스</b-badge>의 스킨 <b-badge variant="danger">특급 요원 레이스</b-badge>의 정보가 추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">이터니티</b-badge>의 스킨 <b-badge variant="danger">오르카 강아지, 이터니티</b-badge>의 정보가 추가되었습니다.
				</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="light">KST 2021-01-04 15:00:57</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7602" date="2021-01-03">
			<template #site>
				<li>사이트의 스토리지 서버가 공격당해 트래픽 비용이 매우 많이 발생하여 Cloudflare를 적용했습니다.</li>
			</template>
			<template #bugfix>
				<li>버프 목록에 적 이름이 정상적으로 표시되지 않던 문제를 수정했습니다.</li>
				<li>버프 목록이 모바일 환경에서 넘치는 문제를 수정했습니다.</li>
				<li><b-badge variant="warning">메리</b-badge>의 스킬 계수 정보가 표시되지 않던 문제를 수정했습니다.</li>
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
export default class Changelog_202101 extends Vue { }
</script>
