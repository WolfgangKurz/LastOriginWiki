import { Fragment, FunctionalComponent, h } from "preact";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <Fragment>
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
