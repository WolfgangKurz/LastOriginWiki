import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12943" date="2025-04-11"
		bugfix={ <>
			<li>메인스토리 13지역 4부 지도가 올바르지 못하게 표시되던 점을 수정했습니다.</li>
			<li><BY>세계정보</BY>의 지도에 스크롤이 생기지 않을 수 있는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 장비 <BY>BR 위험방지 회로</BY>의 정보가 추가되었습니다.</li>
			<li>메인스토리 13지역 5부 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>X-05 에밀리</BY>의 스킨 <BR>아쿠아리움... 아니야? : 머메이드 프릴 비키니</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>닥터</BY>의 스킨 <BR>오빠지만 사랑만 있으면…!</BR>의 스킨 배너 이미지가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-04-10 06:10:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
