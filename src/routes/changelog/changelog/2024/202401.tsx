import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12418" date="2024-01-07"
		new={ <>
			<li>이벤트 <BY>당신의 쐐기에 진심을</BY>의 2부 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>FPS</BY>의 정보가 추가되었습니다.</li>
			<li>적 그룹 정보가 추가되었습니다.</li>
			<li>소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>가챠 시뮬레이터 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
