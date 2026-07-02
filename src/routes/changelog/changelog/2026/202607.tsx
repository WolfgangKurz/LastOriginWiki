import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13170" date="2026-07-03"
		new={ <>
			<li>신규 이벤트 <BY>Sisters Of Omerta</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>이벤트 <BY>제로 베이스</BY> 복각이 종료되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어가 좌중간, 우중간 위치의 출연자를 표현하지 못하는 부분을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>바바리아나</BY>의 스킨 <BR>낙원으로부터 온 메이드 : 비(Be)공식 메이드복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-07-03 02:51:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
