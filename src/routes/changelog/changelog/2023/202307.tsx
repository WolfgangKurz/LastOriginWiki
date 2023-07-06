import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12184" date="2023-07-06"
		update={ <>
			<li>11지역 BGM 정보가 추가되었습니다.</li>
			<li>
				<BY>CAFE amor × Cafe Horizon</BY> 앨범의 곡이 재생 가능하도록 변경되었습니다.<br />
				<BO>어서오세요 라스트 파라다이스 (CAFE Horizon)</BO> 곡은 음원이 공개되지 않아 재생 기능이 제공되지 않습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12183" date="2023-07-05"
		bugfix={ <>
			<li>전투원 대사의 서약 대사가 표시되지 않는 문제를 수정했습니다.</li>
			<li>버프 목록에서 특정 버프가 표시되지 않을 수 있는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>신규 스킨 배너가 추가되었습니다.</li>
			<li>전투원정보의 스킨 정보에 스킨 배너가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>꿈꾸는 인어의 섬</BY>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>티타니아 프로스트</BY>의 스킨 <BR>간호사? 티타니아</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>불굴의 마리</BY>의 스킨 <BR>하계 전투복 마리</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-07-05 03:50:37</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
