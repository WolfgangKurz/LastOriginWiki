import { FunctionalComponent } from "preact";

import { AssetsRoot } from "@/libs/Const";

import ChangelogItem from "../../components/changelog-item";
import { BY, BR, BO, BB, BG, BP } from "../../components/badges";

import Locale from "@/components/locale";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12957" date="2025-05-09"
		new={ <>
			<li>신규 스토리 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>스토리 플레이어에서 일부 전투원의 표정/얼굴이 표시되지 않던 점을 수정했습니다.</li>
		</> }
		update={ <>
			<li>이벤트 <BY>꿈꾸는 인어의 섬</BY> 복각 정보가 추가되었습니다.</li>
			<li>일부 스킬의 정보가 갱신되었습니다.</li>
			<li>일부 적의 정보가 갱신되었습니다.</li>
			<li>누락된 BGM 정보를 추가했습니다.</li>
			<li>일부 일러스트레이터의 이름을 다듬었습니다.</li>
		</> }
		site={ <>
			<li>
				전투원정보 내 스킨 정보의 일러스트레이터 표기가 개편되었습니다.<br />
				이제, 일러스트레이터 관련 링크가 추가되었습니다.
			</li>
			<li>
				이제 스킨 뷰어가 데스크탑 등의 환경(DevicePixelRatio &lt; 2.0)에서 슈퍼샘플링되어 표시됩니다.<br />
				최소 렌더링 DevicePixelRatio 값을 2.0으로 조정했습니다.<br />
				스킨 뷰어가 너무 찢어지게 보이던 문제의 개선을 기대합니다.<br />
				이 변경은 시험적으로 적용되었으며, 되돌아갈 수 있습니다.
			</li>
		</> }
		skin={ <>
			<li>전투원 <BY>A-14B 스프리건</BY>의 스킨 <BR>갸루피스(Girl Peace) ! : 방과후 하계 교복</BR>의 정보가 추가되었습니다.</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2025-05-09 04:21:19</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
	<ChangelogItem title="Build 12954" date="2025-05-06"
		bugfix={ <>
			<li>
				<BY>전투원정보</BY> &gt; <BY>버프별 보기</BY> 메뉴가 동작하지 않던 점을 수정했습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
