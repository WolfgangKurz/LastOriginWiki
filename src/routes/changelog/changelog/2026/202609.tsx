import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13199" date="2026-09-12"
		update={ <>
			<li>일부 이벤트의 탐색 및 교환소 정보가 갱신되었습니다.</li>
			<li>일부 전투원 및 장비의 정보가 갱신되었습니다.</li>
			<li>일부 스토리 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>파프니르</BY>의 스킨 <BR>여제의 우등생(?)</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>T-14 미호</BY>의 스킨 <BR>Lovely Foxy Girl♥</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-09-12 03:09:12</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
