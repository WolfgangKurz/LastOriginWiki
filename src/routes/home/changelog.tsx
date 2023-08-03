import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12275" date="2023-08-03"
		new={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>의 3부 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>엠피트리테</BY>의 스킨 <BR>바다의 여신 엠피트리테</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>살라시아</BY>의 스킨 <BR>바다의 여신 살라시아</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-08-03 01:11:21</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
