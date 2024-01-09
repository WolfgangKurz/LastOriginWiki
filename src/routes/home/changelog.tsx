import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12421" date="2024-01-10"
		update={ <>
			<li>가챠 시뮬레이터 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 스토리 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>일부 스킨의 가격 정보가 갱신되었습니다.</li>
			<li>
				<BY>AL레이스</BY>의 스킨 <BY>AL 큐트 : 레이스 화이트</BY>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>프로스트 서펀트</BY>의 스킨 <BY>죽으나 사나 불조심</BY>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2024-01-10 03:38:33</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
