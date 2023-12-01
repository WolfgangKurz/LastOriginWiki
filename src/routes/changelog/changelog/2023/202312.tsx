import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12390" date="2023-12-02"
		update={ <>
			<li>버프보기에서 일부 이름이 존재하지 않는 버프에 대해 판별할 수 있도록 모든 버프에 번호 및 이름을 추가했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12387" date="2023-12-02"
		update={ <>
			<li>일부 전투원의 스킬의 플레이버 텍스트가 추가/갱신되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12386" date="2023-12-01"
		bugfix={ <>
			<li>전투원 <BY>레모네이드 베타</BY>의 스킬 정보가 입력되지 않은 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
