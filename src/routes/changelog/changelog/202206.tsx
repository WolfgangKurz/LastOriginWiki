import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11779" date="2022-06-01"
		site={ <>
			<li>일부 데이터 처리를 개선했습니다.</li>
		</> }
		update={ <>
			<li>모바일 환경에서 SD 선택 창이 화면을 가리던 문제를 수정했습니다.</li>
			<li>
				<BY>콘스탄챠 S2</BY>, <BY>세라피아스 앨리스</BY>, <BY>바닐라 A1</BY>, <BY>오베로니아 레아</BY>,
				<BY>시저스 리제</BY>, <BY>다프네</BY>, <BY>티타니아 프로스트</BY>의 SD가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
