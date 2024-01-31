import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12454" date="2024-02-01"
		new={ <>
			<li>이벤트 <BY>우주에서 온 황금</BY>의 서브스토리 정보가 추가되었습니다.</li>
			<li>신규 배경 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>무적의 용</BY>의 스킨 <BY>뒤틀린 운명 : 포세이돈 용</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>RF87 로크</BY>의 스킨 <BY>창공의 기사 로크</BY>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12452" date="2024-01-28"
		update={ <>
			<li>전투원 및 장비 드랍처에 <BY>현재 이벤트</BY> 구분이 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12451" date="2024-01-28"
		update={ <>
			<li>전투원 및 장비 드랍처를 더 보기 쉽게 개선했습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>전투원정보</BY>의 <BY>스킨 보기</BY>에서 <BY>출시일</BY>이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
