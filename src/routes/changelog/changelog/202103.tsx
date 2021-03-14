import { Fragment, FunctionalComponent, h } from "preact";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <Fragment>
	<ChangelogItem title="Build 10562" date="2021-03-14"
		bugfix={ <Fragment>
			<li>일부 환경에서 사이트 번역 기능이 올바르지 않게 작동하는 문제를 수정했습니다.</li>
			<li>적 팝업에서 적 정보가 변경되지 않는 문제를 수정했습니다.</li>
			<li>소환물 팝업의 탭이 비정상적으로 표시되던 문제를 수정했습니다.</li>
		</Fragment> }
	/><ChangelogItem title="Build 10554" date="2021-03-14"
		site={ <Fragment>
			<li>프레임워크를 <span class="badge bg-success">Vue2</span>에서 <span class="badge bg-substory">Preact X</span>로 변경했습니다.</li>
			<li>
				프레임워크를 <span class="badge bg-event-exchange-old">Bootstrap 4</span>에서
				<span class="badge bg-event-exchange-old">Bootstrap 5</span>로 변경했습니다.
			</li>
		</Fragment> }
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">전투원정보</span>에서 일부 스킨의 아이콘이 표시되지 않는 문제를 수정했습니다.</li>
			<li>소환물의 레벨을 조정할 수 있던 문제를 수정했습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li>소환물 팝업에 AI 탭을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">설비정보</span>에 간단한 필터 기능을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-warning text-dark">로그라이크</span> 필터와 뱃지가 추가되었습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>전투원 목록의 필터가 항상 보이도록 변경했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 스킬 효과 필터를 팝업 형태로 변경했습니다.</li>
			<li>소환물 팝업을 적 정보 팝업과 동일한 모양으로 변경했습니다.</li>
			<li>장비 팝업의 기본 능력치 표시를 개선했습니다.</li>
			<li><span class="badge bg-warning text-dark">세계정보</span>의 외전의 이미지를 변경했습니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2021-03-14 03:39:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>
	<ChangelogItem title="Build 10554" date="2021-03-14"
		site={ <Fragment>
			<li>프레임워크를 <span class="badge bg-success">Vue2</span>에서 <span class="badge bg-substory">Preact X</span>로 변경했습니다.</li>
			<li>
				프레임워크를 <span class="badge bg-event-exchange-old">Bootstrap 4</span>에서
				<span class="badge bg-event-exchange-old">Bootstrap 5</span>로 변경했습니다.
			</li>
		</Fragment> }
		bugfix={ <Fragment>
			<li><span class="badge bg-warning text-dark">전투원정보</span>에서 일부 스킨의 아이콘이 표시되지 않는 문제를 수정했습니다.</li>
			<li>소환물의 레벨을 조정할 수 있던 문제를 수정했습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li>소환물 팝업에 AI 탭을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">설비정보</span>에 간단한 필터 기능을 추가했습니다.</li>
			<li><span class="badge bg-warning text-dark">장비정보</span>에 <span class="badge bg-warning text-dark">로그라이크</span> 필터와 뱃지가 추가되었습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>전투원 목록의 필터가 항상 보이도록 변경했습니다.</li>
			<li><span class="badge bg-warning text-dark">전투원정보</span>의 스킬 효과 필터를 팝업 형태로 변경했습니다.</li>
			<li>소환물 팝업을 적 정보 팝업과 동일한 모양으로 변경했습니다.</li>
			<li>장비 팝업의 기본 능력치 표시를 개선했습니다.</li>
			<li><span class="badge bg-warning text-dark">세계정보</span>의 외전의 이미지를 변경했습니다.</li>
		</Fragment> }
		dialogue={ <Fragment>
			<li><span class="badge bg-light text-dark">KST 2021-03-14 03:39:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</Fragment> }
	/>
</Fragment>;
export default Changelog;
