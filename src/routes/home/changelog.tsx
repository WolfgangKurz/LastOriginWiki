import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12969" date="2025-06-08"
		new={ <>
			<li>신규 장비 <BY>사령관의…</BY>의 정보가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>대전란 ~끝없이 내려치는 자색의 번개~</BY>의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>누락된 전투원 스킨의 배너 이미지를 추가했습니다.</li>
		</> }
		update={ <>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>A-6 이오</BY>의 스킨 <BR>HOT STEAM MILK !! : 따끈한 우유 목욕을 위한 샤워 가운</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-06-08 08:53:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
