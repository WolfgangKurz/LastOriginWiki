import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12563" date="2024-03-20"
		new={ <>
			<li>신규 장식품의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>C-11 스카라비아</BY>의 스킨 <BY>잠자는 보건실의 보건위원</BY>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-03-20 03:22:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
