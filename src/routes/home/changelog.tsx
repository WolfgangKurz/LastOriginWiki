import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12953" date="2025-04-26"
		bugfix={ <>
			<li>일부 이벤트 배너가 표시되지 않던 문제를 수정했습니다.</li>
			<li>전투원 <BY>레모네이드 엡실론</BY>의 스킬 컷씬 영상이 표시되지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12950" date="2025-04-25"
		bugfix={ <>
			<li>진행중인 이벤트 정보를 수정했습니다.</li>
			<li><BY>스털링</BY> 대사가 표시되지 않는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>상시 이벤트 정보가 갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12948" date="2025-04-25"
		bugfix={ <>
			<li><BY>전투원정보</BY>에서 종종 획득처 이름이 표시되지 않던 점을 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <BY>스털링</BY>의 정보가 추가되었습니다.</li>
			<li>메인스토리 13지역 5부의 <BR>13-3C</BR> 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>
				개발 편의를 위해 이제 전투원 스킬 설명의 특정 소속 전투원 표기가 자동으로 갱신됩니다.<br />
				실제 버프 내용과 다를 수 있기 때문에, 정확한 정보가 필요하다면 <BP>버프 보기</BP> 옵션을 이용해주세요.
			</li>
		</> }
		skin={ <>
			<li>전투원 <BY>스털링</BY>의 스킨 <BR>훈련은 전투다! : 육탄전 대비 트레이닝복</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>이터니티</BY>의 스킨 <BR>죽음의 반려 페르세포네 : 마지막을 장식하는 예복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-04-25 04:11:08</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
