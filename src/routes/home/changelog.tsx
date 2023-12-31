import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12416" date="2023-12-31"
		bugfix={ <>
			<li>전투원 정보의 스킨 보기의 출시일이 표시되지 않는 문제를 수정했습니다.</li>
			<li>일부 전투원의 출시일이 입력되지 않은 문제를 수정했습니다.</li>
			<li>홈의 출시 스킨이 표시되지 않던 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>마법소녀 매지컬 백토</BY>의 스킨 <BR>검게 물든 달맞이 꽃</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12413" date="2023-12-28"
		new={ <>
			<li>신규 전투원 <BY>사레나</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>표준형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>돌격형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>방어형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>정밀형 전투 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>고기동 메뉴버 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>전황 분석 시스템 SSS</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 스킨의 출시일 및 작가 정보가 누락된 점이 수정되었습니다.</li>
			<li>경험치 계산기에서 메인스토리가 작동하지 않던 문제가 수정되었습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 승급 정보가 갱신되었습니다.</li>
			<li>
				경험치 계산기에 <BY>윤회의 우로보로스</BY> 경험치 보너스 항목이 추가되었습니다.<br />
				<BY>마이티 R</BY>의 경우 버프가 조건에 따라 여러개로 적용되어 경험치 보너스 계산이 복잡해 추가되지 않았습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<BY>퀵 카멜</BY>의 스킨 <BR>모범? 불량? 퀵 카멜</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
