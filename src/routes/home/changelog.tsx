import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12870" date="2025-01-08"
		bugfix={ <>
			<li>누락된 "소속 부대 정보가 없는" 외전 정보가 추가되었습니다.</li>
			<li>스토리 플레이어에서 Spine 모델이 표시되지 않던 점이 수정되었습니다.</li>
		</> }
		update={ <>
			<li>세계 정보 페이지의 UI가 일부 조정되었습니다.</li>
			<li>스토리 플레이어의 텍스트 자간이 약간 개선되었습니다.</li>
			<li>스토리 플레이어의 줄 간격이 약간 개선되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12867" date="2025-01-05"
		bugfix={ <>
			<li>적 행동 정보에서 버프 번호가 이전 방식으로 표기되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12865" date="2025-01-05"
		update={ <>
			<li>
				<BY>버프 보기</BY>에서 표시되는 <BB>버프 번호</BB> 기준을 변경했습니다.
			</li>
			<li>
				<BY>버프 보기</BY> 기능의 <BB>특정 버프 조건</BB>의 표기가 개선되었습니다.<br />
				이제 조건을 클릭하면 해당 버프가 어디에서 유래됐는지 표시됩니다.
			</li>
			<li>데스크탑 환경에서 전투원 스킬 정보 테이블의 스킬명 표기가 개선되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
