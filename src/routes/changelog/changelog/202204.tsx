import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11658" date="2022-04-11"
		bugfix={ <>
			<li>경험치 계산기가 작동하지 않던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11650" date="2022-04-11"
		bugfix={ <>
			<li>획득처가 잘못 표기되던 문제를 수정했습니다.</li>
			<li>획득처의 링크가 잘못 연결된 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11646" date="2022-04-11"
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">천아</span>의 스킨
				<span class="badge bg-danger">CAFE Horizon...? : 널 위한 part time</span>의 로비 애니메이션 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-warning text-dark">A-1 블러디 팬서</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-warning text-dark">P-18 실피드</span>의 서약 대사 세트가 추가되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2022-04-11 13:16:11</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11642" date="2022-04-10"
		new={ <>
			<li>일부 전투원의 전투원 스킨 정보에 표정 정보 테스트 추가.</li>
		</> }
	/>
	<ChangelogItem title="Build 11640" date="2022-04-08"
		delete={ <>
			<li>확장 패시브 정보가 삭제되었습니다.</li>
		</> }
		bugfix={ <>
			<li>누락된 스킨 아이템 이름 및 설명, 일러스트레이터 정보가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11636" date="2022-04-08"
		update={ <>
			<li>전투원 정보의 UI 일부가 수정되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11596" date="2022-04-04"
		bugfix={ <>
			<li>버프 표시에서 버프 이름이 잘못 표시되던 문제를 수정했습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 11591" date="2022-04-04"
		new={ <>
			<li>신규 전투원 <span class="badge bg-warning text-dark">유린의 소니아</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">미니 펜리르</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">미니 스노우 페더</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">미니 포이</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">미니 프리가</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">미니 히루메</span>의 정보가 추가되었습니다.</li>
			<li>신규 장비 <span class="badge bg-warning text-dark">미니 블랙 웜</span>의 정보가 추가되었습니다.</li>
			<li>
				전투원정보의 <span class="badge bg-warning text-dark">링크/스킬</span> 탭 하단에
				<span class="badge bg-warning text-dark">확장 패시브 스킬</span> 정보가 추가되었습니다.
			</li>
			<li>신규 이벤트 <span class="badge bg-warning text-dark">~폭풍을 부르는~ 미니 컴패니언의 습격</span>의 정보가 추가되었습니다.</li>
		</> }
		update={ <>
			<li>
				일부 적의 <span class="badge bg-danger">행동 패턴</span> 정보가 추가되었습니다.<br />
				행동 패턴 데이터는 순차적으로 추가될 예정입니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">설비 부품 제작실</span> 설비의
				편성 제한 정보가 갱신되었습니다.
			</li>
		</> }
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">성벽의 하치코</span>의 스킨
				<span class="badge bg-danger">새해 복덩이 하치코</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">N2E-888 아라크네</span>의 스킨
				<span class="badge bg-danger">거미 여왕의 재림</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">닥터</span>의 스킨
				<span class="badge bg-danger">Dr.닥터맨</span>의 정보가 추가되었습니다.
			</li>
			<li>
				<span class="badge bg-warning text-dark">C-11 스카라비아</span>의 기본 스킨의
				중파 이미지 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-04-04 17:08:13</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
