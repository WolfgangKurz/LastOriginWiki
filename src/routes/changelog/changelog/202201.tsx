import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11470" date="2022-01-04"
		bugfix={ <>
			<li>세계 정보에서 일부 지역의 표현이 올바르지 않던 점을 수정했습니다.</li>
			<li>경험치 계산기에서 스킬 보너스 이름이 올바르지 않게 표시되던 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>세계 정보에 스킬 경험치와 사령관 경험치 표기가 추가되었습니다.</li>
			<li>경험치 계산기에 <span class="badge bg-warning text-dark">이벤트 보너스</span> 입력이 추가되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11467" date="2022-01-03"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">사이클롭스 프린세스</span>의 정보가 추가되었습니다.</li>
			<li>이벤트 <span class="badge bg-warning text-dark">영원한 겨울의 방주</span>의 2부 정보가 추가되었습니다.</li>
			<li>전투원 정보에 로봇 전투원의 연구 계통도가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 스킬 위력 관련 버프 표시가 올바르지 않게 표현되는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>전투원 스킨의 부가 정보의 순서가 일부 변경되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">글라시아스</span>의 스킨 <span class="badge bg-danger">필멸의 운명</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">AC-6 후사르</span>의 스킨 <span class="badge bg-danger">오르카 바니 : 두근두근 Make up</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">천아</span>의 기본 스킨의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-01-03 11:11:03</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
