import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12451" date="2024-01-28"
		update={ <>
			<li>전투원 및 장비 드랍처를 더 보기 쉽게 개선했습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>전투원정보</BY>의 <BY>스킨 보기</BY>에서 <BY>출시일</BY>이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12448" date="2024-01-25"
		bugfix={ <>
			<li>일부 지역의 세계정보가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12439" date="2024-01-25"
		new={ <>
			<li>신규 이벤트 <BY>우주에서 온 황금</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>파프니르</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>스텔러레이터</BY>의 정보가 추가되었습니다.</li>
			<li>신규 BGM 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
			<li>신규 스토리가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
