import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12308" date="2023-10-07"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY>의 <BG>스킨 보기</BG>에서 일부 스킨의 아이콘이 표시되지 않는 문제가 수정되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>보련</BY>의 스킨 <BR>방과 후 미용사 보련</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-10 님프</BY>의 스킨 <BR>드림위버 모던 컬렉션 : 느와르</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-07 01:07:23</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
