import { FunctionalComponent } from "preact";

import Locale from "@/components/locale";
import RarityBadge from "@/components/rarity-badge";

import ChangelogItem from "../components/changelog-item";
import Icon from "@/components/bootstrap-icon";
import { BY, BR, BO, BB, BG } from "../components/badges";
import { AssetsRoot } from "@/libs/Const";

const Changelog: FunctionalComponent = () => <>
	<ChangelogItem title="Build 12017" date="2023-01-03"
		site={ <>
			<li>Spine 로비 애니메이션의 로딩 시간을 약 8.5배 개선했습니다.</li>
			<li>보리차가 약간 밍밍해졌습니다.</li>
		</> }
		skin={ <>
			<li>
				<BY>마법소녀 매지컬 모모</BY>의 스킨 <BR>마법소녀 매지컬 모모 해외 특집</BR>의 정보가 추가되었습니다.
			</li>
			<li>
				<BY>마법소녀 매지컬 백토</BY>의 스킨 <BR>마법소녀 매지컬 백토 해외 특집</BR>의 정보가 추가되었습니다.
			</li>
		</> }
		dialogue={ <>
			<li>일부 전투원의 일어 성우 정보가 갱신되었습니다.</li>
			<li><span class="badge bg-light text-dark">KST 2023-01-03 01:58:12</span>까지 추가/수정된 대사들이 반영되었습니다.</li>
		</> }
	/>
</>;
export default Changelog;
