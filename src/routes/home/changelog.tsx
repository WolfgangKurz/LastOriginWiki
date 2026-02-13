import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13071" date="2026-02-14"
		update={ <>
			<li>이벤트 <BY>당신의 쐐기에 진심을</BY>이 복각되었습니다.</li>
			<li>
				전투원 <BY>K180 셀주크</BY>, <BY>S5 기간테스</BY>, <BY>AT72 라인리터</BY>,
				<BY>Mr 알프레드</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>프리가</BY>의 스킨 <BR>Frigga with Hunny : 허니를 위한 홈웨어​</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>니드호그</BY>의 스킨 <BR>악룡 심판의 권위자 : 미드가르드 수호형 복원 모델</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-02-14 01:05:12</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
