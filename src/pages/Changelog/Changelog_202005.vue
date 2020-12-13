<template>
	<div>
		<changelog-item title="Build r20200530" date="2020-05-30">
			<template #new>
				<li><b-badge variant="info">유닛 모달</b-badge>내 스킨에 <b-badge variant="info">로비 애니메이션</b-badge>여부 추가.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20200523" date="2020-05-23">
			<template #new>
				<li><b-badge variant="info">유닛 모달</b-badge>완성.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20200521" date="2020-05-21">
			<template #new>
				<li>유닛정보 <b-badge variant="info">일반 보기</b-badge>, <b-badge variant="info">그룹별 보기</b-badge>완성</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20200518" date="2020-05-18">
			<template #new>
				<li>유닛정보 <b-badge variant="info">테이블 보기</b-badge>완성</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20200517" date="2020-05-17">
			<template #new>
				<li><b-badge variant="info">장비정보</b-badge>페이지 완성</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20200516" date="2020-05-16">
			<template #site>
				<li>프로젝트 시작</li>
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
export default class Changelog_202005 extends Vue { }
</script>
