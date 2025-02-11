import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12896" date="2025-02-13"
		bugfix={ <>
			<li>
				스킨 뷰어에서 <BY>로비 애니메이션</BY>을 끈 상태로 구 로비 애니메이션 스킨을 다운로드 받을 때,
				정지 이미지가 아닌 영상이 다운로드 되던 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12895" date="2025-02-02"
		dialogue={ <>
			<li>누락된 일본어 음성이 추가되었습니다.</li>
			<li>일본어 음성을 <BY>日本語 R</BY>을 기준으로 통합하였습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12893" date="2025-02-02"
		bugfix={ <>
			<li><BY>세계정보</BY> 페이지가 표시되지 않던 문제를 수정했습니다.</li>
			<li><BY>Changelog</BY> 페이지지가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
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
