import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12173" date="2023-06-28"
		bugfix={ <>
			<li>전투원 뱃지에서 전투원 카드가 표시될 때 정렬이 잘못된 문제를 수정했습니다.</li>
			<li>세계정보의 메인스토리의 레이아웃 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 지역 <BY>11지역</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>나스호른</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>와전류 제어장치</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>사냥꾼 사냥 보조 OS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>오지 개척 보조 회로</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>'Heartless Heart' 우회 회로</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>전투원 정보에 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>진행중인 이벤트가 종료됩니다.</li>
			<li>일부 전투원의 스킬 정보가 추가되었습니다.</li>
			<li>일부 스테이지의 클리어 조건의 영문 번역이 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>데카르트 보이저 삿갓</BY>의 기본 스킨의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-28 01:40:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12169" date="2023-06-21"
		bugfix={ <>
			<li><BY>장비정보</BY>에서 전용장비가 항상 표시되는 문제를 수정했습니다.</li>
			<li><BY>가챠 시뮬레이터</BY>의 임무 상자 더미가 10회 시뮬레이션되지 않는 문제를 수정했습니다.</li>
			<li><BY>가챠 시뮬레이터</BY>의 임무 상자 및 임무 상자 더미에 필요한 재화 표시가 수정되었습니다.</li>
		</> }
		new={ <>
			<li>신규 장비 <BY>속죄의 영대</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>경량형 실드 블레이드</BY>의 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>진행중인 이벤트가 종료됩니다.</li>
			<li><BY>가챠 시뮬레이터</BY>의 소모 재화 표시를 수정했습니다.</li>
			<li>
				일부 장비의 정보가 갱신되었습니다.<br />
				다음 장비들의 강화 Lv.0 상태의 버프가 삭제되었습니다.
				<ul>
					<li>테러진압용 외장아머 (T-60 불가사리)</li>
					<li>40mm DU탄 (AG-1 네레이드)</li>
					<li>우주용 확장 부스터 (CM67 스팅어)</li>
					<li>MG80용 개조키트 (T-10 님프)</li>
					<li>수상한 보조제 (스카디)</li>
				</ul>
			</li>
		</> }
		skin={ <>
			<li>
				<BY>에키드나</BY>의 스킨 <BY>휴일의 여제님</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>메리</BY>의 스킨 <BY>클로스컷 스페셜 컬렉션 : 미인도</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 자기소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-21 03:30:33</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12166" date="2023-06-20"
		update={ <>
			<li>장비 팝업의 크기를 변경했습니다.</li>
			<li>장비의 승급 정보 표시를 개선했습니다.</li>
		</> }
		bugfix={ <>
			<li>장비의 강화 비용이 잘못 표시되는 문제를 수정했습니다.</li>
			<li><BY>바르그</BY>의 대사가 잘못 표시되는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12164" date="2023-06-15"
		bugfix={ <>
			<li><BY>바르그</BY>의 대사가 잘못 표시되는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12163" date="2023-06-14"
		bugfix={ <>
			<li>
				<BY>바르그</BY>의 스킨 <BY>늑! 대! 무녀 바르그</BY>가 표시되지 않던 점을 수정했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>멀린</BY>의 스킨 <BY>CAFE Poseidon : 홀서빙의 마술사</BY>의 다운로드 이미지가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12161" date="2023-06-14"
		bugfix={ <>
			<li>일부 페이지의 스크롤 등이 초기화되는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 BG가 추가되었습니다.</li>
			<li>신규 가챠 항목이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>바르그</BY>의 스킨 <BY>CAFE Horizon...? : 두근 두근 work time</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>멀린</BY>의 스킨 <BY>CAFE Poseidon : 홀서빙의 마술사</BY>의 정보가 추가되었습니다.<br />
				이 스킨의 다운로드 기능은 차후 제공됩니다.
			</li>
			<li>
				<BY>아르망 추기경</BY>의 스킨 <BY>시스터 아르망</BY>의 일러스트레이터 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천향의 히루메</BY>의 스킨 <BY>미스오르카 : Imagination</BY>의 일러스트레이터 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-06-14 01:37:21</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12159" date="2023-06-09"
		site={ <>
			<li><BB>mermaid</BB> 의존성을 제거했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12153" date="2023-06-08"
		new={ <>
			<li>신규 BG가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>이벤트 지역 <BY>~폭풍을 부르는~ 미니 컴패니언의 습격</BY>의 정보가 갱신되었습니다.</li>
			<li>진행중인 이벤트 정보가 변경되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>아르망 추기경</BY>의 스킨 <BY>시스터 아르망</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천향의 히루메</BY>의 스킨 <BY>미스오르카 : Imagination</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-08 15:27:29</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12147" date="2023-06-07"
		bugfix={ <>
			<li>전투원 목록에서 등급 A B 필터가 작동하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12146" date="2023-06-07"
		bugfix={ <>
			<li>적 팝업에서 시리즈를 전환하지 못하는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>일부 스킨의 검열판 스킨이 표시되지 않는 문제를 수정했습니다.</li>
			<li>일부 스킨의 검열판과 일반판의 크기가 크게 다른 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12145" date="2023-06-04"
		new={ <>
			<li>신규 전투원 <BY>데카르트 보이저 삿갓</BY>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원 및 스킨의 아티스트 정보가 누락된 점을 수정했습니다.</li>
			<li>진행중인 총력전이 누락된 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>T-8W 발키리</BY>의 스킨 <BY>드림위버 웨딩 스페셜 : 하얀 신부</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>GS-10 샌드걸</BY>의 스킨 <BY>당신을 위한 꿈의 요정</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-06-04 04:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
