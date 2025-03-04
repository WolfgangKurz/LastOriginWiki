import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12910" date="2025-03-05"
		bugfix={ <>
			<li>일부 스킨 배너가 누락된 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12905" date="2025-02-28"
		bugfix={ <>
			<li>전투원 기본 정보에서 호감도 아이콘이 작게 표시되던 점을 수정했습니다.</li>
			<li>서약 가능 AGS 전투원의 호감도 정보가 표시되지 않던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <BY>칼립소</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>일부 스토리 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>칼립소</BY>의 스킨 <BR>남국의 수국 : 아오자이</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>아크로바틱 써니</BY>의 스킨 <BR>외줄 위의 천사</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-02-28 02:07:06</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
