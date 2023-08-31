import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12285" date="2023-08-31"
		new={ <>
			<li>신규 적의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>철의 왕자의 행동 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>S7 데스스토커</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>T-3 레프리콘</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>AC-6 후사르</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>자비로운 리앤</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-08-31 21:16:05</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
