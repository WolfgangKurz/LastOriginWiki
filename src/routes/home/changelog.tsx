import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12872" date="2025-01-16"
		bugfix={ <>
			<li>
				미검열 일러스트가 <BR>2.5.46</BR> 클라이언트부터 적용된 추가 검열판으로 표시되던 점을 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
