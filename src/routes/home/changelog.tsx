import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12293" date="2023-09-15"
		bugfix={ <>
			<li>
				일부 스킨의 대사가 표시되지 않는 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12291" date="2023-09-14"
		skin={ <>
			<li>
				<BY>T-3 레프리콘</BY>의 스킨 <BR>신입 교사 레프리콘</BR>의 이미지가 수정되었습니다.
			</li>
			<li>
				<BY>랜서 미나</BY>의 스킨 <BR>P-Strikers! 미나</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>LRL</BY>의 스킨 <BR>빨간 모자 프린세스</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><BY>LRL</BY>의 <BR>고스로리 LRL</BR> 스킨의 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-09-14 02:52:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
