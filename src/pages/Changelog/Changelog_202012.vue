<template>
	<div>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201203>2020-12-03</b-card-header>
			<b-collapse id="changelog20201203" visible>
				<b-card-body>
					<div>2020년 12월 교환소 정보가 갱신되었습니다.</div>
					<div>일부 버프 이름이 갱신되었습니다.</div>
					<div><b-badge variant="warning">8-8</b-badge>의 적 정보가 정확하지 않던 문제를 수정했습니다.</div>
					<div>
						<b-badge variant="warning">세계정보</b-badge>의 지도 표시를 변경했습니다.<br />
						<b-badge variant="info">할로윈 파크 패닉</b-badge>의 지도가 정상적으로 표시됩니다.
					</div>
					<div>
						전투원의 스킬 정보에 <b-badge variant="danger">확률 발동 버프</b-badge>의 확률 표기를 추가했습니다.<br />
						해당 확률은 호감도 또는 버프/디버프 효과 레벨에 영향을 받지 않으며, 오직 스킬 레벨과
						<b-badge variant="info">효과 발동</b-badge> 수치에만 영향을 받습니다.<br />
						<b-badge variant="secondary">효과 발동 수치 예) LRL의 전용 장비 "용살자의 징표"</b-badge>
					</div>
					<div>
						<b-badge variant="warning">무적의 용</b-badge>의 기본 및 서약 대사의 "액티브 스킬" 오디오가 일부 환경에서 재생되지 않는 문제를
						수정했습니다.
					</div>
					<div>2020-12-03 02:20:15 까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201202>2020-12-02</b-card-header>
			<b-collapse id="changelog20201202">
				<b-card-body>
					<div><b-badge variant="warning">세계정보</b-badge>의 지역에 지역 이름 및 설명이 추가되었습니다.</div>
					<div>
						<b-badge variant="warning">전투원 페이지</b-badge>의 상단 탭 구성을 변경했습니다.<br />
						<b-badge variant="info">기본정보</b-badge>는 전투원의 소개글과 기존의 도감 정보, 전용 장비, 호감도 정보, 획득처 정보를
						포함합니다. 도감 정보에 전투원의 키와 몸무게, 사용 무기 정보가 추가되었습니다.<br />
						<b-badge variant="info">링크/스킬</b-badge>은 링크 보너스, 풀링크 보너스, 출격 자원, 스킬 정보를 포함합니다.
					</div>
					<div><b-badge variant="warning">적 정보</b-badge> 팝업의 스킬 정보에 버프 정보가 추가되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201201>2020-12-01</b-card-header>
			<b-collapse id="changelog20201201">
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
