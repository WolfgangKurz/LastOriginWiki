import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11555" date="2022-03-01"
		bugfix={ <>
			<li>
				세계정보에서
				<span class="badge bg-warning text-dark">영원한 겨울의 방주(바니? 니바! 우당탕탕 역바니 대소동)</span> 이벤트가
				표시되지 않는 점을 수정했습니다.</li>
		</> }
	/>
</>;
export default Changelog;
