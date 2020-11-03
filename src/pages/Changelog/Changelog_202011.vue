<template>
	<div>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201102>2020-11-02</b-card-header>
			<b-collapse id="changelog20201102" visible>
				<b-card-body>
					<div>
						<b-badge variant="warning">스파르탄 캡틴</b-badge>, <b-badge variant="warning">스파르탄 어썰트</b-badge>,
						<b-badge variant="warning">스파르탄 부머</b-badge>의 승급 정보가 추가되었습니다.<br />
						1번째 액티브 스킬 <b-badge variant="info">어썰트 라이플</b-badge>의 설명이 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">징벌의 사디어스</b-badge>의 1번째 패시브 <b-badge variant="info">출동 지원</b-badge> 및 3번째
						패시브 <b-badge variant="info">가드 오브 시티즌</b-badge>의 적용 대상에 <b-badge variant="warning">자비로운 리앤</b-badge>이
						추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">AT72 라인리터</b-badge>의 2번째 패시브 <b-badge variant="info">기병 참전</b-badge>의 설명이
						수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">P-49 슬레이프니르</b-badge>의 2번째 액티브 <b-badge variant="info">한계돌파</b-badge>에 반격 효과
						해제 설명을 추가했습니다.
					</div>
					<div>
						일부 전투원의 스킨 정보가 잘못 기입되어있던 문제를 수정했습니다.
					</div>
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
export default class Changelog_202011 extends Vue { }
</script>
