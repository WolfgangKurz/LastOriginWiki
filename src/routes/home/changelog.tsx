import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13228" date="2026-11-08"
		update={ <>
			<li>전투원 <BY>나모</BY>, <BY>사니</BY>의 스킬 정보가 추가되었습니다.</li>
			<li>일부 전투원의 능력치 및 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 효과 정보가 갱신되었습니다.</li>
			<li>일부 지역의 적 편성 및 클리어 조건 정보가 갱신되었습니다.</li>
			<li>변칙 <BY>누전</BY>의 효과 정보가 갱신되었습니다.</li>
			<li>일부 스토리의 대사 표시 및 BGM 정보가 갱신되었습니다.</li>
			<li><BY>스토리 플레이어</BY>에서 전투원 <BY>닥터</BY>의 모델이 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>포츈</BY>의 기본 스킨 중파 정보가 갱신되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
