import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

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
	<ChangelogItem title="Build 13029" date="2025-10-27"
		new={ <>
			<li>신규 전투원 <BY>위스타</BY> 정보가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>리빙 데드 카니발</BY> 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>위스타</BY>의 스킨 <BR>Thriller Night Marionette : 할로윈 인형극 의상</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>클로버 에이스</BY>의 스킨 <BR>신규 의상 리허설 : 특촬물 의상</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-10-27 00:42:39</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
