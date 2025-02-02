import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12891" date="2025-02-02"
		bugfix={ <>
			<li>전투원 <BY>T-10 님프</BY>의 스킬 정보가 잘못된 점을 수정했습니다. (패시브 1)</li>
		</> }
		site={ <>
			<li>삭제했던 구 로비 애니메이션 스킨의 다운로드 버튼을 되돌렸습니다.</li>
			<li>
				스킨 뷰어의 "상세 보기" 팝업을 삭제했습니다.<br />
				해당 기능은 간소화 상태와 상세 보기 상태가 제공하는 기능이 동일하여 삭제되었습니다.<br />
				로비 애니메이션 표시 옵션은 뷰어 옆/상단으로 이동되었습니다.
			</li>
			<li>일부 코드 정리</li>
		</> }
	/>
</>;
export default Changelog;
