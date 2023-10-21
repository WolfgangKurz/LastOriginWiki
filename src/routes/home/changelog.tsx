import { FunctionalComponent } from "preact";

import IconArrowRight from "@/components/bootstrap-icon/icons/ArrowRight";
import ChangelogItem from "@/routes/changelog/components/changelog-item";
import { BY, BR, BO, BB, BG } from "@/routes/changelog/components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12346" date="2023-10-21"
		site={ <>
			<li>사이트가 로드되지 않는 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12318" date="2023-10-21"
		new={ <>
			<li>신규 장비 정보가 추가되었습니다.</li>
			<li>일부 전투원의 승급 정보가 추가되었습니다.</li>
			<li>신규 총력전 정보가 추가되었습니다.</li>
			<li>신규 장식품 정보가 추가되었습니다.</li>
			<li>
				세계정보에 스토리 뷰어가 추가되었습니다.<br />
				<strong class="text-danger">이 기능은 아직 개발중입니다.</strong>
			</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		bugfix={ <>
			<li>신규 이벤트 지역의 드랍처가 전투원정보에 반영되지 않은 문제를 수정했습니다.</li>
		</> }
		site={ <>
			<li>오류가 있던 일본어가 아마도 정상화되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-10-21 05:40:11</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
