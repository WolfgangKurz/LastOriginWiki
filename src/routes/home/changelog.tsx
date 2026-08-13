import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13190" date="2026-08-13"
		update={ <>
			<li>가챠 시뮬레이터 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>이 상시 이벤트로 분류되던 점을 수정했습니다.</li>
			<li><BY>스킨 뷰어</BY>에서 <BR>소품 2 가리기</BR> 설정이 일반 다운로드에 반영되지 않던 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>천공의 엘라</BY>의 스킨 <BR>Azure Wave : 휴가용 수영복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-08-13 22:52:31</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
