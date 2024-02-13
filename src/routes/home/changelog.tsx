import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import IconGithub from "@/components/bootstrap-icon/icons/Github";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12470" date="2024-02-14"
		skin={ <>
			<li>
				<BY>성벽의 하치코</BY>의 스킨 <BY>상쾌한 달콤함</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>화롯가의 포티아</BY>의 스킨 <BY>사령관님 전용 디저트</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>다프네</BY>의 스킨 <BY>다프네 인 더 키친</BY>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
