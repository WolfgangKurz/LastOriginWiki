import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12271" date="2023-07-26"
		site={ <>
			<li>사이트 접속 문제가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12249" date="2023-07-26"
		site={ <>
			<li>git에서의 데이터 변경점을 쉽게 보기 위해 데이터를 json에서 yaml로 변경했습니다.</li>
		</> }
		new={ <>
			<li>신규 전투원 <BY>알키오네</BY>의 정보가 추가되었습니다.</li>
			<li>신규 장식품의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 소개문 배경에 소속 로고를 추가했습니다.</li>
			<li>이벤트 <BY>꿈꾸는 인어의 섬 2부</BY> 일부 지역의 정보가 갱신되었습니다.</li>
			<li>적 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li><BY>엠피트리테</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>살라시아</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><BY>P-24 핀토</BY>의 소개 보이스가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-07-26 03:40:37</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
