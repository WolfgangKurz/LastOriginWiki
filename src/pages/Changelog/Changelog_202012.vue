<template>
	<div>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201201>2020-12-01</b-card-header>
			<b-collapse id="changelog20201201" visible>
				<b-card-body>
					<div>전투원 및 장비의 획득처가 갱신되었습니다. (할로윈 파크 패닉 교환소, 외전 보상)</div>
					<div>전투원 스테이터스의 적중률/치명타/회피율이 비정상적인 값으로 변경되는 문제를 수정했습니다.</div>
					<div><b-badge variant="warning">RF87 로크</b-badge>의 기본 스킨의 로비 애니메이션 여부가 갱신되었습니다.</div>
					<div><b-badge variant="warning">켈베로스</b-badge>의 스킬 변경점을 반영했습니다.</div>
					<div><b-badge variant="warning">미스세이프티</b-badge>의 스킬 변경점을 반영했습니다.</div>
					<div><b-badge variant="warning">프로스트 서펀트</b-badge>의 스킬 변경점을 반영했습니다.</div>
					<div><b-badge variant="warning">CT66 램파트</b-badge>의 스킬 변경점을 반영했습니다.</div>
					<div><b-badge variant="warning">SD3M 펍 헤드</b-badge>의 스킬 변경점을 반영했습니다.</div>
					<div><b-badge variant="warning">징벌의 사디어스</b-badge>의 스킬 변경점을 반영했습니다.</div>
					<div><b-badge variant="warning">자비로운 리앤</b-badge>의 스킬 변경점을 반영했습니다.</div>
					<div>일부 전투원의 버프 내용을 갱신했습니다.</div>
					<div>일부 액티브 스킬 대사가 여러개로 나뉜 전투원의 대사가 누락되어있던 점을 수정했습니다.</div>
					<div>2020-11-31 23:35:01 까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import RarityBadge from "@/components/RarityBadge.vue";

@Component({
	components: {
		RarityBadge,
	},
})
// eslint-disable-next-line camelcase
export default class Changelog_202012 extends Vue { }
</script>
