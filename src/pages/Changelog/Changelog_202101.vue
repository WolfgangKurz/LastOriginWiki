<template>
	<div>
		<changelog-item title="Build 7786" date="2021-01-15">
			<template #bugfix>
				<li>전투원정보의 테이블 보기에서 승급 필터가 작동하지 않던 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li>전투원 기본 정보에 전투원 아이콘 및 SD 아이콘이 추가되었습니다.</li>
				<li>경험치 계산기에 시설 보너스 입력이 추가되었습니다.</li>
			</template>
			<template #update>
				<li>2021년 01월 교환소 정보가 추가되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7742" date="2021-01-15">
			<template #bugfix>
				<li>전투원 페이지에서 전용 장비가 없어도 표시되던 점을 수정했습니다.</li>
				<li>전투원의 스테이터스 계산기에서 장비가 장착되지 않던 점을 수정했습니다.</li>
				<li>장비의 등급을 변경해도 버프 목록이 변경되지 않던 점을 수정했습니다.</li>
				<li>적중 버프가 명중률로 표기되던 점을 수정했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7737" date="2021-01-14">
			<template #site>
				<li>전투원, 장비, 적의 DB 구조를 개편했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7678" date="2021-01-12">
			<template #site>
				<li>대사 오디오 파일의 확장자를 mp3로 변경했습니다.</li>
				<li>BGM 오디오 파일의 확장자를 mp3로 변경했습니다.</li>
			</template>
			<template #bugfix>
				<li>
					<b-badge variant="dark">Build 7660</b-badge> 이후 중장형 전투원과 기동형 전투원의 출격 비용이 뒤바뀌어있던 문제를 수정했습니다.
				</li>
				<li>일부 장비의 획득처 정보가 제대로 표시되지 않던 문제를 수정했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7673" date="2021-01-11">
			<template #bugfix>
				<li>
					<b-badge variant="warning">A-14B 스프리건</b-badge>의 1번째 패시브 <b-badge variant="info">루머 콜렉터</b-badge>의 설명이 이전
					업데이트 내용으로 반영되지 않았던 점을 수정했습니다.
				</li>
			</template>
			<template #new>
				<li>새로운 적 정보가 추가되었습니다.</li>
			</template>
			<template #update>
				<li>
					<b-badge variant="warning">마키나</b-badge>의 2번째 액티브 <b-badge variant="info">관중 소환</b-badge>의 사거리 및 고정 범위
					여부가 변경된 점을 반영했습니다.
				</li>
				<li>일부 적의 정보가 갱신되었습니다.</li>
				<li>
					<b-badge variant="warning">낙원으로부터 온 초대장</b-badge>의 <b-badge variant="warning">Ev2-3</b-badge> 및
					<b-badge variant="warning">Ev2-4</b-badge>의 탐색 정보가 갱신되었습니다.
				</li>
			</template>
			<template #skin>
				<li>
					<b-badge variant="warning">로열 아스널</b-badge>의 <b-badge variant="danger">드림위버 웨딩 스페셜 : 이 마음을 그대에게</b-badge>의
					로비 애니메이션 여부 및 가격 정보가 갱신되었습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7662" date="2021-01-09">
			<template #bugfix>
				<li>전투원정보의 스테이터스에서 장착 제한이 있는 장비가 표시되지 않던 문제를 수정했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7660" date="2021-01-09">
			<template #site>
				<li>일부 DB를 비동기 처리했습니다.</li>
				<li>전투원 출격 비용 DB를 메인 스크립트와 통합했습니다.</li>
			</template>
			<template #bugfix>
				<li>
					<b-badge variant="info">레나 더 챔피언</b-badge>의 1번째 패시브 <b-badge variant="info">태그팀</b-badge>의 버프 수치가 잘못된 점을
					수정했습니다.
				</li>
				<li>전투원 스킬 정보의 스킬 속성 아이콘이 약간 왼쪽으로 치우친 점을 수정했습니다.</li>
			</template>
			<template #new>
				<li>
					전투원 대사에 일본 서버 대사 정보가 추가되었습니다.<br />
					일본 서버 대사 및 오디오는 비정기적으로 갱신됩니다.<br />
					그렇습니다. 생각나면 갱신합니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7652" date="2021-01-07">
			<template #bugfix>
				<li>전투원 스테이터스 계산기에서 전투원의 전용장비를 선택할 수 없는 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li>장비의 스테이터스 상승 수치를 강화 포인트로 환산한 수치 표시를 추가했습니다.</li>
			</template>
			<template #update>
				<li>전투원 경험치 계산기를 재개장했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7638" date="2021-01-06">
			<template #site>
				<li>일부 DB를 비동기 처리했습니다.</li>
			</template>
			<template #bugfix>
				<li>일부 지역의 웨이브 정보가 잘못 표시되던 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li>여러 종류의 적 배치가 나타날 수 있는 지역의 모든 적 배치를 볼 수 있도록 웨이브 내 적 배치 번호를 추가했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7623" date="2021-01-05">
			<template #bugfix>
				<li><b-badge variant="warning">A-15 샐러맨더</b-badge>의 요소 숨김 일러스트가 표시되지 않던 문제를 수정했습니다.</li>
				<li>
					<b-badge variant="warning">세계정보</b-badge>의 <b-badge variant="warning">드랍 정보</b-badge>에서 획득 가능 물품이 올바르지 않게
					정렬되어있던 문제를 수정했습니다.
				</li>
				<li>
					<b-badge variant="warning">교환소</b-badge>에서 <b-badge variant="info">장비 연구실 시설품</b-badge>이 표시되지 않던 문제를
					수정했습니다.
				</li>
				<li>
					<b-badge variant="warning">교환소</b-badge>에서 <b-badge variant="info">소형 배터리 팩</b-badge>,
					<b-badge variant="info">중형 배터리 팩</b-badge> 이미지가 표시되지 않던 문제를 수정했습니다.
				</li>
			</template>
			<template #new>
				<li>
					전투원 스킬 정보에 스킬 위력 증가치 뱃지를 추가했습니다.<br />
					스킬 위력 증가치 뱃지는 <small><b-badge variant="success">▲ 0.2</b-badge></small
					>와 같이 표시됩니다.<br />
				</li>
			</template>
			<template #update>
				<li>전투원 스킬 정보의 버프/디버프가 아닌 수치의 색상을 <b-badge variant="success">녹색</b-badge>으로 변경했습니다.</li>
				<li>전투원 정보의 링크 보너스 선택 인터페이스를 드롭다운에서 버튼으로 변경했습니다.</li>
				<li>적 정보 팝업의 데스크탑 사이즈 UI를 개선했습니다.</li>
			</template>
			<template #dialogue>
				<li>토미 워커의 대사가 누락되어있던 점을 수정했습니다.</li>
				<li>전투원의 액티브 스킬 일부가 누락된 점을 수정했습니다.</li>
				<li><b-badge variant="light">KST 2021-01-05 01:06:33</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
				<li>🎉 모든 전투원의 대사가 추가되었습니다. 🎉</li>
				<li>전투원의 대사 오디오 태그의 Preload 기능을 제거했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7608" date="2021-01-04">
			<template #new>
				<li>신규 전투원 <b-badge variant="warning">마키나</b-badge>의 정보가 추가되었습니다.</li>
				<li>신규 전투원 <b-badge variant="warning">A-15 샐러맨더</b-badge>의 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">낙원으로부터 온 초대장</b-badge> 2부 세계 정보가 추가되었습니다.</li>
			</template>
			<template #skin>
				<li>일부 전투원 스킨의 가격이 누락되어있던 점을 수정했습니다.</li>
				<li>
					<b-badge variant="warning">자비로운 리앤</b-badge>의 스킨 <b-badge variant="danger">데이트 복장</b-badge>의 중파 일러스트가
					추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">세라피아스 앨리스</b-badge>의 스킨 <b-badge variant="danger">해변의 여왕의 유혹</b-badge>의 정보가
					추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">AL 레이스</b-badge>의 스킨 <b-badge variant="danger">특급 요원 레이스</b-badge>의 정보가
					추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">이터니티</b-badge>의 스킨 <b-badge variant="danger">오르카 강아지, 이터니티</b-badge>의 정보가
					추가되었습니다.
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
