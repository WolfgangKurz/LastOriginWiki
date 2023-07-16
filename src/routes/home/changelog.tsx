import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12216" date="2023-07-16"
		site={ <>
			<li>번들 용량 최적화</li>
		</> }
		bugfix={ <>
			<li>일부 적의 AI가 잘못 입력되어있던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>적 AI 뷰어를 개편했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
