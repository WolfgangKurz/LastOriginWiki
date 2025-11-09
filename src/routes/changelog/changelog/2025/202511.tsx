import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13035" date="2025-11-09"
		new={ <>
			<li>신규 스토리 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 적 그룹 정보가 갱신되었습니다.</li>
			<li>소모품 정보가 갱신되었습니다.</li>
			<li>총력전 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>
				스킨 뷰어에서 애니메이션이 없는 중파 이미지에 <BG>다운로드<sup>+</sup></BG>를 사용할 수 없는 문제를 수정했습니다.
			</li>
		</> }
		skin={ <>
			<li>전투원 <BY>AA-7 임펫</BY>의 스킨 <BR>초년생을 졸업하는 정장 : 팀장님께 사랑받는 임펫 대리</BR>의 정보가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13033" date="2025-11-01"
		bugfix={ <>
			<li>일부 스킨의 다운로드 기능이 작동하지 않던 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
