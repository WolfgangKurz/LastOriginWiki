import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";
import IconFilter from "@/components/bootstrap-icon/icons/Filter";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12646" date="2024-09-21"
		new={ <>
			<li><BY>전투원정보</BY>의 상세 검색에 <BP>스탯</BP> 조건이 추가되었습니다.</li>
			<li><BY>전투원정보</BY>의 상세 검색의 <BP>등급</BP> 및 <BP>스탯</BP> 조건에 <BG>A ~ B</BG> 연산자가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				버프 보기 및 필터에서 <BB>피격 시</BB> 조건을
				<BB>피격 시</BB>, <BB>피격 후</BB>, <BB>액티브 스킬로 피격 시</BB>로
				세부 분류를 추가했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12646" date="2024-09-20"
		update={ <>
			<li>전투원 <BY>디오네</BY>의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>장비정보</BY>의 팝업에서 등급을 변경해도 팝업 내용이 갱신되지 않던 문제가 수정되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
