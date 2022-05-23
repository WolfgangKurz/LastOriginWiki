import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11745" date="2022-05-23"
		update={ <>
			<li>세계정보의 구역 목록의 레이아웃이 변경되었습니다.</li>
			<li>메인스토리 구역 목록의 디자인이 변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">이상한 나라의 초코 여왕</span> 이벤트가 상시 이벤트로 전환되었습니다.</li>
			<li>이벤트 세계 표시 화면에 이벤트 배너 이미지가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11739" date="2022-05-23"
		new={ <>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 스킬 탭의 "호감도 200", "버프 보기", "더미 보기", "플레이버 텍스트" 사용자 설정이 저장되도록 개선했습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">익스프레스 76</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">티에치엔</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-05-23 12:56:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11737" date="2022-05-18"
		new={ <>
			<li>스킬 버프 목록에 중첩 적용 방식 표기가 추가되었습니다.</li>
			<li>스킬 버프 목록에 <span class="badge bg-dark">중첩 무제한</span> 표기가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스킬 버프 목록의 버프 이름에 수치가 표시되지 않던 점을 수정했습니다.</li>
			<li>모바일 환경에서 전투원 기본 정보 페이지가 스크롤이 넘치던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11728" date="2022-05-17"
		new={ <>
			<li>전투원 정보에 전투원의 스펙 차트가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-17 04:41:17</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11717" date="2022-05-16"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">브륀힐드</span>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 스킨 정보의 배경이 변경되었습니다.</li>
			<li><span class="badge bg-warning text-dark">오르카 데이트 공모전</span> 이벤트가 1주 연장되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">C-79G 하베트롯</span>의 스킨
				<span class="badge bg-danger">하계 전투복 하베트롯</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">프랭스터 머큐리</span>의 스킨
				<span class="badge bg-danger">P-Strikers! 머큐리</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">니바</span>의 스킨
				<span class="badge bg-danger">오르카 바니...? : 진심 모드</span>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-16 13:57:29</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11715" date="2022-05-15"
		new={ <>
			<li>전투원 스킨 정보에 검은색 배경 옵션이 추가되었습니다.</li>
			<li>전투원 스킨 정보에 소속 로고 숨기기 옵션이 추가되었습니다.</li>
		</> }
		site={ <>
			<li>사이트 내 영역 일부에 쓰인 폰트를 변경했습니다.</li>
		</> }
		update={ <>
			<li>적 정보 팝업의 바리에이션 버튼의 텍스트를 <span class="badge bg-danger">#n</span> 형태로 변경했습니다.</li>
			<li>일부 전투원의 스킨이 배경/소품을 가리는 경우 어색한 크기로 표시되던 점을 수정했습니다.</li>
		</> }
		bugfix={ <>
			<li>모바일 환경에서 스킨이 올바르지 않은 크기로 표시되던 문제를 수정했습니다.</li>
			<li>적 그룹 목록의 이벤트 목록이 갱신되지 않은 점을 수정했습니다.</li>
			<li>그 외 일부 UI 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11707" date="2022-05-13"
		new={ <>
			<li>전투원 스킬 정보에 플레이버 텍스트 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 언어에서 전투원의 기업/제조사 명칭이 오기되어있던 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-13 04:27:13</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11705" date="2022-05-11"
		new={ <>
			<li>기타 메뉴의 하위에 <span class="badge bg-warning text-dark">장식품</span> 메뉴가 추가되었습니다.</li>
			<li>
				전투원 정보에
				<span class="badge bg-warning text-dark">기업</span>,
				<span class="badge bg-warning text-dark">제조사</span>,
				<span class="badge bg-warning text-dark">최초 제조지</span>,
				<span class="badge bg-warning text-dark">신체 연령</span>
				정보가 추가되었습니다.
			</li>
		</> }
		bugfix={ <>
			<li>전투원 정보에서 무기 정보가 너무 길 경우 UI가 변형되는 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-11 03:43:24</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11703" date="2022-05-09"
		new={ <>
			<li>전투원 <span class="badge bg-warning text-dark">스파토이아</span>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">A-87 밴시</span>의 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 <span class="badge bg-warning text-dark">스파토이아</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">장화</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">아이아스</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">장화</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon...? : 설레는 break time</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">P-24 핀토</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">프로스트 서펀트</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-05-09 13:06:26</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11701" date="2022-05-06"
		bugfix={ <>
			<li>세계 정보의 지도가 표시되지 않던 문제를 수정했습니다.</li>
			<li>세계 정보의 지역 선택 색상이 잘못 표시되던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>세계 정보의 지역 정보에 개방 조건이 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11696" date="2022-05-04"
		bugfix={ <>
			<li>세계 정보의 이벤트 지도가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-04 04:42:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11695" date="2022-05-02"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">에라토</span>가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <span class="badge bg-warning text-dark">오르카 데이트 공모전</span>의 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 수정되었습니다.</li>
			<li>가챠 시뮬레이터의 정보가 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">프리가</span>의 스킨
				<span class="badge bg-danger">프리가 엘븐 밀크 파견 근무</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">타이런트</span>의 스킨
				<span class="badge bg-danger">귀염살벌한 소녀폭군</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">P-3M 운디네</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon : 천재 파티시에</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-02 12:59:57</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
