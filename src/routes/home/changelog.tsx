import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12381" date="2023-11-29"
		bugfix={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킬 정보가 입력되지 않은 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12380" date="2023-11-29"
		new={ <>
			<li>신규 장비 <BY>시원한 맥주캔</BY> 정보가 추가되었습니다.</li>
			<li>신규 지역 <BY>메인스토리 12지역 2챕터</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
			<li>신규 BGM의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>오베로니아 레아</BY>의 스킨 <BR>의사 레아</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-11-28 23:00:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
