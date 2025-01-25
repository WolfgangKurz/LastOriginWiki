import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12886" date="2025-01-26"
		new={ <>
			<li>
				옛 로비 애니메이션을 대응하는 <BY>스킨 뷰어<sup>γ</sup></BY>가 추가되었습니다.<br />
				테스트 제공 상태입니다.
			</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 지역 정보가 갱신되었습니다.</li>
			<li>일부 적 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>바닐라 A1</BY>의 스킨 <BR>정말 제 케이크가 그렇게 맛이 없었습니까? : 낮</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>바닐라 A1</BY>의 스킨 <BR>정말 제 케이크가 그렇게 맛이 없었습니까? : 밤</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-01-26 02:13:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12876" date="2025-01-17"
		bugfix={ <>
			<li><BY>세계정보</BY>에서 메인스토리 13지역이 표시되지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12873" date="2025-01-17"
		new={ <>
			<li>신규 이벤트 <BY>오르카 AGS여 단결하라!</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>로데</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>BR 돌격 회로</BY>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
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
