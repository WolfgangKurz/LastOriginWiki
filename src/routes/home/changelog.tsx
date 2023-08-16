import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12279" date="2023-08-16"
		bugfix={ <>
			<li>전투원정보 및 장비정보에서 효과 필터가 동작하지 않는 문제를 수정했습니다.</li>
			<li>일부 언어에서 변화의성소 목록이 올바르지 않게 표시되는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>이 종료되었습니다.</li>
			<li>이벤트 <BY>오르카 데이트 공모전</BY>이 개방되었습니다.</li>
			<li>일부 지역의 정보가 갱신되었습니다.</li>
			<li>일부 적 그룹의 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-08-16 18:03:22</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
