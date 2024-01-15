import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12423" date="2024-01-15"
		bugfix={ <>
			<li>전투원 <BY>쿠노이치 엔라이</BY>의 외전 <BO>누군가의 손길이 닿아</BO>가 누락된 문제를 수정했습니다.</li>
			<li>전투원 <BY>생명의 세레스티아</BY>의 스킨 <BY>세레스티아 카우걸</BY>의 중파가 표시되지 않던 문제를 수정했습니다.</li>
			<li>
				전투원 <BY>프로스트 서펀트</BY>의 스킨 <BY>죽으나 사나 불조심</BY>의
				미검열 중파 다운로드가 소품 가리기에 영향이 없던 문제를 수정했습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일본어 소개 및 대사 보이스가 추가/갱신되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
