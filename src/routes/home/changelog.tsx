import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12304" date="2023-09-28"
		update={ <>
			<li>
				<BY>전투원정보</BY>의 상세 검색 필터가 페이지 이동 후에도 유지되도록 변경하였습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12303" date="2023-09-28"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 전투원 페이지의 스킨 탭에서 일부 스킨의 아이콘이 표시되지 않는 문제를 수정했습니다.
			</li>
			<li>일부 스킨의 아티스트 정보가 잘못된 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
