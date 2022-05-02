import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";

const Changelog: FunctionalComponent = () => <>
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
