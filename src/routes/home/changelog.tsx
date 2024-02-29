import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12544" date="2024-02-29"
		new={ <>
			<li>신규 전투원 <BY>니드호그</BY>의 정보가 추가되었습니다.</li>
			<li>신규 버프 종류가 추가되었습니다.</li>
			<li>신규 연구 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스테이터스 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 버프 정보가 표시되지 않는 문제를 수정했습니다.</li>
			<li>사이트 상단의 메뉴가 하위 페이지에서 선택 상태로 표시되지 않는 문제를 수정했습니다.</li>
			<li>비 사파리 브라우저에서 스킨 뷰어 및 스토리 플레이어의 Spine 스킨이 올바르게 표시되지 않는 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>GS-130 피닉스</BY>의 스킨 <BY>오르카 사략해적 피닉스</BY>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
