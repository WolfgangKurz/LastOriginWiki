import { FunctionalComponent } from "preact";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13196" date="2026-08-31"
		bugfix={ <>
			<li><BY>세계정보</BY>의 일부 스토리 노드에서 드롭 정보가 표시되던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13194" date="2026-08-28"
		new={ <>
			<li>신규 이벤트 <BY>침묵하는 늪</BY>의 정보가 추가되었습니다.</li>
			<li>신규 전투원 <BY>셀시</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>항습 보조 시스템</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>꿈꾸지 않는 인어를 위해</BY>가 종료되었습니다.</li>
			<li><BY>특이체 토벌</BY>의 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 장비의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>일부 스토리 대사가 수정되었습니다.</li>
		</> }
		site={ <>
			<li><BY>세계 정보</BY>에서 이벤트 배너를 원스토어/구글 플레이 버전으로 전환할 수 있게 되었습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>셀시</BY>의 스킨 <BR>수줍음 많은 님프, 셀시 : 에코 프렌들리 란제리</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>C-33 안드바리</BY>의 스킨 <BR>안녕, 나의 작은 소녀 : 수상한 물약</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>P-22 하르페이아</BY>의 스킨 <BR>We’ve got the beat, we can’t be beat!</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-08-28 04:26:38</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13190" date="2026-08-13"
		update={ <>
			<li>가챠 시뮬레이터 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY>이 상시 이벤트로 분류되던 점을 수정했습니다.</li>
			<li><BY>스킨 뷰어</BY>에서 <BR>소품 2 가리기</BR> 설정이 일반 다운로드에 반영되지 않던 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>천공의 엘라</BY>의 스킨 <BR>Azure Wave : 휴가용 수영복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-08-13 22:52:31</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13186" date="2026-08-07"
		site={ <>
			<li>전체적으로 성능 개선 및 메모리 사용량 최적화를 진행했습니다.</li>
			<li>전투원 획득처 테이블의 헤더가 스크롤을 따라다니도록 변경했습니다.</li>
		</> }
		bugfix={ <>
			<li>버프 목록의 스택/삭제 표기가 제대로 정렬되지 않던 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13182" date="2026-08-04"
		bugfix={ <>
			<li>전투원 <BY>티타니아 프로스트</BY>의 스킬 정보가 갱신되지 않은 점을 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 13181" date="2026-08-01"
		new={ <>
			<li>이벤트 <BY>꿈꾸지 않는 인어를 위해</BY>의 복각이 시작되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>Sisters Of Omerta</BY>가 종료되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원/스킨의 작가명이 잘못 입력되어있던 점을 수정했습니다.</li>
			<li>목록/스킨 정보 등 일부 페이지에서 전투원 얼굴/SD 이미지의 품질에 문제가 있던 것을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>닥터</BY>의 스킨 <BR>DARK OCEAN VIBE : 엔지니어의 수영복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-07-31 23:03:09</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
