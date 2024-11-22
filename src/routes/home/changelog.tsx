import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12836" date="2024-11-23"
		new={ <>
			<li>신규 전투원 <BY>잉글리쉬 셰퍼드</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>밤을 걷는 소녀</BY>의 스토리 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>생명의 세레스티아</BY>의 스킨 <BR>신선도 보장! 유기농 과일 비키니</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>잉글리쉬 셰퍼드</BY>의 스킨 <BR>파이팅! 아이언 메이든</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일본어 소개 및 대사 보이스가 추가/갱신되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2024-11-23 01:30:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
