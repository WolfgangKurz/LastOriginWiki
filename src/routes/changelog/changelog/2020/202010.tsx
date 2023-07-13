import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../../components/changelog-item";
import IconHammer from "@/components/bootstrap-icon/icons/Hammer";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build r20201031" date="2020-10-31"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">블랙 리리스</span>의 3번째 패시브 스킬
				<span class="badge bg-substory">스토킹</span>의 수치가 잘못 입력되어있던 점을 수정했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">다크엘븐 포레스트레인져</span>의 2번째 패시브 스킬
				<span class="badge bg-substory">숲의 도움</span>의 누락된 수치를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">P/A-00 그리폰</span>의 2번째 패시브 스킬 <span class="badge bg-substory">연계 폭격</span>의 지원 대상에
				<span class="badge bg-warning text-dark">무적의 용</span>이 누락된 점을 수정했습니다.
			</li>
			<li>일부 전투원의 전투원 정보 페이지가 표시되지 않던 문제를 수정했습니다.</li>
			<li>일부 전투원의 스테이터스 편집 페이지에서 장비 장착이 불가능하던 문제를 수정했습니다.</li>
			<li>일부 전투원의 대사 파일이 업로드되지 않은 문제를 수정했습니다.</li>
			<li>일부 전투원의 서약 대사가 없어도 서약 대사가 표시되는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">포이</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">자비로운 리앤</span>의 정보가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">세계 정보</span>에 모든 이벤트 정보가 추가되었습니다.<br />
				<span class="badge bg-substory">할로윈 파크 패닉</span>의 경우 지역 연결이 다른 이벤트와 다르게 구성되어있어 지역 연결 선이 비정상적으로 보이고 있습니다.<br />
				이 부분은 이후에 수정하도록 하겠습니다.
			</li>
			<li><span class="badge bg-warning text-dark">세계 정보</span>의 드랍 정보에 참치와 자원, 소모품 정보를 추가했습니다.</li>
			<li>
				모든 전투원 및 <span class="badge bg-warning text-dark">모든 장비</span>의 제조 시간 표시가 추가되었습니다.<br />
				해당 표시는 획득처의<span class="badge bg-dark"><IconHammer class="me-1" />제조 가능</span>을 대체합니다.
			</li>
			<li><span class="badge bg-warning text-dark">장비 정보</span> 페이지의 <span class="badge bg-substory">장비 효과 필터</span>를 다시 추가했습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">캐럴라이나</span>의 1번째 액티브 스킬 <span class="badge bg-substory">브레스트 버스터</span>의 설명을 일부 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">징벌의 사디어스</span>의 3번째 패시브 스킬
				<span class="badge bg-substory">가드 오브 시티즌</span> 스킬명 수정을 반영했습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">마법소녀 매지컬 모모</span>의 2번째 액티브 스킬
				<span class="badge bg-substory">모모찬바라</span>의 급소 찌르기 확률과 피해량을 추가/수정했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">T-14 미호</span>의 능력치 변동을 반영했습니다.</li>
			<li><span class="badge bg-warning text-dark">장비 정보</span> 페이지의 <span class="badge bg-substory">장비 획득처 필터</span>를 접을 수 있도록 수정했습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">GS-130 피닉스</span>의 <span class="badge bg-substory">하계 전투복 피닉스</span>스킨의 가격 인상을 반영했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201023" date="2020-10-23"
		bugfix={ <>
			<li>전투원의 스킬 설명에서 참조되는 전투원이 잘못 표시되던 문제가 수정되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201022" date="2020-10-22"
		site={ <>
			<li><span class="badge bg-warning text-dark">Changelog</span>의 양이 많아져 월별로 분리했습니다.</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">장비 분해 효율 연구실</span> 설비의 효과가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">장비 정보</span>의 장비 팝업에 장비의 설명이 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">T-14 미호</span>의 3번째 패시브 스킬 <span class="badge bg-substory">전위 추가 지원</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">설비 정보</span>의 모든 설비 정보를 갱신했습니다.</li>
			<li><span class="badge bg-warning text-dark">설비 정보</span>의 각 설비 정보를 페이지 로드 시간을 개선하기 위해 개별 페이지로 변경했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">설비 정보</span>의 설비 정보에서 <span class="badge bg-substory">편성 제한</span>의 전투원을 눌러
				해당 전투원의 정보 페이지로 이동할 수 있습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">전투원 정보</span>및 <span class="badge bg-warning text-dark">장비 정보</span>의
				<span class="badge bg-substory">획득처</span>는 접고 펼 수 있게 변경되었습니다.<br />
				기본은 접힌 상태입니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">철혈의 레오나</span>의 1번 패시브 스킬
				<span class="badge bg-substory">공격 지휘</span> / <span class="badge bg-substory">방어 지휘</span>의 설명이 수정되었습니다.<br />
				이제 <span class="badge bg-warning text-dark">전투 관측 프레임</span> 장착 시의 추가 수치를 표시합니다.
			</li>
			<li><span class="badge bg-warning text-dark">대 기동 전투 시스템 베타</span> 장비의 효과가 변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">대 경장 전투 시스템 베타</span> 장비의 효과가 변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">대 중장 전투 시스템 베타</span> 장비의 효과가 변경되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201019" date="2020-10-19"
		site={ <>
			<li><span class="badge bg-warning text-dark">Changelog</span>의 양이 많아져 월별로 분리했습니다.</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">장비 분해 효율 연구실</span> 설비의 효과가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">장비 정보</span>의 장비 팝업에 장비의 설명이 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">T-14 미호</span>의 3번째 패시브 스킬 <span class="badge bg-substory">전위 추가 지원</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">설비 정보</span>의 모든 설비 정보를 갱신했습니다.</li>
			<li><span class="badge bg-warning text-dark">설비 정보</span>의 각 설비 정보를 페이지 로드 시간을 개선하기 위해 개별 페이지로 변경했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">설비 정보</span>의 설비 정보에서
				<span class="badge bg-substory">편성 제한</span>의 전투원을 눌러 해당 전투원의 정보 페이지로 이동할 수 있습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">전투원 정보</span>및 <span class="badge bg-warning text-dark">장비 정보</span>의
				<span class="badge bg-substory">획득처</span>는 접고 펼 수 있게 변경되었습니다.<br />
				기본은 접힌 상태입니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">철혈의 레오나</span>의 1번 패시브 스킬
				<span class="badge bg-substory">공격 지휘</span> / <span class="badge bg-substory">방어 지휘</span>의 설명이 수정되었습니다.<br />
				이제 <span class="badge bg-warning text-dark">전투 관측 프레임</span> 장착 시의 추가 수치를 표시합니다.
			</li>
			<li><span class="badge bg-warning text-dark">대 기동 전투 시스템 베타</span> 장비의 효과가 변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">대 경장 전투 시스템 베타</span> 장비의 효과가 변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">대 중장 전투 시스템 베타</span> 장비의 효과가 변경되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201013" date="2020-10-13"
		bugfix={ <>
			<li>전투원 정보의 <span class="badge bg-substory">출격 소모 자원</span>이 잘못 표기되던 문제를 수정했습니다.</li>
			<li>세계 정보에 <span class="badge bg-substory">흐린 기억 속의 나라</span>가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>BGM 메뉴에 추가된 BGM이 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201012" date="2020-10-12"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">EB-48G 흐레스벨그</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">AL 레이스</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">개량형 고속 학습 시스템</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">연산 강화 회로 베타</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">내 충격 회로 베타</span>의 정보가 추가되었습니다.</li>
			<li>
				미실장 장비인 <span class="badge bg-warning text-dark">반응 강화 회로 베타</span> 및 각종 베타 장비들의
				<RarityBadge rarity="B" border>B</RarityBadge>, <RarityBadge rarity="A" border>A</RarityBadge>,
				<RarityBadge rarity="S" border>S</RarityBadge> 등급 정보가 추가되었습니다.<br />
				다음 업데이트에는 <span class="badge bg-warning text-dark">대 경장 전투 시스템</span>, <span class="badge bg-warning text-dark">대 기동 전투 시스템</span>,
				<span class="badge bg-warning text-dark">대 중장 전투 시스템</span>의 베타 장비 정보가 추가될 예정입니다.
			</li>
			<li><span class="badge bg-substory">흐린 기억 속의 나라</span>이벤트 드랍처 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">바닐라 A1</span>의 <span class="badge bg-substory">바닐라의 휴일</span>스킨의 중파 일러스트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">아우로라</span>의 <span class="badge bg-substory">당신만의 바텐더</span>스킨 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">쿠노이치 제로</span>의 <span class="badge bg-substory">흐트러진 꽃</span>스킨 정보가 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201011" date="2020-10-11"
		new={ <>
			<li>모든 전투원의 <span class="badge bg-danger">1레벨 스테이터스 정보</span>가 입력되었습니다.</li>
			<li>모든 전투원의 <span class="badge bg-danger">100레벨 스테이터스 정보</span>가 입력되었습니다.</li>
			<li>모든 전투원의 <span class="badge bg-danger">승급 후 스테이터스 정보</span>가 입력되었습니다.</li>
			<li>모든 전투원의 <span class="badge bg-danger">기본/승급 후 출격 소모 자원 정보</span>가 입력되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">메인스토리</span>의 모든 이야기가 추가되었습니다.<br />
				모든 이야기를 확인하지 못해 일부 이미지가 표시되지 않을 수도 있습니다.<br />
				일부 효과가 입력되지 않았거나 코드명으로 표시될 수도 있습니다.
			</li>
			<li><span class="badge bg-warning text-dark">발렌타인데이</span>BGM이 추가되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201005" date="2020-10-05"
		new={ <>
			<li><span class="badge bg-exchange">20년 10월 교환소</span> 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">X-05 에밀리</span>의 서약 대사 여부가 갱신되었습니다.</li>
			<li><span class="badge bg-warning text-dark">오드리 드림위버</span>의 서약 대사 여부가 갱신되었습니다.</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">AG-1 네레이드</span>의 2번째 액티브 스킬
				<span class="badge bg-substory">무차별 난사</span>의 정보가 수정되었습니다. (보호 무시 추가)
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">T-10 님프</span>의 <span class="badge bg-substory">호수의 요정</span>스킨의
				<span class="badge bg-danger">로비 애니메이션</span> 정보 및 가격 정보가 갱신되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
