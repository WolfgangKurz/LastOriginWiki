<template>
	<div>
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
