<template>
	<div>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200530>2020-05-30</b-card-header>
			<b-collapse id="changelog20200530">
				<b-card-body>
					<div><b-badge variant="info">유닛 모달</b-badge>내 스킨에 <b-badge variant="info">로비 애니메이션</b-badge>여부 추가.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200523>2020-05-23</b-card-header>
			<b-collapse id="changelog20200523">
				<b-card-body>
					<div><b-badge variant="info">유닛 모달</b-badge>완성.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200521>2020-05-21</b-card-header>
			<b-collapse id="changelog20200521">
				<b-card-body>
					<div>
						유닛정보
						<b-badge variant="info">일반 보기</b-badge>, <b-badge variant="info">그룹별 보기</b-badge>완성
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200518>2020-05-18</b-card-header>
			<b-collapse id="changelog20200518">
				<b-card-body>
					<div>
						유닛정보
						<b-badge variant="info">테이블 보기</b-badge>완성
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200517>2020-05-17</b-card-header>
			<b-collapse id="changelog20200517">
				<b-card-body>
					<div><b-badge variant="info">장비정보</b-badge>페이지 완성</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20200516>2020-05-16</b-card-header>
			<b-collapse id="changelog20200516">
				<b-card-body>
					<div>프로젝트 시작</div>
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
export default class Changelog_202005 extends Vue { }
</script>
