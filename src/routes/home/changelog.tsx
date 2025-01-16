import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12873" date="2025-01-17"
		new={ <>
			<li>신규 이벤트 <BY>오르카 AGS여 단결하라!</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>로데</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>BR 돌격 회로</BY>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>
				미검열 일러스트가 <BR>2.5.46</BR> 클라이언트부터 적용된 추가 검열판으로 표시되던 점을 수정했습니다.
			</li>
			<li><BY>세계정보</BY>의 지역 목록의 UI 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>장비의 누락된 획득처 정보가 추가되었습니다.</li>
			<li><BY>스토리</BY> / <BY>외전</BY> 페이지 상단에 각 페이지로 이동하는 버튼을 추가했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-01-17 01:53:20</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12872" date="2025-01-16"
		bugfix={ <>
			<li>
				미검열 일러스트가 <BR>2.5.46</BR> 클라이언트부터 적용된 추가 검열판으로 표시되던 점을 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
