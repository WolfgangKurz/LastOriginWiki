import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
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
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-10-27 00:42:39</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
