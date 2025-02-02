import { FunctionalComponent } from "preact";

import RarityBadge from "@/components/rarity-badge";
import ChangelogItem from "../../components/changelog-item";
import Icons from "@/components/bootstrap-icon";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build r20201127" date="2020-11-27"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 목록 보기, 그룹별 보기의 전투원 유형/역할이 잘못 표시되던 문제를 수정했습니다.</li>
			<li><span class="badge bg-substory">D-엔터 빌런즈</span>와 <span class="badge bg-substory">D-엔터테인먼트 II</span>가 바뀌어있던 문제를 수정했습니다.</li>
			<li>8지역 이야기가 정상적으로 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">세계 정보</span>의 <Icons.BugFill class="me-1" />적 정보에 총 경험치, 웨이브 경험치가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">세계 정보</span>에 <Icons.Search class="me-1" />탐사 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>현재 진행중인 이벤트를 <span class="badge bg-warning text-dark">할로윈 파크 패닉</span>으로 변경했습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>소모품 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2020-11-27 01:28:57</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201125" date="2020-11-25"
		bugfix={ <>
			<li>
				<span class="badge bg-warning text-dark">레모네이드 알파</span>의 3번째 패시브 <span class="badge bg-substory">케스토스 히마스: 중장갑 OS</span>의 수치가
				올바르지 않게 표시되던 문제를 수정했습니다.
			</li>
			<li>스킬의 적용 영역이 상하 반전으로 적용되던 문제를 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201124" date="2020-11-24"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">해체자 아자즈</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">레모네이드 알파</span>의 정보가 추가되었습니다.</li>
			<li>
				전투원 정보에 각 상황별 <span class="badge bg-danger">♥ 호감도</span> 증감치가 추가되었습니다.<br />
				선물의 호감도 증가치는 배수로 표시되며, 각 선물의 기본 호감도 증가치에 곱해져서 증가됩니다.<br />
				ex) <span class="badge bg-danger">수제케이크 ♥ 기본 호감도 +5.00</span> x <span class="badge bg-substory">LRL 배수 2.00배</span> =
				<span class="badge bg-success">10.00 증가</span>
			</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>8지역 세계 정보가 추가되었습니다.</li>
			<li>
				소모품 정보 팝업에서 <span class="badge bg-danger">♥ 호감도</span>, <span class="badge bg-danger">♥ 호감도 상한</span>,
				<span class="badge bg-warning text-dark">전투원 경험치</span>, <span class="badge bg-success">스킬 경험치</span> 표시가 추가되었습니다.
			</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">엘븐 포레스트메이커</span>의 <span class="badge bg-substory">화이트 드레스</span>스킨이 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">다크엘븐 포레스트레인져</span>의 <span class="badge bg-substory">초콜릿 드레스</span>스킨이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">AT72 라인리터</span>의 1번 액티브 <span class="badge bg-substory">기사의 응시</span> 및 2번 액티브
				<span class="badge bg-substory">용기병의 화창</span>의 공격력 계수가 수정되었습니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build r20201121" date="2020-11-21"
		new={ <>
			<li><span class="badge bg-warning text-dark">불굴의 마리</span>의 서약 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">A-87 밴시</span>의 서약 보이스가 추가되었습니다.</li>
			<li>전투원 스킬 효과 필터가 추가되었습니다.</li>
			<li>
				전투원 스킬 정보에 <span class="badge bg-substory">버프 보기</span> 옵션이 추가되었습니다.<br />
				해당 옵션을 사용하면 인게임에서 사용되는 버프의 정보를 확인할 수 있습니다.<br />
				효과의 조건 등이 올바르지 않게 표시되는 경우, 개발자 이메일로 알려주시기 바랍니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">LRL</span>의 <span class="badge bg-substory">교대 복귀자 보급품 1호</span>스킨 정보가 추가되었습니다.<br />
				로비 애니메이션이 포함된 스킨이라 일러스트는 준비하지 못했습니다.
			</li>
			<li><span class="badge bg-warning text-dark">A-87 밴시</span>의 <span class="badge bg-substory">한여름의 냥냥어택</span>스킨의 가격 정보를 갱신했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2020-11-21 03:40:00</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201115" date="2020-11-15"
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2020-11-15 03:00:00</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201111" date="2020-11-11"
		site={ <>
			<li>사이트에 SEO 정보를 추가했습니다.</li>
		</> }
		bugfix={ <>
			<li>장비의 강화 비용이 올바르지 않은 값으로 표시되던 문제가 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2020-11-11 00:20:00</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201110" date="2020-11-10"
		bugfix={ <>
			<li>일부 전투원의 페이지가 열리지 않는 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">골타리온 XIII세</span>의 링크 보너스 정보가 잘못 표시되던 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">골타리온 XIII세</span>의 일러스트레이터 정보가 잘못 기입되어있던 점을 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원 스테이터스</span>의 수치가 비정상적으로 표시되던 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원 스테이터스</span>에서 장비를 해제하면 장비 유형이 칩으로 변경되던 문제를 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201109" date="2020-11-09"
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">적 정보</span>에서 적의 HP 스테이터스가 올바른 수치로 표시되지 않던 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">적 정보</span>에서 적의 HP, 공격력, 방어력에 소숫점 아래 수치가 표시되던 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">적 정보</span>에서 적 스킬에 소숫점 아래 수치가 표시되던 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">세계 정보</span>의 적 정보가 정상적으로 표시되지 않던 문제가 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">세계 정보</span>의 일부 적이 표시되지 않던 문제가 수정되었습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">이터니티</span>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">골타리온 XIII세</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">적 정보</span>에 이름으로 검색하는 기능이 추가되었습니다.</li>
		</> }
		skin={ <>
			<li><span class="badge bg-warning text-dark">C-33 안드바리</span>의 <span class="badge bg-substory">사탕 강탈자</span>스킨 정보가 추가되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">보속의 마리아</span>의 <span class="badge bg-substory">속박의 마리아</span>스킨 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2020-11-09</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201108" date="2020-11-08"
		new={ <>
			<li>
				<span class="badge bg-warning text-dark">적 정보</span>가 추가되었습니다.<br />
				적의 스킬과 설명, 스테이터스, 등장 스테이지를 확인할 수 있습니다.<br />
				적 스킬의 버프 목록은 아직 준비중입니다.
			</li>
			<li><span class="badge bg-warning text-dark">세계 정보</span>에 적 정보가 추가되었습니다. 적을 클릭하면 해당 적 정보 팝업이 바로 표시됩니다.</li>
			<li>
				현재 대사 텍스트가 입력되지 않은 전투원이 매우 많습니다.<br />
				입력해야하는 대사 분량이 너무 많아 개발자 혼자 작업할 수가 없어 발생한 문제로, 이 문제를 해결하고자 현재
				<a href="https://docs.google.com/spreadsheets/d/1TrLn5czFe2Ww1xg4HiFsDzZDcnphxV3AqP_DgNqaU00" target="_blank" rel="noreferrer">
					전투원 대사 DB
				</a>의 기여를 받고 있습니다.<br />
				많은 참여 부탁드립니다.
			</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">세계 정보</span>의 <span class="badge bg-substory">클리어 보상</span>과
				<span class="badge bg-substory">드랍 정보</span>가 별도의 탭으로 분리되었습니다.<br />
				<span class="badge bg-substory">클리어 보상</span>과 <span class="badge bg-substory">드랍 정보</span>의 소모품을 클릭하면 해당 소모품의 설명을 확인할 수 있습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2020-11-08</span>까지의 사용자 참여로 추가된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build r20201102" date="2020-11-02"
		bugfix={ <><li>일부 전투원의 스킨 정보가 잘못 기입되어있던 문제를 수정했습니다.</li></> }
		new={ <>
			<li><span class="badge bg-warning text-dark">스파르탄 캡틴</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">스파르탄 어썰트</span>의 승급 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">스파르탄 부머</span>의 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li><span class="badge bg-warning text-dark">스파르탄 캡틴</span>의 1번째 액티브 스킬 <span class="badge bg-substory">어썰트 라이플</span>의 설명이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">스파르탄 어썰트</span>의 1번째 액티브 스킬 <span class="badge bg-substory">어썰트 라이플</span>의 설명이 수정되었습니다.</li>
			<li><span class="badge bg-warning text-dark">스파르탄 부머</span>의 1번째 액티브 스킬 <span class="badge bg-substory">어썰트 라이플</span>의 설명이 수정되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">징벌의 사디어스</span>의 1번째 패시브 스킬 <span class="badge bg-substory">출동 지원</span>의 적용 대상에
				<span class="badge bg-warning text-dark">자비로운 리앤</span>이 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">징벌의 사디어스</span>의 3번째 패시브 스킬 <span class="badge bg-substory">가드 오브 시티즌</span>의 적용 대상에
				<span class="badge bg-warning text-dark">자비로운 리앤</span>이 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">AT72 라인리터</span>의 2번째 패시브 스킬 <span class="badge bg-substory">기병 참전</span>의 설명이 수정되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">P-49 슬레이프니르</span>의 2번째 액티브 스킬
				<span class="badge bg-substory">한계돌파</span>에 반격 효과 해제 설명을 추가했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
