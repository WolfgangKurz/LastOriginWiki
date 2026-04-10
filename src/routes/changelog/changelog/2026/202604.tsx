import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13111" date="2026-04-11"
		new={ <>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li><BY>스킨 뷰어</BY>가 이제 두 종류의 소품 표시/비표시 기능을 지원합니다.</li>
		</> }
		bugfix={ <>
			<li><BY>스킨 뷰어</BY>에서 <BR>Download+</BR>로 다운로드 받을 경우, 해상도가 낮던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>오르카의 신부</BY>가 종료되었습니다.</li>
			<li>이벤트 <BY>우주에서 온 황금</BY> 복각이 시작되었습니다.</li>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>X-00 티아멧</BY>의 스킨 <BR>Pure Seduction : 하늘하늘 란제리</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>프랭스터 머큐리</BY>의 스킨 <BR>Pure Seduction : 반짝반짝 슬립웨어</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-04-11 01:00:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
