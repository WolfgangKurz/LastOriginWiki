import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13097" date="2026-02-28"
		new={ <>
			<li>신규 전투원 <BY>네리테스</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>눈 먼 공주와 안개의 나라</BY>가 상시 이벤트로 전환되었습니다.</li>
			<li><BY>전투원정보</BY>의 <BP>간단 검색</BP>의 이름 검색이 <BG>소속 이름</BG>도 검색하도록 개선되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>네리테스</BY>의 스킨 <BR>Sweetie Honey♡ : 청의의 스위트 데빌 란제리</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>엠피트리테</BY>의 스킨 <BR>Cutie Honey♡ : 백의의 큐티 데빌 란제리</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>살라시아</BY>의 스킨 <BR>Sexie Honey♡ : 흑의의 섹시 데빌 란제리</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-02-28 06:13:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
