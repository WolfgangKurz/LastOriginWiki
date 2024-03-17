import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12565" date="2024-03-17"
		bugfix={ <>
			<li>전투원의 스킬 정보에서 풀링크 보너스가 스킬 설명에 반영되지 않는 점을 수정했습니다.</li>
			<li>전투원의 스킨 뷰어에서 일부 항목의 회전이 잘못 적용된 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12562" date="2024-03-14"
		update={ <>
			<li>이벤트 <BY>우주에서 온 황금</BY>이 종료되었습니다.</li>
			<li>이벤트 <BY>분노의 늑대 송곳니</BY> 복각이 시작되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>장화</BY>의 스킨 <BY>여제의 골칫거리 장화</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천아</BY>의 스킨 <BY>여제의 골칫거리 천아</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>GS-130 피닉스</BY>의 스킨 <BY>오르카 사략해적 피닉스</BY>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-03-14 20:48:19</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12559" date="2024-03-09"
		bugfix={ <>
			<li>전투원 <BY>T-75 워울프</BY>의 스킬 정보가 잘못 입력된 문제를 수정했습니다.</li>
			<li>이벤트 종료 시간을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
