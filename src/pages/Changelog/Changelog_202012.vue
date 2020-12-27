<template>
	<div>
		<changelog-item title="Build 7561" date="2020-12-28">
			<template #site>
				<li>🎄 메리 크리스마스! 🎄 였나요? 저는 내내 이거 고쳤습니다.</li>
				<li>사이트에서 사용되는 DB의 용량을 최적화했습니다.</li>
				<li>전투원 스킬 DB의 구조를 최적화했습니다.</li>
			</template>
			<template #bugfix>
				<li><b-badge variant="warning">세계정보</b-badge>의 일부 지역의 웨이브 수가 비정상적으로 표시되는 문제가 수정되었습니다.</li>
			</template>
			<template #new>
				<li>
					<b-badge variant="warning">교환소</b-badge> 메뉴가 추가되었습니다.<br />
					현재 및 역대 <b-badge variant="exchange">전투원/장비 교환소</b-badge>와 <b-badge variant="exchange">이벤트 교환소</b-badge> 정보가
					표시됩니다.<br />
					<b-badge variant="dark">지고의 저녁식사</b-badge> 이외의 이벤트는 현재 항목 추가 일자 및 당시 교환 가능 갯수를 조사하고 있습니다.
				</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="light">KST 2020-12-28 01:10:11</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7381" date="2020-12-23">
			<template #bugfix>
				<li>전투원의 전투 승리 호감도 변동치가 올바른 수치로 변경되었습니다.</li>
			</template>
			<template #new>
				<li>
					<b-badge variant="warning">세계정보</b-badge>에 <b-badge variant="supplementary">외전</b-badge> 및
					<b-badge variant="primary">외부 통신 요청</b-badge> 정보가 추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">세계정보</b-badge>의 클리어 보상의 보상 표시가 이제
					<b-badge variant="secondary">클리어 보상</b-badge>과 <b-badge variant="secondary">★4 보상</b-badge>으로 분리됩니다.
				</li>
				<li>
					<b-badge variant="warning">세계정보</b-badge>의 클리어 보상에 <b-badge variant="secondary">클리어 조건</b-badge>이 추가되었습니다.
				</li>
			</template>
			<template #update>
				<li>이제 장비의 획득처가 <b-badge variant="primary">외부 통신 요청</b-badge>인 경우 별도 행으로 분류됩니다.</li>
				<li>이제 적의 등장 스테이지가 <b-badge variant="primary">외부 통신 요청</b-badge>인 경우 별도 행으로 분류됩니다.</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="light">KST 2020-12-23 01:39:55</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7331" date="2020-12-21">
			<template #bugfix>
				<li>적 정보에서 스킬의 피해량이 잘못 표시되던 문제를 수정했습니다.</li>
				<li>기존 세계 정보의 일부 잘못되어있 적 배치 및 배치된 적 정보가 수정되었습니다.</li>
				<li>
					<b-badge variant="warning">쿠노이치 카엔</b-badge>의 2번째 액티브 <b-badge variant="info">오의 [화신강림]</b-badge>의 피해량
					수치가 잘못되어있던 점을 수정했습니다.
				</li>
				<li>스킬의 범위에 표시되는 위력이 50%, 25%일 때 올바르지 않은 색상으로 표시되던 문제가 수정되었습니다.</li>
				<li>전투원의 링크 보너스의 스킬 위력이 스킬 설명에 반영되지 않던 문제가 수정되었습니다.</li>
			</template>
			<template #update>
				<li>이벤트 <b-badge variant="warning">낙원으로부터 온 초대장</b-badge>의 적 정보가 추가되었습니다.</li>
				<li>
					<b-badge variant="warning">세계정보</b-badge>에서 맵을 선택할 때 주소에 <b-badge variant="secondary">#drops</b-badge>가 추가되던
					것을 삭제했습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7325" date="2020-12-21">
			<template #new>
				<li>새 이벤트 <b-badge variant="warning">낙원으로부터 온 초대장</b-badge>의 정보가 추가되었습니다.</li>
				<li>새 전투원 <b-badge variant="warning">레나 더 챔피언</b-badge>의 정보가 추가되었습니다.</li>
				<li>새 이벤트 <b-badge variant="warning">메리</b-badge>의 정보가 추가되었습니다.</li>
			</template>
			<template #update>
				<li><b-badge variant="warning">A-6 이오</b-badge>의 S, SS 승급 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">랜서 미나</b-badge>의 S, SS 승급 정보가 추가되었습니다.</li>
			</template>
			<template #skin>
				<li><b-badge variant="warning">포이</b-badge>의 스킨 <b-badge variant="danger">우유 도둑 포이</b-badge>의 정보가 추가되었습니다.</li>
				<li>
					<b-badge variant="warning">A-6 이오</b-badge>의 스킨 <b-badge variant="danger">한 겨울의 약속</b-badge>의 정보가 추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">A-6 이오</b-badge>의 스킨 <b-badge variant="danger">한 겨울의 약속</b-badge>의 정보가 추가되었습니다.
				</li>
				<li><b-badge variant="warning">이터니티</b-badge>의 기본 스킨의 중파 일러스트가 추가되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7301" date="2020-12-19">
			<template #new>
				<li><b-badge variant="warning">장비정보</b-badge>의 장비 효과 필터 목록을 유형별로 구분했습니다.</li>
			</template>
			<template #update>
				<li>
					<b-badge variant="warning">전투원정보</b-badge>의 스킬 효과 필터의 기능이 개선되었습니다.<br />
					이제 <b-badge variant="info">자신</b-badge>, <b-badge variant="info">아군</b-badge>, <b-badge variant="info">적군</b-badge> 필터가
					실제 버프의 적용 대상을 기준으로 적용됩니다.
				</li>
				<li>
					전투원 스킬 정보의 버프 정보가 개선되었습니다.<br />
					버프의 적용 대상에 <b-badge variant="stat-def">아군</b-badge>, <b-badge variant="stat-def">적군</b-badge> 여부가
					추가되었습니다.<br />
					이제 <b-badge variant="danger">아군 또는 적군이 n체일 때</b-badge> 조건의 전투원 유형이 표시됩니다.
				</li>
				<li>
					<b-badge variant="warning">세계정보</b-badge>의 <b-badge variant="secondary">탐사 정보</b-badge>의
					<b-badge variant="secondary">추가 획득 가능</b-badge> 소모품의 획득 확률 표시가 추가되었습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7218" date="2020-12-16">
			<template #new>
				<li>
					<b-badge variant="warning">전투원정보</b-badge>의 필터에 <b-badge variant="secondary">스킬 속성 필터</b-badge>가
					추가되었습니다.<br />
					해당 속성의 스킬을 가진 전투원이 필터됩니다.
				</li>
				<li><b-badge variant="warning">전투원정보</b-badge>의 스킬 효과 필터 목록을 유형별로 구분했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7209" date="2020-12-15">
			<template #bugfix>
				<li>일부 전투원의 스킬의 계수가 올바르지 않던 문제를 수정했습니다.</li>
				<li>일부 전투원의 스킬의 계수가 "스킬 위력"에 영향을 받지 않던 문제를 수정했습니다.</li>
			</template>
			<template #update>
				<li>전투원의 스킬 계수를 표시하는 뱃지의 배경 색상을 진하게 변경했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7207" date="2020-12-14">
			<template #bugfix>
				<li>일부 전투원의 스킬의 계수/설명이 누락된 문제를 수정했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7204" date="2020-12-14">
			<template #bugfix>
				<li>적 스킬의 버프 수치가 스킬 레벨 2 수치로 표시되던 문제를 수정했습니다.</li>
				<li>소환물의 버프 수치가 스킬 레벨 2 수치로 표시되던 문제를 수정했습니다.</li>
				<li>전투원의 웨이브 승리 호감도 변동 수치가 잘못 표시되던 문제를 수정했습니다.</li>
			</template>
			<template #update>
				<li>변경된 시설 수치가 반영되었습니다.</li>
				<li>변경된 전투원 스킬 공격력 계수가 반영되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7186" date="2020-12-14">
			<template #bugfix>
				<li>전투원 일러스트의 배경, 스킬 범위 등의 이미지가 표시되지 않던 문제를 수정했습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build 7185" date="2020-12-14">
			<template #site>
				<li>Changelog의 디자인을 변경했습니다.</li>
				<li>빌드 번호를 추가했습니다.</li>
				<li>데이터 DB 파일을 분리했습니다. (동적 로드는 아직입니다!)</li>
			</template>
			<template #bugfix>
				<li>일부 적의 정보를 보려고 하면 페이지가 작동하지 않던 문제를 수정했습니다.</li>
				<li>
					<b-badge variant="warning">생명의 세레스티아</b-badge>의 스킨 <b-badge variant="info">세레스티아 카우걸</b-badge>의 중파 정보가
					누락되어있던 점을 수정했습니다.
				</li>
				<li>
					<b-badge variant="warning">MH-4 테티스</b-badge>의 스킨 <b-badge variant="info">소악마인가? 소정령인가?</b-badge>의 일러스트레이터
					정보가 잘못되어있던 점을 수정했습니다.
				</li>
				<li>사이트의 폰트가 툴팁에서 사용되지 않던 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li><b-badge variant="warning">전투원정보</b-badge>에 <b-badge variant="info">제조 시간</b-badge> 보기가 추가되었습니다.</li>
			</template>
			<template #delete>
				<li>
					저작권자 <b-badge variant="warning">(주)스마트조이</b-badge>의 요청으로 <b-badge variant="dark">웨이브 별 드랍 정보</b-badge>를
					삭제했습니다.
				</li>
			</template>
			<template #update>
				<li>전투원 및 장비의 획득처 표시를 개선했습니다.</li>
			</template>
			<template #skin>
				<li>
					<b-badge variant="warning">AG-1 네레이드</b-badge>의 스킨 <b-badge variant="info">한여름의 네리네리</b-badge>의 로비 애니메이션
					여부가 갱신되었습니다.
				</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="light">KST 2020-12-14 02:19:27</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201207" date="2020-12-07">
			<template #bugfix>
				<li>모든 전투원의 호감도 수치가 잘못 표기된 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li>신규 전투원 <b-badge variant="warning">천공의 엘라</b-badge>의 정보가 추가되었습니다.</li>
				<li>신규 장비 <b-badge variant="warning">개량형 니트로 EX 3500</b-badge>의 정보가 추가되었습니다.</li>
			</template>
			<template #skin>
				<li><b-badge variant="warning">AT72 라인리터</b-badge>의 스킨 <b-badge variant="info">RheinTiger 모델</b-badge>이 추가되었습니다.</li>
				<li><b-badge variant="warning">징벌의 사디어스</b-badge>의 스킨 <b-badge variant="info">뇌전룡 의상</b-badge>이 추가되었습니다.</li>
				<li><b-badge variant="warning">자비로운 리앤</b-badge>의 스킨 <b-badge variant="info">데이트 복장</b-badge>이 추가되었습니다.</li>
				<li>
					<b-badge variant="warning">쿠노이치 제로</b-badge>의 스킨 <b-badge variant="info">흐트러진 꽃</b-badge>의 중파 일러스트가
					추가되었습니다.
				</li>
				<li>
					<b-badge variant="warning">AG-1 네레이드</b-badge>의 스킨 <b-badge variant="info">한여름의 네리네리</b-badge>의 로비 애니메이션
					여부가 수정되었습니다.
				</li>
			</template>
			<template #update>
				<li>일부 적의 정보가 갱신되었습니다.</li>
				<li>소모품 정보가 갱신되었습니다.</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="light">KST 2020-12-07 15:36:17</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201206" date="2020-12-06">
			<template #new>
				<li>
					<b-badge variant="warning">세계 정보</b-badge>의 드랍 정보에 <b-badge variant="dark">웨이브 별 드랍 정보</b-badge>버튼이
					추가되었습니다.<br />
					웨이브 별 드랍 정보에서는 각 웨이브의 전투원/장비/소모품의 드랍 확률도 확인할 수 있습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201205" date="2020-12-05">
			<template #new>
				<li>
					전투원/적 스킬 정보에 <b-badge variant="warning">보호 무시</b-badge>, <b-badge variant="danger">땅 찍기</b-badge>,
					<b-badge variant="success">적중 보정</b-badge>, <b-badge variant="dark">소환물</b-badge> 정보가 추가되었습니다.<br />
					소환물은 뱃지를 눌러 자세한 정보를 확인할 수 있습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201203" date="2020-12-03">
			<template #bugfix>
				<li><b-badge variant="warning">8-8</b-badge>의 적 정보가 정확하지 않던 문제를 수정했습니다.</li>
				<li>
					<b-badge variant="warning">세계정보</b-badge>의 지도 표시를 변경했습니다.<br />
					<b-badge variant="info">할로윈 파크 패닉</b-badge>의 지도가 정상적으로 표시됩니다.
				</li>
				<li>
					<b-badge variant="warning">무적의 용</b-badge>의 기본 및 서약 대사의 "액티브 스킬" 오디오가 일부 환경에서 재생되지 않는 문제를
					수정했습니다.
				</li>
			</template>
			<template #new>
				<li>
					전투원의 스킬 정보에 <b-badge variant="danger">확률 발동 버프</b-badge>의 확률 표기를 추가했습니다.<br />
					해당 확률은 호감도 또는 버프/디버프 효과 레벨에 영향을 받지 않으며, 오직 스킬 레벨과
					<b-badge variant="info">효과 발동</b-badge> 수치에만 영향을 받습니다.<br />
					<b-badge variant="secondary">효과 발동 수치 예) LRL의 전용 장비 "용살자의 징표"</b-badge>
				</li>
			</template>
			<template #update>
				<li>2020년 12월 교환소 정보가 갱신되었습니다.</li>
				<li>일부 버프 이름이 갱신되었습니다.</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="light">KST 2020-12-03 02:20:15</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201202" date="2020-12-02">
			<template #new>
				<li><b-badge variant="warning">세계정보</b-badge>의 지역에 지역 이름 및 설명이 추가되었습니다.</li>
				<li>
					<b-badge variant="warning">전투원 페이지</b-badge>의 상단 탭 구성을 변경했습니다.<br />
					<b-badge variant="info">기본정보</b-badge>는 전투원의 소개글과 기존의 도감 정보, 전용 장비, 호감도 정보, 획득처 정보를 포함합니다.
					도감 정보에 전투원의 키와 몸무게, 사용 무기 정보가 추가되었습니다.<br />
					<b-badge variant="info">링크/스킬</b-badge>은 링크 보너스, 풀링크 보너스, 출격 자원, 스킬 정보를 포함합니다.
				</li>
				<li><b-badge variant="warning">적 정보</b-badge> 팝업의 스킬 정보에 버프 정보가 추가되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201201" date="2020-12-01">
			<template #bugfix>
				<li>전투원 스테이터스의 적중률/치명타/회피율이 비정상적인 값으로 변경되는 문제를 수정했습니다.</li>
				<li>일부 액티브 스킬 대사가 여러개로 나뉜 전투원의 대사가 누락되어있던 점을 수정했습니다.</li>
			</template>
			<template #update>
				<li>전투원 및 장비의 획득처가 갱신되었습니다. (할로윈 파크 패닉 교환소, 외전 보상)</li>
				<li><b-badge variant="warning">RF87 로크</b-badge>의 기본 스킨의 로비 애니메이션 여부가 갱신되었습니다.</li>
				<li><b-badge variant="warning">켈베로스</b-badge>의 스킬 변경점을 반영했습니다.</li>
				<li><b-badge variant="warning">미스세이프티</b-badge>의 스킬 변경점을 반영했습니다.</li>
				<li><b-badge variant="warning">프로스트 서펀트</b-badge>의 스킬 변경점을 반영했습니다.</li>
				<li><b-badge variant="warning">CT66 램파트</b-badge>의 스킬 변경점을 반영했습니다.</li>
				<li><b-badge variant="warning">SD3M 펍 헤드</b-badge>의 스킬 변경점을 반영했습니다.</li>
				<li><b-badge variant="warning">징벌의 사디어스</b-badge>의 스킬 변경점을 반영했습니다.</li>
				<li><b-badge variant="warning">자비로운 리앤</b-badge>의 스킬 변경점을 반영했습니다.</li>
				<li>일부 전투원의 버프 내용을 갱신했습니다.</li>
			</template>
			<template #dialogue>
				<li><b-badge variant="light">KST 2020-11-31 23:35:01</b-badge>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
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
export default class Changelog_202012 extends Vue { }
</script>
