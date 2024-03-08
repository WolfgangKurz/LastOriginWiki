import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12559" date="2024-03-09"
		bugfix={ <>
			<li>전투원 <BY>T-75 워울프</BY>의 스킬 정보가 잘못 입력된 문제를 수정했습니다.</li>
			<li>이벤트 종료 시간을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
