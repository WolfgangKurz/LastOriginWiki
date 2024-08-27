import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12632" date="2024-08-28"
		new={ <>
			<li><BY>장비정보</BY>에서 장비의 별명으로 검색할 수 있게 되었습니다.</li>
			<li><BY>장비정보</BY>의 장비 팝업에 장비의 별명이 표시됩니다. (장비명 하단)</li>
		</> }
		bugfix={ <>
			<li><BY>전투원정보</BY>의 <BP>상세 검색</BP>이 올바르게 동작하지 않는 문제가 수정되었습니다.</li>
			<li><BY>장비정보</BY>의 장비 팝업이 가끔씩 스테이터스/버프 목록이 표시되지 않는 문제가 수정되었습니다.</li>
			<li>전투원 <BY>디오네</BY>의 스킨 <BR>간호사? 디오네</BR>의 출시일 정보가 누락된 점이 수정되었습니다.</li>
		</> }
		update={ <>
			<li><BY>전투원정보</BY>의 <BP>스킨 보기</BP>의 <BG>상세 검색</BG>의 정렬이 최신순으로 변경되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
