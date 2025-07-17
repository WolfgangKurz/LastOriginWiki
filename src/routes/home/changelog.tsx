import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12998" date="2025-07-18"
		bugfix={ <>
			<li>일부 전투원의 누락된 스킨 배너 이미지가 추가되었습니다.</li>
			<li>스토리 플레이어의 언어 전환 그룹 아이콘이 표시되지 않던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>이벤트 <BY>Project ORCA ~SunRising Stage~</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>스토리 플레이어를 일부 개선했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>바르그</BY>의 스킨 <BR>프로젝트 오르카 : 선라이징 스테이지 Flick and Sting</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-07-18 01:06:08</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
