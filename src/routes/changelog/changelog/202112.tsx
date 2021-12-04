import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11406" date="2021-12-05"
		site={ <>
			<li>페이지 로드 과정을 조금 더 최적화했습니다.</li>
		</> }
		bugfix={ <>
			<li>일부 전투원의 무기 표기가 칸을 벗어나는 문제를 수정했습니다.</li>
		</> }
		new={ <>
			<li>모든 버프 표시에 <span class="badge bg-event-exchange-old">버프 추가 방식 표시</span>가 추가되었습니다..</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-12-05 00:04:27</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
