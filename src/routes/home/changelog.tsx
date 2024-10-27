import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12702" date="2024-10-27"
		bugfix={ <>
			<li>스킨 뷰어에서 일부 애니메이션을 포함한 스킨이 다운로드 버튼이 표시되지 않는 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12701" date="2024-10-26"
		bugfix={ <>
			<li><BY>획득처</BY>와 같은 일부 뱃지의 링크가 작동하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12698" date="2024-10-25"
		new={ <>
			<li>신규 전투원 <BY>멜트</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>꿈꾸지 않는 인어를 위해</BY>의 2부 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>장비 <BY>스파이크 실드</BY>의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>멜트</BY>의 스킨 <BR>몽환의 꽃 : 료칸 종업원 유카타 테라피</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>므네모시네</BY>의 스킨 <BR>칵테일 한잔 : 아이시 버레스크 의상</BR>의 정보가 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12696" date="2024-10-24"
		new={ <>
			<li>
				카메라 한계 영역이 있는 스킨의 경우,
				<BG>다운로드<sup>+</sup></BG>에서 저장할 때 카메라 한계 영역에 맞춰 자르는 옵션이 추가되었습니다.<br />
				기본 ON 입니다.
			</li>
		</> }
		bugfix={ <>
			<li>스킨 뷰어에서 일부 전투원의 회전/왜곡이 잘못 적용되어 표시되는 문제를 수정했습니다.</li>
			<li><BG>다운로드<sup>+</sup></BG>에서 일부 전투원이 잘린 상태로 다운로드 되는 문제를 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
