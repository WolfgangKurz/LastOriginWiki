import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12401" date="2023-12-08"
		update={ <>
			<li>스토리 뷰어에 로비 애니메이션이 없는 일러스트의 표정 표현이 추가되었습니다.</li>
			<li>스토리 뷰어에 로비 애니메이션이 없는 일러스트의 크기 및 위치가 조정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12399" date="2023-12-07"
		bugfix={ <>
			<li>전투원 및 장비의 획득처에 클리어 보상이 누락된 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12398" date="2023-12-07"
		new={ <>
			<li>신규 배경 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 12지역 스토리가 갱신되었습니다.</li>
			<li>일부 전투원의 드랍처 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>쿠노이치 엔라이</BY>의 스킨 <BR>미스오르카 : 누군가의 손길이 닿아</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>신속의 칸</BY>의 스킨 <BR>불량 학생 칸</BR>의 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
