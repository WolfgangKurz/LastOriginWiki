import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13055" date="2026-01-19"
		new={ <>
			<li>신규 전투원 <BY>라일라 클라우디</BY>의 정보가 추가되었습니다.</li>
			<li>신규 이벤트 <BY>별의 무대</BY>의 정보가 추가되었습니다.</li>
			<li>신규 스토리 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>코코 인 화이트셸</BY>의 스킨 <BR>STAR CHILD : 별의 수호자 스페이스 슈트</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>라일라 클라우디</BY>의 스킨 <BR>당신의 운명을 점쳐볼까요?​ : 운명을 바꾸는 무희의 옷​</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-01-19 02:13:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
