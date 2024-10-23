import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12696" date="2024-10-24"
		new={ <>
			<li>
				카메라 영역 한계가 있는 스킨의 경우,
				<BG>다운로드<sup>+</sup></BG>에서 저장할 때 카메라 한계 영역에 맞춰 자르는 옵션이 추가되었습니다.<br />
				기본 ON 입니다.
			</li>
		</> }
		bugfix={ <>
			<li>스킨 뷰어에서 일부 전투원의 회전/왜곡이 잘못 적용되어 표시되는 문제를 수정했습니다.</li>
			<li><BG>다운로드<sup>+</sup></BG>에서 일부 전투원이 잘린 상태로 다운로드 되는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
