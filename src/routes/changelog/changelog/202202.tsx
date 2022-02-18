import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11528" date="2022-02-19"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">프랭스터 머큐리</span>의 정보가 추가되었습니다.</li>
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
				<span class="badge bg-danger">칠죄종 : 해방된 각인</span>의 가격 정보가 추가되었습니다.
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
