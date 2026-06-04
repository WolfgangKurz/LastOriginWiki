import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13161" date="2026-06-05"
		new={ <>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
			<li>신규 스티커 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>총력전 정보가 갱신되었습니다.</li>
			<li>신규 및 누락 BGM 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스킬 설명에서 일부 글자가 올바르지 않게 표시되던 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>쿠노이치 시덴</BY>의 스킨 <BR>가르쳐줘! 갸루의 모든 것을 : 시로갸루</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>쿠노이치 시덴</BY>의 스킨 <BR>가르쳐줘! 갸루의 모든 것을 : 쿠로갸루</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>이터니티</BY>의 스킨 <BR>Blooming LOVE : 생화 부케 드레스</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>바르그</BY>의 스킨 <BR>물 개? 늑! 대 : 컬러풀 스윔 수트</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>사멸의 세크메트</BY>의 스킨 <BR>세크메트 커피우유</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>오렌지에이드</BY>의 스킨 <BR>오르카바니 : Orange Sunshine Bunny</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-06-05 05:34:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
