import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12281" date="2023-08-22"
		new={ <>
			<li>신규 전투원 <BY>S7 데스스토커</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>실버 불렛 니들</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>단분자 가위</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-08-22 16:50:16</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
