import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11909" date="2022-10-06"
		update={ <>
			<li>이벤트 <BY>Project ORCA, 별밤의 무대</BY>의 정보가 갱신되었습니다.</li>
			<li>일부 이벤트 맵의 드랍 정보 및 적 정보가 갱신되었습니다.</li>
			<li>모바일 환경에서 사용이 불편했던 UI 일부를 수정했습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>아우로라</BY>의 스킨
				<BR>주의! 아우로라 탈의 중!</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>AO-2 레이븐</BY>의 스킨
				<BR>꿈속에서의 밀회</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>엘리 퀵핸드</BY>의 스킨
				<BR>기대하던 피크닉</BR>의 중파 정보가 추가되었습니다.
			</li>
		</> }
	/>
</>;
export default Changelog;
