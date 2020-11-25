<template>
	<div>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201125>2020-11-25</b-card-header>
			<b-collapse id="changelog20201125" visible>
				<b-card-body>
					<div>
						<b-badge variant="warning">레모네이드 알파</b-badge>의 3번째 패시브
						<b-badge variant="info">케스토스 히마스: 중장갑 OS</b-badge>의 수치가 올바르지 않게 표시되던 문제를 수정했습니다.
					</div>
					<div>스킬의 적용 영역이 상하 반전으로 적용되던 문제를 수정했습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201124>2020-11-24</b-card-header>
			<b-collapse id="changelog20201124" visible>
				<b-card-body>
					<div>
						신규 전투원 <b-badge variant="warning">해체자 아자즈</b-badge> 및 <b-badge variant="warning">레모네이드 알파</b-badge>의
						정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">AT72 라인리터</b-badge>의 1번 액티브 <b-badge variant="info">기사의 응시</b-badge> 및 2번 액티브
						<b-badge variant="info">용기병의 화창</b-badge>의 공격력 계수가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">엘븐 포레스트메이커</b-badge>의 스킨 <b-badge variant="info">화이트 드레스</b-badge>스킨이
						추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">다크엘븐 포레스트레인져</b-badge>의 스킨 <b-badge variant="info">초콜릿 드레스</b-badge>스킨이
						추가되었습니다.
					</div>
					<div>
						전투원 정보에 각 상황별 <b-badge variant="danger">♥ 호감도</b-badge> 증감치가 추가되었습니다.<br />
						선물의 호감도 증가치는 배수로 표시되며, 각 선물의 기본 호감도 증가치에 곱해져서 증가됩니다.<br />
						ex) <b-badge variant="danger">수제케이크 ♥ 기본 호감도 +5.00</b-badge> x <b-badge variant="info">LRL 배수 2.00배</b-badge> =
						<b-badge variant="success">10.00 증가</b-badge>
					</div>
					<div>신규 적 정보가 추가되었습니다.</div>
					<div>8지역 세계 정보가 추가되었습니다.</div>
					<div>
						소모품 정보 팝업에서 <b-badge variant="danger">♥ 호감도</b-badge>, <b-badge variant="danger">♥ 호감도 상한</b-badge>,
						<b-badge variant="warning">전투원 경험치</b-badge>, <b-badge variant="success">스킬 경험치</b-badge> 표시가 추가되었습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201121>2020-11-21</b-card-header>
			<b-collapse id="changelog20201120">
				<b-card-body>
					<div>
						<b-badge variant="warning">불굴의 마리</b-badge> 및 <b-badge variant="warning">A-87 밴시</b-badge>의 서약 보이스가
						추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">LRL</b-badge>의 <b-badge variant="info">교대 복귀자 보급품 1호</b-badge>스킨 정보가
						추가되었습니다.<br />
						로비 애니메이션이 포함된 스킨이라 일러스트는 준비하지 못했습니다.
					</div>
					<div>
						<b-badge variant="warning">A-87 밴시</b-badge>의 <b-badge variant="info">한여름의 냥냥어택</b-badge>스킨의 가격 정보를
						갱신했습니다.
					</div>
					<div>2020-11-21 03:40:00 까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</div>
					<div>전투원 스킬 효과 필터가 추가되었습니다.</div>
					<div>
						전투원 스킬 정보에 <b-badge variant="info">버프 보기</b-badge> 옵션이 추가되었습니다.<br />
						해당 옵션을 사용하면 인게임에서 사용되는 버프의 정보를 확인할 수 있습니다.<br />
						효과의 조건 등이 올바르지 않게 표시되는 경우, 개발자 이메일로 알려주시기 바랍니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201115>2020-11-15</b-card-header>
			<b-collapse id="changelog20201115">
				<b-card-body>
					<div>2020-11-15 03:00:00 까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201111>2020-11-11</b-card-header>
			<b-collapse id="changelog20201111">
				<b-card-body>
					<div>장비의 강화 비용이 올바르지 않은 값으로 표시되던 문제가 수정되었습니다.</div>
					<div>사이트에 SEO 정보를 추가했습니다.</div>
					<div>2020-11-11 00:20:00 까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201110>2020-11-10</b-card-header>
			<b-collapse id="changelog20201110">
				<b-card-body>
					<div>일부 전투원의 페이지가 열리지 않는 문제를 수정했습니다.</div>

					<div><b-badge variant="warning">골타리온 XIII세</b-badge>의 링크 보너스 정보가 잘못 표시되던 문제를 수정했습니다.</div>
					<div><b-badge variant="warning">골타리온 XIII세</b-badge>의 일러스트레이터 정보가 잘못 기입되어있던 점을 수정했습니다.</div>
					<div><b-badge variant="warning">전투원 스테이터스</b-badge>의 수치가 비정상적으로 표시되던 문제를 수정했습니다.</div>
					<div>
						<b-badge variant="warning">전투원 스테이터스</b-badge>에서 장비를 해제하면 장비 유형이 칩으로 변경되던 문제를 수정했습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201109>2020-11-09</b-card-header>
			<b-collapse id="changelog20201109">
				<b-card-body>
					<div>
						신규 전투원 <b-badge variant="warning">이터니티</b-badge>, <b-badge variant="warning">골타리온 XIII세</b-badge>의 정보가
						추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">C-33 안드바리</b-badge>의 <b-badge variant="info">사탕 강탈자</b-badge>스킨 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">보속의 마리아</b-badge>의 <b-badge variant="info">속박의 마리아</b-badge>스킨 정보가
						추가되었습니다.
					</div>
					<div>2020-11-09 사용자 참여로 추가된 대사들이 반영되었습니다.</div>

					<div>
						<b-badge variant="warning">적 정보</b-badge>메뉴에 이름으로 검색하는 기능이 추가되었습니다.<br />
						적의 HP 스테이터스가 올바른 수치로 표시되지 않던 문제가 수정되었습니다.<br />
						적의 HP, 공격력, 방어력에 소숫점 아래 수치가 표시되던 문제가 수정되었습니다.<br />
						적 스킬에 소숫점 아래 수치가 표시되던 문제가 수정되었습니다.
					</div>
					<div>
						<b-badge variant="warning">세계 정보</b-badge>의 적 정보가 정상적으로 표시되지 않던 문제가 수정되었습니다.<br />
						일부 적이 표시되지 않던 문제가 수정되었습니다.
					</div>
					<div>2020-11-08 사용자 참여로 추가된 대사들이 반영되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201108>2020-11-08</b-card-header>
			<b-collapse id="changelog20201108">
				<b-card-body>
					<div>
						<b-badge variant="warning">적 정보</b-badge>메뉴가 추가되었습니다.<br />
						적의 스킬과 설명, 스테이터스, 등장 스테이지를 확인할 수 있습니다.<br />
						적 스킬의 버프 목록은 아직 준비중입니다.
					</div>
					<div>
						<b-badge variant="warning">세계 정보</b-badge>메뉴가 수정되었습니다.<br />
						<b-badge variant="info">클리어 보상</b-badge>과 <b-badge variant="info">드랍 정보</b-badge>가 별도의 탭으로 분리되었습니다.<br />
						적 정보가 추가되었습니다. 적을 클릭하면 해당 적 정보 팝업이 바로 표시됩니다.<br />
						<b-badge variant="info">클리어 보상</b-badge>과 <b-badge variant="info">드랍 정보</b-badge>의 소모품을 클릭하면 해당 소모품의
						설명을 확인할 수 있습니다.
					</div>
					<div>
						현재 대사 텍스트가 입력되지 않은 전투원이 매우 많습니다.<br />
						입력해야하는 대사 분량이 너무 많아 개발자 혼자 작업할 수가 없어 발생한 문제로, 이 문제를 해결하고자 현재
						<a href="https://docs.google.com/spreadsheets/d/1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00" target="_blank">
							전투원 대사 DB </a
						>의 기여를 받고 있습니다.<br />
						많은 참여 부탁드립니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201102>2020-11-02</b-card-header>
			<b-collapse id="changelog20201102">
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
					<div>일부 전투원의 스킨 정보가 잘못 기입되어있던 문제를 수정했습니다.</div>
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
