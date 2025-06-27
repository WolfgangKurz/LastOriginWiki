import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12979" date="2025-06-28"
		bugfix={ <>
			<li>전투원 <BY>이레이나</BY>긔 전투원 유형이 잘못 표시되던 점을 수정했습니다.</li>
			<li>일부 버프의 대상이 잘못 표시되던 점을 수정했습니다.</li>
			<li>버프 보기에서 일부 수치 비례 버프의 수치가 잘못 표시되던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li><BY>스토리</BY> 페이지의 구역 순서를 연혁에 맞게 재배치했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12976" date="2025-06-26"
		new={ <>
			<li>신규 전투원 <BY>이레이나</BY>의 정보가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>대전란 ~끝없이 내려치는 자색의 번개~</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 적의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>
				전투원 <BY>생명의 세레스티아</BY>의 스킨 <BR>신선도 보장! 유기농 과일 비키니</BR>의
				소품 제거 형태를 열람할 수 없던 문제를 수정했습니다.
			</li>
		</> }
		update={ <>
			<li><BR>둠 브링어</BR> 소속 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>이벤트 <BY>영원한 겨울의 방주</BY>가 상시 이벤트로 전환되었습니다.</li>
			<li>총력전 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>B-11 나이트앤젤</BY>의 스킨 <BR>오르카 바니: 두려워 말라? 리버스 바니걸 의상</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>이레이나</BY>의 스킨 <BR>마왕(오빠) 공략을 위한 준비</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-06-27 00:12:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
