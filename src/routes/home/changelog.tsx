import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12542" date="2024-02-25"
		site={ <>
			<li>
				사이트 개편안의 일부를 선행 적용했습니다.
				<ol>
					<li>전투원 상세 정보의 <BY>기본 정보</BY>의 디자인이 개편되었습니다.</li>
					<li>전투원 및 장비의 획득처의 디자인이 개편되었습니다.</li>
				</ol>
			</li>
		</> }
		bugfix={ <>
			<li>일부 버프 정보가 표시되지 않는 문제를 수정했습니다.</li>
			<li>사이트 상단의 메뉴가 하위 페이지에서 선택 상태로 표시되지 않는 문제를 수정했습니다.</li>
			<li>비 사파리 브라우저에서 스킨 뷰어 및 스토리 플레이어의 Spine 스킨이 올바르게 표시되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12530" date="2024-02-22"
		bugfix={ <>
			<li>
				사파리 브라우저에서 스킨 뷰어 및 스토리 플레이어의 Spine 애니메이션이 올바르게 표시되지 않는 문제를 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
