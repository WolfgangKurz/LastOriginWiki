import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12313" date="2023-10-11"
		new={ <>
			<li>신규 이벤트 <BY>멸망 이후의 커튼콜</BY>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>갈라테아</BY>의 스킨 <BR>가을, 그리고 갈라테아</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		site={ <>
			<li>오류가 있던 일본어가 아마도 정상화되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-11 04:01:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
