import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12913" date="2025-03-14"
		new={ <>
			<li>신규 이벤트 <BY>은둔한 여신의 궁전</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품의 정보가 추가되었습니다다.</li>
			<li>신규 소모품의 정보가 추가되었습니다다.</li>
		</> }
		update={ <>
			<li>전투원 <BY>칼립소</BY>의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>알키오네</BY>의 스킨 <BR>미스오르카 : 꿈꾸던 파랑(波浪)</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>보속의 마리아</BY>의 스킨 <BR>눈높이 육아 : 소꿉놀이 란제리</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-03-14 01:08:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
