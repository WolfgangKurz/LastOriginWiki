import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";
import IconFilter from "@/components/bootstrap-icon/icons/Filter";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12646" date="2024-09-20"
		update={ <>
			<li>전투원 <BY>디오네</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>장비정보</BY>의 팝업에서 등급을 변경해도 팝업 내용이 갱신되지 않던 문제가 수정되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
