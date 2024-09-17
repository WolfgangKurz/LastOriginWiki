import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";
import IconFilter from "@/components/bootstrap-icon/icons/Filter";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12644" date="2024-09-18"
		bugfix={ <>
			<li>전투원 <BY>포이</BY>의 스킨 <BR>수영복 콘테스트 : 포이는 물이 싫어</BR>가 잘못 표시되는 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12643" date="2024-09-09"
		bugfix={ <>
			<li>일부 버프 목록을 포함하는 페이지가 동작하지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12640" date="2024-09-06"
		new={ <>
			<li>
				<BY>전투원정보</BY> 페이지에 <BP><IconFilter /> 버프별 보기</BP> 표시 방식이 추가되었습니다.<br />
				전투원을 특정 버프 타입으로 묶어서 표시합니다.<br />
				표시될 내용이 매우 많아 브라우저 성능 문제가 있을 수 있습니다.
			</li>
		</> }
		bugfix={ <>
			<li>일부 스킨의 표정이 표시되지 않던 문제를 수정했습니다.</li>
			<li>버프 정보에서 모든 반격 종류가 <BR>반격</BR> 하나로 표시되던 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
