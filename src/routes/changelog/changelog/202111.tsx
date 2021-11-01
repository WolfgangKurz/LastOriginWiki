import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 11216" date="2021-11-01"
		skin={ <>
			<li>
				<span class="badge bg-warning text-dark">해체자 아자즈</span>의 스킨
				<span class="badge bg-danger">5월의 여왕 : 색다른 경험</span>의 로비 애니메이션 정보 및 영상이 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li><span class="badge bg-light text-dark">KST 2021-11-01 14:30:01</span>까지의 사용자 참여로 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
