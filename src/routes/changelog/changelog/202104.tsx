import RarityBadge from "@/components/rarity-badge";
import { Fragment, FunctionalComponent, h } from "preact";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <Fragment>
	<ChangelogItem title="Build 10762" date="2021-04-12"
		bugfix={ <Fragment>
			<li>일부 환경에서 세계 정보를 열람 시 사이트가 동작하지 않는 문제를 수정중입니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 10761" date="2021-04-12"
		bugfix={ <Fragment>
			<li>시뮬레이터에서 일부 장비의 버프 이름에 오류가 있던 문제를 수정했습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">철의 탑</span>의
				<span class="badge bg-warning text-dark">오염된 군수 공장</span>의 정보가 갱신되었습니다.
				<br />
				<span class="badge bg-success">명예로운 극지부대</span> 시리즈가 추가되었으며,
				<span class="badge bg-success">이상을 실현한 존재</span> 시리즈 조건에
				<span class="badge bg-stat-acc">스마트 엔조이</span> 부대가 추가되었습니다.
				<br />
				<RarityBadge rarity="SSS" />급 패시브의 부대 제한이 정상 작동하도록 수정되었습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 10758" date="2021-04-12"
		update={ <Fragment>
			<li>장비 팝업의 SSS 등급 강화 비용 정보가 갱신되었습니다.</li>
		</Fragment> }
		skin={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">블랙 웜 S9</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜 : 되찾은 마음</span>의 가격이 잘못되어있던 점을 수정했습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 10757" date="2021-04-11"
		bugfix={ <Fragment>
			<li>Build 10754의 배포 시간이 잘못 지정되어있던 문제를 수정했습니다.</li>
			<li>장비 목록에서 일부 장비가 표시되지 않던 문제를 수정했습니다.</li>
		</Fragment> }
		update={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">Simulator<sup>β</sup></span> 메뉴가 밖으로 나오고,
				<span class="badge bg-warning text-dark">Changelog</span> 메뉴가
				<span class="badge bg-warning text-dark">기타</span> 메뉴의 하위로 이동했습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 10754" date="2021-04-11"
		bugfix={ <Fragment>
			<li>헤더의 외부 링크가 작동하지 않던 문제를 수정했습니다.</li>
			<li>전투원 정보에서 전용 장비가 표시되지 않던 문제를 수정했습니다.</li>
			<li><span class="badge bg-warning text-dark">촙 메이커 II</span>의 버프 이름에 오류가 있던 문제를 수정했습니다.</li>
			<li>장비 팝업의 유형 뱃지와 전투원 뱃지가 칸을 넘어가는 문제를 수정했습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">철의 탑</span>의
				<span class="badge bg-warning text-dark">오염된 군수 공장</span> 페이지에서
				모바일일 때 등급 버튼이 표시되지 않는 문제를 수정했습니다.
			</li>
		</Fragment> }
		new={ <Fragment>
			<li><span class="badge bg-warning text-dark">세계 정보</span>에 <span class="badge bg-success">일일 훈련</span> 정보가 추가되었습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 10753" date="2021-04-10"
		bugfix={ <Fragment>
			<li>장비 선택 팝업이 이전 선택한 장비가 선택된 것 처럼 표시되던 문제가 수정되었습니다.</li>
			<li>시뮬레이터의 링크 보너스 계산이 잘못되어있던 점을 수정했습니다.</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 10750" date="2021-04-09"
		site={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">Simulator<sup>β</sup></span> 메뉴를
				<span class="badge bg-warning text-dark">기타</span>의 하위 메뉴로 이동했습니다.
			</li>
		</Fragment> }
		bugfix={ <Fragment>
			<li>세계 정보 등에서 장비 팝업이 표시될 때 항상 최고 등급의 장비로 표시되던 문제를 수정했습니다.</li>
			<li>Unit type&amp;role badge did not wrapping in english has fixed.</li>
		</Fragment> }
		new={ <Fragment>
			<li>
				신규 전투원 <span class="badge bg-warning text-dark">타치</span>가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">철의 탑(로그라이크)</span> 메뉴가 추가되었습니다.
			</li>
		</Fragment> }
		skin={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">블랙 웜 S9</span>의 스킨 <span class="badge bg-danger">드림위버 웨딩 스페셜 : 되찾은 마음</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">블랙 웜 S9</span>의 스킨
				<span class="badge bg-danger">한여름의 흑백합</span>의 로비 애니메이션 여부 및 가격이 수정되었습니다.
			</li>
		</Fragment> }
	/>

	<ChangelogItem title="Build 10745" date="2021-04-03"
		site={ <Fragment>
			<li>기본 언어를 개선했습니다.</li>
		</Fragment> }
		bugfix={ <Fragment>
			<li>약속의 꽃다발 아이템 설명의 기능이 호감도 상승으로 잘못 표기되던 문제를 수정했습니다.</li>
			<li>전투원/장비 교환소 정보가 2020년 11월 이후로 없던 문제를 수정했습니다.</li>
			<li>적 팝업의 사거리/AP/범위 정보가 지나치게 크게 표시되는 문제를 수정했습니다.</li>
		</Fragment> }
		new={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">Simulator<sup>β</sup></span> 페이지가 추가되었습니다.<br />
				기존의 전투원 페이지의 계산기를 대체합니다.<br />
				현재는 본인 및 타 전투원의 스킬은 계산되지 않으며, 3차 리팩토링 이후에 공개될 예정입니다.
			</li>
		</Fragment> }
		skin={ <Fragment>
			<li>
				<span class="badge bg-warning text-dark">세띠</span>의 스킨
				<span class="badge bg-danger">드림위버 웨딩 스페셜 : 안식처</span>의 로비 애니메이션 여부 및 가격이 수정되었습니다.
			</li>
		</Fragment> }
	/>
</Fragment>;
export default Changelog;
