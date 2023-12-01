import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12386" date="2023-12-01"
		bugfix={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킬 정보가 입력되지 않은 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
