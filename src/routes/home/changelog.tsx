import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

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
	<ChangelogItem title="Build 13021" date="2025-09-26"
		new={ <>
			<li>신규 전투원 <BY>치이 아루엘</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>이나비</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>더럽혀진 마지막 기록</BY>의 4부 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>치이 아루엘</BY>의 스킨 <BR>소완&amp;오드리 컬래버레이션 코스튬</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>이나비</BY>의 스킨 <BR>야전부대의 전투식량</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>쿠노이치 엔라이</BY>의 스킨 <BR>견고한 아름다움, 피어나는 파라핀 열꽃 : 인격 유지 훈련복 (褐)</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>쿠노이치 엔라이</BY>의 스킨 <BR>견고한 아름다움, 피어나는 파라핀 열꽃 : 인격 유지 훈련복 (紅)</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li>누락된 타이틀 콜 정보가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2025-09-26 01:43:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
