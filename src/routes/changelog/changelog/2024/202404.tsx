import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12599" date="2024-04-25"
		bugfix={ <>
			<li>일부 전투원 스킨의 배너 이미지가 누락된 점이 수정되었습니다.</li>
			<li>일부 전투원의 Spine 애니메이션이 적용된 스킨이 표시되지 않던 점을 수정했습니다.</li>
		</> }
		knownissue={ <>
			<li>
				<BY>퀸오브메인</BY>의 <BR>드림위버 모던 컬렉션 : 단장한 야성</BR> 스킨이
				스킨 뷰어에서 올바르게 표시되지 않는 문제가 있습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12573" date="2024-04-04"
		bugfix={ <>
			<li>전투원 <BY>T-19 픽시</BY> 및 일부 전투원의 스킨 대사 정보가 입력되지 않은 문제를 수정했습니다.</li>
		</> }
		knownissue={ <>
			<li>일부 전투원의 스킨이 스킨 뷰어에서 올바르게 표시되지 않는 문제가 있습니다.</li>
		</> }
	/>
</>;
export default Changelog;
