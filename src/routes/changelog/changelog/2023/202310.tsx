import { FunctionalComponent } from "preact";

import Icons from "@/components/bootstrap-icon";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12362" date="2023-10-31"
		new={ <>
			<li>신규 장비 <BY>출력 강화 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>연산 강화 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>내 충격 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>반응 강화 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>분석 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>회로 내구 강화 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>회로 최적화 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>드라큐리나</BY>의 스킨 <BR>백귀야행의 가희</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>프로스트 서펀트</BY>의 스킨 <BR>죽으나 사나 불조심</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>전투원 <BY>프리가</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>에이다 Type-G</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>카엔</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>드라큘리나</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>프로스트 서펀트</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-10-31 21:55:37</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12359" date="2023-10-29"
		bugfix={ <>
			<li>스토리 뷰어가 화면 전환 효과로 비정상 작동하는 부분을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12358" date="2023-10-29"
		bugfix={ <>
			<li>터치로 스토리 뷰어가 작동하지 않는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>세계 정보의 서브스토리에 스토리 뷰어 연결이 추가되었습니다.</li>
			<li>
				세계 정보의 외전 페이지가 개편되었습니다.<br />
				모든 외전 스토리를 감상할 수 있습니다.
			</li>
			<li>
				스토리 뷰어가 갱신되었습니다.
				<ol>
					<li>모든 이벤트 스토리가 작업되었습니다.</li>
					<li>스크립트에서 &lt; 및 &gt; 표현에 오류가 있던 점을 수정했습니다.</li>
					<li>일부 추가 이미지의 크기가 올바르지 않던 점을 수정했습니다.</li>
					<li>화면 전환 효과가 추가되었습니다.</li>
				</ol>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12354" date="2023-10-27"
		bugfix={ <>
			<li>
				버프 보기의 <BR>전장에 XXX이(가) 존재하는 경우</BR> 조건이
				<BR>아군에 XXX이(가) 존재하는 경우</BR>로 표시되는 문제를 수정했습니다.
			</li>
			<li>
				세계 정보에서 스크롤이 있는 지도의 노드를 선택했을 때 스크롤이 초기화되는 문제를 수정했습니다.
			</li>
			<li>일부 전투원의 소모품 감추기 등의 일부 기능이 누락된 것을 수정했습니다.</li>
		</> }
		update={ <>
			<li>
				세계 정보의 스크롤이 있는 지도에서 선택된 노드가 화면을 벗어난 경우,
				자동으로 해당 노드가 보이게 스크롤되도록 변경했습니다.
			</li>
			<li>이벤트 종료 시간을 알 수 없는 경우의 메인의 이벤트 타이머 동작을 수정했습니다.</li>
			<li>버프 보기의 존재 조건에 아군/적 여부가 추가되었습니다.</li>
			<li>버프 보기의 적 조건에 적 정보 링크가 추가되었습니다.</li>
			<li>
				스토리 뷰어가 갱신되었습니다.
				<ol>
					<li>모든 메인스토리가 작업되었습니다.</li>
					<li>오르카 데이트 공모전 이벤트까지 작업되었습니다.</li>
					<li>영상 재생 기능이 추가되었습니다.</li>
					<li>통신 효과가 추가되었습니다.</li>
					<li>스크립트의 중간에서 뷰어를 시작하는 경우 BGM이 들리지 않던 점을 수정했습니다.</li>
					<li>일부 추가 이미지가 올바르지 않게 표시되던 점을 수정했습니다.</li>
					<li>일부 캐릭터가 표시되지 않던 점을 수정했습니다.</li>
					<li>일부 이름이 표시되지 않던 점을 수정했습니다.</li>
				</ol>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12349" date="2023-10-24"
		new={ <>
			<li>이벤트 <BY>멸망 이후의 커튼콜</BY>의 2부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 스토리의 번역 정보가 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>프리가</BY>의 스킨 <BR>100일간의 기다림</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-24 21:59:34</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12346" date="2023-10-21"
		site={ <>
			<li>사이트가 로드되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12318" date="2023-10-21"
		new={ <>
			<li>신규 장비 정보가 추가되었습니다.</li>
			<li>일부 전투원의 승급 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>
				세계정보에 스토리 뷰어가 추가되었습니다.<br />
				<strong class="text-danger">이 기능은 아직 개발중입니다.</strong>
			</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>신규 이벤트 지역의 드랍처가 전투원정보에 반영되지 않은 문제를 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-21 05:40:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12313" date="2023-10-11"
		new={ <>
			<li>신규 이벤트 <BY>멸망 이후의 커튼콜</BY>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>갈라테아</BY>의 스킨 <BR>가을, 그리고 갈라테아</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		site={ <>
			<li>오류가 있던 일본어가 아마도 정상화되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-11 04:01:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12311" date="2023-10-09"
		bugfix={ <>
			<li>
				서약 대사가 둘 이상의 오디오 파일로 이루어진 전투원의 서약 대사가 표시되지 않던 문제가 수정되었습니다.
			</li>
			<li>
				<BY>성벽의 하치코</BY>의 기본 대사 일부가 표시되지 않던 문제가 수정되었습니다.
			</li>
		</> }
		update={ <>
			<li>
				<BY>전투원정보</BY>의 전투원 스킬의 이름 정보 표기가 일부 수정되었습니다.
			</li>
			<li>
				<BY>전투원정보</BY>의 상세 검색의 작은 화면의 사용 환경이 개선되었습니다.
			</li>
		</> }
		site={ <>
			<li>사이트의 페이지 및 데이터를 불러오고 있을 때의 시각적 표현이 추가되었습니다.</li>
			<li>사이트의 일본어에 문제가 있는 점에 대한 공지가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-09 04:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12308" date="2023-10-07"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 <BG>스킨 보기</BG>에서 일부 스킨의 아이콘이 표시되지 않는 문제가 수정되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>보련</BY>의 스킨 <BR>방과 후 미용사 보련</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-10 님프</BY>의 스킨 <BR>드림위버 모던 컬렉션 : 느와르</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-07 01:07:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
