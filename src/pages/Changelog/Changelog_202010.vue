<template>
	<div>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201023>2020-10-23</b-card-header>
			<b-collapse id="changelog20201023" visible>
				<b-card-body>
					<div>전투원의 스킬 설명에서 참조되는 전투원이 잘못 표시되던 문제가 수정되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201022>2020-10-22</b-card-header>
			<b-collapse id="changelog20201022">
				<b-card-body>
					<div>
						<b-badge variant="warning">T-14 미호</b-badge>의 3번째 패시브 <b-badge variant="info">전위 추가 지원</b-badge>의 정보가
						추가되었습니다.
					</div>
					<div><b-badge variant="warning">장비 분해 효율 연구실</b-badge> 설비의 효과가 표시되지 않던 문제를 수정했습니다.</div>
					<div>
						모든 설비 정보를 갱신했습니다.<br />
						각 설비 정보는 페이지 로드 시간을 개선하기 위해 개별 페이지로 변경되었습니다.<br />
						<b-badge variant="info">편성 제한</b-badge>의 전투원을 눌러 해당 전투원의 정보 페이지로 이동할 수 있습니다.
					</div>
					<div>
						<b-badge variant="warning">전투원 정보</b-badge>및 <b-badge variant="warning">장비 정보</b-badge>의
						<b-badge variant="info">획득처</b-badge>는 접고 펼 수 있게 변경되었습니다.<br />
						기본은 접힌 상태입니다.
					</div>
					<div><b-badge variant="warning">장비 정보</b-badge>의 장비 팝업에 장비의 설명이 추가되었습니다.</div>
					<div>
						<b-badge variant="warning">철혈의 레오나</b-badge>의 1번 패시브 <b-badge variant="info">공격 지휘</b-badge> 및
						<b-badge variant="info">방어 지휘</b-badge>의 설명이 수정되었습니다.<br />
						이제 <b-badge variant="warning">전투 관측 프레임</b-badge> 장착 시의 추가 수치를 표시합니다.
					</div>
					<div>
						<b-badge variant="warning">대 기동 전투 시스템 베타</b-badge>, <b-badge variant="warning">대 경장 전투 시스템 베타</b-badge>,
						<b-badge variant="warning">대 중장 전투 시스템 베타</b-badge> 장비의 효과가 변경되었습니다.
					</div>
					<div><b-badge variant="warning">Changelog</b-badge>의 양이 많아져 월별로 분리했습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201019>2020-10-19</b-card-header>
			<b-collapse id="changelog20201019">
				<b-card-body>
					<div>
						모든 장비 정보를 인게임 데이터 기준으로 갱신했습니다.
						<br />
						인게임에 <b-badge variant="black">미구현</b-badge>된 장비들도 확인할 수 있습니다.
						<br />
						해당 장비가 제공하는 버프와 버프의 지속 라운드/횟수, 발동 조건, 아이콘 등 많은 정보가 추가적으로 제공됩니다.
						<br />
						장비 정보의 장비 효과 필터는 현재 변경된 장비에 맞춰 재작업중에 있습니다.
						<br />
						장비 정보창의 효과 목록이 선택한 등급과 무관하게 표시되는 문제를 수정했습니다.
					</div>
					<div>
						경험치 계산기의 장비 보너스가 일시적으로 이용할 수 없게 됩니다.<br />
						위의 장비 데이터 개편으로 인해 재작업중에 있습니다.
					</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201013>2020-10-13</b-card-header>
			<b-collapse id="changelog20201013">
				<b-card-body>
					<div>전투원 정보의 <b-badge variant="info">출격 소모 자원</b-badge>이 잘못 표기되던 문제를 수정했습니다.</div>
					<div>세계 정보에 <b-badge variant="info">흐린 기억 속의 나라</b-badge>가 표시되지 않던 문제를 수정했습니다.</div>
					<div>BGM 메뉴에 추가된 BGM이 추가되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201012>2020-10-12</b-card-header>
			<b-collapse id="changelog20201012">
				<b-card-body>
					<div>
						신규 전투원 <b-badge variant="warning">EB-48G 흐레스벨그</b-badge>, <b-badge variant="warning">AL 레이스</b-badge>의
						스테이터스, 스킬을 포함한 모든 정보가 추가되었습니다.
					</div>
					<div>
						신규 장비 <b-badge variant="warning">개량형 고속 학습 시스템</b-badge>,
						<b-badge variant="warning">연산 강화 회로 베타</b-badge>, <b-badge variant="warning">내 충격 회로 베타</b-badge>가
						추가되었습니다.
						<br />
						또, 미실장 장비인 <b-badge variant="warning">반응 강화 회로 베타</b-badge> 및 각종 베타 장비들의
						<rarity-badge rarity="B">B</rarity-badge>, <rarity-badge rarity="A">A</rarity-badge>,
						<rarity-badge rarity="S">S</rarity-badge> 등급 정보도 추가되었습니다.
						<br />
						다음 업데이트에는 <b-badge variant="warning">대 경장 전투 시스템</b-badge>,
						<b-badge variant="warning">대 기동 전투 시스템</b-badge>, <b-badge variant="warning">대 중장 전투 시스템</b-badge>의 베타 장비
						정보가 추가될 예정입니다.
					</div>
					<div>
						<b-badge variant="warning">바닐라 A1</b-badge>의 <b-badge variant="info">바닐라의 휴일</b-badge>스킨의 중파 일러스트가
						추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">아우로라</b-badge>의 <b-badge variant="info">당신만의 바텐더</b-badge>스킨 정보가 추가되었습니다.
					</div>
					<div>
						<b-badge variant="warning">쿠노이치 제로</b-badge>의 <b-badge variant="info">흐트러진 꽃</b-badge>스킨 정보가 추가되었습니다.
					</div>
					<div><b-badge variant="info">흐린 기억 속의 나라</b-badge>이벤트 드랍처 정보가 추가되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201011>2020-10-11</b-card-header>
			<b-collapse id="changelog20201011">
				<b-card-body>
					<div>
						<b-badge variant="warning">모든 전투원</b-badge>의 <b-badge variant="danger">1레벨 스테이터스 정보</b-badge>가
						입력되었습니다.<br />
						<b-badge variant="warning">모든 전투원</b-badge>의 <b-badge variant="danger">100레벨 스테이터스 정보</b-badge>가
						입력되었습니다.<br />
						<b-badge variant="warning">모든 전투원</b-badge>의 <b-badge variant="danger">승급 후 스테이터스 정보</b-badge>가
						입력되었습니다.<br />
						<b-badge variant="warning">모든 전투원</b-badge>의 <b-badge variant="danger">기본/승급 후 출격 소모 자원 정보</b-badge>가
						입력되었습니다.
					</div>
					<div>
						<b-badge variant="warning">메인스토리</b-badge>의 모든 이야기가 추가되었습니다.<br />
						모든 이야기를 확인하지 못해 일부 이미지가 표시되지 않을 수도 있습니다.<br />
						일부 효과가 입력되지 않았거나 코드명으로 표시될 수도 있습니다.
					</div>
					<div><b-badge variant="warning">발렌타인데이</b-badge>BGM이 추가되었습니다.</div>
				</b-card-body>
			</b-collapse>
		</b-card>
		<b-card class="mt-2" no-body>
			<b-card-header v-b-toggle.changelog20201005>2020-10-05</b-card-header>
			<b-collapse id="changelog20201005">
				<b-card-body>
					<div><b-badge variant="exchange">20년 10월 교환소</b-badge> 정보가 추가되었습니다.</div>
					<div>
						<b-badge variant="warning">X-05 에밀리</b-badge>및 <b-badge variant="warning">오드리 드림위버</b-badge>의 서약 대사 여부가
						갱신되었습니다.
					</div>
					<div>
						<b-badge variant="warning">T-10 님프</b-badge>의 <b-badge variant="info">호수의 요정</b-badge>스킨의
						<b-badge variant="danger">로비 애니메이션</b-badge> 정보 및 가격 정보가 갱신되었습니다.
					</div>
					<div>
						<b-badge variant="warning">AG-1 네레이드</b-badge>의 2번째 액티브 <b-badge variant="info">무차별 난사</b-badge>의 정보가
						수정되었습니다. (보호 무시 추가)
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
export default class Changelog_202010 extends Vue { }
</script>
