import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12559" date="2024-03-09"
		bugfix={ <>
			<li>전투원 <BY>T-75 워울프</BY>의 스킬 정보가 잘못 입력된 문제를 수정했습니다.</li>
			<li>이벤트 종료 시간을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12557" date="2024-03-03"
		bugfix={ <>
			<li>스토리 플레이어에서 텍스트가 줄바꿈되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12555" date="2024-03-03"
		update={ <>
			<li>스토리 플레이어의 폰트 렌더링을 개선했습니다.</li>
			<li>스킨 뷰어에서 확대/축소 시 흐리게 보이는 처리를 기존 방식으로 변경했습니다. (밉맵 기능을 껐습니다.)</li>
		</> }
	/>
	<ChangelogItem title="Build 12547" date="2024-03-01"
		bugfix={ <>
			<li>전투원 <BY>니드호그</BY>의 상세 정보 페이지가 열리지 않는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
