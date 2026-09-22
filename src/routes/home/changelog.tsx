import { FunctionalComponent } from "preact";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13202" date="2026-09-23"
		new={ <>
			<li>이벤트 <BY>밤을 걷는 소녀</BY>의 복각이 시작되었습니다.</li>
			<li>신규 전투원 <BY>에이르</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <BY>호르몬 촉진 장치 &lt;딸랑이&gt;</BY>의 정보가 추가되었습니다.</li>
			<li>신규 변칙 <BY>누전</BY>의 정보가 추가되었습니다.</li>
			<li>신규 소모품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li><BY>특이체 토벌</BY>의 정보가 갱신되었습니다.</li>
			<li>일부 장비의 획득처 정보가 갱신되었습니다.</li>
			<li>일부 스토리 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li><BY>스킨 뷰어</BY>의 고급 보기에서 기본 스킨 정보로 이동할 수 없던 점을 수정했습니다.</li>
		</> }
		skin={ <>
			<li>전투원 <BY>에이르</BY>의 스킨 <BR>글램핑장으로 찾아 온 테디베어</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>다크엘븐 포레스트레인져</BY>의 스킨 <BR>나이트풀의 색, 엘븐 밀크의 색: 휴가용 수영복</BR>의 정보가 추가되었습니다.</li>
			<li>전투원 <BY>엘븐 포레스트메이커</BY>의 스킨 <BR>비치사이드의 색, 엘븐 밀크의 색: 휴가용 수영복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2026-09-23 04:49:44</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
