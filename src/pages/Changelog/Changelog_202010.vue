<template>
	<div>
		<changelog-item title="Build r20201031" date="2020-10-31">
			<template #bugfix>
				<li>
					<b-badge variant="warning">블랙 리리스</b-badge>의 3번째 패시브 스킬 <b-badge variant="info">스토킹</b-badge>의 수치가 잘못
					입력되어있던 점을 수정했습니다.
				</li>
				<li>
					<b-badge variant="warning">다크엘븐 포레스트레인져</b-badge>의 2번째 패시브 스킬 <b-badge variant="info">숲의 도움</b-badge>의
					누락된 수치를 수정했습니다.
				</li>
				<li>
					<b-badge variant="warning">P/A-00 그리폰</b-badge>의 2번째 패시브 스킬 <b-badge variant="info">연계 폭격</b-badge>의 지원 대상에
					<b-badge variant="warning">무적의 용</b-badge>이 누락된 점을 수정했습니다.
				</li>
				<li>일부 전투원의 전투원 정보 페이지가 표시되지 않던 문제를 수정했습니다.</li>
				<li>일부 전투원의 스테이터스 편집 페이지에서 장비 장착이 불가능하던 문제를 수정했습니다.</li>
				<li>일부 전투원의 대사 파일이 업로드되지 않은 문제를 수정했습니다.</li>
				<li>일부 전투원의 서약 대사가 없어도 서약 대사가 표시되는 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li>신규 전투원 <b-badge variant="warning">포이</b-badge>의 정보가 추가되었습니다.</li>
				<li>신규 전투원 <b-badge variant="warning">자비로운 리앤</b-badge>의 정보가 추가되었습니다.</li>
				<li>
					<b-badge variant="warning">세계 정보</b-badge>에 모든 이벤트 정보가 추가되었습니다.<br />
					<b-badge variant="info">할로윈 파크 패닉</b-badge>의 경우 지역 연결이 다른 이벤트와 다르게 구성되어있어 지역 연결 선이
					비정상적으로 보이고 있습니다.<br />
					이 부분은 이후에 수정하도록 하겠습니다.
				</li>
				<li><b-badge variant="warning">세계 정보</b-badge>의 드랍 정보에 참치와 자원, 소모품 정보를 추가했습니다.</li>
				<li>
					모든 전투원 및 <b-badge variant="warning">모든 장비</b-badge>의 제조 시간 표시가 추가되었습니다.<br />
					해당 표시는 획득처의
					<b-badge variant="dark">
						<b-icon-hammer class="me-1" />
						제조 가능
					</b-badge>
					을 대체합니다.
				</li>
				<li><b-badge variant="warning">장비 정보</b-badge> 페이지의 <b-badge variant="info">장비 효과 필터</b-badge>를 다시 추가했습니다.</li>
			</template>
			<template #update>
				<li>
					<b-badge variant="warning">캐럴라이나</b-badge>의 1번째 액티브 스킬 <b-badge variant="info">브레스트 버스터</b-badge>의 설명을
					일부 수정했습니다.
				</li>
				<li>
					<b-badge variant="warning">징벌의 사디어스</b-badge>의 3번째 패시브 스킬 <b-badge variant="info">가드 오브 시티즌</b-badge> 스킬명
					수정을 반영했습니다.
				</li>
				<li>
					<b-badge variant="warning">마법소녀 매지컬 모모</b-badge>의 2번째 액티브 스킬 <b-badge variant="info">모모찬바라</b-badge>의 급소
					찌르기 확률과 피해량을 추가/수정했습니다.
				</li>
				<li><b-badge variant="warning">T-14 미호</b-badge>의 능력치 변동을 반영했습니다.</li>
				<li>
					<b-badge variant="warning">장비 정보</b-badge> 페이지의 <b-badge variant="info">장비 획득처 필터</b-badge>를 접을 수 있도록
					수정했습니다.
				</li>
			</template>
			<template #skin>
				<li>
					<b-badge variant="warning">GS-130 피닉스</b-badge>의 <b-badge variant="info">하계 전투복 피닉스</b-badge>스킨의 가격 인상을
					반영했습니다.
				</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201023" date="2020-10-23">
			<template #bugfix>
				<li>전투원의 스킬 설명에서 참조되는 전투원이 잘못 표시되던 문제가 수정되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201022" date="2020-10-22">
			<template #site>
				<li><b-badge variant="warning">Changelog</b-badge>의 양이 많아져 월별로 분리했습니다.</li>
			</template>
			<template #bugfix>
				<li><b-badge variant="warning">장비 분해 효율 연구실</b-badge> 설비의 효과가 표시되지 않던 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li><b-badge variant="warning">장비 정보</b-badge>의 장비 팝업에 장비의 설명이 추가되었습니다.</li>
			</template>
			<template #update>
				<li>
					<b-badge variant="warning">T-14 미호</b-badge>의 3번째 패시브 스킬 <b-badge variant="info">전위 추가 지원</b-badge>의 정보가
					추가되었습니다.
				</li>
				<li><b-badge variant="warning">설비 정보</b-badge>의 모든 설비 정보를 갱신했습니다.</li>
				<li><b-badge variant="warning">설비 정보</b-badge>의 각 설비 정보를 페이지 로드 시간을 개선하기 위해 개별 페이지로 변경했습니다.</li>
				<li>
					<b-badge variant="warning">설비 정보</b-badge>의 설비 정보에서 <b-badge variant="info">편성 제한</b-badge>의 전투원을 눌러 해당
					전투원의 정보 페이지로 이동할 수 있습니다.
				</li>
				<li>
					<b-badge variant="warning">전투원 정보</b-badge>및 <b-badge variant="warning">장비 정보</b-badge>의
					<b-badge variant="info">획득처</b-badge>는 접고 펼 수 있게 변경되었습니다.<br />
					기본은 접힌 상태입니다.
				</li>
				<li>
					<b-badge variant="warning">철혈의 레오나</b-badge>의 1번 패시브 스킬 <b-badge variant="info">공격 지휘</b-badge> /
					<b-badge variant="info">방어 지휘</b-badge>의 설명이 수정되었습니다.<br />
					이제 <b-badge variant="warning">전투 관측 프레임</b-badge> 장착 시의 추가 수치를 표시합니다.
				</li>
				<li><b-badge variant="warning">대 기동 전투 시스템 베타</b-badge> 장비의 효과가 변경되었습니다.</li>
				<li><b-badge variant="warning">대 경장 전투 시스템 베타</b-badge> 장비의 효과가 변경되었습니다.</li>
				<li><b-badge variant="warning">대 중장 전투 시스템 베타</b-badge> 장비의 효과가 변경되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201019" date="2020-10-19">
			<template #site>
				<li><b-badge variant="warning">Changelog</b-badge>의 양이 많아져 월별로 분리했습니다.</li>
			</template>
			<template #bugfix>
				<li><b-badge variant="warning">장비 분해 효율 연구실</b-badge> 설비의 효과가 표시되지 않던 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li><b-badge variant="warning">장비 정보</b-badge>의 장비 팝업에 장비의 설명이 추가되었습니다.</li>
			</template>
			<template #update>
				<li>
					<b-badge variant="warning">T-14 미호</b-badge>의 3번째 패시브 스킬 <b-badge variant="info">전위 추가 지원</b-badge>의 정보가
					추가되었습니다.
				</li>
				<li><b-badge variant="warning">설비 정보</b-badge>의 모든 설비 정보를 갱신했습니다.</li>
				<li><b-badge variant="warning">설비 정보</b-badge>의 각 설비 정보를 페이지 로드 시간을 개선하기 위해 개별 페이지로 변경했습니다.</li>
				<li>
					<b-badge variant="warning">설비 정보</b-badge>의 설비 정보에서 <b-badge variant="info">편성 제한</b-badge>의 전투원을 눌러 해당
					전투원의 정보 페이지로 이동할 수 있습니다.
				</li>
				<li>
					<b-badge variant="warning">전투원 정보</b-badge>및 <b-badge variant="warning">장비 정보</b-badge>의
					<b-badge variant="info">획득처</b-badge>는 접고 펼 수 있게 변경되었습니다.<br />
					기본은 접힌 상태입니다.
				</li>
				<li>
					<b-badge variant="warning">철혈의 레오나</b-badge>의 1번 패시브 스킬 <b-badge variant="info">공격 지휘</b-badge> /
					<b-badge variant="info">방어 지휘</b-badge>의 설명이 수정되었습니다.<br />
					이제 <b-badge variant="warning">전투 관측 프레임</b-badge> 장착 시의 추가 수치를 표시합니다.
				</li>
				<li><b-badge variant="warning">대 기동 전투 시스템 베타</b-badge> 장비의 효과가 변경되었습니다.</li>
				<li><b-badge variant="warning">대 경장 전투 시스템 베타</b-badge> 장비의 효과가 변경되었습니다.</li>
				<li><b-badge variant="warning">대 중장 전투 시스템 베타</b-badge> 장비의 효과가 변경되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201013" date="2020-10-13">
			<template #bugfix>
				<li>전투원 정보의 <b-badge variant="info">출격 소모 자원</b-badge>이 잘못 표기되던 문제를 수정했습니다.</li>
				<li>세계 정보에 <b-badge variant="info">흐린 기억 속의 나라</b-badge>가 표시되지 않던 문제를 수정했습니다.</li>
			</template>
			<template #new>
				<li>BGM 메뉴에 추가된 BGM이 추가되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201012" date="2020-10-12">
			<template #new>
				<li>신규 전투원 <b-badge variant="warning">EB-48G 흐레스벨그</b-badge>의 정보가 추가되었습니다.</li>
				<li>신규 전투원 <b-badge variant="warning">AL 레이스</b-badge>의 정보가 추가되었습니다.</li>
				<li>신규 장비 <b-badge variant="warning">개량형 고속 학습 시스템</b-badge>의 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">연산 강화 회로 베타</b-badge>의 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">내 충격 회로 베타</b-badge>의 정보가 추가되었습니다.</li>
				<li>
					미실장 장비인 <b-badge variant="warning">반응 강화 회로 베타</b-badge> 및 각종 베타 장비들의
					<rarity-badge rarity="B" border>B</rarity-badge>, <rarity-badge rarity="A" border>A</rarity-badge>,
					<rarity-badge rarity="S" border>S</rarity-badge> 등급 정보가 추가되었습니다.<br />
					다음 업데이트에는 <b-badge variant="warning">대 경장 전투 시스템</b-badge>,
					<b-badge variant="warning">대 기동 전투 시스템</b-badge>, <b-badge variant="warning">대 중장 전투 시스템</b-badge>의 베타 장비
					정보가 추가될 예정입니다.
				</li>
				<li><b-badge variant="info">흐린 기억 속의 나라</b-badge>이벤트 드랍처 정보가 추가되었습니다.</li>
			</template>
			<template #skin>
				<li>
					<b-badge variant="warning">바닐라 A1</b-badge>의 <b-badge variant="info">바닐라의 휴일</b-badge>스킨의 중파 일러스트가
					추가되었습니다.
				</li>
				<li><b-badge variant="warning">아우로라</b-badge>의 <b-badge variant="info">당신만의 바텐더</b-badge>스킨 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">쿠노이치 제로</b-badge>의 <b-badge variant="info">흐트러진 꽃</b-badge>스킨 정보가 추가되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201011" date="2020-10-11">
			<template #new>
				<li>모든 전투원의 <b-badge variant="danger">1레벨 스테이터스 정보</b-badge>가 입력되었습니다.</li>
				<li>모든 전투원의 <b-badge variant="danger">100레벨 스테이터스 정보</b-badge>가 입력되었습니다.</li>
				<li>모든 전투원의 <b-badge variant="danger">승급 후 스테이터스 정보</b-badge>가 입력되었습니다.</li>
				<li>모든 전투원의 <b-badge variant="danger">기본/승급 후 출격 소모 자원 정보</b-badge>가 입력되었습니다.</li>
				<li>
					<b-badge variant="warning">메인스토리</b-badge>의 모든 이야기가 추가되었습니다.<br />
					모든 이야기를 확인하지 못해 일부 이미지가 표시되지 않을 수도 있습니다.<br />
					일부 효과가 입력되지 않았거나 코드명으로 표시될 수도 있습니다.
				</li>
				<li><b-badge variant="warning">발렌타인데이</b-badge>BGM이 추가되었습니다.</li>
			</template>
		</changelog-item>

		<changelog-item title="Build r20201005" date="2020-10-05">
			<template #new>
				<li><b-badge variant="exchange">20년 10월 교환소</b-badge> 정보가 추가되었습니다.</li>
				<li><b-badge variant="warning">X-05 에밀리</b-badge>의 서약 대사 여부가 갱신되었습니다.</li>
				<li><b-badge variant="warning">오드리 드림위버</b-badge>의 서약 대사 여부가 갱신되었습니다.</li>
			</template>
			<template #update>
				<li>
					<b-badge variant="warning">AG-1 네레이드</b-badge>의 2번째 액티브 스킬 <b-badge variant="info">무차별 난사</b-badge>의 정보가
					수정되었습니다. (보호 무시 추가)
				</li>
			</template>
			<template #skin>
				<li>
					<b-badge variant="warning">T-10 님프</b-badge>의 <b-badge variant="info">호수의 요정</b-badge>스킨의
					<b-badge variant="danger">로비 애니메이션</b-badge> 정보 및 가격 정보가 갱신되었습니다.
				</li>
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
export default class Changelog_202010 extends Vue { }
</script>
