import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13025" date="2025-10-12"
		new={ <>
			<li>이벤트 <BY>더럽혀진 마지막 기록</BY> 4부의 <BY>EV4-11</BY> 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>더럽혀진 마지막 기록</BY> 4부의 서브스토리 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>이벤트 <BY>더럽혀진 마지막 기록</BY>의 연장된 기간이 반영되었습니다.</li>
			<li>이벤트 <BY>~폭풍을 부르는~ 미니 컴패니언의 습격</BY>이 상시 이벤트로 변경되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>A-87 밴시</BY>의 스킨 <BR>스마일은 공짜, 25시 패스트푸드점 : 매니저 유니폼</BR>의 정보가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13023" date="2025-10-01"
		bugfix={ <>
			<li>전투원 <BY>이나비</BY>의 스킨 <BR>야전부대의 전투식량</BR>의 검열 버전 이미지가 제대로 표시되지 않는 문제를 수정했습니다.</li>
			<li>일부 로비 애니메이션 스킨의 다운로드 버튼이 제대로 동작하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
