import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12146" date="2023-06-07"
		bugfix={ <>
			<li>적 팝업에서 시리즈를 전환하지 못하는 문제를 수정했습니다..</li>
		</> }
		skin={ <>
			<li>일부 스킨의 검열판 스킨이 표시되지 않는 문제를 수정했습니다.</li>
			<li>일부 스킨의 검열판과 일반판의 크기가 크게 다른 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
