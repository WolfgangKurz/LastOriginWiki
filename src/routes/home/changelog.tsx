import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13205" date="2026-10-11"
		new={ <>
			<li>신규 로비 배경 <BY>검은 성전</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>일부 스킨의 가격 정보가 갱신되었습니다.</li>
			<li>전투원 <BY>글라시아스</BY>의 서약 및 호감도 정보가 갱신되었습니다.</li>
			<li>일부 장비의 획득처 정보가 갱신되었습니다.</li>
			<li>일부 이벤트의 탐색 정보가 갱신되었습니다.</li>
			<li>이벤트 <BY>밤을 걷는 소녀</BY>의 일부 스토리 대사와 연출 정보가 갱신되었습니다.</li>
			<li>변칙 <BY>누전</BY>의 효과 정보가 갱신되었습니다.</li>
		</> }
		site={ <>
			<li><BY>스킨 뷰어</BY>의 비-Spine 로비 애니메이션 모델을 기존 Unity 웹 플레이어에서 다른 모델과 동일한 Pixi 기반 렌더러로 통합했습니다.</li>
			<li>통합한 렌더러를 <BY>스토리 플레이어</BY>에도 적용했습니다.</li>
			<li><BY>스토리 플레이어</BY>에서 로비 애니메이션이 포함된 모든 모델의 애니메이션이 재생되도록 개선했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>에이르</BY>의 스킨 <BR>글램핑장으로 찾아 온 테디베어</BR>의 중파 정보가 추가되었습니다.</li>
			<li>전투원 <BY>라미엘</BY>의 스킨 <BR>두려워 말라 : 타락으로 되찾은 실체</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-10-11 05:50:26</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
			<li>전투원 <BY>에이르</BY>의 한국어 소개 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>라미엘</BY>의 스킨 <BR>두려워 말라 : 타락으로 되찾은 실체</BR>의 한국어 보이스가 추가되었습니다.</li>
			<li>전투원 <BY>글라시아스</BY>의 한국어 서약 보이스가 추가되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
