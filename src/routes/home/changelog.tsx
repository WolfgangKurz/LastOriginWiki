import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12163" date="2023-06-14"
		bugfix={ <>
			<li>
				<BY>바르그</BY>의 스킨 <BY>늑! 대! 무녀 바르그</BY>가 표시되지 않던 점을 수정했습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>멀린</BY>의 스킨 <BY>CAFE Poseidon : 홀서빙의 마술사</BY>의 다운로드 이미지가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12161" date="2023-06-14"
		bugfix={ <>
			<li>일부 페이지의 스크롤 등이 초기화되는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 BG가 추가되었습니다.</li>
			<li>신규 가챠 항목이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>바르그</BY>의 스킨 <BY>CAFE Horizon...? : 두근 두근 work time</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>멀린</BY>의 스킨 <BY>CAFE Poseidon : 홀서빙의 마술사</BY>의 정보가 추가되었습니다.<br />
				이 스킨의 다운로드 기능은 차후 제공됩니다.
			</li>
			<li>
				<BY>아르망 추기경</BY>의 스킨 <BY>시스터 아르망</BY>의 일러스트레이터 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천향의 히루메</BY>의 스킨 <BY>미스오르카 : Imagination</BY>의 일러스트레이터 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-06-14 01:37:21</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
