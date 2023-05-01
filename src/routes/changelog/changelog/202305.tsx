import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12126" date="2023-05-02"
		new={ <>
			<li>신규 전투원 <BY>천우의 하토르</BY>의 정보가 추가되었습니다.</li>
		</> }
		bugfix={ <>
			<li>시뮬레이터에서 모든 위치가 항상 선택된 상태로 표시되는 문제를 수정했습니다.</li>
		</> }
		update={ <>
			<li>일부 전투원의 스킬 정보가 갱신되었습니다.</li>
			<li>총력전 목록이 내림차순으로 보이도록 수정하였습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>장화</BY>의 스킨 <BY>뒤바뀐 운명 : 장화</BY>의 이미지가 갱신되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2023-05-02 04:17:26</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
