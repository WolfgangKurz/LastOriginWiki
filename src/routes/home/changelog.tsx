import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12570" date="2024-03-27"
		update={ <>
			<li>
				<BY>전투원정보</BY>의 <BP>스킨 보기</BP>의 <BG>상세 검색</BG>을 개편했습니다.<br />
				또, 기본 스킨의 <BB>중파 이미지</BB> 필터가 작동하도록 수정했습니다.
			</li>
		</> }
		bugfix={ <>
			<li>
				<BY>C-11 스카라비아</BY>의 스킨 <BY>잠자는 보건실의 보건위원</BY>의 출시일 정보가 누락된 점을 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12564" date="2024-03-24"
		bugfix={ <>
			<li>일부 이미지 및 오디오가 표시/재생되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
