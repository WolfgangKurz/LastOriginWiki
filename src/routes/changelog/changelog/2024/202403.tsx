import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";
import IconGithub from "@/components/bootstrap-icon/icons/Github";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12554" date="2024-03-03"
		update={ <>
			<li>스토리 플레이어의 폰트 렌더링을 개선했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12547" date="2024-03-01"
		bugfix={ <>
			<li>전투원 <BY>니드호그</BY>의 상세 정보 페이지가 열리지 않는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
