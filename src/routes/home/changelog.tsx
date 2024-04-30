import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12602" date="2024-04-30"
		bugfix={ <>
			<li><BY>스토리</BY> 페이지에서 일부 스토리 제목이 올바르게 표시되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12601" date="2024-04-30"
		new={ <>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>분노의 늑대 송곳니</BY>가 종료되었습니다.</li>
		</> }
		skin={ <>
			<BY>코요리</BY>의 스킨 <BY>무녀의 여름 휴가</BY>의 정보가 추가되었습니다.
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2024-04-30 20:03:04</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
			<li>
				일부 전투원의 소개 보이스가 누락된 부분을 수정했습니다.
				<ul>
					<li>콘스탄챠 S2</li>
					<li>펜리르</li>
					<li>HQ1 알바트로스</li>
					<li>K180 셀주크</li>
					<li>LRL</li>
					<li>마이티R</li>
				</ul>
			</li>
		</> }
	/>
</>;
export default Changelog;
