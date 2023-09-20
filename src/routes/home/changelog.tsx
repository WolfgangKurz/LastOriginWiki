import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12295" date="2023-09-20"
		new={ <>
			<li>신규 적 <BY>래비저</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>오르카 필름 페스티벌</BY>의 2구역 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				전투원 <BY>올리비아 스타수어</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>
				전투원 <BY>테일러 클로스컷</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>
				전투원 <BY>드라큐리나</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>
				전투원 <BY>보련</BY>의 스킬 정보가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-09-14 02:52:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
