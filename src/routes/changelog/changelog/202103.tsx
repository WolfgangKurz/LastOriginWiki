import { FunctionalComponent } from "preact";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 10571" date="2021-03-25"
		bugfix={ <>
			<li><span class="badge bg-danger">세인트 오르카의 비밀작전</span>의 이벤트 기간이 잘못 작성되어있던 점을 수정했습니다.</li>
			<li>장비 팝업의 등급 선택에서 SSS급의 텍스트가 표시되지 않던 문제를 수정했습니다.</li>
			<li>효과 필터에서 증가/감소 필터가 같이 켜지고 꺼지는 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 대상 필터가 작동하지 않는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>장비 팝업의 제목에 장비 유형 아이콘을 추가했습니다.</li>
		</> }
		update={ <>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span>, <span class="badge bg-warning text-dark">장비정보</span>의 효과 필터의 작동을 수정했습니다.<br />
				기존의 작동은 OR 선택이었지만 이제 AND 선택으로 작동합니다.
			</li>
		</> }
	/>

	<ChangelogItem title="Build 10568" date="2021-03-25"
		bugfix={ <>
			<li>적 정보 팝업을 닫고 새로 열 때, 이전 적 정보가 표시되는 문제를 수정했습니다.</li>
			<li>대사가 줄바꿈되지 않고 표시되는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li><span class="badge bg-warning text-dark">스트롱홀드</span>의 정보가 추가되었습니다.</li>
			<li>홈 화면에 진행중인 이벤트 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">철혈의 레오나</span>의 스킨 <span class="badge bg-danger">드림위버 웨딩 스페셜 : 완벽한 날</span>의 정보가 추가되었습니다.
			</li>
			<li><span class="badge bg-warning text-dark">AT-4 파니</span>의 스킨 <span class="badge bg-danger">코트 위의 에이스</span>의 정보가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">A-6 이오</span>의 스킨 <span class="badge bg-danger">한겨울의 약속</span>의 중파 이미지가 추가되었습니다.</li>
		</> }
		delete={ <>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 스테이터스 탭을 삭제했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 10562" date="2021-03-14"
		bugfix={ <>
			<li>일부 환경에서 사이트 번역 기능이 올바르지 않게 작동하는 문제를 수정했습니다.</li>
			<li>적 팝업에서 적 정보가 변경되지 않는 문제를 수정했습니다.</li>
			<li>소환물 팝업의 탭이 비정상적으로 표시되던 문제를 수정했습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 10554" date="2021-03-14"
		site={ <>
			<li>프레임워크를 <span class="badge bg-success">Vue2</span>에서 <span class="badge bg-substory">Preact X</span>로 변경했습니다.</li>
			<li>
				프레임워크를 <span class="badge bg-event-exchange-old">Bootstrap 4</span>에서
				<span class="badge bg-event-exchange-old">Bootstrap 5</span>로 변경했습니다.
			</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">전투원정보</span>에서 일부 스킨의 아이콘이 표시되지 않는 문제를 수정했습니다.</li>
			<li>소환물의 레벨을 조정할 수 있던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>소환물 팝업에 AI 탭을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">설비정보</span>에 간단한 필터 기능을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-warning text-dark">로그라이크</span> 필터와 뱃지가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 목록의 필터가 항상 보이도록 변경했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 스킬 효과 필터를 팝업 형태로 변경했습니다.</li>
			<li>소환물 팝업을 적 정보 팝업과 동일한 모양으로 변경했습니다.</li>
			<li>장비 팝업의 기본 능력치 표시를 개선했습니다.</li>
			<li><span class="badge bg-warning text-dark">세계정보</span>의 외전의 이미지를 변경했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-03-14 03:39:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>

	<ChangelogItem title="Build 10554" date="2021-03-14"
		site={ <>
			<li>프레임워크를 <span class="badge bg-success">Vue2</span>에서 <span class="badge bg-substory">Preact X</span>로 변경했습니다.</li>
			<li>
				프레임워크를 <span class="badge bg-event-exchange-old">Bootstrap 4</span>에서
				<span class="badge bg-event-exchange-old">Bootstrap 5</span>로 변경했습니다.
			</li>
		</> }
		bugfix={ <>
			<li><span class="badge bg-warning text-dark">전투원정보</span>에서 일부 스킨의 아이콘이 표시되지 않는 문제를 수정했습니다.</li>
			<li>소환물의 레벨을 조정할 수 있던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>소환물 팝업에 AI 탭을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">설비정보</span>에 간단한 필터 기능을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-warning text-dark">로그라이크</span> 필터와 뱃지가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 목록의 필터가 항상 보이도록 변경했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 스킬 효과 필터를 팝업 형태로 변경했습니다.</li>
			<li>소환물 팝업을 적 정보 팝업과 동일한 모양으로 변경했습니다.</li>
			<li>장비 팝업의 기본 능력치 표시를 개선했습니다.</li>
			<li><span class="badge bg-warning text-dark">세계정보</span>의 외전의 이미지를 변경했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-03-14 03:39:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
