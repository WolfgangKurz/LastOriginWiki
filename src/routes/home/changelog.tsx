import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12896" date="2025-02-13"
		bugfix={ <>
			<li>
				스킨 뷰어에서 <BY>로비 애니메이션</BY>을 끈 상태로 구 로비 애니메이션 스킨을 다운로드 받을 때,
				정지 이미지가 아닌 영상이 다운로드 되던 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12895" date="2025-02-02"
		dialogue={ <>
			<li>누락된 일본어 음성이 추가되었습니다.</li>
			<li>일본어 음성을 <BY>日本語 R</BY>을 기준으로 통합하였습니다.</li>
		</> }
	/>
</>;
export default Changelog;
