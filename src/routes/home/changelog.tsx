import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12425" date="2024-01-16"
		new={ <>
			<li>신규 장비<BY>강습형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>관측 장비 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>초정밀 조준기 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>망원 조준장치 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비<BY>니트로 SSS 3000</BY>의 정보가 추가되었습니다.</li>
			<li>신규 스토리가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>스토리 뷰어의 폰트 관련한 코드를 일부 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원의 얼굴이 올바르지 않게 표시되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12423" date="2024-01-15"
		bugfix={ <>
			<li>전투원 <BY>쿠노이치 엔라이</BY>의 외전 <BR>누군가의 손길이 닿아</BR>가 누락된 문제를 수정했습니다.</li>
			<li>전투원 <BY>생명의 세레스티아</BY>의 스킨 <BR>세레스티아 카우걸</BR>의 중파가 표시되지 않던 문제를 수정했습니다.</li>
			<li>
				전투원 <BY>프로스트 서펀트</BY>의 스킨 <BR>죽으나 사나 불조심</BR>의
				미검열 중파 다운로드가 소품 가리기에 영향이 없던 문제를 수정했습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일본어 소개 및 대사 보이스가 추가/갱신되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
