import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12362" date="2023-10-31"
		new={ <>
			<li>신규 장비 <BY>출력 강화 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>연산 강화 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>내 충격 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>반응 강화 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>분석 회로 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>회로 내구 강화 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>회로 최적화 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 적 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>드라큐리나</BY>의 스킨 <BR>백귀야행의 가희</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>프로스트 서펀트</BY>의 스킨 <BR>죽으나 사나 불조심</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>전투원 <BY>프리가</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>에이다 Type-G</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>카엔</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>드라큘리나</BY>의 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>프로스트 서펀트</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-10-31 21:55:37</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
