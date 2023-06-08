import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
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
</>;
export default Changelog;
