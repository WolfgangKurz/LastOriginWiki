import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13126" date="2026-04-27"
		new={ <>
			<li>신규 전투원 <BY>헤스티아</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>화염 제어 가슴샘</BY>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>스킨 뷰어</BY>에서 <BR>Download+</BR>로 다운로드 받을 경우, 해상도가 낮던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>헤스티아</BY>의 스킨 <BR>불멸의 숙명 : Model.Cold-hearted Princess</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>랜서 미나</BY>의 스킨 <BR>Pure Seduction : 불끈불끈 승부 속옷</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>X-02 우르</BY>의 스킨 <BR>Pure Seduction : 폭신폭신 파자마</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-04-27 23:17:04</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
