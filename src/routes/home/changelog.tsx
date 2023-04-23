import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12124" date="2023-04-23"
		bugfix={ <>
			<li>총력전 페이지에서 적의 레벨이 계속 변하여 사이트를 이용할 수 없는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12123" date="2023-04-22"
		bugfix={ <>
			<li>일부 버프 목록에 빈 버프가 표시되는 문제가 수정되었습니다.</li>
			<li>위 문제로 일부 전투원 스킬 설명의 각종 수치가 올바르지 않게 표시되던 문제가 수정되었습니다.</li>
			<li>일부 스킨의 중파 이미지가 U2DModelRenderer에서 표시되지 않던 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12122" date="2023-04-20"
		bugfix={ <>
			<li>일부 적의 버프 목록이 누락된 점을 수정했습니다.</li>
			<li>일부 적의 버프 목록에서 텍스트가 존재하지 않는 버프명에 대한 표시를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
