import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11703" date="2022-05-09"
		new={ <>
			<li>전투원 <span class="badge bg-warning text-dark">스파토이아</span>의 승급 정보가 추가되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">A-87 밴시</span>의 승급 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>전투원 <span class="badge bg-warning text-dark">스파토이아</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">장화</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>전투원 <span class="badge bg-warning text-dark">아이아스</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">장화</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon...? : 설레는 break time</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-09 13:06:26</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11701" date="2022-05-06"
		bugfix={ <>
			<li>세계 정보의 지도가 표시되지 않던 문제를 수정했습니다.</li>
			<li>세계 정보의 지역 선택 색상이 잘못 표시되던 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>세계 정보의 지역 정보에 개방 조건이 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11696" date="2022-05-04"
		bugfix={ <>
			<li>세계 정보의 이벤트 지도가 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 수정되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-04 04:42:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11695" date="2022-05-02"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">에라토</span>가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <span class="badge bg-warning text-dark">오르카 데이트 공모전</span>의 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 수정되었습니다.</li>
			<li>가챠 시뮬레이터의 정보가 수정되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">프리가</span>의 스킨
				<span class="badge bg-danger">프리가 엘븐 밀크 파견 근무</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">타이런트</span>의 스킨
				<span class="badge bg-danger">귀염살벌한 소녀폭군</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">P-3M 운디네</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon : 천재 파티시에</span>의 중파 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-05-02 12:59:57</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
