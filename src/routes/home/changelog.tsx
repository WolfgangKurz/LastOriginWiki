import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13040" date="2025-12-07"
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>데카르트 보이저 삿갓</BY>의 스킨 <BR>그대를 지키는 용맹 무사 : 구군복 커스텀</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-12-07 03:40:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13037" date="2025-11-21"
		new={ <>
			<li>신규 전투원 <BY>라미아</BY>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>상시 이벤트 정보가 갱신되었습니다.</li>
			<li>소모품 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>라미아</BY>의 스킨 <BR>파이터 오브 하트! : 레슬링 경기복</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>익스프레스 76</BY>의 스킨 <BR>특급 배송 당일 출고 서비스 : 스키니 데이트 룩</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-11-21 22:04:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
