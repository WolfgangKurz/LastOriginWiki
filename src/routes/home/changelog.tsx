import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12387" date="2023-12-02"
		update={ <>
			<li>일부 전투원의 스킬의 플레이버 텍스트가 추가/갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12386" date="2023-12-01"
		bugfix={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킬 정보가 입력되지 않은 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
