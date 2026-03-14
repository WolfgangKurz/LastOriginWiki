import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13100" date="2026-03-15"
		new={ <>
			<li>신규 이벤트 <BY>오르카의 신부</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>공진의 알렉산드라</BY>의 스킨 <BR>감사(監事) 임무를 위한 오피스룩</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>네리테스</BY>의 스킨 <BR>Sweetie Honey♡ : 청의의 스위트 데빌 란제리</BR>의 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>엠피트리테</BY>의 스킨 <BR>Cutie Honey♡ : 백의의 큐티 데빌 란제리</BR>의 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>살라시아</BY>의 스킨 <BR>Sexie Honey♡ : 흑의의 섹시 데빌 란제리</BR>의 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-03-15 04:21:17</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
