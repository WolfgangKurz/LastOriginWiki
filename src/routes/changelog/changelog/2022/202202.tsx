import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";
import Icons from "@/components/bootstrap-icon";

import ChangelogItem from "../../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11553" date="2022-02-28"
		update={ <>
			<li><span class="badge bg-warning text-dark">세인트 오르카의 비밀작전</span> 이벤트가 상시 이벤트 목록에 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">영원한 겨울의 방주(바니? 니바! 우당탕탕 역바니 대소동)</span> 이벤트가 종료되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">쿠노이치 제로</span>의 스킨
				<span class="badge bg-danger">흐트러진 꽃</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-02-28 13:44:07</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11551" date="2022-02-27"
		bugfix={ <>
			<li>장비정보에서 변화의 성소 장비가 표시되지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11550" date="2022-02-25"
		bugfix={ <>
			<li>적 정보에서 검색이 작동하지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11546" date="2022-02-25"
		new={ <>
			<li>장비정보에 이름 검색이 추가되었습니다.</li>
		</> }
		update={ <>
			<li>적 정보의 "적 목록"과 "적 그룹 목록"을 페이지에서 탭으로 변경했습니다.</li>
			<li>적 목록의 필터를 갱신했습니다.</li>
			<li>적 목록의 적 표기를 수정했습니다.</li>
			<li>전투원 정보의 제조 시간이 AGS의 경우 제조에 필요한 자원이 함께 표시되도록 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>적 그룹 목록에 누락된 이벤트를 추가했습니다.</li>
			<li>적 목록 및 적 팝업에서 "변화의 성소"가 등장 스테이지에 표시되지 않던 점을 수정했습니다.</li>
			<li>적 정보에서 적 스킬이 올바르지 않게 표시되던 점을 수정했습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-02-25 01:22:37</span> 기준의 일본어 음성 및 대사를 추가했습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-02-25 01:22:37</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11539" date="2022-02-22"
		update={ <>
			<li>전투원 대사의 "日本語", "日本語 DMM" 표기를 "日本語 N", "日本語 R"로 변경했습니다.</li>
			<li>전투원 대사에 "소개" 유형이 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-02-22 02:11:10</span> 기준의 일본어 음성 및 대사를 추가했습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-02-22 02:11:10</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11537" date="2022-02-21"
		bugfix={ <>
			<li>
				다음과 같은 일부 버프 조건이 올바르지 않게 표기되는 문제를 수정했습니다.
				<ul>
					<li>전투원 역할이 전투원 유형으로 표시되던 문제를 수정</li>
				</ul>
			</li>
		</> }
	/>
	<ChangelogItem title="Build 11536" date="2022-02-21"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">프랭스터 머큐리</span>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>이벤트 기간이 표시되지 않던 문제를 수정했습니다.</li>
			<li>
				다음과 같은 일부 버프 조건이 올바르지 않게 표기되는 문제를 수정했습니다.
				<ul>
					<li>인접 그리드에 아군이 존재하는 경우 <Icons.ArrowRight class="mx-1" /> 인접 그리드에 아군이 n체 이상 존재하는 경우</li>
					<li>버프 조건에서 이로운/해로운 효과 구분이 증가/감소로 표시되는 문제 <Icons.ArrowRight class="mx-1" /> 표기 삭제 후 증감으로 통일</li>
					<li>??? 로 표시되는 문제 <Icons.ArrowRight class="mx-1" /> 표시되도록 수정</li>
				</ul>
			</li>
		</> }
		update={ <>
			<li>전투원 정보의 <span class="badge bg-dark">제조 시간</span> 표시를 크게 변경했습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">아우로라</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon...? : 파견근무</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">천아</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon...? : 널 위한 part time</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">T-3 레프리콘</span>의 스킨
				<span class="badge bg-danger">하계 전투복 레프리콘</span>의 중파 이미지가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">레모네이드 알파</span>의 스킨
				<span class="badge bg-danger">칠죄종 : 해방된 각인</span>의 가격 정보가 수정되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-02-19 01:17:55</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11524" date="2022-02-14"
		site={ <>
			<li>전투원 정보의 <span class="badge bg-warning text-dark">상한 확장</span>의 위치를 변경했습니다.</li>
		</> }
		update={ <>
			<li>전투원 <span class="badge bg-warning text-dark">아우로라</span>의 승급 정보 및 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">성벽의 하치코</span>의 승급 정보 및 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">CT2199W 폴른</span>의 승급 정보 및 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">C-79G 하베트롯</span>의 승급 정보가 갱신되었습니다.</li>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 드랍 정보 일부가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>전투원 <span class="badge bg-warning text-dark">에키드나</span>의 스킬 수치가 잘못 표기되어있던 문제를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">레모네이드 알파</span>의 스킨
				<span class="badge bg-danger">칠죄종 : 해방된 각인</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-02-14 13:02:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11518" date="2022-02-07"
		new={ <>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 2부 정보가 추가되었습니다.</li>
			<li>신규 전투원 <span class="badge bg-warning text-dark">C-79G 하베트롯</span>의 정보가 추가되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">장화</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon...? : 설레는 break time</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">B-7 스트라토 엔젤</span>의 스킨
				<span class="badge bg-danger">오르카 바니 : 바니걸 최고!</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">니바</span>의 스킨
				<span class="badge bg-danger">오르카 바니...? : 진심 모드</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">엘리 퀵핸드</span>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">B-7 스트라토 엔젤</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">니바</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-02-07 13:03:37</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
