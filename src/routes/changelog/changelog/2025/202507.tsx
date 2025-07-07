import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12988" date="2025-07-07"
		bugfix={ <>
			<li>사이트가 느리던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12982" date="2025-07-04"
		new={ <>
			<li>신규 이벤트 <BY>Project ORCA ~SunRising Stage~</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>장화</BY>의 스킨 <BR>프로젝트 오르카 : 선라이징 스테이지 Sprit and Soul</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-07-04 06:13:12</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
