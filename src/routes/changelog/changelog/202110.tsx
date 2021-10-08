import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11123" date="2021-10-08"
		update={ <>
			<li>일부 전투원의 승급 정보가 갱신되었습니다.</li>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 서약 대사가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-10-08 21:40:16</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11118" date="2021-10-03"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">엘리 퀵핸드</span>의 정보가 추가되었습니다.</li>
			<li>이벤트 <span class="badge bg-warning text-dark">연꽃 위에 피는 장미 2부</span>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={<>
			<li><span class="badge bg-warning text-dark">스킬 버프 목록</span>에서 일부 표기가 잘못되어있던 문제를 수정했습니다.</li>
		</>}
		update={ <>
			<li><span class="badge bg-warning text-dark">T-13 알비스</span>의 스킬 정보가 갱신되었습니다.</li>
			<li>
				<span class="badge bg-warning text-dark">전투원정보</span> 및 <span class="badge bg-warning text-dark">적정보</span>의
				검색이 대소문자를 구별하지 않도록 수정되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">M-5 이프리트</span>의 스킨 <span class="badge bg-danger">하계 전투복 이프리트</span>의 중파 이미지가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">시라유리</span>의 스킨 <span class="badge bg-danger">칠흑의 화살</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">니키 트레이시</span>의 스킨 <span class="badge bg-danger">왜곡된 시선</span>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>모든 전투원의 스킨 서약 대사가 인게임 텍스트로 교체되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2021-10-03 04:36:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
