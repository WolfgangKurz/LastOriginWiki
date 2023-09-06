import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12288" date="2023-09-07"
		new={ <>
			<li>신규 이벤트 <BY>오르카 필름 페스티벌</BY>의 정보가 추가되었습니다.</li>
			<li>전투원 스킨 보기의 상점 팝업 이미지의 검열/미검열 보기가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>T-3 레프리콘</BY>의 스킨 <BR>신입 교사 레프리콘</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>천우의 하토르</BY>의 스킨 <BR>하토르 밀크걸</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>로열 아스널</BY>의 스킨 <BR>클로스컷 스페셜 컬렉션 : 스위트 스티키 서머</BR>의 이미지가 갱신되었습니다.
			</li>
			<li>
				<BY>퀸오브메인</BY>의 스킨 <BR>물 만난 사자</BR>의 이미지가 갱신되었습니다.
			</li>
			<li>
				<BY>바르그</BY>의 스킨 <BR>CAFE Horizon...? : 두근 두근 work time</BR>의 이미지가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><BY>T-3 레프리콘</BY>의 <BR>하계 전투복 레프리콘</BR> 스킨의 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-09-07 01:01:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
