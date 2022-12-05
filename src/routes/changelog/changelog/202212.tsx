import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB } from "../components/badges";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11972" date="2022-12-05"
		skin={ <>
			<li>
				<BY>샬럿</BY>의 스킨 <BR>그리드 걸 샬럿</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>사이클롭스 프린세스</BY>의 스킨 <BR>코드네임 프린세스</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>T-4 케시크</BY>의 스킨 <BR>단둘만의 온천</BR>의 중파 이미지가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2022-12-05 14:35:57</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
