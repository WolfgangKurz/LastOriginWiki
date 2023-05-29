import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12143" date="2023-05-30"
		new={ <>
			<li>신규 장비 <BY>보일링 베슬</BY> 및 <BY>시제형 탄두</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 스킬 정보가 갱신되었습니다.</li>
			<li>버프 목록에서 특정 버프를 조건으로 표시할 때 버프의 속성을 표시하도록 수정했습니다. (강화, 해로운, 일반, 모든)</li>
		</> }
	/>
</>;
export default Changelog;
