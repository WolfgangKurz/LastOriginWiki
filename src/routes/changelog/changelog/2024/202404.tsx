import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
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
