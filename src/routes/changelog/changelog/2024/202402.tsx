import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

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
</>;
export default Changelog;
