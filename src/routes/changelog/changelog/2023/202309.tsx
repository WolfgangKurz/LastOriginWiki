import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12295" date="2023-09-20"
		new={ <>
			<li>신규 적 <BY>래비저</BY>의 정보가 추가되었습니다.</li>
			<li>이벤트 <BY>오르카 필름 페스티벌</BY>의 2구역 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				전투원 <BY>올리비아 스타수어</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>
				전투원 <BY>테일러 클로스컷</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>
				전투원 <BY>드라큐리나</BY>의 스킬 정보가 갱신되었습니다.
			</li>
			<li>
				전투원 <BY>보련</BY>의 스킬 정보가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-09-14 02:52:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12293" date="2023-09-15"
		bugfix={ <>
			<li>
				일부 스킨의 대사가 표시되지 않는 문제를 수정했습니다.
			</li>
		</> }
	/>
	<ChangelogItem title="Build 12291" date="2023-09-14"
		skin={ <>
			<li>
				<BY>T-3 레프리콘</BY>의 스킨 <BR>신입 교사 레프리콘</BR>의 이미지가 수정되었습니다.
			</li>
			<li>
				<BY>랜서 미나</BY>의 스킨 <BR>P-Strikers! 미나</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>LRL</BY>의 스킨 <BR>빨간 모자 프린세스</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><BY>LRL</BY>의 <BR>고스로리 LRL</BR> 스킨의 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-09-14 02:52:13</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12289" date="2023-09-07"
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
			<li>일부 일본어 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-09-07 01:01:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
