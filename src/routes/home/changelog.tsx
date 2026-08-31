import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 13196" date="2026-08-31"
		bugfix={ <>
			<li><BY>세계정보</BY>의 일부 스토리 노드에서 드롭 정보가 표시되던 점을 수정했습니다.</li>
			<li><BY>세계정보</BY>에서 일부 노드를 선택하면 페이지가 올바르게 동작하지 않던 점을 수정했습니다.</li>
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
</>;
export default Changelog;
